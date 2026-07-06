import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import { getAllAdaptedCourts } from "@/lib/court-adapter";
import { GearStrip } from "@/components/gear-strip";
import type { Metadata } from "next";

import { UNIQUE_METROS, getPadelNearMetros } from "@/lib/metros";

/**
 * Long-tail pages for major metros without their own directory city page.
 * Everything is computed live from the directory, so when a city gets its
 * first club these pages automatically flip from "not yet" to "yes".
 */

export const dynamicParams = false;

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

function getCityData(slug: string) {
  const metro = UNIQUE_METROS.find((mm) => mm.slug === slug);
  if (!metro) return null;
  const clubs = getAllAdaptedCourts().filter(
    (c) => Number.isFinite(c.coordinates?.latitude) && Number.isFinite(c.coordinates?.longitude)
  );
  const withDistance = clubs
    .map((c) => ({
      club: c,
      distance: haversineMiles(metro.lat, metro.lng, c.coordinates.latitude, c.coordinates.longitude),
    }))
    .sort((a, b) => a.distance - b.distance);
  const open = withDistance.filter(
    (e) => e.club.status !== "coming_soon" && e.club.status !== "temporarily_closed"
  );
  const local = open.filter((e) => e.distance <= 25);
  const nearest = open.slice(0, 3);
  const pipeline = withDistance.filter((e) => e.club.status === "coming_soon" && e.distance <= 60);
  return { metro, local, nearest, pipeline };
}

