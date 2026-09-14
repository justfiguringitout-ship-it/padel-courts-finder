# SEO Improver — weekly report, 2026-09-14

**PRs this run:**
- [#14 — SEO-CONTENT-007](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/14) — `/blog/best-padel-rackets-advanced`, merged as `aebff4e`, live (200).
- [#15 — SEO-INDEX-005](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/15) — sitemap `lastmod` regression fix, merged as `882468d`. A second PR this run, against the one-PR rule, because #14 surfaced a live regression and leaving it for a week would have undone PR #10.

**Property:** `sc-domain:padelcourtsfinder.com`
**Measured window:** 2026-08-16 → 2026-09-12 (28 days) vs 2026-07-19 → 2026-08-15
**Clean 7-day read:** 2026-09-06 → 2026-09-12 vs 2026-08-30 → 2026-09-05 (non-overlapping)
**Prior run:** 2026-09-07 (+ addenda 09-07, 09-12, 09-13) — 7 days ago
**Data source:** Google Search Console HTTP API via `~/.claude/scripts/gsc_query.py` (service account). Window closed 09-12, pulled 09-14 — settled, no backfill discount applies.

---

## 1. Executive summary

**Best week the site has had.** 7-day clicks **659 (+142, +27%)** on 45,079 impressions (+2,119), CTR 1.46% (+0.26pp), position **8.4 (improved 0.5)**. 28-day totals: **2,101 clicks (+260, +14.1%)**, 160,881 impressions (+24,958), position 9.07 (improved 0.4). Every day from 09-06 to 09-12 beat every day before it (87–104 clicks/day against a prior ceiling of 88). The 3,000-impression phantom-query drop predicted last week did happen — that query is at 5–12 impressions/day now — and the site grew straight through it.

**Three things happened this week, and only one of them was this loop's doing.**

1. **The racket-level cluster stepped up on 09-05, before anything shipped.** `/blog/best-padel-rackets-intermediate` — the page under a standing do-not-touch order (SEO-DECAY-001) — went from **3 clicks / position 18.0 to 48 clicks / position 6.4** in seven days. Its head term `best padel rackets for intermediate players` moved **21.4 → 6.0**. `/blog/best-padel-rackets-2026` (16.3 → 9.7) and `/blog/best-padel-rackets-beginners` (13.6 → 11.2 in the 7d read) stepped up on the same day. The whole `best-padel-rackets*` family went from ~4 clicks/day to ~17/day on 09-05 and held. No commit touched those pages until the 09-11 hero-video fix, six days after the step. §2 has the trace; §5 has what it might be.

2. **The five review pages are indexed — because Dito submitted them, not because the sitemap fix worked.** All five moved from "Discovered/unknown" to **INDEXED, crawled 2026-09-12 10:34–10:38 UTC**, minutes after submission. SEO-INDEX-003 failed its test: five days after PR #10 deployed, zero of five had been crawled and two had regressed to "URL is unknown to Google". **Indexing mechanics are closed as a topic.** The rule from here is simple: every new page gets a manual Request Indexing the day it ships, and the sitemap is kept honest so it does not compete with that.

3. **The build slot unlocked, so it was used.** SEO-CONTENT-007 shipped `/blog/best-padel-rackets-advanced` (PR #14): the missing third rung of the beginner → intermediate → advanced ladder, built the week that ladder became the site's hottest cluster. Five on-site-reviewed rackets, `padel02-20` throughout, inbound links from six pages so it cannot orphan.

**And one thing went wrong and was fixed in the same run.** Regenerating `page-dates.json` for the new page exposed a latent regression: PR #12's court-adapter change (09-12) had never been regenerated, and under the SEO-INDEX-003 rules it counted as structural for every club page. The deploy of #14 put **634 of 723 sitemap URLs (87.6%) on one date** — worse than the 91% PR #10 started from. SEO-INDEX-005 (#15) takes it to **232 (32.0%)**, every one of them a listing page whose cards genuinely changed. §4 has the numbers and the standing rule that prevents a third occurrence.

**The single most important action (Dito, ~2 minutes):** Request Indexing for `https://www.padelcourtsfinder.com/blog/best-padel-rackets-advanced` and resubmit `sitemap.xml` (its `<lastmod>` values changed meaning twice today). §4b.

---

## 2. Movement since last run

**Net: strongly up, led by the racket cluster, with the directory flat-to-up for the first time in a month.**

| Cohort | 7d clicks | Δ vs prior 7d | 7d pos | 28d clicks | Δ vs prior 28d | 28d pos |
|---|---:|---:|---:|---:|---:|---:|
| `/blog/*` | **286** | **+109** | 9.0 (−0.9) | 813 | +193 | 9.6 (−0.3) |
| `*-review` | 51 | +15 | 7.9 (−0.4) | 162 | +60 | 8.4 (−0.3) |
| state/city | 238 | +29 | 9.0 (−0.8) | 798 | +125 | 10.4 (−0.8) |
| `/courts/*` | 99 | **+23** | 8.9 (−0.7) | 322 | −60 | 9.6 (+0.5 worse) |
| `/padel-near/*` | 20 | −4 | 7.4 (flat) | 81 | −8 | 7.7 (−0.9) |
| homepage (www) | 19 | +6 | 12.4 | 49 | −22 | 14.9 (−0.3) |
| non-www host (phantom) | 0 | −14 | — | 37 | +37 | 1.5 |

The `/courts/*` 28-day decline noted for three runs running has stopped week-on-week (+23 clicks, position better by 0.7). Not credited to anything; watching.

### The 09-05 step, page by page (daily clicks / impressions / position)

```
                         09-02      09-03      09-04      09-05       09-06       09-08       09-10       09-12
intermediate           0/32/24.5  1/25/24.6  1/48/20.4  1/115/10.5  6/176/7.4   8/264/4.2  10/177/6.8   3/233/7.5
best-padel-rackets-2026 0/27/25.9  0/25/24.2  0/36/21.2  3/147/11.1  2/123/10.0  4/129/9.2   3/128/9.7   2/132/9.6
beginners              0/83/17.3  3/92/15.3  1/94/15.4  7/177/11.8  2/157/11.2  2/183/10.8  3/155/10.9   1/164/10.5
racket cluster (all)   5/261/15.7 5/268/14.3 4/316/14.8 16/594/11.0 12/608/9.8  19/746/7.7  20/616/8.8  11/752/8.9
```

Three pages, one day, impressions ×3–5, positions up 10–14 places, and it held for eight days. The shape pages (teardrop, round) did **not** step — they were already on page 1 and stayed flat. `/courts/*` did not step. This is a cluster-specific re-rank, not a site-wide lift.

**What did not cause it:** no commit touched these pages between 08-29 and 09-11. PR #10 (sitemap) deployed 09-07, two days *after* the step. The 09-11 hero-video fix on these exact three pages came six days after.

**What might have:** (a) a Google ranking refresh — no core update was announced as of Sep 1 per Search Engine Land, and 2026 volatility has been continuous rather than event-shaped, so this cannot be confirmed or ruled out; (b) an authority gain — the State of US Padel press list (49 contacts) went out this fortnight and the badge program keeps running, and the racket pages are the ones that would benefit first from a domain-level lift on a competitive commercial cluster. Ahrefs would settle this in one query; it is retired. **Recorded as unattributed.** What it does settle is SEO-DECAY-001: the intermediate page recovered on its own after two "fixes" made it worse, which is the strongest possible argument for the do-not-touch order. It stays.

### Biggest page gains (28d, clicks)

| Page | Clicks | Δ | Impr | Pos |
|---|---:|---:|---:|---:|
| `/new-york` | 297 | **+70** | 7,460 | 6.0 (from 7.7) |
| `/blog/nox-at10-genius-18k-review` | 83 | **+57** | 6,215 | 8.5 |
| `/blog/best-padel-rackets-intermediate` | 63 | **+38** | 2,139 | 10.1 (from 12.6) |
| `/california/los-angeles` | 63 | +32 | 4,329 | 10.8 |
| `/blog/best-padel-rackets-beginners` | 51 | +23 | 2,847 | 12.0 (from 13.6) |
| `/blog/best-teardrop-padel-rackets` | 66 | +18 | 1,178 | 7.8 |
| `/blog/best-padel-rackets-2026` | 27 | +18 | 1,468 | 11.2 (from 12.5) |
| `/blog/best-round-padel-rackets` | 32 | +16 | 807 | 7.6 |

### Losses, with diagnoses

- **`/blog/best-padel-bags`: 28 clicks (−18), position 10.4 (from 8.5).** The only real ranking loss this week. `best padel bag` 8.4 (from 7.1). Impressions *rose* (+281), so it is being shown for more, weaker queries. No action this run; if it holds below 10 next week it gets an ID.
- **`/florida/fort-lauderdale`: 38 (−11).** Position *improved* 5.5 → 5.3 on the head term; impressions fell 167 → 127. Demand, not ranking.
- **`/blog/head-extreme-pro-review`: 13 (−13), position 8.8.** Impressions −363 at flat position; same pattern as last week. Watch only.
- **`/blog/best-padel-shoes` head term `best padel shoes`: position 26.3 (from 17.6).** SEO-CTR-006 is closed and this confirms why: the page's real head term is sliding down page 3 while its impression total stays inflated by conversational fragments.

### NYC block (SEO-STRIKE-003) — first read, one day of data

PR #11–#13 deployed 09-12; the crawl of `/new-york` at 14:14 UTC that day caught all three. Only 09-12 itself is inside this window, so nothing below is a verdict:

| `/new-york` query | 7d to 09-12 | prior 7d |
|---|---|---|
| `padel nyc` | 20 clicks / 273 impr / **7.3% CTR** / pos 4.3 | 11 / 235 / 4.7% / 4.5 |
| `padel courts nyc` | 6 / 53 / 11.3% / 2.3 | 7 / 47 / 14.9% / 2.5 |
| `padel court nyc` | 5 / 20 / 25.0% / 2.9 | 0 / 10 / 0% / 3.9 |
| `padel in new york` | 4 / 21 / 19.0% / 3.9 | 0 / 23 / 0% / 4.3 |

`padel nyc` CTR up at flat position is exactly the success signature named in the 09-12 addendum — but six of those seven days predate the block. Real read next run.

`rankings.csv` carries 70 rows (top 50 queries by clicks plus the tracked seeds and last week's rows): **5 gained, 48 flat, 16 new, 0 lost, 1 not ranked.** The 28-day windows overlap by three weeks, which is why the flat count is high; the 7-day tables above are the honest movement. Two seeds recorded last week as "not ranking" do rank: `padel court cost` (220 impr, pos 14.7, `/blog/padel-court-cost`) and `padel vs pickleball` (152 impr, pos 25.9). `padel racket review` is the only seed with no impressions.

---

## 3. Did last week's changes work

| ID | Status | Verdict |
|---|---|---|
| **SEO-INDEX-003** (PR #10, sitemap lastmod) | Deployed 09-07 | **Failed its test.** 0 of 5 pages crawled in 5 days; 2 regressed to "unknown". One organic win only (`/courts/patl-louisville`, 09-07). See below |
| **SEO-CONTENT-003/005** (5 review pages) | **INDEXED 09-12** via manual submission | 0–1 impressions through 09-12 (expected; indexed same day). First read next run |
| **SEO-STRIKE-003** (PR #11–#13, NYC block + prices) | Live 09-12, crawled 09-12 | One day of data; early CTR signal positive (§2) |
| **SEO-CONTENT-006** (next build, gated) | **Gate cleared → built as SEO-CONTENT-007** | PR #14, §4 |
| SEO-STRIKE-002 (beginners cluster, off-page) | Standing | `best padel racket for beginners` **19.6 → 17.3** (7d: 13.4), 318 impr. Moved with the 09-05 step, not with anything this loop did. Still page 2; still an off-page item |
| SEO-DECAY-001 (intermediate, do-not-touch) | Standing | **Recovered on its own: 18.0 → 6.4.** Order stays |
| SEO-DECAY-002 (`/padel-near/*`) | Closed 09-07 | 7d: 20 clicks (−4), pos 7.4 flat. Stable; stays closed |
| SEO-CTR-006 (`/blog/best-padel-shoes`) | Closed 09-07 | Head term slid to 26.3. Stays closed |
| SEO-CTR-002/007 (club titles) | Closed | Untouched |

### SEO-INDEX-003 — the honest verdict

The design was right and the measurement was right (91% → 1.5% of URLs on recent dates, verified on the built file). It did not move Google. Five days after deploy the five review pages were still unfetched and two had been dropped from the queue entirely. Submitted manually on 09-12, all five were crawled and indexed **within four minutes**. That is the whole answer: for a site at this authority, discovery through the sitemap is not the constraint, crawl scheduling is, and only the Request Indexing button jumps that queue. Every page the 09-12/09-13 submission waves touched is now indexed (16 of 16 inspected, including the Day-2 city pages crawled 09-13 and `texas/brownsville` + `texas/new-braunfels` crawled 09-14 01:41 UTC). `/south-carolina/daniel-island` had been indexed since 06-04 — one wasted request, no harm.

**What SEO-INDEX-003 still buys:** an honest sitemap keeps the crawl budget Google does spend from being wasted on 650 unchanged pages. That is worth keeping — which is exactly why today's regression had to be fixed today (§4).

### Confounders this run

The largest gains (`/new-york` +70, the racket cluster) are **not credited to this loop.** `/new-york` gained mostly before the NYC block shipped; the racket cluster stepped before anything deployed. The loop's own contribution this week is one new page (unmeasurable for 1–2 weeks) and one indexing fix that did not work. Say so.

---

## 4. This week's improvements

### SEO-CONTENT-007 — `/blog/best-padel-rackets-advanced` *(SHIPPED — PR #14, merged `aebff4e`, live)*

**Evidence.** The level ladder is the cluster that moved this week (intermediate 18.0 → 6.4, beginners and 2026 up with it). Its third rung did not exist. Demand check: Google autocomplete returns ten `best padel racket for advanced…` completions including two dated 2026 variants; GSC already shows the site earning impressions on `best padel rackets for advanced players 2026` at **position 8.2** from the pro-picks page, with no dedicated page. That is the same setup the teardrop page had on 07-31.

**What shipped.** Title `Best Padel Rackets for Advanced Players (2026): Tested Picks`. Five picks, all already reviewed on-site so every price, score and spec is copied rather than invented: NOX AT10 Genius 18K (#1, 7.3), Adidas Metalbone 3.4, Babolat Technical Viper, Wilson Bela V3, HEAD Extreme Pro. Ranked by control under pressure rather than raw power, so it does not duplicate the pro-picks page's angle. Article + FAQPage + ItemList schema. A "two more worth knowing" section links the Bullpadel Neuron and NOX Attack 12K reviews — two of the five pages indexed on 09-12 now have one more inbound link each.

**Inbound links (six sources, so it cannot orphan — orphaning was the confirmed blocker on PR #9):** intermediate (intro sentence + Keep Reading card), beginners (Keep Reading), pro-2026 (intro), diamond (Keep Reading), racket-shapes comparison table ("Advanced" cell retargeted from the flagship list to this page), blog index.

**Expected effect and how it gets checked:** impressions on the advanced cluster within 1–2 weeks of indexing; position ≤ 10 on `best padel racket for advanced players` inside four weeks would match what the intermediate page just did. Needs Request Indexing today (§4b) — that is now the proven path.

**Why not the alternatives.** `best budget padel racket` is the next-best candidate (autocomplete-confirmed; 8 + 7 + 4 impressions at positions 5.5–9.8 already, served by the beginners and 2026 pages) and is queued as the next build. `best hybrid padel racket` completes the shape set but shows 1 impression; skipped. `best padel shoes women` stays dead (SEO-CTR-006).

### SEO-INDEX-005 — sitemap `lastmod` regression, fixed *(SHIPPED — #15, merged `882468d`)*

**What happened.** PR #12 (`b4be06b`, 09-12) changed `src/lib/court-adapter.ts` to parse card prices but did not regenerate `page-dates.json`. Under SEO-INDEX-003's rules that lib was structural for club routes. When #14 regenerated the manifest, all 328 club pages moved to 09-12, and because state/city pages take the newest of their clubs' dates, the deployed sitemap read **634 of 723 URLs on 2026-09-12 (87.6%)** — worse than the 91% PR #10 started from.

**Why it is wrong.** The club detail template renders no price field; only state/city/NYC listing cards changed. 328 club `<lastmod>`s were false.

**The fix.** `court-adapter.ts` leaves the structural set (club routes and data already come from the per-record git diff of `padel-courts.ts`); `TEMPLATE_CONTENT_CHANGES.court = 2026-08-04` keeps the floor club pages already carried; `TEMPLATE_CONTENT_CHANGES.state/city = 2026-09-12` records the honest change where it happened.

| | URLs on the busiest single date |
|---|---|
| live after #14 | **634 / 723 (87.6%)** |
| after #15 | **232 / 724 (32.0%)** — all state/city listing pages whose cards did change |

Club pages: 298 at 08-04, 28 at 08-29, 2 newer. A tighter version — dating only the state/city pages that list a club with a parsed price — is possible but needs `sitemap.ts` to know which clubs priced; not worth it this run.

**Standing rule (add to the repo's habits):** any commit touching `src/lib/court-adapter.ts`, `src/lib/site-structure.ts`, `src/lib/metros.ts` or `src/data/padel-courts.ts` runs `npm run sitemap:dates` in the same PR and eyeballs the date distribution. PR #12 did not, and the regression stayed latent until the next regeneration. PR #10's falsification test only covered template `page.tsx` files; it should have covered the libs too.

### SEO-STRIKE-004 — the court-cost cluster is the next striking-distance target *(recorded, not acted)*

| Query | Impr | Pos | Page |
|---|---:|---:|---|
| `how much does it cost to build a padel court` | 312 | 12.2 | `/blog/padel-court-cost` |
| `cost to build a padel court` | 296 | 13.1 | `/blog/padel-court-cost` |
| `padel court cost` | 220 | 14.7 | `/blog/padel-court-cost` |

**~830 impressions at positions 12–15 on one page, 0 clicks.** That is the largest unworked striking-distance cluster on the site after the beginners cluster, and unlike beginners it is informational, so on-page can move it. Not acted this run (two PRs already); next run inspects the page's title, H1, snippet structure and internal links and prescribes the exact change. It also has a commercial neighbour: `/buy-a-padel-court` ranks 60.6 on `padel court cost` — that page should link the cost guide prominently, not compete with it.

### Not acted, on purpose

- **`padel court` (2,677 impr, 0.6% CTR, split across `/new-york` and `/california/los-angeles`)** — settled as not a page problem; standing instruction not to reopen.
- **Cannibalization: `padel atlanta`** (blog guide 150 impr vs `/georgia/atlanta` 99, both position 6.2, 6 clicks each) and **`padel austin`** (`/texas/austin` 82 impr @ 12.4 vs blog guide 30 @ 9.9). Mild, stable, no click cost visible. Watch.
- **`best padel racket 2026` / `best padel rackets 2026`** (176 + 113 impr, 7d position 10.6 / 13.5 on the pro page) — riding the 09-05 step; do not touch a page mid-climb.

---

## 4b. Indexing queue

Request Indexing is the proven path (§3): submitted pages indexed within minutes, unsubmitted ones sat for weeks. Quota is ~10–12 per day per Google account, shared across all properties.

**Wave 1 — today (1 request + sitemap):**

```
https://www.padelcourtsfinder.com/blog/best-padel-rackets-advanced
```

Verified **200**, canonical correct, present in the live sitemap. Brand new, six inbound links.

**Sitemap: RESUBMIT `https://www.padelcourtsfinder.com/sitemap.xml` once #15 has deployed.** Its `<lastmod>` values changed meaning twice today (once wrongly, once back); a resubmission tells Google to re-read it.

**Wave 2 — Day-3 leftovers, never earned an impression in 90 days (7 requests, any day):**

```
https://www.padelcourtsfinder.com/virginia/sterling
https://www.padelcourtsfinder.com/colorado/englewood
https://www.padelcourtsfinder.com/maryland/college-park
https://www.padelcourtsfinder.com/florida/coconut-creek
https://www.padelcourtsfinder.com/texas/midland
https://www.padelcourtsfinder.com/puerto-rico/bayamon
https://www.padelcourtsfinder.com/california/carson
```

All seven verified **200** on `https://www.`. Dropped from the Day-3 list because already handled: `texas/brownsville`, `texas/new-braunfels` (crawled 09-14 01:41 UTC), `south-carolina/daniel-island` (indexed since 06-04).

**Nothing else shipped that needs a request.** `/new-york` (NYC block + prices) was crawled 09-12 14:14 UTC after all three PRs merged. `/report/us-padel-2026-c7x4k9` is deliberately `noindex` and out of the sitemap — correct, leave it.

---

## 5. Blockers and data caveats

- **The 09-05 racket-cluster step is unattributed and that matters.** It is the biggest ranking event in the site's history and the loop cannot say whether it is a Google refresh, a backlink gain from the press push, or something else. Without Ahrefs there is no referring-domain view. If it reverses, the loop will not be able to say why either. The one cheap check available — Dito glancing at GSC → Links → Top linking sites for anything new since 08-25 — would settle the backlink half.
- **Phantom query: gone, as predicted, and it did not dent anything.** `how do i get started playing padel?` ran 3,132 impressions / 38 clicks in this window, all before 09-02; now 5–12 impressions/day. Next week's 28-day window loses most of it. Impressions are still a vanity metric on this property.
- **Query × page pull hit the 5,000-row cap.** Six seed rows initially lacked a ranking URL and were back-filled with filtered pulls. Next run: `--limit 25000` on the two-dimension pull (the API maximum).
- **Second PR this run.** The skill says one; §4 explains the exception. If Dito would rather the loop leave live regressions for him, say so and it will.
- **`/courts/*` remains the structural weak spot** (58,175 impressions, 0.55% CTR) even in a week it grew. Branded-navigational queries where the club's own site is #1; no on-page lever. Unchanged assessment, not repeated further.
- **Sitemap duplicates** (723 `<loc>` / 719 unique; three duplicated club names) — pre-existing, still a data decision, not an SEO fix.
- **Ahrefs retired** (standing). No volumes, no SERP features, no competitor or backlink data; `search_volume` and `serp_features` blank in `rankings.csv`.
- **Skill-file updates outstanding (fourth run):** name `gsc_query.py` as data source #1, replace `git stash` with `git worktree` (+ `cp -Rl node_modules`), raise the two-dimension pull limit, and add the page-dates regeneration rule from SEO-INDEX-005. Not committed because the run's write rule is reports-only on main. Dito: say the word and the next run edits the skill file in its PR.

---

## 6. Next run checklist (2026-09-21 or later)

1. **First read on `/blog/best-padel-rackets-advanced`:** indexed? (Dito submits today.) Impressions on `advanced` queries? Compare against the teardrop page's first-9-day 403 impressions and the intermediate page's trajectory.
2. **Sitemap sanity, every run from now on:** `curl` the live sitemap, count `<lastmod>` by date, and flag anything above ~35% on one date. Confirm #15 deployed (expect ~232 on 09-12, ~327 on 08-04).
3. **Did the 09-05 step hold?** Intermediate page position and the racket-cluster daily clicks. If it reversed, say so plainly and do not touch the page.
4. **NYC block, real read:** `padel nyc` CTR at flat position over a full week post-09-12. Success = CTR above the 4.7% pre-block baseline with position within 0.5 of 4.3–4.5.
5. **Five review pages, first read:** impressions per page after indexing 09-12. Which product queries they capture vs the roundups that were serving them.
6. **SEO-STRIKE-004** (`/blog/padel-court-cost`, ~830 impressions at 12–15): inspect and prescribe. Likely the on-page fix of the run.
7. **Build slot:** `/blog/best-budget-padel-rackets` is next (autocomplete-confirmed; existing impressions at 5.5–9.8 with no page). Only if item 1 shows the advanced page indexed and earning impressions — do not stack two unread pages.
8. **Do not touch:** intermediate (SEO-DECAY-001 — it just proved the point), club titles (SEO-CTR-002/007), `/padel-near/*` (SEO-DECAY-002), `/blog/best-padel-shoes` (SEO-CTR-006), `padel court` theory.
9. **`/blog/best-padel-bags`:** if position stays above 10 for a second week, open SEO-DECAY-003 and diagnose.
10. **Skill-file updates** (item in §5) — pending Dito's go-ahead to include them in a PR.

---

# Addendum — 2026-09-14: quota ran out; Day 4 list

Dito's Request Indexing quota was exhausted this morning before Wave 1. Re-inspected at
midday: the advanced page is still "URL is unknown to Google" and none of the seven Wave-2 city
pages were crawled, so everything carries over. Per Dito, the new page and the sitemap go to the
top of the next wave.

**Day 4 — for Dito, 2026-09-15 (8 requests + sitemap, in this order):**
```
https://www.padelcourtsfinder.com/blog/best-padel-rackets-advanced
https://www.padelcourtsfinder.com/virginia/sterling
https://www.padelcourtsfinder.com/colorado/englewood
https://www.padelcourtsfinder.com/maryland/college-park
https://www.padelcourtsfinder.com/florida/coconut-creek
https://www.padelcourtsfinder.com/texas/midland
https://www.padelcourtsfinder.com/puerto-rico/bayamon
https://www.padelcourtsfinder.com/california/carson
```
Then **Sitemaps → resubmit `https://www.padelcourtsfinder.com/sitemap.xml`** (does not count
against the URL quota; PR #15 deployed, live file now reads 327 on 08-04 / 232 on 09-12).

If quota runs short again, the first line is the only one that matters today; the seven city
pages have never earned an impression and can wait.
