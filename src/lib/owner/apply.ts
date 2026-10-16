/**
 * Auto-apply an approved owner edit through the GitHub API (only when
 * GITHUB_TOKEN is set: a fine-grained PAT with Contents read/write on the
 * repo). Makes two commits on main, the same way the repo already works:
 *   1. "Owner edit: <Club> ..."  (padel-courts.ts + any photos)
 *   2. "Changelog: <Club> (<hash>)"  (changelog.ts, citing commit 1)
 * Vercel deploys main on its own after that.
 *
 * Undo goes through the same path: "Undo owner edit: <Club>" puts back the
 * values recorded when the edit was applied, then a changelog commit notes
 * the revert.
 *
 * Local testing only: PCF_OWNER_DRY_GITHUB_DIR=/some/dir (ignored on Vercel)
 * swaps GitHub for a dry-run client that reads and writes files under that
 * directory and logs its "commits" to <dir>/.dry-git/log.json.
 */
import { randomBytes } from "node:crypto";
import { promises as fs } from "node:fs";
import nodePath from "node:path";
import {
  addChangelogEntry,
  buildCourtPatch,
  buildUndoPatch,
  changelogEntryFor,
  patchCourtEntry,
  planPhotos,
  readEntryFields,
  readEntryValues,
  revertChangelogEntryFor,
  todayEastern,
} from "@/lib/owner/apply-core";
import { changedFieldWords, sanitizeChanges } from "@/lib/owner/listing-fields";
import type { EditRow, OwnerStore } from "@/lib/owner/store";

const COURTS_PATH = "src/data/padel-courts.ts";
const CHANGELOG_PATH = "src/data/changelog.ts";
const IMAGES_DIR = "public/images/courts";

// ------------------------------------------------------------------ repo clients

export interface RepoClient {
  readonly kind: "github" | "dry-run";
  head(): Promise<{ sha: string; tree: string }>;
  readFile(path: string, ref: string): Promise<string>;
  listDir(path: string, ref: string): Promise<string[]>;
  blob(content: string, encoding: "utf-8" | "base64"): Promise<string>;
  commit(parent: string, parentTree: string, files: Array<{ path: string; sha: string }>, message: string): Promise<{ sha: string; tree: string }>;
  /** Moves the branch to `sha`; throws with status 422 when the branch moved meanwhile. */
  updateRef(sha: string): Promise<void>;
}

function repo(): string {
  return process.env.GITHUB_REPO || "justfiguringitout-ship-it/padel-courts-finder";
}

function branch(): string {
  return process.env.GITHUB_BRANCH || "main";
}

class GitHubClient implements RepoClient {
  readonly kind = "github" as const;
  constructor(private token: string) {}

