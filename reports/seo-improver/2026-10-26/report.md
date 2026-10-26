# SEO Improver — weekly report, 2026-10-26

**PR this run:** [#21 — SEO-CONTENT-012](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/21) — new page `/blog/best-padel-rackets-spin`. Merged as `6374280`, `npm run build` passed in an isolated worktree from `origin/main` (`5cd8f5e`), eslint clean on the new file, verified live within minutes of the merge (200, canonical correct, title and H1 as written, 34 tagged Amazon links + 8 Padel USA links, in the sitemap, linked from the blog index, the control and power guides and the NOX 18K, HEAD Extreme Pro and Babolat Viper reviews).

**Property:** `sc-domain:padelcourtsfinder.com`
**Measured window:** 2026-09-26 → 2026-10-23 (28 days) vs 2026-08-29 → 2026-09-25
**Clean 7-day read:** 2026-10-17 → 2026-10-23 vs 2026-10-10 → 2026-10-16 (non-overlapping, both Saturday → Friday)
**Prior run:** 2026-10-19
**Data source:** Google Search Console HTTP API via `~/.claude/scripts/gsc_query.py`. Pulled 10-26; data ran through 10-24 (10-24 is partial and excluded from the 7-day read). Every pull used a limit above the row count returned (614 / 746 pages, 2,957 / 5,291 queries, 4,620 / 10,752 query×page rows). URL Inspection API for 9 URLs. One results-page read (`bandeja`, built-in browser).

---

## 1. Executive summary

**Clicks came back.** 7-day clicks **611 (+45, +8%)** on 38,076 impressions (flat), CTR **1.60% (+0.11pp)**, position 9.2 (worse by 0.4). Last week's mobile CTR dip reversed on both devices (mobile 1.66% → 1.74%, desktop 1.24% → 1.41%) at the same positions, and US clicks went 338 → 372 on fewer impressions. It is still the third week under 650, but the shape is a recovery, not a continued slide, so the two results-page reads the checklist held in reserve were not spent. The 28-day view is now negative because September has rolled out: **2,499 clicks (−109, −4%)** on 154,906 impressions (−12%), position 9.2 (from 8.8).

**Where the clicks came from:** the intermediate racket guide, which the loop stopped editing on 10-12, took **42 clicks (from 19) on 1,240 impressions (from 747)**, with all three head terms inside the top 12 for the first time since July (`best padel rackets for intermediate players` 12.1 → 9.8, `best intermediate padel racket` 12.2 → 9.9, `best padel racket for intermediate` 16.9 → 11.5). The `/courts` cohort gained 39 clicks in the first full week of club page v2 (CTR 0.71% → 0.93%), 14 of them on a new Capital City Padel Club page. Brooklyn went 3 → 17 on an 11% CTR. Against that, `/new-york` lost 11, the teardrop guide 9, the glossary 7 and the shoes guide 6, all on flat-to-slightly-worse positions.

**Last week's build landed like NOX did:** the Wilson guide was indexed the same day it shipped and took **2 clicks on 139 impressions at 7.1** in its first five days (NOX's first full week: 2 clicks / 178). `best wilson padel racket` sits at 2.7 on 3 impressions. The three Wilson reviews kept every model query. The lightweight guide doubled again (7 → 16 clicks, 130 → 284 impressions, 7.9).

**This week's build shipped:** `/blog/best-padel-rackets-spin` — the eight reviewed rackets with a rough, textured or drilled face (SEO-CONTENT-012, §4). The evidence was the same shape as the lightweight cluster: 103 impressions and 4 clicks in 28 days on spin queries landing on the control guide, a ten-deep autocomplete, no page targeting it.

**SEO-STRIKE-005 closed with no edit:** the `bandeja` impression spike (762 in 28 days) was one week long and is over (490 → 60 impressions week over week), and the results page is videos, People Also Ask, Reddit, short videos, a Walmart tray listing and bandeja paisa images before any article. The word means "tray" in Spanish; most of those searchers are not padel players. A title change buys nothing (§4).

