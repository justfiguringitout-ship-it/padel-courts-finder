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
import { readFileSync, writeFileSync, existsSync } from "node:fs";
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
const courtDataDate = gitDate(COURT_DATA);

// --- Static + blog routes: one page.tsx each, so git gives a true per-page date.
const staticRoutes = [
  "/", "/search", "/blog", "/advertise", "/indoor-padel-courts", "/padel-lessons",
  "/buy-a-padel-court", "/state-of-us-padel-2026", "/badge", "/how-to-play",
  "/rules", "/equipment", "/faq", "/get-started", "/get-started/glossary", "/about",
];

// Shared with sitemap.ts — one list, so the two can never drift apart.
const blogSlugs = JSON.parse(
  readFileSync(path.join(repoRoot, "src/data/blog-slugs.json"), "utf8")
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
// So a route's real last-modified date is the newest of ALL of those inputs.
//
// Listing the libs matters, not just the template. site-structure.ts is what
// determines which city pages exist at all — when PR #5 fixed it on 2026-08-10,
// three city pages came into existence. Keying off the template alone would have
// dated those brand-new pages 2026-07-16 and told Google not to bother, which is
// the exact opposite of what we want.
const templates = {
  court: [
    "src/app/courts/[slug]/page.tsx",
    "src/lib/court-adapter.ts",
  ],
  state: [
    "src/app/[state]/page.tsx",
    "src/lib/site-structure.ts",
  ],
  city: [
    "src/app/[state]/[city]/page.tsx",
    "src/lib/site-structure.ts",
  ],
  padelNear: [
    "src/app/padel-near/[city]/page.tsx",
    "src/lib/metros.ts",
  ],
};

manifest["__templates__"] = Object.fromEntries(
  Object.entries(templates).map(([key, files]) => [
    key,
    newest(...files.map(gitDate), courtDataDate),
  ])
);

// Fallback for anything not covered. A fixed date beats `new Date()`: it is at
// least honest and, critically, identical across deploys.
manifest["__fallback__"] =
  newest(courtDataDate, ...Object.values(manifest["__templates__"])) ??
  new Date().toISOString().slice(0, 10);

writeFileSync(OUT, JSON.stringify(manifest, null, 2) + "\n");

const pageCount = Object.keys(manifest).filter((k) => !k.startsWith("__")).length;
const distinct = new Set(
  Object.entries(manifest)
    .filter(([k]) => !k.startsWith("__"))
    .map(([, v]) => v)
).size;
console.log(`page-dates.json: ${pageCount} explicit routes, ${distinct} distinct dates`);
console.log(`templates:`, manifest["__templates__"]);
console.log(`fallback: ${manifest["__fallback__"]}`);
