import Link from "next/link";
import type { Metadata } from "next";
import { padelCourts } from "@/data/padel-courts";
import { generateSlug } from "@/lib/court-adapter";

const TITLE = "New Padel Clubs in the US: October 2026 Roundup";
const DESCRIPTION =
  "Every US padel club that opened, joined our directory or was announced since our July roundup, plus the listings we removed and why.";
const URL = "https://www.padelcourtsfinder.com/blog/new-padel-clubs-october-2026";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const STATE_NAMES: Record<string, string> = {
  AZ: "Arizona",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DC: "Washington, DC",
  FL: "Florida",
  GA: "Georgia",
  IA: "Iowa",
  ID: "Idaho",
  IN: "Indiana",
  KS: "Kansas",
  MA: "Massachusetts",
  NC: "North Carolina",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  OH: "Ohio",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VA: "Virginia",
  WA: "Washington",
  WI: "Wisconsin",
};

/**
 * Snapshot of the changes since the July 2026 edition (published 2026-07-05),
 * sourced from src/data/changelog.ts and the git history of padel-courts.ts.
 * Clubs are referenced by id so a later rename keeps the link working; the
 * lines are written from each club's own data entry.
 */
type Entry = { id: number; courts: string; note: string };

// Were on our coming-soon list, now open
const NOW_OPEN: Entry[] = [
  { id: 356, courts: "4 outdoor courts", note: "Opened in April 2026 in downtown Mesa, though our July list still had it as coming soon. Open play sessions are $15 and memberships start at $40 a month." },
  { id: 360, courts: "8 outdoor courts", note: "Open 7am to midnight on NW 42nd Avenue. Court rental is $120 an hour, or $90 an hour between 11am and 5pm, booked on Playtomic." },
  { id: 363, courts: "6 indoor courts", note: "One of the six is a singles court, and the club adds saunas, cold plunges, Pilates and a recovery room. Open daily 7am to 10pm." },
  { id: 366, courts: "4 outdoor courts", note: "Panoramic doubles courts on Lawrenceville Highway, with clinics and Mexicano tournaments booked through Playtomic." },
  { id: 412, courts: "3 outdoor courts", note: "Seasonal panoramic courts on Pier 4 Boulevard next to five pickleball courts. Part of the site becomes a skating rink in winter." },
  { id: 368, courts: "5 indoor courts", note: "On Berry Street near McCarren Park, with a juice bar on site." },
  { id: 450, courts: "4 outdoor courts", note: "Panoramic courts in Christopher Morley Park on Long Island's North Shore. The club says a larger facility is planned for 2027." },
  { id: 370, courts: "3 indoor courts", note: "Two panoramic doubles courts and a singles court, open from 5:30am on weekdays, with a conditioning gym." },
  { id: 452, courts: "3 courts (2 outdoor, 1 indoor)", note: "The first padel courts in Newport County, open year-round. The indoor court has a slightly lower ceiling and the club calls it its Development Court." },
  { id: 371, courts: "12 outdoor courts", note: "The largest club in Austin by court count. Four of the courts are covered and one is a singles court." },
  { id: 372, courts: "5 indoor courts", note: "Opened in October 2026 in North Austin, with air-conditioned courts, a cafe, a Finnish sauna and cold plunges." },
  { id: 375, courts: "5 indoor courts", note: "Soft opening in August and a grand opening on September 19. A 90-minute session is $35 without a membership." },
  { id: 459, courts: "8 indoor courts", note: "Opened in September 2026 on West Brown Deer Road. Booking and club access run through the Epic Padel app." },
];

