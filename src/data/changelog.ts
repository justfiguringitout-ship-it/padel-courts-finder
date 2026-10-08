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
 * clubs named (e.g. 116 map pins, with four named examples).
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
    date: "2026-10-08",
    type: "verified",
    title: "The Gables Padel is open: 8 outdoor courts",
    note:
      "Checked against the club's website and its Playtomic booking page. Status moved from coming soon to open, with corrected phone number, hours (7am to midnight daily), court prices and street address.",
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
      "111 club photos that loaded from other websites now live on our own server as fast WebP files. Five broken photo links were dropped, three photos that showed another club's logo were removed, and clubs without a photo now show a drawn court with their court count.",
    count: 111,
    commit: "a6f01d8, 1fdfb50",
  },
  {
    date: "2026-10-08",
    type: "updated",
    title: "Website links fixed for two clubs",
    note:
      "Padeland now links to padelandaz.com (padeland.com is an unrelated parked page), and the Padel Haus Williamsburg link no longer leads to a missing page.",
    clubs: ["Padeland", "Padel Haus - Williamsburg"],
    commit: "9af839b, 6597e6c",
  },
  {
    date: "2026-10-07",
    type: "added",
    title: "Two clubs added as coming soon",
    note:
      "The Club at Marlboro in Morganville, NJ, and Society Park Orlando. Society Park's opening date and address are not confirmed yet.",
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
    commit: "183f464",
  },
  {
    date: "2026-09-29",
    type: "added",
    title: "Nine open clubs added after our city audits",
    note:
      "Found while re-checking Austin, Houston, the Bay Area, Phoenix and Tampa Bay club by club, plus the new Padel Haus in Denver (5 indoor courts).",
    clubs: [
      "Legacy Padel & Pickleball",
      "Racket Social Club - Katy",
      "SWIP Sportika Woodlands Indoor Padel",
      "Casa de Padel HTX",
      "TERRA Padel",
      "Bay Padel - San Jose",
      "Padeland",
      "SVB Tennis & Wellness Center",
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
      "Padel Haus Williamsburg is at 307 Kent Ave with 7 courts (4 indoor, 3 rooftop). Banner House has 5 courts, Charlotte Padel Club South Charlotte has 3, TEMPO's courts are outdoor, Camelback Padel Club is private, and The Padel Collective's website and court count are fixed. Street addresses added for PURE, Preston Playhouse, St. Pete Athletic, SH19 and Anytime Padel.",
    clubs: [
      "Padel Haus - Williamsburg",
      "Banner House at T Bar M",
      "Charlotte Padel Club - South Charlotte",
      "TEMPO Padel & Pickleball Club",
      "Camelback Padel Club",
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
      "These clubs were listed twice. Each now has a single page: the Zephyrhills venue (also listed as Mouratoglou Academy Zephyrhills), Park Padel West Sacramento, Matt's Pickle and Padel, Charlotte Padel Club Matthews, and Woodlands Padel, which is the same club as Wakit Rakit Spring.",
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
    title: "Court surface added to 146 club pages",
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
      "Phone numbers, hours, court surface, Instagram, published prices and review themes, taken from each club's own site and real reviews. Where a detail could not be confirmed we left it blank. Among them: Boar's Head, Rancho Valencia, Wynwood Padel Club, Cube Padel Chicago, Union Padel Club and PADEL PARK.",
    clubs: [
      "Boar's Head Sports Club",
      "Rancho Valencia",
      "Wynwood Padel Club",
      "Cube Padel Chicago Bridgeport",
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
    clubs: ["The King of Padel"],
    commit: "7ce0c0a, 0b1f341",
  },
  {
    date: "2026-07-10",
    type: "updated",
    title: "Two clubs moved back to coming soon",
    note: "Primary sources showed they had not opened yet.",
    clubs: ["LA Padel Club", "10by20 Padel Wellington"],
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
    title: "New Mexico's first padel club, plus two clubs coming soon",
    note:
      "Forked Lightning Racquet Club in Santa Fe (3 outdoor courts, members only). Coming soon: Vamos Padel in Jacksonville and Padel Foundry in Virginia Beach (7 indoor courts).",
    clubs: ["Forked Lightning Racquet Club", "Vamos Padel", "Padel Foundry"],
    commit: "dd71b80, a32e70c",
  },
  {
    date: "2026-07-05",
    type: "added",
    title: "17 clubs added, including the first in Rhode Island and Washington",
    note:
      "Open: Laredo Padel Club, Padel Den USA, The Hive, Utah City Racquet Club, Wakit Rakit Titusville (now Space Coast) and the Padel X summer pop-up on Lincoln Road. Coming soon: Roslyn Padel, Ace Padel Denver, Newport Pickleball Club, NewGen Racquet Club and Conquer Padel Jacksonville. Also added after metro research: Jam Padel, Cascadia Padel, Park Padel West Sacramento, Matt's Pickle and Padel, Epic Padel Milwaukee and Padel KC.",
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
      "Park Padel - West Sacramento",
      "Matt's Pickle and Padel",
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
