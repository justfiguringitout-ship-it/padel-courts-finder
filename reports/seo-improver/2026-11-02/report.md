# SEO Improver — weekly report, 2026-11-02

**PR this run:** none. Report-only by decision (§4, "Why no PR this week").

**Property:** `sc-domain:padelcourtsfinder.com`
**Measured window:** 2026-10-03 → 2026-10-30 (28 days) vs 2026-09-05 → 2026-10-02
**Clean 7-day read:** 2026-10-24 → 2026-10-30 vs 2026-10-17 → 2026-10-23 (non-overlapping, both Saturday → Friday)
**Prior run:** 2026-10-26
**Data source:** Google Search Console HTTP API via `~/.claude/scripts/gsc_query.py`. Pulled 11-02; data ran through 10-31 (10-31 is partial and excluded from the 7-day read). Every pull used a limit above the row count returned (615 / 614 pages, 4,520 / 4,620 query×page rows for the 7-day reads; 739 / 742 pages and 10,546 / 10,509 query×page rows for the 28-day compare). URL Inspection API for 12 URLs. One results-page read (`best padel racket for beginners`, built-in browser).

---

## 1. Executive summary

**Clicks slipped again: 548 (−63, −10%)** on 35,695 impressions (−6%), CTR 1.54% (−0.06pp), position 9.1 (from 9.2). That is the fourth week under 650 and the lowest of the five (718 → 598 → 566 → 611 → 548). The loss is American and generic: US clicks 372 → 301 (−19%) while every other country held or grew; the generic `padel` / `padel court` impressions on the big city pages fell (`padel` on `/california/los-angeles` 260 → 136 impressions, on `/new-york` 144 → 67) and the `/courts` long tail went 72 → 56 pages with a click. The 28-day view, now fully out of September, is **2,323 clicks (−487, −17%)** on 148,813 impressions (−12%), position 8.95 (from 8.17).

**Where it went:** the intermediate racket guide gave back last week's spike (42 → 23 clicks, 1,240 → 895 impressions), Brooklyn did the same (17 → 4, `padel brooklyn` 5 → 0 clicks at the same position), the NOX 18K review lost 12 clicks on half the impressions (§4, SEO-DECAY-005), and the `/courts` cohort lost 34 in the second week of club page v2, back to its pre-redesign CTR (0.93% → 0.76%). Capital City Padel Club settled from 14 to 6.

**What the loop built is the part that is working.** The spin guide (SEO-CONTENT-012) was indexed the day it merged and took **12 clicks on 187 impressions at position 4.6 (6.4% CTR) in its first five days**, the strongest first read of any page in this series (Wilson: 2 / 139 @ 7.1; NOX: 2 / 178 @ 10.1; lightweight: 7 / 130 @ 8.2). `best padel racket for spin and control` is at 3.0 on the new page with 3 clicks, `best padel rackets for spin and control` at 1.6. The tennis-elbow guide doubled (12 → 23 clicks; `best padel racket for tennis elbow` 0 / 6 @ 10.0 → 4 / 23 @ 5.7). The NOX guide came back as predicted (2 → 7 clicks, 10.0 → 6.9) and the Wilson guide doubled its impressions (139 → 238). The four broad racket guides went the other way again: beginners is at 1 click on 541 impressions at 17.3 and gets a DECAY ID with a diagnosis, not an edit (§4).

**Dito shipped 33 commits in the window and after it**, including two new guides (`/blog/padel-scoring-explained`, `/blog/padel-court-dimensions`, 10-31, both indexed the same day), rewrites of the bandeja and padel-vs-pickleball posts, a glossary cleanup, 25 new clubs, a club-facts pass over 279 clubs, a new city-page layout (11-01) and a header rebuild. None of it is in this week's numbers; all of it will be in next week's. That is the reason this run ships no PR (§4).

**The single most important action (Dito, 1 minute):** nothing to request. Both new guides are already indexed. Resubmit `https://www.padelcourtsfinder.com/sitemap.xml` once, because 27 new URLs shipped this week (§4b).

---

## 2. Movement since last run