export function generateStaticParams() {
  return getPadelNearMetros().map((mm) => ({ city: mm.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const data = getCityData(city);
  if (!data) return {};
  const { metro, local } = data;
  const has = local.length > 0;
  const title = `Padel Courts Near ${metro.name}, ${metro.stateCode} (2026): ${has ? "Where to Play" : "Closest Places to Play"}`;
  const description = has
    ? `Padel courts in and around ${metro.name}, ${metro.stateName} — clubs, courts, and how to book.`
    : `${metro.name} doesn't have a padel court yet. The closest places to play, what's in the construction pipeline, and how to get ${metro.name} on the padel map.`;
  return {
    title,
    description,
    alternates: { canonical: `https://www.padelcourtsfinder.com/padel-near/${city}` },
    openGraph: { title, description, url: `https://www.padelcourtsfinder.com/padel-near/${city}`, siteName: "Padel Courts Finder", type: "article" },
  };
}

export default async function PadelNearPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = getCityData(city);
  if (!data) notFound();
  const { metro, local, nearest, pipeline } = data;
  const has = local.length > 0;

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Are there padel courts in ${metro.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": has
            ? `Yes — our directory lists ${local.length} padel ${local.length === 1 ? "club" : "clubs"} within 25 miles of ${metro.name}.`
            : `Not yet. As of our latest data, there are no operational padel courts within 25 miles of downtown ${metro.name}. The nearest club is about ${Math.round(nearest[0]?.distance || 0)} miles away${pipeline.length > 0 ? `, and ${pipeline.length === 1 ? "a club is" : "clubs are"} in development nearby` : ""}.`,
        },
      },
      {
        "@type": "Question",
        "name": `Where is the closest padel court to ${metro.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": nearest[0]
            ? `${nearest[0].club.name} in ${nearest[0].club.address.city}, ${nearest[0].club.address.stateCode} — roughly ${Math.round(nearest[0].distance)} miles from downtown ${metro.name} in a straight line.`
            : "See our directory for the current nearest club.",
        },
      },
      {
        "@type": "Question",
        "name": `Is anyone building padel courts in ${metro.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": pipeline.length > 0
            ? `Yes — ${pipeline.map((p) => `${p.club.name} (${p.club.address.city})`).join(", ")} ${pipeline.length === 1 ? "is" : "are"} in development within 60 miles.`
            : `We don't currently track any announced padel projects within 60 miles of ${metro.name}. Know of one? Tell us and we'll verify and list it.`,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <div className="h-1 bg-padel-green" />

      {/* Hero */}
      <header className="grain bg-court text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <p className="font-mono text-sm text-turf mb-4">padel near {metro.name.toLowerCase()}</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {has
              ? `Padel courts near ${metro.name}`
              : `${metro.name} doesn’t have a padel court. Yet.`}
          </h1>
          <p className="text-lg text-white/60 max-w-xl">
            {has
              ? `Where to play in and around ${metro.name}, ${metro.stateName} — from our verified directory.`
              : `${metro.name} is one of the few major US metros our directory flags as a padel desert — no operational court within 25 miles. Here’s where to play in the meantime, and what’s coming.`}
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-12">
          {/* Local or nearest */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-5">
              {has ? `Clubs near ${metro.name}` : "The closest places to play"}
            </h2>
            <div className="space-y-4">
              {(has ? local : nearest).map(({ club, distance }) => (
                <Link
                  key={club.id}
                  href={`/courts/${club.slug}`}
                  className="group flex items-center justify-between gap-4 bg-white border border-stone-200 rounded-2xl p-5 hover:border-padel-green hover:shadow-md transition-all"
                >
                  <div>
                    <div className="font-display font-semibold group-hover:text-padel-green transition-colors">
                      {club.name}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-stone-500 mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {club.address.city}, {club.address.stateCode}
                      {club.facility.totalCourts > 0 && <span>· {club.facility.totalCourts} courts</span>}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-display font-bold tabular-nums text-padel-green">
                      ~{Math.round(distance)} mi
                    </div>
                    <div className="text-xs text-stone-400">straight-line</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Pipeline */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-3">
              {pipeline.length > 0 ? "Good news: courts are coming" : "Nothing announced — opportunity knocks"}
            </h2>
            {pipeline.length > 0 ? (
              <div className="space-y-3">
                {pipeline.map(({ club, distance }) => (
                  <Link
                    key={club.id}
                    href={`/courts/${club.slug}`}
                    className="flex items-center justify-between gap-4 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm hover:border-amber-500 transition-colors"
                  >
                    <span className="font-medium text-amber-900">
                      {club.name} — {club.address.city}, {club.address.stateCode}
                    </span>
                    <span className="text-amber-700 tabular-nums shrink-0">in build-out · ~{Math.round(distance)} mi</span>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-stone-600 leading-relaxed">
                We don&apos;t track any announced padel projects within 60 miles of {metro.name} —
                which, given how fast the sport is spreading (see{" "}
                <Link href="/state-of-us-padel-2026" className="text-padel-green hover:underline">
                  our State of US Padel report
                </Link>
                ), makes {metro.name} one of the most interesting open markets in the country.
                Thinking about building here?{" "}
                <Link href="/blog/padel-court-cost" className="text-padel-green hover:underline">
                  Here&apos;s what a court costs
                </Link>
                .
              </p>
            )}
          </section>

          {/* Meanwhile */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-3">Meanwhile, get ready to play</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              When courts do arrive, day one is more fun if you know the game. Start with{" "}
              <Link href="/blog/padel-patterns-beginners" className="text-padel-green hover:underline">
                the 7 patterns every beginner should know
              </Link>
              , learn{" "}
              <Link href="/blog/padel-bandeja-explained" className="text-padel-green hover:underline">
                the bandeja
              </Link>
              , and figure out{" "}
              <Link href="/blog/padel-racket-shapes-explained" className="text-padel-green hover:underline">
                which racket shape fits your game
              </Link>
              .
            </p>
            <p className="text-stone-600 leading-relaxed">
              Know a {metro.name} club we&apos;re missing — or building one?{" "}
              <Link href="/list-your-court" className="text-padel-green hover:underline">
                Tell us
              </Link>{" "}
              and we&apos;ll verify and update this page.
            </p>
          </section>

          {/* FAQ visible */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.mainEntity.map((q) => (
                <div key={q.name} className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">{q.name}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{q.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <GearStrip />
          <Link
            href="/search"
            className="group block border border-stone-200 bg-white rounded-2xl p-5 hover:border-padel-green hover:shadow-md transition-all"
          >
            <div className="font-display font-semibold group-hover:text-padel-green transition-colors">
              Browse all clubs
            </div>
            <p className="text-sm text-stone-500 mt-1">330+ clubs across 39 states</p>
            <span className="inline-flex items-center gap-2 text-sm text-padel-green mt-3 group-hover:gap-3 transition-all">
              Search the directory <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </aside>
      </main>
    </div>
  );
}