// New to the directory and open
const NEW_OPEN: Entry[] = [
  { id: 468, courts: "5 indoor courts", note: "Opened in summer 2026 with five pickleball courts next to the padel courts. Membership is $129 a month and members pay $15 per player for padel." },
  { id: 483, courts: "6 outdoor courts", note: "At Creekside Socials next to the SAP Center and Diridon Station. It soft-opened in July and moved to full operations in September." },
  { id: 466, courts: "5 indoor courts", note: "The operator's first club in Colorado, in Five Points. Anyone can book, and optional memberships also cover the Padel Haus clubs in Brooklyn, Nashville and Atlanta." },
  { id: 496, courts: "6 indoor courts", note: "Opened in August 2026 in Sun Valley, just south of Empower Field, under 32-foot ceilings. It is the first US club from Studio Arenna, which runs padel clubs in Mexico." },
  { id: 495, courts: "5 courts (3 covered, 2 open-air)", note: "Padel and 6v6 soccer on the Wynwood and Allapattah edge, open to the public from 7am to 1am daily, with courts booked on Playtomic in 90-minute slots." },
  { id: 448, courts: "2 outdoor courts", note: "The first padel club on Florida's Space Coast, next to clay tennis courts, with clinics and socials booked through the Wakit app." },
  { id: 489, courts: "2 courts (1 indoor, 1 outdoor)", note: "Iowa's first padel club, just south of Grays Lake near downtown Des Moines. The public can book drop-in play through the OpenCourt app." },
  { id: 492, courts: "1 outdoor court", note: "A private club that added a glass-walled outdoor court in 2026. Members and their guests only." },
  { id: 498, courts: "2 outdoor courts", note: "A private club on the NC State campus with a new racquet complex. Padel is for members only." },
  { id: 497, courts: "3 indoor courts", note: "An indoor tennis club in Bergen County that opened glass-walled padel courts with its fall session in September. The public can book, and there are clinics and round robins." },
  { id: 462, courts: "3 outdoor courts", note: "New Mexico's first padel courts, opened in October 2025 at a private racquet club. Court time is included with membership." },
  { id: 499, courts: "5 indoor courts", note: "Opened on October 1, 2026 in the former Long Island Sports Complex, with four panoramic doubles courts and a singles court under 40-foot ceilings." },
  { id: 493, courts: "2 outdoor courts", note: "Opened in late summer 2026 at Trophy Lakes, next to the aqua park. Anyone can book, and memberships add priority access and lower rates." },
  { id: 494, courts: "9 outdoor courts", note: "A padel-only club on El Paso's far East Side with lit panoramic courts and a full bar. Courts are booked on Playtomic." },
  { id: 444, courts: "5 outdoor courts", note: "A Latino-owned club in north Laredo that opened in December 2025, with a bar and restaurant on site." },
  { id: 476, courts: "9 courts (6 indoor, 3 outdoor)", note: "An East Austin club that is open daily and takes bookings through Playtomic. Indoor pickleball is planned." },
  { id: 479, courts: "5 indoor courts", note: "The operator's second club in the Houston area, after its outdoor club on Cutten Road." },
  { id: 480, courts: "6 indoor courts", note: "Opened on July 27, 2026 near The Woodlands with climate-controlled courts and public bookings online." },
  { id: 482, courts: "2 outdoor courts", note: "A private club. Founding memberships are $99.99 a month." },
  { id: 464, courts: "4 outdoor courts", note: "A padel-only club on the north side of the Houston metro, listed by its owner, with room on site to grow to eleven courts." },
  { id: 445, courts: "5 indoor courts", note: "Utah County's first dedicated padel facility, opened in early 2026." },
  { id: 446, courts: "5 courts (4 indoor, 1 outdoor)", note: "On Salt Lake City's west side, with what the club describes as Utah's first outdoor court, plus a gym, sauna and cafe." },
  { id: 447, courts: "4 courts", note: "Opened on June 13, 2026 with six pickleball and two tennis courts alongside padel, booked through the LVBL app." },
];

