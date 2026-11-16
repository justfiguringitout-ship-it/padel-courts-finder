# SEO Improver — weekly report, 2026-11-16

**PR this run:** https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/28 — SEO-DECAY-006, city intro sentence. Merged `5b97bb4`. Revert: `git revert -m 1 5b97bb4`.

**Property:** `sc-domain:padelcourtsfinder.com`
**Measured window:** 2026-10-17 → 2026-11-13 (28 days) vs 2026-09-19 → 2026-10-16
**Clean 7-day read:** 2026-11-07 → 2026-11-13 vs 2026-10-31 → 2026-11-06 (non-overlapping, both Saturday → Friday)
**Prior run:** 2026-11-09 (+ two 11-11 addenda: PR #26, PR #27)
**Data source:** Google Search Console HTTP API via `~/.claude/scripts/gsc_query.py`. Pulled 11-16 07:36; data ran through 11-14 (11-14 is partial, 58 clicks, excluded from every comparison). Every pull used a limit above the row count returned (622 / 641 pages and 4,807 / 4,693 query×page rows for the 7-day reads; 745 / 746 pages, 5,316 / 5,315 queries, 10,616 / 10,811 query×page rows for the 28-day compare). www and non-www rows merged per path (4–13 stray non-www rows per pull). URL Inspection API for 6 URLs. No browser use this run.

---

## 1. Executive summary

**Clicks 574 (−29, −5%)** on 36,426 impressions (+1%), CTR 1.58% (from 1.67%), position 9.26 (from 9.20). The seven-week series is 718 → 598 → 566 → 611 → 548 → 603 → 574: the site is oscillating in a 550–610 band, not trending. The loss is desktop (212 → 185; mobile 388 → 387) and American (US 347 → 321; UK 45 → 42). The 28-day view is **2,340 clicks (−240, −9%)** on 151,833 impressions (−3.5%) — the gap to September narrowed from −16% last week to −9% as the badge-backlink and press weeks roll out of the comparison window, as predicted.

**None of last week's three changes has been seen by Google yet.** URL Inspection on 11-16: `/blog/padel-gifts` last crawled 10-29 (before PR #25 *and* before Dito's 11-11 rebuild of the page), `/blog/padel-bandeja-explained` 10-31 (before PR #27), `/blog/best-padel-shoes` 11-09 (two days before PR #26). Every §3 number for those pages is a pre-change baseline, not a response. The one request that matters this week is the gifts page: gift-query demand is up 82% in 28 days (419 → 762 impressions) and the site has 1 click on it, with the evergreen page sliding 18.3 → 24.4 while Google still holds a three-week-old copy.

**Shipped:** SEO-DECAY-006. The second-week trigger set on 11-09 fired (city matched-query position 11.0 ≥ 10, CTR 1.21% ≤ 1.3%), so the city-page count line is now a sentence that names the city, the sport and the court mix. One template change, build verified, merged.

**The single most important action (Dito, 4 clicks):** Request Indexing for `https://www.padelcourtsfinder.com/blog/padel-gifts`, then `diablo-padel`, `phantom-padel`, `vitesse-padel` (§4b). Diablo is the fifth test of "club pages index unaided" and the first to fail at 17 days; the rule's limit is now recorded as about two weeks.

---

## 2. Movement since last run

| Cohort | 7d clicks | Δ vs prior 7d | 7d CTR (prior) | 7d pos (prior) | pages w/ click (prior) | 28d clicks | Δ vs prior 28d | 28d pos (prior) |
|---|---:|---:|---|---|---|---:|---:|---|
| racket guides (broad + modifier) | 122 | **−25** | 2.18% (2.74%) | 10.3 (10.1) | 15 (15) | 550 | +15 | 10.6 (9.9) |
| `/courts/*` | 117 | −2 | 0.84% (0.85%) | 10.2 (9.9) | 68 (72) | 482 | **+78** | 9.7 (8.9) |
| state | 100 | **−11** | 2.95% (3.44%) | 7.9 (8.0) | 18 (18) | 415 | **−160** | 7.6 (6.7) |
| `/blog/*` other (how-to, city guides) | 77 | +2 | 1.24% (1.15%) | 11.2 (11.2) | 20 (25) | 276 | −4 | 10.9 (9.3) |
| city | 76 | −6 | 1.40% (1.59%) | 10.9 (11.5) | 24 (31) | 327 | −53 | 10.0 (8.0) |
| `*-review` | 41 | **+10** | 2.83% (2.14%) | 9.0 (9.0) | 9 (9) | 140 | −67 | 8.7 (7.9) |
| homepage | 23 | **+10** | 3.89% (3.12%) | 7.3 (6.7) | 1 | 67 | −10 | 7.8 (8.6) |
| `/padel-near/*` | 16 | −1 | 4.37% (5.06%) | 7.3 (7.2) | 13 (12) | 65 | −18 | 7.5 (7.5) |

(Cohort position is impression-weighted over pages, so it runs a point above the date-dimension figure in §1.)

The state cohort is the week's story: **matched-query CTR fell 4.69% → 3.28% at an unchanged position (7.5 → 7.6)** on 274 rows, led by `/new-york` (65 → 52 clicks on the same 1,300 impressions at 6.4). `padel nyc` went 8 → 2 clicks on 185 impressions at 3.7; `padel in nyc` 3 → 0, `nyc padel` 4 → 1. A CTR drop at constant position across a whole cohort is a results-page change (an AI Overview or a wider Maps pack), not a page change — the state template has not been touched. §4 SEO-DECAY-008.

The racket cohort gave back last week's gain: lightweight 24 → 14, teardrop 15 → 7, tennis elbow 20 → 16, advanced 8 → 3, beginners 6 → 1, while control (21 → 25; `best control padel racket` **7 / 28 @ 5.5**), NOX (6 → 11, its best week) and Wilson (2 → 5) rose. On 28 days the cohort is up 15 clicks only because the four pages shipped in October (spin, NOX, Wilson, lightweight) were not in the prior window; the pages that existed in September are all down.

### Biggest 7-day page movements

| Page | Clicks | Δ | Impr | Pos (prior) | Note |
|---|---:|---:|---:|---|---|
| `/courts/cascadia-padel` | 18 | **+13** | 50 | 2.2 (3.2) | `cascadia padel` 6 / 20 @ 1.7; the Kirkland name spike is back (28d 47 / 165 @ 3.1) |
| `/` | 23 | **+10** | 592 | 7.3 (6.7) | `padel courts near me` 3 / 55 @ 6.5, `padel near me` 2 / 21 @ 6.3, `padel court near me` 0 / 36 @ 5.7 — the homepage is taking more of the near-me impressions (28d 164 of 1,178) |
| `/puerto-rico` | 7 | +5 | 86 | 5.7 (4.4) | impressions doubled |
| `/blog/best-padel-clubs-phoenix` | 11 | +5 | 192 | 5.9 (5.8) | 5.7% CTR |
| `/blog/best-nox-padel-rackets` | 11 | +5 | 585 | 7.4 (7.6) | best week of its series; `best nox padel racket for intermediate players` 1 / 25 @ 6.6 |
| `/blog/best-padel-rackets-control` | 25 | +4 | 593 | 7.0 (7.3) | `best control padel racket` 7 / 28 @ 5.5 (prev 1 / 37); the page's best week |
| `/courts/legacy-padel-pickleball` | 4 | +4 | 328 | 6.9 (7.5) | first clicks on 300+ weekly impressions |
| `/texas/houston`, `/florida`, `/blog/best-padel-clubs-san-francisco`, `/blog/best-padel-clubs-chicago` | 8, 5, 9, 10 | +4 each | | | Houston 11.6 → 10.4 |
| `/blog/padel-bandeja-explained` | 4 | +3 | 659 | 7.0 (6.9) | `bandeja padel` **2 / 99 @ 5.7** (0 / 89 @ 7.9) — first head-term clicks; §3 |
| `/blog/best-wilson-padel-rackets` | 5 | +3 | 247 | 7.7 (8.1) | 2.0% CTR, first week above 2%; §3 |
| `/new-york` | 52 | **−13** | 1,314 | 6.4 (6.5) | `padel nyc` 8 → 2 at 3.7; §4 SEO-DECAY-008 |
| `/blog/best-lightweight-padel-rackets` | 14 | **−10** | 384 | 6.9 (7.3) | back to the series mean after last week's 24; still 3.7% CTR |
| `/blog/best-teardrop-padel-rackets` | 7 | −8 | 256 | 9.7 (9.1) | 28d 41 / 1,091 @ 9.5 vs 63 / 1,254 @ 7.3; §4 SEO-DECAY-009 |
| `/courts/m-padel-cincinnati` | 1 | −6 | 88 | 6.5 (7.1) | one-week spike unwinding (28d 15 / 355) |
| `/blog/best-padel-rackets-advanced` | 3 | −5 | 349 | 8.2 (9.6) | position improved, clicks fell; `best padel rackets for advanced players` 0 / 66 @ 10.9 (15.8) |
| `/blog/best-padel-rackets-beginners` | 1 | −5 | 579 | 20.3 (18.5) | 28d 14 / 2,229 @ 17.6 vs 57 / 2,932 @ 11.3 — the slide continues; permanent do-not-touch (10-12) |
| `/blog/best-padel-bags`, `/blog/best-padel-rackets-tennis-elbow`, `/blog/padel-positioning-guide`, `/courts/columbia-racquet-club`, `/courts/padel-ranch` | 1, 16, 8, 3, 1 | −4 each | | | tennis elbow at 6.5 (7.2), 4.4% CTR; bags 28d 12 vs 24 |

### Tracked keywords (`rankings.csv`, 75 rows, 28d position vs prior 28d)

14 gained · 23 flat · 37 lost · 1 dropped (`padel racket review`, 1 impression). Seeds: `padel courts near me` 5.7 (5.9) 52 clicks; `padel near me` 5.7 (6.1) 54; `best padel racket` 32.9 (28.7); `best padel racket for beginners` 20.7 (15.0); `padel court cost` 14.6 (13.8); `padel vs pickleball` 28.6 (25.1); `indoor padel courts` 11.8 (8.3); `what is padel` has no row (the site does not show for it). Biggest gains: `best padel rackets for advanced players` 14.1 (22.7), `bandeja padel` 7.8 (12.3), `padel society austin` 6.4 (10.1), `padel courts los angeles` 6.4 (10.0), `foundry padel` 6.6 (9.7). Biggest losses, all model-year or broad-level queries: `best padel rackets for beginners` 28.4 (14.0), `best padel racket 2026` 22.3 (12.6), `best beginner padel racket` 20.4 (11.9), `nox at10 genius 18k` 18.6 (12.5), `best padel rackets 2026` 20.6 (14.8). The loss column is the SEO-DECAY-004 / -007 family; nothing new in it.

---

## 3. Did last week's changes work

| ID | Status | Verdict |
|---|---|---|
| **SEO-CANNIBAL-002** (`/blog/padel-gifts`, PR #25, 9c57161) | **Not yet measurable** | URL Inspection 11-16: **last crawled 2026-10-29** — Google has not seen PR #25 (11-09) or Dito's 11-11 rebuild (`f9123bd`, 817 lines, new `gift-guide-2026.ts`, title now "Best Padel Gifts 2026: The Holiday Gift Guide for Serious Players"). The five inbound links PR #25 added (header ×2, bags guide, Mother's Day, Father's Day) survived the rebuild. Numbers are therefore the old page's: evergreen 0 / 124 @ 29.0 (0 / 117 @ 25.1); Mother's Day 0 / 165 @ 18.6 (1 / 162 @ 14.5); Father's Day 1 / 11. Gift queries site-wide 7d 0 / 223 @ 26.8 (0 / 224 @ 21.7); **28d 1 / 762 @ 21.8 vs 0 / 419 @ 14.8** — demand +82%, position −7, one click. `padel gifts for men` 0 / 25 @ 21.2, `padel gifts for women` 0 / 42 @ 16.2 (Mother's Day page), `best gifts for padel players` 0 / 16 @ 56.9. **Action: Request Indexing today (§4b, first slot).** Next read 11-23 measures PR #25 + the rebuild together; they target the same page and the same intent, so there is no conflict to untangle, only credit to share |
| **SEO-STRIKE-006** (`bandeja` question heading, PR #27, a6aa733, live 11-11) | Not yet crawled | Last crawled 10-31. Page **4 / 659 @ 7.0 / 0.61%** (1 / 642 @ 6.9 / 0.16%); `bandeja padel` **2 / 99 @ 5.7** (0 / 89 @ 7.9); `what is the bandeja in padel` 1 / 3 @ 3.3; `bandeja` 0 / 145 @ 8.7 (0 / 166 @ 7.2); `what is bandeja` 0 / 12 @ 4.1 (0 / 16 @ 5.2); `what is bandeja in padel` 0 / 9 @ 5.3. 28d 7 / 1,884 @ 7.6 / 0.37%. The first head-term clicks come from the 10-31 rewrite's rank gain, not the heading. Read 11-23; no further edits (standing) |
| **SEO-CTR-008** (shoes Q&A block, PR #26, 15a6fe2, live 11-11) | Not yet crawled | Last crawled 11-09. Page 8 / 935 @ 12.2 / 0.86% (9 / 1,064 @ 11.8 / 0.85%); 28d 35 / 4,265 @ 11.7 (51 / 3,774 @ 10.8). Question queries **0 / 250 @ 7.3** (0 / 250 @ 8.1) with the mix shifting: `who makes lightweight shoes for competitive padel?` 112 (70), `…best padel shoes for intermediate players?` 21 (63), `…under $150?` 23 (26), `…most durable…?` 13 (22), new `what are the best court shoes for mixed padel use?` 0 / 13 @ 4.5. Non-question 5 / 428 @ 17.2 (3 / 438). `best padel shoes 2026` 1 / 169 @ 12.7 (9.8). Judge 11-23 as planned; the baseline stands |
| **SEO-DECAY-006** (city pages after the 11-01 layout) | **Trigger fired → shipped** | Matched query×page rows (471): city **31 / 2,563 @ 11.0 / 1.21%** vs 30 / 2,381 @ 12.1 / 1.26%; state (unchanged template) 7.6 vs 7.5. Position is recovering by a point a week but both trigger conditions (≥10, ≤1.3%) held, so the pre-committed change shipped (§4). Pages: Austin 2 / 334 @ 14.8 (16.5), Chicago 3 / 207 @ 16.6 (18.9), Brooklyn 4 / 160 @ 10.4 (15.1), Houston 8 / 360 @ 10.4 (11.6), LA 25 / 1,205 @ 9.1 (9.4), Miami 3 / 420 @ 10.3 (10.2) with `padel miami` **0 / 117 @ 9.8** (1 / 39), Dallas 0 / 97 @ 27.9 (23.3), `/new-york/new-york` 0 / 172 @ 31.2 (22.3). 28d city 327 @ 10.0 vs 380 @ 8.0 |
| **SEO-CONTENT-011** (`/blog/best-wilson-padel-rackets`, PR #20) | Fourth read | **5 / 247 @ 7.7 / 2.02%** (2 / 306 @ 8.1 / 0.65%) — clicks ×2.5 on fewer impressions, first week above 2%. `best wilson padel racket` 0 / 12 @ 8.0 (0 / 20 @ 8.3), `wilson padel racket` 0 / 13 @ 13.3, `best wilson padel racket for intermediate` 0 / 7 @ 6.7. 28d 13 / 930 @ 8.1. The CTR ID threatened last week is not warranted. **Closed as working**, record only |
| **SEO-CONTENT-010** (`/blog/best-lightweight-padel-rackets`, PR #19) | Fifth read | 14 / 384 @ 6.9 / 3.65% (24 / 467 @ 7.3); 28d **65 / 1,521 @ 7.1 / 4.27%**. Gave back last week's spike; `light padel rackets` 1 / 18 @ 7.6, `lightweight padel racket` 1 / 17 @ 7.9, `lightest padel racket` 0 / 14 @ 6.2. Nothing to do |
| **SEO-CONTENT-009** (`/blog/best-nox-padel-rackets`, PR #18) | Sixth read | **11 / 585 @ 7.4 / 1.88%** (6 / 490 @ 7.6) — best week; 28d 26 / 1,317 @ 7.6 (8 / 335). `best nox padel racket for intermediate players` 1 / 25 @ 6.6. Working |
| **SEO-CONTENT-008** (`/blog/best-budget-padel-rackets`, PR #17) | Seventh read | 5 / 336 @ 9.2 (6 / 298 @ 8.3); 28d 25 / 940 @ 9.9 (14 / 465). `cheap padel rackets` 0 / 54 @ 15.1 (0 / 47 @ 15.0). Flat |
| **SEO-CONTENT-012** (`/blog/best-padel-rackets-spin`, closed) | Record | 11 / 262 @ 6.1 / 4.2% (12 / 220 @ 5.5); 28d 35 / 669 @ 5.5 / 5.23% |
| **SEO-DECAY-005** (NOX 18K review, closed) | Record | 11 / 438 @ 11.5 (10 / 475 @ 10.8); 28d 43 / 2,046 @ 10.0 vs 76 / 3,916 @ 8.6; `nox at10 genius 18k` 28d 1 / 225 @ 18.6 (1 / 586 @ 12.5). Model-year decay on schedule (SEO-DECAY-007 family) |
| **SEO-DECAY-004 / -007** (beginners, 2026 guide) | Record | Beginners 1 / 579 @ 20.3; 28d 14 vs 57 clicks, `best padel rackets for beginners` 28.4 (14.0). The 2026 guide 3 / 296 @ 17.6; 28d 10 / 851 @ 19.1 vs 60 / 1,648 @ 11.4 (−50, the largest 28d page loss). Intermediate 14 / 765 @ 8.8 is holding (28d 95 vs 104); advanced 20 vs 29 but `best padel rackets for advanced players` 28d 14.1 (22.7). The 10-12 permanent decision stands; January for the year swap |
| **Dito's 10-31 content** (second reads) | — | `/blog/padel-scoring-explained` 0 / 334 @ 8.3 (1 / 370 @ 9.4); `star point padel` 0 / 23 @ 9.9 (13.1), `padel star point` 0 / 11 @ 7.9. `/blog/padel-court-dimensions` 3 / 406 @ 11.3 (2 / 316 @ 11.9); `padel court size` 0 / 35 @ 14.5 (17.8), `padel court dimensions in feet` 0 / 23 @ 9.8 (1 / 12 @ 4.1). `/blog/padel-vs-pickleball` **0 / 29 @ 8.9** (0 / 88 @ 19.3) — impressions fell by two thirds while position jumped ten places: Google is still re-evaluating the rewrite, one more week before reading it. `/get-started/glossary` 2 / 342 @ 8.0 (2 / 556 @ 7.4); 28d 5 / 1,680 vs 13 / 2,155 |
| **Club-page cohort** | — | 117 clicks (−2), 68 pages with a click (72); **28d 482 vs 404 (+78), the only cohort up on 28 days.** 46 club pages have impressions now that had none in the prior 28 days; 24 of them took a click (Capital City 34 / 365 @ 6.1 at 9.3% CTR, M Padel Cincinnati 15 / 355, Mouratoglou San Antonio 8 / 309, Padel 9 7 / 382). Club-name CTR gap unchanged in shape (`lobbs padel` 0 / 442 @ 6.6, `padel x miami` 0 / 435 @ 8.3, `padel haus atlanta` 0 / 329 @ 7.6) |
| **SEO-INDEX** (club rule, fifth test) | **First failure recorded** | `/courts/diablo-padel` (added 10-30) still "Discovered – currently not indexed" at 17 days → request it. `/courts/phantom-padel` (10-31) still "URL is unknown to Google" at 16 days despite 200 + sitemap. `/courts/vitesse-padel` **regressed** from "Discovered" (11-09) to "URL is unknown to Google" (11-16). Of the 25 clubs added 10-31, 17 had impressions within nine days and the two inspected were indexed in four. **Rule as now recorded: club pages index unaided within about two weeks; anything still not indexed at 14 days gets a request.** Quail Valley (added 11-16, coming soon, live 200) is not requested under that rule |

**Confounders this week.** Dito's 11-11 gift-guide rebuild (`f9123bd`: `/blog/padel-gifts` rewritten, new `gift-guide-2026.ts`, a `gift-filter` component, `next.config.ts` touched) lands on the same page as PR #25; the 11-10 paid-links commits (HEAD Sprint Pro buttons dropped/repriced on gear pages, the fourth outbound-link change on gear pages in four weeks); the 11-10 Moorestown owner edit; the 11-16 club finder batch (`a370777`: Quail Valley added, Padel Spot removed with 308s from `/courts/padel-spot` and `/texas/round-rock` to `/texas`, six clubs updated) — after the window. PRs #26 and #27 (11-11) are inside the window but uncrawled. No template change until this run's PR. Veterans Day (Tue 11-11, 90 clicks) was a normal day.

---

## 4. This week's improvements

Ranked by expected clicks per unit of risk. #1 shipped in this run's PR; #2 is four clicks for Dito; #3–#4 are diagnoses with a trigger.

### SEO-DECAY-006 — city intro sentence *(SHIPPED — https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/28, merged `5b97bb4`)*

**Evidence.** §3: city matched-query position 11.0 / CTR 1.21% in week two after the 11-01 layout; both trigger conditions held. **Cause.** `src/app/[state]/[city]/page.tsx` put the H1 ("Padel Clubs in Miami") over a count line — "12 open clubs and 40+ courts. Compare price per player, hours and courts, then book." — that contains neither the city name nor the word padel; the sections that did were moved below the club list on 11-01. **Change.** The count line is now "Miami has 12 open padel clubs with 40+ indoor and outdoor courts. Compare price per player, hours and courts, then book." built from `city.name`, `openClubs`, `totalCourts` and the existing `facilityMix`; cities with no open club read "<City> has N padel clubs opening soon." No layout, section, schema or title change; `npm run sitemap:dates` moved the city template date to 11-16. Build passed in a fresh worktree. **Expected effect.** Matched-query city position back under 10 and CTR above 1.3% by 11-30; `padel miami` (117 impressions, 0 clicks @ 9.8) and `padel el paso` (31 @ 8.7) are the two named queries to watch. If the cohort has not recovered by 11-30, the layout itself (club list before any prose) is the next suspect and the fix is structural, not copy.

### SEO-CANNIBAL-002 — gifts: get the new page crawled *(Dito, 1 click; the test has not started)*

**Evidence.** §3: last crawl 10-29; two rounds of changes unseen; gift demand +82% in 28 days with one click; the evergreen page 18.3 → 24.4 on it. **Change.** Request Indexing for `https://www.padelcourtsfinder.com/blog/padel-gifts` (§4b, first slot). Nothing to edit: Dito's rebuilt title ("Best Padel Gifts 2026: The Holiday Gift Guide for Serious Players") carries the holiday intent, the five inbound links hold, and the Mother's Day page keeps `for her` / `for women`. **Expected effect.** Once recrawled, `padel gifts` / `padel gift ideas` / `best padel gifts` consolidate on the evergreen page and leave the 20s–40s; first clicks by 11-30. If the Mother's Day page still outranks it for `best padel gifts` on 11-30, the next step is the canonical from the seasonal pages (as set out on 11-09).

### SEO-DECAY-008 — state pages: CTR fell at a fixed position *(DIAGNOSIS — one results-page read, no edit)*

**Evidence.** State matched-query CTR 4.69% → 3.28% at 7.5 → 7.6 (274 rows); `/new-york` 65 → 52 clicks on 1,351 → 1,314 impressions at 6.5 → 6.4; `padel nyc` 8 → 2 on 162 → 185 @ 4.3 → 3.7; `padel in nyc` 3 → 0 @ 3.4; `nyc padel` 4 → 1 @ 5.1; `new york padel` 2 → 0 @ 3.4. Site-wide `padel courts near me` 21 → 14 on 261 → 318 @ 5.4 → 6.9. **Cause (hypothesis, not confirmed).** More clicks are being absorbed above position 4 — an AI Overview or a wider local pack on the city-name queries — because our rank did not move and the page did not change. **Trigger.** On 11-23, if state matched CTR is still ≤3.5%, read the live US results page for `padel nyc` and `padel courts near me` (built-in browser, as on 10-12) before proposing any edit. If CTR is back above 4%, close as a one-week SERP fluctuation.

### SEO-DECAY-009 — teardrop guide and the racket cohort drift *(RECORD — one more week)*

**Evidence.** `/blog/best-teardrop-padel-rackets` 7 / 256 @ 9.7 (15 / 302 @ 9.1); 28d 41 / 1,091 @ 9.5 vs 63 / 1,254 @ 7.3. `best teardrop padel racket` 2 / 27 @ 7.1 (3 / 31 @ 6.3), `teardrop padel racket` 0 / 25 @ 20.3, `teardrop head shape padel rackets` 0 / 20 @ 16.3 (the shapes-explained page shows for the same query at 21.6 — the guide wins; not cannibalisation). Ten pages link to the guide. The whole racket cohort slid a point on 28 days (9.9 → 10.6): every shape and level page is down 1–2 positions while the three most recently edited modifier pages (spin 5.5, NOX 7.6, Wilson 8.1) hold or rise. **Reading.** Freshness. The teardrop page was last substantively edited in July. **Change (not yet).** If the 11-23 read shows the teardrop guide still ≥9 and the cohort ≥10.5, the next PR refreshes the teardrop and round guides in place (re-check prices and availability, re-date, swap any 2026-model pick that now has a 2027 version — but not the title year until January, per SEO-DECAY-007). Not before a second read, because last week's cohort read was +6.

### Not acted, on purpose

- **GEO / question-form queries** — 168 rows, **819 impressions, 4 clicks** this week (635 last week). The new biggest single one on the site is `what is the best padel racket for intermediate players?` **0 / 157 @ 5.9** in its first week on `/blog/best-padel-rackets-intermediate`. The page already carries that exact question as an FAQ H3 with FAQPage schema (line 603), so there is nothing to add, and the broad-guide do-not-touch stands. Record: the AI-Mode query shapes are now hitting the broad guides, not just the shoes page.
- **`padel miami` 0 / 117 @ 9.8** — covered by SEO-DECAY-006; `/blog/best-padel-clubs-miami` (1 / 55 @ 11.8) shows for the same query but the city page wins, the standing pattern.
- **Club-name queries at 4–10**, **`/search`** (0 / 108 @ 24.0; 28d 0 / 778), **`padel court`** (12 / 2,452 @ 7.3 across 30+ pages — flat), **court-cost** (0 / 476 @ 12.1), **`/padel-near/*`**, **club titles**: standing do-not-reopen list.
- **Cascadia +13, M Padel Cincinnati −6, Padel Ranch −4, Columbia −4** — brand-name spikes and unwinds on sub-100-impression pages.
- **`/blog/padel-vs-pickleball`** — re-evaluation in progress (88 → 29 impressions, 19.3 → 8.9); read 11-23.
- **Bandeja, shoes** — PRs uncrawled; no second edit on either until the first is measured.

---

## 4b. Indexing queue

**Wave 1 — today, 4 requests (one money page that Google holds a three-week-old copy of, plus the three club pages that have failed the two-week rule):**

```
https://www.padelcourtsfinder.com/blog/padel-gifts
https://www.padelcourtsfinder.com/courts/diablo-padel
https://www.padelcourtsfinder.com/courts/phantom-padel
https://www.padelcourtsfinder.com/courts/vitesse-padel
```

Optional fifth slot if the quota allows: `https://www.padelcourtsfinder.com/blog/best-padel-shoes` (last crawled 11-09, two days before the PR #26 Q&A block that answers 250 weekly question impressions).

**Do not request:** `/blog/padel-bandeja-explained` (crawled 10-31; a single heading, natural recrawl will do), `/courts/quail-valley-racquets-complex` (added 11-16, live 200, in the sitemap — the club rule gives it until 11-30), the 11-09 city pages (the template change reaches ~100 URLs; the sitemap `lastmod` carries it), `/spotlight/*` (noindex). Nothing else shipped: `git log --since=2026-11-09 --diff-filter=A -- 'src/app/**/page.tsx'` is empty.

**Sitemap:** one new club URL (Quail Valley) and two removals (Padel Spot, Round Rock → 308 to `/texas`) since Dito's 11-11 resubmission, plus ~100 city `lastmod` updates from PR #28. Resubmit `https://www.padelcourtsfinder.com/sitemap.xml` once.

---

## 5. Blockers and data caveats

- **GSC data through 11-13 in the 7-day read;** the last two days can still backfill ~4%. 11-14 (58 clicks, Saturday, partial) is in no comparison. Last week's 7-day baseline (603 / 36,198) did not move on re-pull.
- **None of the three 11-09 / 11-11 PRs has been crawled** (inspected 11-16: gifts 10-29, bandeja 10-31, shoes 11-09). Every §3 number for those pages is a pre-change baseline. The gifts request in §4b is the only lever; the other two wait for a natural recrawl.
- **Dito's 11-11 gifts rebuild** is a confounder on SEO-CANNIBAL-002: next week's movement is credited to the rebuild and PR #25 jointly.
- **The state-cohort CTR drop is unexplained** (SEO-DECAY-008); no results-page read this run. The hypothesis is stated as a hypothesis.
- **Local `main` was four commits behind `origin/main` at run start** (Dito's 11-11 and 11-16 pushes); pulled with `--ff-only` before branching, so PR #28 is on top of the club-finder batch.
- **Question-form queries** (168 rows, 819 impressions, 4 clicks) are counted in every CTR figure above; they depress the shoes and intermediate pages most.
- **No backlink visibility** (standing). **Ahrefs retired** (standing): volume, SERP features and competitor columns in `rankings.csv` are blank.
- **Build verified in a git worktree with a fresh `npm ci`** (repo rule), not in Dito's checkout; the PR was merged with a merge commit; `git revert -m 1 5b97bb4` undoes it in one step. Deploy of `5b97bb4` not yet verified live at report time (Vercel auto-deploys main; check a city page for the new sentence).
- The task file still says "drive GSC through Chrome"; the run used the service-account API. The 09-14 skill-file edits remain uncommitted — thirteenth run.

---

## 6. Next run checklist (2026-11-23)

1. **SEO-DECAY-006 first read:** city matched position 11.0 / CTR 1.21%; `padel miami` 0 / 117 @ 9.8; `padel el paso` 0 / 31 @ 8.7; Austin 14.8, Chicago 16.6, Dallas 27.9. Confirm the sentence is live on a city page and that the city template was recrawled (inspect `/florida/miami`). Judge 11-30.
2. **SEO-CANNIBAL-002:** was `/blog/padel-gifts` recrawled (last 10-29)? If Dito requested it, expect a crawl within a day. Baselines (old page): evergreen 0 / 124 @ 29.0; Mother's Day 0 / 165 @ 18.6; gift queries 223 / week, 762 / 28d.
3. **SEO-STRIKE-006 / SEO-CTR-008:** inspect both for a post-11-11 crawl before reading them as responses. Bandeja 4 / 659 @ 7.0, `bandeja padel` 2 / 99 @ 5.7. Shoes 8 / 935 @ 12.2, question queries 0 / 250 @ 7.3. Judge both 11-23 only if crawled; otherwise 11-30.
4. **SEO-DECAY-008:** state matched CTR 3.28% @ 7.6; `padel nyc` 2 / 185 @ 3.7. ≤3.5% → read the SERP; >4% → close.
5. **SEO-DECAY-009:** teardrop 7 / 256 @ 9.7 (28d 9.5); racket cohort 28d 10.6. Still ≥9 / ≥10.5 → refresh PR for teardrop + round.
6. **SEO-CONTENT-010/-009/-008** sixth/seventh/eighth reads (14 / 384 @ 6.9; 11 / 585 @ 7.4; 5 / 336 @ 9.2). **-011 and -012 closed**, record only.
7. **Dito's 10-31 content:** padel-vs-pickleball 0 / 29 @ 8.9 (re-evaluation), scoring 0 / 334 @ 8.3, dimensions 3 / 406 @ 11.3, glossary 2 / 342 @ 8.0.
8. **Indexing:** inspect Diablo, Phantom, Vitesse (requested 11-16?), Quail Valley (day 7 of 14). Rule: 14 days unaided, then request.
9. **Site clicks:** 574. US 321. Mobile 1.75%, desktop 1.34%. Series 718 → 598 → 566 → 611 → 548 → 603 → 574. 28d gap −9% (was −16%).
10. **Do not touch:** the four broad racket guides (the 157-impression question query is already answered on the page), court-cost, club titles, `/padel-near/*`, the `padel court` theory, the bandeja and shoes pages (uncrawled PRs), the NOX 18K review (closed), `/blog/padel-gifts` content (Dito's rebuild).
