# SEO Improver — weekly report, 2026-08-31

**PR this run: none.** See §4 for why holding is the recommendation, not an omission.

**Property:** `sc-domain:padelcourtsfinder.com`
**Measured window:** 2026-08-02 → 2026-08-29 (28 days) vs 2026-07-05 → 2026-08-01
**Prior run:** 2026-08-29 — **two days ago**
**Data source:** Google Search Console HTTP API via `~/.claude/scripts/gsc_query.py` (service account)

---

## 1. Executive summary

**This is a 2-day-gap run, not a week.** The scheduled loop fired 48 hours after the
2026-08-29 run. GSC has data through 2026-08-29, so the 28-day window has advanced by exactly
two days. **A genuine week-over-week read is not available and this report does not pretend to
one.** What it does instead is close out the open questions on the last run's checklist, three
of which now have answers.

Site totals, for the record: **1,867 clicks (+196), 145,178 impressions (+16,935), CTR 1.29%,
avg position 9.5.** Directionally the same picture as Saturday.

**Three findings, in order of how much they should change behaviour:**

1. **The sitemap's `<lastmod>` signal has collapsed again — 653 of 721 URLs (90.6%) now claim
   they changed on 2026-08-28 or 08-29.** This is a regression of SEO-INDEX-002, the fix that
   made new pages index without manual submission. Cause is identified exactly (§4,
   SEO-INDEX-003) and it is a code fix, not a content one.

2. **PR #7's three "modifier roundup" pages have their first read, and the pattern is weak.**
   Combined **62 impressions in 7 days** across three pages. The Jul-31 shape pages did **403
   and 247 impressions each in their first nine days** — roughly **10× more per page**. Rankings
   are fine (7.5 / 11.0 / 13.6); the demand simply is not there. **This retires the
   "build more specific-modifier roundups" instruction.**

3. **~11% of this window's impression gain is a measurement artifact.** A single query,
   `how do i get started playing padel?`, contributed **1,830 impressions at position 1.4 with
   1.3% CTR**, credited to `https://padelcourtsfinder.com/` — the **non-www host, which 301s and
   which GSC itself reports as "Page with redirect, not indexed."** It appeared on 2026-08-23 out
   of nowhere. This is not a ranking and not traffic; it must be excluded from future reads or it
   will make September's numbers lie (§5).

**The single most important action:** fix the sitemap `lastmod` propagation bug
(SEO-INDEX-003) — but only after 2026-09-05, when the falsifiable test in §4 has run. Nothing
else this run beats waiting six days for real data.

---

## 2. Movement since last run

**There is no meaningful movement to report.** Two days of new data cannot move a 28-day
average. `rankings.csv` carries 57 rows (top 50 queries by clicks plus tracked seeds) with
`previous_position` from the GSC previous-28-day period — that comparison is real, but it is
almost the same comparison Saturday's file made, not an independent second observation.

The one thing worth logging, because it is a *cohort* read rather than a weekly delta:

**The review-page cohort keeps compounding.** Eight `/blog/*-review` pages:

| | Prev 28d | This 28d |
|---|---:|---:|
| Clicks | 64 | **133** (+69) |
| Impressions | 3,731 | **7,769** (+4,038) |
| Avg position | 9.0 | **8.6** |

| Page | Clicks | Impressions | CTR | Pos |
|---|---:|---:|---:|---:|
| `nox-at10-genius-18k-review` | 49 | 3,570 | 1.4% | 8.8 |
| `wilson-blade-elite-v2-review` | 26 | 956 | 2.7% | 7.6 |
| `head-extreme-pro-review` | 17 | 716 | 2.4% | 8.7 |
| `nox-ml10-pro-cup-review` | 16 | 874 | 1.8% | 8.4 |
| `wilson-bela-v3-review` | 14 | 612 | 2.3% | 7.7 |
| `babolat-contact-review` | 7 | 547 | 1.3% | 9.0 |
| `adidas-metalbone-hrd-review` | 2 | 288 | 0.7% | 9.5 |
| `babolat-technical-viper-review` | 2 | 206 | 1.0% | 12.5 |

Corroborated in the `searchAppearance` dimension: **REVIEW_SNIPPET 86 clicks (+43) on 4,406
impressions (+2,038)**, PRODUCT_SNIPPETS 36 clicks (+21) on 2,651 (+1,565). The review pages are
earning rich results, which is why they land at position ~8 on arrival.

