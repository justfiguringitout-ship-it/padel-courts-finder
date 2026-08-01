# SEO money plan — affiliate/commission growth (started 2026-07-31)

**STATE AS OF 2026-07-31 (end of build session):** P1, P2, P3, P6, P7 DONE and
deployed; P4 mostly done (only optional shoe reviews remain); P5 is the open
weekly cadence. Site grew 711 -> 716 pages. Next session: start P5, then check
Monday's seo-improver report for ranking movement on everything shipped here.

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
Status: MOSTLY DONE (2026-07-31). Hub: 3 verbatim-query FAQs + freshness (P4a) +
"More 2026 Picks, by What You Need" section with 5 VERIFIED padel-specific shoes
(NOX AT10 PRO B0GRWHSVGW ~$135 all-rounder/reinforced toe+heel; Wilson Rush Pro 5
Padel B0GVKRS59Q ~$170 premium; Wilson Hurakn Lite B0FC8SDHK5 ~$110 lightweight;
ASICS Gel-Challenger 15 Padel B0GZRD83KR ~$130 durability; ASICS Gel-Dedicate 8
Padel B0GLV3J2BH ~$150 comfort) — ItemList Product schema extended, sponsored
rels. REJECTED: Babolat Jet Premura (no active Amazon buy-box), K-Swiss Express
Light 3 (thin marketplace stock), adidas Gamecourt (not padel-specific).
- [ ] OPTIONAL LATER: individual shoe review pages (model-level queries); start
      with NOX AT10 PRO + Wilson Rush Pro 5.
Files: src/app/blog/best-padel-shoes/page.tsx + new review pages
- [ ] Hub: add sections for "reinforced toe" (177 imp query — target snippet),
      lightweight/competitive, men's 2026, beginners
- [ ] Research agents: verify 4-5 padel shoes with in-stock Amazon ASINs
      (Asics Gel-Padel/Lima, Babolat Jet Premura, Adidas, Bullpadel, K-Swiss)
- [ ] Write individual shoe reviews (Product+Review schema, TrackedLink)
- [ ] Interlink hub <-> reviews; add to blog index
- [ ] Build, verify, commit

## P5 — One new racket review/week (ongoing cadence — the only open workstream)
Status: NOT STARTED (deliberately — weekly cadence item, start next session)
- [ ] Next candidates: Bullpadel (Vertex/Hack), Siux, "most forgiving racket"
      roundup angle. ALWAYS verify ASIN has active Amazon buy-box first (agent
      pattern: fetch product page, confirm price + add-to-cart, never guess).
- [ ] Also queued: individual shoe reviews (see P4), starting NOX AT10 PRO.

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

## P8 — Informational cluster rescue + quiz monetization (started 2026-07-31)
Status: IN PROGRESS
The three top-of-funnel pages earn ~2,700 imp and 9 clicks combined:
  /rules              1,386 imp,  9 clicks, pos 19.03 (but "padel rules" pos 55!)
  /blog/padel-vs-pickleball 825 imp, 0 clicks, pos 17.43
  /how-to-play          471 imp,  0 clicks, pos 34.41
Query families: rules (~316 imp: "padel rules" 102@55, "how to play padel" 109@36,
"padel tennis rules" 24@57, "rules of padel" 15@60, "padel rules and scoring"
14@45, "how do you play padel" 19@40); vs-pickleball (~360 imp: "padel vs
pickleball" 168@15, "pickleball vs padel" 80@33, "difference between pickleball
and padel" 22@45, "is pickleball the same as padel" 21@31, "padel or pickleball"
21@31, "padel court vs pickleball court" 16@37); getting-started ("how do i get
started playing padel" 116@17 + 74@45, "padel for beginners" 39@48).
Gaps with NO page: indoor padel courts (~230 imp, pos 12-19), padel lessons/
classes near me (~200 imp, pos 10-12). Both are data-backed — club records have
courtType and lessonsAvailable fields, so these can be live-computed, no fabrication.
- [ ] P8a /rules rebuild (on-brand shell, Article+FAQPage schema, exact-phrase H1/H2s)
- [ ] P8b /how-to-play (exact-phrase FAQs, freshness)
- [ ] P8c /blog/padel-vs-pickleball (variant-query FAQs, freshness)
- [ ] P8d NEW /indoor-padel-courts + /padel-lessons (live-computed from club data)
- [ ] P8e GearWidget (racket quiz + affiliate picks) on ALL informational pages —
      this is the monetization bridge: informational traffic -> gear affiliate.

## Parallel tracks (not this plan, don't drop)
- Badge outreach wave 1: BADGE_OUTREACH_WAVE1.csv ready, 42 sendable (Dito sends)
- Weekly SEO loop: scheduled Mondays (padel-seo-improver-weekly), baseline run done
- Ahrefs GSC sync pending (connected 7/31, retest); DataForSEO optional later
