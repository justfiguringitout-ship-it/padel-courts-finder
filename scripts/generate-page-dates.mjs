#!/usr/bin/env node
/**
 * Generate src/data/page-dates.json — a route -> last-modified-date manifest
 * built from git history, consumed by src/app/sitemap.ts.
 *
 * WHY THIS EXISTS
 * ---------------
 * sitemap.ts used to stamp `new Date()` on every entry, so all ~714 URLs shared
 * one identical <lastmod> that changed on every deploy. That tells Google the
 * whole site changed at once, every time, which is the textbook signal for
 * "this site's lastmod carries no information" — Google's documented response is
 * to discount lastmod for the property entirely. As of 2026-08-10, 90 URLs sat in
 * "Discovered - currently not indexed" having never been crawled at all.
 *
 * A page's real last-modified date is when the code or data behind it last
 * changed. Git already knows that, so we read it from git and freeze it into a
 * committed manifest. The manifest is committed (rather than shelling out to git
 * during the build) because Vercel clones shallowly — `git log` there can return
 * nothing for files untouched in recent commits, which would silently produce
 * worse dates than we already have.
 *
 * REGENERATE after shipping content or club-data changes:
 *   npm run sitemap:dates
 * then commit the updated src/data/page-dates.json alongside your change.
 * Forgetting is safe: the dates simply stay at their previous values, which is a
 * far better failure mode than every URL claiming it changed this second.
 */

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(repoRoot, "src/data/page-dates.json");
const COURT_DATA = "src/data/padel-courts.ts";

/** Last commit date (ISO, date-only) that touched `file`, or null. */
function gitDate(file) {
  const abs = path.join(repoRoot, file);
  if (!existsSync(abs)) return null;
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", file], {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return out ? out.slice(0, 10) : null;
  } catch {
    return null;
  }
}

/** Newest of several dates; nulls ignored. */
function newest(...dates) {
  const valid = dates.filter(Boolean).sort();
  return valid.length ? valid[valid.length - 1] : null;
}

// Routes rendered by a single page.tsx map 1:1 to that file.
function routeFile(route) {
  return `src/app${route === "/" ? "" : route}/page.tsx`;
}

const manifest = {};

// --- Static + blog routes: one page.tsx each, so git gives a true per-page date.
const staticRoutes = [
  "/", "/search", "/blog", "/advertise", "/indoor-padel-courts", "/padel-lessons",
  "/buy-a-padel-court", "/state-of-us-padel-2026", "/badge", "/how-to-play",
  "/rules", "/equipment", "/faq", "/get-started", "/get-started/glossary", "/about",
];

// Blog slugs are DERIVED by scanning src/app/blog/*/page.tsx and WRITTEN to
// blog-slugs.json for sitemap.ts to consume. The filesystem is the source of
// truth — reading the JSON back in here would mean a new blog page could never
// enter the manifest until someone hand-edited the JSON (the drift this script
// exists to prevent).
const blogDir = path.join(repoRoot, "src/app/blog");
const blogSlugs = readdirSync(blogDir, { withFileTypes: true })
  .filter((e) => e.isDirectory() && existsSync(path.join(blogDir, e.name, "page.tsx")))
  .map((e) => e.name)
  .sort();
writeFileSync(
  path.join(repoRoot, "src/data/blog-slugs.json"),
  JSON.stringify(blogSlugs, null, 2) + "\n"
);

for (const route of staticRoutes) {
  const d = gitDate(routeFile(route));
  if (d) manifest[route] = d;
}
for (const slug of blogSlugs) {
  const d = gitDate(routeFile(`/blog/${slug}`));
  if (d) manifest[`/blog/${slug}`] = d;
}

// --- Data-driven routes have no file of their own: each is produced by a
// template plus the libs that decide which routes exist and what they contain.
//
// STRUCTURAL vs PRESENTATIONAL (added 2026-09-07, SEO-INDEX-003)
// --------------------------------------------------------------
// This used to key template dates off `newest(<template page.tsx>, <lib>,
// padel-courts.ts)`. That was wrong, and it re-broke the exact problem this
// script exists to solve: on 2026-08-28 a purely presentational commit (video
// heroes) touched all four template page.tsx files, and 653 of 721 sitemap URLs
// jumped to the same lastmod. A second design commit on 2026-09-01 did it again.
// 91% of the sitemap was claiming it had changed within three days, and five new
// review pages sat in "Discovered - currently not indexed".
//
// A route's <lastmod> must answer "did what this URL SAYS change?", not "did any
// file that renders it change?". Adding a hero video changes neither a club's
// address nor a city's club list. So template dates now come ONLY from structural
// inputs — the libs that determine which routes exist and what data they carry.
// The template's own page.tsx is excluded.
//
// When a template edit really is a content change (adding an FAQ section to every
// club page, say), record it in TEMPLATE_CONTENT_CHANGES below. That keeps the
// honest case expressible without making every CSS tweak look like a rewrite.
const templates = {
  court: ["src/lib/court-adapter.ts"],
  state: ["src/lib/site-structure.ts"],
  city: ["src/lib/site-structure.ts"],
  padelNear: ["src/lib/metros.ts"],
};

