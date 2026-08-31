# SEO Improver — weekly report, 2026-08-29

**PR this run:** [#8 — three racket review pages](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/8) — **merged as `51c9666`, deployed, all three live and in the sitemap.**

> **Read this first.** PR #8 was opened, merged and deployed *before* Dito's mid-run
> instruction to stop pushing (another agent was working in the repo today). Nothing has been
> committed or pushed since. This report file and `rankings.csv` are written to disk but are
> **deliberately uncommitted** — the skill normally commits them to `main`; that step was
> skipped on instruction. Revert path for #8 if it is unwanted: `git revert -m 1 51c9666`.

**Property:** `sc-domain:padelcourtsfinder.com`
**Measured window:** 2026-07-31 → 2026-08-27 (28 days) vs 2026-07-03 → 2026-07-30
**Prior run:** 2026-08-18
**Data source:** Google Search Console **HTTP API** via `~/.claude/scripts/gsc_query.py`
(service account) — see §5, this is a change from the Chrome path.

---

## 1. Executive summary

**Site totals: 1,777 clicks (+138), 137,485 impressions (+11,709), CTR 1.29%, avg position 9.5.**
Up, but only just, and the average hides two opposite stories.

**The winner is now clearly the individual racket *review* pages, not the shape roundups.**
Eight `/blog/*-review` pages went **58 → 126 clicks (+117%)** on **3,432 → 7,144 impressions
(+108%)**, and every one of them ranks between **position 7.6 and 9.0**:

| Page | Clicks (prev → now) | Impressions | CTR | Pos |
|---|---|---:|---:|---:|
| `/blog/nox-at10-genius-18k-review` | 13 → **48** | 3,098 | 1.55% | 8.8 |
| `/blog/wilson-blade-elite-v2-review` | 5 → **23** | 909 | 2.53% | 7.6 |
| `/blog/nox-ml10-pro-cup-review` | 1 → **16** | 853 | 1.88% | 8.2 |
| `/blog/wilson-bela-v3-review` | 3 → **16** | 581 | 2.75% | 7.7 |
| `/blog/babolat-contact-review` | 4 → 7 | 531 | 1.32% | 9.0 |

This is a *better* pattern than the shape pages, for a structural reason: a `"<model> review"`
query has one obvious right answer and almost no informational competition, so the site lands
at position ~8 immediately rather than fighting for it. There are only eight of these pages and
they are the fastest-growing thing on the site.

**The single most important action:** keep building review pages. PR #8 added three
(NOX AT10 Genius Attack 12K, HEAD Extreme Evo, Bullpadel Neuron); five more validated
candidates are listed in §4 as SEO-CONTENT-004.

**The loss is club pages.** `/courts/*` held its impressions almost exactly (51,354 → 50,739)
but lost clicks (389 → **319**, −18%), so CTR fell **0.76% → 0.63%**. That 0.76% is precisely
the baseline the last two reports set for judging the PR #4 club-title rewrite. The fair-read
date was 2026-08-25 and it has passed. **Verdict: the title rewrite did not work.** See §3.

---

## 2. Movement since last run

`rankings.csv` carries 52 rows: the top 50 queries by clicks plus tracked seeds that fell below
that cut. `previous_position` is the GSC previous-28-day period — a like-for-like measured
comparison, not a carry-over from last week's file. Status thresholds: ±1.0 position.

**Real gains**

| Query | Prev pos | Now | Clicks | Note |
|---|---:|---:|---:|---|
| `padel nyc` | 7.7 | **5.5** | 45 (+19) | biggest single query gain on the site |
| `cascadia padel` | 8.4 | **3.8** | 11 (+8) | PR #5 (Kirkland un-404) still compounding |
| `padel in nyc` | 8.2 | **4.7** | 6 | — |
| `where to play padel in nyc` | 6.0 | **3.5** | 7 | — |
| `best padel rackets for beginners` | 27.4 | **18.6** | 5 | — |
| `padel atlanta` | 8.8 | **7.3** | 11 | — |

`/new-york` is the engine behind most of that: **166 → 228 clicks**, position 8.4 → 7.1, on
flat impressions. That is a pure ranking gain on the site's single biggest page.

**Real losses**

| Query / page | Prev | Now | Note |
|---|---:|---:|---|
| `/blog/best-padel-rackets-intermediate` | 47 clicks | **24** | impressions 2,977 → 1,504, pos 11.4 → 13.1 |
| `padel fort lauderdale` | pos 4.8 | 6.3 | still 21 clicks at 13.2% CTR — high-value, watch it |
| `best padel shoes` | pos 16.6 | **22.5** | but the *page* gained; see below |
| `/courts/padel-956` | 18 clicks | 6 | pos 4.3 → 7.8 |
| `/courts/eko-padel-and-pickle` | 19 clicks | 6 | pos flat 8.0 → 7.8; CTR 1.06% → 0.41% |

**`/blog/best-padel-shoes` is the odd one.** The head query slid (16.6 → 22.5) but the page
gained: **31 → 48 clicks**, impressions **2,248 → 5,092 (+2,844)**, position 10.1 → 8.6. It is
now the site's second-largest impression pool at a **0.94% CTR**. This strengthens SEO-CTR-006,
which is still correctly deferred to 2026-09-08.

**`/padel-near/*` is down and it is not a technical fault.** 78 pages both periods,
**106 → 61 clicks**, impressions **3,433 → 2,163**. Spot-checked pages return 200, sit in the
sitemap, and GSC URL Inspection reports them **indexed**; positions held (Pittsburgh 7.4,
Kansas City 5.8). Impressions fell at unchanged rank — that is a demand/serving shift, not
something on the page. **No action recommended this week**; flagged as SEO-DECAY-002 to watch.

> *Correction to my own working note:* an intermediate read of this data suggested ~30
> `/padel-near/` pages had dropped to **zero** impressions. That was an artifact of the
> 400-row page export truncating zero-click rows, not a real collapse. The numbers above come
> from a filtered pull with no truncation.

---

## 3. Did last week's changes work

| ID | Status | Verdict |
|---|---|---|
| **SEO-CONTENT-002** (PR #7, 3 racket pages) | Merged Aug 19, indexed | **No read yet — see below** |
| **SEO-CTR-002** (club titles, PR #4) | Applied | **Did not work.** See below |
| **SEO-INDEX-002** (PR #6, sitemap lastmod) | Merged | **Working** |
| SEO-DECAY-001 (intermediate hub) | Closed, untouched | Still declining; ruling holds — see below |
| SEO-CTR-006 (`/blog/best-padel-shoes`) | Deferred to 2026-09-08 | Case got stronger, correctly not acted on |

### SEO-CONTENT-002 — PR #7's three pages have **no data yet**, and last week's read was premature

The 2026-08-29 addendum called these "indexed with zero manual submissions" and treated that as
the headline result. Indexation is confirmed, but **all three have zero impressions and zero
clicks** through 2026-08-26 (the last day with data). The reason is timing, not quality:

```
best-padel-rackets-tennis-elbow    INDEXED   last crawled 2026-08-28T10:11Z
best-padel-rackets-women           INDEXED   last crawled 2026-08-28T10:11Z
best-padel-rackets-tennis-players  INDEXED   last crawled 2026-08-28T10:15Z
```

They were crawled **two days after the measurement window closed**. For calibration, the Jul-31
shape pages had **403 and 247 impressions in their first nine days**. These have had none
because they were not in the serving index during the window. **First honest read: next run.**
Nothing about SEO-CONTENT-002 is proven or disproven yet.

### SEO-CTR-002 — the club-title rewrite did not lift CTR

Fair-read date was 2026-08-25 and has passed. Measured across all `/courts/*` pages:

| | Prior 28d | This 28d |
|---|---:|---:|
| Pages with data | 286 | 279 |
| Impressions | 51,354 | **50,739** |
| Clicks | 389 | **319** |
| CTR | **0.76%** | **0.63%** |

Impressions are flat, so this is not a ranking story — the same number of people saw the same
listings and fewer clicked. CTR is now *below* the baseline the rewrite was meant to beat.

**Honest caveat before anyone rips the titles out:** a large share of club-page impressions come
from *branded navigational* queries — `ultra padel` (598 imp, 0.33% CTR), `padel up culver city`
(520, 0.38%), `padel 956` (507, 0.20%), `padel haus atlanta` (486, 0.21%). On those queries the
club's own website is the #1 result and takes the click; no title we write changes that, and a
shift in the branded/unbranded mix would move the aggregate CTR on its own. So the correct
reading is **"the rewrite did not deliver a measurable lift,"** not "the rewrite caused the
drop." Either way, this line of work has now had two runs and produced nothing. **Recommend
retiring club-title CTR work and moving the effort to review pages** (§4).

### SEO-INDEX-002 — working

Three new pages from PR #8 were live, in the sitemap, and returning 200 within minutes of the
merge, and PR #7's pages reached "Submitted and indexed" with no manual Request Indexing at all.
The lastmod fix is doing its job.

### SEO-DECAY-001 — intermediate hub, ruling holds

`/blog/best-padel-rackets-intermediate` fell again: **47 → 24 clicks**, impressions
2,977 → 1,504, position 11.4 → 13.1. It was not touched. The August ruling was "leave it alone,
it earns ~24 clicks/month from long tail it ranks well for" — that is now exactly what it earns,
so the ruling is still correct rather than newly wrong. **Do not touch it.** If it halves again
next run, the question changes from "fix the page" to "consolidate it into a review or shape
page," which is a different decision and should not be pre-empted.

---

## 4. This week's improvements

### SEO-CONTENT-003 — three racket review pages **(shipped, [PR #8](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/8), merged `51c9666`)**

Selection rule: **specific model + "review"**, chosen from rackets the site already recommends
in its roundups but has never given a page. Every candidate checked against Google autocomplete
before building.

| New page | Target query | Evidence for picking it |
|---|---|---|
| `/blog/nox-at10-genius-attack-review` | `nox at10 genius attack 18k review` | Those queries **already** land on the Genius **18K** review at pos 7.5–8.2 with **0% CTR across 33 impressions** — they are different rackets, so the page leads with an explicit Attack vs Genius 18K comparison table. |
| `/blog/head-extreme-evo-review` | `head extreme evo padel racket review` | 10 padel-specific autocomplete variants, two containing "review". Site already ranks **8.7** for `head extreme pro 2026 review`, the sibling model. |
| `/blog/bullpadel-neuron-review` | `bullpadel neuron review` | 10 padel-specific autocomplete variants; effectively no current presence. Greenfield. |

**Deliberately not built: Adidas Adipower.** Its autocomplete is dominated by golf and
weightlifting shoes — the query is contaminated and not ours to win.

Implementation: existing review template exactly (Product + FAQPage JSON-LD, same sections and
classes). All specs, scores, prices and ASINs lifted from `best-padel-rackets-power`,
`-beginners` and `-control` — **nothing invented**. 18 Amazon links, **18 tagged `padel02-20`**,
verified in the built HTML. `npm run build` passes; all three prerender; all three live and in
the sitemap at time of writing.

### SEO-CONTENT-004 — the next five review pages *(recommended, NOT built)*

Same pattern, ranked by confidence. Every model below already appears in the site's own roundup
data, so specs and ASINs exist and nothing needs inventing.

1. **Wilson Optix V1** (`$109.00`, ASIN `B0DX2M3JYY`, 7.7/10) — highest-scoring beginner racket
   on the site with no page. Autocomplete carries `wilson optix v1 padel racket`; the brand term
   alone is contaminated by golf/volleyball, so **target the long-tail phrase, not `wilson optix`**.
2. **Adidas Metalbone 3.4** — the site references both the HRD+ 3.3 and the 3.4; only the HRD+
   has a review, and it is one of the weakest performers (2 clicks). Lower confidence — verify
   demand before building.
3. **HEAD Sprint Pro 4.0** (mens/womens) — shoes, not rackets, and `/blog/best-padel-shoes` holds
   **5,092 impressions**. A model-level shoe review is the untested half of the review pattern.
4. **NOX Pro Cup USPA Edition** — sibling of `nox-ml10-pro-cup-review`, which went 1 → 16 clicks.
5. **Dunlop Pro Padel** — only major brand with zero coverage.

Build 2–3 per run, not all five. Validate each against autocomplete first; drop any whose
autocomplete is dominated by another product category.

### SEO-CTR-007 — retire club-title CTR work *(recommendation, no code)*

Two runs, no lift, and §3 shows the impression base is heavily branded-navigational where the
club's own site wins by default. **Stop spending build slots here.** The `/courts/*` pages are
still worth 319 clicks/month and should be left alone, not rewritten again.

### SEO-DECAY-002 — `/padel-near/*` watch item *(no action)*

106 → 61 clicks on 78 pages, positions held, pages healthy and indexed. Impressions fell at
unchanged rank. One data point is not a trend; **re-measure next run** before doing anything. If
it falls again with positions still flat, the question is whether these thin metro pages are
being consolidated away by Google — at which point the answer is consolidation into
`/[state]/[city]`, not more of them.

### SEO-CTR-006 — `/blog/best-padel-shoes` *(unchanged, still deferred to 2026-09-08)*

Impressions more than doubled to **5,092** at a **0.94% CTR** — now the largest wasted
impression pool on the site. The recommendation is unchanged: split out
`/blog/best-padel-shoes-women` rather than retitling the page that currently earns 48 clicks.
**Do not act before 2026-09-08**, so it does not confound PR #7's read.

---

## 4b. Indexing queue

**Nothing needs manual submission this week.** SEO-INDEX-002 has removed the need.

Shipped since the last run (all verified **200** on `https://www.` and present in the live
sitemap at time of writing):

```
https://www.padelcourtsfinder.com/blog/nox-at10-genius-attack-review
https://www.padelcourtsfinder.com/blog/head-extreme-evo-review
https://www.padelcourtsfinder.com/blog/bullpadel-neuron-review
```

PR #7's three pages reached "Submitted and indexed" with **zero** Request Indexing actions, so
the same is expected here. **Recommendation: submit nothing, and check indexation next run.** If
these three are still unindexed by 2026-09-05, submit them then — otherwise the quota is better
spent on the never-crawled club backlog.

**Sitemap:** `https://www.padelcourtsfinder.com/sitemap.xml` already contains all three
(confirmed live). Resubmission optional, not required.

**Wave 3 backlog** (unchanged, ~10/day whenever quota is free, all previously 200-verified):
`padel-x-miami`, `arizona/tempe`, then `casas-padel-club-aventura`, `glassbox-padel-club`,
`padel-mke`, `patl-louisville`, `new-rochelle-indoor-sports`, `open-padel-club-by-lasaigues`.

---

## 5. Blockers and data caveats

- **Data source changed, for the better.** This run used the **GSC HTTP API** via
  `~/.claude/scripts/gsc_query.py` (service account), not Chrome. It is fully headless, exact,
  and supports `inspect` for indexation status — which is what made the §3 finding on PR #7
  possible. The skill file still names Chrome as source #2; **it should be updated to name the
  API script first.** Chrome remains necessary only for Request Indexing, which has no API.
- **Property is `sc-domain:padelcourtsfinder.com`**, not the `https://www.` URL-prefix property
  the previous reports used. The domain property is a superset (it includes the non-www host,
  which shows 11 clicks this window). Totals therefore differ slightly from last week's file by
  scope as well as by window; treat the two as not perfectly comparable.
- **Ahrefs remains retired.** Not re-checked, per the standing instruction. No search volumes,
  no SERP features, no competitor positions — `search_volume` and `serp_features` are blank in
  `rankings.csv` by necessity. Google autocomplete was again the demand-shape substitute.
- **Window overlap is zero this run** (Jul 31–Aug 27 vs Jul 3–Jul 30), unlike last run's 20-day
  overlap. Movements are more trustworthy than usual, but the previous period includes the
  pre-launch baseline for the Jul-31 shape pages, which is why they read as `new`.
- **~70–80% of impressions on the big pages are anonymized queries.** Named-query CTR on
  `/blog/nox-at10-genius-18k-review` is 3–13%; its overall 1.55% is dragged by the hidden long
  tail. Do not read low aggregate CTR on a well-ranking page as a title problem without checking
  the named-query split first.
- **A second agent was editing this repo during the run.** `e2a5467 "Design wave: video heroes
  sitewide…"` landed on `main` mid-run and conflicted with PR #8 (resolved by merging `main`
  in and regenerating `page-dates.json`).
- **I disrupted that agent's working tree and restored it.** To test whether a build failure was
  pre-existing, I ran `git stash -u`; the subsequent `git stash pop` failed partway, leaving the
  other agent's uncommitted work (including ~146 new lines in `src/data/padel-courts.ts`) in the
  stash and a half-applied tree on disk. It was fully recovered via
  `git restore --source=stash@{0} -- src`, verified against the stash's own diffstat, and the
  stash then dropped. **Nothing was lost**, but this loop should never `git stash` in a shared
  repo again — the isolated `git worktree` used later in the run is the correct tool and is what
  the skill file should mandate.
- **A real bug was visible in that WIP:** `<HeroVideo />` was used at
  `src/app/[state]/[city]/page.tsx:232` with no import, which broke `npm run build` on every city
  page. It was fixed by the other agent's own `e2a5467` before merge, so prod was never affected.

---

## 6. Next run checklist (2026-09-05)

1. **First real read on PR #7's three pages.** They had zero impressions this window purely
   because they were crawled on 8/28. Compare their first-nine-days impressions against the
   Jul-31 shape pages' 403 and 247.
2. **First read on PR #8's three review pages** — same test, one week later.
3. **Are PR #8's pages indexed without submission?** If not by 2026-09-05, submit them.
4. **`/padel-near/*` (SEO-DECAY-002)** — re-measure. Two consecutive declines at flat positions
   changes this from a watch item into a consolidation decision.
5. **Do not touch `/blog/best-padel-rackets-intermediate`** (SEO-DECAY-001) or the club titles
   (SEO-CTR-007). Both are closed.
6. **SEO-CTR-006 unlocks 2026-09-08** — not before.
7. **Update the skill file**: name `gsc_query.py` as data source #1, and replace `git stash` with
   `git worktree` in the build-verification step.