**The club-page indexing rule is confirmed twice.** Both conditional wave-2 club pages from last week (`m-padel-cincinnati`, `open-play-pickleball-and-padel-club`) were indexed on 10-21 without a request. Capital City Padel Club was indexed the day it shipped. Club pages are off the Request Indexing list for good; blog pages still get one.

**The single most important action (Dito, 1 minute):** Request Indexing for `https://www.padelcourtsfinder.com/blog/best-padel-rackets-spin`, then `/courts/padel-9` (§4b).

---

## 2. Movement since last run

| Cohort | 7d clicks | Δ vs prior 7d | 7d CTR (prior) | 7d pos (prior) | 28d clicks | Δ vs prior 28d | 28d pos (prior) |
|---|---:|---:|---|---|---:|---:|---|
| state/city | 206 | **−15** | 2.00% (1.92%) | 9.3 (8.6) | 942 | −14 | 8.7 (8.8) |
| `/courts/*` | 140 | **+39** | 0.93% (0.71%) | 9.4 (9.3) | 454 | +85 | 9.2 (8.8) |
| `best-padel-rackets-*` (broad) | 100 | **+33** | 2.62% (2.38%) | 11.6 (12.0) | 373 | −51 | 11.1 (9.4) |
| `/blog/*` (guides, how-to) | 95 | −8 | 1.41% (1.41%) | 10.0 (9.7) | 392 | −59 | 9.5 (9.3) |
| `*-review` | 36 | −2 | 1.86% (2.08%) | 8.3 (8.3) | 190 | −10 | 8.2 (7.9) |
| `/padel-near/*` | 18 | −3 | 3.31% (4.19%) | 7.7 (7.0) | 81 | −8 | 7.7 (7.1) |
| homepage | 17 | +1 | 3.50% (3.16%) | 8.3 (9.9) | 66 | −26 | 8.8 (11.4) |

Cohort positions are impression-weighted across pages and read a little worse than the property-level number; compare each row with its own prior. `/courts` without the new Capital City page: 126 clicks (+25), CTR 0.84% (0.71%), position 9.5 (9.3), 315 pages. That is the first full week of club page v2 (10-15): CTR up 0.13pp on unchanged positions, which is the direction the redesign was meant to move. One week; recorded, not declared.

By device: mobile 389 clicks (+22) at 1.74% (1.66%), position 8.4 (8.3); desktop 217 (+23) at 1.41% (1.24%), position 10.3 (9.5). By country: USA 372 / 26,229 @ 9.0 (prev 338 / 26,739 @ 8.7); UK 45 (+4); Germany 16; Spain 12; Indonesia 12 (−1); Netherlands 11 (+2).

### Biggest 7-day page movements

