# SEO Improver — weekly report, 2026-10-05

**PR this run:** [#18 — SEO-CONTENT-009](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/18) — new page `/blog/best-nox-padel-rackets`. Merged as `50635f1`, local `npm run build` passed, verified live (200, canonical correct, 34 tagged affiliate links, in the sitemap with `<lastmod>` 2026-10-05, linked from the blog index and the NOX review pages).

**Property:** `sc-domain:padelcourtsfinder.com`
**Measured window:** 2026-09-05 → 2026-10-02 (28 days) vs 2026-08-08 → 2026-09-04
**Clean 7-day read:** 2026-09-26 → 2026-10-02 vs 2026-09-19 → 2026-09-25 (non-overlapping, both Saturday → Friday)
**Prior run:** 2026-09-28
**Data source:** Google Search Console HTTP API via `~/.claude/scripts/gsc_query.py`. Pulled 10-05; data ran through 10-02. 10-01 and 10-02 can still backfill ~4% upward. All pulls used limits above the row counts returned (587–742 pages, ≤10.5k query×page rows) — no truncation.

---

## 1. Executive summary

**Clicks up, impressions down again, and the big racket guides slipped late in the week.** 7-day clicks **718 (+27, +4%)** on 37,592 impressions (−3,121, −8%), CTR **1.91% (+0.21pp)**, position **8.2 (worse by 0.2)**. 28-day: **2,810 clicks (+915, +48%)**, 168,304 impressions (+15,813), position 8.2 (improved 1.2).

**The loss that matters:** the four broad racket guides (intermediate, pro-2026, beginners, advanced) each lost 1–3 positions starting 09-29/09-30. Intermediate went from 40 clicks to 29 and from position 7.0 to 8.1; by 10-02 its daily position was 10.2. This loop did not touch intermediate or advanced, so it is not something we shipped. It lines up in time with the Google spam update reported around 09-29 (the same date the Montessori site's blog was demoted). The specific-modifier racket pages (teardrop, tennis elbow, tennis players, control, reviews) held or grew. Diagnosis and decision in §2 — **the recommendation is hands off for one more week.**

**Last week's budget page worked fast.** `/blog/best-budget-padel-rackets` was indexed on 09-30 and took **5 clicks on 93 impressions at position 6.6** in its first five days, ranking 1–4 on `best budget padel racket`, `best cheap padel racket` and `best affordable padel rackets`.

**Court-cost verdict (SEO-STRIKE-004): neutral. Keep, do not revert, stop working on it.** §3.

**This week's build shipped:** `/blog/best-nox-padel-rackets` — the four NOX rackets already reviewed on the site, ordered by playing level.

**The single most important action (Dito, 1 minute):** Request Indexing for `https://www.padelcourtsfinder.com/blog/best-nox-padel-rackets` (§4b).

---

## 2. Movement since last run

| Cohort | 7d clicks | Δ vs prior 7d | 7d pos (prior) | 28d clicks | Δ vs prior 28d | 28d pos (prior) |
|---|---:|---:|---|---:|---:|---|
| `/blog/*` (incl. reviews) | 306 | +8 | 8.8 (8.4) | 1,219 | +530 | 8.7 (9.9) |
| — of which `*-review` | 66 | +13 | 7.6 (7.4) | 233 | +97 | 7.8 (8.6) |
| — of which `best-padel-rackets*` | 130 | −21 | 9.8 (8.6) | 523 | +396 | 9.0 (12.2) |
| state/city | 277 | +20 | 8.3 (7.9) | 1,032 | +286 | 8.2 (11.0) |
| `/courts/*` | 105 | +15 | 8.8 (8.1) | 399 | +88 | 8.5 (9.8) |
| homepage | 14 | −14 | 7.7 (7.8) | 91 | +9 | 9.3 (8.3) |
| `/padel-near/*` | 16 | −4 | 8.7 (6.8) | 79 | +8 | 7.4 (8.0) |

Clicks rose in three of five cohorts while position got a little worse in all of them. Impressions answered last week's question: a second down week (45.1k → 40.7k → 37.6k). It is spread across every cohort, including ones nothing has touched, and CTR rose, so it still reads as fewer searches rather than lost visibility. The exception is the racket family below.

### The racket-guide slip (new: SEO-DECAY-003)

| Page | 7d clicks (prior) | 7d pos (prior) | Daily pos 09-26 → 10-02 |
|---|---|---|---|
| intermediate | 29 (40) | 8.1 (7.0) | 7.6, 7.2, 8.0, 6.6, 8.9, 9.6, 10.2 |
| pro-2026 | 19 (29) | 9.9 (8.7) | 10.5, 8.6, 8.0, 11.9, 10.2, 10.7, 10.8 |
| beginners | 22 (20) | 11.3 (10.4) | 9.9, 11.0, 11.2, 11.8, 12.5, 10.5, 12.5 |
| advanced | 11 (10) | 11.0 (8.4) | 10.4, 9.4, 13.7, 9.5, 7.6, 12.1, 15.5 |

Head terms, 7-day: `best padel racket for intermediate` **17.1 (from 10.9)**, `best intermediate padel racket` **13.7 (from 6.4)**, `best padel racket for beginners` **16.6 (from 11.8)** — that one gives back last week's gain. `best padel rackets 2026` 11.9 (from 10.1).

What I checked:
- **Not cannibalization.** No second page from the site appears for any of these head terms; the new budget page shows for none of them.
- **Not PR #17.** It added one Keep Reading card to beginners and pro-2026, but intermediate and advanced were not edited and fell the most. No commit has touched any of the four since 09-28.
- **Timing.** The step is 09-29/09-30. A site-wide directory audit shipped 09-29 (listing merges, redirect fixes), but it did not touch blog pages. A Google spam update was reported around the same date.
- **What held.** Teardrop 19 clicks (+6), tennis-players 9 (+6), tennis-elbow 9 (flat), control 23 (−5, position 7.0 from 6.7), reviews 66 (+13). The broad "best X for [level]" guides moved; the narrow ones did not.

**Decision: do nothing to these four pages this week.** Four to five days of data, the last two provisional, during a reported update. Intermediate has already been made worse twice by edits (SEO-DECAY-001). If the 7-day position on intermediate is still worse than 9 next Monday, it gets a proper diagnosis against the live results page.

### Biggest 7-day page gains

| Page | Clicks | Δ | Impr | Pos (prior) |
|---|---:|---:|---:|---|
| `/courts/cascadia-padel` | 22 | +19 | 61 | 3.6 (3.1) |
| `/new-jersey` | 9 | +7 | 177 | 6.7 (7.4) |
| `/florida/fort-lauderdale` | 12 | +7 | 126 | 4.5 (5.1) |
| `/blog/best-teardrop-padel-rackets` | 19 | +6 | 321 | 6.8 (6.1) |
| `/blog/wilson-bela-v3-review` | 12 | +6 | 271 | 6.6 (6.9) |
| `/blog/best-padel-rackets-tennis-players` | 9 | +6 | 223 | 19.7 (20.4) |
| `/blog/best-budget-padel-rackets` | 5 | new | 93 | 6.6 |

`/new-york` stayed at 97 clicks (100 last week), position 5.1. Cascadia is a club-name spike.

### Other losses

- **Homepage: 14 clicks (−14)** at the same position (7.7). Last week it picked up clicks on `padel court near me` / `padel courts near me`; this week it did not show for them (state and city pages did). Position unchanged, so this is which page Google chose, not a ranking loss. No action.
- **`/blog/best-padel-shoes`: 13 clicks (+2).** Head term `best padel shoes` 19.2 (from 20.0), `best padel shoes 2026` 12.9 (from 13.1). No second slip, so no ID opened.
- **`how do i get started playing padel?`: 28-day position 21.5 (from 3.4) on 148 impressions.** A long conversational query with a sudden impression jump; looks automated. Recorded, no action.

`rankings.csv`: 119 rows — **15 gained, 3 lost, 95 flat, 6 new** (the new rows are NOX and budget terms added to the tracked list). Positions in the CSV are 28-day, which is why several racket head terms show as "gained" there while the 7-day view above shows them slipping: the 28-day window still includes the strong mid-September weeks.

---

## 3. Did last week's changes work

| ID | Status | Verdict |
|---|---|---|
| **SEO-CONTENT-008** (`/blog/best-budget-padel-rackets`, PR #17) | Indexed 09-30 | **Working.** 93 impr / 5 clicks / position 6.6 in five days. `best affordable padel rackets` 4.0, `best cheap padel racket` 3.0, `best budget padel racket` seen at 1. Too few impressions yet to say whether beginners gave up its budget terms (one impression each this week) |
| **SEO-STRIKE-004** (`/blog/padel-court-cost`, PR #16) | Full post-recrawl week | **Neutral. Closed.** Page 608 impr / 1 click / position 8.7 (prior week 783 / 1 / 8.5). Table below. No revert, no further work |
| **SEO-CONTENT-007** (`/blog/best-padel-rackets-advanced`) | Third week | **Slipping with the other broad guides.** 194 impr / 11 clicks / 11.0 (from 451 / 10 / 8.4). Plural head term 24.5 (from 22.8) but took 3 clicks; singular 22.7 (from 12.2) on 3 impressions. Target was ≤10 by ~10-12; unlikely to be met. Judge it with SEO-DECAY-003, not separately |
| **SEO-CONTENT-003/005** (review pages) | Fourth week | Review family 66 clicks (+13). Steady |
| **SEO-STRIKE-003** (NYC block) | Closed as worked | `padel nyc` 4.0, 14 clicks. `padel courts nyc` 2.1 (from 2.6), 11 clicks. Holding |
| **SEO-INDEX-006** (redirecting slugs) | Live | Holding. Sitemap now 743 URLs |
| **SEO-INDEX-007** (PATL / Let's Go records) | Was open | **Resolved by Dito's 09-29 audit** (`183f464`, `97d438f`): both club records are gone and `/courts/patl` now redirects to `/florida/fort-lauderdale`. One loose end: the Fort Lauderdale guide still mentions PATL in two places |
| SEO-STRIKE-002 (beginners, off-page) | Standing | 7-day head term back to 16.6 (from 11.8). Part of SEO-DECAY-003 |
| SEO-DECAY-001 (intermediate) | Standing | Untouched again. Now slipping without an edit — see §2 |

**SEO-STRIKE-004 final read (7-day position):**

| Query | Impr | Pos | Prior week | Before rewrite |
|---|---:|---:|---:|---:|
| `how much does it cost to build a padel court` | 32 | 9.9 | 11.0 | 12.2 |
| `padel court cost` | 22 | 13.8 | 11.8 | 13.0 |
| `padel court construction cost` | 21 | 12.6 | 14.9 | 14.3 |
| `how much does a padel court cost` | 19 | 10.0 | 11.9 | 11.8 |
| `cost to build a padel court` | 17 | 12.9 | 13.3 | 13.0 |
| `padel court installation cost` | 17 | 12.1 | 12.6 | 14.1 |
| `cost of building a padel court` | 15 | 10.9 | 14.4 | — |
| `padel court cost to build` | 10 | 7.8 | 7.2 | 11.0 |

Six of eight are better than before the rewrite by 0.1–3.5 places, the head term `padel court cost` is slightly worse, and nothing reached the top 8 with volume. One click all week. The rewrite did no harm and bought about one place. This page earns nothing directly (no affiliate links), so it does not justify a third pass.

**Confounders.** A reported Google update around 09-29; Dito's directory audit on 09-29 (dozens of listing corrections, merges and redirect fixes — plausibly behind the state/city and `/courts` click gains); a guest article published 10-01; press outreach in progress. The loop still cannot see backlinks.

---

## 4. This week's improvements

### SEO-CONTENT-009 — `/blog/best-nox-padel-rackets` *(SHIPPED — PR #18, merged `50635f1`, live)*

**Evidence.** In GSC (28 days) the site shows for 28 different "best NOX racket" queries — 113 impressions, 2 clicks — and every one lands on the intermediate guide because no page targets the brand:

| Query (28d) | Ranking page | Impr | Pos |
|---|---|---:|---:|
| `best nox padel racket for intermediate players` | intermediate | 36 | 7.8 |
| `best nox racket for intermediate` | intermediate | 20 | 7.2 |

Google autocomplete (checked today) returns `best nox padel racket` plus `…for beginners`, `…for control`, `…2026`, `…for tennis elbow`, `…for intermediate players`, `…for women`, `…for power`. The same check showed similar depth for Bullpadel and Wilson, but the site has four rated NOX rackets and only one Bullpadel, so NOX is the brand page that can be built without inventing anything.

**What shipped.**
1. Four picks by level: AT10 Genius 18K ($272.00, overall/advanced), ML10 Pro Cup Rough Surface ($169.99, intermediate), Pro Cup USPA Edition ($119.00, beginners), AT10 Genius Attack 12K ($229.99, power). Every price, spec, score and Amazon link is copied from the existing guides and reviews. The page says plainly that NOX sells more models and that only rated ones are listed.
2. A "which NOX for your level" block and seven FAQs matched to the autocomplete phrasings, including 18K vs Attack. The tennis-elbow answer says the ML10 is the only NOX in the elbow guide and is not the softest racket tested. There is no "for women" answer because no NOX is in the women's guide.
3. Article + FAQPage + ItemList schema.
4. **Four inbound links:** a Keep Reading card on each of the three NOX reviews, plus the blog index. **No link was added from intermediate, beginners, pro-2026 or advanced** — those are the pages slipping and they stay untouched.
5. `npm run sitemap:dates` in the same PR: the new URL, the three reviews and `/blog` moved to 10-05.

**Expected effect and check:** impressions within a week of indexing (the budget page took two days). First read 10-12; target position ≤10 on `best nox padel racket` by ~11-02. Also check that the intermediate guide's NOX queries move to the new page rather than disappearing.

### SEO-DECAY-003 — broad racket guides slipping *(recorded, deliberately not acted on)*

See §2. Next step is a measurement, not an edit.

### Not acted, on purpose

- **Intermediate, beginners, pro-2026, advanced** — no edits during the slip.
- **`/blog/padel-court-cost`** — closed.
- **`/blog/best-padel-shoes`**, **`padel court`**, club titles, `/padel-near/*` — standing do-not-reopen list.
- **Next build candidates**, in order: `best lightweight padel racket` (autocomplete is deep; 21 impressions at position 6–8 with no page), then a Wilson brand page (three rated Wilson rackets). `best-padel-shoes-women` stays parked: `best padel shoes for women` sits at 28 on 14 impressions and the site has no women's shoe reviews to build from.

---

## 4b. Indexing queue

**Wave 1 — today (2 requests).**

```
https://www.padelcourtsfinder.com/blog/best-nox-padel-rackets
https://www.padelcourtsfinder.com/courts/snowmass-club
```

Notes:
- `/blog/best-nox-padel-rackets` — new, 200 on `https://www.`, canonical correct.
- `/courts/snowmass-club` — still "Crawled – currently not indexed", last crawled 05-29. It is the last club page left in the pool.
- Checked and already indexed, so not listed: `/blog/best-budget-padel-rackets` (crawled 09-30), `/blog/padel-injuries-prevention-tips` (10-02), `/courts/emerald-padel-club` (10-03), `/courts/padel-connect-ct` (09-30), `/courts/piedmont-driving-club` (crawled today).

**Sitemap:** one new URL shipped. Resubmit `https://www.padelcourtsfinder.com/sitemap.xml` in Search Console.

---

## 5. Blockers and data caveats

- **GSC data stopped at 10-02** when pulled; 10-02 itself looks incomplete (70 clicks against ~100 on the other weekdays). The racket-guide slip leans partly on those last two days.
- **No view of the live results page.** Without Ahrefs the loop cannot see who moved above the racket guides, which is the first thing needed if SEO-DECAY-003 persists. A manual look at the results for `best padel racket for intermediate` would settle it.
- **No backlink visibility** (standing).
- **Ahrefs retired** (standing): volumes, SERP features and competitor columns are blank.
- **The task file still says "drive GSC through Chrome".** The run used the service-account API. The skill-file edits listed on 09-14 are still uncommitted pending Dito's go-ahead — seventh run.
- **Lastmod on the three NOX reviews** moved to 10-05 for a one-card change each (same precedent as PR #14 and #17).
- **Fort Lauderdale guide** still names PATL twice after the listing was removed. It is a fact about a club, so it is left for Dito.

---

## 6. Next run checklist (2026-10-12)

1. **SEO-DECAY-003:** 7-day position for intermediate (vs 8.1), pro-2026 (9.9), beginners (11.3), advanced (11.0), and the head terms in §2. Recovered, flat, or still falling? If intermediate is worse than 9, diagnose before any edit.
2. **SEO-CONTENT-009 first read:** is the NOX page indexed, what does it rank for, and did the intermediate guide's NOX queries transfer?
3. **SEO-CONTENT-008 second read:** budget page vs 93 impr / 5 clicks / 6.6.
4. **Impressions:** 37.6k this week. A third down week needs a by-country split.
5. **Snowmass:** once resubmitted, give the thin-content verdict.
6. **Next build:** `best lightweight padel racket`, only if the racket guides have stopped moving.
7. **Do not touch:** intermediate (SEO-DECAY-001), court-cost, club titles, `/padel-near/*`, the `padel court` theory.
