# SEO Improver — weekly report, 2026-10-19

**PR this run:** [#20 — SEO-CONTENT-011](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/20) — new page `/blog/best-wilson-padel-rackets`. Merged as `716a29b`, `npm run build` passed in an isolated worktree from `origin/main`, eslint clean, verified live within a minute of the merge (200, canonical correct, title and H1 as written, 28 tagged Amazon links + 8 Padel USA links, in the sitemap, linked from the blog index, the three Wilson reviews and the NOX guide).

**Property:** `sc-domain:padelcourtsfinder.com`
**Measured window:** 2026-09-19 → 2026-10-16 (28 days) vs 2026-08-22 → 2026-09-18
**Clean 7-day read:** 2026-10-10 → 2026-10-16 vs 2026-10-03 → 2026-10-09 (non-overlapping, both Saturday → Friday)
**Prior run:** 2026-10-12
**Data source:** Google Search Console HTTP API via `~/.claude/scripts/gsc_query.py`. Pulled 10-19; data ran through 10-17 (10-17 is partial and excluded from the 7-day read). Every pull used a limit above the row count returned (619 / 746 pages, 2,825 / 5,315 queries, 4,538 / 10,811 query×page rows). URL Inspection API for 27 URLs. No results-page reads this week.

---

## 1. Executive summary

**Clicks slipped a second week, on more impressions, and nothing specific is to blame.** 7-day clicks **566 (−32, −5%)** on 38,012 impressions (+982), CTR **1.49% (−0.12pp)**, position 8.8 (worse by 0.1). That is the second week under 650. The 28-day view is still up because it includes September: **2,573 clicks (+196, +8%)** on 153,347 impressions (−15,060), position 8.4 (improved 0.3).

Last week's checklist said a second week under 650 on flat impressions needed the by-page split, not another cohort table. Here it is: **no page lost more than 10 clicks, no cohort moved more than 0.6 of a position, and the loss is entirely mobile** (mobile 367 clicks, −36, CTR 1.80% → 1.66%; desktop 194, +7). US clicks fell 364 → 338 on *more* impressions (26.2k → 26.7k). The ten biggest page declines add up to −51 and are each 3–10 clicks on unchanged positions (§2). That is a results-page or seasonality effect, not something an edit on this site caused or fixes. Recorded; no action.

**What is working:** the lightweight guide shipped last Monday was indexed the same day and took **7 clicks on 130 impressions at position 8.2 in its first five days** (5.4% CTR), with `best lightweight padel racket` at 5.7 and `best lightweight padel racket 2026` at 3.5 on a handful of impressions. The NOX guide tripled its clicks (2 → 6). The intermediate guide, which the loop stopped editing two weeks ago, recovered on its own: head terms 22.1 → 16.9, 17.5 → 12.2, 16.9 → 12.1, clicks 16 → 19.

**This week's build shipped:** `/blog/best-wilson-padel-rackets` — the three Wilson rackets already rated on the site by playing level (SEO-CONTENT-011, §4).

**A finding that changes a standing rule:** 24 club pages shipped since the last run, none of them went through the daily Request Indexing queue, and **20 are already indexed, most within 24–48 hours of shipping**. Club pages no longer need the manual push. New blog pages still get one, but the "nothing indexes on its own" rule is no longer true for `/courts/*` (§4b).

**The single most important action (Dito, 2 minutes):** Request Indexing for `https://www.padelcourtsfinder.com/blog/best-wilson-padel-rackets`, then the two unindexed club pages in wave 1 (§4b). Also: the daily queue is listing `/owner` and `/owner/signin`, which are `noindex` and blocked in robots.txt — I have removed them from the pool so they stop appearing.

---

## 2. Movement since last run

| Cohort | 7d clicks | Δ vs prior 7d | 7d CTR (prior) | 7d pos (prior) | 28d clicks | Δ vs prior 28d | 28d pos (prior) |
|---|---:|---:|---|---|---:|---:|---|
| state/city | 221 | **−17** | 1.92% (2.01%) | 8.6 (8.8) | 993 | +120 | 8.4 (9.6) |
| `/blog/*` (guides, how-to) | 103 | +19 | 1.41% (1.37%) | 9.7 (9.5) | 391 | −69 | 9.2 (9.6) |
| `/courts/*` | 101 | −7 | 0.71% (0.78%) | 9.3 (9.3) | 404 | +51 | 8.9 (9.2) |
| `best-padel-rackets-*` (broad) | 67 | −9 | 2.38% (2.73%) | 12.0 (11.4) | 424 | +117 | 10.2 (10.0) |
| `*-review` | 38 | **−12** | 2.08% (2.20%) | 8.3 (8.5) | 207 | +28 | 7.9 (8.2) |
| `/padel-near/*` | 21 | −5 | 4.19% (4.81%) | 7.0 (7.4) | 83 | −8 | 7.5 (7.4) |
| homepage | 16 | −3 | 3.16% (3.61%) | 9.9 (9.5) | 77 | +3 | 8.6 (13.6) |

Positions are flat to slightly better in four of seven cohorts; CTR is down in six of seven. That is the shape of the week. By device: mobile CTR 1.80% → 1.66% at the same position (8.2 → 8.3); desktop CTR 1.30% → 1.24%. By country: USA 338 / 26,739 @ 8.7 (prev 364 / 26,231 @ 8.7); UK 41 (+4); Indonesia 13 (−8); Netherlands 9 (−6).

Two 28-day artefacts to read past: the "other" bucket lost 50 clicks because GSC stopped reporting the non-www `https://padelcourtsfinder.com/...` rows (those clicks now sit on the www pages — not a loss), and 28-day impressions fell 9% because mid-August's club-name spike has rolled out of the comparison window.

### Biggest 7-day page movements

| Page | Clicks | Δ | Impr | Pos (prior) | Note |
|---|---:|---:|---:|---|---|
| `/blog/wilson-blade-elite-v2-review` | 2 | **−10** | 220 | 7.5 (7.1) | `wilson blade elite v2` 3 → 0 clicks on 77 → 66 impr at 8.2 → 8.4; the review got a Wilson-guide card this week |
| `/blog/best-padel-rackets-2026` | 2 | −8 | 148 | 22.0 (14.6) | see racket guides below |
| `/california` | 4 | −5 | 273 | 7.8 (7.4) | |
| `/padel-near/durham` | 2 | −5 | 22 | 6.3 (5.3) | last week's +4 unwinding |
| `/blog/best-padel-rackets-control` | 22 | −4 | 620 | 7.8 (7.5) | CTR 4.5% → 3.6% on +40 impr |
| `/blog/best-round-padel-rackets` | 0 | −4 | 111 | 9.5 (8.8) | |
| `/blog/nox-at10-genius-18k-review` | 16 | −4 | 733 | 9.1 (9.4) | impressions −364, CTR up |
| `/georgia/atlanta`, `/new-york/brooklyn`, `/courts/st-pete-athletic` | 2, 3, 0 | −4 each | | flat | |
| `/california/los-angeles` | 24 | **+7** | 1,648 | 8.2 (8.5) | CTR 1.02% → 1.46%; `padel near me` on this page 0 → 6 clicks at 3.9 (from 6.2) |
| `/blog/best-lightweight-padel-rackets` | 7 | **+7** | 130 | 8.2 (new) | SEO-CONTENT-010 |
| `/courts/golden-point-padel`, `/courts/padel-x-summer-club-lincoln-road`, `/blog/wilson-bela-v3-review` | 7, 7, 8 | +6 each | | | |
| `/blog/best-teardrop-padel-rackets` | 18 | +5 | 300 | 8.5 (7.5) | CTR 3.5% → 6.0% on −67 impr |
| `/get-started/glossary` | 7 | +5 | 388 | 7.8 (7.9) | |

**New York / Los Angeles (last week's watch):** NY 74 clicks (−3) at 5.7 (from 5.4), CTR 4.26% (4.43%) — flat. LA 24 (+7) at 8.2 (from 8.5). The 33-click dip reported last week did not continue; LA gave half of it back. Dito's "Can I play tonight?" block and price-per-player (10-08/09) have now been live a full week on every city page: state/city position improved 8.8 → 8.6 and CTR fell 2.01% → 1.92%. Neither is outside normal week-to-week range. Not declaring an effect either way.

### Racket guides (record only, per the 10-12 decision)

| Page | 7d clicks (prior) | 7d impr (prior) | 7d pos (prior) |
|---|---|---|---|
| intermediate | 19 (16) | 747 (505) | 9.2 (10.0) |
| beginners | 9 (6) | 593 (593) | 12.9 (11.3) |
| advanced | 3 (5) | 171 (156) | 13.3 (13.5) |
| pro-2026 | 2 (10) | 148 (324) | 22.0 (14.6) |

Head terms: `best padel racket for intermediate` 22.1 → **16.9**, `best intermediate padel racket` 17.5 → **12.2**, `best padel rackets for intermediate players` 16.9 → **12.1**; `best beginner padel racket` 11.7 → 11.8 (0 → 2 clicks); `best padel racket 2026` 14.4 → **26.3**, `best padel rackets 2026` 18.2 → **29.9**. The intermediate guide recovered two weeks after the loop stopped touching it; the pro-2026 guide is still above 20 on its head term and has lost half its impressions. No edits, no IDs, as agreed.

`rankings.csv`: 138 rows — **4 gained, 13 lost, 106 flat, 15 new**. The "lost" rows are mostly one to two places; the two budget-guide head terms (4.0 → 7.9, 4.8 → 7.8 over 28 days) are the post-launch settle described in §3; `golden point padel club` 6.0 → 19.3 is 4 impressions of noise. Positions are 28-day; the 7-day view above is the one to act on.

---

## 3. Did last week's changes work

| ID | Status | Verdict |
|---|---|---|
| **SEO-CONTENT-010** (`/blog/best-lightweight-padel-rackets`, PR #19) | Indexed 10-12, crawled 19:06 UTC the same day (Dito's request) | **Working, early.** First five days: 7 clicks / 130 impr / 8.2 / 5.4% CTR. Daily: 10-13 2/26 @ 8.3, 10-14 2/36 @ 7.4, 10-15 2/29 @ 6.7, 10-16 1/37 @ 10.3. On target queries: `best lightweight padel racket` 5.7 (3 impr), `… 2026` 3.5 (2), `lightest padel racket` 6.5 (4), `light padel rackets` 6.5 (2), `340g padel racket` 4.0 (2); the generic `lightweight padel racket` sits at 33 (5). Clicks came faster than the NOX guide's did (NOX: 2 clicks on 178 impressions in its first full week). Target (≤10 on the head term by 11-09) is met on paper but on 3 impressions — second read next week. **Cannibalisation check passed:** `lightest padel racket for women` had 0 impressions this week on either page (28d: women's guide 6 impr @ 3.3, 1 click); the new page did not take it |
| **SEO-CONTENT-009** (`/blog/best-nox-padel-rackets`, PR #18) | Second full week | **Holding, clicks arriving.** 6 clicks (from 2) / 157 impr (from 178) / 9.2 (from 10.1). Target queries: `best nox padel racket for intermediate players` **2 clicks** / 11 impr @ 4.1 (prev 0/6 @ 3.5); `best nox padel racket` 8 impr @ 5.0 (prev 3.1); `best nox racket for intermediate` 4 @ 5.2 (3.5). Gave back one to two places on the head terms and stayed top-5; the clicks are coming from the `for intermediate` modifier, which is the pattern the budget page shows too. 28d: 8 clicks / 335 impr / 9.7 |
| **SEO-CONTENT-008** (`/blog/best-budget-padel-rackets`, PR #17) | Third full week | **Settling, as expected.** 5 clicks (from 4) / 188 impr (from 184) / 11.7 (from 8.9). Head terms gained impressions and lost position: `best budget padel racket` 10 impr @ 9.0 (prev 2 @ 5.5), `best cheap padel racket` 8 @ 9.8 (prev 3 @ 6.0), `cheap padel rackets` 22 @ 40 (prev 6 @ 44). The three clicks came from `… for intermediate` (2.7), `… for beginners` (6.3) and `best affordable padel rackets` (3.5). New pages on this site debut high on few impressions and settle as Google widens where it shows them; 9–10 on five times the impressions is the better position. 28d: 14 clicks / 465 impr / 9.6 |
| **SEO-DECAY-003** (broad racket guides) | Closed 10-12, record only | Intermediate recovered on its own (§2); pro-2026 still >20. The decision stands: no edits |
| **SEO-INDEX** `/changelog`, Snowmass, October roundup | — | `/blog/new-padel-clubs-october-2026` (shipped 10-15) indexed, crawled 10-19; 134 impressions / 0 clicks at 4.7 in its first two days, all on club-name queries |

**Confounders this week.** Dito shipped ~25 commits between 10-13 and 10-19, nearly all on the directory side: private-club audit (access type for 45 clubs, 6 reclassified, Rancho Viejo and Society Las Olas removed, 10-13); referral UTM tags on every outbound club link plus seven dead city-guide links fixed (10-13); members-only lead form (10-13); Amazon link audit and price refresh across 37 gear routes (10-14); Padel USA affiliate buttons next to Amazon on gear pages (10-15); **club page v2** — new hero, photo gallery, phone action bar and a compact city header (10-15); claim-your-listing flow (10-15/16); the October new-clubs roundup (10-15); Plausible outbound-click events (10-15); two weekly club-finder batches (10-13, 10-19); an equipment-hub refresh (10-19). Club page v2 landed with two days left in the window, so the `/courts` cohort (CTR 0.78% → 0.71%, position flat) is next week's read. The gear-link audit moved `<lastmod>` on ~40 blog routes to 10-14/15 — the dates script working as designed, not a content refresh.

---

## 4. This week's improvements

### SEO-CONTENT-011 — `/blog/best-wilson-padel-rackets` *(SHIPPED — PR #20, merged `716a29b`, live)*

**Evidence.** This was the next build named in the 10-05 and 10-12 reports, conditional on the lightweight guide being indexed and showing impressions (both true). Google autocomplete (checked today) returns ten suggestions for `best wilson padel racket`: `… for intermediate`, `… for beginners`, `… for women`, `… 2026`, `… for control`, `… reddit`, `… 2025`, `… for spin`, `top wilson padel racket`. GSC (28 days) shows the cluster landing on pages that do not target it: `best wilson padel racket for intermediate` 8 impr @ 9.4 and `… for beginners` 2 @ 10.5 on the intermediate guide, `wilson padel racket review` 11 @ 11.3. Thin, like the lightweight cluster was. What is not thin is Wilson model demand on the three reviews — about 1,300 impressions in 28 days (`wilson blade elite v2` 243 @ 7.6, `wilson bela v3 review` 107 @ 6.1, `wilson blade elite` 80 @ 8.3, `wilson bela pro v3 review` 62 @ 5.9, `wilson optix v1 review` 43 @ 6.9, `wilson bela v3` 43 @ 13.3) — which is where the new page's internal links come from.

**What shipped.**
1. The three Wilson rackets already rated on the site, by playing level: Optix V1 (round, 355–360g, all-fiberglass, $109.00, 7.7/10 — overall, beginners, control), Blade Elite V2 (teardrop, 360g, hybrid face, $208.58 Amazon Japan import, 7.0/10 — intermediate), Bela Pro V3 (diamond, 370g, 24K carbon, $399.00 at Padel USA, 6.7/10 — power/advanced). Every weight, score, price, ASIN and retailer link is copied from the three reviews and `retailer-links.ts`; the Bela uses `BuyButtons` so Padel USA stays the primary store. The page says plainly that the 7.7 is a comfort-and-control score with 4/10 power, and that the plain Bela V3, Optix V2 and Optix Lite are not scored.
2. "Which Wilson for your level" with the stiffness ladder (fiberglass → hybrid → 24K carbon; power 4/7/9, comfort 10/7/4).
3. Seven FAQs matched to the autocomplete phrasings (2026, beginners, intermediate, control, women, spin, Bela V3 vs Bela Pro V3). The women answer points to the women's guide and names the Babolat Contact as that guide's #1, to keep that page canonical.
4. Article + FAQPage + ItemList schema, `GEAR_DISCLOSURE`.
5. **Five inbound links:** blog index card plus a Keep Reading card on the Optix V1, Blade Elite V2 and Bela Pro V3 reviews and on the NOX guide. Nothing from the four broad racket guides.
6. `npm run sitemap:dates`: new slug in `blog-slugs.json`; lastmod moved to 10-19 for the new URL, `/blog`, the NOX guide and the three reviews.

**Expected effect and check:** impressions within a week of indexing; first read 10-26. Target: position ≤10 on `best wilson padel racket` by ~11-16, same shape as NOX (2.5–5 on its head terms inside two weeks). Watch that the three reviews keep their model queries — if `wilson blade elite v2` moves from the review to the guide, that is a cannibalisation to fix with the guide's title, not the review's.

### SEO-STRIKE-005 — `bandeja` on `/blog/padel-bandeja-explained` *(diagnose next run, no edit yet)*

The bandeja how-to page went from 2 clicks / 542 impressions / 10.7 to **9 / 1,982 / 7.4** in 28 days, and the single query `bandeja` is at **716 impressions, 0 clicks, position 10.4** (from 14.8). A one-word query that returns no clicks at position 10 is usually a results page with a definition box and videos above the organic results, in which case a title change buys nothing. Next run: read the page's title and meta and the live results page for `bandeja` before proposing anything. Opened here so the diagnosis has an ID; not acted on.

### Not acted, on purpose

- **The site-wide mobile CTR dip** — diffuse, positions flat; a second week like this gets the cohort-by-device split, not an edit.
- **`/blog/best-padel-shoes`** (SEO-CTR-006, closed 09-07) — recorded only: 12 clicks (−3) on 1,069 impr (+250) at 11.0 (from 9.8); `best padel shoes 2026` 10.2, `best padel shoes` 17.4, the men/women modifiers at 23–27. Stays closed unless the head term enters the top 10.
- **Intermediate, beginners, pro-2026, advanced** — closed; the intermediate recovery happened without us.
- **`padel miami`** — `/florida/miami` 129 impr @ 8.9 / 1 click vs the Miami clubs guide 45 @ 4.0 / 3 clicks: the standing city-page-vs-city-guide pattern, not new.
- **`padel court`**, court-cost, club titles, `/padel-near/*` — standing do-not-reopen list.
- **Next build candidates** — none is a clear win yet, so decide after the Wilson first read. **Adidas** has the rackets (Metalbone 3.4, Metalbone HRD+, Adipower all rated) and a ten-deep autocomplete for `best adidas padel racket`, but only **11 impressions** of Adidas brand demand in GSC over 28 days (0 clicks). **HEAD** (207 impressions, `best head padel racket for beginners/intermediate` at 7–8) and **Babolat** (136, `best babolat padel racket for beginners` 17 impr @ 8.4) have the demand but only two rated rackets each, which is too thin to rank honestly. `best padel racket for men` has a ten-deep autocomplete and zero GSC impressions, and the women's guide is drifting (7d 20.2 from 16.6), so it waits too.

---

## 4b. Indexing queue

**Wave 1 — today (3 requests).**

```
https://www.padelcourtsfinder.com/blog/best-wilson-padel-rackets
https://www.padelcourtsfinder.com/courts/padel-9
https://www.padelcourtsfinder.com/courts/evo-padel
```

**Wave 2 — 2026-10-21, only if URL Inspection still says unknown (2 requests).**

```
https://www.padelcourtsfinder.com/courts/m-padel-cincinnati
https://www.padelcourtsfinder.com/courts/open-play-pickleball-and-padel-club
```

Notes:
- `/blog/best-wilson-padel-rackets` — new today, 200 on `https://www.`, canonical correct, in the sitemap. Unknown to Google.
- 24 club pages were added since the last run (10-13: 19, 10-15: 1, 10-19: 4) and four removed. All 24 return 200. **20 are "Submitted and indexed" without any Request Indexing** — the 10-13 batch was crawled 10-14/15, the 10-19 batch the same day it shipped. The daily queue never listed a club page (its state file holds only blog/changelog/claim URLs), so this is Google crawling the sitemap's fresh `<lastmod>` entries on its own. **Club pages no longer need the manual push; blog pages still get one until two of them index unaided.**
- Still unindexed: `/courts/padel-9` (Discovered, not crawled), `/courts/evo-padel` (crawled 10-19, not indexed — a coming-soon club with a city-level location and little on the page; a request may not change that), and the two 10-19 additions above, which are likely to follow the 10-13 batch on their own — hence wave 2 is conditional.
- Checked and already indexed, so not listed: `/blog/new-padel-clubs-october-2026` (crawled 10-19), `/blog/best-lightweight-padel-rackets` (10-12), the other 20 club pages.
- `/claim` is unknown to Google and not in the sitemap; it is on Dito's daily list already. **`/owner` and `/owner/signin` are `noindex, nofollow` and disallowed in robots.txt** — requesting indexing on them is a wasted click. Removed from the daily queue's pool this run (state file `~/daily-debriefs/pcf-indexing-queue.json`).

**Sitemap:** one new blog URL and four new club URLs shipped. Resubmit `https://www.padelcourtsfinder.com/sitemap.xml` in Search Console.

---

## 5. Blockers and data caveats

- **GSC data through 10-16;** the last two days can still backfill ~4%. 10-17 (70 clicks @ 9.7, the worst position day since August) is partial and not in any comparison.
- **No results-page reads this week.** The mobile CTR finding is from GSC alone; if it repeats, one read each for the control guide and the Blade Elite review would settle whether a results-page feature moved in.
- **No backlink visibility** (standing). **Ahrefs retired** (standing): volume, SERP features and competitor columns in `rankings.csv` are blank.
- **The task file still says "drive GSC through Chrome".** The run used the service-account API; no browser was opened. The skill-file edits proposed on 09-14 remain uncommitted — ninth run.
- **`origin/main` moved during the run.** Local `main` was at `04b71b2`; `origin/main` was one commit ahead (`e4268b3`, equipment-hub refresh from another session). The worktree was created from `origin/main`, the PR touched none of the files that commit changed, and local `main` was fast-forwarded after the merge.
- **The lint pass shows one pre-existing warning** (unused `TrackedLink` import in the Bela Pro V3 review). Not mine; left alone.
- **Club-page indexing evidence is one week.** Twenty of twenty-four is strong, but it is also the first week the sitemap's `<lastmod>` has carried per-club dates for a large batch. Confirm on the next batch before deleting the rule from memory.

---

## 6. Next run checklist (2026-10-26)

1. **SEO-CONTENT-011 first read:** indexed? impressions on `best wilson padel racket*`? Do the three reviews keep their model queries (Blade Elite review 243 impr @ 7.6 on `wilson blade elite v2` is the baseline)?
2. **SEO-CONTENT-010 second read:** 7 / 130 / 8.2 is the baseline; head term 5.7 on 3 impressions.
3. **SEO-CONTENT-009 third read** (6 / 157 / 9.2; head term 5.0) and **SEO-CONTENT-008 fourth read** (5 / 188 / 11.7).
4. **Racket guides:** record positions only. If pro-2026 is still >20 on `best padel racket 2026`, one line.
5. **`/courts` cohort after club page v2 (10-15):** 101 clicks / 0.71% CTR / 9.3. **State/city:** 221 / 1.92% / 8.6.
6. **Site clicks:** 566. A third week under 650 → cohort-by-device CTR split and two results-page reads.
7. **SEO-STRIKE-005:** read the `bandeja` results page and the page's title/meta; propose or close.
8. **Indexing:** did `m-padel-cincinnati` and `open-play-pickleball-and-padel-club` index unaided? If yes, the club-page rule is confirmed twice.
9. **Next build:** pick between Adidas (rackets, no demand) and HEAD/Babolat (demand, two rackets) once Wilson has a first read; if Wilson lands like NOX did, a third rated HEAD or Babolat racket is worth more than another thin brand page.
10. **Do not touch:** the four broad racket guides, court-cost, shoes, club titles, `/padel-near/*`, the `padel court` theory.
