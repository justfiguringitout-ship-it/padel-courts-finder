/**
 * Club Spotlights: the paid lane (see the two-lane content model).
 *
 * Rules every entry follows:
 * - At most one new Spotlight a month. Labeled "Sponsored · Club Spotlight",
 *   every outbound link is rel="sponsored", and the disclosure sits near the top.
 * - Written by us from facts we checked with the club or on its own pages.
 *   Payment never changes a club's position in any listing.
 * - Price: $179, which includes 30 days pinned on the club's state and city
 *   pages and a views/clicks report (scripts/spotlight-report.ts).
 *
 * Publishing: set status "live", set publishDate to the day it deploys and
 * pinnedUntil to publishDate + 30 days, in the same commit. A "draft" renders at
 * /spotlight/<slug> with noindex,nofollow and is left out of the sitemap, the
 * pinned cards and event logging, so Dito and the club can review it.
 *
 * Text style: plain prose that passes
 * `python3 ~/.claude/skills/dito-padel-voice/scripts/voice_check.py`.
 * Paragraphs may hold internal links written as [text](/path). Only internal
 * paths are allowed inline; outbound links live in `ctas` so they always get
 * rel="sponsored" and UTM tags.
 */

export type SpotlightStatus = "draft" | "live";

/** Outbound calls to action. Also the `kind` recorded for each click. */
export type SpotlightCtaKind = "book" | "website" | "instagram" | "phone" | "directions" | "membership";

export interface SpotlightCta {
  kind: SpotlightCtaKind;
  label: string;
  /** Full https URL, or tel: for phone. UTMs are added when the link renders. */
  href: string;
  /** Small line under the button, for example which booking system it is. */
  note?: string;
}

export interface SpotlightImage {
  /** Path under /public or a full URL. null renders the site's designed court placeholder. */
  src: string | null;
  alt: string;
  width?: number;
  height?: number;
  /** Required for any image we did not take ourselves, e.g. "Rendering courtesy of The Club NJ". */
  credit?: string;
  /** True for architectural renderings: the page labels them "Rendering". */
  isRendering?: boolean;
}

export interface SpotlightSection {
  heading?: string;
  paragraphs: string[];
}

export interface SpotlightFact {
  label: string;
  value: string;
}

export interface Spotlight {
  slug: string;
  /** id in src/data/padel-courts.ts */
  clubId: number;
  /** generateSlug(club name), i.e. the club's /courts/<slug> */
  clubSlug: string;
  clubName: string;
  title: string;
  dek: string;
  /** Shorter line for the pinned cards (falls back to dek). */
  cardLine?: string;
  metaDescription: string;
  status: SpotlightStatus;
  /** YYYY-MM-DD, America/New_York. The day the Spotlight went (or goes) live. */
  publishDate: string;
  /** YYYY-MM-DD, exclusive: cards show on days before this date. publishDate + 30 days. */
  pinnedUntil: string;
  /** YYYY-MM-DD, when the facts were last checked with the club. */
  factsCheckedDate: string;
  author: string;
  hero: SpotlightImage;
  photos: SpotlightImage[];
  facts: SpotlightFact[];
  body: SpotlightSection[];
  ctas: SpotlightCta[];
  disclosure: string;
}