// Announced clubs added to the coming-soon list since July
const NEW_COMING_SOON: Entry[] = [
  { id: 484, courts: "court count not published", note: "An outdoor club planned for Mission Valley. No street address or opening date yet." },
  { id: 500, courts: "2 outdoor courts", note: "Lighted courts near the waterfront and I-880, listed by its owner, with a soft opening on November 1, 2026." },
  { id: 451, courts: "7 courts (5 indoor, 2 outdoor)", note: "Converting the former Great Divide Brewing taproom in RiNo. The club site says October 2026, and its Playtomic page lists activities from November 12." },
  { id: 490, courts: "5 indoor courts", note: "Thirteen courts in all, with pickleball and glass squash next to the padel courts. The opening has moved to November." },
  { id: 465, courts: "7 indoor courts", note: "Calls itself Greater Hartford's first dedicated padel club. It is still finalizing its site and is aiming for the first quarter of 2027." },
  { id: 469, courts: "court count not published", note: "Under construction in East Potomac Park. It had expected to open in summer 2026, and its website still says coming soon." },
  { id: 491, courts: "5 outdoor courts", note: "Under construction on Grand Avenue, with four of the courts under a canopy. Membership is by application." },
  { id: 474, courts: "2 courts", note: "A private club inside the Bath + Racquet residences. Local coverage in June projected a December 2026 opening." },
  { id: 472, courts: "court count not published", note: "A private members club planned for South Tampa. No opening date yet." },
  { id: 454, courts: "5 indoor courts", note: "At 8313 Baycenter Road, according to the operator's July lease announcement. No opening date confirmed." },
  { id: 473, courts: "court count not published", note: "Announced by the operator of Conquer Padel in Tempe, Arizona. No address or opening date yet." },
  { id: 487, courts: "court count not published", note: "A dining, shopping and sports complex on International Drive with padel and pickleball. The opening date is not confirmed, and the address comes from press reports." },
  { id: 463, courts: "court count not published", note: "Selling founding memberships ahead of launch. The location has not been announced." },
  { id: 501, courts: "4 indoor courts", note: "On East Watertower Street, serving Boise and the Treasure Valley. The club says it opens in January 2027, and it is the first Idaho club on our list." },
  { id: 502, courts: "6 indoor courts", note: "M Padel Noblesville, inside the tennis center on Olio Road next to indoor tennis and pickleball. No opening date yet." },
  { id: 460, courts: "6 courts (4 indoor, 2 outdoor)", note: "Under construction in downtown Overland Park, about 20,000 square feet with a small restaurant upstairs." },
  { id: 486, courts: "2 indoor courts", note: "From the team behind The Club at Monroe, with nine pickleball courts and golf simulators in the same building. The club told us its courts open for play on November 2, with a grand opening planned for December or January." },
  { id: 503, courts: "16 courts", note: "A 44-acre racquet campus under construction in Brier Creek on city-owned land. The club says it opens in 2028." },
  { id: 453, courts: "5 courts", note: "An established tennis, pickleball and badminton facility north of Columbus that is adding padel." },
  { id: 488, courts: "2 indoor courts", note: "A members-only club under construction on the Southside, with 12 pickleball courts and a pool. Planned for fall 2026." },
  { id: 481, courts: "3 courts", note: "We had it as open, then moved it back to coming soon in October because its own site says it opens in fall 2026." },
  { id: 467, courts: "6 indoor courts", note: "Planned for the Design District as the operator's first club in Texas. Local press expected late 2026, and the club has not published a date." },
  { id: 475, courts: "court count not confirmed", note: "Its booking page lists it as coming soon, with memberships from $100 a month." },
  { id: 478, courts: "court count not published", note: "An indoor club taking founding members. No address or opening date yet." },
  { id: 477, courts: "6 outdoor courts", note: "A rooftop club planned on the parking garage at 601 East 5th Street. The Austin City Council approved the lease in August 2026." },
  { id: 470, courts: "6 outdoor courts", note: "Fairfax County approved the courts in December 2025 as a temporary use of about five years. No opening date yet." },
  { id: 461, courts: "7 indoor courts", note: "Turning the former Beach Cinema Alehouse into Hampton Roads' first indoor padel venue. The buyers are aiming for early 2027." },
  { id: 456, courts: "5 indoor courts", note: "A Washington state environmental review from January 2026 describes the five courts. No opening date yet." },
  { id: 485, courts: "3 courts", note: "Submitted by the club. The opening is planned for June 2027 and the location has not been announced." },
];

