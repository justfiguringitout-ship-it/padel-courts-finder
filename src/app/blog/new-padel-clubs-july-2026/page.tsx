import Link from "next/link";
import type { Metadata } from "next";
import { padelCourts } from "@/data/padel-courts";
import { generateSlug } from "@/lib/court-adapter";
import { getSiteStats } from "@/lib/site-structure";

export const metadata: Metadata = {
  title: "New & Upcoming US Padel Clubs — July 2026",
  description: "The monthly roundup: what's new on the Padel Courts Finder directory, club news, and every announced US padel club we're tracking — grouped by state.",
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/blog/new-padel-clubs-july-2026",
  },
  openGraph: {
    title: "New & Upcoming US Padel Clubs — July 2026",
    description: "What's new on the directory, club news, and every announced US padel club we're tracking — grouped by state.",
    url: "https://www.padelcourtsfinder.com/blog/new-padel-clubs-july-2026",
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "New & Upcoming US Padel Clubs — July 2026",
    description: "What's new on the directory, club news, and every announced US padel club we're tracking.",
  },
};

const STATE_NAMES: Record<string, string> = {
  AZ: "Arizona",
  CA: "California",
  FL: "Florida",
  GA: "Georgia",
  MA: "Massachusetts",
  NY: "New York",
  OH: "Ohio",
  PA: "Pennsylvania",
  TX: "Texas",
};

