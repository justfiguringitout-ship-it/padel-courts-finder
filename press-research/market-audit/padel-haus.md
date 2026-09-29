# Padel Haus — US location audit

Audit date: 2026-09-29. Operator site pages last modified 2026-09-15 per `https://www.padel.haus/pages-sitemap.xml` (Williamsburg page 2026-08-03 per the dynamic-locations sitemap).

Labels used: **[OP]** = verified on operator site, **[2ND]** = verified on secondary source, **[NF]** = not found. Every URL listed was actually fetched unless marked "search snippet only".

## Summary

| Location | Status | Padel courts | Address | In our directory |
|---|---|---|---|---|
| Williamsburg | Open | 7 (4 indoor + 3 rooftop) | 307 Kent Ave, Brooklyn, NY 11249 | Yes — address and court count WRONG |
| Dumbo | Open | 4 indoor | 257 Water St, Brooklyn, NY 11201 | Yes — correct |
| Greenpoint | Open (booking since 2026-05-01, grand opening 2026-07-23) | 5 indoor | 12 Berry St, Brooklyn, NY 11249 | Yes — status WRONG (listed coming soon) |
| Nashville | Open | 8 indoor | 2807 Grandview Ave, Nashville, TN 37211 | Yes — correct |
| Atlanta | Open | 6 covered | 950 West Marietta St NW, Atlanta, GA 30318 | Yes — correct (note "covered", not "indoor") |
| Denver | Open | 5 indoor | 2501 Welton St, Denver, CO 80205 | MISSING |
| Dallas | Coming soon (not on operator nav, no operator address) | 6 indoor (announced) | 1500 Dragon St, Dallas (press only, no ZIP published) | MISSING |

Brooklyn total = 7 + 4 + 5 = 16 courts, which matches Padel Nation's "16 courts" figure.

## Source access notes

- `https://www.padel.haus` — fetched, HTTP 200. Primary source for everything marked [OP].
- `https://padelhaus.com` — fetched; it **redirects to `https://www.padelclube.com/`** ("Padel Clube", Mundelein). It is NOT a Padel Haus property. Do not use it as a source or link target.
- Booking portals (`bookings.padel.haus`, `dumbo.`, `greenpoint.`, `nashville.`, `atlanta.`, `denver.padel.haus`) all return HTTP 403 behind a Cloudflare bot challenge. I did not bypass it. This is where court prices and membership prices live, so **pricing is not verified**.
- `williamsburg.padel.haus` and `dallas.padel.haus` do not resolve in DNS.
- Google Maps listings: not fetched (no fetchable listing page). Yelp (`https://www.yelp.com/biz/padel-haus-greenpoint-brooklyn`) returned 403.
- Playtomic: Padel Haus does not use Playtomic. Booking platform is Playbypoint (DNS CNAME of every booking subdomain is `dns.playbypoint.com`).

## Facts common to all clubs

