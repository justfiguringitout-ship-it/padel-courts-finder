/**
 * Public changelog for /changelog: what changed in the club directory, month
 * by month.
 *
 * Vercel builds from a shallow clone, so this cannot be derived from git at
 * build time. It is seeded by hand from
 *   git log --since=2026-06-01 --format='%h %ad %s' --date=short -- src/data/padel-courts.ts
 * and every entry must be backed by a commit (hash in `commit`). Write plain
 * English, no em dashes, and only claim what the commit shows.
 *
 * `clubs` holds CURRENT club names exactly as they appear in padel-courts.ts.
 * The page links a name to /courts/<slug> when that club still exists and
 * prints it as plain text when it does not (removed clubs, old names).
 *
 * `count` is how many clubs the change touched when that is more than the
 * clubs named (e.g. 116 map pins, with four named examples). The month
 * summary on the page adds these up as "changes", not distinct clubs: one
 * club can appear in several entries.
 *
 * Add new entries at the top. Keep one entry per date and type where you can.
 */

export type ChangeType = "added" | "updated" | "verified" | "removed";

export interface ChangelogEntry {
  /** YYYY-MM-DD, the commit date */
  date: string;
  type: ChangeType;
  /** One line, plain English */
  title: string;
  /** Optional second line with the specifics */
  note?: string;
  /** Current club names, linked when the club is still listed */
  clubs?: string[];
  /** Clubs touched, when more than the named ones */
  count?: number;
  /** Short git hash(es) backing the entry, for our records */
  commit: string;
}