export default function NewPadelClubsJuly2026Page() {
  const stats = getSiteStats();

  // Pipeline pulled live from the data file — never hand-maintained
  const comingSoon = padelCourts.filter((c) => c.status === "coming_soon");
  const byState = new Map<string, typeof comingSoon>();
  comingSoon.forEach((club) => {
    const list = byState.get(club.state) ?? [];
    list.push(club);
    byState.set(club.state, list);
  });
  const stateGroups = [...byState.entries()].sort(([a], [b]) =>
    (STATE_NAMES[a] ?? a).localeCompare(STATE_NAMES[b] ?? b)
  );
  const austinCount = comingSoon.filter((c) => c.city === "Austin").length;

  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "New & Upcoming US Padel Clubs — July 2026",
    "description": "The monthly roundup: what's new on the Padel Courts Finder directory, club news, and every announced US padel club we're tracking — grouped by state.",
    "datePublished": "2026-07-05T00:00:00Z",
    "dateModified": "2026-07-05T00:00:00Z",
    "author": { "@type": "Organization", "name": "Padel Courts Finder", "url": "https://www.padelcourtsfinder.com" },
    "publisher": { "@type": "Organization", "name": "Padel Courts Finder", "logo": { "@type": "ImageObject", "url": "https://www.padelcourtsfinder.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.padelcourtsfinder.com/blog/new-padel-clubs-july-2026" }
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
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            New &amp; Upcoming US Padel Clubs &mdash; July 2026
          </h1>
          <p className="text-lg text-stone-400 mt-3">The first monthly roundup: what&apos;s new on the directory and every announced club we&apos;re tracking</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>July 5, 2026</span>
            <span className="mx-2">&bull;</span>
            <span>5 min read</span>
          </div>
          <div className="text-sm text-stone-500 mt-1">By the Padel Courts Finder editorial team</div>
        </div>
      </header>

      <article>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          {/* Intro */}
          <section>
            <p className="text-stone-700 leading-relaxed">
              Welcome to the first edition of our monthly new-clubs roundup. Every month we&apos;ll cover what&apos;s
              new on the directory, notable club news, and the full pipeline of announced US padel clubs we&apos;re
              tracking. The directory currently lists <strong>{stats.totalCourts} clubs across {stats.totalStates} states</strong>,
              including <strong>{comingSoon.length} announced clubs</strong> that haven&apos;t opened their doors yet.
            </p>
          </section>

          {/* New on the directory */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">New on the directory</h2>
            <p className="text-stone-700 leading-relaxed">
              One club joined the directory since May:{" "}
              <Link href="/courts/santa-monica-pickleball-padel" className="text-padel-green hover:underline font-medium">
                Santa Monica Pickleball &amp; Padel
              </Link>{" "}
              in downtown Santa Monica, CA. The 4th Street venue runs three outdoor padel courts &mdash; the city&apos;s
              first public ones, inaugurated in March 2026 with padel legend Fernando Belastegu&iacute;n on hand &mdash;
              alongside four pickleball courts and a pro shop billed as the world&apos;s largest racquet-sports retail
              location, with a demo racket program worth trying before you buy.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mt-4 bg-white border border-stone-200 rounded-lg p-4">
              <strong className="text-foreground">A note on framing:</strong> &ldquo;new on the directory&rdquo; means new to us,
              not necessarily newly opened &mdash; when we know the actual opening date, we&apos;ll say so.
            </p>
          </section>

          {/* Club news */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Club news</h2>
            <p className="text-stone-700 leading-relaxed">
              <Link href="/courts/nicol-rackets" className="text-padel-green hover:underline font-medium">Nicol Rackets</Link>{" "}
              in Oceanport, NJ (formerly listed as Nicol NJ) updated its listing via an owner submission: the Fort
              Monmouth club now runs <strong>7 padel courts &mdash; 4 indoor and 3 outdoor</strong> &mdash; alongside
              squash, pickleball, physical therapy, and a cafe, with kids camps, adult clinics, leagues, and
              tournaments on the calendar.
            </p>
          </section>

          {/* Announced & coming soon */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Announced &amp; coming soon</h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              These {comingSoon.length} clubs are announced or under construction but not yet open. Tap any club for
              the details we have so far.
            </p>
            <div className="space-y-5">
              {stateGroups.map(([stateCode, clubs]) => (
                <div key={stateCode}>
                  <h3 className="font-semibold text-foreground mb-2">
                    {STATE_NAMES[stateCode] ?? stateCode}
                    <span className="text-stone-400 font-normal text-sm ml-2">{clubs.length} {clubs.length === 1 ? "club" : "clubs"}</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {clubs.map((club) => (
                      <Link
                        key={club.id}
                        href={`/courts/${generateSlug(club.name)}`}
                        className="inline-flex items-baseline gap-1.5 bg-white border border-stone-200 rounded-full px-3.5 py-1.5 text-sm hover:border-padel-green hover:text-padel-green transition-colors"
                      >
                        <span className="font-medium">{club.name}</span>
                        <span className="text-stone-400 text-xs">{club.city}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* The number to watch */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">The number to watch</h2>
            <div className="bg-white border border-stone-200 rounded-xl p-6">
              <div className="text-4xl font-bold text-padel-green">{austinCount}</div>
              <p className="text-stone-700 leading-relaxed mt-2">
                Announced clubs in Austin, TX alone &mdash; {austinCount} of the {comingSoon.length} clubs in the
                national pipeline are in one city. If they all open, Austin&apos;s padel scene takes another visible
                step up. See where it stands today in our{" "}
                <Link href="/blog/best-padel-clubs-austin" className="text-padel-green hover:underline">Austin club guide</Link>.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="bg-white border border-stone-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Opening a club?</h2>
              <p className="text-stone-700 leading-relaxed">
                <Link href="/list-your-court" className="text-padel-green hover:underline font-medium">List it free</Link>{" "}
                and it&apos;ll be in next month&apos;s roundup. And for the full picture of where American padel stands
                right now, read our{" "}
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
              <Link href="/state-of-us-padel-2026" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">State of US Padel 2026</div>
                <p className="text-stone-400 text-sm mt-1">The data report on American padel&apos;s growth</p>
              </Link>
              <Link href="/list-your-court" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">List Your Court</div>
                <p className="text-stone-400 text-sm mt-1">Free listing &mdash; be in next month&apos;s roundup</p>
              </Link>
              <Link href="/blog/best-padel-clubs-austin" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Padel Clubs in Austin</div>
                <p className="text-stone-400 text-sm mt-1">The city with the busiest pipeline</p>
              </Link>
              <Link href="/search" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Find a Court Near You</div>
                <p className="text-stone-400 text-sm mt-1">{stats.totalCourts} clubs across {stats.totalStates} states</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
