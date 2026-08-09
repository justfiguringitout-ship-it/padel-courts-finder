# SEO Improver — weekly report, 2026-08-03

**Property:** https://www.padelcourtsfinder.com/
**Measured window:** 2026-07-02 → 2026-07-29 (28 days, all countries, all devices)
**Prior run:** 2026-07-27 (measurement blocked); prior *measured* baseline: 2026-07-23, window 2026-06-23 → 2026-07-20
**Data source:** Dito's own GSC property export (`padelcourtsfinder.com-Performance-on-Search-2026-07-31`), archived here as `gsc-export-2026-07-31-28d/`. Ahrefs and Chrome both failed again — see §5.
**PR opened:** [#4 — SEO-CTR-002/003/004](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/4)

> **Window caveat, read this first.** The two windows overlap by 19 of 28 days, so every
> week-over-week delta below is damped — a real move shows up at roughly a third of its true
> size. Directions are trustworthy; magnitudes are floors, not estimates. And the window
> **ends 2026-07-29**, the day PR #3 deployed, so nothing shipped on or after Jul 29 is
> measured here. That includes PR #3 *and* the entire P1–P9 build of Jul 31 – Aug 1.

---

## 1. Executive summary

**The site is growing and the growth is CTR, not rank.** Site-wide, 28 days:

| | Baseline (Jun 23 – Jul 20) | Now (Jul 2 – Jul 29) | Δ |
|---|---:|---:|---:|
| Clicks | 1,350 | **1,631** | **+281 (+21%)** |
| Impressions | ~114,000 | **128,825** | +14,825 (+13%) |
| CTR | 1.20% | **1.27%** | +0.07pp |

The cleaner read is *within* the window, which has no overlap problem: first 14 days **749 clicks
/ 61,721 imp (1.21%)**, last 14 days **875 clicks / 62,603 imp (1.40%)**. Impressions flat,
clicks **+17%**. The site is converting the traffic it already had better than it did a fortnight
earlier. 23 tracked keywords gained, 11 lost, 33 flat.

**The single most important action: fix the club-page snippet.** `/courts/*` is the biggest
section on the site and by far the worst converter:

| Section | Pages | Impressions | Clicks | CTR | Avg pos |
|---|---:|---:|---:|---:|---:|
| **`/courts/*`** (club detail) | 263 | **47,689** (37% of site) | 371 | **0.78%** | 8.7 |
| `/[state]` (state hubs) | 55 | 23,435 | 397 | 1.69% | 12.3 |
| `/[state]/[city]` (city dirs) | 205 | 17,387 | 318 | **1.83%** | 8.9 |
| `/blog/best-padel-clubs-*` | 23 | 17,231 | 209 | 1.21% | 8.2 |
| `/blog/*` (other) | 28 | 17,075 | 269 | 1.58% | 11.7 |
| `/` (home) | 1 | 3,243 | 53 | 1.63% | 15.3 |

City directories sit at essentially the same average position (8.9 vs 8.7) and earn **2.3× the
CTR**. Position is not the constraint on club pages — the snippet is. The 22 worst club pages
alone take **18,301 impressions and return 40 clicks (0.22%)**.

Two live copy bugs were found on those pages while investigating, both confirmed on production:
`"4 both courts"` (31 clubs, raw enum leaking into the meta description) and `"Rated 0 stars."`
(20 clubs with no Google reviews yet). All three fixes are in **[PR #4](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/4)**, unmerged.

---

## 2. Movement since last run

Full table in `rankings.csv` (107 keywords). Deltas are damped by the 19-day overlap.

### Gains — the "near me" / discovery family is climbing

| Keyword | Prev | Now | Δ | Imp | Clicks | CTR |
|---|---:|---:|---:|---:|---:|---:|
| padel clubs near me | 13.8 | **10.11** | +3.69 | 70 | 3 | 4.29% |
| paddle court near me | 14.8 | **11.11** | +3.69 | 44 | 3 | 6.82% |
| **best padel shoes** | 20.4 | **16.94** | +3.46 | 409 | 7 | 1.71% |
| padel clubs | 16.4 | **13.41** | +2.99 | 97 | 1 | 1.03% |
| padel ranch | 8.9 | 6.33 | +2.57 | 39 | 4 | 10.26% |
| padel columbus ohio | 6.0 | 4.02 | +1.98 | 61 | 3 | 4.92% |
| padel courts | 9.8 | 8.90 | +0.90 | 846 | 9 | 1.06% |
| padel club | 9.7 | 8.85 | +0.85 | 564 | 0 | 0% |
| **padel courts near me** | 7.9 | **7.24** | +0.66 | **1,418** | **67** | **4.72%** |

`padel courts near me` is the site's best query outright — 67 clicks at 4.72%. `best padel shoes`
gaining 3.5 positions into striking distance (16.9) is the most commercially useful gain.

### Losses — the racket money cluster decayed, all of it pre-fix

| Keyword | Prev | Now | Δ | Imp | Clicks |
|---|---:|---:|---:|---:|---:|
| **best padel racket for intermediate players** | 27.7 | **32.61** | −4.91 | 56 | 2 |
| **best padel rackets for intermediate players** | 16.0 | **19.86** | −3.86 | 64 | 5 |
| best padel rackets for beginners | 25.4 | 27.80 | −2.40 | 118 | 2 |
| best beginner padel racket | 17.7 | 19.18 | −1.48 | 65 | 6 |
| best control padel racket 2026 | 6.1 | 7.10 | −1.00 | 49 | 3 |
| elite 57 nyc | 2.7 | 3.57 | −0.87 | 218 | 7 |
| mink padel | 7.7 | 8.20 | −0.50 | 613 | 0 |

Every racket money query moved the wrong way during a window that ends **two days before**
Dito's P1 hub rescue shipped (Jul 31). So this is the *pre-treatment* reading, and it says the
treatment was warranted: the intermediate hub is the #3 page sitewide by impressions (3,083)
yet its core query fell out of page 2. Nothing here argues against P1 — it dates it.

Nothing fell out of the top 100. No page lost >30% of clicks.

**Device split:** Mobile 1,063 clicks / 68,588 imp / **1.55%** CTR / pos 7.91. Desktop 538 /
55,005 / **0.98%** / pos **11.19**. Mobile both ranks and converts better by a wide margin —
titles should be written to survive mobile truncation (~50 chars), which is how PR #4's titles
are built.

**Rich results:** Review snippets earned 37 clicks on 1,955 impressions (**1.89%** CTR);
Product snippets 15 on 1,085 (1.38%). Both beat the club-page average of 0.78% — schema is
working where it fires. It fires on only ~4% of club-page impressions.

---

## 3. Did last week's changes work

| ID | Status | Ranking response |
|---|---|---|
| **SEO-STRIKE-001** (intermediate racket guide depth) | Live since 2026-07-29 | **Still unmeasured** — window ends the day it deployed. Pre-change reading: core query **decayed 16.0 → 19.86**. |
| **SEO-CTR-001** (guide-shaped state titles, NY/CA/FL/TX/IL) | Live since 2026-07-29 | **Still unmeasured** — see the baseline correction below. |
| **SEO-CTR-001 risk flag** (`padel courts nyc`) | Live, risk not yet realised or refuted | 4.8 → **4.54**, 173 imp, 14 clicks, **8.09%** CTR. Healthy, but pre-change. |
| **SEO-CANNIBAL-001** (city guide vs city directory) | **Not applied** (deferred twice) | Now quantified for the first time — §4. |

### The `/new-york` baseline has moved, and next run must use the new number

`/new-york`: **6,863 imp, 165 clicks, 2.40% CTR, pos 8.37.**

The 2026-07-23 baseline recorded 6,640 imp / ~121 clicks / **1.8%** CTR, and SEO-CTR-001's stated
target was 1.8% → ~3%. But this window is **almost entirely pre-change**, and CTR is already at
2.40%. The page was climbing on its own — most likely the badge-backlink and club-enrichment work
running in parallel, not the title.

**So the correct baseline for judging SEO-CTR-001 is 2.40%, not 1.8%.** Measuring against 1.8%
next month would manufacture a win the title change did not earn. This correction is the single
most useful thing this run produced for attribution.

---

## 4. This week's improvements

Three shipped to **[PR #4](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/4)** (unmerged — needs Dito's review). Three are recommendations only.

### SEO-CTR-002 — rewrite the `/courts/[slug]` title template · **in PR #4**
**File:** `src/app/courts/[slug]/page.tsx`
**Evidence:** 47,689 imp / 0.78% CTR / pos 8.7 vs `/[state]/[city]` at 1.83% / pos 8.9. Worst 22
pages: 18,301 imp → 40 clicks. Query side confirms the pattern is navigational-brand: `mink padel`
613 imp / 0 clicks, `padel haus atlanta` 523 / 0, `itp training academy` 464 / 0, `padel up culver
city` 429 / 0, `austin padel center` 481 / 1.

On a brand query the top slots are the club's own site, Instagram and Google Maps. The old title
— `Padel 39 | Austin, TX | Padel Courts` — restated the brand and offered the searcher nothing
those listings don't already show.

- **before:** `Padel 39 | Austin, TX | Padel Courts`
- **after:** `Padel 39 — 6 Padel Courts in Austin, TX | Hours & Prices`

Brand stays first so the navigational name match is protected; `padel courts in {city}, {ST}` is
retained so no discovery keyword is lost; the count and "Hours & Prices" are the differentiator.
**Expected:** 0.78% → 1.2–1.5% = **+200 to +340 clicks/28d** against a site total of 1,631.
**Risk:** one template, 263 ranked pages, 37% of impressions — the biggest single bet this loop
has made. Downside is bounded (0.78% is near the floor) and revert is one commit. Do not stack
another club-page change until this is measured.

### SEO-CTR-003 — two live meta-description bugs on club pages · **in PR #4**
**File:** `src/lib/court-adapter.ts` (line 948)
Both verified on production, not just in source:
- `courtType: "both"` printed raw → *"4 both courts."* on **31 clubs** (`/courts/ace-padel-denver`, `/courts/itp-training-academy`, …)
- `Rated ${rating} stars.` was unconditional → *"Rated 0 stars."* on the **20 clubs with no Google reviews** (`/courts/roslyn-padel`, `/courts/laredo-padel-club`, …)

"Rated 0 stars" is worse than saying nothing — it is a reason not to click, printed on the snippet.

### SEO-CTR-004 — homepage advertises a stale inventory · **in PR #4**
**File:** `src/app/page.tsx` (title, description, OG, Twitter)
Still claimed **"313+ padel courts across 37 states"**; the site serves **331 clubs across 39
states** (verified against live `/search`, whose tiles sum to exactly 331). `layout.tsx` was
corrected in `429eca4`; `page.tsx` was missed. Also corrected "courts" → "clubs" — 331 is the club
count, so the old phrasing was wrong independent of the number. Homepage is the #2 page by
impressions (3,243 imp, pos 15.3).

### SEO-CANNIBAL-001 — revised, and now backed by data (not in PR)
Two page types compete per city. The export finally shows who wins:

| City | Blog guide (imp / clicks / pos) | Directory (imp / clicks / pos) | Verdict |
|---|---|---|---|
| los-angeles | 474 / 6 / 12.94 | **2,132 / 17 / 11.44** | directory wins outright |
| fort-lauderdale | 86 / 1 / 5.80 | **759 / 43 / 5.49** | directory wins outright |
| brooklyn | 213 / 4 / 8.25 | **635 / 20 / 6.45** | directory wins outright |
| atlanta | 502 / 11 / 8.92 | **910 / 24 / 6.57** | directory wins outright |
| houston | 982 / 6 / 7.60 | 1,465 / 20 / 8.12 | split — `padel houston` 261 imp, 2 clicks |
| orlando | 765 / 8 / 7.17 | 951 / 11 / 8.10 | split |
| chicago | 1,433 / 20 / 8.18 | 624 / 13 / 7.83 | split |
| **austin** | **1,461 / 6 / 8.80 (0.41% CTR)** | 676 / 3 / 9.51 | guide holds rank, converts terribly |
| miami | **1,438 / 17 / 8.87** | 793 / 4 / 11.88 | guide wins |
| san-diego | **705 / 7 / 8.43** | 317 / 3 / 9.39 | guide wins |
| philadelphia | **1,181 / 8 / 9.16** | 1 / 0 / 8.00 | guide wins (no contest) |

Four cities have a clear loser worth consolidating. This needs canonical or redirect decisions,
not a metadata tweak, so it is deliberately **not** in PR #4 — and it should wait until CTR-002
is measured, so two club-facing changes aren't in flight at once. Austin is the odd one out and
the most interesting: 1,461 impressions at position 8.8 returning **6 clicks**. That is a snippet
problem on a page that already ranks, and it is the best single-page CTR target on the site after
the club template.

### SEO-CTR-005 — `padel court` is the biggest unfixed CTR hole, and we can't see the page (not in PR)
**3,033 impressions, 9 clicks, 0.30% CTR, pos 8.91** — the largest single-query impression pool
outside the "near me" family, and essentially unchanged since the 2026-07-23 baseline flagged it
(2,936 imp / 10 clicks / 0.3% / pos 9.0). Nothing has been done about it in two runs.

A GSC property export does **not** join queries to pages, so this run cannot tell which page
ranks — and the intent is genuinely ambiguous (what a padel court *is*, dimensions, cost to
build, or one near me). Prescribing a title rewrite without knowing the page would be guessing.
**Action for Dito:** in GSC, filter Query = `padel court` exactly, open the **Pages** tab, and
export. That one export makes this actionable next run. See §5.

### SEO-DECAY-002 — racket money cluster: measure, do not stack (not in PR)
The four decayed racket queries (§2) are already the target of P1, shipped Jul 31. Adding more
on-page change now would make the next reading uninterpretable. **No action. Measure on 2026-08-24**
(three weeks post-P1), and use the pre-treatment positions in `rankings.csv` as the baseline.

---

## 4b. Indexing queue

> **Execution log (updated 2026-08-03, end of day).** Dito worked the queue the same day.
> **Wave 1 — all 11 submitted. Wave 2 — all 10 submitted. Wave 3 — 3 of 8 submitted**
> (`nox-at10-genius-18k-review`, `head-extreme-pro-review`, `wilson-bela-v3-review`), then the
> daily Request Indexing quota was exhausted. **Sitemap resubmitted.**
> **Carried to 2026-08-04 — the 5 remaining Wave 3 review pages:**
> `wilson-blade-elite-v2-review`, `babolat-technical-viper-review`, `babolat-contact-review`,
> `adidas-metalbone-hrd-review`, `nox-ml10-pro-cup-review`.
> Note: 24 submissions in one day is well above the ~10–12/account/day cap, so some Wave 2
> entries may have been throttled rather than accepted — next run should verify indexation of
> Wave 2 specifically rather than assuming it landed.


**A lot shipped since the last run and none of it is likely indexed yet.** Between 2026-07-27 and
today, **7 brand-new pages** and **21 modified pages** landed (P1–P9, commits `b34458c`…`89bc591`).
Every URL below was confirmed **HTTP 200 on `https://www.`** today. Indexation status could not be
checked — Ahrefs GSC is dead and no `site:` path was available this run — so nothing was dropped as
"already indexed"; assume none of it is. GSC allows ~10–12 Request Indexing actions per day.

**Wave 1 — today (11 URLs). Brand-new pages first, then the two biggest rebuilds.**

```
https://www.padelcourtsfinder.com/indoor-padel-courts
https://www.padelcourtsfinder.com/padel-lessons
https://www.padelcourtsfinder.com/buy-a-padel-court
https://www.padelcourtsfinder.com/blog/best-diamond-padel-rackets
https://www.padelcourtsfinder.com/blog/best-round-padel-rackets
https://www.padelcourtsfinder.com/blog/best-teardrop-padel-rackets
https://www.padelcourtsfinder.com/blog/padel-gifts
https://www.padelcourtsfinder.com/search
https://www.padelcourtsfinder.com/rules
https://www.padelcourtsfinder.com/how-to-play
https://www.padelcourtsfinder.com/blog/padel-vs-pickleball
```

`/search` is the priority in this wave: it was a client-only page serving crawlers **zero club
links** at position 33.24 on 2,141 impressions — the site's biggest query family. P9 rebuilt it
server-rendered (0 → 83+ internal links). It needs a recrawl to register at all.

**Wave 2 — tomorrow (10 URLs). Substantially-updated money pages.**

```
https://www.padelcourtsfinder.com/blog/best-padel-rackets-intermediate
https://www.padelcourtsfinder.com/blog/best-padel-rackets-beginners
https://www.padelcourtsfinder.com/blog/best-padel-shoes
https://www.padelcourtsfinder.com/blog/best-padel-balls
https://www.padelcourtsfinder.com/blog/padel-racket-shapes-explained
https://www.padelcourtsfinder.com/blog/best-padel-rackets-2026
https://www.padelcourtsfinder.com/blog/padel-court-cost
https://www.padelcourtsfinder.com/
https://www.padelcourtsfinder.com/blog
https://www.padelcourtsfinder.com/new-york
```

**Wave 3 — day 3 (8 URLs). Review pages, meta-description-only updates — lowest priority; skip if short on quota.**

```
https://www.padelcourtsfinder.com/blog/nox-at10-genius-18k-review
https://www.padelcourtsfinder.com/blog/head-extreme-pro-review
https://www.padelcourtsfinder.com/blog/wilson-bela-v3-review
https://www.padelcourtsfinder.com/blog/wilson-blade-elite-v2-review
https://www.padelcourtsfinder.com/blog/babolat-technical-viper-review
https://www.padelcourtsfinder.com/blog/babolat-contact-review
https://www.padelcourtsfinder.com/blog/adidas-metalbone-hrd-review
https://www.padelcourtsfinder.com/blog/nox-ml10-pro-cup-review
```

**Also resubmit the sitemap** — 7 new URLs shipped this week and it currently lists 714:

```
https://www.padelcourtsfinder.com/sitemap.xml
```

---

## 5. Blockers and data caveats

- **Ahrefs MCP — 0 API units, unchanged.** `units_limit_workspace: 0`, Trial, resets
  **2026-08-18**. No search volumes, no SERP data, no competitor layer. Those `rankings.csv`
  columns are intentionally blank.
- **Ahrefs↔GSC sync — still dead despite being connected 2026-07-31.** Retested today: project
  `10101261` returns an empty keyword set, `10101264` returns *"No GSC data available for the
  requested date range"*, and `gsc-performance-history` returns `{ "metrics": [] }`. Third
  consecutive run with this failure. Worth checking the integration in the Ahrefs UI, or dropping
  the headless path and standardising on manual exports.
- **User's Chrome — hung again.** `list_connected_browsers` and `tabs_context_mcp` respond, but
  `navigate` to Search Console **timed out at 300s**, same as 2026-07-27. Not retried. This is a
  known persistent local issue, not a one-off.
- **Net effect:** measurement on this project now depends entirely on Dito's manual GSC exports.
  This run only had data because Dito exported on 2026-07-31 for the P1–P9 session. That is a
  fragile arrangement — the loop measured a window that ended five days before it ran.
- **Overlap damping.** 19 of 28 days are shared with the prior baseline. Treat every delta in §2
  as a direction with a floor magnitude.
- **Query table is truncated.** GSC caps the export at 1,000 queries (655 clicks / 54,998 imp).
  Site totals in §1 come from the Pages table (1,631 clicks / 128,825 imp), which is complete.
- **Non-www URLs still appearing in search** — 21 URLs, 2,763 imp, 14 clicks. Verified today that
  non-www correctly 301s to www, so these are consolidating legacy impressions, not a live
  misconfiguration. No action; noted so a future run doesn't rediscover it.
- **Attribution confounders, unusually heavy this week:** the badge backlink program (wave 1 = 42
  clubs), continuous club-data enrichment, club photography, and the entire P1–P9 build
  (Jul 31 – Aug 1: 7 new pages, 21 modified, schema and freshness changes across the blog). Any
  movement in the next report has at least four plausible causes besides this loop's PRs.

### What to export before next run (this is the whole measurement path now)

1. **Standard weekly** — property-wide, Search type Web, **Last 28 days**, export both **Queries**
   and **Pages** tabs. (Same as the Jul 31 export.)
2. **Post-change isolation** — custom range **2026-07-30 → export date**, unfiltered, Queries +
   Pages. This is the only way to see PR #3's effect without the pre-change days diluting it;
   "Last 28 days" will keep contaminating it until late August.
3. **One extra for SEO-CTR-005** — filter Query = `padel court` (exact), open the **Pages** tab,
   export. Tells us which page owns the 3,033-impression / 0.3%-CTR hole.

Drop the folders anywhere in `~/Downloads` — the loop finds them.

---

## 6. Next run checklist

0. **PR #4 merged and deployed 2026-08-04** (squash `324d114`), verified live on production:
   new club titles, `both` → `indoor & outdoor`, no more "Rated 0 stars", homepage at
   331 clubs / 39 states. Club-page CTR is measured from **2026-08-04**; first fair read ~2026-08-25.
   The 5 highest-impression/worst-CTR club pages (`padel-39`, `itp-training-academy`,
   `padel-haus-atlanta`, `mink-padel`, `padel-up-culver-city` — 6,222 imp returning 19 clicks
   pre-change) were hand-submitted for recrawl on 2026-08-09 to pull that reading forward.
1. Confirm the 5 carried-over Wave 3 URLs were submitted on 2026-08-04, and check whether Wave 2
   actually got indexed (quota may have throttled it — see §4b execution log).
2. Measure `/new-york` CTR against **2.40%** (not 1.8% — see §3).
3. Measure `padel courts nyc` against **4.54 / 8.09%**.
4. Measure the racket cluster against the pre-treatment positions in `rankings.csv`
   (intermediate 19.86, beginners 27.80) — P1's first fair reading is ~2026-08-24.
5. Check whether the Wave 1–3 URLs got indexed; `/search` first.
6. Ahrefs units reset **2026-08-18** — the run after next can finally add volumes and competitor SERPs.