| Cohort | 7d clicks | Δ vs prior 7d | 7d CTR (prior) | 7d pos (prior) | 28d clicks | Δ vs prior 28d | 28d pos (prior) |
|---|---:|---:|---|---|---:|---:|---|
| state/city | 172 | **−33** | 1.95% (2.13%) | 9.1 (8.9) | 822 | **−182** | 8.7 (8.1) |
| `/blog/*` (guides, how-to) | 110 | +15 | 1.51% (1.41%) | 10.5 (10.0) | 392 | −71 | 10.0 (9.0) |
| `/courts/*` | 106 | **−34** | 0.76% (0.93%) | 9.5 (9.4) | 455 | +56 | 9.4 (8.5) |
| `best-padel-rackets-*` (broad + modifier) | 99 | −1 | 2.78% (2.62%) | 12.0 (11.6) | 342 | **−179** | 11.7 (9.0) |
| `*-review` | 32 | −4 | 2.11% (1.86%) | 8.6 (8.3) | 156 | −77 | 8.4 (7.8) |
| homepage | 14 | −3 | 3.32% (3.50%) | 8.9 (8.3) | 66 | −25 | 9.1 (9.3) |
| `/padel-near/*` | 14 | −4 | 3.18% (3.31%) | 7.8 (7.7) | 79 | 0 | 7.5 (7.4) |

Cohort positions are impression-weighted across pages; compare each row with its own prior. The 28-day racket-guide loss is the broad four (beginners 76 → 22 clicks, the 2026 guide 89 → 14, intermediate 148 → 100, advanced 28 → 17); the modifier pages inside the same cohort are up (tennis elbow 29 → 44, budget 5 → 23, lightweight 34 new, NOX 17 new, spin 12 new, Wilson 6 new).

By device: mobile 362 clicks (−27) at 1.71% (1.74%), position 8.5 (8.4); desktop 181 (−36) at 1.27% (1.41%), position 10.0 (10.3). By country: USA 301 / 24,667 @ 9.1 (prev 372 / 26,229 @ 9.0); UK 40 (−5); Netherlands 26 (+15, at 7.4% CTR on 353 impressions — small and odd, watch once); Indonesia 17 (+5); Germany 16 (0); Canada 10; Spain 10 (−2).

Daily: 60 (Sat) · 86 · 78 · 88 · 100 (Wed) · 70 · 66 (Fri). 10-31 (partial): 76.

### Biggest 7-day page movements

| Page | Clicks | Δ | Impr | Pos (prior) | Note |
|---|---:|---:|---:|---|---|
| `/blog/best-padel-rackets-spin` | 12 | **+12** | 187 | 4.6 (new) | indexed 10-26; §3 |
| `/blog/best-padel-rackets-tennis-elbow` | 23 | **+11** | 324 | 6.8 (7.1) | `best padel racket for tennis elbow` 0 / 6 @ 10.0 → 4 / 23 @ 5.7; `… for elbow pain` 2 → 10 impr @ 6.5 |
| `/courts/slice-padel-co-downtown-austin` | 9 | +9 | 31 | 6.3 (3.5) | 29% CTR on 31 impressions; club-name demand |
| `/courts/cascadia-padel` | 15 | +6 | 31 | 1.8 (4.5) | `padel kirkland` 2 / 3 → 7 / 8 @ 1.5 |
| `/blog/best-padel-shoes` | 12 | +6 | 1,125 | 12.2 (10.9) | `best padel shoes 2026` 0 / 129 → 4 / 169 @ 10.3; last week's −6 reversing on the same impressions |
| `/blog/best-nox-padel-rackets` | 7 | +5 | 140 | 6.9 (10.0) | `best nox padel racket` 0 / 4 @ 9.0 → 1 / 6 @ 4.0; the budget-guide curve repeated (§3) |
| `/courts/m-padel-cincinnati` | 6 | +5 | 98 | 7.6 (7.4) | indexed unaided 10-21 |
| `/georgia/atlanta`, `/colorado`, `/blog/best-padel-clubs-phoenix` | 8, 5, 10 | +4 each | | | |
| `/blog/best-padel-rackets-intermediate` | 23 | **−19** | 895 | 9.5 (8.8) | last week's +23 unwinding; `best padel racket for intermediate` 11.5 → 14.0, the other head terms flat (§2 below) |
| `/new-york/brooklyn` | 4 | **−13** | 126 | 7.9 (5.3) | `padel brooklyn` 5 / 32 @ 3.5 → 0 / 20 @ 3.8; last week's spike was one week |
| `/blog/nox-at10-genius-18k-review` | 5 | **−12** | 436 | 10.3 (8.4) | impressions 697 → 436; review-intent queries collapsed (§4, SEO-DECAY-005) |
| `/courts/capital-city-padel-club` | 6 | −8 | 91 | 5.6 (4.4) | `capital city padel club` 8 → 4 clicks on the same 31 impressions |
| `/california/los-angeles` | 17 | −6 | 1,185 | 8.7 (8.9) | `padel` 260 → 136 impr, `padel los angeles` 80 → 44 impr at 5.0; position unchanged, fewer generic impressions |
| `/new-york` | 57 | −6 | 1,513 | 6.1 (6.2) | `padel nyc` 17 → 14 on 176 → 149 impr @ 3.7; `padel` 144 → 67 impr |
| `/blog/best-lightweight-padel-rackets` | 11 | −5 | 386 | 6.5 (7.9) | impressions +102, position better, clicks fewer; `lightweight padel racket` 7 → 22 impr @ 8.0 |
| `/blog/best-padel-rackets-beginners` | 1 | −5 | 541 | 17.3 (14.3) | SEO-DECAY-004 (§4) |
| `/blog/best-padel-clubs-chicago`, `/courts/camelback-padel-club`, `/florida/orlando`, `/ohio` | 4, 1, 3, 1 | −4 each | | | |

