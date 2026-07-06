import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllAdaptedCourts } from "@/lib/court-adapter";
import { getStates, getSiteStats } from "@/lib/site-structure";
import { CourtsConstellation } from "@/components/courts-constellation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The State of US Padel 2026: Clubs, Courts & Growth Data",
  description: "Original data on the American padel boom: club counts by state and city, indoor vs outdoor split, the construction pipeline, and the biggest US metros still without a court.",
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/state-of-us-padel-2026",
  },
  openGraph: {
    title: "The State of US Padel 2026",
    description: "Original data on the American padel boom — club counts by state, the construction pipeline, and the metros still without a court.",
    url: "https://www.padelcourtsfinder.com/state-of-us-padel-2026",
    siteName: "Padel Courts Finder",
    type: "article",
    images: [
      {
        url: "https://www.padelcourtsfinder.com/og/state-of-us-padel-2026.png",
        width: 1200,
        height: 630,
        alt: "The State of US Padel 2026 — original data from Padel Courts Finder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The State of US Padel 2026",
    description: "Original data on the American padel boom, from the most comprehensive US padel directory.",
    images: ["https://www.padelcourtsfinder.com/og/state-of-us-padel-2026.png"],
  },
};

// Principal city centers used for the coverage-gap analysis
const METROS: Array<{ name: string; lat: number; lng: number }> = [
  { name: "New York", lat: 40.71, lng: -74.01 },
  { name: "Los Angeles", lat: 34.05, lng: -118.24 },
  { name: "Chicago", lat: 41.88, lng: -87.63 },
  { name: "Houston", lat: 29.76, lng: -95.37 },
  { name: "Phoenix", lat: 33.45, lng: -112.07 },
  { name: "Philadelphia", lat: 39.95, lng: -75.17 },
  { name: "San Antonio", lat: 29.42, lng: -98.49 },
  { name: "San Diego", lat: 32.72, lng: -117.16 },
  { name: "Dallas", lat: 32.78, lng: -96.8 },
  { name: "Austin", lat: 30.27, lng: -97.74 },
  { name: "Jacksonville", lat: 30.33, lng: -81.66 },
  { name: "San Jose", lat: 37.34, lng: -121.89 },
  { name: "Columbus", lat: 39.96, lng: -83.0 },
  { name: "Charlotte", lat: 35.23, lng: -80.84 },
  { name: "Indianapolis", lat: 39.77, lng: -86.16 },
  { name: "San Francisco", lat: 37.77, lng: -122.42 },
  { name: "Seattle", lat: 47.61, lng: -122.33 },
  { name: "Denver", lat: 39.74, lng: -104.99 },
  { name: "Nashville", lat: 36.16, lng: -86.78 },
  { name: "Detroit", lat: 42.33, lng: -83.05 },
  { name: "Boston", lat: 42.36, lng: -71.06 },
  { name: "Portland", lat: 45.52, lng: -122.68 },
  { name: "Las Vegas", lat: 36.17, lng: -115.14 },
  { name: "Memphis", lat: 35.15, lng: -90.05 },
  { name: "Baltimore", lat: 39.29, lng: -76.61 },
  { name: "Milwaukee", lat: 43.04, lng: -87.91 },
  { name: "Kansas City", lat: 39.1, lng: -94.58 },
  { name: "Sacramento", lat: 38.58, lng: -121.49 },
  { name: "Atlanta", lat: 33.75, lng: -84.39 },
  { name: "Miami", lat: 25.76, lng: -80.19 },
  { name: "Minneapolis", lat: 44.98, lng: -93.27 },
  { name: "New Orleans", lat: 29.95, lng: -90.07 },
  { name: "Cleveland", lat: 41.5, lng: -81.69 },
  { name: "Pittsburgh", lat: 40.44, lng: -80.0 },
  { name: "St. Louis", lat: 38.63, lng: -90.2 },
  { name: "Cincinnati", lat: 39.1, lng: -84.51 },
  { name: "Tampa", lat: 27.95, lng: -82.46 },
  { name: "Salt Lake City", lat: 40.76, lng: -111.89 },
  { name: "Albuquerque", lat: 35.08, lng: -106.65 },
  { name: "Oklahoma City", lat: 35.47, lng: -97.52 },
  { name: "Louisville", lat: 38.25, lng: -85.76 },
  { name: "Richmond", lat: 37.54, lng: -77.44 },
  { name: "Raleigh", lat: 35.78, lng: -78.64 },
  { name: "Buffalo", lat: 42.89, lng: -78.88 },
  { name: "Fresno", lat: 36.75, lng: -119.77 },
  { name: "Omaha", lat: 41.26, lng: -95.93 },
  { name: "Birmingham", lat: 33.52, lng: -86.81 },
  { name: "Virginia Beach", lat: 36.85, lng: -75.98 },
  { name: "Hartford", lat: 41.76, lng: -72.67 },
];

function haversineMiles(lat1: number, lng1: number, lat2: number, lng2: number) {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const R = 3958.8;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

export default function StateOfPadelPage() {
  const stats = getSiteStats();
  const states = getStates();
  const clubs = getAllAdaptedCourts();

  // Facility numbers (only where data exists — no estimates)
  const withCourtCounts = clubs.filter((c) => c.facility.totalCourts > 0);
  const totalCourts = withCourtCounts.reduce((s, c) => s + c.facility.totalCourts, 0);
  const avgCourts = totalCourts / withCourtCounts.length;
  const biggest = [...withCourtCounts].sort((a, b) => b.facility.totalCourts - a.facility.totalCourts)[0];

  const typed = clubs.filter((c) => c.features.some((f) => /indoor|outdoor/i.test(f)));
  const indoorOnly = typed.filter((c) => c.features.includes("Indoor") && !c.features.includes("Indoor & Outdoor")).length;
  const outdoorOnly = typed.filter((c) => c.features.includes("Outdoor")).length;
  const mixed = typed.filter((c) => c.features.includes("Indoor & Outdoor")).length;

  const comingSoon = clubs.filter((c) => c.status === "coming_soon");
  const comingSoonStates = [...new Set(comingSoon.map((c) => c.address.stateCode))];

  const sortedStates = [...states].sort((a, b) => b.courtCount - a.courtCount);
  const topStates = sortedStates.slice(0, 10);
  const maxCount = topStates[0]?.courtCount || 1;

  // Coverage gaps: metros with no listed club within 25 miles
  const located = clubs.filter(
    (c) => Number.isFinite(c.coordinates?.latitude) && Number.isFinite(c.coordinates?.longitude)
  );
  const deserts = METROS.map((m) => {
    let nearest = Infinity;
    for (const c of located) {
      const d = haversineMiles(m.lat, m.lng, c.coordinates.latitude, c.coordinates.longitude);
      if (d < nearest) nearest = d;
    }
    return { ...m, nearest };
  })
    .filter((m) => m.nearest > 25)
    .sort((a, b) => b.nearest - a.nearest);

  const updated = "July 2026";

  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The State of US Padel 2026: Clubs, Courts & Growth Data",
    "description": "Original data on the American padel boom from the Padel Courts Finder directory.",
    "datePublished": "2026-07-05T00:00:00Z",
    "dateModified": "2026-07-05T00:00:00Z",
    "author": { "@type": "Organization", "name": "Padel Courts Finder", "url": "https://www.padelcourtsfinder.com" },
    "publisher": { "@type": "Organization", "name": "Padel Courts Finder", "logo": { "@type": "ImageObject", "url": "https://www.padelcourtsfinder.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.padelcourtsfinder.com/state-of-us-padel-2026" }
  };

  const datasetData = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "US Padel Club Directory",
    "description": `Structured data on ${stats.totalCourts}+ padel clubs across ${stats.totalStates} US states: locations, court counts, indoor/outdoor type, amenities, and operating status.`,
    "url": "https://www.padelcourtsfinder.com/state-of-us-padel-2026",
    "creator": { "@type": "Organization", "name": "Padel Courts Finder", "url": "https://www.padelcourtsfinder.com" },
    "temporalCoverage": "2026",
    "spatialCoverage": "United States",
    "license": "https://www.padelcourtsfinder.com/state-of-us-padel-2026#cite"
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetData) }} />

      <div className="h-1 bg-padel-green" />

      {/* Hero */}
      <header className="grain bg-court text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="font-mono text-sm text-turf mb-4">original data · updated {updated}</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
            The State of US Padel, 2026
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mb-10">
            What the most comprehensive directory of American padel clubs says about
            where the sport stands — and where it&apos;s going next. Free to cite with attribution.
          </p>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <dd className="font-display text-4xl font-bold tabular-nums">{stats.totalCourts}+</dd>
              <dt className="text-sm text-white/50 mt-1">clubs tracked</dt>
            </div>
            <div>
              <dd className="font-display text-4xl font-bold tabular-nums">{totalCourts.toLocaleString()}</dd>
              <dt className="text-sm text-white/50 mt-1">individual courts</dt>
            </div>
            <div>
              <dd className="font-display text-4xl font-bold tabular-nums">{stats.totalStates}</dd>
              <dt className="text-sm text-white/50 mt-1">states with padel</dt>
            </div>
            <div>
              <dd className="font-display text-4xl font-bold tabular-nums">{comingSoon.length}</dd>
              <dt className="text-sm text-white/50 mt-1">clubs in the pipeline</dt>
            </div>
          </dl>
        </div>
      </header>

      <article>
        {/* The sport, the boom */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
            The sport eating the world, arriving in America
          </h2>
          <div className="space-y-4 text-stone-700 leading-relaxed max-w-3xl">
            <p>
              Padel — the enclosed-court racquet sport that plays like tennis crossed with
              squash, always in doubles, with walls in play — has spent a decade becoming
              the sport everyone&apos;s uncle in Madrid already plays and everyone&apos;s gym
              buddy in Miami just discovered. Playtomic&apos;s Global Padel Report 2026 counts
              roughly <strong>58,300 courts, nearly 20,000 clubs, and 19.4 million players
              worldwide</strong>, with close to 5,000 new clubs and 8,000 new courts added in
              2025 alone — the numbers behind padel&apos;s standing claim to being the world&apos;s
              fastest-growing sport.
            </p>
            <p>
              The same report projects <strong>91,000 courts globally by 2028</strong> and
              singles out the United States as one of the sport&apos;s biggest long-term growth
              markets. The money agrees: the global padel equipment market has grown at a
              roughly 34% compound annual rate since 2019 per Playtomic&apos;s data, and the
              US-based Pro Padel League raised $15 million this year to build out its league
              calendar. Clubs themselves are evolving past courts-in-a-warehouse into what the
              industry calls &quot;third spaces&quot; — social clubs with coaching, cafes,
              recovery rooms, and leagues attached to the glass.
            </p>
            <p>
              Here&apos;s the runway math that makes operators salivate: our directory counts{" "}
              <strong>{totalCourts.toLocaleString()} padel courts in the continental US</strong> —
              about 2% of the world&apos;s supply, in the country with the world&apos;s largest
              sports economy. Industry estimates put American players around half a million by
              the end of 2025, up from fewer than 100,000 in 2023, and the US Padel Association
              projects 30,000 courts and 10 million players by 2030. Whether or not that
              projection lands, the direction is unambiguous — and the state-by-state data
              below shows exactly where it&apos;s happening.
            </p>
          </div>
        </section>

        {/* Map */}
        <section className="grain bg-court text-white border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
              Every club, mapped
            </h2>
            <p className="text-white/50 mb-8">
              {stats.totalCourts}+ clubs across {stats.totalCities}+ cities. Each light is a listed club.
            </p>
            <CourtsConstellation />
          </div>
        </section>

        {/* By state */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
            Where the clubs are
          </h2>
          <div className="space-y-4 text-stone-700 leading-relaxed max-w-3xl mb-8">
            <p>
              Florida and Texas account for {Math.round(((sortedStates[0]?.courtCount || 0) + (sortedStates[1]?.courtCount || 0)) / stats.totalCourts * 100)}% of
              all US padel clubs, and the concentration isn&apos;t an accident. Both states pair
              year-round outdoor weather with large Latin American and European communities who
              arrived already playing — Miami didn&apos;t need to be taught padel, it needed
              courts. Florida&apos;s {sortedStates[0]?.courtCount} clubs make it, on its own, one
              of the densest padel markets outside Europe and Latin America.
            </p>
            <p>
              The more interesting story is the long tail: {stats.totalStates} states now have
              at least one club, and the fastest relative growth is happening in places with no
              padel heritage at all — Utah, Ohio, the Carolinas — where a single ambitious
              operator can own an entire metro. That&apos;s the American pattern: the sport
              spreads club by club, not federation-down.
            </p>
          </div>
          <div className="space-y-3">
            {topStates.map((s) => (
              <div key={s.code} className="flex items-center gap-4">
                <div className="w-28 shrink-0 text-sm font-medium text-right">{s.name}</div>
                <div className="flex-1 h-8 bg-stone-100 rounded-lg overflow-hidden">
                  <div
                    className="h-full bg-padel-green rounded-lg flex items-center justify-end pr-2.5"
                    style={{ width: `${Math.max(8, (s.courtCount / maxCount) * 100)}%` }}
                  >
                    <span className="text-white text-xs font-semibold tabular-nums">{s.courtCount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-8">
            {sortedStates.slice(10).map((s) => (
              <Link
                key={s.code}
                href={`/${s.slug}`}
                className="inline-flex items-baseline gap-1.5 rounded-full border px-3 py-1.5 text-xs hover:border-padel-green hover:text-padel-green transition-colors"
              >
                {s.name} <span className="tabular-nums text-stone-400">{s.courtCount}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Facility profile */}
        <section className="border-y bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
              What an American padel club looks like
            </h2>
            <div className="grid sm:grid-cols-3 gap-5 mb-8">
              <div className="border border-stone-200 rounded-2xl p-6">
                <div className="font-display text-3xl font-bold text-padel-green tabular-nums">
                  {avgCourts.toFixed(1)}
                </div>
                <p className="text-sm text-stone-600 mt-1">
                  courts at the average club (of {withCourtCounts.length} clubs reporting court counts)
                </p>
              </div>
              <div className="border border-stone-200 rounded-2xl p-6">
                <div className="font-display text-3xl font-bold text-padel-green tabular-nums">
                  {Math.round((indoorOnly / (indoorOnly + outdoorOnly + mixed)) * 100)}%
                </div>
                <p className="text-sm text-stone-600 mt-1">
                  of clubs with known court types are fully indoor ({mixed} run both indoor and outdoor)
                </p>
              </div>
              <div className="border border-stone-200 rounded-2xl p-6">
                <div className="font-display text-3xl font-bold text-padel-green tabular-nums">
                  {biggest?.facility.totalCourts}
                </div>
                <p className="text-sm text-stone-600 mt-1">
                  courts at the largest listed facility — {biggest?.name} in {biggest?.address.city}, {biggest?.address.stateCode}
                </p>
              </div>
            </div>
            <div className="space-y-4 text-stone-600 leading-relaxed max-w-3xl">
              <p>
                The typical American padel club is a small, purpose-built facility rather than a
                bolt-on to an existing racquet club — and the indoor share reflects how much of
                the sport&apos;s growth is happening in year-round climate-controlled venues rather
                than the outdoor courts common in Spain and Latin America. Indoor-first is a
                distinctly American adaptation: it makes padel viable in Chicago winters and
                Houston summers alike, and it turns clubs into the year-round social businesses —
                cafes, lounges, leagues, recovery rooms — that the industry&apos;s
                &quot;third space&quot; playbook calls for.
              </p>
              <p>
                It also explains the economics. An indoor club is a real-estate play as much as a
                sports one — which is why the operators expanding fastest are chains signing
                warehouse leases, and why our{" "}
                <Link href="/blog/padel-court-cost" className="text-padel-green hover:underline">
                  construction cost data
                </Link>{" "}
                shows the building, not the court kit, dominating indoor budgets.
              </p>
            </div>
          </div>
        </section>

        {/* Pipeline */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
            The pipeline: {comingSoon.length} clubs on the way
          </h2>
          <div className="space-y-4 text-stone-700 leading-relaxed max-w-3xl mb-6">
            <p>
              Announced or under-construction clubs our directory currently tracks span{" "}
              {comingSoonStates.length} states — a leading indicator of where the next wave
              lands. Read the list below like a heat map of operator confidence: multiple
              pipeline clubs in a single metro means someone has run the numbers on demand
              and liked them.
            </p>
            <p>
              The pipeline also shows the market maturing from independents to chains —
              multi-location operators expanding along the Sun Belt and into second-tier
              metros, following the playbook Playtomic&apos;s report describes in Europe:
              prove the club model once, then replicate it regionally.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {comingSoon.map((c) => (
              <Link
                key={c.id}
                href={`/courts/${c.slug}`}
                className="inline-flex items-baseline gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs text-amber-900 hover:border-amber-500 transition-colors"
              >
                {c.name} <span className="text-amber-600">{c.address.city}, {c.address.stateCode}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Padel deserts */}
        <section className="border-y bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
              The padel deserts
            </h2>
            <div className="space-y-4 text-stone-700 leading-relaxed max-w-3xl mb-8">
              <p>
                Major US cities with no club in our directory within 25 miles of downtown —
                the clearest map of where the opportunity still sits for operators and
                investors. These are not small towns: each is a top-40 metro where, as far as
                our verified listings show, a padel-curious player has nowhere to play without
                a road trip. Know a club we&apos;re missing?{" "}
                <Link href="/list-your-court" className="text-padel-green hover:underline">
                  Tell us
                </Link>{" "}
                and we&apos;ll verify and update this analysis.
              </p>
              <p>
                If the USPA&apos;s 30,000-courts-by-2030 projection is even half right, most of
                these cities get their first club within a couple of years — and in every market
                the sport has entered so far, the first mover became the community&apos;s default
                home court.
              </p>
            </div>
            {deserts.length > 0 ? (
              <div className="overflow-x-auto rounded-xl border border-stone-200">
                <table className="w-full text-sm bg-white">
                  <thead>
                    <tr className="bg-stone-50 text-left">
                      <th className="p-3 font-semibold">City</th>
                      <th className="p-3 font-semibold">Nearest listed club</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deserts.map((d) => (
                      <tr key={d.name} className="border-t border-stone-100">
                        <td className="p-3 font-medium">{d.name}</td>
                        <td className="p-3 tabular-nums text-stone-600">
                          {Number.isFinite(d.nearest) ? `${Math.round(d.nearest)} miles away` : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-stone-600">
                Every major metro we track now has at least one club within 25 miles.
              </p>
            )}
            <p className="text-sm text-stone-500 mt-4 max-w-3xl">
              Considering one of these markets?{" "}
              <Link href="/blog/padel-court-cost" className="text-padel-green hover:underline">
                Our court construction cost guide
              </Link>{" "}
              covers the numbers, and{" "}
              <Link href="/list-your-court" className="text-padel-green hover:underline">
                listing a new club is free
              </Link>.
            </p>
          </div>
        </section>

        {/* Methodology + Cite */}
        <section id="cite" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 scroll-mt-24">
          <div className="grain relative bg-court text-white rounded-3xl overflow-hidden">
            <div className="relative px-6 py-12 md:px-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Methodology &amp; citing this data
              </h2>
              <p className="text-white/60 leading-relaxed mb-4 max-w-3xl">
                Padel Courts Finder maintains the underlying directory continuously: club
                listings are compiled from club websites, owner submissions, and public
                sources, then verified before publication. Counts on this page are computed
                live from the directory, so figures update as new clubs open. Where a data
                point is unknown for a club (court counts, indoor/outdoor type), it is
                excluded from that statistic rather than estimated.
              </p>
              <p className="text-white/60 leading-relaxed mb-4 max-w-3xl">
                Journalists and researchers are welcome to cite any figure with attribution
                and a link: <span className="text-white">&quot;Source: Padel Courts Finder, State of US
                Padel 2026&quot;</span>. Global figures referenced above come from Playtomic&apos;s
                Global Padel Report 2026 and US Padel Association projections, credited inline.
              </p>
              <p className="text-white/60 leading-relaxed mb-8 max-w-3xl">
                <span className="text-white font-semibold">Media:</span> you&apos;re welcome to run
                excerpts or a story built on this report with attribution and a link back. For
                custom cuts of the data, quotes, interviews, or the full dataset, get in touch —
                we typically turn press requests around same-day.
              </p>
              <Link
                href="/advertise#partner-form"
                className="inline-flex items-center gap-2 rounded-xl bg-padel-green hover:bg-padel-green-dark active:scale-[0.98] text-white font-semibold px-7 py-3.5 transition-all shadow-lg shadow-padel-green/25"
              >
                Press &amp; data inquiries
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