| Page | Clicks | Δ | Impr | Pos (prior) | Note |
|---|---:|---:|---:|---|---|
| `/blog/best-padel-rackets-intermediate` | 42 | **+23** | 1,240 | 8.8 (9.2) | impressions +493; all three head terms inside the top 12 (§2 below). No edit since 10-12 |
| `/new-york/brooklyn` | 17 | **+14** | 149 | 5.3 (5.3) | `padel brooklyn` 1 → 5 clicks on 37 → 32 impr at 3.8 → 3.5; page CTR 1.9% → 11.4% on the same position |
| `/courts/capital-city-padel-club` | 14 | **+14** | 103 | 4.4 (new) | shipped and indexed 10-19; `capital city padel club` 8 / 31 @ 3.3 |
| `/blog/best-lightweight-padel-rackets` | 16 | +9 | 284 | 7.9 (8.2) | SEO-CONTENT-010, second full week |
| `/blog/best-padel-rackets-tennis-elbow` | 12 | +8 | 188 | 7.1 (7.4) | impressions +90 |
| `/blog/best-padel-rackets-control` | 27 | +5 | 697 | 7.8 (7.8) | the page the new spin guide links from |
| `/florida/orlando`, `/ohio` | 7, 5 | +4 each | | | |
| `/new-york` | 63 | **−11** | 1,627 | 6.2 (5.7) | `padel nyc` 14 → 17 clicks but `padel near me` on this page 5 → 2 and `padel in nyc`, `where to play padel in nyc` dropped out of the top rows; impressions −110 |
| `/blog/best-teardrop-padel-rackets` | 9 | **−9** | 302 | 9.6 (8.5) | `best teardrop padel racket` 2 / 35 @ 5.8 → 0 / 21 @ 6.3; `best teardrop padel rackets` 2 / 24 → 0 / 17; last week's +5 unwinding on the same impressions |
| `/get-started/glossary` | 0 | −7 | 290 | 8.9 (7.8) | `padel terms` 1 / 31 @ 8.0 → 0 / 22 @ 5.9: better position, no clicks |
| `/blog/best-padel-shoes` | 6 | −6 | 1,141 | 10.9 (11.0) | CTR 1.12% → 0.53% on +72 impressions; `best padel shoes 2026` 2 / 135 @ 10.2 → 0 / 129 @ 11.0 |
| `/connecticut`, `/massachusetts` | 3, 2 | −5 each | | 7.4 (7.0), 10.0 (8.2) | |
| `/blog/best-nox-padel-rackets` | 2 | −4 | 102 | 10.0 (9.2) | §3 |
| `/florida/miami` | 3 | −2 | 342 | 8.2 (8.1) | the Miami clubs guide took 7 (+1) at 9.3: the standing city-page-vs-guide pattern |

### Racket guides (record only, per the 10-12 decision)

| Page | 7d clicks (prior) | 7d impr (prior) | 7d pos (prior) |
|---|---|---|---|
| intermediate | **42 (19)** | 1,240 (747) | 8.8 (9.2) |
| beginners | 6 (9) | 565 (593) | 14.3 (12.9) |
| advanced | 6 (3) | 380 (171) | 12.4 (13.0) |
| pro-2026 | 2 (2) | 141 (148) | 22.0 (22.0) |

Head terms: `best padel rackets for intermediate players` 12.1 → **9.8** (0 → 4 clicks on 58 → 113 impr), `best intermediate padel racket` 12.2 → **9.9** (1 → 3), `best padel racket for intermediate` 16.9 → **11.5** (1 → 2 on 49 → 90), `best padel racket for intermediate players` 10.6 → 10.1 (15 → 48 impr); `best beginner padel racket` 11.8 → 12.8, `best padel racket for beginners` 17.2 → 19.6; `best padel racket 2026` 26.3 → 20.0 (1 click), `best padel rackets 2026` 29.9 → 22.0; `best padel racket for advanced players` 15.7 → 10.8 (2 clicks); `best padel racket` 28.3 → 27.2. The intermediate recovery is now three weeks old and getting stronger with no edits. The beginners guide is the one going the other way (12.9 → 14.3, 9 → 6 clicks); one more week before it gets an ID.

`rankings.csv`: 146 rows — **9 gained, 13 lost, 116 flat, 8 new**. Notable: `best lightweight padel racket` 11.4 → 7.5 and `… 2026` 8.5 → 5.5 (28-day), `best budget padel racket` 7.9 → 6.9, `padel austin` 11.7 → 10.4; `best padel racket 2026` 12.6 → 15.0 and `best padel rackets 2026` 14.8 → 18.5, `best padel racket for beginners` 15.0 → 17.6, `best round shape padel racket` 4.6 → 6.1, `padel haus dumbo` 10.7 → 37 (6 impressions of noise). Positions are 28-day; the 7-day view above is the one to act on.

---

## 3. Did last week's changes work

