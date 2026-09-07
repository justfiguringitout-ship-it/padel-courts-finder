# SEO Improver — weekly report, 2026-09-07

**PR this run: [#10 — SEO-INDEX-003](https://github.com/justfiguringitout-ship-it/padel-courts-finder/pull/10) — merged as `75f8d10`.**

**Property:** `sc-domain:padelcourtsfinder.com`
**Measured window:** 2026-08-09 → 2026-09-05 (28 days) vs 2026-07-12 → 2026-08-08
**Prior run:** 2026-08-31 (+ 09-01 addendum) — **7 days ago, a genuine week-over-week read**
**Data source:** Google Search Console HTTP API via `~/.claude/scripts/gsc_query.py` (service account)

---

## 1. Executive summary

Site totals: **1,899 clicks (+92, +5.1%), 153,691 impressions (+23,536, +18.1%), CTR 1.24%
(−0.15pp), avg position 9.4 (flat).** Clean 7-day read: **518 clicks (+30) on 44,034 impressions
(+5,891), position 9.5 (improved 0.8).** Nothing is broken; growth continues but impressions are
outrunning clicks by 3.5×, and §5 explains why that gap is mostly not real demand.

**The one thing that changed the picture.** All five of the newest review pages moved from
*"URL is unknown to Google"* to **"Discovered - currently not indexed."** That is a state change,
and it splits the indexing problem cleanly in two:

- **Discovery is fixed.** PR #9's internal links (SEO-INDEX-004, Sep 1) did their job — Google
  now knows every one of these URLs exists.
- **Crawling is not happening.** Google has them queued and is declining to fetch them.

That is the exact signature of a crawl-budget problem, and this site was handing Google a
sitemap in which **659 of 723 URLs (91.1%) claimed they had changed within the last week**,
across just two dates. Google was being told to re-crawl 659 unchanged pages while five new
money pages waited.

**So the escalation rule from the last report fired, and SEO-INDEX-003 shipped this run**
(PR #10, merged). Measured on the built sitemap, not predicted:

| | URLs dated inside the last 7 days |
|---|---|
| before | **659 of 723 (91.1%)** |
| after | **11 of 723 (1.5%)** |

The five uncrawled review pages keep their true 08-29 / 09-01 dates and are now among the only
11 recent URLs in the file instead of being lost among 659.

**The single most important action:** nothing to do — it shipped. Next week's read is the whole
point: **if those five pages get crawled without manual submission, the site has working organic
indexing for every future page.** If they are still uncrawled by 2026-09-14, both automated
levers have been exhausted and the answer becomes manual GSC submission plus off-page work,
because at that point the constraint is site authority, not mechanics.

**One instruction retired this run:** SEO-CTR-006 (`/blog/best-padel-shoes`) unlocks tomorrow and
should not be built. §4 shows its 5,565-impression base is conversational-fragment traffic, not
search demand — the page's actual head term sits at **position 29.2**.

---

## 2. Movement since last run

**Net: up, modestly, and led entirely by the blog.**

| Cohort | Clicks (28d) | Impressions (28d) | Avg pos |
|---|---|---|---|
| `/blog/*` | **700 (+138)** | 49,107 (+13,591) | 9.8 (−0.3) |
| `/courts/*` | **308 (−104)** | 55,575 (+2,057) | 9.7 (+0.8 worse) |
| `/padel-near/*` | 72 (−46) | 2,072 (−1,720) | 7.9 (−1.2 better) |
| `*-review` | 135 (+44) | 9,209 (+4,515) | 8.6 (−0.2) |

**This is the structural story of the site right now: editorial compounds, the directory decays.**
`/courts/*` carries 36% of all impressions and produces 16% of clicks (CTR 0.55%). `/blog/*`
carries 32% of impressions and produces 37% of clicks. Every gain this week came from content.

**Biggest page gains**

| Page | Clicks | Δ | Impr | Pos |
|---|---:|---:|---:|---:|
| `/new-york` | 264 | **+67** | 7,364 | 6.4 |
| `/blog/best-teardrop-padel-rackets` | 82 | **+62** | 1,282 | 7.8 |
| `/blog/nox-at10-genius-18k-review` | 59 | **+36** | 4,716 | 8.7 |
| `/california/los-angeles` | 55 | **+26** | 3,928 | 11.4 |
| `/blog/best-round-padel-rackets` | 36 | +36 | 897 | 8.1 |
| `/blog/wilson-blade-elite-v2-review` | 26 | +26 | 1,081 | 7.6 |

**The Jul-31 shape pages are still the best thing on this site.** `best teardrop padel racket` is
now the #9 query overall at **15 clicks / 12.8% CTR / position 6.1**, and the teardrop page nearly
tripled its clicks in a week. Round is following at position 7.0–8.1. That pattern — a narrow
head term the site can actually rank for — remains the only content bet with a track record here.

**Biggest losses, with diagnoses attached**

- **Homepage: 44 clicks (−22) on 3,031 impressions, position 14.8.** Not a ranking loss; position
  *improved* 1.2. The homepage competes on `padel near me` / `padel courts near me` against dozens
  of the site's own state and city pages that rank better, and those pages absorbed the clicks
  (`/new-york` +67, `/california/los-angeles` +26). This is internal reallocation, not decline.
- **`/blog/head-extreme-pro-review`: 10 clicks (−21), 606 impressions (−311), position 8.9.** The
  only genuinely weak page in the review cohort. Position held; impressions fell. Watch, no action.
- **`/courts/*` −104 clicks at worsening position.** The club directory is the site's real soft
  spot, and it has now declined for three consecutive readings. It is not a title problem —
  SEO-CTR-002/007 tested that and were correctly retired. See §5.

**Beware the compare table's "DROPPED OUT" rows.** GSC returns only the top N per period, so any
page outside the limit in either period reports as zero. Every apparent zero in this run was
re-checked against an unlimited pull before being reported; none were real.

`rankings.csv` carries 60 rows (top 50 queries by clicks plus the tracked seeds):
**21 gained, 18 flat, 10 new, 4 lost, 1 dropped, 6 seeds not ranking.**

---

## 3. Did last week's changes work

| ID | Status | Verdict |
|---|---|---|
| **SEO-INDEX-004** (PR #9, internal links) | Merged Sep 1 | **Worked — discovery fixed.** See below |
| **SEO-CONTENT-005** (PR #9, 2 review pages) | Merged Sep 1, live | Not crawled yet; 6 days old |
| **SEO-CONTENT-003** (PR #8, 3 review pages) | Merged Aug 29, live | Not crawled yet; 9 days old |
| **SEO-INDEX-003** (sitemap lastmod) | **Fixed this run — PR #10** | §4 |
| **SEO-CONTENT-002** (PR #7, modifier roundups) | Closed | Verdict holds; pattern retired |
| SEO-DECAY-002 (`/padel-near/*`) | **Resolved — closing** | Decline stopped. See below |
| SEO-CTR-006 (`/blog/best-padel-shoes`) | **Killing it** | §4 — premise was false |
| SEO-DECAY-001, SEO-CTR-002/007 | Closed | Untouched, as instructed |

### SEO-INDEX-004 — the internal links worked, and that is what makes the diagnosis clean

Every one of the five pages moved state:

```
                                    2026-08-31            2026-09-07
nox-at10-genius-attack-review   unknown to Google  →  Discovered, not indexed
head-extreme-evo-review         unknown to Google  →  Discovered, not indexed
bullpadel-neuron-review         unknown to Google  →  Discovered, not indexed
wilson-optix-v1-review                    (new)    →  Discovered, not indexed
adidas-metalbone-3-4-review               (new)    →  Discovered, not indexed
```

The 09-01 addendum was right to overrule §4 of the 08-31 report and ship the links rather than
protect an experiment. **Discovery was the blocker and it is now cleared.** The remaining blocker
is crawl scheduling, which is a different mechanism with a different fix — and that fix is
SEO-INDEX-003, shipped this run.

Note what this rules out: the pages are not blocked by robots, not canonicalised away, not
duplicate-suppressed. All five return 200 and sit in the sitemap. Google simply has not spent a
crawl on them.

### SEO-DECAY-002 — resolved, and the answer is "no consolidation"

The last two runs could not settle this because their windows overlapped. A non-overlapping
7-day comparison is now available:

| `/padel-near/*` | 7d to 08-29 | 7d to 09-05 |
|---|---:|---:|
| Clicks | 24 | **24 (+0)** |
| Impressions | 527 | **571 (+44)** |
| Position | 8.2 | **7.3 (better)** |

**The decline stopped.** The 28-day window still shows −46 clicks because it straddles the
step-down; week-on-week the cohort is flat with improving position. This was a one-time
re-ranking, not ongoing decay. **Consolidating these pages would now be destroying stable
traffic to fix a problem that ended. Closing SEO-DECAY-002; do not re-open without a fresh
two-week decline.**

### The confounder note this run actually needs

`/new-york` (+67) and `/california/los-angeles` (+26) are the two largest gains, and **neither is
attributable to this loop.** Both are directory pages that gained as the homepage lost on the same
queries. The badge program and club enrichment also ship in parallel. **No ranking gain this week
is being credited to a recommendation from this loop** — the loop's own work this period was
indexing mechanics, which by design produces no ranking movement inside a week.

---

## 4. This week's improvements

### SEO-INDEX-003 — sitemap `lastmod` fixed *(SHIPPED — PR #10, merged `75f8d10`)*

**Evidence that triggered it.** Live sitemap before the fix, 723 URLs:

| lastmod | URLs |
|---|---:|
| 2026-08-29 | 417 |
| 2026-09-01 | 242 |
| *(everything else, 11 dates)* | 64 |

**659 of 723 — 91.1% — on two dates inside the last ten days.** Worse than the 90.6% the last
report measured, because the 09-01 pricing commit re-dated the state and city directory again.

**Cause, exactly.** `scripts/generate-page-dates.mjs` dated the four data-driven route families
from `newest(<template page.tsx>, <structure lib>, padel-courts.ts)`. The Aug 28–29 video-hero
wave and the Sep 1 pricing commit each touched every template `page.tsx`, so all ~645
club/state/city/metro URLs rolled forward together. A hero video is not a content change.

**The fix, in two parts.**

1. **Structural vs presentational.** Template dates now come only from the libs that decide which
   routes exist and what data they carry (`court-adapter.ts`, `site-structure.ts`, `metros.ts`).
   The template's own `page.tsx` is no longer read at all. A `TEMPLATE_CONTENT_CHANGES` map keeps
   the honest case expressible: a template edit that really did change rendered content on every
   route gets recorded deliberately, with a date.
2. **Per-club dates.** The script walks `padel-courts.ts` through git history and diffs it record
   by record, so a club's `lastmod` is the commit in which *that club's* record last changed — not
   the last time anyone touched the file. State, city and metro pages are club listings, so
   `sitemap.ts` dates each from the newest of the clubs it actually lists.

**Measured result** (built sitemap, not predicted):

| | before | after |
|---|---:|---:|
| URLs dated in the last 7 days | 659 / 723 (91.1%) | **11 / 723 (1.5%)** |
| Distinct dates site-wide | 13 | 16 |
| Club pages carrying their own date | 0 | **328** |

**Falsification test run before committing:** a simulated presentational commit touching all four
template `page.tsx` files produced a **byte-identical** `page-dates.json`. The regression cannot
recur from a styling change — which matters, because this is the second time this mechanism has
been broken by a design wave.

`npm run build` passes. Run in an **isolated `git worktree`**; the main working tree was never
touched, since another agent works in this repo.

**Expected effect and how it gets checked:** this is crawl prioritisation, not ranking. The read
is next week — see §6.

### SEO-CTR-006 — killed. The premise was false *(no build; instruction retired)*

This has been deferred twice, unlocks tomorrow, and should now be closed rather than argued
again. The case for it was `/blog/best-padel-shoes`'s large impression base (now 5,565, +2,612).
Here is what those impressions actually are:

| Query | Impr | Pos |
|---|---:|---:|
| `best padel shoes` | 263 | **29.2** |
| `best padel shoes 2026` | 111 | 14.5 |
| `best padel shoes for women 2026` | 21 | 9.6 |
| `best padel shoes 2026 men` | 16 | 7.6 |
| `lightest padel shoes` | 7 | 4.9 |
| `2 or 3 times a week` | 1 | 32.0 |
| `please give me examples` | 1 | 2.0 |
| `any other options?` | 1 | 4.0 |
| `alternatives` | 1 | 2.0 |
| `empfehlungen` | 1 | 4.0 |

**Named padel-shoe queries account for roughly 450 of 5,565 impressions.** The remainder is a
long tail of conversational fragments — follow-up turns in an AI/chat surface, not searches.
Meanwhile the page's actual head term, `best padel shoes`, sits at **position 29.2**.

That inverts the diagnosis. This was filed as high-impressions/low-CTR — a title problem. It is
not: it is a page ranking on **page 3** for its own head term, whose headline impression count is
inflated by traffic no title rewrite can convert. **Splitting `/blog/best-padel-shoes-women` off
it would inherit the same illusion.** Closing SEO-CTR-006. HEAD Sprint Pro 4.0 stays deleted.

### SEO-STRIKE-002 — the beginners cluster is real, and there is no on-page fix for it *(no action, deliberately)*

The site's clearest striking-distance target by demand:

| Query | Impr | Pos |
|---|---:|---:|
| `best padel racket for beginners` | 225 | 19.7 |
| `best padel rackets for beginners` | 113 | 18.8 |
| `best beginner padel racket` | 118 | 18.6 |
| `beste padel racket beginner` | 50 | 27.8 |

**456 impressions parked at the bottom of page 2**, on `/blog/best-padel-rackets-beginners`
(42 clicks, 2,145 impressions, position 13.0). Moving that cluster to page 1 is worth more than
anything else measurable on this site.

**I am not prescribing a change, because the obvious ones are already done.** The title is
already exact-match (`Best Padel Rackets for Beginners (2026) — Top 5 Picks`), the meta is
specific, and the page has **56 inbound internal link sources — the most-linked page on the
site.** On-page and internal-link levers are exhausted. A competitive commercial head term stuck
at position 19 with those signals in place is an off-page problem.

**This is the honest handoff to the badge/outreach program, not an SEO-loop task.** Recording it
with an ID so it stops being re-derived every run.

### SEO-CONTENT-006 — next build slot: keep making shape pages, not brand pages *(gated)*

The evidence is now three-way and consistent:

| Pattern | Example | First-9-day impressions/page | Current position |
|---|---|---:|---|
| **Shape roundup** | `best-teardrop-padel-rackets` | 403 | **6.1** |
| Review page | `nox-at10-genius-18k-review` | ~250 | 8.7 |
| Modifier roundup | `best-padel-rackets-tennis-elbow` | ~20 | 7.5 |

Shape pages win, review pages work, modifier roundups are dead. **But no new page should ship
until the five outstanding ones are crawled** — five unread pages is already more confounding
than this loop can attribute, and a sixth buys nothing. Gate the next build on §6 item 1.

---

## 4b. Indexing queue

**Wave 1 — the decision that matters (5 requests):**

```
https://www.padelcourtsfinder.com/blog/nox-at10-genius-attack-review
https://www.padelcourtsfinder.com/blog/head-extreme-evo-review
https://www.padelcourtsfinder.com/blog/bullpadel-neuron-review
https://www.padelcourtsfinder.com/blog/wilson-optix-v1-review
https://www.padelcourtsfinder.com/blog/adidas-metalbone-3-4-review
```

All five verified **200** on `https://www.`, present in the sitemap, all reporting
**"Discovered - currently not indexed."**

> **Recommendation: hold one more week — until 2026-09-14 — then submit all five.**
> This is a narrower ask than last week's hold and it is the last one. PR #10 shipped hours ago
> and has not been crawled yet; submitting now would confound the only test of whether the
> sitemap fix restored organic crawling. That test is worth one week because it generalises to
> every future page. **If they are still uncrawled on 2026-09-14, submit them and stop
> waiting** — at that point both automated levers have been tried and the answer is manual
> submission plus off-page authority work. Five racket reviews are worth roughly 30–70
> clicks/month at maturity; a working indexing mechanism is worth the whole content strategy.

**Wave 2 — substantially modified, indexed but stale (submit any day, ~2 requests):**

```
https://www.padelcourtsfinder.com/how-to-play
https://www.padelcourtsfinder.com/buy-a-padel-court
```

Both **INDEXED** but last crawled **2026-08-04** and **2026-08-01** respectively, and both
changed materially since: `how-to-play` gained a plain-English definition written for the SERP
snippet (`9855a9c`, Sep 5) and `buy-a-padel-court` gained the court-anatomy animation
(`135794e`/`6ad10db`/`bd23fe6`). Google is serving month-old copies. No conflict with the Wave 1
test — these are already-indexed pages.

**Wave 3 backlog** (unchanged, whenever quota is free, all previously 200-verified):
`padel-x-miami`, `arizona/tempe`, `casas-padel-club-aventura`, `glassbox-padel-club`,
`padel-mke`, `patl-louisville`, `new-rochelle-indoor-sports`, `open-padel-club-by-lasaigues`.

**Sitemap: RESUBMIT `https://www.padelcourtsfinder.com/sitemap.xml` once PR #10 has deployed.**
This is the one sitemap resubmission that is genuinely worth a request this quarter — every
`<lastmod>` in the file changed meaning, and a resubmission is how Google is told to re-read it.

Quota reminder: GSC allows roughly 10–12 Request Indexing actions per day per **Google account**,
shared across all properties.

---

## 5. Blockers and data caveats

- **Impressions are outrunning clicks 3.5-to-1, and most of the gap is not search demand.**
  +18.1% impressions against +5.1% clicks, CTR down 0.15pp. Two named sources account for much of
  it, both conversational/AI surfaces rather than web results: the `/blog/best-padel-shoes`
  fragment tail (~5,100 impressions of the page's 5,565, §4) and the non-www homepage artifact
  below. **Treat site-level impression growth as a vanity metric on this property from now on.**
  Clicks and per-page position are the honest measures.

- **The phantom position-1 query has burned out — and it will manufacture a fake decline next
  week.** `how do i get started playing padel?`, credited to the non-www host, contributed
  **3,114 impressions / 38 clicks / position 1.9** to this window. Its daily trace:

  ```
  08-23   51 | 08-26  544 | 08-27  472 | 09-01  364 | 09-02  108 | 09-03  19 | 09-05  9
  ```

  It peaked around Aug 26 and is now essentially gone. **Next week's 28-day window will lose
  roughly 3,000 impressions from this alone. That is not a decline and must not be reported as
  one.** Last week's report predicted this would dominate September; it did the opposite and died.

- **Backfill caveat from last week: refined, and it did not apply this run.** Both windows the
  08-31 report judged were re-pulled today and came back **identical to the digit**
  (07-31→08-27: 1,856/143,142; 08-02→08-29: 1,867/145,178). GSC settles within about two days of
  window close. The ~4% downward bias is real only for windows pulled ≤1 day after they close.
  **This run's window closed 09-05 and was pulled 09-07, so it is settled** — no discount applies
  to anything in this report.

- **`/courts/*` is the site's real structural weakness and this loop has no lever left for it.**
  308 clicks (−104) on 55,575 impressions (+2,057), CTR 0.55%, position worsening. It is 36% of
  all impressions and 16% of clicks. Titles were tested and retired (SEO-CTR-002/007). The
  high-impression club queries are branded-navigational — `ultra padel` (585 impr, 0.7% CTR),
  `padel club` (516, 0.6%), `ultra padel miami` (425, 0.9%) — and on every one of them the club's
  own website is #1. **Nobody chooses a directory listing over the club's own site.** The only
  plausible lever is inventory and data depth (LA has 5 clubs listed against New York's 26), which
  is a data-coverage decision for Dito, not an SEO fix. Flagging rather than prescribing.

- **The sitemap contains 723 `<loc>` entries but only 719 unique URLs.** Three club names are
  duplicated in `padel-courts.ts` (`Matt's Pickle and Padel`, `Padel California`, `Padel Country
  Club`) and slugs derive from the name, so they collide into the same URL. Pre-existing data
  issue, noted in PR #10 but deliberately not fixed there — it needs a decision about which
  record wins, which is data work rather than an SEO change.

- **Ahrefs remains retired** (standing instruction, not re-checked). No search volumes, no SERP
  features, no competitor positions — `search_volume` and `serp_features` are blank in
  `rankings.csv` by necessity, and the competitive layer is absent from this report entirely.

- **Six tracked seed keywords do not rank at all**: `best padel racket`, `padel court cost`,
  `what is padel`, `padel vs pickleball`, `padel racket review`, `indoor padel courts`. These are
  head terms; their absence is expected at this domain authority and is not new.

---

## 6. Next run checklist (2026-09-14 or later)

1. **The one test that matters: are the five review pages crawled?** Re-inspect all five.
   - **Crawled/indexed** → SEO-INDEX-003 worked, organic indexing is restored for every future
     page, and the content pipeline can resume at full speed. This is the good outcome and it
     generalises.
   - **Still "Discovered - currently not indexed"** → **submit all five immediately** (§4b Wave 1)
     and stop optimising indexing mechanics. Both automated levers will have been tried and
     failed, which means the constraint is domain authority, and the correct response is off-page
     work, not another sitemap fix.
2. **Resubmit `sitemap.xml`** if it was not done this week — PR #10 changed the meaning of every
   `<lastmod>` in the file.
3. **Submit Wave 2** (`/how-to-play`, `/buy-a-padel-court`) — indexed but serving month-old copies.
4. **Expect a ~3,000-impression drop** from the dead `how do i get started playing padel?` query.
   Subtract it before reading any impression trend; it is not a decline.
5. **Build slot, gated on item 1:** if the five are crawled, build **one shape-pattern roundup**
   (the only pattern with a proven position-6 outcome). Do not build modifier roundups; do not
   build `/blog/best-padel-shoes-women`.
6. **Do not touch**: `/blog/best-padel-rackets-intermediate` (SEO-DECAY-001), club titles
   (SEO-CTR-002/007), `/padel-near/*` (SEO-DECAY-002, closed this run — decline stopped),
   `/blog/best-padel-shoes` (SEO-CTR-006, closed this run — premise was false).
7. **SEO-STRIKE-002 is an off-page item, not a loop item.** 456 impressions at position ~19 on the
   beginners cluster, with the title already exact-match and 56 inbound internal links. Route it
   to the badge/outreach program; stop re-deriving it here.
8. **Skill-file updates still outstanding** (third run running): name `gsc_query.py` as data source
   #1 (Chrome is listed as #2 but the API path is what every recent run has actually used), and
   replace `git stash` with `git worktree` in the build step. Also worth recording: a worktree
   needs `cp -Rl` of `node_modules`, because Turbopack rejects a symlink pointing outside the
   project root.

---

# Addendum — 2026-09-07: Dito's decision

- **Sitemap resubmitted** in Search Console by Dito, same day PR #10 deployed.
- **Wave 1 hold accepted.** The five review URLs are NOT submitted. Next run (2026-09-14 or later)
  inspects them first: crawled → SEO-INDEX-003 confirmed; still "Discovered - currently not
  indexed" → submit all five immediately and stop treating indexing as a mechanics problem.
