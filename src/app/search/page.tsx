import type { Metadata } from "next";
import Link from "next/link";
import { padelCourts } from "@/data/padel-courts";
import { generateSlug } from "@/lib/court-adapter";
import { getStates } from "@/lib/site-structure";
import { SearchClient } from "./SearchClient";

const TITLE = "Padel Courts Near Me: Find & Compare 331 US Clubs";
const DESC =
  "Find padel courts near you. Search 331 verified US padel clubs across 39 states by city, state, or ZIP — with hours, pricing, court counts, and booking links.";
const URL = "https://www.padelcourtsfinder.com/search";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "padel courts near me",
    "padel near me",
    "padel court near me",
    "find padel courts",
    "padel clubs near me",
    "where to play padel near me",
  ],
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESC, url: URL, siteName: "Padel Courts Finder", type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

/** Server-computed directory data. This is what crawlers (and no-JS users) get:
 *  real, linked club content rather than an empty client-rendered shell. */
function getDirectory() {
  // Count every tracked club so the hero, the <title>, the interactive finder,
  // and the browse-by-state totals all agree. Individual club pages carry the
  // open / coming-soon status, so nothing here overstates what's playable.
  const open = padelCourts;
  const openNow = padelCourts.filter(
    (c) => c.status !== "coming_soon" && c.status !== "temporarily_closed"
  ).length;

  const stateMeta = new Map(getStates().map((s) => [s.code, s]));

  const byState = new Map<string, { name: string; slug: string; count: number }>();
  const byCity = new Map<string, { city: string; stateCode: string; stateSlug: string; count: number }>();

  for (const c of open) {
    const meta = stateMeta.get(c.state);
    if (meta) {
      const prev = byState.get(c.state);
      byState.set(c.state, { name: meta.name, slug: meta.slug, count: (prev?.count ?? 0) + 1 });
      const key = `${c.city}|${c.state}`;
      const prevCity = byCity.get(key);
      byCity.set(key, {
        city: c.city,
        stateCode: c.state,
        stateSlug: meta.slug,
        count: (prevCity?.count ?? 0) + 1,
      });
    }
  }

  const states = Array.from(byState.values()).sort(
    (a, b) => b.count - a.count || a.name.localeCompare(b.name)
  );
  const topCities = Array.from(byCity.values())
    .sort((a, b) => b.count - a.count || a.city.localeCompare(b.city))
    .slice(0, 24);

  const featured = open
    .filter((c) => c.featured)
    .slice(0, 12);

  return { states, topCities, total: open.length, openNow, featured };
}

function citySlug(city: string) {
  return city
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, "-");
}

export default function SearchPage() {
  const { states, topCities, total, openNow, featured } = getDirectory();

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I find padel courts near me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Use the court finder on this page: tap "Use my location" to sort every club by real distance from you, or search by city, state, or ZIP code. Padel Courts Finder tracks ${total} US padel clubs across ${states.length} states — ${openNow} open now — with hours, pricing, court counts, and booking links.`
        }
      },
      {
        "@type": "Question",
        "name": "How many padel courts are there in the US?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `We currently track ${total} padel clubs across ${states.length} US states, ${openNow} of them open and playable today and the rest under construction. Florida, Texas, California, and New York have the deepest coverage, but clubs are opening in new markets every month.`
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to play padel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "US clubs commonly charge about $30-60 per court-hour, split across four players — roughly $8-19 each. Many clubs also sell memberships that lower the per-hour rate. Individual club pages list published pricing wherever the club makes it public."
        }
      },
      {
        "@type": "Question",
        "name": "Can I play padel without a membership?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At most US clubs, yes — public pay-and-play court booking is the norm, and clubs typically lend rackets to newcomers. A minority are private members-only facilities; those are flagged as members-only on their club page."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      <div className="h-1 bg-padel-green" />

      {/* Hero — the H1 now matches what the page ranks for */}
      <header className="grain bg-court">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-4xl">
            <span className="inline-block bg-padel-green text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">Court Finder</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Padel Courts Near Me
            </h1>
            <p className="text-lg text-stone-400 mt-3">
              Search {total} US padel clubs across {states.length} states — by location, city, state, or ZIP
            </p>
          </div>
        </div>
      </header>

      {/* The interactive finder (client) */}
      <SearchClient />

      {/* Server-rendered directory — real content for crawlers and no-JS users */}
      <section className="border-t bg-white">
        <div className="container mx-auto px-4 py-12 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Browse padel courts by state</h2>
            <p className="text-stone-600 text-sm mb-5">
              Every US state with a padel club, ordered by club count. {openNow} of the {total} clubs we
              track are open now; the rest are under construction and marked on their own pages.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {states.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="flex items-baseline justify-between gap-2 bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 hover:border-padel-green transition-colors"
                >
                  <span className="text-sm font-medium text-foreground">{s.name}</span>
                  <span className="text-xs text-stone-500 tabular-nums">{s.count}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Padel courts by city</h2>
            <p className="text-stone-600 text-sm mb-5">
              The US cities with the most padel clubs right now.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {topCities.map((c) => (
                <Link
                  key={`${c.city}-${c.stateCode}`}
                  href={`/${c.stateSlug}/${citySlug(c.city)}`}
                  className="flex items-baseline justify-between gap-2 bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 hover:border-padel-green transition-colors"
                >
                  <span className="text-sm font-medium text-foreground truncate">{c.city}, {c.stateCode}</span>
                  <span className="text-xs text-stone-500 tabular-nums shrink-0">{c.count}</span>
                </Link>
              ))}
            </div>
          </div>

          {featured.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-5">Featured clubs</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {featured.map((c) => (
                  <Link
                    key={c.id}
                    href={`/courts/${generateSlug(c.name)}`}
                    className="bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 hover:border-padel-green transition-colors"
                  >
                    <div className="font-medium text-foreground text-sm">{c.name}</div>
                    <div className="text-xs text-stone-500 mt-0.5">{c.city}, {c.state}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">How do I find padel courts near me?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Tap <strong>Use my location</strong> in the finder above to sort every club by real distance from you,
                  or search by city, state, or ZIP. We track {total} clubs across {states.length} states ({openNow} open
                  now) with hours, pricing, and booking links.
                </p>
              </div>
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">How many padel courts are there in the US?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  We track {total} clubs across {states.length} states, {openNow} of them open today. Florida, Texas,
                  California, and New York lead — see the full picture in our{" "}
                  <Link href="/state-of-us-padel-2026" className="text-padel-green hover:underline">State of US Padel report</Link>.
                </p>
              </div>
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">How much does it cost to play padel?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Typically about $30&ndash;60 per court-hour split across four players — roughly $8&ndash;19 each. Many clubs
                  sell memberships that lower the rate; club pages list published pricing where it&apos;s public.
                </p>
              </div>
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Can I play padel without a membership?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  At most US clubs, yes — pay-and-play booking is the norm and rackets are usually available to borrow.
                  Private members-only facilities are flagged as such on their club page.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-200 pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">New to padel?</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/how-to-play" className="text-padel-green hover:underline">How to Play Padel</Link>
              <Link href="/rules" className="text-padel-green hover:underline">Padel Rules</Link>
              <Link href="/padel-lessons" className="text-padel-green hover:underline">Padel Lessons</Link>
              <Link href="/indoor-padel-courts" className="text-padel-green hover:underline">Indoor Padel Courts</Link>
              <Link href="/blog/best-padel-rackets-beginners" className="text-padel-green hover:underline">Best Beginner Rackets</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