export const spotlights: Spotlight[] = [
  {
    slug: "the-club-at-marlboro",
    clubId: 486,
    clubSlug: "the-club-at-marlboro",
    clubName: "The Club at Marlboro",
    title: "The Club at Marlboro opens its padel courts on November 2 in Morganville",
    dek:
      "The team behind The Club at Monroe is opening a second New Jersey club on Texas Road, with two indoor padel courts, nine pickleball courts, golf simulators and a recovery suite. Here is what is in the building, how to book and what court time costs.",
    cardLine:
      "Two indoor padel courts open in Morganville on November 2, from the team behind The Club at Monroe. What is in the building, how to book and what it costs.",
    metaDescription:
      "The Club at Marlboro opens two indoor padel courts in Morganville, NJ on November 2, 2026. Hours, how to book on CourtReserve, court prices and nearby clubs.",
    status: "draft",
    // TODO(Dito): set both dates on the day it goes live (pinnedUntil = publishDate + 30 days).
    publishDate: "2026-11-02",
    pinnedUntil: "2026-12-02",
    factsCheckedDate: "2026-10-21",
    author: "Dito Calderón",
    // Only renderings exist so far, and theclubnj.com/marlboro serves none we can
    // credit (its images are placeholders), so the hero is our own court drawing.
    // TODO(photos): when the club sends real court photos, put them in
    // public/images/spotlight/the-club-at-marlboro-<n>.webp, set hero.src and
    // fill `photos`, each with credit "Photo courtesy of The Club at Marlboro".
    // A rendering may be used only with isRendering: true and a credit line.
    hero: {
      src: null,
      alt: "Drawing of a padel court in navy and green, standing in for photos of The Club at Marlboro",
    },
    photos: [],
    facts: [
      { label: "Address", value: "414 Texas Road, Morganville (Marlboro Township), NJ 07751" },
      { label: "Padel courts", value: "2 regulation indoor courts" },
      { label: "Courts open", value: "November 2, 2026" },
      { label: "Grand opening", value: "Planned for December 2026 or January 2027" },
      { label: "Hours", value: "7 AM to 11 PM weekdays, 8 AM to 8 PM weekends" },
      { label: "Booking", value: "CourtReserve (Marlboro has its own page)" },
      { label: "Court time", value: "$30 per player per hour, $20 for members (club website, Oct 2026)" },
    ],
    body: [
      {
        paragraphs: [
          "The Club at Marlboro opens its two indoor padel courts for play on November 2, 2026, at 414 Texas Road in Morganville, in Marlboro Township. It is the second New Jersey club from the team behind [The Club at Monroe](/courts/the-club-at-monroe), and the club told us it plans a grand opening for December 2026 or January 2027.",
          "If padel is new to you, it is a doubles racket sport played on an enclosed court about a third the size of a tennis court, and the ball stays in play after it bounces off the glass walls. Scoring is the same as tennis and every serve is underhand. Our [how to play guide](/how-to-play) covers the rest.",
        ],
      },
      // TODO(quote): add one short quote from the club (Jessica Gordimer or the
      // owners), in their words and approved by them, as its own paragraph here.
      {
        heading: "What is in the building",
        paragraphs: [
          "The building is 35,000 square feet. Along with the two regulation padel courts, it has nine climate-controlled pickleball courts, three Trackman iO golf simulators and a recovery suite with red light therapy, cryotherapy, Normatec compression and an infrared sauna. Parking is free on site, and the club says the front desk rents rackets, paddles, balls and golf clubs, so you can try padel before you buy any gear.",
          "The club gave us its planned hours: 7 AM to 11 PM on weekdays and 8 AM to 8 PM on Saturdays and Sundays.",
        ],
      },
      {
        heading: "How to book a court",
        paragraphs: [
          "Courts are booked on CourtReserve, the same system The Club at Monroe uses. Marlboro has its own CourtReserve page, separate from Monroe's, so check that you are on the Marlboro page before you book. You do not need a membership to rent a court or join a program. Members pay less and get priority booking.",
          "Founding membership pre-registration is open now through the club's CourtReserve membership page. If you want a court in the first weeks after November 2, pre-registering is the simplest way to hear when booking opens.",
        ],
      },
      {
        heading: "What it costs",
        paragraphs: [
          // TODO(pricing): confirm with the club that these rates apply at
          // Marlboro, and add founding membership pricing once it is published.
          "The club's padel page lists court time at $30 per player per hour for non-members and $20 per player per hour for members. For four non-members that comes to $120 for an hour on court, or $80 for four members. A padel membership is listed at $400 a year, and the club says it is valid at both Monroe and Marlboro. We took these prices from the club's website in October 2026, and opening offers can change them, so check the booking page before you play.",
          "For new players, the club's padel page lists Padel 101, a 60-minute introduction to the basics, along with clinics, open play sessions where players are matched by level, leagues and private or small group lessons. The page covers both locations, so ask the front desk which programs start at Marlboro in November.",
        ],
      },
      {
        heading: "Where it sits among New Jersey clubs",
        paragraphs: [
          // Counts and straight-line distances computed from src/data/padel-courts.ts
          // on 2026-10-21 (Marlboro pin from the Census geocoder; Monroe from the
          // OpenStreetMap position of Farrington Blvd). Recheck before publishing.
          "Our directory lists [nine padel clubs in New Jersey](/new-jersey). Seven are open today with 30 courts between them, one is temporarily closed and Marlboro is the one coming soon. The closest open clubs to Marlboro are [Nicol Rackets](/courts/nicol-rackets) at Fort Monmouth in Oceanport, about 13 miles east in a straight line with seven courts, and [The Club at Monroe](/courts/the-club-at-monroe), about 11 miles southwest with three indoor courts. [Access Padel](/courts/access-padel) in Hillsborough is about 22 miles away.",
          "For players in western Monmouth County, that puts two indoor courts much closer to home, which helps most in the winter months when outdoor courts in the state are cold or closed. Because both courts are indoors, evening play does not depend on the weather either.",
        ],
      },
      {
        heading: "Before you go",
        paragraphs: [
          "The club has only shared renderings so far, so the picture at the top of this page is our own court drawing. We will add photos of the finished courts once the club sends them. The address is 414 Texas Road, Morganville, NJ 07751, and the club's main phone number is (732) 400-1755.",
        ],
      },
    ],
    ctas: [
      {
        kind: "book",
        label: "Book a court",
        href: "https://app.courtreserve.com/online/publicbookings/21858",
        note: "CourtReserve, Marlboro location",
      },
      {
        kind: "membership",
        label: "Pre-register for a founding membership",
        href: "https://app.courtreserve.com/Online/Memberships/Public/21858",
      },
      { kind: "website", label: "Club website", href: "https://theclubnj.com/marlboro/" },
      { kind: "instagram", label: "Instagram", href: "https://www.instagram.com/theclub.nj/", note: "@theclub.nj" },
      { kind: "phone", label: "(732) 400-1755", href: "tel:+17324001755", note: "Main line for The Club NJ" },
      {
        kind: "directions",
        label: "Directions",
        href: "https://www.google.com/maps/dir/?api=1&destination=414%20Texas%20Road%2C%20Morganville%2C%20NJ%2007751",
      },
    ],
    disclosure:
      "This Club Spotlight is paid for by The Club at Marlboro. We wrote it from facts we checked with the club, and payment does not change where any club appears in our directory.",
  },
];
