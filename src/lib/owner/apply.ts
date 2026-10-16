/**
 * Auto-apply an approved owner edit through the GitHub API (only when
 * GITHUB_TOKEN is set: a fine-grained PAT with Contents read/write on the
 * repo). Makes two commits on main, the same way the repo already works:
 *   1. "Owner edit: <Club> ..."  (padel-courts.ts + any photos)
 *   2. "Changelog: <Club> (<hash>)"  (changelog.ts, citing commit 1)
 * Vercel deploys main on its own after that.
 */
import {
  addChangelogEntry,
  buildCourtPatch,
  changelogEntryFor,
  patchCourtEntry,
  planPhotos,
  readEntryFields,
  todayEastern,
} from "@/lib/owner/apply-core";
import { changedFieldWords, sanitizeChanges } from "@/lib/owner/listing-fields";
import type { EditRow, OwnerStore } from "@/lib/owner/store";

const COURTS_PATH = "src/data/padel-courts.ts";
const CHANGELOG_PATH = "src/data/changelog.ts";
const IMAGES_DIR = "public/images/courts";

export function autoApplyEnabled(): boolean {
  return !!process.env.GITHUB_TOKEN;
}

function repo(): string {
  return process.env.GITHUB_REPO || "justfiguringitout-ship-it/padel-courts-finder";
}

function branch(): string {
  return process.env.GITHUB_BRANCH || "main";
}

async function gh<T>(method: string, path: string, body?: unknown, accept = "application/vnd.github+json"): Promise<T> {
  const res = await fetch(`https://api.github.com/repos/${repo()}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
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

async function rawFile(path: string, ref: string): Promise<string> {
  return gh<string>("GET", `/contents/${path}?ref=${ref}`, undefined, "application/vnd.github.raw+json");
}

async function blob(content: string, encoding: "utf-8" | "base64"): Promise<string> {
  const r = await gh<{ sha: string }>("POST", "/git/blobs", { content, encoding });
  return r.sha;
}

async function commitFiles(
  parent: string,
  parentTree: string,
  files: Array<{ path: string; sha: string }>,
  message: string
): Promise<{ sha: string; tree: string }> {
  const tree = await gh<{ sha: string }>("POST", "/git/trees", {
    base_tree: parentTree,
    tree: files.map((f) => ({ path: f.path, mode: "100644", type: "blob", sha: f.sha })),
  });
  const commit = await gh<{ sha: string; tree: { sha: string } }>("POST", "/git/commits", {
    message,
    tree: tree.sha,
    parents: [parent],
  });
  return { sha: commit.sha, tree: commit.tree.sha };
}

export interface ApplyResult {
  applied: boolean;
  commit?: string;
  error?: string;
}

async function applyOnce(edit: EditRow, clubName: string, store: OwnerStore): Promise<ApplyResult> {
  const today = todayEastern();
  const ref = await gh<{ object: { sha: string } }>("GET", `/git/ref/heads/${branch()}`);
  const headSha = ref.object.sha;
  const head = await gh<{ tree: { sha: string } }>("GET", `/git/commits/${headSha}`);

  const courtsSrc = await rawFile(COURTS_PATH, headSha);
  const current = readEntryFields(courtsSrc, clubName);

  let existing: string[] = [];
  if (edit.photo_paths.length) {
    const listing = await gh<Array<{ name: string }>>("GET", `/contents/${IMAGES_DIR}?ref=${headSha}`);
    existing = listing.map((f) => f.name);
  }
  const photos = planPhotos(edit.club_slug, edit.photo_paths, existing, current);
  const patch = buildCourtPatch(edit.changes, current.openingHours, photos, today);
  const newCourts = patchCourtEntry(courtsSrc, clubName, patch, today);

  const files: Array<{ path: string; sha: string }> = [{ path: COURTS_PATH, sha: await blob(newCourts, "utf-8") }];
  for (const f of photos.files) {
    const bytes = await store.getPhoto(f.from);
    if (!bytes) throw new Error(`photo missing in storage: ${f.from}`);
    files.push({ path: f.to, sha: await blob(bytes.toString("base64"), "base64") });
  }

  const words = changedFieldWords(sanitizeChanges(edit.changes), photos.files.length);
  const c1 = await commitFiles(
    headSha,
    head.tree.sha,
    files,
    `Owner edit: ${clubName} (${words}), submitted by the club and approved by Dito\n\nEdit ${edit.id}`
  );

  const changelogSrc = await rawFile(CHANGELOG_PATH, headSha);
  const short = c1.sha.slice(0, 7);
  const newChangelog = addChangelogEntry(changelogSrc, changelogEntryFor(clubName, edit.changes, photos.files.length, today, short));
  const c2 = await commitFiles(c1.sha, c1.tree, [{ path: CHANGELOG_PATH, sha: await blob(newChangelog, "utf-8") }], `Changelog: ${clubName} (${short})`);

  await gh("PATCH", `/git/refs/heads/${branch()}`, { sha: c2.sha, force: false });
  return { applied: true, commit: short };
}

/** Never throws: returns applied=false with a reason, and the edit stays "approved". */
export async function applyEditViaGitHub(edit: EditRow, clubName: string, store: OwnerStore): Promise<ApplyResult> {
  if (!autoApplyEnabled()) return { applied: false, error: "GITHUB_TOKEN not set" };
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      return await applyOnce(edit, clubName, store);
    } catch (err) {
      const status = (err as { status?: number }).status;
      // 422 on the ref update = main moved under us; try once more from the new head.
      if (status === 422 && attempt === 0) continue;
      return { applied: false, error: err instanceof Error ? err.message : String(err) };
    }
  }
  return { applied: false, error: "main kept moving" };
}