**One loss worth naming, with the diagnosis attached.** `padel courts near me` — the site's #3
query — went **63 → 36 clicks**. It is not a ranking loss: position *improved* 7.1 → 6.8 and
impressions only fell 1,452 → 1,262. **CTR collapsed 4.34% → 2.85%.** The query is served by
dozens of pages (homepage at pos 11.7, then a long tail of state/city pages at pos 4–8), which
is the same dispersed shape as the settled `padel court` question. A CTR halving at flat rank
across many pages is a SERP-layout change, not something a title fixes. **Logged, no action.**

---

## 3. Did last week's changes work

| ID | Status | Verdict |
|---|---|---|
| **SEO-CONTENT-002** (PR #7, 3 modifier roundups) | Merged Aug 19, indexed | **First read in — pattern is weak.** |
| **SEO-CONTENT-003** (PR #8, 3 review pages) | Merged Aug 29 (`51c9666`) | **Not indexed yet — on schedule, see below** |
| **SEO-INDEX-002** (sitemap lastmod) | Merged, **now regressed** | See SEO-INDEX-003, §4 |
| SEO-CTR-002 / SEO-CTR-007 (club titles) | Retired | Verdict holds on settled data |
| SEO-DECAY-001 (intermediate hub) | Closed, untouched | Unchanged; ruling holds |
| SEO-DECAY-002 (`/padel-near/*`) | Watch | **Cannot be resolved this run** |
| SEO-CTR-006 (`/blog/best-padel-shoes`) | Deferred to 2026-09-08 | Not acted on; case now weaker |

### SEO-CONTENT-002 — the modifier-roundup pattern does not carry enough demand

Last run these had zero data because they were crawled two days after the window closed. They
now have seven days (2026-08-23 → 08-29):

| Page | Impressions (7d) | Clicks | Pos |
|---|---:|---:|---:|
| `/blog/best-padel-rackets-tennis-elbow` | 22 | 1 | 7.5 |
| `/blog/best-padel-rackets-women` | 18 | 1 | 11.0 |
| `/blog/best-padel-rackets-tennis-players` | 22 | 1 | 13.6 |
| **Total** | **62** | **3** | |

The calibration set from §3 of the last report was the Jul-31 shape pages at **403 and 247
impressions in their first nine days**. Normalised per page per day, these are earning **~3
impressions/day** against the shape pages' **27–45**. That is an order of magnitude, not noise.

**This is a demand problem, not a quality problem.** `tennis-elbow` is already at position 7.5 —
the page ranks; almost nobody searches it. **Verdict: stop building specific-modifier roundups.**
The standing instruction in the scheduled-task file ("extend the same specific-modifier pattern,
candidate `/blog/best-padel-shoes-women`") should be treated as superseded by this measurement.

**This weakens SEO-CTR-006 but does not kill it** — that one splits a modifier off a page with
5,426 proven impressions, which is a different bet from inventing a new modifier query. It stays
deferred to 2026-09-08 and should be re-argued then, not now.

### SEO-CONTENT-003 — PR #8's three pages are not indexed, and that is expected at 2 days

```
/blog/nox-at10-genius-attack-review   NOT INDEXED — "URL is unknown to Google"
/blog/head-extreme-evo-review         NOT INDEXED — "URL is unknown to Google"
/blog/bullpadel-neuron-review         NOT INDEXED — "URL is unknown to Google"
```

All three return **200**, are **in the live sitemap**, and carry `lastmod 2026-08-29`. PR #7's
pages took **9–10 days** from merge to crawl (merged Aug 19, crawled Aug 28). These merged Aug 29,
so the comparable crawl date is **~Sept 7**. **Nothing is broken; it is simply too early.** The
last report's rule was "submit if still unindexed by 2026-09-05" — that date has not arrived,
but they are listed in §4b anyway because submission is cheap and cuts a week off the read.

### SEO-CTR-002 / SEO-CTR-007 — retirement confirmed on settled data

Re-pulled `/courts/*` for the *exact* window the last report judged (2026-07-31 → 08-27), now
that GSC has finished backfilling it: **328 clicks / 52,731 impressions / 0.62% CTR** (the report
said 319 / 50,739 / 0.63%). The baseline to beat was 0.76%. **The verdict is unchanged: the club-title
rewrite produced no lift.** Current window is 312 clicks / 53,051 impressions / **0.59% CTR** —
impressions flat, CTR still drifting down. Correctly retired; leave these pages alone.

### SEO-DECAY-002 — cannot be resolved this run, and should not be forced

The checklist asked for a second independent observation of the `/padel-near/*` decline. **Two
days of new data cannot provide one.** Current window: **70 clicks (−39) on 2,237 impressions
(−1,370), position 8.3 (improved 0.8).** Saturday's window read 63 clicks on 2,250 impressions.
Those are the same 26 days observed twice, not two data points. **The consolidation decision
stays open until 2026-09-05.** Forcing it now on overlapping windows would be exactly the kind of
double-counting that produced the false "30 pages dropped to zero" scare last run.

---

## 4. This week's improvements

### SEO-INDEX-003 — sitemap `<lastmod>` has lost its signal again *(diagnosed; fix deliberately deferred to 2026-09-05)*

**Evidence.** Live `sitemap.xml`, 721 URLs:

| lastmod | URLs |
|---|---:|
| 2026-08-28 | 454 |
| 2026-08-29 | 199 |
| *(everything else, 10 distinct dates)* | 68 |

**653 of 721 URLs — 90.6% — claim they changed within the last three days.**

**Cause, exactly.** `scripts/generate-page-dates.mjs` dates the four data-driven route families
from `newest(<template page.tsx>, <structure lib>, src/data/padel-courts.ts)`. The Aug 28–29
design wave (`e2a5467` video heroes sitewide, `0322a14`/`dad4e3b` city comparison table and photo
grid) touched every one of those template files, so all four template dates rolled forward
together:

```json
"__templates__": { "court": "2026-08-28", "state": "2026-08-28",
                   "city": "2026-08-29", "padelNear": "2026-08-28" },
"__fallback__":  "2026-08-29"
```

Those four keys cover ~645 of the 721 URLs. A **presentational** change — adding a hero video
component — has told Google that the entire club, state, city and metro directory was rewritten
this week. `src/app/sitemap.ts`'s own header comment describes this precise failure mode as the
reason the script exists:

> "all ~714 URLs shared one identical `<lastmod>` … Google's documented response is to discount
> lastmod for the property entirely."

**Why I am not shipping the fix today.** The obvious suspicion is that this is why PR #8's three
pages are still unknown to Google. **That suspicion is not yet testable** — PR #7's pages took
9–10 days to be crawled under a *healthy* lastmod, and PR #8's pages are only 2 days old. If I
fix the propagation now, I destroy the only clean test available and will never know whether
lastmod was the cause. There is also a real design question in the fix (a `page.tsx` edit is
*usually* presentational in this repo's history, but not always — adding an FAQ section to the
court template genuinely is a content change), and it deserves a decision rather than a guess.

**The falsifiable test, to run 2026-09-05:**
- If PR #8's three pages are crawled/indexed by ~Sept 7 on the normal 9–10 day lag → lastmod is
  still working well enough; fix SEO-INDEX-003 as hygiene, low priority.
- If they are still "unknown to Google" past Sept 8 while PR #7's pages were crawled in 9 →
  the flat lastmod is implicated, and the fix becomes the site's top priority, because
  organic indexation is this site's binding growth constraint.

**Proposed fix when it is time** (recorded now so next run does not re-derive it): split the
template inputs into *structural* signals (`site-structure.ts`, `court-adapter.ts`, `metros.ts`,
`padel-courts.ts` — these determine whether a route exists and what it says) and *presentational*
ones (the template `page.tsx`), and date routes from the structural set only, with an explicit
override flag for the rare template change that really does alter content. Better still, date
court pages from their own record's last change in `padel-courts.ts` rather than from the file as
a whole. Either way, regenerate and commit `page-dates.json` in the same PR.

### SEO-CONTENT-004 — revised: build review pages, do not build modifier roundups *(recommendation, nothing built)*

The last report's candidate list stands, with one deletion and one reordering forced by §3:

1. **Wilson Optix V1** (`$109.00`, ASIN `B0DX2M3JYY`) — still the top candidate. Target the
   long-tail phrase `wilson optix v1 padel racket review`; the bare brand term is contaminated
   by golf and volleyball.
2. **NOX Pro Cup USPA Edition** — promoted. Its sibling `nox-ml10-pro-cup-review` is at 16 clicks
   / 874 impressions / pos 8.4, and NOX is the site's strongest brand cluster by a distance
   (`nox-at10-genius-18k-review` alone is 3,570 impressions).
3. **Dunlop Pro Padel** — only major brand with zero coverage.
4. ~~**HEAD Sprint Pro 4.0** (shoes)~~ — **demoted, not deleted.** It was justified by
   `/blog/best-padel-shoes`'s 5,426 impressions, but that is the same "parent page is big, so the
   child will be too" reasoning that SEO-CONTENT-002 just falsified. Hold until SEO-CTR-006 is
   decided on 2026-09-08.
5. **Adidas Metalbone 3.4** — leave. The existing `adidas-metalbone-hrd-review` earns 2 clicks on
   288 impressions, the weakest page in the cohort. No evidence of demand.

**Build 2–3 of these next run — but only once PR #8's three are indexed.** Stacking a fourth
unread content cohort on top of two already-unread ones is precisely the confounding that made
last run's SEO-CONTENT-002 read impossible.

### Why no PR this run

Three reasons, stated plainly so this does not read as a skipped step:

1. **Two days of new data supports no new decision.** Every candidate change would be justified
   by numbers that are 48 hours older than Saturday's.
2. **PR #8 is unread and unindexed.** A third content PR in three days makes all three cohorts
   mutually unattributable.
3. **The one high-value code fix available (SEO-INDEX-003) would destroy its own test.** Shipping
   it today means never learning whether lastmod was the cause.

`npm run build` was not re-run — no code was changed, and `main` is deployed and serving 200s on
every URL spot-checked in this report.

---

## 4b. Indexing queue

**Nothing new shipped since the last run.** The only commits since 2026-08-29 07:40 are the ones
the last report already covered. One new page exists that was not in that report:

- `/photo-credits` — returns 200, **not in the sitemap**, and correctly so. Attribution utility
  page, no search intent. **Do not submit.**

**Wave 1 — submit if quota is free (optional, ~3 requests):**

```
https://www.padelcourtsfinder.com/blog/nox-at10-genius-attack-review
https://www.padelcourtsfinder.com/blog/head-extreme-evo-review
https://www.padelcourtsfinder.com/blog/bullpadel-neuron-review
```

All three verified **200** on `https://www.` and present in the live sitemap. All three currently
report **"URL is unknown to Google."**

> **Caveat that matters:** submitting these **forfeits the SEO-INDEX-003 test in §4.** If they are
> submitted, we learn nothing about whether the flat `lastmod` is suppressing organic discovery.
> **Recommendation: do not submit, and re-inspect on 2026-09-05.** They are listed here only so
> the choice is explicit rather than accidental. Three racket reviews are worth roughly 20–50
> clicks/month at maturity; the indexing mechanism is worth the whole site.

**Wave 2 backlog** (unchanged, ~10/day whenever quota is free, all previously 200-verified):
`padel-x-miami`, `arizona/tempe`, `casas-padel-club-aventura`, `glassbox-padel-club`,
`padel-mke`, `patl-louisville`, `new-rochelle-indoor-sports`, `open-padel-club-by-lasaigues`.

**Sitemap:** no resubmission needed — nothing new shipped this week, and
`https://www.padelcourtsfinder.com/sitemap.xml` already contains all 721 URLs including the three
above.

---

## 5. Blockers and data caveats

- **This run had 2 days of new data, not 7.** The loop is scheduled weekly but fired 48 hours
  after the 2026-08-29 run. Every "delta" in this report against last week's *report* is
  essentially the same measurement twice. Deltas against the GSC previous-28-day period are real.
  **The next run should be 2026-09-05 or later to restore a genuine weekly cadence.**

- **NEW — GSC backfills roughly 4% of clicks after the fact, and this loop has been reading that
  as decline.** Re-pulling the last report's exact window (2026-07-31 → 08-27) today gives
  **1,856 clicks / 143,142 impressions**; that report, pulled on 08-29, recorded
  **1,777 / 137,485**. That is **+79 clicks (+4.4%)** and **+5,657 impressions (+4.1%)** of late
  data on a window that was already closed. Because every run compares a *fresh* current window
  (tail days incomplete) against a *settled* prior period, **this loop has a systematic
  ~4% downward bias that manufactures small declines.** Ratio metrics like CTR are mostly immune;
  absolute click counts are not. Treat any reported decline under ~5% as noise until re-pulled.
  This does not change any verdict in this report — SEO-CTR-002 and the `/padel-near/` decline
  were both re-checked on settled data and survive.

- **NEW — a phantom position-1 impression source is inflating site totals.** The query
  `how do i get started playing padel?` contributed **1,830 impressions / 23 clicks / position
  1.4 / 1.3% CTR** this window, all credited to `https://padelcourtsfinder.com/` — the **non-www
  host**. That host returns a clean **301 to www** and GSC's URL Inspection reports it as
  **"Page with redirect — not indexed."** It appeared on 2026-08-23 and ramped fast
  (49 → 122 → 124 → 534 → 469 → 249 → 284 impressions/day). A non-indexed redirect URL cannot
  hold position 1.4 in ordinary web results, and 1.3% CTR at that position is ~20× too low, so
  this is almost certainly an AI-surface / panel citation being reported as a web position.
  **It is 10.8% of this window's entire +16,935 impression gain and it is not traffic.**
  No on-page fix exists or is warranted. **Exclude it from impression trend reads; do not let it
  be reported as growth.** The same host also collects a small tail of `king of padel san antonio`
  branded impressions — same artifact, negligible volume.

- **Ahrefs remains retired** (standing instruction, not re-checked). No search volumes, no SERP
  features, no competitor positions — `search_volume` and `serp_features` are blank in
  `rankings.csv` by necessity.

- **The high-impression / low-CTR list is now almost entirely branded-navigational** — `ultra
  padel` (608 imp, 0.33%), `padel club` (538, 0.19%), `padel haus atlanta` (524, 0.19%), `padel
  up culver city` (520, 0.38%), `padel 956` (514, 0.19%). On every one of these the club's own
  website is the #1 result. This is the evidence base for SEO-CTR-007's retirement, and it means
  **the "high impressions, low CTR" opportunity class is effectively exhausted on this site.**
  Do not re-open it without a genuinely unbranded candidate.

- **`padel 956` fell from position 2.6 to 7.4** on 514 impressions. Branded query for a single
  club; the club's own site or a Google Business Profile likely reclaimed the slot. Nothing to
  fix on our side, but it is most of why `/courts/padel-956` lost clicks.

- **`/california/los-angeles` was investigated as a cannibalization candidate and cleared.**
  3,473 impressions at position 11.6 / 1.27% CTR versus `/new-york`'s 7,113 at 6.8 / 3.37% looked
  like a split with `/blog/best-padel-clubs-los-angeles`. It is not: the two pages carry distinct
  titles, and the blog page holds only 414 impressions against the city page's 3,473. The real
  difference is inventory — LA has **5 clubs**, New York has **26**. That is a data-coverage
  problem, not an SEO one. **No SEO-CANNIBAL ID opened.**

- **Report files for the 2026-08-29 run were left uncommitted** (on Dito's mid-run instruction
  that day, because another agent was working in the repo). They are committed alongside this
  run's files so the history is complete. **Reports only — no site code was touched.**

---

## 6. Next run checklist (2026-09-05 or later — not sooner)

1. **Run SEO-INDEX-003's test first.** Inspect the three PR #8 review pages. Crawled by ~Sept 7 →
   lastmod is fine, downgrade the fix to hygiene. Still "unknown to Google" past Sept 8 → the flat
   `lastmod` is implicated and fixing it becomes the site's top priority. **Do not submit these
   three URLs before then** unless Dito decides the three pages' traffic outweighs the test.
2. **First real read on PR #8's three review pages** (if crawled) — compare their first-nine-days
   impressions against the shape pages' 403/247 and the modifier roundups' ~20 each.
3. **SEO-DECAY-002 (`/padel-near/*`)** — now resolvable with a non-overlapping window. Two genuine
   consecutive declines at flat position turns this into a consolidation decision.
4. **Re-pull this run's window (08-02 → 08-29) before trusting any decline**, per the backfill
   caveat in §5.
5. **Exclude `how do i get started playing padel?` / the non-www host from impression totals.**
   Check whether it is still ramping — if it reaches 5,000+ impressions/month it will dominate the
   site's headline numbers while contributing almost nothing.
6. **Build 2–3 review pages** (Wilson Optix V1, NOX Pro Cup USPA, Dunlop Pro Padel) — **only if**
   PR #8's three are indexed. Do not build modifier roundups.
7. **SEO-CTR-006 unlocks 2026-09-08.** Re-argue it against SEO-CONTENT-002's negative result
   before building `/blog/best-padel-shoes-women`.
8. **Do not touch** `/blog/best-padel-rackets-intermediate` (SEO-DECAY-001) or the club titles
   (SEO-CTR-007). Both closed.
9. **Skill-file updates still outstanding from last run:** name `gsc_query.py` as data source #1,
   and replace `git stash` with `git worktree` in the build-verification step.
