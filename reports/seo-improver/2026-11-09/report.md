# SEO Improver — weekly report, 2026-11-09

**PR this run:** https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/25 — SEO-CANNIBAL-002, holiday gifts consolidation. Merged 9c57161.

**Property:** `sc-domain:padelcourtsfinder.com`
**Measured window:** 2026-10-10 → 2026-11-06 (28 days) vs 2026-09-12 → 2026-10-09
**Clean 7-day read:** 2026-10-31 → 2026-11-06 vs 2026-10-24 → 2026-10-30 (non-overlapping, both Saturday → Friday)
**Prior run:** 2026-11-02
**Data source:** Google Search Console HTTP API via `~/.claude/scripts/gsc_query.py`. Pulled 11-09; data ran through 11-07 (11-07 is partial and excluded from the 7-day read). Every pull used a limit above the row count returned (641 / 615 pages, 4,693 / 4,520 query×page rows for the 7-day reads; 751 / 761 pages, 5,280 / 5,260 queries and 10,526 / 10,692 query×page rows for the 28-day compare). URL Inspection API for 7 URLs. No browser use this run.

---

## 1. Executive summary

**Clicks bounced: 603 (+55, +10%)** on 36,198 impressions (+1%), CTR 1.67% (+0.13pp), position 9.2 (from 9.1). The six-week series is 718 → 598 → 566 → 611 → 548 → 603, so this is a return to the October level, not a recovery past it. The gain is American and broad: US clicks 301 → 347 (+15%), mobile +26, desktop +31, and every cohort except reviews and the homepage added clicks. The 28-day view is **2,328 clicks (−437, −16%)** on 147,981 impressions (−8%), position 9.08 (from 8.21) — the same October-vs-September gap as last week, now with the first week of November in it.

**What moved.** `/new-york` +8 (65, `padel courts near me` 4 / 20 @ 2.5), `/california/los-angeles` +7 (24), the lightweight racket guide **+13 (24 clicks, its best week, 5.1% CTR)**, the NOX 18K review +5 (10, the "bounce" case in SEO-DECAY-005), the teardrop guide +5 (15), the advanced and beginners guides +5 each on unchanged positions. Losers were last week's one-week spikes unwinding: Cascadia −10, Slice Austin −9 (both club-name queries), the control guide −7 (21), intermediate −7 (16 on 564 impressions, the impressions themselves fell 37%).

**The spin guide held** (12 / 220 @ 5.5, `best padel racket for spin` ≤10 on 16 impressions): SEO-CONTENT-012 is closed as working. The five racket-modifier pages built by this loop took 70 clicks this week (lightweight 24, spin 12, NOX 6, budget 6, tennis elbow 20, Wilson 2) against 35 for the four broad guides.

**The gifts cluster is the one timely thing on the site and it was broken.** Gift-query impressions tripled in 28 days (210 → 637, 1 click) as the holiday ramp started, and the evergreen `/blog/padel-gifts` ranked 19–43 for them while the May Mother's Day page outranked it on `best padel gifts`, `padel gifts` and `padel gift ideas`. Cause: not one page on the site linked to the evergreen guide — the header, the bags guide and both seasonal pages all pointed at the Mother's/Father's Day pages. This run's PR fixes that (SEO-CANNIBAL-002, §4).

**The single most important action (Dito, 2 minutes):** paste the 60-word "What is a bandeja?" block from SEO-STRIKE-006 (§4) into your bandeja rewrite. Your 10-31 edit moved the page from 9.6 to 6.9 and doubled its impressions to 642 a week, with one click: the page now sits in the snippet zone for a definitional query with no definition-first paragraph to win it. Then resubmit `https://www.padelcourtsfinder.com/sitemap.xml` once (10 new club URLs this week).

---

## 2. Movement since last run

| Cohort | 7d clicks | Δ vs prior 7d | 7d CTR (prior) | 7d pos (prior) | pages w/ click (prior) | 28d clicks | Δ vs prior 28d | 28d pos (prior) |
|---|---:|---:|---|---|---|---:|---:|---|
| state/city | 194 | **+24** | 2.29% (2.02%) | 10.2 (8.7) | 50 (44) | 777 | **−227** | 8.7 (7.5) |
| racket guides (broad + modifier) | 147 | +6 | 2.74% (2.91%) | 10.1 (11.2) | 15 (15) | 531 | −54 | 10.9 (9.2) |
| `/courts/*` | 119 | **+13** | 0.85% (0.76%) | 9.9 (9.5) | **72 (56)** | 466 | +58 | 9.5 (8.6) |
| `/blog/*` (guides, how-to, city guides) | 75 | +7 | 1.15% (1.14%) | 11.2 (10.9) | 25 (18) | 265 | −57 | 10.5 (9.1) |
| `*-review` | 31 | −1 | 2.14% (2.11%) | 9.0 (8.6) | 9 (10) | 137 | −96 | 8.5 (7.9) |
| `/padel-near/*` | 17 | +3 | 5.06% (3.18%) | 7.2 (7.8) | 12 (11) | 70 | −16 | 7.4 (7.4) |
| homepage | 13 | −1 | 3.13% (3.32%) | 6.7 (8.9) | 1 | 60 | −32 | 8.5 (8.5) |

Cohort positions are impression-weighted across pages; compare each row with its own prior. The state/city position moved 8.7 → 10.2 while clicks and CTR rose — that is a city-page effect, split out below.

