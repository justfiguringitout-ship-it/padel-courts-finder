# SEO Improver — weekly report, 2026-08-10

**Property:** https://www.padelcourtsfinder.com/
**Measured window:** 2026-07-12 → 2026-08-08 (28 days, all countries, all devices)
**Prior run:** 2026-08-09, window 2026-07-11 → 2026-08-07
**Data source:** Google Search Console, read live through Chrome. **This is the first run in
five that reached GSC directly** — no manual export from Dito was needed. Ahrefs still at 0 units.

> **This run fired one day after the last one.** The scheduled loop ran 2026-08-10; the previous
> report ran 2026-08-09 and set its own next-run date at 2026-08-16. The measurement window
> therefore moved by exactly one day and **there is no meaningful week-over-week movement to
> report** — §2 says so plainly rather than dressing up noise. What made this run worth its time
> is §4: Chrome came back, which unlocked the URL-level indexing data the last report asked for,
> and that data exposed a live bug.

---

## 1. Executive summary

**Three city pages have been returning 404 while ranking on page 1 of Google.**

`/washington/kirkland`, `/washington/bellevue` and `/rhode-island/middletown` all return 404
today. The state hubs above them return 200 and link straight to them. Two queries land there:

| Query | Clicks | Impressions | CTR | Position |
|---|---:|---:|---:|---:|
| `cascadia padel` | 9 | 56 | **16.1%** | 6.8 |
| `padel kirkland` | 4 | 26 | **15.4%** | 4.5 |

Those are the two highest CTRs in the site's top 40 queries, against a **1.4% site average**, and
the page they point at is a 404.

**Cause:** `getCityBySlug()` resolved a state slug through `getStateCodeFromSlug()`, which kept a
**second, hand-maintained** slug→code map. That map had 37 entries; the site's real state list
has 39. Rhode Island and Washington — the two most recently added states — were never added to
it, so every city page in both states 404'd while the state hubs kept linking to them. Any state
added in future would have silently done the same thing.