- **Booking platform**: Playbypoint, white-labelled on padel.haus subdomains, plus the operator's app. [OP for the booking URLs on each club page; platform identity verified by DNS CNAME `dns.playbypoint.com`]
- **Members-only or public**: Public booking. FAQ: "As a non-member, you can still enjoy court reservations, programming, and 1:1 sessions with our coaches." [OP] https://www.padel.haus/faqs
- **Off-peak hours**: Monday–Friday 9AM–4PM. [OP] https://www.padel.haus/faqs
- **Booking length**: "Reserve up to two hours of padel". [OP] https://www.padel.haus/ways-to-play
- **Cancellation**: full fee charged inside 24 hours. [OP] https://www.padel.haus/faqs
- **Membership tiers**: Single Club, Multi-Club, Multi-Club Pro. Booking window 14 / 14 / 21 days; guest passes 6 / 9 / 12 per year. Application-based ("Apply Now"). [OP] https://www.padel.haus/membership
- **Membership price**: [NF] — no price on the operator's membership page. Membership plan pages exist on the booking portal (`https://denver.padel.haus/f/1700/memberships`, `https://nashville.padel.haus/f/836/memberships`, `https://atlanta.padel.haus/f/padel-haus-atlanta/memberships`) but returned 403.
- **Court price**: [NF] on operator site. The only price seen anywhere: Padel Browser lists a "First Time at Padel Haus" 1-hour session at Member $50 / Non-member $65 (a program, not a court rate). [2ND] https://www.padelbrowser.com/padel-courts/padel-haus-greenpoint. A 2022 figure ($150/month, $490 initiation, $55 per person per hour) surfaced in a search snippet only, was not fetched, and is four years old. Do not publish.
- **Rentals**: "Rent or purchase yours today from our onsite Pro Shop." [OP] https://www.padel.haus/faqs
- **Lessons**: clinics, private sessions, junior programming. [OP] https://www.padel.haus/ways-to-play
- **Sauna / cold plunge**: [NF] — not listed for any club on the operator site.
- **Bar (alcohol)**: [NF] on operator site. Operator lists "Cafe & Juice Bar" (Juice Haus) only. Dallas Morning News mentions "an actual bar" for the planned Dallas club only.
- **Instagram**: @padelhaus (single brand account). [OP] linked from https://www.padel.haus. Per-location handles: [NF].
- **Rating system**: NPRP. [OP] https://www.padel.haus/faqs

---

## 1. Williamsburg

- **Name as operator writes it**: "Williamsburg" / "Padel Haus Williamsburg" / footer "Williamsburg, NYC". [OP] https://www.padel.haus/locations/williamsburg
- **Address**: 307 Kent Avenue, Brooklyn, NY 11249. [OP] https://www.padel.haus/locations/williamsburg
- **Phone**: 917.970.0036. [OP] https://www.padel.haus/locations/williamsburg
- **Email**: williamsburg@padel.haus. [OP] same URL
- **Location URL**: https://www.padel.haus/locations/williamsburg (note the `/locations/` path, unlike other clubs). [OP]
- **Padel courts**: 7 — "four indoor and three rooftop state-of-the-art courts". [OP] same URL. The amenities tile on the same page says only "Four state-of-the-art indoor courts".
- **Indoor/outdoor**: 4 indoor + 3 rooftop (outdoor). [OP] same URL
- **Status**: Open — published hours and live booking link. [OP] fetched 2026-09-29
- **Opening date**: July 2022. [2ND] https://thepadelpaper.com/padel-haus-greenpoint-new-york-brooklyn/ and https://insider.fitt.co/press-release/padel-haus-expands-to-the-west-with-the-opening-of-denver-location/
- **Hours**: Weekdays 7AM–11PM, weekends 8AM–10PM. [OP] https://www.padel.haus/locations/williamsburg
- **Pricing**: [NF]
- **Access**: Public booking plus membership. [OP] https://www.padel.haus/faqs
- **Amenities**: Aviron fitness studio, mezzanine lounge, two social lounges, spa-like locker rooms with rain showers (Malin + Goetz), pro shop, cafe and juice bar, coworking. [OP] https://www.padel.haus/locations/williamsburg
- **Booking URL**: https://bookings.padel.haus/ [OP]
- **Instagram**: @padelhaus. [OP]

**Corrections to our entry**: street address is **307 Kent Ave**, not Grand St. ZIP 11249. Court count is **7 (4 indoor + 3 rooftop)**, not 5. Our "Grand St" and "5 courts" values were not found in any source fetched.

## 2. Dumbo

