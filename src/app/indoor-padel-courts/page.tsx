import { Metadata } from 'next';
import Link from 'next/link';
import { padelCourts } from '@/data/padel-courts';
import { generateSlug } from '@/lib/court-adapter';
import { getStates } from '@/lib/site-structure';
import { GearWidget } from '@/components/GearWidget';

const TITLE = "Indoor Padel Courts in the US (2026): Every Club, by State";
const DESC = "Find indoor padel courts near you. Every US club with indoor or covered courts, listed by state — play year-round regardless of weather, heat, or season.";
const URL = "https://www.padelcourtsfinder.com/indoor-padel-courts";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: ["indoor padel courts", "indoor padel courts near me", "indoor padel court", "indoor padel", "covered padel courts"],
  openGraph: { title: TITLE, description: DESC, url: URL, siteName: "Padel Courts Finder", type: "article" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
  alternates: { canonical: URL },
};

/** Indoor + covered clubs, live-computed from the directory. Excludes clubs that
 *  aren't open yet so the page never sends a player to a construction site. */
function getIndoorClubs() {
  const states = getStates();
  const stateMeta = new Map(states.map((s) => [s.code, s]));

  const clubs = padelCourts.filter(
    (c) =>
      (c.courtType === 'indoor' || c.courtType === 'both') &&
      c.status !== 'coming_soon' &&
      c.status !== 'temporarily_closed'
  );

  const byState = new Map<string, { name: string; slug: string; clubs: typeof clubs }>();
  for (const club of clubs) {
    const meta = stateMeta.get(club.state);
    if (!meta) continue;
    if (!byState.has(club.state)) {
      byState.set(club.state, { name: meta.name, slug: meta.slug, clubs: [] });
    }
    byState.get(club.state)!.clubs.push(club);
  }

  const grouped = Array.from(byState.values())
    .map((g) => ({
      ...g,
      clubs: [...g.clubs].sort((a, b) => a.city.localeCompare(b.city) || a.name.localeCompare(b.name)),
    }))
    .sort((a, b) => b.clubs.length - a.clubs.length || a.name.localeCompare(b.name));

  return { grouped, total: clubs.length, stateCount: grouped.length };
}