**City pages vs state pages (first week after Dito's 11-01 city layout).** City pages (128 with impressions): 82 / 5,154 @ 11.5 / 1.59% vs 68 / 5,058 @ 9.2 / 1.34%. State pages (43, template unchanged): 112 / 3,342 @ 8.1 / 3.35% vs 102 / 3,379 @ 7.8 / 3.02%. On the 451 query×page rows present in both weeks, city pages went **9.5 → 10.3 and 1.54% → 1.26% CTR** (29 vs 35 clicks); state pages went 7.5 → 7.3 and 3.46% → 4.08%. Individual city pages: Austin 11.5 → 16.5, Chicago 9.8 → 18.9 (3 → 0 clicks), Brooklyn 7.9 → 15.1, Dallas 10.8 → 23.3, Las Vegas 12.0 → 31.0, Houston 10.3 → 11.6, Atlanta 8.1 → 11.0; Los Angeles 8.7 → 9.4 with more clicks, Orlando 7.3 → 6.7, Fort Lauderdale 5.2 → 5.8. The diff shows the "Can I play tonight?", map and venue-comparison sections were **moved below the club list, not removed**, so this is not a content loss. One week, and partly new long-tail impressions (Brooklyn's 15.1 includes `padel equipment nyc` at 77 and `padel paddles nyc` at 60). SEO-DECAY-006 in §4 records it with a trigger.