- **Name**: "Dumbo" / "Padel Haus Dumbo" / footer "Dumbo, NYC". [OP] https://www.padel.haus/dumbo
- **Address**: 257 Water Street, Brooklyn, NY 11201. [OP] https://www.padel.haus/dumbo
- **Phone**: CONFLICT on operator site. Site footer says 646.381.3232 [OP] https://www.padel.haus; the Dumbo page "Visit Us" block says 917.970.0036, which is the Williamsburg number [OP] https://www.padel.haus/dumbo. The footer number is unique to Dumbo, so 646.381.3232 is the more likely one, but it is not confirmed. Verify by phone or Google Maps before changing.
- **Email**: dumbo@padel.haus. [OP]
- **Location URL**: https://www.padel.haus/dumbo [OP]
- **Padel courts**: 4 — "four top-tier indoor courts". [OP] https://www.padel.haus/dumbo
- **Indoor/outdoor**: Indoor. [OP]
- **Status**: Open — published hours and live booking link. [OP] fetched 2026-09-29
- **Opening date**: [NF]. (The Padel Paper's "opened August 2023" refers to the Domino Park open-air venue, which the summariser conflated with Dumbo; do not use.)
- **Hours**: Weekdays 7AM–11PM, weekends 8AM–10PM. [OP] https://www.padel.haus/dumbo
- **Pricing**: [NF]
- **Access**: Public booking plus membership. [OP]
- **Amenities**: social lounges, premium fitness equipment, spa-like locker rooms (Malin + Goetz), pro shop, cafe and juice bar, coworking. [OP] https://www.padel.haus/dumbo
- **Booking URL**: https://dumbo.padel.haus/ [OP]
- **Instagram**: @padelhaus. [OP]

**Corrections to our entry**: none on address, courts or status. Add ZIP 11201 if missing. Check phone.

## 3. Greenpoint

- **Name**: "Greenpoint" / "Padel Haus Greenpoint" / footer "Greenpoint, NYC". [OP] https://www.padel.haus/greenpoint
- **Address**: 12 Berry Street, Brooklyn, NY 11249 (corner of North 13th St). [OP] https://www.padel.haus/greenpoint; cross street [2ND] https://thepadelpaper.com/padel-haus-greenpoint-new-york-brooklyn/
- **Phone**: 917.970.0177. [OP]
- **Email**: greenpoint@padel.haus. [OP]
- **Location URL**: https://www.padel.haus/greenpoint [OP]
- **Padel courts**: 5 — "5 state-of-the-art indoor courts". [OP]
- **Indoor/outdoor**: Indoor. [OP]. Ceiling height conflicts across secondary sources (28 ft in The Padel Paper and Padel Browser, 35 ft in Padel Nation); do not publish a figure.
- **Status**: **Open.**
  - Operator evidence: listed in main nav "Clubs", has a live "Book Now" link to greenpoint.padel.haus, appears under "On This Week", photo captioned "Padel Haus Green Point May 2026". No "coming soon" wording anywhere on the page. However the overview copy still reads "will offer" (future tense, stale) and the page publishes no hours. [OP] https://www.padel.haus/greenpoint fetched 2026-09-29
  - Secondary evidence: Padel Nation, 2026-05-07 — accepting reservations since May 1, 2026; grand opening July 23, 2026. [2ND] https://www.padelnation.io/p/padel-haus-expands-its-us-empire
  - USA Padel, 2026-07-21 — Padel Haus Greenpoint to host the USA Padel 2000 Ultra Open July 24–26, 2026 (preview article, future tense; no results article fetched). [2ND] https://padelusa.org/padel-haus-greenpoint-hosts-the-usa-padel-2000-ultra-open/
- **Opening date**: bookings from 2026-05-01; grand opening 2026-07-23. [2ND] Padel Nation URL above. Earlier announced targets of October 2024 and December 2024 slipped.
- **Hours**: [NF] on operator site. Daily 7AM–11PM per Padel Nation (2026-05-07). [2ND]
- **Pricing**: [NF] for court rates. "First Time at Padel Haus" 1h: Member $50 / Non-member $65. [2ND] https://www.padelbrowser.com/padel-courts/padel-haus-greenpoint
- **Access**: Public booking plus membership. [OP]
- **Amenities**: Juice Haus, lounge areas, spa-like locker rooms and showers, pro shop, premium fitness areas, coworking. [OP]
- **Booking URL**: https://greenpoint.padel.haus/ [OP]
- **Instagram**: @padelhaus. [OP]

**Corrections to our entry**: status should be **open**, not coming soon. Address 12 Berry Street is correct; add ZIP 11249. Court count 5 is correct.

## 4. Nashville

- **Name**: "Nashville" / "Padel Haus Nashville" / footer "Nashville, TN". [OP] https://www.padel.haus/nashville
- **Address**: 2807 Grandview Ave, Nashville, TN 37211. [OP]
- **Phone**: 615.813.2300. [OP]
- **Email**: nashville@padel.haus. [OP]
- **Location URL**: https://www.padel.haus/nashville [OP]
- **Padel courts**: 8 — "eight state-of-the-art courts", "8 state-of-the-art indoor courts". [OP]
- **Indoor/outdoor**: Indoor. [OP]
- **Status**: Open — published hours and live booking link. [OP] fetched 2026-09-29
- **Opening date**: [NF] exact. Announced for "Summer 2024" in the May 2024 Denver press release. [2ND] https://insider.fitt.co/press-release/padel-haus-expands-to-the-west-with-the-opening-of-denver-location/
- **Hours**: Weekdays 7AM–11PM, weekends 8AM–10PM. [OP]
- **Pricing**: [NF]
- **Access**: Public booking plus membership. [OP]
- **Amenities**: Gibson Lounge, Aescape massage table, premium fitness areas, "our largest Juice Haus yet", locker rooms and showers, pro shop, coworking. [OP]
- **Booking URL**: https://nashville.padel.haus/ [OP]
- **Instagram**: @padelhaus. [OP]

**Corrections to our entry**: none. Add ZIP 37211 if missing.

## 5. Atlanta

- **Name**: "Atlanta" / "Padel Haus Atlanta" / footer "Atlanta, GA". [OP] https://www.padel.haus/atlanta
- **Address**: 950 West Marietta St NW, Atlanta, GA 30318 (Westside Paper building). [OP]
- **Phone**: 678.919.2312. [OP]
- **Email**: atlanta@padel.haus. [OP]
- **Location URL**: https://www.padel.haus/atlanta [OP]
- **Padel courts**: 6 — "six courts", "6 state-of-the-art covered courts". [OP]
- **Indoor/outdoor**: **Covered**, not enclosed indoor — "the city's first padel club with covered courts". [OP]
- **Status**: Open — published hours and live booking link. [OP] fetched 2026-09-29
- **Opening date**: [NF]
- **Hours**: Weekdays 7AM–**10PM**, weekends 8AM–10PM (weekday close is an hour earlier than the other clubs). [OP]
- **Pricing**: [NF]
- **Access**: Public booking plus membership. [OP]
- **Amenities**: stadium-style seating, center court, locker rooms and showers, pro shop, cafe and juice bar, fitness areas, coworking. [OP]
- **Booking URL**: https://atlanta.padel.haus/ [OP]
- **Instagram**: @padelhaus. [OP]

**Corrections to our entry**: none on address, courts or status. If we label it "indoor", change to "covered". Add ZIP 30318 if missing.

## 6. Denver — NOT IN OUR DIRECTORY

- **Name**: "Denver" / "Padel Haus Denver" / footer "Denver, CO". [OP] https://www.padel.haus/denver
- **Address**: 2501 Welton Street, Denver, CO 80205 (Five Points). [OP]
- **Phone**: 983.216.5522. [OP] https://www.padel.haus/denver and site footer
- **Email**: denver@padel.haus. [OP]
- **Location URL**: https://www.padel.haus/denver [OP]
- **Padel courts**: 5 — "five indoor courts, 25-foot ceilings". [OP]
- **Indoor/outdoor**: Indoor. [OP]
- **Status**: **Open.**
  - Operator evidence: in main nav, live "Book Now" link to denver.padel.haus, present-tense copy, listed under "On This Week", photo captioned "Padel Haus Denver June 2026". Page publishes no hours. [OP] fetched 2026-09-29
  - Padel Nation, 2026-05-07 — soft opening "next week", grand opening the weekend of June 26, 2026. [2ND] https://www.padelnation.io/p/padel-haus-expands-its-us-empire
  - Padel Browser Denver guide describes it as currently operating. [2ND] https://www.padelbrowser.com/blog/where-to-play-padel-denver
- **Opening date**: soft open mid-May 2026, grand opening weekend of 2026-06-26. [2ND] Padel Nation URL above. Original announced target was Q4 2024 (press release 2024-05-13). No post-event article confirming the grand opening took place was fetched (5280's Denver padel article returned 403).
- **Hours**: [NF]
- **Pricing**: [NF]. Padel Browser says only that drop-in pricing "skews higher" than a local competitor, no figures.
- **Access**: Public booking plus membership. [OP] https://www.padel.haus/faqs
- **Amenities**: premium locker rooms, state-of-the-art gym, co-working spaces, Juice Haus, pro shop. [OP]
- **Booking URL**: https://denver.padel.haus/ [OP]
- **Instagram**: @padelhaus. [OP]

**Action**: add a new entry.

## 7. Dallas — NOT IN OUR DIRECTORY, COMING SOON

- **Name**: operator page title is "Dallas | Padel Haus". [OP] https://www.padel.haus/dallas
- **Operator site status**: The page https://www.padel.haus/dallas exists in the sitemap (lastmod 2026-09-15) but is NOT linked from the nav, the home page or the footer. It is a stale placeholder: the heading reads "Denver" and the text reads "Coming May 2026" with a "Stay Informed" email form. It was evidently cloned from the Denver pre-launch page and never edited. **The operator site publishes no Dallas address, court count, phone, email or opening date.** [OP] fetched 2026-09-29. The About page says "now expanding into six locations", which excludes Dallas. [OP] https://www.padel.haus/about-us
- **Address**: 1500 Dragon St., Dallas (Design District). No ZIP published. [2ND] Dallas Morning News, 2025-10-27, https://www.dallasnews.com/food/restaurant-news/2025/10/27/what-is-padel-pickleball-tennis-sport-opening-dallas-design-district/
- **Phone / email**: [NF]. `dallas.padel.haus` does not resolve.
- **Padel courts**: 6 (announced). [2ND] Dallas Morning News URL above; Padel Nation 2026-05-07 and 2026-02-23 (https://www.padelnation.io/p/dallas-fort-worth-padel-scene-starts)
- **Indoor/outdoor**: Indoor, in a 24,000 sq ft warehouse (Padel Nation says 25,000). [2ND] same URLs
- **Status**: **Coming soon.** No source fetched reports it open. Padel Browser's North Dallas guide dated 2026-08-02 does not list it. [2ND] https://www.padelbrowser.com/blog/where-to-play-padel-north-dallas
- **Announced timing**: "expected to open in 2026" (Dallas Morning News, 2025-10-27); "late 2026" (Padel Nation, 2026-02-23); "tentatively set to open later in 2026" (Padel Nation, 2026-05-07). No specific date announced.
- **Hours / pricing**: [NF]
- **Amenities (planned)**: juice bar, "an actual bar", locker rooms, racket rentals, lessons and clinics (Dallas Morning News); gym with recovery and wellness spaces, multipurpose rooms, Juice Haus (Padel Nation 2026-02-23). [2ND]
- **Booking URL**: [NF]
- **Instagram**: @padelhaus. [OP]

**Action**: if added, list as coming soon with the address sourced to Dallas Morning News, and re-check the operator site before publishing any opening date.

---

## Other locations checked

- **Domino Park, NYC**: mentioned in a 2024 press release as outdoor pop-up courts. Not listed anywhere on the operator site as of 2026-09-29. Treat as not a current location. [2ND] https://insider.fitt.co/press-release/padel-haus-expands-to-the-west-with-the-opening-of-denver-location/
- No other US locations appear in the operator's nav, footer or sitemaps.

## Open items that need a human or a browser session

1. Court and membership prices: on the Playbypoint portals behind a Cloudflare challenge.
2. Dumbo phone number conflict (646.381.3232 vs 917.970.0036).
3. Greenpoint and Denver opening hours: not published on the operator pages.
4. Google Maps listing check for all seven: not done.
5. Dallas ZIP code and opening date: not published anywhere fetched.