export default function IndoorPadelCourtsPage() {
  const { grouped, total, stateCount } = getIndoorClubs();

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where can I find indoor padel courts near me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Padel Courts Finder tracks ${total} US clubs with indoor or covered padel courts across ${stateCount} states. Browse them by state on this page, or search by city to find the closest one to you.`
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between indoor and outdoor padel courts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The playing surface and dimensions are identical — the difference is the environment. Indoor courts remove wind, rain, and sun glare, so the ball flies more predictably and play continues year-round. They also need serious ceiling height (roughly 8 metres / 26 feet minimum) for lobs, which is why converted warehouses are the most common indoor padel venues in the US."
        }
      },
      {
        "@type": "Question",
        "name": "Are indoor padel courts more expensive to play on?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually a little, yes. Indoor clubs carry the cost of the building, climate control, and lighting, so peak-hour court rates often run higher than at outdoor venues in the same market. The trade-off is reliability — you never lose a booking to weather, which matters most in hot southern summers and cold northern winters."
        }
      },
      {
        "@type": "Question",
        "name": "Is indoor padel better for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Slightly. Without wind or sun in your eyes, the ball behaves consistently, which makes it easier to build reliable contact early on. Lighting is also even, so tracking lobs off the back glass is simpler than at dusk on an outdoor court."
        }
      }
    ]
  };

  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": TITLE,
    "description": DESC,
    "datePublished": "2026-07-31T00:00:00Z",
    "dateModified": "2026-07-31T00:00:00Z",
    "author": { "@type": "Organization", "name": "Padel Courts Finder", "url": "https://www.padelcourtsfinder.com" },
    "publisher": { "@type": "Organization", "name": "Padel Courts Finder", "logo": { "@type": "ImageObject", "url": "https://www.padelcourtsfinder.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": URL }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      <div className="h-1 bg-padel-green" />

      <header className="grain bg-court">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative">
          <div className="mb-5">
            <Link href="/" className="text-stone-400 hover:text-turf text-sm">&larr; Home</Link>
          </div>
          <span className="inline-block bg-padel-green text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">Find Courts</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Indoor Padel Courts in the US</h1>
          <p className="text-lg text-stone-400 mt-3">
            {total} clubs with indoor or covered courts across {stateCount} states — play year-round, whatever the weather
          </p>
          <div className="text-sm text-stone-500 mt-4"><span>Updated July 31, 2026</span></div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <section>
          <p className="text-stone-700 leading-relaxed">
            Indoor padel solves the two things that cancel outdoor sessions: weather and daylight. The courts play
            identically — same 20m x 10m dimensions, same glass, same turf — but without wind pushing your lobs or
            sun blinding you on an overhead. In practice that means a booking you can count on in a Phoenix August
            or a Chicago January.
          </p>
          <p className="text-stone-600 text-sm leading-relaxed mt-4 bg-white border border-stone-200 rounded-lg p-4">
            Looking for a specific city instead? Use the <Link href="/search" className="text-padel-green hover:underline">court finder</Link>{" "}
            to search all {padelCourts.length} US clubs by city, state, or ZIP.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-5">Indoor padel courts by state</h2>
          <div className="space-y-8">
            {grouped.map((group) => (
              <div key={group.slug}>
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-baseline gap-2">
                  <Link href={`/${group.slug}`} className="hover:text-padel-green transition-colors">{group.name}</Link>
                  <span className="text-sm font-normal text-stone-500">{group.clubs.length} {group.clubs.length === 1 ? 'club' : 'clubs'}</span>
                </h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {group.clubs.map((club) => (
                    <Link
                      key={club.id}
                      href={`/courts/${generateSlug(club.name)}`}
                      className="bg-white border border-stone-200 rounded-lg px-4 py-3 hover:border-padel-green transition-colors"
                    >
                      <div className="font-medium text-foreground text-sm">{club.name}</div>
                      <div className="text-xs text-stone-500 mt-0.5">
                        {club.city}, {club.state}
                        {club.courtType === 'both' && <span className="text-stone-400"> &middot; indoor &amp; outdoor</span>}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">What makes a good indoor padel club</h2>
          <ul className="space-y-3 text-stone-700 leading-relaxed list-disc pl-5">
            <li><strong>Ceiling height.</strong> Roughly 8 metres (26 feet) is the practical minimum — anything lower and lobs, the tactical heart of padel, start hitting the roof.</li>
            <li><strong>Lighting quality.</strong> Even, glare-free lighting matters more indoors than out. Ask about LED if the club doesn&apos;t mention it.</li>
            <li><strong>Climate control.</strong> A converted warehouse without air conditioning in July is worse than an outdoor court at dusk.</li>
            <li><strong>Court surface upkeep.</strong> Indoor turf holds sand longer than outdoor, but it still needs brushing. Patchy sand means slippery footing.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white border border-stone-200 rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2">Where can I find indoor padel courts near me?</h3>
              <p className="text-stone-600 text-sm leading-relaxed">We track {total} US clubs with indoor or covered courts across {stateCount} states — browse them by state above, or <Link href="/search" className="text-padel-green hover:underline">search by city</Link> for the closest one.</p>
            </div>
            <div className="bg-white border border-stone-200 rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2">What is the difference between indoor and outdoor padel courts?</h3>
              <p className="text-stone-600 text-sm leading-relaxed">The court itself is identical — same dimensions, glass, and turf. What changes is the environment: no wind, rain, or sun glare, so the ball behaves predictably and you play year-round. Indoor venues need roughly 8m of ceiling clearance for lobs, which is why converted warehouses dominate US indoor padel.</p>
            </div>
            <div className="bg-white border border-stone-200 rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2">Are indoor padel courts more expensive to play on?</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Usually a little. Indoor clubs carry building, lighting, and climate costs, so peak rates tend to run higher than outdoor venues in the same market. You&apos;re buying reliability — no booking ever lost to weather.</p>
            </div>
            <div className="bg-white border border-stone-200 rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2">Is indoor padel better for beginners?</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Slightly, yes. No wind or sun means the ball behaves consistently, which helps you build reliable contact early. Even lighting also makes tracking lobs off the back glass much easier than at dusk outdoors.</p>
            </div>
          </div>
        </section>

        <GearWidget />

        <section className="border-t border-stone-200 pt-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Keep reading</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/how-to-play" className="text-padel-green hover:underline">How to Play Padel</Link>
            <Link href="/rules" className="text-padel-green hover:underline">Padel Rules</Link>
            <Link href="/padel-lessons" className="text-padel-green hover:underline">Padel Lessons</Link>
            <Link href="/blog/how-to-choose-padel-club" className="text-padel-green hover:underline">How to Choose a Club</Link>
            <Link href="/search" className="text-padel-green hover:underline">Find Courts Near You</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
