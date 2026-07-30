# SEO Improver — weekly report, 2026-07-27

**Property:** https://www.padelcourtsfinder.com/
**Intended window:** 2026-06-29 → 2026-07-26 (28 days, US, all devices)
**Data source:** none reachable during the automated run — measurement blocked (see §5). Verification done via git + live-site curl checks.
**Prior run:** 2026-07-23 (baseline).
**Shipped:** PR #3 merged + deployed **2026-07-29 04:03 ET** (`b19f1e5`).
**Addendum 2026-07-30:** Dito supplied a manual GSC export for `padel courts nyc` — **see §6.** It is a
*pre-change baseline*, not a verification: the export ends Jul 28, the change deployed Jul 29.

---

## 1. Executive summary

**Rankings could not be measured this run.** All three data paths failed: Ahrefs still has **0 API units** (trial, resets 2026-08-18), the Ahrefs↔GSC integration returns empty/no-data on both project IDs, and the user's Chrome — though connected — hung for 300s on every real navigation/screenshot (non-interactive scheduled run). No positions were invented; `rankings.csv` carries last week's positions forward in `previous_position` with the current position left blank and `status=unmeasured`.

But the run was **not** wasted, because the one thing that changed since last week is the thing that mattered most: **`gh` is now installed and authenticated.** Last week's two highest-confidence recommendations — **SEO-STRIKE-001** and **SEO-CTR-001** — had actually been *implemented in the working tree* by the 2026-07-23 loop but were **stranded uncommitted** because `gh` was unavailable to open a PR. They were never shipped and are **not live in production** (confirmed by curl: `/new-york` still serves the old title).