// Coming soon before July and still not open
const OLDER_PIPELINE = [357, 359, 362, 364, 373, 175, 405];

// Seasonal venues added in July
const SEASONAL = { jam: 455, padelX: 449 };

// Other status changes
const STATUS = {
  bethesda: 80,
  austinPadelCenter: 309,
  movedBack: [175, 405, 481],
  tempClosed: [140, 267, 369, 137, 79],
};

// Removals since July, counted from changelog.ts (2026-07-10 to 2026-10-13)
const REMOVED = { total: 33, notPadel: 17, platformTennis: 8, closedOrUnconfirmed: 13, duplicates: 3 };

// Coming-soon count when the July edition was published (3a3319d)
const JULY_PIPELINE = 17;

const byId = new Map(padelCourts.map((c) => [c.id, c]));
const isOpen = (s?: string) => !s || s === "open";
// Some chain listings are named "Brand - Location"; show them without the dash
const displayName = (name: string) => name.replace(/\s+-\s+/g, " ");

function ClubLink({ id, label }: { id: number; label?: string }) {
  const club = byId.get(id);
  if (!club) return null;
  return (
    <Link href={`/courts/${generateSlug(club.name)}`} className="text-padel-green hover:underline font-medium">
      {label ?? displayName(club.name)}
    </Link>
  );
}

function ClubItem({ entry }: { entry: Entry }) {
  const club = byId.get(entry.id);
  if (!club) return null;
  return (
    <li className="bg-white border border-stone-200 rounded-lg p-4">
      <div className="flex flex-wrap items-baseline gap-x-2">
        <ClubLink id={entry.id} />
        <span className="text-stone-500 text-sm">
          {club.city}, {club.state} &middot; {entry.courts}
        </span>
      </div>
      <p className="text-stone-700 text-sm leading-relaxed mt-1">{entry.note}</p>
    </li>
  );
}

function groupByState(entries: Entry[]) {
  const map = new Map<string, Entry[]>();
  entries.forEach((e) => {
    const club = byId.get(e.id);
    if (!club) return;
    const list = map.get(club.state) ?? [];
    list.push(e);
    map.set(club.state, list);
  });
  return [...map.entries()].sort(([a], [b]) => (STATE_NAMES[a] ?? a).localeCompare(STATE_NAMES[b] ?? b));
}

function InlineList({ ids }: { ids: number[] }) {
  const present = ids.filter((id) => byId.has(id));
  return (
    <>
      {present.map((id, i) => (
        <span key={id}>
          <ClubLink id={id} />
          {i < present.length - 2 ? ", " : i === present.length - 2 ? " and " : ""}
        </span>
      ))}
    </>
  );
}