### Racket guides (record only, per the 10-12 decision)

| Page | 7d clicks (prior) | 7d impr (prior) | 7d pos (prior) |
|---|---|---|---|
| intermediate | 23 (42) | 895 (1,240) | 9.5 (8.8) |
| beginners | **1 (6)** | 541 (565) | **17.3 (14.3)** |
| advanced | 3 (6) | 263 (380) | 10.6 (12.4) |
| pro-2026 | 0 (2) | 146 (141) | 24.1 (22.0) |

Head terms: `best padel rackets for intermediate players` 9.8 → 9.6 (4 → 1 clicks on 113 → 76 impr), `best intermediate padel racket` 9.9 → 10.5 (3 → 3), `best padel racket for intermediate` 11.5 → **14.0** (2 → 3 on 90 → 78), `best padel racket for intermediate players` 10.1 → 10.0; `best padel racket for beginners` 19.6 → **20.4** (0 clicks, 86 impr), `best padel rackets for beginners` 15.0 → **26.7**, `best beginner padel racket` 12.8 → 19.3, `best beginner padel rackets` 13.0 → 30.0; `best padel rackets for advanced players` 14.1 → 16.6, `best padel racket for advanced players` 10.8 → 10.3 (2 → 0 clicks); `best padel racket 2026` 25.3 → 29.4, `best padel rackets 2026` 24.1 → 25.5; `best padel racket` 28.3 → 31.1 (28-day). The intermediate "recovery" of the last three weeks was one strong week in the middle; it is back where it was on 10-12. Beginners gets a DECAY ID below.

`rankings.csv`: 160 rows — **10 gained, 15 lost, 120 flat, 14 new, 1 dropped**. Lost: `best padel racket 2026` 15.0 → 20.6, `best padel rackets 2026` 18.5 → 23.2, `best wilson padel racket` 2.7 → 6.2 (now on 11 impressions, so the 2.7 was never real), `best padel racket` 27.8 → 31.1, `best padel rackets for beginners` 14.2 → 17.4, `best beginner padel racket` 12.1 → 13.7, `padel miami` 7.8 → 9.5, `best teardrop padel rackets` 6.9 → 7.9. Gained: `best padel racket for advanced players` 14.4 → 12.8, `best lightweight padel racket` 7.5 → 6.3, `best nox padel racket for intermediate players` 6.4 → 5.2, `best wilson padel racket for intermediate` 8.8 → 7.7, `padel san francisco` 8.2 → 7.1, `best padel shoes for men 2026` 12.6 → 11.1. New rows are `best padel racket for spin` (5.3) and the twelve club-name queries that now clear 150 impressions in 28 days (`padel society austin` 206 @ 7.0, `legacy padel austin` 202 @ 7.4, `padeland` 202 @ 8.2, `the gables padel` 179 @ 5.7, `ace padel coconut grove` 177 @ 7.3, …) — all at 0–1 clicks, the standing club-page CTR problem. Dropped: `padel racket review` (a seed; no impressions in 28 days). Positions are 28-day; the 7-day view above is the one to act on.