// Deliberate, dated overrides: a template change that genuinely altered what the
// pages say. Format: key -> "YYYY-MM-DD". Add an entry only when the rendered
// *content* changed for every route in that family; never for styling, layout,
// imagery or animation.
const TEMPLATE_CONTENT_CHANGES = {
  // court: "2026-06-14",  // example: added the FAQ block to every club page
};

// --- Per-club dates: each /courts/<slug> gets its OWN date.
//
// Even with the structural split, keying all 332 club pages off the whole of
// padel-courts.ts means one club's phone-number fix re-dates the entire
// directory. So walk that file's git history and diff it record by record: a
// club's date is the last commit in which THAT club's record actually changed.
//
// Records are split on their `name:` line, not their opening brace: the braces
// are inconsistently indented in this file (115 at four spaces, 217 at two)
// whereas every one of the 332 `name:` lines sits at exactly four.
const COURT_RECORD_RE = /\n(?=    name: ")/;

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/** name -> record body, for one revision of padel-courts.ts. */
function parseRecords(content) {
  const out = new Map();
  for (const chunk of content.split(COURT_RECORD_RE)) {
    const m = chunk.match(/^    name: "(.*?)",$/m);
    if (!m) continue;
    // Trim at the record's own closing brace so the NEXT club's `id:` line does
    // not leak in — otherwise inserting one club anywhere would renumber the
    // tail of the file and re-date every club after it.
    const lines = chunk.split("\n");
    const end = lines.findIndex((l) => /^\s{2,4}\},?$/.test(l));
    out.set(m[1], (end === -1 ? lines : lines.slice(0, end)).join("\n"));
  }
  return out;
}

/** Every commit that touched the club data, oldest first: [sha, date]. */
const courtCommits = execFileSync(
  "git",
  ["log", "--reverse", "--format=%H %cI", "--", COURT_DATA],
  { cwd: repoRoot, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }
)
  .trim()
  .split("\n")
  .filter(Boolean)
  .map((line) => {
    const [sha, iso] = line.split(" ");
    return [sha, iso.slice(0, 10)];
  });

// Walk forward, stamping each club with the date its own record last changed.
const courtRecordDates = new Map();
let prevRecords = new Map();
for (const [sha, date] of courtCommits) {
  let content;
  try {
    content = execFileSync("git", ["show", `${sha}:${COURT_DATA}`], {
      cwd: repoRoot,
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
      stdio: ["ignore", "pipe", "ignore"],
    });
  } catch {
    continue; // file absent or renamed at this revision
  }
  const records = parseRecords(content);
  for (const [name, body] of records) {
    if (prevRecords.get(name) !== body) courtRecordDates.set(name, date);
  }
  prevRecords = records;
}

// Clubs present in HEAD get an explicit route date; anything since removed is
// simply not emitted.
const headRecords = parseRecords(readFileSync(path.join(repoRoot, COURT_DATA), "utf8"));
const courtStructuralDate = newest(
  ...templates.court.map(gitDate),
  TEMPLATE_CONTENT_CHANGES.court
);
const courtDatesBySlug = new Map();
for (const name of headRecords.keys()) {
  const d = newest(courtRecordDates.get(name), courtStructuralDate);
  if (!d) continue;
  const slug = slugify(name);
  courtDatesBySlug.set(slug, d);
  manifest[`/courts/${slug}`] = d;
}

manifest["__templates__"] = Object.fromEntries(
  Object.entries(templates).map(([key, files]) => [
    key,
    newest(...files.map(gitDate), TEMPLATE_CONTENT_CHANGES[key]),
  ])
);

// State, city and metro pages are club LISTINGS: sitemap.ts dates each from the
// newest of its own clubs' dates. This fallback is the floor for a route that has
// no clubs yet.
manifest["__fallback__"] =
  newest(...Object.values(manifest["__templates__"]), ...courtDatesBySlug.values()) ??
  new Date().toISOString().slice(0, 10);

writeFileSync(OUT, JSON.stringify(manifest, null, 2) + "\n");

const pageCount = Object.keys(manifest).filter((k) => !k.startsWith("__")).length;
const distinct = new Set(
  Object.entries(manifest)
    .filter(([k]) => !k.startsWith("__"))
    .map(([, v]) => v)
).size;
console.log(`page-dates.json: ${pageCount} explicit routes, ${distinct} distinct dates`);
console.log(`club pages with their own date: ${courtDatesBySlug.size}`);
console.log(`templates:`, manifest["__templates__"]);
console.log(`fallback: ${manifest["__fallback__"]}`);
