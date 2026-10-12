# SEO Improver — weekly report, 2026-10-12

**PR this run:** [#19 — SEO-CONTENT-010](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/19) — new page `/blog/best-lightweight-padel-rackets`. Merged as `ea79fd9`, `npm run build` passed in an isolated worktree, verified live (200, canonical correct, title and H1 as written, 46 tagged affiliate links, in the sitemap, linked from the blog index and the Babolat Contact / Wilson Optix V1 / HEAD Extreme Evo reviews). Same PR removed three stray commas in the NOX guide's ItemList schema that were serialising as `null` entries; confirmed gone on the live page.

**Property:** `sc-domain:padelcourtsfinder.com`
**Measured window:** 2026-09-12 → 2026-10-09 (28 days) vs 2026-08-15 → 2026-09-11
**Clean 7-day read:** 2026-10-03 → 2026-10-09 vs 2026-09-26 → 2026-10-02 (non-overlapping, both Saturday → Friday)
**Prior run:** 2026-10-05
**Data source:** Google Search Console HTTP API via `~/.claude/scripts/gsc_query.py`. Pulled 10-12; data ran through 10-09. The last two days can still backfill ~4% upward. Every pull used a limit above the row count returned (603 / 761 pages, 2,808 / 5,260 queries, 4,669 / 10,692 query×page rows) — the first 28-day query pull hit a 5,000 cap and was re-pulled at 20,000 before anything was computed. Plus one live Google results page read (built-in browser, US, no personalisation) for the SEO-DECAY-003 diagnosis.

---

## 1. Executive summary

**The worst week since the loop started: clicks down 17% on flat impressions.** 7-day clicks **598 (−120)** on 37,030 impressions (−562, −1.5%), CTR **1.61% (−0.30pp)**, position **8.7 (worse by 0.5)**. 28-day still reads well because it includes mid-September: **2,765 clicks (+700, +34%)**, 160,456 impressions (+1,128), position 8.2 (improved 0.9).

Impressions did not fall this time, so this is a visibility loss, not a demand dip. Two things account for almost all of it:

1. **The broad racket guides slipped for a second week and the slide is steepening** (SEO-DECAY-003). The four "best padel rackets for [level/year]" pages lost **44 clicks between them** (76 → 32... see §2). `best padel racket 2026` closed the week at daily position **26 and 34**; `best padel racket for intermediate` averaged 22. I read the live results page for the intermediate query: page 1 is now four retailer collection pages with store ratings, two Reddit threads plus a Discussions module, three YouTube videos, a shopping unit and a deals unit, and only three editorial roundups. We are not on page 1. **This is a results-page composition shift, not something an edit on our page can reverse.** The narrow modifier pages (control, teardrop, tennis elbow, NOX, budget) all held positions 5–9. Decision in §2: stop investing in broad level guides, keep building narrow ones.
2. **New York and Los Angeles gave back 33 clicks** at nearly unchanged positions (NY 5.1 → 5.4, LA 7.9 → 8.5). `padel courts nyc` went from 11 clicks to 1 at position 2.2 on slightly fewer impressions. Clicks per impression on the directory's two biggest pages fell for no visible on-page reason. Recorded, no action.

**What worked:** the NOX guide (shipped 10-05) was indexed the same day and already ranks **2.5–3.5** on `best nox padel racket`, `best nox padel rackets` and `…for intermediate players`; the brand queries that used to land on the intermediate guide moved to it (17 impressions → 3). The budget guide doubled its impressions in week two.

**This week's build shipped:** `/blog/best-lightweight-padel-rackets` — the six lightest rackets already rated on the site, every number copied from existing pages.

**The single most important action (Dito, 1 minute):** Request Indexing for `https://www.padelcourtsfinder.com/blog/best-lightweight-padel-rackets` — Google does not know the URL yet (§4b).

---

## 2. Movement since last run

| Cohort | 7d clicks | Δ vs prior 7d | 7d pos (prior) | 28d clicks | Δ vs prior 28d | 28d pos (prior) |
|---|---:|---:|---|---:|---:|---|
| `/blog/*` (incl. reviews) | 210 | **−96** | 9.8 (8.8) | 1,140 | +340 | 8.9 (9.6) |
| — of which `*-review` | 50 | −16 | 8.5 (7.6) | 233 | +75 | 7.9 (8.4) |
| — of which `best-padel-rackets*` | 76 | **−54** | 11.4 (9.8) | 478 | +257 | 9.4 (10.9) |
| state/city | 232 | **−41** | 8.0 (7.6) | 1,027 | +269 | 7.6 (9.2) |
| `/courts/*` | 108 | +3 | 9.3 (8.8) | 408 | +85 | 8.6 (9.6) |
| homepage | 19 | +5 | 9.5 (7.7) | 92 | +42 | 8.5 (15.0) |
| `/padel-near/*` | 26 | +10 | 7.4 (8.7) | 86 | +7 | 7.4 (7.7) |

Position got worse in every cohort except `/padel-near`. Desktop took the bigger hit (8.5 → 9.4) than mobile (7.9 → 8.2). By country: USA clicks 404 → 364 on *more* impressions (25.8k → 26.2k), UK 57 → 37. So the impressions question from the last two weeks is answered — demand is flat — and the problem this week is where we rank and how often we get the click.

### SEO-DECAY-003 — the racket-guide slide, week two

| Page | 7d clicks (prior) | 7d pos (prior) | Daily position 10-03 → 10-09 |
|---|---|---|---|
| intermediate | 16 (29) | 10.0 (8.1) | 9.9, 9.5, 9.5, 8.9, 11.1, 9.9, 10.9 |
| pro-2026 | 10 (19) | 14.6 (9.9) | 14.2, 11.5, 12.4, 12.9, 15.1, **22.7, 24.4** |
| beginners | 6 (22) | 11.3 (11.3) | 14.0, 10.9, 12.8, 11.1, 9.5, 10.1, 11.0 |
| advanced | 5 (11) | 13.5 (11.0) | 12.8, 13.7, 10.3, 9.0, 15.1, 13.2, **23.3** |

Head terms, 7-day position (prior week → this week): `best padel racket for intermediate` 17.1 → **22.1**, `best intermediate padel racket` 13.7 → **17.5**, `best padel rackets for intermediate players` 7.4 → **16.9**, `best padel racket 2026` 10.5 → **14.4** (daily 26 and 34 on 10-08/09), `best padel rackets 2026` 12.3 → **18.2**, `best padel racket for beginners` 16.6 → 16.9, `best beginner padel racket` 12.0 → 11.7 (3 clicks → 0). Beginners held position and still lost 16 of its 22 clicks — the CTR side of the same shift.

**What held:** control 26 clicks (+3) at 7.5; teardrop 13 (−6) at 7.5; tennis elbow 5 (−4) at 7.0; NOX page 2.5–3.5 on its target queries; budget 8.9. `best padel shoes` improved 19.2 → 13.7 (3 clicks). The narrow pages gave back a few clicks with everyone else but kept their positions.

**What I ruled out.** Not cannibalisation (no second site page appears for any head term; the NOX page took only NOX-brand queries). Not Dito's 10-09 commits: `3b20c2f` and `176ff7d` touched the four guides, but the diff is one footer string each ("340+" → "320+ clubs", "39 clubs" → "36 clubs in Miami-Dade"); the slide began 09-29, ten days earlier. Not the PR #17/#18 Keep Reading cards (intermediate and advanced never received one and fell the most).

**What the results page shows** (`best padel racket for intermediate`, US, read 10-12): Racket Central, Padel USA, Casas Padel and Express Padel collection pages, each with a merchant star rating and price range; two Reddit threads plus a "Discussions and forums" module; RacketLoop, Padelivarustus.ee and Red Bull as the only editorial results; three YouTube videos; an "In stores nearby" unit with seventeen rackets from DICK'S and Target; a deals unit. Our page is not on page 1. The query is being treated as a shopping query with a forum appetite. A better title, a new section or a few internal links do not change that.

**Decision.** Leave the four guides alone — permanently, not for another week. They stay live and keep their affiliate links, but the loop stops spending edits on broad "best padel racket for [level]" and "best padel rackets [year]" queries. The pattern that keeps working is the specific modifier (shape, brand, price, weight, injury), where the results page is still mostly editorial and we land top-5 within days. SEO-DECAY-001 and SEO-STRIKE-002 are closed under this decision.

### Biggest 7-day page movements

| Page | Clicks | Δ | Impr | Pos (prior) |
|---|---:|---:|---:|---|
| `/new-york` | 77 | **−20** | 1,737 | 5.4 (5.1) |
| `/blog/best-padel-rackets-beginners` | 6 | −16 | 593 | 11.3 (11.3) |
| `/blog/best-padel-rackets-intermediate` | 16 | −13 | 505 | 10.0 (8.1) |
| `/california/los-angeles` | 17 | −13 | 1,665 | 8.5 (7.9) |
| `/courts/cascadia-padel` | 9 | −13 | 36 | 2.6 (3.6) — last week's name spike unwinding |
| `/blog/wilson-bela-v3-review` | 2 | −10 | 208 | 7.5 (6.6) |
| `/blog/best-padel-rackets-2026` | 10 | −9 | 324 | 14.6 (9.9) |
| `/connecticut` | 7 | +6 | 115 | 6.1 (7.0) |
| `/` | 19 | +5 | 527 | 9.5 (7.7) |
| `/padel-near/durham` | 7 | +4 | 40 | 5.3 (8.1) |
| `/blog/wilson-blade-elite-v2-review` | 12 | +4 | 247 | 7.1 (7.1) |

**New York:** `padel courts nyc` 11 → 1 clicks at position 2.1 → 2.3 (impressions 33 → 26); `padel new york` impressions 131 → 85 at 3.7; `padel nyc` actually rose 14 → 18 clicks. The daily series shows no step, just a quieter week on the two secondary terms. No action.

**Los Angeles:** `padel courts la` 3 → 0 and `padel la` 2 → 0 at the same positions; `padel los angeles` 5 → 3 at 5.2. Same shape. No action.

`rankings.csv`: 123 rows — **7 gained, 11 lost, 101 flat, 4 new** (the new rows are lightweight and NOX terms added to the tracked list). Positions are 28-day, which softens the racket slide; the 7-day view above is the one to act on.

---

## 3. Did last week's changes work

| ID | Status | Verdict |
|---|---|---|
| **SEO-CONTENT-009** (`/blog/best-nox-padel-rackets`, PR #18) | Indexed 10-05 (same day as Dito's request) | **Working.** 178 impr / 2 clicks / 10.1 average — the average is dragged by generic `nox racket` / `nox padel` queries at position 50+. On target queries: `best nox padel racket` **3.1** (8 impr), `best nox padel rackets` 2.5, `best nox padel racket for intermediate players` 3.5, `best nox racket for intermediate` 3.5. NOX-brand "best" queries on the intermediate guide fell from 17 impressions to 3; the transfer happened. Target (≤10 on the head term by 11-02) already met; clicks are the next thing to watch |
| **SEO-CONTENT-008** (`/blog/best-budget-padel-rackets`, PR #17) | Second full week | **Holding.** 184 impr (from 93) / 4 clicks (from 5) / 8.9 (from 6.6). `best cheap padel racket` 4.8, `best budget padel racket` 4.0 (28d). Impressions doubled, position gave back two places as it settles. Fine |
| **SEO-DECAY-003** (broad racket guides) | Measured + results page read | **Worse. Closed as structural** — see §2 |
| **SEO-STRIKE-004** (`/blog/padel-court-cost`) | Closed last week | `padel court cost` 13.5 (28d). Nothing further |
| **SEO-INDEX** Snowmass | Was the last unindexed club page | **Indexed** (crawled 10-06, after Dito's request). 2 impressions / 0 clicks in 28 days. Thin-content verdict: leave it; it costs nothing indexed |
| **SEO-INDEX-007** loose end (PATL in the Fort Lauderdale guide) | Was left for Dito | **Resolved** by Dito's `8eef225` on 10-08 |
| SEO-DECAY-001 (intermediate), SEO-STRIKE-002 (beginners, off-page) | Standing | **Closed under the SEO-DECAY-003 decision** |

**Confounders this week.** Dito shipped ~30 commits between 10-08 and 10-09: a club status audit (removed closed clubs, redirects), verified prices for 29 clubs, a "Can I play tonight?" block on every city page (`cd9d716`), price-per-player on city and state pages (`ad7b639`), a public `/changelog` (already indexed, crawled 10-08), and a sport audit removing 12 non-padel listings. All landed in the last two days of the window, so they explain little of this week and may move state/city and `/courts` pages next week. The racket slide predates all of them.

---

## 4. This week's improvements

### SEO-CONTENT-010 — `/blog/best-lightweight-padel-rackets` *(SHIPPED — PR #19, merged `ea79fd9`, live)*

**Evidence.** Google autocomplete (checked today) returns ten suggestions for `best lightweight padel racket`: `… 2026`, `… for beginners`, `… for women`, `… for intermediate players`, `… for men`, `… reddit`, `… for control`, `… for intermediate`. In GSC (28 days) the site already shows for the cluster with no page targeting it:

| Query | Ranking page | Impr | Clicks | Pos |
|---|---|---:|---:|---:|
| `lightest padel racket for women` | women | 15 | 3 | 4.1 |
| `best lightweight padel racket 2026` | pro-2026 | 6 | 0 | 9.3 |
| `best lightweight padel racket for women` | women | 5 | 0 | 6.0 |
| `best lightweight padel racket for intermediate players` | intermediate | 4 | 0 | 6.2 |
| `best lightweight padel racket` | beginners / round | 2 | 0 | 37 / 3 |

Thinner than the NOX cluster was (113 impressions), but the pattern is the same and it is the candidate the last two reports named. Brand pages were the alternative; Wilson has three rated rackets and only 10 impressions of brand demand, so it is next, not now.

**What shipped.**
1. Six rackets ranked by weight, all already rated on the site: Babolat Contact (340g, $89.95, 7.0), Adidas Metalbone 3.4 (345–372g adjustable, $304.50, 7.0), Wilson Optix V1 (355–360g, $109.00, 7.7), HEAD Extreme Evo (355–365g, $99.95, 7.3), NOX Pro Cup USPA (360–365g, $119.00, 7.3), Adidas Adipower (360–365g adjustable, $129.00, 7.0). Every weight, price, sub-score and Amazon ASIN is copied from the budget, advanced, women's and NOX guides and the reviews. The page says plainly that padel rackets only span 340–375g, that under 360g is "light", and why the two 360–365g frames are included.
2. "Who should play a lighter racket" block (new players, sore arms, smaller players and many women, advanced players who want speed at the net) with the stability trade-off stated.
3. Seven FAQs matched to the autocomplete phrasings. The intermediate answer says honestly that there is no dedicated light intermediate pick. The women answer points to the women's guide, whose four picks are the same four light rackets, to keep that page the canonical answer for `… for women`.
4. Article + FAQPage + ItemList schema.
5. **Four inbound links:** blog index card plus a Keep Reading card on the Babolat Contact, Wilson Optix V1 and HEAD Extreme Evo reviews. **Nothing from intermediate, beginners, pro-2026 or advanced.**
6. `npm run sitemap:dates`: the new URL, the three reviews, `/blog` and the NOX guide moved to 10-12; the script also caught up three club pages to 10-09 from Dito's audit.

**Expected effect and check:** impressions within a week of indexing. First read 10-19. Target: position ≤10 on `best lightweight padel racket` by ~11-09. Watch that the women's guide keeps `lightest padel racket for women` (4.1, 3 clicks) — if the new page takes it, that is a cannibalisation to fix with a title change on the new page, not the women's guide.

### SEO-DECAY-003 — broad racket guides *(diagnosed, closed as structural)*

See §2. The one-line version for Dito: **the four big racket guides are losing to retailers and Reddit on queries Google now treats as shopping queries; no edit fixes that; the narrow pages are where the clicks are, so that is all the loop builds from now on.**

### Not acted, on purpose

- **Intermediate, beginners, pro-2026, advanced** — closed, no edits.
- **New York / Los Angeles click dips** — positions held; one quiet week is not a pattern.
- **`/blog/padel-court-cost`**, **`/blog/best-padel-shoes`** (improving on its own), **`padel court`**, club titles, `/padel-near/*` — standing do-not-reopen list.
- **Next build candidates**, in order: a Wilson brand page (`best wilson padel racket` autocomplete is ten deep; three rated Wilson rackets; 10 GSC impressions), then `best padel racket for men` only if the women's guide keeps compounding (autocomplete returns it; no page; GSC shows a handful of impressions). Babolat and HEAD brand pages have only two rated rackets each — too thin to build honestly.

---

## 4b. Indexing queue

**Wave 1 — today (1 request).**

```
https://www.padelcourtsfinder.com/blog/best-lightweight-padel-rackets
```

Notes:
- `/blog/best-lightweight-padel-rackets` — new, 200 on `https://www.`, canonical correct, in the sitemap. URL Inspection says "URL is unknown to Google".
- Checked and already indexed, so not listed: `/changelog` (new 10-08, crawled 10-08), `/blog/best-nox-padel-rackets` (crawled 10-05), `/courts/snowmass-club` (crawled 10-06), `/blog/best-budget-padel-rackets` (09-30).
- Dito's 10-08/09 audit produced redirects and removals, not new URLs. Nothing else to submit.

**Sitemap:** one new URL shipped. Resubmit `https://www.padelcourtsfinder.com/sitemap.xml` in Search Console.

---

## 5. Blockers and data caveats

- **GSC data through 10-09;** 10-08 and 10-09 look complete-ish (71 and 76 clicks) but can still backfill ~4%. The pro-2026 daily positions of 22.7 and 24.4 lean on those two days; the trend before them already pointed the same way.
- **Results-page read is a single query, single day, US, no personalisation.** It settles the "why" for the intermediate query; I did not read pages for the beginner or 2026 queries. If the loop needs a second opinion, those two reads cost a minute each.
- **No backlink visibility** (standing). **Ahrefs retired** (standing): volume, SERP features and competitor columns in `rankings.csv` are blank.
- **The task file still says "drive GSC through Chrome".** The run used the service-account API for data and the built-in browser only for one results-page read. The skill-file edits proposed on 09-14 remain uncommitted pending Dito's go-ahead — eighth run.
- **Lastmod churn on the four racket guides:** `page-dates.json` moved them to 10-09 because Dito's footer-count edits touched the files. That is the script working as designed (last commit date), but it means `<lastmod>` says "changed" for a one-string edit. Not acting; noted so nobody reads a 10-09 lastmod as a content refresh.
- **Build verification ran in a git worktree** (`/private/tmp/...`) because the main checkout has an uncommitted `src/data/padel-courts.ts` edit from another session. The worktree was created from `origin/main`, so the build reflects exactly what merged. The PR touched only the six files listed in it.

---

## 6. Next run checklist (2026-10-19)

1. **SEO-CONTENT-010 first read:** indexed? impressions on `best lightweight padel racket*`? Does the women's guide keep `lightest padel racket for women` at ~4?
2. **SEO-CONTENT-009 second read:** NOX page clicks (2 this week) on 178 impressions; does `best nox padel racket` hold 2.5–3.5?
3. **SEO-CONTENT-008 third read:** budget page vs 184 impr / 4 clicks / 8.9.
4. **Racket guides:** record positions only (no IDs, no edits). If pro-2026 is still >20 on `best padel racket 2026`, say so in one line and move on.
5. **State/city pages after Dito's "Can I play tonight?" block and price-per-player ship (10-08/09):** did city-page CTR or position move? NY 77 clicks / 5.4, LA 17 / 8.5 are the baselines.
6. **Site clicks:** 598 this week. A second week under 650 on flat impressions needs the by-page CTR split, not another cohort table.
7. **Next build:** Wilson brand page, if SEO-CONTENT-010 is indexed and the lightweight cluster shows impressions.
8. **Do not touch:** the four broad racket guides, court-cost, club titles, `/padel-near/*`, the `padel court` theory.
