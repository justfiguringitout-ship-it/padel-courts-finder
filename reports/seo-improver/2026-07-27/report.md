# SEO Improver — weekly report, 2026-07-27

**Property:** https://www.padelcourtsfinder.com/
**Intended window:** 2026-06-29 → 2026-07-26 (28 days, US, all devices)
**Data source:** none reachable this run — measurement blocked (see §5). Verification done via git + live-site curl checks.
**Prior run:** 2026-07-23 (baseline).

---

## 1. Executive summary

**Rankings could not be measured this run.** All three data paths failed: Ahrefs still has **0 API units** (trial, resets 2026-08-18), the Ahrefs↔GSC integration returns empty/no-data on both project IDs, and the user's Chrome — though connected — hung for 300s on every real navigation/screenshot (non-interactive scheduled run). No positions were invented; `rankings.csv` carries last week's positions forward in `previous_position` with the current position left blank and `status=unmeasured`.

But the run was **not** wasted, because the one thing that changed since last week is the thing that mattered most: **`gh` is now installed and authenticated.** Last week's two highest-confidence recommendations — **SEO-STRIKE-001** and **SEO-CTR-001** — had actually been *implemented in the working tree* by the 2026-07-23 loop but were **stranded uncommitted** because `gh` was unavailable to open a PR. They were never shipped and are **not live in production** (confirmed by curl: `/new-york` still serves the old title).

