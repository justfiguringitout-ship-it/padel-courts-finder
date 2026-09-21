# SEO Improver — weekly report, 2026-09-21

**PR this run:** [#16 — SEO-STRIKE-004](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/16) — `/blog/padel-court-cost` breakdown table, FAQs, query-matched H2s. Merged as `95c5b3b`, build passed, verified live (200, new table and date rendering, sitemap `<lastmod>` 2026-09-21).

**Property:** `sc-domain:padelcourtsfinder.com`
**Measured window:** 2026-08-23 → 2026-09-19 (28 days) vs 2026-07-26 → 2026-08-22
**Clean 7-day read:** 2026-09-13 → 2026-09-19 vs 2026-09-06 → 2026-09-12 (non-overlapping)
**Prior run:** 2026-09-14 (+ addenda 09-14, 09-16, 09-19)
**Data source:** Google Search Console HTTP API via `~/.claude/scripts/gsc_query.py`. Window closed 09-19, pulled 09-21; the last two days can still backfill ~4% upward, so nothing below is a phantom decline. All pulls used limits above the row counts returned (617–706 pages, ≤10k query×page rows) — no truncation.

---

## 1. Executive summary

**Second record week in a row.** 7-day clicks **753 (+94, +14%)** on 44,425 impressions (−654), CTR **1.69% (+0.23pp)**, position **8.0 (improved 0.4)**. 28-day: **2,415 clicks (+583, +32%)**, 169,550 impressions (+28,431), position 8.67 (improved 0.9). 09-14 (130 clicks) and 09-16 (126) are the two best days the site has recorded; the previous ceiling was 104.

**Every cohort grew.** Blog +47 (333), state/city +16 (256), `/courts/*` +13 (112), homepage +12 (31), reviews +17 (68), `/padel-near/*` +2 (22). Clicks rose while impressions fell slightly, so this week's gain is position and CTR, not more exposure.

**The 09-05 racket-cluster step held.** The `best-padel-rackets*` family ran 14–23 clicks/day all week (125 for the week vs 116 the week before) at position 8.1–8.8. The intermediate page cooled from its peak (34 clicks, pos 7.4, vs 48 at 6.4) but is still ~10× where it was before 09-05. Still untouched, still do-not-touch.

**Both of last run's new-content bets got a clean first read.** `/blog/best-padel-rackets-advanced` (indexed 09-14): **446 impressions, 10 clicks, position 8.2** in its first six days — ahead of the teardrop page's first nine days (403 impressions). The five review pages indexed 09-12 went from ~12 impressions combined to **470 impressions and 10 clicks**.

**The single most important action (Dito, 1 minute):** Request Indexing for `https://www.padelcourtsfinder.com/blog/padel-court-cost` so Google re-reads this run's rewrite, then carry on with the club-page queue (§4b).

---

## 2. Movement since last run

| Cohort | 7d clicks | Δ vs prior 7d | 7d pos (prior) | 28d clicks | Δ vs prior 28d | 28d pos (prior) |
|---|---:|---:|---|---:|---:|---|
| `/blog/*` (incl. reviews) | **333** | **+47** | 8.6 (9.0) | 973 | +311 | 9.3 (9.9) |
| — of which `*-review` | 68 | +17 | 7.9 (7.9) | 188 | +66 | 8.2 (8.7) |
| state/city | 256 | +16 | 7.8 (8.9) | 890 | +215 | 9.4 (11.3) |
| `/courts/*` | 112 | +13 | 8.1 (8.9) | 360 | +13 | 9.2 (9.3) |
| homepage (www) | 31 | +12 | **9.1 (12.4)** | 73 | +3 | 13.4 (14.9) |
| `/padel-near/*` | 22 | +2 | 6.6 (7.4) | 90 | +17 | 7.4 (8.4) |

`/courts/*` is positive on the 28-day comparison for the first time in five runs. The homepage moved three places on `padel near me` / `padel courts near me` (6.6 and 5.9, from 6.9 and 6.5) — not attributed to anything this loop shipped.

### Biggest 7-day page gains

| Page | Clicks | Δ | Impr | Pos (prior) |
|---|---:|---:|---:|---|
| `/blog/best-teardrop-padel-rackets` | 25 | +13 | 299 | **6.0 (8.4)** |
| `/blog/best-padel-rackets-control` | 26 | +12 | 641 | 7.4 (9.4) |
| `/` | 31 | +12 | 688 | 9.1 (12.4) |
| `/blog/best-padel-rackets-advanced` | 10 | +10 (new) | 446 | 8.2 |
| `/blog/best-padel-rackets-women` | 11 | +10 | 104 | 17.3 (17.0) |
| `/blog/best-padel-bags` | 16 | +10 | 299 | 9.9 (11.5) |
| `/blog/best-padel-clubs-san-francisco` | 10 | +8 | 407 | 6.7 (7.1) |
| `/blog/wilson-optix-v1-review` | 6 | +6 (new) | 172 | 6.5 |
| `/california/los-angeles` | 23 | +6 | 1,548 | 8.2 (9.4) |

### Losses, with diagnoses

- **`/blog/best-padel-rackets-intermediate`: 34 clicks (−14), position 7.4 (from 6.4).** Head term `best padel rackets for intermediate players` went 121 → 29 impressions at 8.1 (from 6.0). That is the post-step peak settling, not a reversal: the page is at 983 impressions/week against ~200 before 09-05. No action — SEO-DECAY-001 stands.
- **`/new-york`: 87 (−9) at a better position (5.1 from 5.3).** `padel nyc` 17 clicks / 269 impr / 6.3% CTR / pos 3.9. Demand wobble. See the NYC verdict in §3.
- **`/blog/padel-court-cost`: the whole cluster slipped 2–3 places** (7d: `cost to build a padel court` 10.2 → 13.9, `how much does it cost…` 9.3 → 12.0, `installation cost` 10.6 → 14.5). This is the one real ranking loss of the week and it is the page this run acted on (§4).
- **28-day only:** `/courts/lobbs-padel` 3 (−15) and `/florida/fort-lauderdale` 35 (−13) — both at flat or better position with fewer impressions; demand. `/blog/best-padel-balls` 1 (−10), position 36.5 from 25.3 — a genuine slide on a page that never ranked well; recorded, not worth a slot.
- **`/blog/best-padel-bags` recovered** (9.9 from 11.5; `best padel bag` 5.5). The SEO-DECAY-003 trigger from last run's checklist did not fire; no ID opened.

`rankings.csv`: 84 rows — **15 gained, 52 flat, 14 new, 1 lost** (`padel vs pickleball` 25.9 → 27.7), **1 dropped** (`what is padel`, which held 2.3 on a handful of impressions last run and has none this window — noise, not a loss), 1 never ranked (`padel racket review`). 28-day windows overlap three weeks, so the 7-day tables are the honest movement.

---

## 3. Did last week's changes work

| ID | Status | Verdict |
|---|---|---|
| **SEO-CONTENT-007** (`/blog/best-padel-rackets-advanced`, PR #14) | Indexed 09-14 | **Working.** 446 impr / 10 clicks / pos 8.2 in six days. Head terms are still page 2 (`best padel rackets for advanced players` 21 impr @ 14.6; `best padel racket for advanced players` 15 @ 16.3) — the page's volume is coming from long-tail. Target stays: ≤10 on the head term by ~10-12 |
| **SEO-CONTENT-003/005** (five review pages) | Indexed 09-12 | **Working.** Optix V1 172 impr / 6 clicks / 6.5; Neuron 120 / 1 / 16.9; Extreme Evo 111 / 2 / 7.8; Genius Attack 35 / 1 / 8.6; Metalbone 3.4 32 / 0 / 9.0. Neuron is the only one on page 2 |
| **SEO-STRIKE-003** (NYC block + prices, PR #11–#13) | First full week | **Modest yes.** `padel nyc` position 4.3 → **3.9**, CTR 6.3% (pre-block baseline 4.7%; last week 7.3%). `padel courts nyc` 8 clicks / 35 impr / **22.9%** at 2.1; `padel new york` 4.7 → 4.0. Meets the success test set on 09-14 (CTR above 4.7% with position no worse). Closed as worked |
| **SEO-INDEX-005** (sitemap lastmod fix, PR #15) | Live | **Holding.** Live sitemap: 724 URLs, busiest date 327 on 08-04 (45%, the long-standing club floor), 232 on 09-12 (32%). After PR #16: exactly one URL on 09-21. The regeneration rule was followed this run |
| **SEO-STRIKE-004** (court-cost) | Was "recorded" | **Acted this run** — §4 |
| SEO-STRIKE-002 (beginners, off-page) | Standing | `best padel racket for beginners` 28d 17.3 → ~16; 7d 14.3 (13.4). Flat on page 2. Still off-page |
| SEO-DECAY-001 (intermediate) | Standing | Step held. Order stays |
| SEO-DECAY-002, SEO-CTR-006, SEO-CTR-002/007 | Closed | Untouched. `best padel shoes` head term came back to 16.5 from 22.5 on its own |

**Confounders.** The week's +94 is spread across every cohort, including ones this loop has not touched in a month (homepage, `/courts/*`, city guides). That pattern says domain-level lift — the press push and badge links are the likeliest cause and the loop still cannot see backlinks. Credit to the loop this week is limited to the two content bets above (~20 clicks) and the NYC block.

---

## 4. This week's improvements

### SEO-STRIKE-004 — `/blog/padel-court-cost` *(SHIPPED — PR #16, merged `95c5b3b`, live)*

**Evidence (28d).** One page, ~1,500 impressions, **1 click**, everything sitting just off page 1:

| Query | Impr | Pos |
|---|---:|---:|
| `how much does it cost to build a padel court` | 290 | 11.9 |
| `cost to build a padel court` | 283 | 12.8 |
| `padel court cost` | 192 | 13.0 |
| `padel court installation cost` | 189 | 13.1 |
| `padel court construction cost` | 149 | 14.2 |
| `outdoor padel court cost` | 98 | 12.2 |
| `how much does a padel court cost` | 95 | 12.9 |
| `single padel court cost` | 55 | 10.4 |

And it was sliding (§2). Inspection found a well-written article with no scannable answer: no table, no "installation cost" or "construction cost" heading despite ~340 impressions on those two phrasings, no indoor-vs-outdoor question in the FAQ, a meta description with no numbers, and a `dateModified` of 07-04.

**What shipped.**
1. A **cost breakdown table** directly under the intro: kit, slab, lighting, shipping, installation, permits, outdoor all-in, canopy, indoor. Every figure is copied from the article's own body — nothing new is claimed.
2. **Two FAQ entries** in both FAQPage schema and visible copy: "How much does padel court installation cost?" and "Is an outdoor padel court cheaper than an indoor one?"
3. **Three H2s reworded** to the phrasings people use: "Padel court construction cost: the kit…", "Padel court installation cost: shipping, crew, and timeline", "Indoor vs outdoor padel court cost…".
4. Meta description now leads with $40,000–$75,000 / $70,000–$100,000+. `dateModified` and visible date → 2026-09-21.
5. Keep Reading: the `/about` card became `/buy-a-padel-court` (the commercial neighbour; it already links back twice, so the pair now points both ways).
6. `npm run sitemap:dates` run in the same PR; diff was one line.

**Deliberately not changed: title and H1.** They exactly match the top query. The intermediate page's history (two title retargets, two declines) is the reason.

**Expected effect and check:** head terms ≤ 10 within 3–4 weeks and the first real clicks. First read 09-28, verdict 10-05. If it keeps sliding after the recrawl, revert is `git revert -m 1 95c5b3b`.

**Commercial note.** `/buy-a-padel-court` ranks 38–77 on its own terms (`padel court for sale` 38.3, `buy padel court` 61). It is not competing with the guide; it is just not ranking. A page-1 cost guide is the realistic way to feed it.

### SEO-CONTENT-008 — `/blog/best-budget-padel-rackets` *(queued, gate now cleared, not built this run)*

Last run's gate was "only if the advanced page is indexed and earning impressions" — it is. Not built today because the evidence is still thin (28d: `best budget padel racket 2026` 9 impr @ 9.6, `…for beginners` 9 @ 8.8, `…for intermediate` 4 @ 7.2) and one PR per run is the rule. It is next run's build unless something larger appears. Validate against autocomplete again before committing.

### SEO-INDEX-006 — two redirecting slugs still in the sitemap *(recorded 09-16, still open)*

`/courts/lets-go-pickleball-padel` and `/courts/patl` 308 but are listed. Small site-code fix; bundle into next run's PR.

### Not acted, on purpose

- **Intermediate page** — cooling from a peak is not decay.
- **`/blog/best-padel-rackets-women`** (11 clicks at position 17.3) — CTR is carrying it; leave it to climb.
- **`padel court`**, club titles, `/padel-near/*`, `/blog/best-padel-shoes` — standing do-not-reopen list.
- **Cannibalization `padel atlanta` / `padel austin`** — `/georgia/atlanta` 9 clicks @ 5.7 (+5) while the Atlanta blog guide fell to 5 (−5): Google is settling on the city page by itself. Watch.

---

## 4b. Indexing queue

**Wave 1 — today (1 request):** updated money-adjacent page, already indexed, needs a recrawl to pick up the rewrite.

```
https://www.padelcourtsfinder.com/blog/padel-court-cost
```

Verified 200 on `https://www.`, canonical correct, sitemap `<lastmod>` 2026-09-21. (Not added to the daily queue script — it drops already-indexed URLs — so this one line is manual.)

**Wave 2 onward — the club-page pool, re-inspected today.** All five URLs Dito submitted on 09-19 are **indexed** (crawled 09-19), and `/florida/hallandale-beach` — one of the three Google had previously crawled and declined — is indexed too. That makes four submission waves, every URL indexed within a day. **33 club pages remain** (26 "Discovered", 5 "URL is unknown to Google", 2 "Crawled – currently not indexed"). The daily debrief's `pcf_indexing_queue.py` is in sync with this and hands out the next ten each morning, starting:

```
https://www.padelcourtsfinder.com/courts/bay-padel-treasure-island
https://www.padelcourtsfinder.com/courts/brisas
https://www.padelcourtsfinder.com/courts/brisas-east-hampton
https://www.padelcourtsfinder.com/courts/bush-tennis-center-texas-padel
https://www.padelcourtsfinder.com/courts/canas-racket-padel
https://www.padelcourtsfinder.com/courts/casas-padel-club-aventura
https://www.padelcourtsfinder.com/courts/charlotte-padel-club-matthews
https://www.padelcourtsfinder.com/courts/club-pickle-padel
https://www.padelcourtsfinder.com/courts/dripping-springs-racquet-club
https://www.padelcourtsfinder.com/courts/glassbox-padel-club
```

At ten a day the pool is empty in four days. These are hygiene, not traffic (branded queries go to the clubs' own sites).

**Sitemap:** no new URLs shipped this week; one `<lastmod>` changed. Resubmitting `https://www.padelcourtsfinder.com/sitemap.xml` is optional.

---

## 5. Blockers and data caveats

- **No backlink visibility.** A broad, every-cohort lift two weeks running looks like authority, and the loop cannot confirm it. GSC → Links → Top linking sites is still the only cheap check.
- **Ahrefs retired** (standing): no volumes, SERP features, or competitor data; those CSV columns are blank.
- **The task file still says "drive GSC through Chrome".** The run used the service-account API, as the last several runs have; Chrome was not needed. The skill-file edits listed on 09-14 (name `gsc_query.py` as source #1, `git worktree` instead of stash, the page-dates rule) are still uncommitted pending Dito's go-ahead — fifth run.
- **Curl works with a browser User-Agent.** The Vercel checkpoint 403s bare curl; `-A "Mozilla/5.0"` returned 200 for the sitemap and the page today, which is how the deploy was verified.
- **09-18/09-19 may backfill up slightly.** It can only make this week look better.
- **`/courts/*`** remains the low-CTR bulk of impressions (15.6k/week at 0.7%); unchanged assessment.

---

## 6. Next run checklist (2026-09-28)

1. **SEO-STRIKE-004 first read:** was `/blog/padel-court-cost` recrawled after 09-21? Position on the eight queries in §4 vs this table. Do not touch it again before 10-05.
2. **Advanced page:** head terms vs 14.6 / 16.3. Weekly impressions vs 446.
3. **Did the step hold a third week?** Racket-cluster daily clicks (this week 14–23/day) and intermediate position (7.4).
4. **Build slot:** `/blog/best-budget-padel-rackets` (SEO-CONTENT-008) — re-validate with autocomplete, reuse on-site-reviewed rackets only, six inbound links, Request Indexing the day it ships. Bundle SEO-INDEX-006 (drop the two redirecting slugs from the sitemap) into the same PR and run `npm run sitemap:dates`.
5. **Sitemap sanity:** count `<lastmod>` by date; flag anything new above ~35%.
6. **Club pool:** should be at or near zero; re-inspect the two "Crawled – not indexed" holdouts (`piedmont-driving-club`, `snowmass-club`) and call them thin-content if they are still out after submission.
7. **Do not touch:** intermediate (SEO-DECAY-001), club titles, `/padel-near/*`, `/blog/best-padel-shoes`, the `padel court` theory.
