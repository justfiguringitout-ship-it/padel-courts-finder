# SEO Improver — weekly report, 2026-09-28

**PR this run:** [#17 — SEO-CONTENT-008 + SEO-INDEX-006](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/17) — new page `/blog/best-budget-padel-rackets`, plus two redirecting slugs removed from the sitemap. Merged as `200fc38`, local build and Vercel check passed, verified live (200, canonical correct, 46 tagged affiliate links, sitemap `<lastmod>` 2026-09-28).

**Property:** `sc-domain:padelcourtsfinder.com`
**Measured window:** 2026-08-29 → 2026-09-25 (28 days) vs 2026-08-01 → 2026-08-28
**Clean 7-day read:** 2026-09-19 → 2026-09-25 vs 2026-09-12 → 2026-09-18 (non-overlapping, both Saturday → Friday)
**Prior run:** 2026-09-21
**Data source:** Google Search Console HTTP API via `~/.claude/scripts/gsc_query.py`. Pulled 09-28; the API had data through 09-25 only, so the windows end one day earlier than the usual pattern. 09-24 and 09-25 can still backfill ~4% upward. All pulls used limits above the row counts returned (592–733 pages, ≤10.2k query×page rows) — no truncation.

---

## 1. Executive summary

**Clicks came off last week's record; rankings did not.** 7-day clicks **691 (−67, −9%)** on 40,713 impressions (−4,408, −10%), CTR **1.70% (+0.02pp)**, position **8.0 (improved 0.1)**. Clicks fell in line with impressions while position improved in every cohort, so this is fewer searches shown, not lost rankings. Last week had two spike days (130 and 126); this week had none and ran 95–107 on six of seven days. 28-day: **2,597 clicks (+735, +39%)**, 172,672 impressions (+28,194), position 8.42 (improved 1.1).

**The racket cluster grew against the tide.** The `best-padel-rackets*` family took 171 clicks (+15). Intermediate 40 clicks at position 7.0 (from 7.3), pro-2026 29 (+10), beginners 20 (+9). The 09-05 step has now held three weeks. `best padel racket for beginners` moved to **11.8 (from 14.8) with its first 5 clicks in a week**.

**Last week's court-cost rewrite got its recrawl and an early lift.** Google re-crawled `/blog/padel-court-cost` on 09-23. Page position 8.5 (from 9.6); six of the eight target queries improved by 0.4–1.5 places. Still one click. Verdict is due 10-05, not today.

**This week's build shipped:** `/blog/best-budget-padel-rackets` — six rackets from $89.95 to $169.99, all already reviewed on the site.

**The single most important action (Dito, 1 minute):** Request Indexing for `https://www.padelcourtsfinder.com/blog/best-budget-padel-rackets`. It is at the top of today's queue (§4b).

---

## 2. Movement since last run

| Cohort | 7d clicks | Δ vs prior 7d | 7d pos (prior) | 28d clicks | Δ vs prior 28d | 28d pos (prior) |
|---|---:|---:|---|---:|---:|---|
| `/blog/*` (incl. reviews) | 298 | −30 | 8.4 (8.7) | 1,077 | +376 | 9.0 (9.9) |
| — of which `*-review` | 53 | −11 | — | 200 | +70 | — |
| state/city | 255 | −13 | 7.5 (7.7) | 950 | +262 | 8.2 (9.9) |
| `/courts/*` | 90 | −15 | 8.1 (8.2) | 369 | +48 | 8.8 (9.5) |
| homepage (www) | 28 | −3 | 7.8 (9.1) | 109 | +32 | 7.9 (10.7) |
| `/padel-near/*` | 20 | −4 | 6.8 (6.9) | 89 | +23 | 7.1 (8.4) |

Every cohort lost a few clicks and every cohort improved its position. The 7-day comparison window is shifted one day from last report's (which recorded 753 for 09-13 → 09-19), so the prior-week figure here is 758.

### Biggest 7-day page gains

| Page | Clicks | Δ | Impr | Pos (prior) |
|---|---:|---:|---:|---|
| `/blog/best-padel-rackets-2026` | 29 | +10 | 637 | 8.7 (9.1) |
| `/blog/best-padel-rackets-beginners` | 20 | +9 | 954 | 10.4 (10.3) |
| `/new-york` | 100 | +8 | 1,961 | 5.2 (5.1) |
| `/blog/best-padel-rackets-intermediate` | 40 | +7 | 1,142 | 7.0 (7.3) |
| `/california/los-angeles` | 32 | +6 | 1,343 | 7.9 (8.4) |
| `/blog/nox-ml10-pro-cup-review` | 7 | +6 | 293 | 6.8 (6.8) |
| `/blog/best-padel-rackets-tennis-elbow` | 9 | +6 | 158 | 6.6 (6.2) |

`/new-york` reached 100 clicks in a week for the first time.

### Losses, with diagnoses

- **`/blog/best-teardrop-padel-rackets`: 13 (−12), position 6.1 (from 6.3).** Position is better and impressions are close (266 vs 288). Last week's 25 was the outlier; this is CTR variance on a small page. No action.
- **`/blog/nox-at10-genius-18k-review`: 20 (−11); impressions 1,214 from 2,145.** Position flat (7.8 from 8.0). The two review queries that earn the clicks hold 4.6–5.3. Part of the impression drop is one malformed query (`+nox at10 genius 18k alum 2026 () reviews`, 68 → 3) that looks automated. Demand, not ranking.
- **`/blog/best-padel-shoes`: 11 (−8), position 10.8 (from 9.5).** Head term `best padel shoes` 20.0 (from 15.7), `best padel shoes 2026` 13.1 (from 10.7). A real slip of 2–4 places on a page on the do-not-reopen list. Recorded; if it slips again next week it gets an ID.
- **`/blog/padel-positioning-guide`: 5 (−8)** at position 6.9 (from 6.7). Flat ranking, CTR variance.
- **`/blog/best-padel-clubs-ohio`: 0 (−6)** at a better position (5.6 from 6.2) with more impressions. Noise.
- **`best padel rackets for advanced players`: 22.8 (from 11.8) on 29 impressions.** See §3.

`rankings.csv`: 116 rows — **11 gained, 4 lost, 70 flat, 31 new**. "New" this week means newly tracked (the list was widened to the top 50 queries by impressions, mostly club brand names, plus four budget-racket terms), not newly ranking. The four lost: `best padel racket` (27.2, 20 impressions), `best padel rackets for advanced players`, `padel court finder` (4.8, 13 impressions), `how do i get started playing padel?` (3.4 from 2.3). Positions in the CSV are 28-day.

---

## 3. Did last week's changes work

| ID | Status | Verdict |
|---|---|---|
| **SEO-STRIKE-004** (`/blog/padel-court-cost`, PR #16) | Recrawled 09-23 | **Early positive, not yet a verdict.** See table below. Do not touch before 10-05 |
| **SEO-CONTENT-007** (`/blog/best-padel-rackets-advanced`) | Second week | **Holding on volume, head term unsettled.** 451 impressions / 10 clicks / position 8.4 (last week 355 / 7 / 8.4 on this report's windows). Plural head term fell to 22.8; singular `best padel racket for advanced players` improved to 12.2 (from 16.4) and got a click. Samples are 10–29 impressions and the page is two weeks old. Target stays ≤10 by ~10-12 |
| **SEO-CONTENT-003/005** (review pages) | Third week | Optix V1 191 impr / 4 clicks / 7.0; Extreme Evo 82 / 0 / 7.1; Technical Viper 49 / 0 / 8.9; Metalbone 3.4 50 / 0 / 8.9; Genius Attack 45 / 3 / 8.1. Steady, small |
| **SEO-STRIKE-003** (NYC block) | Closed as worked | `padel nyc` 4.0, 17 clicks, 6.5% CTR. `padel courts nyc` 2.6, 21% CTR. Holding |
| **SEO-INDEX-005** (sitemap lastmod) | Live | Holding. Live sitemap after PR #17: 725 URLs; 325 on 08-04 (45%), 231 on 09-12 (32%), 12 on 09-28 |
| **SEO-INDEX-006** (redirecting slugs) | Was open | **Fixed this run** — §4 |
| SEO-STRIKE-002 (beginners, off-page) | Standing | `best padel racket for beginners` 7d **11.8 (from 14.8)**, 5 clicks; 28d 15.0 (from 16.4). Moving without a change from this loop |
| SEO-DECAY-001 (intermediate) | Standing | 40 clicks, position 7.0. Untouched — PR #17 deliberately added no link to it |

**SEO-STRIKE-004 first read (7-day position, this week vs last):**

| Query | Impr | Pos | Prior |
|---|---:|---:|---:|
| `how much does it cost to build a padel court` | 38 | 11.0 | 12.2 |
| `cost to build a padel court` | 34 | 13.3 | 13.0 |
| `padel court cost` | 24 | 11.8 | 13.0 |
| `padel court installation cost` | 21 | 12.6 | 14.1 |
| `padel court construction cost` | 14 | 14.9 | 14.3 |
| `outdoor padel court cost` | 13 | 11.6 | 13.4 |
| `how much does a padel court cost` | 18 | 11.9 | 11.8 |
| `padel court cost to build` | 8 | 7.2 | 11.0 |

Five better, three flat or slightly worse, none on page 1 yet. The recrawl landed mid-window, so only three of these seven days reflect the new page.

**Confounders.** Impressions fell ~10% across cohorts this loop has not touched, which points at demand (late September) rather than anything shipped. The racket cluster's gain and the beginners move happened with no code change to those pages. The loop still cannot see backlinks.

---

## 4. This week's improvements

### SEO-CONTENT-008 — `/blog/best-budget-padel-rackets` *(SHIPPED — PR #17, merged `200fc38`, live)*

**Evidence.** Google autocomplete (checked today) returns `best budget padel racket`, `…for beginners`, `…for intermediate`, `…2026`, `best cheap padel racket`, `best padel racket under 100` and `under 150`. In GSC the site already shows for the budget variants from three different pages with no page built for them:

| Query (28d) | Ranking page | Impr | Clicks | Pos |
|---|---|---:|---:|---:|
| `best budget padel racket for beginners` | beginners | 10 | 0 | 9.0 |
| `best budget padel racket 2026` | pro-2026 | 8 | 1 | 8.9 |
| `best budget padel racket for intermediate` | intermediate | 6 | 1 | 7.2 |
| `best cheap padel racket for beginners` | beginners | 4 | 0 | 4.8 |

The GSC volume is small. The case for the page is the pattern, not these numbers: every specific-modifier racket page built so far (shapes, tennis elbow, women, advanced) found far more impressions once it existed than the pre-launch queries suggested.

**What shipped.**
1. Six picks, **$89.95–$169.99**: Wilson Optix V1, HEAD Extreme Evo, Babolat Contact, NOX Pro Cup USPA, NOX ML10 Pro Cup, Adidas Adipower. Every price, spec, score and Amazon link is copied from the beginner and intermediate guides. No new product and no new claim.
2. Ranked by score against price, so the $109 Optix V1 (7.7/10) is first. The page says plainly that nothing under $89.95 is listed because nothing under that price has been reviewed.
3. A "by what you can spend" block (under $100 / $100–130 / up to $170) and five FAQs matched to the autocomplete phrasings. Article + FAQPage + ItemList schema.
4. **Eight inbound links:** Keep Reading cards on beginners, control, round, pro-2026 and the Contact / Optix V1 / Extreme Evo reviews, plus the blog index.
5. `npm run sitemap:dates` run in the same PR: nine blog URLs and `/blog` moved to 09-28, nothing else.

**Expected effect and check:** impressions within 1–2 weeks of indexing. First read 10-05; target is position ≤10 on `best budget padel racket` by ~10-26.

### SEO-INDEX-006 — redirecting slugs out of the sitemap *(SHIPPED — same PR)*

`/courts/patl` and `/courts/lets-go-pickleball-padel` are filtered out in `src/app/sitemap.ts`. Live sitemap confirmed: neither present.

### SEO-INDEX-007 — two redirects sit on top of live club records *(recorded, needs Dito's call)*

Found while fixing the above. `next.config.ts` sends `/courts/patl` to `/courts/itp-training-academy` and `/courts/lets-go-pickleball-padel` to `/search`, but both clubs still have records in `padel-courts.ts`, and the Fort Lauderdale guide still ranks PATL sixth and links to it. Either the clubs closed or rebranded and the records and guide entry should go, or the redirects are wrong. I changed neither — this is a fact about the clubs, not an SEO choice.

### Not acted, on purpose

- **Intermediate page** — third good week. Hands off.
- **`/blog/padel-court-cost`** — inside its measurement window until 10-05.
- **`/blog/best-padel-shoes`** — one week of slippage; watch.
- **`padel court`**, club titles, `/padel-near/*` — standing do-not-reopen list.

---

## 4b. Indexing queue

**Wave 1 — today (10 requests).** The daily queue script has been updated; the two new URLs are at the top.

```
https://www.padelcourtsfinder.com/blog/best-budget-padel-rackets
https://www.padelcourtsfinder.com/courts/padel-connect-ct
https://www.padelcourtsfinder.com/courts/sensa-padel-boston
https://www.padelcourtsfinder.com/courts/taktika-padel-san-diego
https://www.padelcourtsfinder.com/courts/taktika-padel-stockton
https://www.padelcourtsfinder.com/courts/tempo-padel-pickleball-club
https://www.padelcourtsfinder.com/courts/the-sports-haus
https://www.padelcourtsfinder.com/courts/u-padel-club-san-antonio
https://www.padelcourtsfinder.com/courts/woodlands-padel
https://www.padelcourtsfinder.com/courts/piedmont-driving-club
```

**Wave 2 — tomorrow (1 request).**

```
https://www.padelcourtsfinder.com/courts/snowmass-club
```

Notes:
- `/blog/best-budget-padel-rackets` — new, 200 on `https://www.`, canonical correct.
- `/courts/padel-connect-ct` — added 09-28 as a coming-soon listing; GSC says "URL is unknown to Google".
- `piedmont-driving-club` and `snowmass-club` are still "Crawled – currently not indexed", last crawled 05-29. They have not been resubmitted yet, so there is no thin-content verdict to give.
- The club pool is down from 33 to 9.

**Sitemap:** one new URL shipped. Resubmit `https://www.padelcourtsfinder.com/sitemap.xml` in Search Console.

---

## 5. Blockers and data caveats

- **GSC data stopped at 09-25** when pulled. Windows end a day early and the last two days are provisional.
- **No backlink visibility** (standing). GSC → Links → Top linking sites remains the only cheap check.
- **Ahrefs retired** (standing): no volumes, SERP features, or competitor data; those CSV columns are blank.
- **The task file still says "drive GSC through Chrome".** The run used the service-account API; Chrome was not needed. The skill-file edits listed on 09-14 are still uncommitted pending Dito's go-ahead — sixth run.
- **Several connectors are unauthorized in scheduled runs** (Ahrefs, Zapier, Airtable and others). None was needed for this loop.
- **Lastmod on the seven linking pages** moved to 09-28 for a one-card change each. That follows the PR #14 precedent, but it is a small overstatement of how much those pages changed.

---

## 6. Next run checklist (2026-10-05)

1. **SEO-STRIKE-004 verdict:** full post-recrawl week for `/blog/padel-court-cost` against the §3 table. Any head term ≤10? Any clicks? If it slid after the recrawl, revert is `git revert -m 1 95c5b3b`.
2. **SEO-CONTENT-008 first read:** is the budget page indexed, and what does it rank for? Check that beginners did not lose `best budget…for beginners` impressions to it without the new page picking them up.
3. **Advanced head terms:** plural (22.8) and singular (12.2). Two more weeks to the ≤10 target.
4. **Did impressions recover?** 40.7k this week vs 45.1k. A second −10% week means look at it by cohort and country before calling it seasonal.
5. **`/blog/best-padel-shoes`:** head term vs 20.0. A second slip opens SEO-DECAY-003.
6. **SEO-INDEX-007:** Dito's answer on PATL Fort Lauderdale and Let's Go Pickleball & Padel.
7. **Club pool:** should be empty; give the thin-content verdict on the two holdouts once they have been submitted.
8. **Do not touch:** intermediate (SEO-DECAY-001), club titles, `/padel-near/*`, the `padel court` theory.