| ID | Status | Verdict |
|---|---|---|
| **SEO-CONTENT-011** (`/blog/best-wilson-padel-rackets`, PR #20) | Indexed 10-19, crawled 12:50 UTC the same day it merged | **Landed like NOX did.** First five days: 2 clicks / 139 impr / 7.1 / 1.4% CTR (NOX's first full week: 2 / 178 / 10.1). Visible target queries are thin, as predicted: `best wilson padel racket` 0 / 3 @ **2.7**, `… for intermediate` 0 / 4 @ 6.8, `… for beginners` 0 / 1 @ 4.0, `wilson padel racket` 0 / 2 @ 15.5; the other ~125 impressions are queries GSC does not show. **Cannibalisation check passed:** `wilson blade elite v2` stayed on the review (1 / 60 @ 8.5, prev 0 / 66 @ 8.4), as did `wilson bela v3 review` (1 / 23 @ 5.8), `wilson bela pro v3 review` (0 / 17 @ 5.9) and `wilson optix v1 review` (0 / 10 @ 6.6). The `… for intermediate` query now shows on both the guide (6.8) and the intermediate guide (12.0, 1 impr) — the guide is winning it, which is the intent. Target (≤10 on `best wilson padel racket` by ~11-16) is met on paper on 3 impressions; second read next week |
| **SEO-CONTENT-010** (`/blog/best-lightweight-padel-rackets`, PR #19) | Second full week | **Working.** 16 clicks (from 7) / 284 impr (from 130) / 7.9 (from 8.2) / 5.6% CTR. Target queries: `best lightweight padel racket` 0 / 6 @ **4.2** (5.7), `… 2026` 0 / 3 @ 5.0, `lightest padel racket` 0 / 8 @ 8.1 (6.5), `lightweight padel racket` 0 / 7 @ 10.9 (from 33), `best light padel racket` 1 / 2 @ 4.0, `light padel rackets` 1 / 4. The clicks again come from the long tail rather than the head terms. 28d: 23 clicks / 414 impr / 8.0. Target (≤10 on the head term by 11-09) met |
| **SEO-CONTENT-009** (`/blog/best-nox-padel-rackets`, PR #18) | Third full week | **Gave ground this week.** 2 clicks (from 6) / 102 impr (from 157) / 10.0 (from 9.2). `best nox padel racket for intermediate players` 0 / 10 @ 7.4 (prev 2 / 18 @ 4.9), `best nox padel racket` 0 / 4 @ 9.0 (prev 0 / 8 @ 5.0), `best nox racket for intermediate` 1 / 8 @ 5.1 (0 / 4 @ 5.2). Two weeks of settling after the launch spike, the same curve the budget guide drew in weeks 2–3 before its head terms came back (next row). Nothing to edit; 28d: 10 clicks / 335 impr / 9.6 |
| **SEO-CONTENT-008** (`/blog/best-budget-padel-rackets`, PR #17) | Fourth full week | **Head terms came back.** 8 clicks (from 5) / 140 impr (from 188) / 11.6 (from 11.7). `best budget padel racket` 1 / 16 @ **6.1** (prev 0 / 12 @ 8.8), `best cheap padel racket` 0 / 9 @ 6.1 (9.8), `best budget padel racket for intermediate` 1 / 5 @ 6.8, `cheap padel rackets` 0 / 16 @ 42. 28d: 17 clicks / 467 impr / 9.9 |
| **SEO-STRIKE-005** (`bandeja`) | Diagnosed, **closed, no edit** | §4 |
| **SEO-DECAY-003** (broad racket guides) | Closed 10-12, record only | Intermediate 19 → 42 clicks with no edits (§2). Decision stands |
| **SEO-INDEX** wave 1 / wave 2 | — | Wilson guide indexed 10-19; `m-padel-cincinnati` and `open-play-pickleball-and-padel-club` indexed 10-21 **without a request** (wave 2 was conditional and never needed); `padel-9` still "Discovered, not indexed"; `evo-padel` still "Crawled, not indexed" (crawled 10-19) |

**Confounders this week.** Dito shipped 13 commits between 10-21 and 10-26: The Club at Marlboro owner update and NJ map pins (10-21); **Club Spotlight** — paid feature pages at `/spotlight/[slug]` plus pinned cards (10-21) and a $179 Stripe checkout on `/advertise` (10-22); **paid links only** — a `links:audit` script, unpaid store links removed from gear pages and affiliate legal text (10-23), which touched the gear routes' outbound links the week the spin guide's source reviews were measured; HEAD US-store Awin links on two gear pages (10-23); `/ai-leaderboard` (10-25, rewritten 10-26, indexed 10-25); the 10-26 club finder (PDL Sports & Social Club added, Cincinnati Padel Club renamed from Club Padel Newtown with a 308, Three Rackets open, Ohio guide updated); and **a GSC 404 fix** — five stale `/padel-near/*` metros (Chandler, Chattanooga, Des Moines, Virginia Beach, Jacksonville) now 308 to their city page and `/georgia/sandy-springs` 308s to `/georgia` (10-26). None of these touched the pages that moved most this week; the `/padel-near` redirects landed after the measured window.

---

## 4. This week's improvements

### SEO-CONTENT-012 — `/blog/best-padel-rackets-spin` *(SHIPPED — PR #21, merged `6374280`, live)*

**Evidence.** Queries containing "spin" and "padel racket" drew **103 impressions and 4 clicks in 28 days**, every one of them landing on the control guide, which does not target the word: `best padel racket for control and spin` 52 impr @ 8.0 (4 clicks), `best padel racket for spin and control` 27 @ 8.0, `best padel rackets for spin and control` 9 @ 8.6, `… for control and spin` 7 @ 8.1, `padel racket for spin and control` 6 @ 6.5. Google autocomplete (checked 10-26) returns ten suggestions for `best padel racket for spin`: `… and control`, `… and power`, `… and slice`, `… 2025`, `… reddit`, `… shots`, `… under 100`, `… players`, `good padel racket for spin`. That is more demand than the lightweight cluster had when it was built (and that page is at 16 clicks a week), and the site has eight reviewed rackets whose reviews already describe a spin surface. The other candidates checked and passed over: `best padel racket for men` (ten-deep autocomplete, but once the `women` substring is excluded only ~33 impressions, mostly `padel racket for intermediate men`), HEAD brand (191 impressions, but most are `round head shape` / `teardrop head shape` racket-shape queries, not the brand), Babolat (94, two rated rackets), carbon (47, product-feed noise).

**What shipped.**
1. The eight reviewed rackets with a rough, textured or drilled face, ranked by surface type and playing level: NOX AT10 Genius 18K (Dual Spin, #1, $259.99), HEAD Extreme Pro (Extreme Spin rough surface, spin + power, $299.95 with Padel USA as the main store), Babolat Technical Viper (3D Spin+, $229.99), NOX AT10 Genius Attack (Spin 3D, $229.99), Wilson Bela Pro V3 (Spin2 + DuoGrid, $399.00 Padel USA), Wilson Blade Elite V2 (textured hybrid + Sharp Hole, intermediate, $208.58 Japan import), NOX ML10 Pro Cup Rough (sand finish, spin + control, NOX's own store in euros via `NOX_ML10_PRO_CUP_ROUGH`, no store link because no paying store carries it), Wilson Optix V1 (Sharp Hole, beginners, $109.00). Every price, weight, score, ASIN and store link is copied from the review it already has; `BuyButtons` where Padel USA is primary.
2. The page says plainly that we score power, control and comfort and do not score spin, and that nothing was re-tested; the ranking is by the surface each racket is built with.
3. "How a padel racket makes spin": rough/sand finish vs moulded 3D texture vs drilling pattern, that grit wears with play, and that shape decides which shots the spin goes on. Links to the control, power, shapes and bandeja pages.
4. Comparison table, seven FAQs matched to the autocomplete phrasings (overall, spin + control, spin + power, beginners, intermediate, does a rough surface wear out, does shape matter), Article + FAQPage + ItemList schema, `GEAR_DISCLOSURE`.
5. **Six inbound links:** blog index card plus a Keep Reading card on the control guide, the power guide and the NOX 18K, HEAD Extreme Pro and Babolat Viper reviews.
6. `npm run sitemap:dates`: new slug; lastmod moved to 10-26 for the new URL, `/blog`, the two guides and the three reviews. The generator now lists `/ai-leaderboard` as a static route — Dito's hand-added page-dates entry was being deleted every time the script ran.

**Expected effect and check:** impressions within a week of indexing; first read 11-02. Target: position ≤10 on `best padel racket for spin` by ~11-16. **Cannibalisation watch:** `best padel racket for control and spin` (52 impr @ 8.0, 4 clicks) belongs to the control guide today. If it moves to the spin guide at a similar position that is fine; if it splits and both pages fall out of the top 10, the fix is the spin guide's title, not the control guide's.

### SEO-STRIKE-005 — `bandeja` on `/blog/padel-bandeja-explained` *(CLOSED, no edit)*

The 762-impression figure was one week: `bandeja` drew 490 impressions in the week of 10-10 → 10-16 and **60** in the week after, at the same position (10.1 → 9.9), with 0 clicks in both. The page itself went 2 clicks / 754 impr / 9.4 → 2 / 258 / 8.6. The live results page for `bandeja` (US, English) runs: four YouTube videos, People Also Ask ("What is the meaning of bandeja?", "What does bandejas mean in English?", "What is a padel bandeja?"), Padel39 and Reddit web results, a short-videos carousel, a Walmart listing for decorative trays, bandeja paisa images, and then this site's article. The word is Spanish for "tray" and the name of a Colombian dish; the padel searchers are a minority of that query and are served videos first. The title ("The Bandeja, Explained: Padel's Most Important Shot") already answers the People Also Ask phrasing. The queries that do convert here are the two-word ones (`bandeja padel` 1 / 84 @ 11.8 over 28 days, `what is bandeja` 1 / 11 @ 6.0), and they are not large enough to justify a title aimed at them. Closed; the spin guide now links to the page from its intro and Keep Reading.

### Not acted, on purpose

- **The beginners guide** (12.9 → 14.3, 9 → 6 clicks, `best padel racket for beginners` 17.2 → 19.6) — one more week; if it is still falling it gets a DECAY ID with a diagnosis, not an edit, given what two edits did to the intermediate guide in July.
- **`/new-york` −11** — `padel nyc` itself gained clicks; the loss is `padel near me` on this page (5 → 2) and the `in nyc` variants rotating out of the top rows. The page is at 6.2 on 1,627 impressions. Normal range.
- **Teardrop −9, glossary −7, shoes −6** — flat positions, fewer clicks on the same impressions. Shoes (SEO-CTR-006, closed 09-07) stays closed: `best padel shoes` 17.7, `best padel shoes 2026` 11.0.
- **`/courts` after club page v2** — recorded above; second week next run.
- **Next build** — decide after the spin first read. Nothing else on the modifier list has both the demand and the rated rackets (§4 evidence). If spin lands like lightweight, the remaining racket-shape pattern is exhausted and the next page should come from the club side (the Brooklyn and Capital City numbers say club-name demand converts at 10–14% CTR) or from a third rated HEAD or Babolat racket, which is review work rather than a loop task.
- **`padel court`, court-cost, club titles, `/padel-near/*`, the four broad racket guides** — standing do-not-reopen list.

---

## 4b. Indexing queue

**Wave 1 — today (2 requests).**

```
https://www.padelcourtsfinder.com/blog/best-padel-rackets-spin
https://www.padelcourtsfinder.com/courts/padel-9
```

Notes:
- `/blog/best-padel-rackets-spin` — new today, 200 on `https://www.`, canonical correct, in the sitemap, six internal links. Unknown to Google until crawled; blog pages still get the push (the Wilson guide was indexed 12:50 UTC on the day it merged, after Dito's request).
- `/courts/padel-9` — still "Discovered, currently not indexed" a week after shipping, the only club page in the 10-13 batch that has not indexed on its own. One request.
- **Not listed:** `/courts/pdl-sports-social-club` (new 10-26; club pages index unaided — both of last week's conditional wave-2 pages did, on 10-21, as did Capital City Padel Club on the day it shipped, so the rule is now confirmed on three batches); `/courts/evo-padel` ("Crawled, not indexed" since 10-19 — a coming-soon club with a city-level location; a request does not change what Google already crawled and declined); `/ai-leaderboard` (indexed 10-25, the day it shipped); `/blog/new-padel-clubs-october-2026` (indexed); `/spotlight/the-club-at-marlboro` (returns 200 but is `noindex, nofollow` until the spotlight is live, and is not in the sitemap — do not request); `/claim` (still "unknown to Google", already on Dito's daily list). The five `/padel-near/*` 308s need nothing; Google will follow them.

**Sitemap:** one new blog URL and one new club URL shipped this week. Resubmit `https://www.padelcourtsfinder.com/sitemap.xml` in Search Console.

---

## 5. Blockers and data caveats

- **GSC data through 10-23;** the last two days can still backfill ~4%. 10-24 (60 clicks @ 9.9) is partial and not in any comparison. Last week's 7-day baseline backfilled from 566 to 568 clicks and 38,012 to 38,030 impressions; the report uses the date-dimension totals (566 / 38,012) so the comparison is like for like.
- **The Wilson guide's 139 impressions are mostly anonymised queries;** the named rows add up to 15. The 2.7 on `best wilson padel racket` is 3 impressions. Treat the first read as "indexed and showing", not as a ranking.
- **No backlink visibility** (standing). **Ahrefs retired** (standing): volume, SERP features and competitor columns in `rankings.csv` are blank.
- **The task file still says "drive GSC through Chrome".** The run used the service-account API; the only browser use was one Google results page for `bandeja` in the built-in browser pane. The skill-file edits proposed on 09-14 remain uncommitted — tenth run.
- **Worktree builds need a real `node_modules`.** A symlink to the main checkout's `node_modules` makes Turbopack fail ("symlink points out of the filesystem root"); `npm ci --prefer-offline` in the worktree took about a minute and the build then passed. Noted so the next run does not lose the time.
- **The lint pass shows two pre-existing warnings** (unused `TrackedLink` import in the Babolat Viper and HEAD Extreme Pro reviews). Not mine; left alone.
- **`/ai-leaderboard` page-dates entry** was being dropped by `npm run sitemap:dates` because the generator did not know the route; fixed in this PR. The sitemap fell back to the global date in the meantime, which happened to be the same day, so nothing was wrong live.
- **The `paid links only` commit (10-23)** removed unpaid store links from gear pages mid-window. If review-page CTR moves next week, check that before crediting or blaming anything else.

---

## 6. Next run checklist (2026-11-02)

1. **SEO-CONTENT-012 first read:** indexed? impressions on `best padel racket for spin*`? Does `best padel racket for control and spin` (52 impr @ 8.0, 4 clicks) stay on the control guide, move, or split?
2. **SEO-CONTENT-011 second read:** 2 / 139 / 7.1 is the baseline; head term 2.7 on 3 impressions. Do the three Wilson reviews still hold their model queries (Blade Elite review 60 impr @ 8.5 on `wilson blade elite v2`)?
3. **SEO-CONTENT-010 third read** (16 / 284 / 7.9), **SEO-CONTENT-009 fourth read** (2 / 102 / 10.0 — did the budget-guide pattern repeat?), **SEO-CONTENT-008 fifth read** (8 / 140 / 11.6; head term 6.1).
4. **Racket guides:** record only. Beginners guide: if `best padel racket for beginners` is still above 19 and clicks under 9, open a DECAY ID with a diagnosis only.
5. **`/courts` cohort, second week of club page v2:** 140 / 0.93% / 9.4 (126 / 0.84% / 9.5 without Capital City). **State/city:** 206 / 2.00% / 9.3.
6. **Site clicks:** 611. Mobile CTR 1.74%, desktop 1.41%.
7. **Indexing:** did `padel-9` index after the request? Did `pdl-sports-social-club` index unaided (fourth confirmation of the club rule)?
8. **Next build:** only after the spin first read. If spin lands, the racket-modifier pattern is likely exhausted; look at club-side pages or a third rated HEAD/Babolat racket.
9. **Do not touch:** the four broad racket guides, court-cost, shoes, club titles, `/padel-near/*`, the `padel court` theory, the bandeja page.