By device: mobile 388 clicks (+26) at 1.81% (1.71%), position 8.4 (8.5); desktop 212 (+31) at 1.47% (1.27%), position 10.4 (10.0). By country: USA 347 / 24,115 @ 9.3 (prev 301 / 24,667 @ 9.1); UK 45 (+5); Germany 16 (0); Spain 13 (+3); Canada 11 (+1); Indonesia 11 (−6); Netherlands 9 (−17 — last week's 26 at 7.4% CTR was the one-off it looked like); Denmark 9 (+4).

Daily: 76 (Sat) · 77 · **102** (Mon) · 87 · 96 · 80 · 85 (Fri). 11-07 (partial): 77.

### Biggest 7-day page movements

| Page | Clicks | Δ | Impr | Pos (prior) | Note |
|---|---:|---:|---:|---|---|
| `/blog/best-lightweight-padel-rackets` | 24 | **+13** | 467 | 7.3 (6.5) | best week of the series; `light padel rackets` 2 / 22 @ 7.9, `lightweight padel racket` 1 / 26 @ 9.0, `lightest padel racket 2026` 1 / 5 @ 6.0; `lightest padel rackets` 0 / 23 @ 13.0 is the next query to win |
| `/new-york` | 65 | +8 | 1,351 | 6.5 (6.1) | `padel courts near me` 1 / 63 @ 1.6 → 4 / 20 @ 2.5, `padel new york` 4 → 6, `nyc padel` 1 → 4; `padel nyc` 14 → 8 on the same impressions |
| `/california/los-angeles` | 24 | +7 | 1,085 | 9.4 (8.7) | `padel` 136 → 43 impr (the generic query keeps draining), named LA queries all +1 |
| `/blog/best-padel-rackets-beginners`, `-advanced`, `-2026`, `best-teardrop`, NOX 18K review, `/courts/columbia-racquet-club`, `/courts/padel-ranch` | 6, 8, 5, 15, 10, 7, 5 | +5 each | | | beginners 1 → 6 at 18.5 (17.3); advanced at 9.6 (10.6); the 2026 pro guide 0 → 5 at 16.4 (24.1) on 268 impr; teardrop 9.1 (9.6) |
| `/new-jersey`, `/courts/ace-padel-coconut-grove`, `/courts/mouratoglou-tennis-center-san-antonio` | 8, 4, 4 | +4 each | | | Ace Padel: first clicks on 245 weekly impressions (now members-only per Dito's 11-09 data commit) |
| `/courts/cascadia-padel` | 5 | **−10** | 27 | 3.2 (1.8) | `padel kirkland` 7 / 8 → spike unwound |
| `/courts/slice-padel-co-downtown-austin` | 0 | −9 | 11 | 5.8 (6.3) | last week's 29% CTR was nine clicks on one week of brand demand |
| `/blog/best-padel-rackets-control` | 21 | −7 | 631 | 7.3 (7.1) | `best padel racket for spin and control` 0 / 31 @ 8.6 (0 / 16) — the control guide still holds the control-first phrasing; §3 |
| `/blog/best-padel-rackets-intermediate` | 16 | −7 | 564 | 8.8 (9.5) | impressions 895 → 564; every head term lost impressions at the same or better position |
| `/colorado` | 0 | −5 | 59 | 9.8 (9.9) | 5 → 0 on the same impressions and position; one week |
| `/blog/best-padel-clubs-miami`, `-phoenix`, `/blog/best-padel-rackets-women`, `/florida/fort-lauderdale` | 4, 6, 0, 4 | −4 each | | | women's guide 0 / 102 @ 27.6 (21.7) — the one modifier page that never worked |

### Racket guides (record only, per the 10-12 decision)

| Page | 7d clicks (prior) | 7d impr (prior) | 7d pos (prior) |
|---|---|---|---|
| intermediate | 16 (23) | 564 (895) | 8.8 (9.5) |
| beginners | 6 (1) | 544 (541) | 18.5 (17.3) |
| advanced | 8 (3) | 307 (263) | 9.6 (10.6) |
| pro-2026 | 5 (0) | 268 (146) | 16.4 (24.1) |

Head terms: `best padel rackets for intermediate players` 9.6 → 6.7 (1 → 0 clicks, 76 → 34 impr), `best intermediate padel racket` 10.5 → 9.6 (3 → 0), `best padel racket for intermediate` 14.0 → 12.4 (3 → 0 on 78 → 56), `best padel racket for intermediate players` 10.0 → 10.4; `best padel racket for beginners` 20.4 → 19.6 (0 clicks, 86 impr both weeks), `best padel rackets for beginners` 26.7 → **33.1**, `best beginner padel racket` 19.3 → 22.6; `best padel rackets for advanced players` 16.6 → 15.9, `best padel racket for advanced players` 11.7 → 9.1; `best padel racket 2026` 29.4 → 19.6, `best padel rackets 2026` 24.8 → 17.9 (**3 clicks**, first in five weeks); `best padel racket` 42.1 → 29.5 (28-day 31.7). The intermediate guide's clicks came from unnamed long-tail this week; its four head terms took 0 between them on 181 impressions at 7–12. Beginners and the 2026 guide stay record-only (SEO-DECAY-004; SEO-DECAY-007 below for the model-year question).

`rankings.csv`: 165 rows — **7 gained, 17 lost, 135 flat, 4 new, 2 dropped.** Positions are 28-day. Gained: `how do i get started playing padel?` 14.7 → 9.5, `padel courts los angeles` 9.3 → 6.2, `golden point padel club` 15.6 → 12.4, `best padel racket for advanced players` 12.8 → 11.3, `best padel rackets for intermediate players` 10.8 → 9.8, `best padel racket for intermediate` 14.8 → 13.4, `best padel rackets for advanced players` 17.7 → 16.4. Lost: `golden point padel` 2.5 → 10.4 (the club page lost the top slot to a Google-level reshuffle — the scoring guide now shows for it at 35 too, see §4 cannibalisation notes), `best padel rackets for beginners` 17.4 → 22.4, `best padel racket for spin` 5.3 → 8.4 (now on 19 impressions vs 3), `best beginner padel racket` 13.7 → 16.3, `nox at10 genius 18k` 12.5 → 15.2, `best padel racket 2026` 20.6 → 23.3, `best teardrop padel racket 2026` 3.8 → 6.0, `dallas padel club` 11.7 → 13.8, `best nox padel racket` 4.8 → 6.5, `lightest padel racket for women` 5.6 → 7.3, `best wilson padel racket` 6.2 → 7.5, `padel club near me` 8.1 → 9.1, `padel miami` 9.5 → 10.5, `king of padel` 10.2 → 11.3, `cost to build a padel court` 14.8 → 15.8, `wynwood padel club` 6.8 → 7.8, `padel haus dumbo` 34.3 → 37.5. New (≥150 impressions in 28 days): `bandeja padel` 9.7, `legacy padel` 6.2, `padeland chandler` 8.3, `what are the best padel shoes for intermediate players?` 8.7. Dropped: `padel racket review` and `what is padel` (seeds; no impressions in 28 days). Several "lost" rows are modifier-guide head terms whose impressions tripled as they aged into the real result set (`best padel racket for spin` 3 → 19, `best wilson padel racket` 11 → 34, `best nox padel racket` 8 → 42): a 5.3 on 3 impressions was never a 5.3.

---

## 3. Did last week's changes work

| ID | Status | Verdict |
|---|---|---|
| **SEO-CONTENT-012** (`/blog/best-padel-rackets-spin`, PR #21) | Second full read | **Held. Closed as working.** 12 / 220 / **5.5** / 5.5% (prev 12 / 187 / 4.6 / 6.4%); 28d 24 / 407 @ 5.1. `best padel racket for spin` 0 / **16** @ 9.0 (prev 0 / 3 @ 5.3) — the target (≤10 on real impressions by 11-16) is met a week early; `best padel rackets for spin` 1 / 7 @ 8.0; `best padel rackets for spin and control` 1 / 1 @ 2.0; `best padel racket for spin and control` 0 / 3 @ 2.7 on this page while the control guide shows for the same query 0 / 31 @ 8.6 (prev 0 / 16 @ 8.2). Google now sends the spin-first phrasings here and the control/spin phrasings to the control guide, both in the top 10, so no cannibalisation action. Nothing to edit; record from here |
| **SEO-CONTENT-011** (`/blog/best-wilson-padel-rackets`, PR #20) | Third full week | **Impressions up again, clicks down: 2 / 306 / 8.1 / 0.7%** (prev 4 / 238 / 9.0). `best wilson padel racket` 0 / 20 @ 8.3 (0 / 11 @ 7.2), `wilson padel racket` 0 / 16 @ 14.8, `best wilson padel racket for intermediate` 0 / 8 @ 6.6, the 2026-model-year queries (`wilson 2026 padel rackets`, `wilson padel racket 2026`, `wilson padel rackets 2026`) all moved from the 20s to 11–14. 28d 8 / 683 @ 8.2 / 1.2%. Zero clicks on 20 head-term impressions at 8.3 is a snippet problem, not a ranking problem, but it is 20 impressions; one more week before a CTR ID |
| **SEO-CONTENT-010** (`/blog/best-lightweight-padel-rackets`, PR #19) | Fourth full week | **Best week of the series: 24 / 467 / 7.3 / 5.1%** (prev 11 / 386 / 6.5). 28d 58 / 1,267 @ 7.3 / 4.6%. Five named queries took a click; `lightest padel rackets` 0 / 23 @ 13.0 and `lightweight carbon padel racket` 0 / 10 @ 12.3 are the two phrasings not yet on page 1. Nothing to edit |
| **SEO-CONTENT-009** (`/blog/best-nox-padel-rackets`, PR #18) | Fifth full week | **Impressions ×3.5, clicks flat: 6 / 490 / 7.6 / 1.2%** (prev 7 / 140 / 6.9 / 5.0%). `best nox padel racket` **3 / 24 @ 7.2** (1 / 6 @ 4.0), `best nox padel racket for intermediate players` 0 / 19 @ 6.6, `nox padel rackets` 0 / 14 @ 12.7 (0 / 2 @ 36), `nox padel racket` 0 / 9 @ 14.9 (0 / 2 @ 35.5), plus first Danish (`bedste nox padel bat`) and Dutch (`beste nox padel racket` 1 / 3 @ 3.3) rows. The page is being tested on the brand's generic queries for the first time. 28d 21 / 889 @ 8.1 vs 2 / 178 in the prior 28 |
| **SEO-CONTENT-008** (`/blog/best-budget-padel-rackets`, PR #17) | Sixth full week | 6 / 298 / 8.3 (prev 6 / 166 / 12.8). `cheap padel rackets` 0 / 47 @ **15.0** (prev 0 / 17 @ 42.2) — the one query the page was never written for is now the one it is being tested on; `best budget padel racket` 0 / 12 @ 8.5, `best cheap padel racket` 0 / 6 @ 5.7. 28d 25 / 792 @ 10.7. Nothing to do |
| **SEO-STRIKE-005** (`bandeja`, Dito's 10-31 rewrite) | First full read | **Position +2.7, impressions ×2, one click: 1 / 642 @ 6.9 / 0.2%** (prev 0 / 325 @ 9.6). `bandeja` 0 / 166 @ **7.2** (0 / 124 @ 10.2), `bandeja padel` 0 / 89 @ 7.9 (0 / 28 @ 11.8), `padel bandeja` 0 / 31 @ 9.0, `what is bandeja` 0 / 16 @ 5.2, `what is a bandeja in padel` 0 / 6 @ 5.2, `bandeja meaning` 0 / 3 @ 3.7. 28d 5 / 1,979 @ 8.5 / 0.25%. The rewrite worked on rank; the 0.2% CTR on 642 impressions at 5–9 is the biggest zero on the site. The loop's 10-26 conclusion (results page is videos and trays) still explains the generic `bandeja` query; it does not explain `what is bandeja` at 5.2 with no click — see SEO-STRIKE-006 |
| **SEO-DECAY-005** (`/blog/nox-at10-genius-18k-review`) | Decision week | **Bounced at page level, not at the model-name query.** Page 10 / 475 @ 10.8 (prev 5 / 436 @ 10.3); the `nox at10 … 18k` cluster 2 / 182 @ 14.3 (prev 1 / 150 @ 14.9); `nox at10 genius 18k review` 0 / 14 @ 8.4 (0 / 5 @ 7.4), `nox at10 18k review` 0 / 17 @ 8.1 (0 / 7), `nox at10 genius 18k 2026` 0 / 37 @ 15.2 (0 / 26 @ 17.2). The review queries came back; the bare model query `nox at10 genius 18k` is 0 / 48 @ 21.2 and stays there (28d 1 / 278 @ 15.2 vs 1 / 542 @ 12.5). Per the rule set last week (over 150 impressions = bounce) this **closes**; the bare-model-query position is the 2026-vs-2027 model-year effect noted under SEO-DECAY-007, not a page defect. No edit |
| **SEO-DECAY-004** (`/blog/best-padel-rackets-beginners`) | Record only | 6 / 544 @ 18.5 (prev 1 / 541 @ 17.3); `best padel racket for beginners` 0 / 86 @ 19.6 (20.4). Clicks came from long tail; the head term is unchanged. Decision stands |
| **Dito's 10-31 content** (first reads) | — | `/blog/padel-scoring-explained` 1 / 370 @ 9.4 — `padel scoring` 0 / 16 @ 22.2, `star point padel` 0 / 16 @ 13.1, `golden point padel` 0 / 15 @ 35.3 (the club `/courts/golden-point-padel` holds that query at 2.3 → 10.4 this month; different intent, no action), `what is a star point in padel` 0 / 3 @ 8.7. `/blog/padel-court-dimensions` 2 / 316 @ 11.9 — `padel court dimensions in feet` **1 / 12 @ 4.1**, `padel court dimensions` 0 / 22 @ 14.9, `padel court size` 0 / 22 @ 17.8, `padel court size in sqft` 0 / 7 @ 7.3. Normal first-week shapes for new informational pages. `/blog/padel-vs-pickleball` (rewrite) 0 / 88 @ 19.3 vs 0 / 206 @ 27.0 — impressions −57% while position improved 8 places: Google dropped it from the deep page-3 slots and has not yet re-placed it; `padel vs pickleball` 0 / 8 @ 32.0 (0 / 40 @ 29.4). One more week. `/get-started/glossary` 2 / 556 @ 7.4 (1 / 492 @ 8.0), `padel terms` 0 / 30 @ 7.3 |
| **`/texas/austin`** (watch) | — | 3 / 477 @ **16.5** (prev 2 / 544 @ 11.5); 28d 7 / 2,154 @ 11.4 / 0.32%. `padel austin` 1 / 29 @ 10.8 (first click in three weeks), `padel club austin` 0 / 36 @ 9.8, `austin padel club` 0 / 12 @ 9.6; the 16.5 is dragged by `panoramic padel courts` 0 / 10 @ 79.6 and `indoor padel court` 0 / 6 @ 51.2. Folded into SEO-DECAY-006 |
| **Club-page cohort after the 11-01 facts pass** | — | 119 clicks (+13), 0.85% CTR (0.76%), **72 pages with a click (56)** — the widest week ever, mostly the 25 new clubs and the facts pass surfacing pages at 1–3 clicks. 28d: 466 (+58), the only cohort up on 28 days. The club-name CTR gap is unchanged in shape (§4, "Not acted") |
| **SEO-INDEX** (club rule, fifth test) | — | Of the 25 clubs added 10-31, **17 already have impressions** after nine days (`the-bay-afa-international-center` 43, `padel-point-el-paso` 40, `the-tennis-pickleball-club-at-newport-beach` 37, `new-orleans-padel-club` 1 / 23, `bay-padel-marina-del-rey` 1 / 22, …); `viva-padel-philadelphia` and `new-orleans-padel-club` inspected: indexed, crawled 11-03. Eight have none; of those, `vitesse-padel` is "Discovered – currently not indexed" and `phantom-padel` is **"URL is unknown to Google"** despite being live (200) and in the sitemap. **Diablo Padel (added 10-30) is still "Discovered – currently not indexed" after ten days** — the fifth test of "club pages index unaided" is not confirmed yet. `moorestown-padel-club` (11-05) indexed 11-06 unaided, one day. Later adds: `horseshoe-bay-resort` 29 impr, `patl-charleston` 39 impr already |

**Confounders this week.** Quiet: Dito shipped eight commits, none to templates or guides — the paid-links weekly (11-03; Court Lite backpack to Padel USA, Viper 3.0 price, citation allowlist — touches 15 gear pages' buttons, the third outbound-link change on gear pages in three weeks), Moorestown Padel Club (11-05), self-hosted fonts (11-05, a build change with no content effect), and the 11-09 club-finder batch (6 coming-soon clubs, Ace Coconut Grove to members-only, "39 states" copy — after the window). The 11-01 city layout and club-facts pass are inside this read for the first time; the city-page split in §2 is the only signal attributable to them so far.

---

## 4. This week's improvements

Ranked by expected clicks per unit of risk. #1 shipped in this run's PR; #2 is a paste for Dito; #3–#5 are specified and waiting on a trigger or his call.

### SEO-CANNIBAL-002 — gifts cluster, holiday 2026 *(SHIPPED — https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/25)*

**Evidence.** Gift-query impressions across the site: 7d 189 (prev 134), 28d **637 vs 210**, 1 click. Three pages compete: `/blog/padel-gifts` (evergreen, "Updated July 31", 0 / 117 @ 25.1 this week; 28d 0 / 400 @ 21.7), `/blog/padel-gifts-mothers-day-2026` (1 / 162 @ 14.5; 28d 4 / 614 @ 13.0), `/blog/padel-gifts-fathers-day-2026` (1 / 15 @ 35.3). On the generic queries the May page wins: `best padel gifts` Mother's Day 0 / 45 @ 13.3 vs evergreen 0 / 27 @ 43.3; `padel gift ideas` 0 / 40 @ 17.2 vs 0 / 30 @ 38.2; `padel gifts` 0 / 42 @ 16.1 vs 0 / 48 @ 18.8; `padel gift` 0 / 27 @ 13.9 vs 0 / 28 @ 31.0. The evergreen page holds the male-modifier queries alone (`padel gifts for men` 0 / 55 @ 14.7, `padel gifts for him` 0 / 43 @ 13.4) and the Mother's Day page the female ones (`padel gifts for her` 1 / 113 @ 9.9, `padel gifts for women` 0 / 91 @ 9.8). In August the evergreen page was 4 / 89 @ 10.6 (4.5% CTR); it has since halved its position with no edit.

**Cause.** `grep` over `src/`: no page linked to `/blog/padel-gifts` except itself and the blog index. The header's Gifts entries, the bags guide's Keep Reading card and the evergreen page's own "shopping seasonally?" box all pointed at the Mother's and Father's Day pages. The site's internal-link graph told Google the seasonal pages were the gifts pages.

**Change (PR).** `/blog/padel-gifts`: title "Best Padel Gifts 2026: Holiday Ideas for Him, Her & Under $50" (was "Padel Gifts (2026): What Players Actually Want, at Every Budget"), meta "Holiday gift guide for padel players: the best padel gifts for men, for women and under $50, from $15 stocking stuffers to flagship rackets. Every pick is gear we've tested and recommend on this site.", OG/Twitter/Article headline to match, H1 "Best Padel Gifts 2026: Holiday Ideas for Every Player", H2s "Padel Gifts for Her: Best Picks for Women Who Play" / "Padel Gifts for Him: Best Picks for Men Who Play", dateline November 9. Header: a "Padel Gifts (Holiday Guide)" entry ahead of the Mother's/Father's Day links, desktop and mobile. Mother's Day and Father's Day intros: "Shopping for the holidays or a birthday instead? Our year-round best padel gifts guide covers gifts for him, for her and under $50." with the anchor on `/blog/padel-gifts`. Bags guide: Keep Reading card swapped to the evergreen page. Blog index entry retitled and redated. Products, prices and affiliate links untouched. `page-dates.json` regenerated.

**Expected effect.** The generic gift queries (`padel gifts`, `best padel gifts`, `padel gift ideas`, `padel gift`, `gifts for padel players`, `best gifts for padel players` — ~240 impressions a week and climbing) consolidate on the evergreen page and move from the 19–43 band into the teens within two reads; the seasonal pages keep `for her` / `for him`. Target: `padel gifts` ≤15 and the page's first clicks by 11-23. If the Mother's Day page still outranks the evergreen page for `best padel gifts` on 11-30, the next step is a canonical from the two seasonal pages to the evergreen one through the holidays, reverted in April.

### SEO-STRIKE-006 — `bandeja` definition block *(Dito's page; exact paste, not edited by the loop)*

**Evidence.** §3: 0 / 642 @ 6.9 after the rewrite; `what is bandeja` 0 / 16 @ 5.2, `what is a bandeja in padel` 0 / 6 @ 5.2, `what is bandeja in padel` 0 / 6 @ 7.2, `bandeja meaning` 0 / 3 @ 3.7, `bandeja meaning padel` 0 / 7 @ 9.4, `what is a bandeja` 0 / 4 @ 8.8 — **42 impressions a week of pure definitional intent at positions 3.7–9.4 with zero clicks**, on top of `bandeja` 166 @ 7.2 and `bandeja padel` 89 @ 7.9. The page's first H2 is "Why padel players use the bandeja"; there is no "What is a bandeja?" heading and no 40–60-word definition the snippet or AI Overview can lift. The description meta ("Padel's sliced overhead that answers a lob…") is the only definition on the page and it is not in the body.

**Change (for Dito to paste into `src/app/blog/padel-bandeja-explained/page.tsx`, as the first section after the H1, before "Why padel players use the bandeja").**

> **## What is a bandeja in padel?**
> A bandeja (Spanish for "tray") is padel's defensive overhead: a sliced, controlled shot hit from around shoulder height when your opponents lob you at the net. Instead of smashing, you carve under and across the ball so it lands deep near the back glass with little bounce, which lets you hold the net position rather than retreat. It is the shot most intermediate players learn after the volley, and the one that separates players who keep the net from players who lose it.

Keep the title. Add the question to the FAQ schema if the page emits one. **Expected effect:** the definitional queries (≈40 impressions a week at 4–9) win a snippet or first clicks; the page's CTR moves off 0.2%. Check 11-23.

### SEO-DECAY-006 — city pages after the 11-01 layout *(DIAGNOSIS — one more week)*

**Evidence.** §2: on matched queries city pages went 9.5 → 10.3 and 1.54% → 1.26% CTR in the first week after the layout change while state pages (unchanged template) improved on both. Seven of the top ten city pages by impressions worsened by 1–19 positions (Austin 16.5, Chicago 18.9, Brooklyn 15.1, Dallas 23.3, Las Vegas 31.0). The `git show 650bd55` diff moved the "Can I play tonight?", map and venue-comparison sections below the club list rather than removing them, and total city clicks rose (68 → 82) on more pages with a click, so this is not a content loss and may be new long-tail impressions at deep positions (Brooklyn's `padel equipment nyc` @ 77, Austin's `panoramic padel courts` @ 80).

**Trigger.** Second week (11-16): if matched-query position is still ≥10 and CTR ≤1.3%, the recommended change is to restore a two-sentence city intro (court count, indoor/outdoor split, cheapest published hourly price) directly under the H1 and above the club list in `src/app/[state]/[city]/page.tsx` — the H1 → list jump leaves the first screen with no sentence containing the city query. If it recovers, close. Not before.

### SEO-DECAY-007 — the 2026 model-year pages *(PLAN — act in January)*

**Evidence.** `/blog/best-padel-rackets-2026` 28d 9 / 703 @ 20.3 vs 77 / 2,272 @ 9.9 — the largest single-page 28-day loss on the site (−68 clicks); `best padel racket 2026` 1 / 139 @ 23.3 vs 25 / 377 @ 10.8, `best padel rackets 2026` 3 / 207 @ 22.7 vs 15 / 365 @ 13.0. The NOX 18K review's bare model query (`nox at10 genius 18k` 0 / 48 @ 21.2) and the Wilson guide's `wilson 2026 padel rackets` queries show the same shape. Every page carrying "2026" in its title is sliding in November as the 2027 ranges are announced and Google starts preferring fresher model-year content; the modifier guides without a year in the title (spin, lightweight, control, tennis elbow) are not.

**Change (January, when the 2027 rackets are on sale in the US).** Retitle `/blog/best-padel-rackets-2026` to "Best Padel Rackets 2027: Top 5 Pro Picks Reviewed" at the same URL with a redirect-free title swap and a "what changed from 2026" paragraph, and roll the year in the shoes title ("Best Padel Shoes (2026)…") at the same time. Do not add "2027" before stock exists — the evidence for year-stamped titles is that they decay on schedule, so the refresh has to coincide with the real model year. Record until then.

### SEO-CTR-008 — shoes guide: answer the question queries *(GEO — specified, Dito's call)*

**Evidence.** `/blog/best-padel-shoes` 7d 9 / 1,064 @ 11.8 / 0.8%; 28d 39 / 4,399 @ 11.5 / 0.89% (−33% clicks). 249 of the page's 688 named weekly impressions are **question-form queries at 0 clicks** — `who makes lightweight shoes for competitive padel?` 0 / 70 @ 7.8 (28d 323 @ 8.3), `what are the best padel shoes for intermediate players?` 0 / 63 @ 8.7 (28d 155), `where to find padel shoes with reinforced toes?` 0 / 35 @ 7.8 (28d 246), `what are the most comfortable padel shoes under $150?` 0 / 26 @ 7.3, `who makes the most durable padel shoes?` 0 / 22 @ 9.7. These are AI-Mode / People-Also-Ask fan-out queries; 56 such rows site-wide took 0 clicks on 315 impressions this week and 249 of those are on this one page. Excluding them, the shoes page's named CTR is 3 / 439 (0.7%) — the head term `best padel shoes` is 0 / 110 @ 14.6 and `best padel shoes 2026` 1 / 153 @ 9.8.

**Change.** Add a "Padel shoe questions, answered" section before the FAQ with the five questions above **verbatim as H3s** and a 40–60-word answer each that names the specific pair already recommended on the page (e.g. the lightweight-for-competitive answer names the lightest of the seven picks with its weight; the reinforced-toe answer names the pair with the toe cap and where to buy it), and extend the FAQPage schema with them. **Expected effect:** citation in the AI answers that are generating these impressions (the GEO win), plus a snippet shot on the two question queries at 7–8. It will not fix the head-term CTR; that is the 2027 title roll in SEO-DECAY-007.

### Not acted, on purpose

- **Club-name queries at 4–10** — the standing biggest number: on `/courts/*` query rows with ≥20 impressions in 28 days, position 1–3 converts at **9.3%** (34 / 366), 4–6 at **0.6%** (25 / 4,495), 7–10 at **0.2%** (29 / 15,326), 11+ at 0%. The top rows are all brand queries with the club's own site, Maps and Instagram above us: `lobbs padel` 0 / 515 @ 6.4, `padel x miami` 0 / 449 @ 7.6, `padel haus denver` 1 / 385 @ 6.3, `padel haus atlanta` 0 / 372 @ 7.5, `eko padel and pickle` 0 / 325 @ 8.7. The title experiment (SEO-CTR-002/007, "Hours & Prices" suffix, PR #4) ran for eight weeks and was retired without effect, so a title is not the lever. The brand+modifier tail we could own (`… reviews` 761 impr @ 6.1, `… membership cost` 81, `… prices` 170) is small and the `reviews` queries want Google's own review panel. Honest read: these 20,000 impressions a month are navigational demand we will not convert from position 6, and the loop should stop scoring them as a CTR problem. The club-page clicks that do come (72 pages this week, +16) come from ranking 1–3 on smaller clubs.
- **`/search`** — 0 / 896 @ 19.0 in 28 days (prev 9 / 1,525), indexed with a 152-impression scraper-style query ("padel clubs & facilities" "mexico" "5-100 employees"…) and `/search?city=San+Francisco` also indexed. Internal search result pages in the index is a hygiene item (Google's guidance is to noindex them), not a ranking one; it took 9 clicks in the prior 28 days, so leave it for Dito to decide, no ID.
- **`/blog/padel-vs-pickleball`** — Dito's rewrite is one week old and the impressions reshuffle is in progress (§3). Not before 11-16.
- **Wilson guide head-term CTR** (0 / 20 @ 8.3) — one more week before an ID; the three-weeks-in-a-row rule for modifier pages has held every time (budget, NOX, lightweight all dipped then climbed).
- **Intermediate −7, control −7, Cascadia −10, Slice −9, Colorado −5** — unwinding spikes or impression drops at unchanged positions.
- **`padel court`, court-cost, the four broad racket guides, `/padel-near/*`, club titles** — standing do-not-reopen list, with the club-title reasoning restated above so it does not need re-deriving.

---

## 4b. Indexing queue

**Nothing to request this week.** Wave 1 is a *check*, not a request, per the club rule:

- `https://www.padelcourtsfinder.com/courts/diablo-padel` — added 10-30, "Discovered – currently not indexed" on 11-09 (ten days). Fifth test of "club pages index unaided". **Re-inspect 11-16; if still not indexed at 17 days, request it and record the rule's limit as ~2 weeks.**
- `https://www.padelcourtsfinder.com/courts/phantom-padel` — added 10-31, "URL is unknown to Google" on 11-09 despite 200 and a sitemap entry; the only one of 25 in that state. Re-inspect 11-16 alongside Diablo.
- `https://www.padelcourtsfinder.com/courts/vitesse-padel` — "Discovered – currently not indexed"; normal at nine days.
- The other 22 of the 10-31 batch: 17 have impressions already; 2 of 2 inspected are indexed. The 11-02/11-05/11-09 clubs (Horseshoe Bay, PATL Charleston, Moorestown — indexed in one day — Pickleball Club of Georgia, Epic Midlothian, Cincinnati Sports Club, Proximo Goose Island, Proximo Northbrook, Bozeman Classic): two already have impressions; do not request.
- `/blog/padel-gifts` — last crawled 10-29; the PR changes its title and adds sitewide links, so a natural recrawl is expected within days. If it has not been recrawled by 11-16 (inspect), request it then — it is the one URL this week where a request would be worth a quota slot.
- `/spotlight/*` stays noindex.

**Sitemap:** 10 new club URLs shipped since the last report (Moorestown 11-05, six on 11-09, plus the 11-02 pair after last week's cut-off). Resubmit `https://www.padelcourtsfinder.com/sitemap.xml` in Search Console once.

---

## 5. Blockers and data caveats

- **GSC data through 11-06 in the 7-day read;** the last two days can still backfill ~4%. 11-07 (77 clicks, Saturday, partial) is not in any comparison. Last week's 7-day baseline (548 / 35,695) did not move on re-pull.
- **The 28-day comparison is −16%** and will stay negative until mid-November, when September's badge-backlink and press weeks roll out of the prior window. The 7-day read is the signal: up 10% this week after four down weeks.
- **City-page position after the 11-01 layout is a one-week read** on 451 matched rows; §4 SEO-DECAY-006 sets the second-week trigger rather than acting.
- **No results-page read this run.** The bandeja recommendation rests on the query mix (definitional phrasings at 4–9 with zero clicks), not on a fresh SERP look; the 10-26 read (videos and trays) is the last one.
- **Question-form queries** (56 rows, 315 impressions, 0 clicks site-wide) are counted in every CTR figure above. They depress the shoes page most; the §4 note shows the page without them.
- **No backlink visibility** (standing). **Ahrefs retired** (standing): volume, SERP features and competitor columns in `rankings.csv` are blank.
- **Build verified in a git worktree with a fresh `npm ci`** (repo rule), not in Dito's checkout. The PR was merged with a merge commit; `git revert -m 1 9c57161` undoes it in one step.
- The task file still says "drive GSC through Chrome"; the run used the service-account API. The 09-14 skill-file edits remain uncommitted — twelfth run.

---

## 6. Next run checklist (2026-11-16)

1. **SEO-CANNIBAL-002 first read:** `/blog/padel-gifts` baseline 0 / 117 @ 25.1 (28d 0 / 400 @ 21.7); Mother's Day 1 / 162 @ 14.5. Did `padel gifts` / `best padel gifts` / `padel gift ideas` move to the evergreen page? Was it recrawled (last crawl 10-29)? Gift-query impressions site-wide: 189 / week.
2. **SEO-STRIKE-006:** did Dito paste the definition block? Bandeja baseline 1 / 642 @ 6.9; `what is bandeja` 0 / 16 @ 5.2.
3. **SEO-DECAY-006 second week:** city matched-query position 10.3 / CTR 1.26%; Austin 16.5, Chicago 18.9, Dallas 23.3. Trigger in §4.
4. **SEO-CONTENT-011 fourth read** (2 / 306 @ 8.1; `best wilson padel racket` 0 / 20 @ 8.3 — CTR ID if still 0 on ≥20), **-010** fifth (24 / 467 @ 7.3), **-009** sixth (6 / 490 @ 7.6), **-008** seventh (6 / 298 @ 8.3). **-012 closed**, record only (12 / 220 @ 5.5).
5. **Dito's 10-31 content, second reads:** scoring 1 / 370 @ 9.4, dimensions 2 / 316 @ 11.9, padel-vs-pickleball 0 / 88 @ 19.3 (reshuffle in progress), glossary 2 / 556 @ 7.4.
6. **Indexing:** inspect Diablo, Phantom, Vitesse, `/blog/padel-gifts`. Diablo not indexed at 17 days → request it, record the rule's limit.
7. **Site clicks:** 603. US 347. Mobile 1.81%, desktop 1.47%. Series 718 → 598 → 566 → 611 → 548 → 603.
8. **`/courts` after the facts pass:** 119 / 0.85% / 9.9, 72 pages with a click. The 25 new clubs: 17 with impressions, 2 with clicks.
9. **SEO-DECAY-007:** record only until January. SEO-CTR-008: ship only if Dito says so.
10. **Do not touch:** the four broad racket guides, court-cost, club titles, `/padel-near/*`, the `padel court` theory, the bandeja and padel-vs-pickleball pages (Dito's, beyond the §4 paste), the NOX 18K review (closed).

---

## Addendum, 2026-11-11 — SEO-CTR-008 shipped

Dito approved SEO-CTR-008 ("Yes, ship it"). **PR #26**, https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/26, merged `15a6fe2`, live 11-11.

Correction to §4: two of the five question queries already had a matching FAQ entry on the page (reinforced toes; lightest for competitive play). The PR added the three that did not — `what are the best padel shoes for intermediate players?`, `what are the most comfortable padel shoes under $150?`, `who makes the most durable padel shoes?` — to the visible FAQ and the FAQPage schema, and named the makers (Wilson, HEAD) in the lightweight answer. Answers use only picks and facts already on the page; no new products or links. Dateline to Nov 11.

Baseline for the 11-16 read: page 9 / 1,064 @ 11.8 (7d to 11-06); `… intermediate players?` 0 / 63 @ 8.7, `… under $150?` 0 / 26 @ 7.3, `… most durable padel shoes?` 0 / 22 @ 9.7, `who makes lightweight shoes …?` 0 / 70 @ 7.8. Judge 11-23. Revert: `git revert -m 1 15a6fe2`.