---

## 3. Did last week's changes work

| ID | Status | Verdict |
|---|---|---|
| **SEO-CONTENT-012** (`/blog/best-padel-rackets-spin`, PR #21) | Indexed 10-26 15:13 UTC, the day it merged (Dito's request) | **Best first read in the series.** 12 clicks / 187 impr / **4.6** / 6.4% CTR in five days. Named queries: `best padel rackets for spin and control` 0 / 5 @ **1.6**, `best padel racket for spin and control` **3 / 4 @ 3.0**, `best padel racket for spin` 0 / 3 @ 5.3, `best spin padel racket` 0 / 2 @ 6.5, `padel racket for spin` 0 / 2 @ 7.0, `padel rackets for spin` 0 / 1 @ 1.0, `padel racket spin` 0 / 1 @ 2.0; the other ~165 impressions are anonymised. **Cannibalisation watch: split, both in the top 10, so fine by the rule set last week.** The control guide kept its own versions (`best padel racket for spin and control` 0 / 16 @ 8.2, prev 0 / 11 @ 8.7; `best padel racket for control and spin` 1 / 11 @ 6.5, prev 0 / 14 @ 9.0; `padel racket for control and spin` 0 / 5 @ 7.6) and its page total is unchanged (28 / 663 @ 7.1 vs 27 / 697 @ 7.8). Google is showing the spin guide for the spin-first phrasings and the control guide for the control-first ones, which is the intent. **NOX 18K review check: no leakage** — every `nox at10` query still lands on the review, none on the spin guide (the review's own problem is SEO-DECAY-005, §4). Target (≤10 on `best padel racket for spin` by ~11-16) met on 3 impressions; second read next week |
| **SEO-CONTENT-011** (`/blog/best-wilson-padel-rackets`, PR #20) | Second full week | **Impressions doubled, clicks doubled, head term now on real impressions.** 4 clicks / 238 impr / 9.0 / 1.7% (prev 2 / 139 / 7.1). `best wilson padel racket` 0 / **11** @ 7.2 (prev 0 / 3 @ 2.7), `wilson padel racket` 0 / 12 @ 15.2, `best wilson padel racket for intermediate` 0 / 7 @ 6.6, `wilson padel rackets` 0 / 6 @ 12.2, `wilson paddle rackets` 0 / 8 @ 19.6, `best wilson padel rackets` 0 / 2 @ 7.0. The reviews held their model queries at better positions on fewer impressions: `wilson blade elite v2` 1 / 60 @ 8.5 → 0 / 11 @ **3.5**, `wilson bela pro v3 review` 0 / 17 @ 5.9 → 3 / 10 @ 3.6, `wilson optix v1 review` 0 / 10 → 1 / 6 @ 6.5. The Blade Elite review's impressions fell 197 → 114 — same shape as the NOX 18K review, smaller (§4). Target (≤10 on `best wilson padel racket` by ~11-16) met at 7.2 on 11 impressions |
| **SEO-CONTENT-010** (`/blog/best-lightweight-padel-rackets`, PR #19) | Third full week | **Still working; more impressions, better position, five fewer clicks.** 11 / 386 / 6.5 / 2.9% (prev 16 / 284 / 7.9). `lightweight padel racket` 0 / 22 @ 8.0 (7 @ 10.9), `lightest padel racket` 0 / 15 @ 6.9 (8 @ 8.1), `best lightweight padel racket` 1 / 9 @ 7.2 (0 / 6 @ 4.2), `light padel rackets` 1 / 11 @ 7.9 (1 / 4 @ 18.0), `padel racket lightweight` 0 / 9 @ 5.3 (new). 28d: 34 clicks / 800 impr / 7.3 |
| **SEO-CONTENT-009** (`/blog/best-nox-padel-rackets`, PR #18) | Fourth full week | **The budget-guide pattern repeated.** 7 / 140 / **6.9** / 5.0% (prev 2 / 102 / 10.0). `best nox padel racket` 1 / 6 @ **4.0** (prev 0 / 4 @ 9.0), `best nox padel racket for intermediate players` 1 / 8 @ 4.6, `best nox racket for intermediate` 1 / 4 @ 6.8, `best nox racket` 0 / 4 @ 8.5 (new). Last week's "two weeks of settling, nothing to edit" call was right. 28d: 17 / 577 / 9.1 |
| **SEO-CONTENT-008** (`/blog/best-budget-padel-rackets`, PR #17) | Fifth full week | Quiet week: 6 / 166 / 12.8 (prev 8 / 140 / 11.6). `best budget padel racket` 0 / 6 @ 8.5 (prev 1 / 14 @ 6.1), `best cheap padel racket` 0 / 3 @ 11.0 (8 @ 6.0), `cheap padel rackets` 0 / 17 @ 42 (unchanged, not this page's query). 28d: 23 / 678 / 11.2 — up from 5 / 93 in the prior 28. Nothing to do |
| **SEO-STRIKE-005** (`bandeja`) | Closed 10-26, no edit | **Dito rewrote the page on 10-31** (title now "Bandeja in Padel: What It Is and How to Hit It"), after the window. Baseline for his edit: 0 / 325 @ 9.6 this week (`bandeja` 0 / 124 @ 10.2, `bandeja padel` 0 / 28 @ 11.8, `what is bandeja` 0 / 10 @ 5.7). First read next week; the loop's conclusion (the results page is videos and trays) stands until the numbers say otherwise |
| **SEO-DECAY-003** (broad racket guides) | Closed 10-12, record only | Intermediate 42 → 23 with no edits; the three-week "recovery" was one week. Decision stands |
| **SEO-INDEX** wave 1 | — | `/blog/best-padel-rackets-spin` indexed 10-26 after the request; `/courts/padel-9` indexed 10-27 after the request (the one club page that needed one); `/courts/pdl-sports-social-club` indexed 10-26 **unaided** (fourth confirmation of the club rule); `/courts/evo-padel` moved from "Crawled, not indexed" to indexed on 10-27 with no request; `/claim` indexed 10-27 |

**Confounders this week.** Dito shipped 33 commits between 10-26 and 11-02. Inside the measured window: three owner edits (The Point, Three Rackets, Oakland Padel; 10-26/27), Diablo Padel added as coming soon (10-30), a compact scrollable Browse States header menu (10-30). On the last day of the window and after it: a mobile-menu header fix (10-31); **Padel USA as the main gear button wherever it is linked** (10-31, touches every gear page's buttons — the second outbound-link change on these pages in nine days); **two new guides** — `/blog/padel-scoring-explained` and `/blog/padel-court-dimensions` (10-31, both indexed 15:20 UTC the same day, both linked from `/rules`, the blog index and each other; dimensions also from the court-cost guide); **rewrites of `/blog/padel-bandeja-explained` and `/blog/padel-vs-pickleball`** with new titles (10-31; padel-vs-pickleball baseline: 0 / 206 @ 27.0); the glossary stripped of fake video tutorials and the "100+ terms" claim (10-31; baseline 1 / 492 @ 8.0); **25 new clubs** (10-31; 22 open, 3 coming soon, 11 states + Puerto Rico); a **club-facts pass** that touched the club page and the hero component for 279 clubs (11-01); **a new city-page layout** — clubs first, lead form behind a small card, Brisas duplicate removed with a redirect (11-01); Rax New Jersey marked closed, two more coming-soon clubs (11-02). None of this is in the 10-24 → 10-30 read. Next week's state/city and `/courts` numbers will carry the 11-01 layout and facts changes, so the second-week club page v2 read above (CTR 0.93% → 0.76%, back to the pre-v2 0.71%) is the last clean one the loop will get on v2 alone. It says the redesign did not move club-page CTR on its own.

---

## 4. This week's improvements

### Why no PR this week

The loop's rule is one branch per run with 1–4 changes it can attribute next week. This week nothing clears that bar: Dito's 11-01 city layout and club-facts commits sit on the exact templates a city-page or club-page change would touch; the two content gaps the loop would have filled (a scoring guide, a court-dimensions guide) he filled himself on 10-31, and both already carry three to four internal links each; the beginners guide and the NOX 18K review are decays the loop has learned not to edit on a one-week read; and the spin guide, the one page with momentum, needs nothing. Shipping something anyway would be shipping for the sake of the PR trail. The two IDs below are diagnoses with a trigger for action, not edits.

### SEO-DECAY-004 — `/blog/best-padel-rackets-beginners` *(DIAGNOSIS ONLY — no edit)*

**Evidence.** The weekly series for queries containing `best padel racket for beginners` (ten weeks): 17.9 → 25.4 → **12.9** (w/e 09-11) → 14.2 → 11.7 → 16.3 → 15.6 → 16.8 → 19.1 → **20.2** (w/e 10-30), clicks 6 → 5 → 1 → 1 → 1 → 0 → 0 over the last seven. The page: 1 / 541 @ 17.3 this week (prev 6 / 565 @ 14.3); 28d 22 / 2,292 @ 13.9 vs 76 / 3,964 @ 10.8. The slide began the week of 09-18, before any edit to the file (last edits 10-15 affiliate links, 10-23 HEAD Awin links, both link-only), and it is cluster-wide: the 2026 guide went 89 → 14 clicks and 9.4 → 19.3 over the same 28 days, advanced 28 → 17 and 8.9 → 12.2, intermediate 148 → 100 and 7.2 → 9.2. Four pages with four different edit histories falling together is not an on-page problem.

**The results page (read 11-02, US, English, non-personalised).** Page 1 for `best padel racket for beginners` is: Padel USA (store category, with a store rating and price range), two Reddit threads (one three days old), Racket Central (store), Padel Market (blog, dated 04-2026), a "Discussions and forums" block, three YouTube videos, People Also Ask, Red Bull, Game Set Match (store blog), Padel Reference (store), a "What people are saying" block of Reddit comments and Facebook posts, a **ten-product shopping grid** with DICK'S, Target and Tennis Express prices, Yahoo Sports, an **eighteen-product "In stores nearby" grid**, and a Padel USA sponsored result. Three or four slots on the whole page are informational articles; the rest is stores, shopping modules, forums and video. Our page is at 17–20, below the fold of page 2. The query has become a commerce-and-forum results page; a listicle with Amazon links and no stock, store rating or local availability is the format Google is demoting here, and the same shape (store feeds + Reddit) explains the other three broad guides.

**What would change it and why the loop will not do it now.** The things that compete on that page are a live price feed with retailer names (Product schema with `offers`, which the gear pages do not emit because prices are hand-copied and go stale), a Reddit-style "which one did you buy" angle, or a video. A title or section edit will not move a page from 20 to 10 on this results page; two edits in July proved that on the intermediate guide. **Trigger to act:** if Dito wants the broad guides back, the lever is Product/Offer structured data on the gear pages fed from a price source that stays current (Padel USA is now the primary button on every gear page, so that is the feed to ask for), which is a build, not a loop fix. Until then: record only, no ID reopening, same as DECAY-003.

### SEO-DECAY-005 — `/blog/nox-at10-genius-18k-review` *(DIAGNOSIS ONLY — one more week)*

**Evidence.** 5 / 436 @ 10.3 this week vs 17 / 697 @ 8.4; 28d 58 / 2,963 @ 9.2 vs 99 / 6,309 @ 8.1. The ten-week series for `nox at10 genius 18k*` queries: 299 → 441 → 475 → 481 → 281 → 231 → 540 → 238 → 243 → **119** impressions, clicks 5 → 5 → 9 → 12 → 4 → 5 → 5 → 4 → 9 → **0**, position 8.9 → … → 9.4 → **15.0**. The review-intent queries are the ones that emptied: `nox at10 genius 18k review` 4 / 33 @ 5.7 → 0 / 5 @ 7.4, `… 2026 review` 1 / 30 @ 6.1 → 0 / 5 @ 9.0, `… alum 2026 reviews` 0 / 23 @ 3.5 → 0 / 1, `nox at10 18k review` 0 / 17 → 0 / 7. The model-name query without "review" also halved (`nox at10 genius 18k` 81 → 43 impr, 13.2 → 19.6).

**Ruled out.** Cannibalisation by the spin guide: no `nox at10` query shows on the spin guide at all; the review holds every one. An edit: the file changed on 10-26 (a Keep Reading card to the spin guide, inside the window) and 11-02 (state-count copy, after it); neither touches the title, H1 or body. Seasonality alone: the Blade Elite review's impressions fell 197 → 114 the same week, and the review cohort's 1,931 → 1,515, so it is the review query class, not this page, but no other review lost position this way.

**Most likely.** Google has pulled the "review" phrasing for this racket toward retailer and video results the way it has for the beginners query, and the 2026 model-year queries (`… 2026 review`, `… alum 2026`) are ageing as the 2027 range is announced. One week is one week: if the cluster is still under 150 impressions and above 12 next run, the diagnosis gets a results-page read; if it bounces (the budget and NOX guides both did after a two-week dip), it closes. No edit either way until that read.

### Not acted, on purpose

- **`/texas/austin`** — 2 / 544 @ 11.5 (0.37% CTR); 28d 6 / 2,221 @ 9.7 vs 17 / 1,951 @ 8.8. The named queries (`padel austin` 40 @ 9.6, `padel club austin` 34 @ 9.3, `padel austin tx` 10 @ 8.4, `padel in austin` 10 @ 7.5, `austin padel` 9 @ 7.8) took 0 clicks for two weeks running, and the city title is the shared template ("8 Best Padel Courts in Austin, TX | Find Padel Near Me | Padel Courts Finder"). A title change is a template change across ~200 city pages, on the template Dito rewrote on 11-01. Candidate for an ID after the layout change has a read; not before. Note `padel club austin` is split with `/courts/padel-club-austin` (a club literally named that; 25 impr @ 8.1) — legitimate, not a cannibalisation fix.
- **Dito's two new guides** — already indexed, already linked from `/rules`, the blog index and each other (dimensions also from the court-cost guide). The loop's candidate link PR was mostly done before it was written. Baseline next week: `padel scoring`, `padel court dimensions`, `how big is a padel court`.
- **`/courts` cohort** — second-week v2 read recorded above; from here the 11-01 facts pass and city layout are in every read.
- **Brooklyn −13, Capital City −8, intermediate −19** — one-week spikes reverting to their prior levels at unchanged positions.
- **Next build** — spin landed, so the racket-modifier pattern has shipped its last obvious page (the 10-26 list of remaining candidates had nothing with both demand and rated rackets). The club-side signal is the same as last week: club-name queries convert at 10–29% CTR when we rank 1–4 (Cascadia, Slice, Capital City, M Padel) and at 0–1% when we rank 6–10 (Padel Society 206 impr, Legacy 202, Padeland 202, The Gables 179, Ace Padel 177 — all 0–1 clicks). That gap is where the next 50 clicks a week are, and it is a club-page-template question Dito is actively working (facts pass 11-01). Let his changes get a read before the loop proposes anything there.
- **`padel court`, court-cost, club titles, `/padel-near/*`, the four broad racket guides, shoes, bandeja** — standing do-not-reopen list. Bandeja is now Dito's edit to judge.

---

## 4b. Indexing queue

**Nothing to request this week.**

- `/blog/padel-scoring-explained` and `/blog/padel-court-dimensions` — new 10-31, 200 on `https://www.`, canonical correct, both **"Submitted and indexed"**, crawled 10-31 15:18–15:20 UTC (the same-day crawl says a request was already made).
- `/blog/padel-bandeja-explained` and `/blog/padel-vs-pickleball` — rewritten 10-31, both recrawled 10-31 15:23 UTC and indexed. Nothing to resubmit.
- `/get-started/glossary` — edited 10-31, last crawl 10-24; the edit removed content and does not need a push.
- **Not listed:** the 25 new club pages (10-31), Diablo Padel (10-30, "URL is unknown to Google" on 11-02) and the two 11-02 coming-soon clubs — club pages index unaided (fourth confirmation this week: `pdl-sports-social-club` on 10-26, and `evo-padel` cleared "Crawled, not indexed" on its own). Diablo is the fifth test of the rule; check it next run, do not request it. `/spotlight/*` stays noindex. The Brisas duplicate now 308s and needs nothing.

**Sitemap:** 27 new URLs shipped this week (2 guides + 25 clubs) plus the 11-02 clubs. Resubmit `https://www.padelcourtsfinder.com/sitemap.xml` in Search Console once.

---

## 5. Blockers and data caveats

- **GSC data through 10-30 in the 7-day read;** the last two days can still backfill ~4%. 10-31 (76 clicks, Saturday, partial) is not in any comparison. Last week's 7-day baseline (611 / 38,076) did not move on re-pull.
- **The 28-day comparison is now a clean October-vs-September read** and it is −17%; September had the badge-backlink and press push in it. Treat the 28-day as the trend and the 7-day as the signal; both point down this week, and the drop is US generic-query impressions on city pages and the `/courts` long tail, not any page the loop touched.
- **The spin guide's 187 impressions are mostly anonymised** (named rows add up to ~22). The 4.6 is on a five-day sample. Second read next week before calling the target met for good.
- **The beginners results page was read once**, non-personalised (`pws=0`, `gl=us`); shopping modules vary by location and the "In stores nearby" grid is tied to the pane's location. The diagnosis rests on the organic ordering (stores, Reddit, one dated blog, video), which does not.
- **No backlink visibility** (standing). **Ahrefs retired** (standing): volume, SERP features and competitor columns in `rankings.csv` are blank.
- **Local `main` was 33 commits behind `origin/main` at run start** (fast-forwarded before writing this report). The task file still says "drive GSC through Chrome"; the run used the service-account API, and the only browser use was one results page in the built-in pane. The 09-14 skill-file edits remain uncommitted — eleventh run.
- **The two outbound-link changes on gear pages in nine days** (10-23 paid-links-only, 10-31 Padel USA primary) make any review-page or guide CTR movement next week suspect until checked against them.

---

## 6. Next run checklist (2026-11-09)

1. **SEO-CONTENT-012 second read:** 12 / 187 / 4.6 is the baseline. Does `best padel racket for spin` hold ≤10 on real impressions? Does the control guide keep `best padel racket for spin and control` (16 impr @ 8.2) and `… control and spin` (11 @ 6.5)?
2. **SEO-DECAY-005 (NOX 18K review):** cluster at 119 impr @ 15.0, 0 clicks. Bounce → close. Still under 150 and above 12 → one results-page read for `nox at10 genius 18k review`, then decide.
3. **SEO-DECAY-004 (beginners):** record only (1 / 541 @ 17.3; head term 20.2). Do not edit. Reopen only if Dito asks for Product/Offer schema on gear pages.
4. **SEO-CONTENT-011** third read (4 / 238 / 9.0; head term 7.2 on 11 impr), **-010** fourth (11 / 386 / 6.5), **-009** fifth (7 / 140 / 6.9), **-008** sixth (6 / 166 / 12.8).
5. **Dito's 10-31 content — first reads:** `/blog/padel-scoring-explained`, `/blog/padel-court-dimensions` (new; expect impressions by 11-09), `/blog/padel-bandeja-explained` (baseline 0 / 325 @ 9.6; `bandeja` 124 @ 10.2), `/blog/padel-vs-pickleball` (0 / 206 @ 27.0; `padel vs pickleball` 40 @ 29.4), `/get-started/glossary` (1 / 492 @ 8.0).
6. **State/city after the 11-01 layout change:** 172 / 1.95% / 9.1. **`/courts` after the facts pass:** 106 / 0.76% / 9.5, 56 pages with a click. The 25 new clubs: how many indexed unaided, how many with impressions. Diablo Padel: indexed without a request?
7. **Site clicks:** 548. US 301. Mobile CTR 1.71%, desktop 1.27%.
8. **`/texas/austin`:** 2 / 544 @ 11.5. If the 11-01 layout did not move city CTR, write the Austin/city-title CTR ID with the exact template change and let Dito decide.
9. **Next build:** nothing queued. The club-name CTR gap (rank 6–10 → 0–1% CTR) is the biggest open number on the site; wait for the facts-pass read before proposing a club-page change.
10. **Do not touch:** the four broad racket guides, court-cost, shoes, club titles, `/padel-near/*`, the `padel court` theory, the bandeja page (now Dito's), the NOX 18K review (one more week).