**Fixed in [PR #5](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/5)** by
deriving the lookup from `getStates()`, the same source of truth the rest of the site uses. Build
passes; all three pages now prerender. **This is the single most important action this week: merge
PR #5.**

**Second finding, and it is a correction.** Last week's report opened SEO-INDEX-001 on the basis
of a coverage export showing 469 not-indexed pages, including "121 crawled – currently not
indexed" and "192 page with redirect". Reading the same report live in GSC — **same 8/6 snapshot
date** — gives materially different numbers:

| Reason | Reported 2026-08-09 | Actual (GSC UI, 8/6 data) |
|---|---:|---:|
| Page with redirect | 192 | **12** |
| Crawled – currently not indexed | 121 | **29** |
| Not found (404) | 64 | **55** |
| Discovered – currently not indexed | 90 | 90 |
| **Total not indexed** | **469** | **188** |
| Indexed | 617 | 612 |

The indexing problem is roughly **a quarter the size** the last report described. The export file
was read as current counts when it carried something else. Numbers below are from the UI.

---

## 2. Movement since last run

**There is none worth reporting, by construction.** The window moved one day (Jul 11–Aug 7 →
Jul 12–Aug 8), so 27 of 28 days are shared with the baseline.

| | Jul 11–Aug 07 | Jul 12–Aug 08 |
|---|---:|---:|
| Clicks | 1,784 | 1,800 |
| Impressions | 134,119 | 128,000 |
| CTR | 1.33% | 1.4% |
| Avg position | — | 9.4 |

The impressions drop is not a real loss — GSC's most recent days are incomplete, and Aug 8 was
still filling in at read time (last update 3.5 hours before this run). Do not treat −6K as signal.

Query-level positions for the four queries the prior report enumerated are effectively unchanged:
`padel courts near me` 6.96 → 7.0 · `padel nyc` 6.99 → 6.9 · `padel courts nyc` 4.07 → 4.0 ·
`best padel shoes` 16.39 → 16.2. All inside noise.

**One genuine move, and it is down:** `best teardrop padel racket` **4.53 → 6.6**, with CTR
falling 33% → 23.8% on rising impressions (15 → 21). Clicks held at 5. This was last week's
star — the flagship example for SEO-CONTENT-001 — so it is worth watching, but a 2-position
slide on a 10-day-old page with 21 impressions is well within normal post-publication settling.
Not actionable yet. Re-read 2026-08-25.

`rankings.csv` carries the top 50 queries by clicks with live positions. `previous_position` is
populated only where the prior report stated a query-level position; blank elsewhere, and those
rows are marked `flat` rather than invented.

---

## 3. Did last week's changes work

**Nothing shipped between the two runs** — no commits to `src/app/**` since PR #4 (Aug 4). There
is one day of new data. Every open item from the 2026-08-09 report stays open at its stated
re-read date, and this run deliberately does not re-litigate them:

| ID | Status | Next fair read |
|---|---|---|
| SEO-CTR-002 (club titles, PR #4) | No verdict — 6 post-deploy days on 263 pages | **2026-08-25** |
| SEO-STRIKE-001 + P1 (intermediate racket hub) | Untouched, as prescribed | **2026-08-25** |
| P9 (`/search` rebuild) | Untouched | **2026-08-25** |
| P8 (informational cluster) | Untouched | **2026-08-25** |
| SEO-CTR-001 (state titles) | Closed last run — risk retired | — |
| SEO-CTR-005 (`padel court` is a local-intent query) | Closed last run | — |

The prior report's instruction to **change nothing** on `/blog/best-padel-rackets-intermediate`
is respected. PR #5 touches routing only — no titles, metas, or copy — so it does not disturb any
in-flight measurement.

---

## 4. This week's improvements

### SEO-TECH-002 — city pages 404 in any state missing from a duplicate slug map **(shipped, PR #5)**

Evidence, all verified live this run:

```
/rhode-island        200  → links to /rhode-island/middletown   404
/washington          200  → links to /washington/bellevue       404
                          → links to /washington/kirkland       404
```

`src/lib/site-structure.ts` held two independent mappings of the same fact. `getStates()` built
state slugs from a 39-entry `stateNames` map; `getStateCodeFromSlug()` reversed it with a separate
37-entry `slugToCode` map. `getCityBySlug()` used the short one, returned `undefined` for RI and
WA, and the page called `notFound()`.

**Change:** `getStateCodeFromSlug()` now returns `getStates().find(s => s.slug === slug)?.code`.
Net −40 lines, and the class of bug is gone rather than the two instances of it. After
`npm run build`, `middletown.html`, `bellevue.html` and `kirkland.html` all prerender.

**Expected effect:** recovers two page-1 queries converting at 15–16% that currently dead-end,
and unblocks Washington — a state with real demand (`cascadia padel`, `padel kirkland`) and
zero working city pages. Small absolute click numbers today; the point is that the ceiling is
currently zero.

### SEO-TECH-003 — three legacy URLs still 404ing **(shipped, PR #5)**

Everything in the GSC 404 list was checked against the live site, not assumed:

| URL | Live status | Action |
|---|---|---|
| `/blog/best-padel-clubs-new-york` | 404 | 301 → `/blog/best-padel-clubs-nyc` (guide lives at the `-nyc` slug) |
| `/courts/@newcanaanfieldclub` | 404 | 301 → `/courts/new-canaan-field-club` |
| `/puerto-rico/bayamón` | 404 | 301 → `/puerto-rico/bayamon` (slug generation strips diacritics) |

### SEO-INDEX-001 — **revised down and largely already fixed**

The full 55-URL 404 list was pulled and every entry checked with `curl`. The result reframes
this item:

- **~44 were already fixed** by redirect blocks a previous run added to `next.config.ts`
  (the Instagram-handle `/courts/@…` slugs, no-hyphen court slugs, removed-club city pages).
  They persist in GSC only because it is reporting crawls from May–June. They will age out on
  recrawl. **No action.**
- **6 were genuinely live 404s** — the three city pages (SEO-TECH-002) and three legacy URLs
  (SEO-TECH-003). All fixed in PR #5.
- **4 are `_next/static/media/*.woff2`** build artifacts from superseded deploys. Harmless,
  not fixable, ignore permanently.
- `/terms`, `/privacy`, `/new-mexico/albuquerque`, `/missouri/grandview`, `/100` — all resolve
  200 today. Stale entries.

**"Crawled – currently not indexed" is 29, not 121, and it is not thin content.** The top of that
list is dominated by build artifacts, not pages:

```
_next/static/media/…woff2   (×4)
favicon.ico?favicon.…ico
/florida/hallandale-beach
/courts/snowmass-club
/courts/piedmont-driving-club
/search?city=Los Angeles
/texas/the-woodlands
```

Last week's hypothesis — "likely the long tail of `/courts/*` and `/padel-near/*`" — is not
supported. Four real pages are affected. **This item is closed as a priority.** The remaining
indexing question worth anything is **"Discovered – currently not indexed": 90 pages**, which is
now the largest genuine bucket and was never examined. Pull that list next run.

### SEO-CONTENT-001 — **carried forward unchanged, still the best growth bet**

Nothing new to add one day later, and the evidence behind it has not moved. The buyer-intent
cluster is still converting far above site average:

`best round padel racket 2026` pos 3.5 (19% CTR) · `best teardrop padel racket` pos 6.6 (23.8%) ·
`padel north carolina` pos 6.0 (30.8%) · `best padel bag` pos 6.5 (8.5%) · `padel courts finder`
pos 1.9 (66.7%).

Named targets from last week stand: `best padel shoes for women 2026`, `best padel racket for
control`, more `best padel bag` coverage. **This is where build hours go once PR #5 is merged.**

---

## 4b. Indexing queue

**Nothing new shipped this week.** No commits to `src/app/**` since PR #4 (Aug 4). No new URLs
to submit, and no sitemap resubmission needed.

**Queue this only after PR #5 merges and deploys** — submitting a URL that still 404s wastes the
daily quota. Once the deploy is live and each returns 200, submit as a single wave (3 URLs, well
inside the ~10–12/day cap):

```
https://www.padelcourtsfinder.com/washington/kirkland
https://www.padelcourtsfinder.com/washington/bellevue
https://www.padelcourtsfinder.com/rhode-island/middletown
```

The three 301s in SEO-TECH-003 need no submission — Google drops redirected URLs on its own.

Sitemap: resubmit `https://www.padelcourtsfinder.com/sitemap.xml` after the PR #5 deploy, since
three previously-absent URLs enter it.

---

## 5. Blockers and data caveats

- **One day of new data.** This run's only real contribution is the indexing work and the bug it
  surfaced. Treat §2 as a no-op.
- **Chrome worked this run.** `navigate` did not hang — the 300s timeout that blocked the last
  four runs did not recur. Cause of the intermittency is still unknown, so do not assume it is
  fixed; keep the manual-export fallback.
- **GSC UI friction:** the rows-per-page control would not apply (stayed at 10) and the Pages tab
  would not switch, so query data was collected by paging 5×10 and **page-level data was not
  captured this run**. Query, position, CTR and indexing data are all complete.
- **Ahrefs — 0 units, resets 2026-08-18.** Next week's run is the first that can add search
  volumes, SERP features and competitor data. Still no competitive layer.
- **Ahrefs↔GSC sync — dead, fifth consecutive run.** Recommend formally abandoning it.
- **Last week's coverage numbers were wrong** (§1). Prefer the GSC UI over the export file, or
  reconcile the two before quoting the export again.
- **Confounders unchanged:** badge backlink program, club enrichment, photos, and the P1–P9 build
  all overlap this window.

---

## 6. Next run checklist (2026-08-16) and the real read (2026-08-25)

1. **Did PR #5 merge and deploy?** If yes, confirm the three city pages return 200 and submit
   the indexing wave in §4b. If it is still open, that is the blocker — nothing else this week
   matters as much.
2. **Ahrefs units reset Aug 18** — next run may still be dry; the run after will not be.
3. **Pull the "Discovered – currently not indexed" list (90 pages)** — now the largest real
   indexing bucket and never examined. Item_keys for the drilldowns, for reuse:
   `Not found (404)` = `CAMYDSAC`, `Crawled – currently not indexed` = `CAMYFyAC`, appended to
   `https://search.google.com/search-console/index/drilldown?resource_id=<prop>&item_key=`.
4. `best teardrop padel racket` — did 4.53 → 6.6 continue, or settle back?
5. **Everything else waits for 2026-08-25**: PR #4 club-title CTR vs the 0.76% baseline,
   `/blog/best-padel-rackets-intermediate` recovery, `/search` post-recrawl position, and whether
   the P8 informational pages convert any of their impressions. **Do not judge them early and do
   not edit those pages before then.**
6. Once PR #5 is merged, next build hours go to SEO-CONTENT-001, not club-page tuning.
