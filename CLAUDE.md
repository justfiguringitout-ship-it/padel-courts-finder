# Padel Courts Finder — Project Context

## Core Strategy
This site exists to generate organic search traffic and eventually monetize through ads, sponsorships, and/or lead generation. Every code change, content addition, and data update should be evaluated through an SEO lens. Key principles:
- Every page must have proper schema.org structured data (JSON-LD)
- Every page must have unique, descriptive meta titles and descriptions
- No fabricated or duplicate content — Google's helpful content system penalizes this
- Rich, unique per-page content is the primary competitive advantage
- Internal linking between related pages (court → city → state → blog guide) matters
- Page speed and Core Web Vitals affect rankings
- Blog city guides target "best padel clubs in [city]" keywords
- Court pages target "[club name]" and "[club name] padel" keywords
- State/city pages target "padel courts in [state/city]" keywords

## What This Is
A US padel court directory site at padelcourtsfinder.com. Next.js 15 + TypeScript + Tailwind CSS, deployed on Vercel. Court data lives in `src/data/padel-courts.ts` as the single source of truth.

Repo: https://github.com/justfiguringitout-ship-it/padel-courts-finder

## Current State (as of March 2026)

### Architecture
- `src/data/padel-courts.ts` — All court data (source of truth)
- `src/types/padel-court.ts` — PadelCourt type definition
- `src/lib/court-adapter.ts` — Transforms raw data for frontend (AdaptedCourt interface)
- `src/lib/site-structure.ts` — State/city URL helpers
- `src/app/courts/[slug]/page.tsx` — Individual court detail page
- `src/app/[state]/page.tsx` — State listing page
- `src/app/[state]/[city]/page.tsx` — City listing page
- `src/app/search/page.tsx` — Search page (server-rendered with client filters)
- `src/app/blog/*/page.tsx` — 15 city guide blog posts

### What Was Already Done

**SEO fixes (Phase 1-3):**
- Plausible analytics moved to Next.js Script component
- Fabricated pricing removed from adapter and all pages
- Fake social media URLs removed from Organization schema
- Sitemap dates fixed (static pages use fixed dates, courts use verificationDate)
- Search page converted to SSR (was fully client-rendered)
- Navigation shows all states dynamically from data
- Site-wide footer extracted and added to layout
- Breadcrumbs fixed (Home > State > City > Court)
- All img tags replaced with next/image
- OG tags and canonical URLs on all blog pages
- Custom 404 page created
- Unique meta descriptions per court
- ItemList schema on state and city listing pages

**Adapter cleanup (Step 1 of upgrade plan):**
- ALL fabricated defaults removed from court-adapter.ts
- Descriptions: empty string instead of fake "offers premier padel facilities..."
- Court surface: empty instead of "Professional-grade artificial turf..."
- Lighting: empty instead of "LED floodlights for evening play"
- Amenities: empty array instead of generic 6-item fallback list
- FAQs: completely removed (HTML section + FAQPage JSON-LD schema)
- Court count defaults to 0 instead of 4
- Indoor/outdoor split: no more fabricated estimates
- All sections null-checked — empty data hides the section entirely

**New fields added (Step 2 of upgrade plan):**
- 11 new optional fields in PadelCourt type: instagram, facebook, membersOnly, lessonsAvailable, rentalAvailable, socialArea, foodAndDrink, positiveReviewThemes, negativeReviewThemes, pricingText, status
- All mapped through adapter with no fabrication
- Court page template renders 5 new UI sections:
  1. Status badges (Coming Soon = amber, Temporarily Closed = red, Private Club = purple)
  2. Social media links (Instagram + Facebook with SVG icons in contact card)
  3. Facility indicator pills (Lessons, Equipment Rental, Food & Drink, Social Lounge)
  4. Pricing card (splits pricingText on semicolons, shows as list in sidebar)
  5. "What Players Say" section (green pills = positive themes, amber = negative)

## Upgrade Plan — Where We Are

### ✅ Step 1: Fix adapter (DONE) — removed all fabricated data
### ✅ Step 2: Add new fields (DONE) — 11 new fields, 5 new UI sections
### ✅ Step 3: Big data push (DONE) — 348 total courts (188 added, 133 updated, 2 removed, 20 coming soon)
### 🔲 Step 4: Refresh blog city guides — update to 2026, add new city guides
### 🔲 Step 5: Fix court images — replace Unsplash placeholders with real images

## Step 3 Field Mapping

When processing the master data markdown, map fields as follows:

| Master Data Field | → | Code Field in padel-courts.ts |
|---|---|---|
| Description | → | description |
| Address | → | address |
| City | → | city |
| State | → | state (2-letter code) |
| Zip | → | zipCode |
| Phone | → | phone |
| Website | → | website |
| Num Courts | → | numberOfCourts (parse number only; "8 (4 indoor, 4 outdoor)" = 8) |
| Court Type | → | courtType ("indoor" / "outdoor" / "both" for "indoor and outdoor") |
| Court Surface | → | courtSurface |
| Lighting | → | lighting (string; skip if "unknown") |
| Pricing | → | pricingText (full string as-is) |
| Hours | → | openingHours (parse to existing format) |
| Lessons Available | → | lessonsAvailable (boolean; "yes"=true, "no"=false, "unknown"=skip) |
| Rental Available | → | rentalAvailable (boolean) |
| Social Area | → | socialArea (boolean) |
| Food & Drink | → | foodAndDrink (boolean) |
| Members Only | → | membersOnly (boolean; "private/reservable"=true) |
| Instagram | → | instagram |
| Facebook | → | facebook |
| Google Rating | → | googleRating (number) |
| Google Review Count | → | googleReviewCount (number) |
| Positive Review Themes | → | positiveReviewThemes |
| Negative Review Themes | → | negativeReviewThemes |
| Notable Amenities | → | amenities (split comma-separated string into array) |
| Status | → | status ("open" / "coming_soon" / "temporarily_closed") |

**Rules:**
- "unknown" = leave field undefined (do not set)
- "yes"/"no" = convert to boolean true/false
- Always preserve existing fields (like coordinates) that the markdown doesn't update
- Generate slugs from court names (lowercase, hyphenated, no special chars)
- New courts need coordinates — estimate from city center, add TODO comment

## Key Principles
- Never fabricate data. If data is missing, hide the section.
- Every section on court pages is null-checked — no data = no render.
- Run `npm run build` after every change set — must pass clean.
- The master data markdown is the research source of truth for court details.