**The single most important action:** ship those changes. This run committed them, opened **[PR #3](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/3)**, reviewed it, and — on Dito's explicit go-ahead — **squash-merged it to main (`b19f1e5`), deploying to production.** The intermediate-racket-guide depth fix (a monetized page) and the guide-shaped state titles are now live.

**Pre-merge review evidence (recorded for next run's attribution):**
- Spec-table products/prices cross-checked against the page's existing product cards — identical 5/5, no data drift.
- New titles are *shorter* than the ones they replace for all 5 states (e.g. New York 75 → 71 chars), with the distinguishing phrase inside Google's ~60-char cutoff.
- The `padel courts nyc` risk flagged on 2026-07-23 was assessed **low**: the H1 already read "Padel **Clubs** in New York" while the page ranked ~4.8 for that query, so the exact title bigram is demonstrably not load-bearing; the body carries "padel courts" 118× and the domain is padelcourtsfinder.com. Still the #1 thing to verify next run.

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
| **SEO-STRIKE-001** (intermediate racket guide: spec table + singular-phrase H2) | **Shipped 2026-07-29** (was drafted-but-stranded) | Code was present uncommitted in the working tree; `Link` import present; `npm run build` passes; table prices match existing cards 5/5. Committed to `seo-improver/2026-07-27`, PR #3, **squash-merged to main (`b19f1e5`) → deployed.** |
| **SEO-CTR-001** (guide-shaped titles for NY/CA/FL/TX/IL) | **Shipped 2026-07-29** (was drafted-but-stranded) | `generateMetadata` in `[state]/page.tsx` had the `guideTitleStates` special-case uncommitted. New titles verified shorter than old for all 5 states. **Merged via PR #3 → deployed.** |
| **SEO-CTR-001 risk flag** (protect `padel courts nyc`, pos ~4.8 / 7.1%) | **Assessed low, now live — must verify** | Risk judged low pre-merge (H1 already said "Clubs" yet ranked 4.8; "Courts" retained in new title; 118 body mentions). But with no rankings source this run, the actual response is **unverified**. **This is the single most important thing to check next run.** |
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
- **Next run priority:** PR #3 **merged and deployed on 2026-07-29 04:03 ET** (commit `b19f1e5`), so the measurement clock starts there — see §6 for why that date is load-bearing. The moment Ahrefs units reset (2026-08-18) or an interactive GSC session is available:
  1. Confirm **`padel courts nyc` held ~4.8 / 7.1% CTR** after the state-title change (the one live risk).
  2. Measure `/new-york` CTR against the 1.8% baseline (target ~3%).
  3. Measure `best padel racket(s) for intermediate players` against pos 16.0 / 27.7.
  4. **Attribution warning:** the badge backlink program, club enrichment, and photo work all continued through this window — do not credit the on-page change without weighing them.

---

## 6. Addendum — 2026-07-30: real GSC data for `padel courts nyc`

Dito manually exported the GSC Performance report filtered to the one query this loop flagged as
the live risk. Raw export archived alongside this report in
`gsc-export-2026-07-30-padel-courts-nyc/`. **This is the first real measurement in two runs** —
it partly lifts the §5 blocker, for one query.

**Export:** Search type Web, Last 28 days, Query = `padel courts nyc`. Chart runs **2026-07-01 → 2026-07-28**.

| Metric | Baseline (2026-07-23 report) | Measured (Jul 1–28) |
|---|---:|---:|
| Position | 4.8 | **4.55** |
| CTR | 7.1% | **7.23%** |
| Clicks | — | **12** |
| Impressions | — | **166** |

### This does NOT verify the title change — and that is the most important thing here

The change **deployed 2026-07-29 04:03 ET**. The data window **ends 2026-07-28**. There are
**zero post-deploy days in this export.** The query did not "hold" — it simply has not yet been
exposed to the new title. Recording 4.55 as evidence the change was safe would be a false positive.

What this export is genuinely worth: a **clean, precise pre-change baseline** for the at-risk query,
captured days before deploy. That is a better control than we had. Daily positions across the window
are stable (3.7–5.3, no decay trend), so the query was healthy right up to the change.

**Caveat:** the baseline window (Jun 23–Jul 20) and this one (Jul 1–Jul 28) overlap by ~20 days, so
the 4.8 → 4.55 delta is heavily damped and should be read as **flat**, not as a gain. `rankings.csv`
marks it `flat` accordingly.

### The risk is smaller than it looked — reward/risk strongly favors the change

`padel courts nyc` is worth **12 clicks / 166 impressions per 28 days**. The change targets
`/new-york`'s **6,640 impressions (~121 clicks)**, aiming 1.8% → ~3% CTR ≈ **+80 clicks/mo**.
Even a **total wipeout** of the at-risk query costs 12 clicks against an ~80-click upside. The
decision to ship was correct on expected value, independent of how the query moves.

Note also that this single query converts at **7.23% CTR vs. the page's 1.8% average** — direct
confirmation of the SEO-CTR-001 thesis: the old title matched "padel **courts** nyc" phrasing and
mismatched everything else `/new-york` ranks for.

### Device split — mildly encouraging for the new title

| Device | Clicks | Impressions | CTR | Position |
|---|---:|---:|---:|---:|
| Desktop | 7 | 72 | 9.72% | 4.29 |
| Mobile | 5 | 94 | 5.32% | 4.76 |

Mobile carries **more impressions but half the CTR**. Mobile SERPs truncate titles hardest
(~50 chars). The new title's distinguishing portion is **48 chars** vs. the old **52** — it fits
mobile *better*, so if anything the change should help where the weakness is. Unverified.

### Minor cannibalization signal (NYC)

Two other own-pages surfaced for this query: `/blog/best-padel-clubs-nyc` (pos 5) and
`/courts/golden-point-padel` (pos 1), 1 impression each of 166. Negligible in volume, but it
confirms the **SEO-CANNIBAL-001** pattern extends to NYC, not just Chicago/SF/LA. Not worth acting
on at this volume; noted so a future run does not rediscover it.

### How to actually measure this (method note for next run)

**Do not use "Last 28 days"** — it will keep diluting the signal with pre-change days until late
August. Filter GSC to a **custom range starting 2026-07-29**, and compare against the Jul 1–28
baseline in this file.

- GSC lags ~2–3 days, so the earliest read is ~**Aug 2–3** (noisy, 3–4 days of data).
- A meaningful read is ~**Aug 12–14** (≈2 weeks post-deploy).
- **To measure the upside** (not just the risk), an **unfiltered** Queries + Pages export for the
  whole property is needed — this filtered export cannot show whether `/new-york` CTR moved
  1.8% → 3%, which is the actual goal of SEO-CTR-001.
