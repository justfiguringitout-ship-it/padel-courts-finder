# SEO money plan — affiliate/commission growth (started 2026-07-31)

Source: GSC 28-day export analysis (2026-07-02 → 2026-07-29). Full analysis in the
session that created this file; the plan below is self-contained.

**Resume instructions (for any future session):** work top to bottom. Each item's
Status line is updated and committed as work lands. Verify with `npm run build`
before every commit. Push to main deploys prod. Editorial rules: only rackets/gear
already reviewed on the site may be recommended; verified in-stock Amazon ASINs
only (tag padel02-20); TrackedLink for all affiliate links (forces rel=sponsored).

## Key data points driving the plan
- Intermediate hub = #3 page sitewide (49 clicks/28d, 3,083 imp) BUT money queries
  rank pos 20-33 ("best padel rackets for intermediate players" ~20, "...for
  intermediate" 25-33).
- Beginners hub: 2,683 imp, money queries pos 19-28.
- Reviews = best CTR content (Head Extreme Pro 25 clicks, 3.4% CTR). Review
  snippets 37 clicks, Product snippets 15 (schema works).
- Shapes cluster greenfield: shapes-explained pos 24.5/491 imp/0 clicks; queries
  "geometric/teardrop/diamond/round head shape padel rackets" all pos 32-49;
  buyer queries "best teardrop/round padel racket 2026" got clicks at pos ~7 with
  NO dedicated page.
- Shoes hub: 2,151 imp, core query pos 16.9; "padel shoes with reinforced toes"
  177 imp pos 5.24 (FAQ/snippet target); zero individual shoe reviews exist.
- "2026" queries rank 10-20 spots better than year-less → keep year in titles,
  show updated dates.
- Balls pos 26-31 (low ceiling, quick fix). Court-cost/B2B cluster pos 24-52
  (strategic, slow climb).

## P1 — Rescue beginners + intermediate hubs
Status: DONE (2026-07-31). Both hubs: exact-phrase H2 ("The 5 Best Padel Rackets
for Beginners/Intermediate Players in 2026"), new FAQs targeting money queries
verbatim (+ "most forgiving padel racket" on beginners, JSON-LD + visible),
dateModified + visible date -> July 31, exact-phrase anchor from 2026 hub.
Cross-links from control/2026 hubs already existed. NOTE: both pages already had
early comparison tables + "how we picked" — deeper restructure not needed.
Files: src/app/blog/best-padel-rackets-beginners/page.tsx,
       src/app/blog/best-padel-rackets-intermediate/page.tsx
- [ ] Read both pages, map current structure
- [ ] Exact-phrase H2s matching money queries ("Best Padel Rackets for
      Intermediate Players (2026)", beginner equivalents)
- [ ] Add comparison table at top (racket / weight / shape / price bracket / best for)
- [ ] Deepen content: upgrade-path section on intermediate ("coming from a
      beginner racket"); "how we picked" on both
- [ ] FAQ schema targeting exact query phrasings (incl. "most forgiving padel
      racket" on beginners)
- [ ] Internal links: from control hub (top performer), from best-padel-rackets-2026, cross-links between the pair
- [ ] Visible "Updated July 2026" date both pages
- [ ] Build, verify, commit

## P2 — CTR/title pass on all reviews + hubs
Status: DONE (2026-07-31). Titles were already year+verdict pattern (prior work) —
left alone. Upgraded all 8 review META DESCRIPTIONS to verdict-forward with
rating + price + tested ("NOX AT10 tested: 7.3/10. ~$272. ..."). Review/Product
schema confirmed present (Search appearance shows snippets earning clicks). Hub
titles fine; shoes hub title deferred to P4 overhaul.
Files: all 8 review pages + racket hubs (control/power/2026) metadata
- [ ] Titles: year + verdict + price bracket pattern, e.g. "NOX AT10 Genius 18K
      Review (2026): Tested — Who It's For"
- [ ] Meta descriptions: verdict-forward, include price
- [ ] Verified Review/Product schema on all 8 reviews (ratings + image present)
- [ ] Build, verify, commit

## P3 — Racket shapes cluster
Status: DONE (2026-07-31). shapes-explained: exact-phrase H2s ("Round/Teardrop/
Diamond head shape padel rackets: ..."), freshness -> Jul 31, links to 3 new
pages. NEW pages live: /blog/best-round-padel-rackets (ML10 + Contact),
/best-teardrop-padel-rackets (AT10 + Blade Elite V2), /best-diamond-padel-rackets
(Viper, Bela V3, Extreme Pro, Metalbone — ranked). Each: Article+FAQPage+ItemList
(Product w/ image+offers+review) schema, TrackedLink affiliate buttons (sponsored
rel verified), links to full reviews, cross-linked Keep Reading. Registered in
blog index + sitemap. Build 711->714 pages.
Files: src/app/blog/padel-racket-shapes-explained/page.tsx (fix: pos 24.5) + 3 NEW pages
- [ ] Strengthen shapes-explained: exact-phrase sections ("Round head shape padel
      rackets", teardrop, diamond), comparison table, FAQ schema
- [ ] NEW: /blog/best-round-padel-rackets (control angle; only reviewed rackets)
- [ ] NEW: /blog/best-teardrop-padel-rackets
- [ ] NEW: /blog/best-diamond-padel-rackets (power angle)
- [ ] Interlink all 4 + from racket hubs; add to blog index (auto via BLOG_POSTS)
- [ ] Build, verify, commit

## P4 — Shoes cluster
Status: IN PROGRESS. Part 1 DONE (2026-07-31): hub upgraded — 3 new FAQs (JSON-LD
+ visible) targeting verbatim queries "where can I find padel shoes with
reinforced toes" (177 imp pos 5.24), "best padel shoes for men 2026", "lightest
shoes for competitive padel"; freshness -> Jul 31. Part 2 PENDING: verification
agent out for 5-6 shoe ASINs (ASICS/Babolat Jet Premura/Adidas/K-Swiss/Wilson/
NOX); when results land, write individual shoe reviews (Product+Review schema,
TrackedLink) + add picks-by-feature sections to hub. If agent results were lost
to a restart, relaunch: verify shoes on amazon.com, never invent ASINs.
Files: src/app/blog/best-padel-shoes/page.tsx + new review pages
- [ ] Hub: add sections for "reinforced toe" (177 imp query — target snippet),
      lightweight/competitive, men's 2026, beginners
- [ ] Research agents: verify 4-5 padel shoes with in-stock Amazon ASINs
      (Asics Gel-Padel/Lima, Babolat Jet Premura, Adidas, Bullpadel, K-Swiss)
- [ ] Write individual shoe reviews (Product+Review schema, TrackedLink)
- [ ] Interlink hub <-> reviews; add to blog index
- [ ] Build, verify, commit

## P5 — One new racket review/week (ongoing)
Status: NOT STARTED
- [ ] Next candidates: Bullpadel (Vertex/Hack), Siux, "most forgiving racket"
      roundup angle. Verify ASIN in stock first.

## P6 — Balls rewrite + year-round gifts page
Status: DONE (2026-07-31). Balls: exact-phrase H2 ("The Best Padel Balls in 2026"),
verbatim FAQ, freshness. NEW /blog/padel-gifts live: for-her/for-him/under-$50/
splurge sections, 11 products ALL reused from already-verified seasonal gift +
accessories pages (no new ASINs), FAQ schema targets "padel gifts for her" (51
imp pos 9.8) + "for women", TrackedLink sponsored rels verified, registered in
blog index + sitemap. Build 714->715 pages.

## P7 — "Buy a padel court" B2B page
Status: PAGE DONE (2026-07-31). /buy-a-padel-court live: price table (reuses
verified figures from padel-court-cost article only), five pre-buy checks, quote
form (Formspree xaqlweaw, formType=court-buyer-inquiry — captures LEADS for
future manufacturer lead-gen), FAQ schema targeting buy/for-sale/cost queries,
linked from cost article + sitemap. Build 715->716.
- [ ] REMAINING (Dito): pitch court manufacturers on lead-gen/sponsorship once
      inquiries start arriving; watch Formspree for court-buyer-inquiry entries.

## Parallel tracks (not this plan, don't drop)
- Badge outreach wave 1: BADGE_OUTREACH_WAVE1.csv ready, 42 sendable (Dito sends)
- Weekly SEO loop: scheduled Mondays (padel-seo-improver-weekly), baseline run done
- Ahrefs GSC sync pending (connected 7/31, retest); DataForSEO optional later