export const changelog: ChangelogEntry[] = [
  // ---------------------------------------------------------------- October 2026
  {
    date: "2026-10-09",
    type: "updated",
    title: "Opening hours added for 25 clubs",
    note:
      "Hours now come from each club's website, Google Business profile or Playtomic profile, checked on October 9, so the new Can I play tonight? section can show whether they are open. Clubs whose hours are not published stay listed as hours not published.",
    count: 25,
    commit: "a49a9d2",
  },
  {
    date: "2026-10-09",
    type: "removed",
    title: "Two listings removed after a status check",
    note:
      "6 Love Sports in Miami Beach runs leagues and is not a venue, and we found no evidence that Padel Country Club in Miami exists outside our own listing. Casa de Padel HTX moved back to coming soon (its site says opening fall 2026), and Taktika Padel Stockton is marked temporarily closed after it dropped off the chain's website and booking page.",
    clubs: ["6 Love Sports", "Padel Country Club", "Casa de Padel HTX", "Taktika Padel - Stockton"],
    commit: "a49a9d2",
  },
  {
    date: "2026-10-08",
    type: "updated",
    title: "Court prices checked on live booking pages in Miami, Houston, Austin and Dallas",
    note:
      "Non-member court prices for 29 clubs now come from the clubs' live Playtomic and booking pages, checked on October 8. Several old figures were wrong: i95 Padel Club is about $109 an hour, not $65, and Urban Padel and Platinum Padel had outdated ranges. Rates for members-only clubs and figures we could not source were removed. New York clubs keep prices behind a login, so none are shown there yet.",
    count: 32,
    commit: "3a4cf00",
  },
  {
    date: "2026-10-08",
    type: "removed",
    title: "Padel& Greenpoint closed",
    note:
      "The Brooklyn club closed on May 31, 2026 after its building was sold, as reported by Greenpointers and stated on the club's own site. The listing was removed and the New York and Brooklyn guides were updated.",
    clubs: ["Padel& Greenpoint"],
    commit: "65cf382, 5c2edbc",
  },
  {
    date: "2026-10-08",
    type: "removed",
    title: "Six listings removed after a status check",
    note:
      "Pepper Padel (no activity since 2023), Naoa (permanently closed), Dixson (now pickleball only), Punto Azul (never opened), and Padel Protech and Golden Padel (no evidence of an operating club). Each was checked against the club's own Instagram, booking pages, Google Maps and public records.",
    clubs: ["Pepper Padel", "Naoa", "Dixson Padel and Pickleball Club", "Punto Azul Padel Club", "Padel Protech", "Golden Padel"],
    commit: "99ffbf0",
  },
  {
    date: "2026-10-08",
    type: "updated",
    title: "Three clubs marked temporarily closed, one renamed",
    note:
      "Camelback Padel Club, Vamos Racquets and Club Padel Newtown have gone quiet online and their sites are down, so they are marked temporarily closed until we confirm. Cascades Tennis in Aspen is now Aspen Meadows Racquet Club. Pulse Padel Hub, Rad Padel, Platinum Padel and Padel World Play now link to their working booking pages.",
    clubs: ["Camelback Padel Club", "Vamos Racquets", "Club Padel Newtown", "Aspen Meadows Racquet Club", "Pulse Padel Hub", "Rad Padel", "Platinum Padel Club", "Padel World Play"],
    commit: "99ffbf0",
  },
  {
    date: "2026-10-08",
    type: "verified",
    title: "The Gables Padel is open: 8 outdoor courts",
    note:
      "Checked against the club's website and its Playtomic booking page. Status moved from coming soon to open. The listing now shows 8 outdoor courts (it said indoor), the correct phone number, hours of 7am to midnight daily and court prices, which were not listed before. The map pin moved from downtown Miami to the club's address on NW 42nd Avenue.",
    clubs: ["The Gables Padel"],
    commit: "fef7cf9",
  },
  {
    date: "2026-10-08",
    type: "updated",
    title: "116 map pins corrected to street addresses",
    note:
      "Every pin that sat 1.5 km or more from the club's street address was moved, using the US Census geocoder. The worst ones: Padel Haus Nashville (pin was in Florida), Padel Ranch in El Paso (pin was near Denver), Banner House in Dallas (374 km off) and RGV Padel Club in McAllen (71 km off).",
    clubs: ["Padel Haus Nashville", "Padel Ranch", "Banner House at T Bar M", "RGV Padel Club"],
    count: 116,
    commit: "0ef11db",
  },
  {
    date: "2026-10-08",
    type: "updated",
    title: "Club photos are now hosted by us",
    note:
      "106 club photos that loaded from other websites were moved to our own server as fast WebP files. Five photo links that no longer worked were dropped. Three of the moved photos were later removed because they showed another club's logo. Clubs without a photo now show a drawn court with their court count.",
    count: 106,
    commit: "a6f01d8, 1fdfb50",
  },
  {
    date: "2026-10-08",
    type: "updated",
    title: "Website links fixed for two clubs",
    note:
      "Padeland now links to padelandaz.com (padeland.com is an unrelated parked page), and the Padel Haus Williamsburg link no longer leads to a missing page.",
    clubs: ["Padeland", "Padel Haus - Williamsburg"],
    commit: "91f6e02, 9af839b, 6597e6c",
  },
  {
    date: "2026-10-08",
    type: "updated",
    title: "Dead and hijacked website links removed from 17 club pages",
    note:
      "The links led to sites that no longer exist, parked domain pages or, for two clubs, gambling sites. Eleven more website fields were cleaned up: seven held two web addresses, one held a note, and three deep links now point to the club's home page.",
    count: 28,
    commit: "cfd8e10",
  },
  {
    date: "2026-10-08",
    type: "updated",
    title: "Clubs with unknown hours no longer show default hours",
    note:
      "When a club's hours were missing or could not be read, its page showed 7:00 to 22:00 by default. Those pages now say the club has not published its hours yet.",
    commit: "cfd8e10",
  },
  {
    date: "2026-10-08",
    type: "removed",
    title: "Duplicate King of Padel listing removed",
    note:
      "A listing named The King of Padel had the same address, 314 Nolan St in San Antonio, as The King of Padel - San Antonio. The duplicate was removed and its old page now redirects to the remaining listing.",
    clubs: ["The King of Padel - San Antonio"],
    commit: "e437a71",
  },
  {
    date: "2026-10-07",
    type: "added",
    title: "Two clubs added as coming soon",
    note:
      "The Club at Marlboro in Morganville, NJ, and Society Park Orlando. Society Park's opening date is not confirmed, and its address on International Drive comes from press reports, not from the club.",
    clubs: ["The Club at Marlboro", "Society Park Orlando"],
    commit: "8e5fc72, f69e7cc",
  },
  {
    date: "2026-10-02",
    type: "added",
    title: "Emerald Padel Club in Seattle added as coming soon",
    note: "Submitted by the club. Opening planned for June 2027.",
    clubs: ["Emerald Padel Club"],
    commit: "8d2fecb",
  },

  // -------------------------------------------------------------- September 2026
  {
    date: "2026-09-29",
    type: "verified",
    title: "Court counts confirmed for three clubs",
    note: "Padeland has 5 courts, Charlotte Padel Club Matthews has 6 and Padel39 North Austin has 6.",
    clubs: ["Padeland", "Charlotte Padel Club - Matthews", "Padel39 North Austin"],
    commit: "183f464, d3a0be3",
  },
  {
    date: "2026-09-29",
    type: "added",
    title: "Eight open clubs added after our city audits",
    note:
      "Found while re-checking Austin, Houston, the Bay Area and Phoenix club by club, plus the new Padel Haus in Denver (5 indoor courts).",
    clubs: [
      "Legacy Padel & Pickleball",
      "Racket Social Club - Katy",
      "SWIP Sportika Woodlands Indoor Padel",
      "Casa de Padel HTX",
      "TERRA Padel",
      "Bay Padel - San Jose",
      "Padeland",
      "Padel Haus Denver",
    ],
    commit: "f557121, d3a0be3, 4265884",
  },
  {
    date: "2026-09-29",
    type: "added",
    title: "Ten announced clubs added as coming soon",
    note: "Clubs that have announced a location but are not open yet, from Austin and Dallas to Washington DC and Tampa Bay.",
    clubs: [
      "Slice Padel Co. Downtown Austin",
      "Padel Spot",
      "Cali Padel Club",
      "Padel Square Dallas",
      "Padel Haus Dallas",
      "East Potomac Racquet Sports",
      "Epic Padel Tysons",
      "Bath & Racquet House",
      "Conquer Padel Club Tampa",
      "Bath + Racquet Club",
    ],
    commit: "f557121, 0411b06, d3a0be3, 4265884",
  },
  {
    date: "2026-09-29",
    type: "updated",
    title: "Status changes: four clubs now open, one temporarily closed",
    note:
      "Now open: Mesa Padel Club, Padel39 East Austin (12 courts), Lobb's Padel and Padel Haus Greenpoint. Austin Padel Center moved from its pop-up to its permanent 9-court club. Rock Creek Tennis Center in Washington DC is marked temporarily closed.",
    clubs: [
      "Mesa Padel Club",
      "Padel39 East Austin",
      "Lobb's Padel",
      "Padel Haus Greenpoint",
      "Austin Padel Center",
      "Rock Creek Tennis Center",
    ],
    commit: "f557121, d3a0be3, 4265884",
  },
  {
    date: "2026-09-29",
    type: "updated",
    title: "Addresses, court counts and details corrected",
    note:
      "Padel Haus Williamsburg is at 307 Kent Ave with 7 courts (4 indoor, 3 rooftop). Banner House has 5 courts, Charlotte Padel Club South Charlotte has 3, TEMPO's courts are outdoor, and The Padel Collective's website and court count are fixed. Street addresses added for Preston Playhouse, St. Pete Athletic, SH19 and Anytime Padel, and PURE's location corrected.",
    clubs: [
      "Padel Haus - Williamsburg",
      "Banner House at T Bar M",
      "Charlotte Padel Club - South Charlotte",
      "TEMPO Padel & Pickleball Club",
      "The Padel Collective",
      "PURE Pickleball & Padel",
      "Preston Playhouse",
      "St. Pete Athletic",
      "SH19",
      "Anytime Padel",
    ],
    commit: "4265884, 0411b06, d3a0be3, f557121",
  },
  {
    date: "2026-09-29",
    type: "updated",
    title: "Six clubs renamed",
    note:
      "Padel39 North Dallas (formerly Dallas Padel Club), WePadel (formerly Woodcourt Padel and Pickleball) and Epic Padel Charlotte (formerly Epic Padel Inc). Padel California Whittier, Padel Country Club Katy and Padel Square Dallas had been sharing a web address with another club of the same name; each now has its own page.",
    clubs: [
      "Padel39 North Dallas",
      "WePadel",
      "Epic Padel Charlotte",
      "Padel California - Whittier",
      "Padel Country Club Katy",
      "Padel Square Dallas",
    ],
    commit: "0411b06, f557121, d3a0be3, 97d438f",
  },
  {
    date: "2026-09-29",
    type: "removed",
    title: "Four listings removed",
    note:
      "Net Racquet Club in Dallas has closed, and the SMU tennis complex (Styslinger / Altec Tennis Complex) has no padel courts. PATL in Fort Lauderdale and Houston Padel Indoor were removed after our verification review.",
    clubs: ["Net Racquet Club", "Styslinger / Altec Tennis Complex", "PATL", "Houston Padel Indoor"],
    commit: "0411b06, 183f464",
  },
  {
    date: "2026-09-29",
    type: "removed",
    title: "Five duplicate listings merged",
    note:
      "These clubs were listed twice. Each now has a single page: the Zephyrhills venue (added that day as SVB Tennis & Wellness Center but already listed as Mouratoglou Academy Zephyrhills), Park Padel West Sacramento, Matt's Pickle and Padel, Charlotte Padel Club Matthews, and Woodlands Padel, which is the same club as Wakit Rakit Spring.",
    clubs: [
      "SVB Tennis & Wellness Center",
      "Park Padel - West Sacramento",
      "Matt's Pickle and Padel",
      "Charlotte Padel Club - Matthews",
      "Wakit Rakit Spring",
    ],
    commit: "a811a88, 97d438f, d3a0be3, f557121",
  },
  {
    date: "2026-09-28",
    type: "added",
    title: "Padel Connect CT in Bristol added as coming soon",
    note: "Submitted by the club through our listing form and checked against the club's website. Street address still to be announced.",
    clubs: ["Padel Connect CT"],
    commit: "b754271",
  },
  {
    date: "2026-09-13",
    type: "updated",
    title: "Wakit Rakit Space Coast description updated at the owner's request",
    clubs: ["Wakit Rakit Space Coast"],
    commit: "95d9038",
  },

  // ----------------------------------------------------------------- August 2026
  {
    date: "2026-08-29",
    type: "verified",
    title: "Miami court counts checked: no changes needed",
    note: "Confirmed against primary sources: Ultra Padel Club 29 courts, Padel X Miami 10, Wynwood Padel Club 8, i95 Padel Club 6, Canas Racket Padel 6.",
    clubs: ["Ultra Padel Club", "Padel X Miami", "Wynwood Padel Club", "i95 Padel Club Miami", "Canas Racket Padel"],
    commit: "e2a5467",
  },
  {
    date: "2026-08-29",
    type: "updated",
    title: "Court surface set to synthetic turf on 146 club pages",
    note:
      "Padel is normally played on synthetic turf, so we filled in that standard surface on 146 pages that had none. It was not confirmed club by club.",
    count: 146,
    commit: "e2a5467",
  },
  {
    date: "2026-08-28",
    type: "added",
    title: "Wakit Rakit Spring added",
    note: "A new 4-court, padel-only club in Spring, TX, submitted by the owner.",
    clubs: ["Wakit Rakit Spring"],
    commit: "a2e444b",
  },
  {
    date: "2026-08-28",
    type: "verified",
    title: "Wakit Rakit Space Coast confirmed by the owner",
    note:
      "Renamed from Wakit Rakit Titusville to match the club's branding, with phone, email and its own location website. Both Wakit Rakit clubs now show court surface, outdoor court counts, activity prices and real club photos from their own location pages.",
    clubs: ["Wakit Rakit Space Coast", "Wakit Rakit Spring"],
    commit: "a2e444b, 36502a9, a9f92b4",
  },
  {
    date: "2026-08-28",
    type: "updated",
    title: "Padel Social Bethesda has reopened",
    note: "Updated after the owner let us know.",
    clubs: ["Padel Social Bethesda"],
    commit: "32a0fed",
  },

  // ------------------------------------------------------------------- July 2026
  {
    date: "2026-07-16",
    type: "verified",
    title: "The Courts at Montauk Yacht Club: details from the club's fact sheet",
    note:
      "Season hours (8am to 8pm, June to October), phone, email and description corrected from the club's own fact sheet, plus club-approved photos. It is the first club with a photo gallery.",
    clubs: ["The Courts at Montauk Yacht Club"],
    commit: "3cee471, b74fd44, 61ab5a2",
  },
  {
    date: "2026-07-14",
    type: "verified",
    title: "Nicol Rackets: contact details and weekday hours confirmed by the owner",
    clubs: ["Nicol Rackets"],
    commit: "d3250a5",
  },
  {
    date: "2026-07-12",
    type: "updated",
    title: "Privé Padel is now The Courts at Montauk Yacht Club",
    note: "The venue rebranded. New website, phone and address, and the previous operator's prices were removed because they no longer apply.",
    clubs: ["The Courts at Montauk Yacht Club"],
    commit: "1af3d12",
  },
  {
    date: "2026-07-10",
    type: "updated",
    title: "49 club pages filled in with verified details",
    note:
      "Phone numbers, hours, court surface, Instagram, published prices and review themes, taken from each club's own site and real reviews. Where a detail could not be confirmed we left it blank. Among them: Boar's Head, Rancho Valencia, Wynwood Padel Club, Cube Padel in Chicago, Union Padel Club and PADEL PARK.",
    clubs: [
      "Boar's Head Sports Club",
      "Rancho Valencia",
      "Wynwood Padel Club",
      "Cube Padel - Chicago",
      "Union Padel Club",
      "PADEL PARK, INC.",
    ],
    count: 49,
    commit: "d2cb11b, 72890fc, 7ce0c0a, 1a586be, dc76d31",
  },
  {
    date: "2026-07-10",
    type: "updated",
    title: "The King of Padel moved to San Antonio, TX",
    note: "It had been listed in San Diego by mistake. Its San Diego location has closed, so only San Antonio is listed.",
    clubs: ["The King of Padel - San Antonio"],
    commit: "7ce0c0a, 0b1f341",
  },
  {
    date: "2026-07-10",
    type: "updated",
    title: "Two clubs moved back to coming soon",
    note: "Primary sources showed they had not opened yet.",
    clubs: ["Los Angeles Padel Club", "10by20 Padel Wellington"],
    commit: "1a586be",
  },
  {
    date: "2026-07-10",
    type: "removed",
    title: "Sandy Springs Racquet Center removed",
    note: "It has tennis and pickleball courts but no padel courts.",
    clubs: ["Sandy Springs Racquet Center"],
    commit: "0b1f341",
  },
  {
    date: "2026-07-06",
    type: "added",
    title: "A new club in Santa Fe, New Mexico, plus two clubs coming soon",
    note:
      "Forked Lightning Racquet Club in Santa Fe (3 outdoor courts, members only). Coming soon: Vamos Padel in Jacksonville and Padel Foundry in Virginia Beach (7 indoor courts).",
    clubs: ["Forked Lightning Racquet Club", "Vamos Padel", "Padel Foundry"],
    commit: "dd71b80, a32e70c",
  },
  {
    date: "2026-07-05",
    type: "added",
    title: "15 clubs added, including the first in Rhode Island and Washington",
    note:
      "Open: Laredo Padel Club, Padel Den USA, The Hive, Utah City Racquet Club, Wakit Rakit Titusville (now Space Coast) and the Padel X summer pop-up on Lincoln Road. Coming soon: Roslyn Padel, Ace Padel Denver, Newport Pickleball Club, NewGen Racquet Club and Conquer Padel Jacksonville. Also added after metro research: Jam Padel, Cascadia Padel, Epic Padel Milwaukee and Padel KC. Park Padel West Sacramento and Matt's Pickle and Padel were added the same day but were already listed; the duplicates were merged in September.",
    clubs: [
      "Laredo Padel Club",
      "Padel Den USA",
      "The Hive Padel Club",
      "Utah City Racquet Club",
      "Wakit Rakit Space Coast",
      "Padel X Summer Club (Lincoln Road)",
      "Roslyn Padel",
      "Ace Padel Denver",
      "Newport Pickleball Club (Padel)",
      "NewGen Racquet Club",
      "Conquer Padel Jacksonville",
      "Jam Padel",
      "Cascadia Padel",
      "Epic Padel Milwaukee",
      "Padel KC",
    ],
    commit: "d6d9b74, 88dae23",
  },
  {
    date: "2026-07-05",
    type: "updated",
    title: "47 map pins moved off the center of the country",
    note: "Clubs whose address had failed to look up were sitting at the geographic center of the US. Each now sits in its own city.",
    count: 47,
    commit: "88dae23",
  },
  {
    date: "2026-07-05",
    type: "verified",
    title: "Three listings re-checked",
    note:
      "DUS Padel has 5 courts, not 6 (per its own site). Punto Azul Padel Club is back to coming soon: no working website or booking yet. Santa Monica Pickleball & Padel is correct as listed; its padel opening in March 2026 was confirmed by local press.",
    clubs: ["DUS Padel", "Punto Azul Padel Club", "Santa Monica Pickleball & Padel"],
    commit: "d6d9b74",
  },
  {
    date: "2026-07-03",
    type: "verified",
    title: "Nicol Rackets updated from the owner's form",
    note: "Renamed from Nicol NJ, with 7 courts (4 indoor, 3 outdoor) and new amenities.",
    clubs: ["Nicol Rackets"],
    commit: "ae59a7f",
  },
];
