/**
 * Apply owner edits that Dito approved, when auto-apply (GITHUB_TOKEN) is off.
 *
 *   node --import ./scripts/owner/register.mjs scripts/apply-owner-edits.ts            # list approved edits (no changes)
 *   node --import ./scripts/owner/register.mjs scripts/apply-owner-edits.ts --pending  # also list edits waiting for review
 *   node --import ./scripts/owner/register.mjs scripts/apply-owner-edits.ts --apply    # apply them all
 *   ... --apply --edit <uuid>                                                          # just one
 *
 * --apply, for each approved edit:
 *   1. updates the club in src/data/padel-courts.ts (ownerConfirmedDate = today)
 *      and saves approved photos as public/images/courts/<slug>-<n>.webp
 *   2. commits exactly those files: "Owner edit: <Club> (...)"
 *   3. adds the changelog entry citing that commit and commits it: "Changelog: <Club> (<hash>)"
 *   4. marks the edit applied in Supabase
 * It never pushes. Push (or merge) yourself, then Vercel deploys.
 *
 * Needs NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (read from .env.local).
 */
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import dotenv from "dotenv";
import {
  addChangelogEntry,
  buildCourtPatch,
  changelogEntryFor,
  patchCourtEntry,
  planPhotos,
  readEntryFields,
  todayEastern,
} from "@/lib/owner/apply-core";
import { changedFieldWords, describeChanges, sanitizeChanges, type CurrentListing } from "@/lib/owner/listing-fields";
import { getStore, type EditRow } from "@/lib/owner/store";
import { padelCourts } from "@/data/padel-courts";
import { generateSlug } from "@/lib/court-adapter";

const ROOT = path.resolve(import.meta.dirname, "..");
dotenv.config({ path: path.join(ROOT, ".env.local"), quiet: true });

const COURTS = "src/data/padel-courts.ts";
const CHANGELOG = "src/data/changelog.ts";
const IMAGES = "public/images/courts";

const args = process.argv.slice(2);
const apply = args.includes("--apply");
const showPending = args.includes("--pending");
const onlyEdit = args.includes("--edit") ? args[args.indexOf("--edit") + 1] : "";

function git(...a: string[]): string {
  return execFileSync("git", a, { cwd: ROOT, encoding: "utf8" }).trim();
}

function clubName(slug: string): string | undefined {
  return padelCourts.find((c) => generateSlug(c.name) === slug)?.name;
}

function print(edit: EditRow) {
  const name = clubName(edit.club_slug) ?? edit.club_slug;
  const changes = sanitizeChanges(edit.changes);
  console.log(`\n${edit.status.toUpperCase()}  ${name}  edit ${edit.id}  (${edit.email}, ${edit.created_at.slice(0, 10)})`);
  const cur = { name, city: "", state: "", ...(edit.current as object) } as CurrentListing;
  for (const l of describeChanges(cur, changes, { privateEmail: "show" })) console.log(`  ${l.label}: ${l.before}  ->  ${l.after}`);
  if (edit.photo_paths.length) console.log(`  Photos: ${edit.photo_paths.length}`);
  if (edit.note) console.log(`  Note: ${edit.note.replace(/\n/g, " ")}`);
}

async function main() {
  const store = getStore();
  if (!store) {
    console.error("Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (in .env.local) first.");
    process.exit(1);
  }
  let edits = await store.listEditsByStatus("approved");
  if (onlyEdit) edits = edits.filter((e) => e.id === onlyEdit);
  if (showPending) for (const e of await store.listEditsByStatus("pending")) print(e);
  if (!edits.length) {
    console.log("\nNo approved edits waiting to be applied.");
    return;
  }
  edits.forEach(print);
  if (!apply) {
    console.log("\nDry run. Add --apply to write, commit and mark these applied.");
    return;
  }

  const dirty = git("status", "--porcelain", "--", COURTS, CHANGELOG);
  if (dirty) {
    console.error(`\n${COURTS} or ${CHANGELOG} has uncommitted changes. Commit or discard them first.`);
    process.exit(1);
  }

  for (const edit of edits) {
    const name = clubName(edit.club_slug);
    if (!name) {
      console.error(`\nSkipping ${edit.id}: club ${edit.club_slug} is no longer in the data.`);
      continue;
    }
    const today = todayEastern();
    const courtsPath = path.join(ROOT, COURTS);
    const courtsSrc = readFileSync(courtsPath, "utf8");
    const current = readEntryFields(courtsSrc, name);
    const existing = readdirSync(path.join(ROOT, IMAGES));
    const photos = planPhotos(edit.club_slug, edit.photo_paths, existing, current);

    const written: string[] = [COURTS];
    for (const f of photos.files) {
      const bytes = await store.getPhoto(f.from);
      if (!bytes) throw new Error(`photo missing in storage: ${f.from}`);
      const dest = path.join(ROOT, f.to);
      if (existsSync(dest)) throw new Error(`refusing to overwrite ${f.to}`);
      writeFileSync(dest, bytes);
      written.push(f.to);
    }
    const patch = buildCourtPatch(edit.changes, current.openingHours, photos, today);
    writeFileSync(courtsPath, patchCourtEntry(courtsSrc, name, patch, today));

    const words = changedFieldWords(sanitizeChanges(edit.changes), photos.files.length);
    git("add", "--", ...written);
    git("commit", "-m", `Owner edit: ${name} (${words}), submitted by the club and approved by Dito`, "-m", `Edit ${edit.id}`, "--", ...written);
    const hash = git("rev-parse", "--short=7", "HEAD");

    const changelogPath = path.join(ROOT, CHANGELOG);
    writeFileSync(changelogPath, addChangelogEntry(readFileSync(changelogPath, "utf8"), changelogEntryFor(name, edit.changes, photos.files.length, today, hash)));
    git("add", "--", CHANGELOG);
    git("commit", "-m", `Changelog: ${name} (${hash})`, "--", CHANGELOG);

    await store.updateEdit(edit.id, { status: "applied", applied_at: new Date().toISOString() }, "approved");
    console.log(`\nApplied ${name} in ${hash} (+ changelog commit). Edit ${edit.id} marked applied.`);
  }
  console.log("\nDone. Run `npm run build`, then push or merge so Vercel deploys.");
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