**The single most important action:** review and merge **[PR #3](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/3)**, which this run committed and opened from those drafted changes. Merging deploys the intermediate-racket-guide depth fix (a monetized page) and the guide-shaped state titles. That is the highest-leverage move available and it requires only a human review + merge.

---

## 2. Movement since last run

**Unmeasurable this run** — no rankings source was reachable, so no week-over-week deltas can be computed against the 2026-07-23 baseline. `status` is `unmeasured` for all 67 tracked keywords, not `flat` (which would falsely imply "measured, no change").

What *is* verifiable without a rankings tool:

- **Production title tags are unchanged from baseline** (curl, 2026-07-27):
  - `/new-york` → `26 Best Padel Courts in New York | Find Padel Near Me | Padel Courts Finder` (still the **old** generic template — SEO-CTR-001 not live)
  - `/blog/best-padel-rackets-intermediate` → `Best Padel Rackets for Intermediate Players (2026) — Top 5 Upgrades` (title intentionally unchanged; the body-depth additions of SEO-STRIKE-001 are also not live — uncommitted)
  - `/california/los-angeles` → `5 Best Padel Courts in Los Angeles, CA | Find Padel Near Me` (still worst-CTR big-metro page from baseline; SEO-CANNIBAL-001 untouched)
- **Indexability is healthy.** All money pages return HTTP 200 with self-referential canonicals and `index, follow`; `robots.txt` and `sitemap.xml` both 200. No indexation regressions to flag.

Because none of last week's on-page changes reached production, **no ranking response to them is even possible yet.** The baseline positions in `previous_position` remain the best estimate of where the site sits until a measurement source returns.

---

## 3. Did last week's changes work

Verified by inspecting the repo working tree and live site (not rankings — that source is down).

| ID | Status | Evidence |
|---|---|---|
| **SEO-STRIKE-001** (intermediate racket guide: spec table + singular-phrase H2) | **Drafted, not shipped → now in [PR #3](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/3)** | Code was present uncommitted in the working tree; `Link` import present; `npm run build` passes. Not live (curl confirms). This run committed it to branch `seo-improver/2026-07-27` and opened the PR. |
| **SEO-CTR-001** (guide-shaped titles for NY/CA/FL/TX/IL) | **Drafted, not shipped → now in [PR #3](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/3)** | `generateMetadata` in `[state]/page.tsx` had the `guideTitleStates` special-case uncommitted. `/new-york` still serves the old title in prod. Committed + PR'd this run. |
| **SEO-CTR-001 risk flag** (protect `padel courts nyc`, pos ~4.8 / 7.1%) | **Cannot verify** | The change keeps "Courts" in the title precisely to protect this query, but with no rankings source we can't confirm the query held. **Re-check first thing once a data source returns.** |
| **SEO-CANNIBAL-001** (Chicago/SF/LA blog vs directory titling) | **Not applied** | No title/link changes in the blog-guide or `/[state]/[city]` files; LA still worst-CTR big page. Deliberately deferred — lowest confidence of the four, wanted to verify STRIKE/CTR first. |

**Confounders to keep in mind when STRIKE-001/CTR-001 *do* ship and move:** the badge backlink program (wave 1 = 42 clubs), ongoing club-data enrichment, and new club photo/gallery work all continue in parallel. Any lift after merge must be weighed against those before crediting the on-page change.

---

## 4. This week's improvements

The dominant action this week was **shipping last week's stranded work**, not generating new recommendations (no fresh rankings data to source new ones from). Ordered by expected value:

### SEO-STRIKE-001 + SEO-CTR-001 — now shippable via [PR #3](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/3)
**Action required: human review + merge.** Both changes build clean and match existing component style. Full rationale in the PR body and in the 2026-07-23 report §4. Merging auto-deploys to prod — that is the intended outcome, but it's a human call because it's irreversible-ish and ships on last week's evidence (this run could not re-measure).
- Expected: intermediate guide pos 16 → 8–11 (monetized page); `/new-york` CTR ~1.8% → ~3% ≈ +80 clicks/mo.

### SEO-CANNIBAL-001 — still open, deliberately deferred again
No change this run. Keep as the next candidate **after** STRIKE/CTR-001 are live and measured, so we don't stack three untested title changes at once. Re-evaluate when a rankings source returns.

### Content gap (carried forward, not an action) — `padel court` informational intent
Still logged as a future *new-page* opportunity (court dimensions / cost to build / indoor vs outdoor), not a metadata change to an existing page. Unchanged from baseline.

**No new striking-distance / CTR / decay recommendations** are issued this run because doing so honestly requires current position + impression data, which was unavailable. Fabricating targets would violate the loop's core rule.

---

## 5. Blockers and data caveats

- **Ahrefs MCP — 0 units, still.** `subscription-info-limits-and-usage` returns `units_limit_workspace: 0`, `Trial`, reset **2026-08-18**. Every Site Explorer / SERP / volume call is dead until then. No `search_volume`, no `serp_features`, no competitive layer — those CSV columns are intentionally blank.
- **Ahrefs↔GSC integration — no data.** `gsc-keywords` returns an empty set on project **10101261** and `No GSC data available for the requested date range` on **10101264**. Same failure as the 2026-07-23 run; the headless GSC path is still dead.
- **User's Chrome — connected but unresponsive.** `list_connected_browsers` shows Browser 1 (macOS, local), and `tabs_context_mcp` responds, but **every** `navigate` and `screenshot` to Search Console hung and timed out at 300s. This is a non-interactive scheduled run; the Chrome GSC path only works in interactive sessions, as the skill notes. Not retried further to avoid burning the run on dead calls.
- **Net effect:** zero rankings measurement this week. Per the loop's rule #3, measurement was stopped and this report states the blocker plainly rather than inventing positions.
- **What was still verifiable (and done):** git working-tree inspection (found last week's stranded changes), `npm run build` (passes), and live-site curl checks (HTTP status, titles, canonical/robots, sitemap) — all healthy, all read-only.
- **Repo state note for Dito:** the two site-file edits that were sitting **uncommitted** in your working tree since 2026-07-23 are now **committed to branch `seo-improver/2026-07-27` and in [PR #3](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/3)** — not lost, just moved from "uncommitted draft" to "in review." Your other untracked WIP (DATA_ENRICHMENT_REPORT.md, club pictures, scripts, etc.) was left completely untouched. The repo is currently checked out on `main`.
- **Next run priority:** the moment Ahrefs units reset (2026-08-18) or an interactive GSC session is available, measure whether PR #3 (if merged) moved the intermediate guide and `/new-york` CTR, and explicitly confirm `padel courts nyc` held its ~4.8 position after the title change.