export default function NewPadelClubsOctober2026Page() {
  const openClubs = padelCourts.filter((c) => isOpen(c.status));
  const openStates = new Set(openClubs.map((c) => c.state)).size;
  const comingSoon = padelCourts.filter((c) => c.status === "coming_soon");
  const csByState = new Map<string, number>();
  comingSoon.forEach((c) => csByState.set(c.state, (csByState.get(c.state) ?? 0) + 1));
  const csFlorida = csByState.get("FL") ?? 0;
  const csTexas = csByState.get("TX") ?? 0;

  const openedCount = NOW_OPEN.length + NEW_OPEN.length;
  const comingSoonGroups = groupByState(NEW_COMING_SOON);
  const olderPipeline = OLDER_PIPELINE.filter((id) => byId.get(id)?.status === "coming_soon");

  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: "2026-10-15T00:00:00Z",
    dateModified: "2026-10-15T00:00:00Z",
    author: { "@type": "Organization", name: "Padel Courts Finder", url: "https://www.padelcourtsfinder.com" },
    publisher: {
      "@type": "Organization",
      name: "Padel Courts Finder",
      logo: { "@type": "ImageObject", url: "https://www.padelcourtsfinder.com/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />

      <div className="h-1 bg-padel-green" />

      {/* Hero */}
      <header className="grain bg-court">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative">
          <div className="mb-5">
            <Link href="/blog" className="text-stone-400 hover:text-turf text-sm">&larr; Back to Blog</Link>
          </div>
          <span className="inline-block bg-padel-green text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">News</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{TITLE}</h1>
          <p className="text-lg text-stone-400 mt-3">
            The clubs that opened, joined the directory or were announced since our July roundup
          </p>
          <div className="text-sm text-stone-500 mt-4">
            <span>October 15, 2026</span>
            <span className="mx-2">&bull;</span>
            <span>8 min read</span>
          </div>
          <div className="text-sm text-stone-500 mt-1">By the Padel Courts Finder editorial team</div>
        </div>
      </header>

      <article>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          {/* Intro */}
          <section className="space-y-4">
            <p className="text-stone-700 leading-relaxed">
              We skipped the August and September roundups, so this edition covers everything since our{" "}
              <Link href="/blog/new-padel-clubs-july-2026" className="text-padel-green hover:underline">July roundup</Link>.
              In that time <strong>{openedCount} clubs</strong> either opened or joined the directory as open clubs,
              and <strong>{NEW_COMING_SOON.length} announced clubs</strong> went onto our coming-soon list. The
              directory now lists <strong>{openClubs.length} open clubs in {openStates} states</strong>, with{" "}
              <strong>{comingSoon.length} more on the way</strong>.
            </p>
            <p className="text-stone-700 leading-relaxed">
              We also removed {REMOVED.total} listings that should not have been there. Of those, {REMOVED.notPadel}
              had no padel courts at all, and {REMOVED.platformTennis} of those were platform tennis clubs that
              booking apps file under padel. Another {REMOVED.closedOrUnconfirmed} had closed, stopped offering
              padel, never opened or could not be confirmed to exist, and {REMOVED.duplicates} were duplicates. A
              directory is only useful if the clubs in it are real, so each removal is explained in our{" "}
              <Link href="/changelog" className="text-padel-green hover:underline">changelog</Link>.
            </p>
          </section>

          {/* Just opened */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Just opened</h2>
            <h3 className="font-semibold text-foreground mb-2">Off our coming-soon list and now open</h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              These {NOW_OPEN.length} clubs were on our coming-soon list and are now open.
            </p>
            <ul className="space-y-3">
              {NOW_OPEN.map((e) => (
                <ClubItem key={e.id} entry={e} />
              ))}
            </ul>

            <h3 className="font-semibold text-foreground mt-8 mb-2">New to the directory</h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              These {NEW_OPEN.length} open clubs are new to the directory. Many opened this year, and where the club
              gives an opening date we include it. A few, like Laredo Padel Club and Forked Lightning, have been open
              longer and were simply missing from our list.
            </p>
            <ul className="space-y-3">
              {NEW_OPEN.map((e) => (
                <ClubItem key={e.id} entry={e} />
              ))}
            </ul>

            <p className="text-stone-700 leading-relaxed mt-6">
              Two summer venues also joined in July. <ClubLink id={SEASONAL.jam} /> in Bellevue brought the Seattle
              area its first padel courts, with a season that its listing says ran from June to the end of
              September and a permanent Seattle home planned. The{" "}
              <ClubLink id={SEASONAL.padelX} label="Padel X Summer Club" /> pop-up on Lincoln Road in Miami Beach listed dates of June 20 to September 15. Check with both before you go.
            </p>
          </section>

          {/* Other status changes */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Other status changes</h2>
            <p className="text-stone-700 leading-relaxed">
              <ClubLink id={STATUS.bethesda} /> has reopened at 5455 Westbard Ave, and{" "}
              <ClubLink id={STATUS.austinPadelCenter} /> moved from its pop-up into its permanent building on Sheldon
              Cove in August. Three clubs went back to coming soon after primary sources showed they had not opened
              yet: <InlineList ids={STATUS.movedBack} />. Five more are marked temporarily closed until we can confirm
              they are operating: <InlineList ids={STATUS.tempClosed} />.
            </p>
          </section>

          {/* Coming soon */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Coming soon</h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              These {NEW_COMING_SOON.length} announced clubs joined our coming-soon list since July. We only give an
              opening date when the club, its booking page or local coverage has published one.
            </p>
            <div className="space-y-8">
              {comingSoonGroups.map(([stateCode, entries]) => (
                <div key={stateCode}>
                  <h3 className="font-semibold text-foreground mb-3">
                    {STATE_NAMES[stateCode] ?? stateCode}
                    <span className="text-stone-400 font-normal text-sm ml-2">
                      {entries.length} {entries.length === 1 ? "club" : "clubs"}
                    </span>
                  </h3>
                  <ul className="space-y-3">
                    {entries.map((e) => (
                      <ClubItem key={e.id} entry={e} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {olderPipeline.length > 0 && (
              <div className="mt-8">
                <h3 className="font-semibold text-foreground mb-3">Still on the way from earlier lists</h3>
                <div className="flex flex-wrap gap-2">
                  {olderPipeline.map((id) => {
                    const club = byId.get(id)!;
                    return (
                      <Link
                        key={id}
                        href={`/courts/${generateSlug(club.name)}`}
                        className="inline-flex items-baseline gap-1.5 bg-white border border-stone-200 rounded-full px-3.5 py-1.5 text-sm hover:border-padel-green hover:text-padel-green transition-colors"
                      >
                        <span className="font-medium">{displayName(club.name)}</span>
                        <span className="text-stone-400 text-xs">{club.city}, {club.state}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </section>

          {/* The number to watch */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">The number to watch</h2>
            <div className="bg-white border border-stone-200 rounded-xl p-6">
              <div className="text-4xl font-bold text-padel-green">{comingSoon.length}</div>
              <p className="text-stone-700 leading-relaxed mt-2">
                That is how many announced clubs are on our coming-soon list today, up from {JULY_PIPELINE} when we
                published the July roundup. Part of the jump is our own catch-up, since some of these were announced
                months before we listed them (local press reported the Padel Haus Dallas plans in October 2025). Florida has the
                most clubs on the way with {csFlorida}, followed by Texas with {csTexas}.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="bg-white border border-stone-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Opening a club? List it free</h2>
              <p className="text-stone-700 leading-relaxed">
                <Link href="/list-your-court" className="text-padel-green hover:underline font-medium">Send us your club</Link>{" "}
                and it will be in the next roundup. Every change we make to the directory is logged in our{" "}
                <Link href="/changelog" className="text-padel-green hover:underline">changelog</Link>, and for the
                bigger picture of where American padel stands, read our{" "}
                <Link href="/state-of-us-padel-2026" className="text-padel-green hover:underline">State of US Padel 2026</Link> report.
              </p>
            </div>
          </section>
        </div>

        {/* Keep Reading */}
        <section className="grain bg-court mt-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-white mb-6">Keep Reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/changelog" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Directory changelog</div>
                <p className="text-stone-400 text-sm mt-1">Every change we make is logged here</p>
              </Link>
              <Link href="/state-of-us-padel-2026" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">State of US Padel 2026</div>
                <p className="text-stone-400 text-sm mt-1">The data report on American padel</p>
              </Link>
              <Link href="/blog/new-padel-clubs-july-2026" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">July 2026 roundup</div>
                <p className="text-stone-400 text-sm mt-1">The previous edition</p>
              </Link>
              <Link href="/search" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Find a court near you</div>
                <p className="text-stone-400 text-sm mt-1">{openClubs.length} open clubs in {openStates} states</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