  private async gh<T>(method: string, path: string, body?: unknown, accept = "application/vnd.github+json"): Promise<T> {
    const res = await fetch(`https://api.github.com/repos/${repo()}${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: accept,
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "padelcourtsfinder-owner-edits",
        ...(body ? { "Content-Type": "application/json" } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
      cache: "no-store",
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      const err = new Error(`github ${method} ${path.split("?")[0]} ${res.status}: ${text.slice(0, 200)}`) as Error & { status?: number };
      err.status = res.status;
      throw err;
    }
    if (accept.includes("raw")) return (await res.text()) as T;
    return (await res.json()) as T;
  }

  async head() {
    const ref = await this.gh<{ object: { sha: string } }>("GET", `/git/ref/heads/${branch()}`);
    const c = await this.gh<{ tree: { sha: string } }>("GET", `/git/commits/${ref.object.sha}`);
    return { sha: ref.object.sha, tree: c.tree.sha };
  }
  readFile(path: string, ref: string) {
    return this.gh<string>("GET", `/contents/${path}?ref=${ref}`, undefined, "application/vnd.github.raw+json");
  }
  async listDir(path: string, ref: string) {
    const listing = await this.gh<Array<{ name: string }>>("GET", `/contents/${path}?ref=${ref}`);
    return listing.map((f) => f.name);
  }
  async blob(content: string, encoding: "utf-8" | "base64") {
    return (await this.gh<{ sha: string }>("POST", "/git/blobs", { content, encoding })).sha;
  }
  async commit(parent: string, parentTree: string, files: Array<{ path: string; sha: string }>, message: string) {
    const tree = await this.gh<{ sha: string }>("POST", "/git/trees", {
      base_tree: parentTree,
      tree: files.map((f) => ({ path: f.path, mode: "100644", type: "blob", sha: f.sha })),
    });
    const c = await this.gh<{ sha: string; tree: { sha: string } }>("POST", "/git/commits", { message, tree: tree.sha, parents: [parent] });
    return { sha: c.sha, tree: c.tree.sha };
  }
  async updateRef(sha: string) {
    await this.gh("PATCH", `/git/refs/heads/${branch()}`, { sha, force: false });
  }
}

interface DryCommit {
  sha: string;
  parent: string;
  message: string;
  files: Array<{ path: string; blob: string }>;
}

/** Writes "commits" straight into a local folder. Never talks to GitHub. */
export class DryRunClient implements RepoClient {
  readonly kind = "dry-run" as const;
  private blobs = new Map<string, Buffer>();
  private pending = new Map<string, DryCommit>();
  constructor(private dir: string) {}

  private sha() {
    return randomBytes(20).toString("hex");
  }
  private file(p: string) {
    const full = nodePath.resolve(this.dir, p);
    if (!full.startsWith(nodePath.resolve(this.dir) + nodePath.sep)) throw new Error("path outside the dry-run folder");
    return full;
  }
  private get metaDir() {
    return nodePath.join(this.dir, ".dry-git");
  }
  async head() {
    await fs.mkdir(this.metaDir, { recursive: true });
    const f = nodePath.join(this.metaDir, "head");
    let sha = "";
    try {
      sha = (await fs.readFile(f, "utf8")).trim();
    } catch {
      sha = this.sha();
      await fs.writeFile(f, sha);
    }
    return { sha, tree: sha };
  }
  async readFile(p: string) {
    return fs.readFile(this.file(p), "utf8");
  }
  async listDir(p: string) {
    try {
      return await fs.readdir(this.file(p));
    } catch {
      return [];
    }
  }
  async blob(content: string, encoding: "utf-8" | "base64") {
    const sha = this.sha();
    this.blobs.set(sha, Buffer.from(content, encoding === "base64" ? "base64" : "utf8"));
    return sha;
  }
  async commit(parent: string, _tree: string, files: Array<{ path: string; sha: string }>, message: string) {
    const sha = this.sha();
    this.pending.set(sha, { sha, parent, message, files: files.map((f) => ({ path: f.path, blob: f.sha })) });
    return { sha, tree: sha };
  }
  async updateRef(sha: string) {
    const { sha: head } = await this.head();
    const chain: DryCommit[] = [];
    for (let at = sha; at !== head; ) {
      const c = this.pending.get(at);
      if (!c) throw Object.assign(new Error("dry-run: branch moved"), { status: 422 });
      chain.unshift(c);
      at = c.parent;
    }
    const logFile = nodePath.join(this.metaDir, "log.json");
    let log: Array<{ sha: string; message: string; files: string[] }> = [];
    try {
      log = JSON.parse(await fs.readFile(logFile, "utf8"));
    } catch {
      log = [];
    }
    for (const c of chain) {
      for (const f of c.files) {
        const bytes = this.blobs.get(f.blob);
        if (!bytes) throw new Error("dry-run: missing blob");
        await fs.mkdir(nodePath.dirname(this.file(f.path)), { recursive: true });
        await fs.writeFile(this.file(f.path), bytes);
      }
      log.push({ sha: c.sha, message: c.message, files: c.files.map((f) => f.path) });
    }
    await fs.writeFile(logFile, JSON.stringify(log, null, 2));
    await fs.writeFile(nodePath.join(this.metaDir, "head"), sha);
  }
}

function dryRunDir(): string | null {
  if (process.env.VERCEL) return null;
  const d = process.env.PCF_OWNER_DRY_GITHUB_DIR?.trim();
  return d ? d : null;
}

/** The configured repo client, or null when auto-publish is off. */
export function repoClient(): RepoClient | null {
  const dry = dryRunDir();
  if (dry) return new DryRunClient(dry);
  const token = process.env.GITHUB_TOKEN;
  return token ? new GitHubClient(token) : null;
}

export function autoApplyEnabled(): boolean {
  return !!dryRunDir() || !!process.env.GITHUB_TOKEN;
}

// ------------------------------------------------------------------ apply

export interface ApplyResult {
  applied: boolean;
  /** short sha of the edit commit */
  commit?: string;
  /** full sha of the edit commit */
  sha?: string;
  /** values the edit replaced (null = the property was absent); null when they could not be read */
  previous?: Record<string, unknown> | null;
  /** values the edit wrote */
  appliedValues?: Record<string, unknown>;
  error?: string;
}

async function applyOnce(edit: EditRow, clubName: string, store: OwnerStore, client: RepoClient): Promise<ApplyResult> {
  const today = todayEastern();
  const head = await client.head();

  const courtsSrc = await client.readFile(COURTS_PATH, head.sha);
  const current = readEntryFields(courtsSrc, clubName);

  const existing = edit.photo_paths.length ? await client.listDir(IMAGES_DIR, head.sha) : [];
  const photos = planPhotos(edit.club_slug, edit.photo_paths, existing, current);
  const patch = buildCourtPatch(edit.changes, current.openingHours, photos, today);
  let previous: Record<string, unknown> | null = null;
  try {
    previous = readEntryValues(courtsSrc, clubName, Object.keys(patch.set));
  } catch (err) {
    // Publishing still goes ahead; this edit just cannot be undone with one click.
    console.error(`apply: could not record previous values for edit ${edit.id}`, err instanceof Error ? err.message : err);
  }
  const newCourts = patchCourtEntry(courtsSrc, clubName, patch, today);

  const files: Array<{ path: string; sha: string }> = [{ path: COURTS_PATH, sha: await client.blob(newCourts, "utf-8") }];
  for (const f of photos.files) {
    const bytes = await store.getPhoto(f.from);
    if (!bytes) throw new Error(`photo missing in storage: ${f.from}`);
    files.push({ path: f.to, sha: await client.blob(bytes.toString("base64"), "base64") });
  }

  const words = changedFieldWords(sanitizeChanges(edit.changes), photos.files.length);
  const c1 = await client.commit(
    head.sha,
    head.tree,
    files,
    `Owner edit: ${clubName} (${words}), submitted by the club and approved by Dito\n\nEdit ${edit.id}`
  );

  const changelogSrc = await client.readFile(CHANGELOG_PATH, head.sha);
  const short = c1.sha.slice(0, 7);
  const newChangelog = addChangelogEntry(changelogSrc, changelogEntryFor(clubName, edit.changes, photos.files.length, today, short));
  const c2 = await client.commit(c1.sha, c1.tree, [{ path: CHANGELOG_PATH, sha: await client.blob(newChangelog, "utf-8") }], `Changelog: ${clubName} (${short})`);

  await client.updateRef(c2.sha);
  return { applied: true, commit: short, sha: c1.sha, previous, appliedValues: patch.set };
}

async function withRetry(fn: () => Promise<ApplyResult>): Promise<ApplyResult> {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      return await fn();
    } catch (err) {
      const status = (err as { status?: number }).status;
      // 422 on the ref update = main moved under us; try once more from the new head.
      if (status === 422 && attempt === 0) continue;
      return { applied: false, error: err instanceof Error ? err.message : String(err) };
    }
  }
  return { applied: false, error: "main kept moving" };
}

/** Never throws: returns applied=false with a reason, and the edit stays "approved". */
export async function applyEditViaGitHub(
  edit: EditRow,
  clubName: string,
  store: OwnerStore,
  client: RepoClient | null = repoClient()
): Promise<ApplyResult> {
  if (!client) return { applied: false, error: "GITHUB_TOKEN not set" };
  return withRetry(() => applyOnce(edit, clubName, store, client));
}

// ------------------------------------------------------------------ undo

export interface UndoResult {
  applied: boolean;
  commit?: string;
  sha?: string;
  /** fields that changed again since the edit went live (undo refused) */
  conflicts?: string[];
  error?: string;
}

/** Can this edit be undone with one click? */
export function undoAvailable(edit: EditRow): boolean {
  return (
    edit.status === "applied" &&
    !!edit.previous_values &&
    typeof edit.previous_values === "object" &&
    !!edit.applied_values &&
    typeof edit.applied_values === "object"
  );
}

async function undoOnce(edit: EditRow, clubName: string, client: RepoClient): Promise<UndoResult> {
  const today = todayEastern();
  const previous = edit.previous_values as Record<string, unknown>;
  const applied = edit.applied_values as Record<string, unknown>;
  const head = await client.head();
  const courtsSrc = await client.readFile(COURTS_PATH, head.sha);
  const now = readEntryValues(courtsSrc, clubName, Object.keys(applied));
  const plan = buildUndoPatch(previous, applied, now);
  if (plan.conflicts.length) return { applied: false, conflicts: plan.conflicts, error: `changed again since it went live: ${plan.conflicts.join(", ")}` };
  if (!Object.keys(plan.patch.set).length) return { applied: false, error: "nothing to undo" };

  const newCourts = patchCourtEntry(courtsSrc, clubName, plan.patch, today, { note: `owner edit reverted ${today}` });
  const c1 = await client.commit(
    head.sha,
    head.tree,
    [{ path: COURTS_PATH, sha: await client.blob(newCourts, "utf-8") }],
    `Undo owner edit: ${clubName}\n\nEdit ${edit.id}${edit.commit_sha ? `, reverts ${edit.commit_sha.slice(0, 7)}` : ""}`
  );
  const short = c1.sha.slice(0, 7);
  const changelogSrc = await client.readFile(CHANGELOG_PATH, head.sha);
  const appliedOn = edit.applied_at ? todayEastern(new Date(edit.applied_at)) : "";
  const newChangelog = addChangelogEntry(changelogSrc, revertChangelogEntryFor(clubName, appliedOn, today, short));
  const c2 = await client.commit(c1.sha, c1.tree, [{ path: CHANGELOG_PATH, sha: await client.blob(newChangelog, "utf-8") }], `Changelog: ${clubName} (${short})`);
  await client.updateRef(c2.sha);
  return { applied: true, commit: short, sha: c1.sha };
}

/** Never throws. The edit row is not touched here; the caller marks it reverted. */
export async function undoEditViaGitHub(edit: EditRow, clubName: string, client: RepoClient | null = repoClient()): Promise<UndoResult> {
  if (!client) return { applied: false, error: "GITHUB_TOKEN not set" };
  if (!undoAvailable(edit)) return { applied: false, error: "no saved values to restore for this edit" };
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      return await undoOnce(edit, clubName, client);
    } catch (err) {
      const status = (err as { status?: number }).status;
      if (status === 422 && attempt === 0) continue;
      return { applied: false, error: err instanceof Error ? err.message : String(err) };
    }
  }
  return { applied: false, error: "main kept moving" };
}
