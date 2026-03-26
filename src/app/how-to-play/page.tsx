import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Play Padel: Complete Beginner\'s Guide (2026)',
  description: 'Learn how to play padel in 2026. Complete beginner\'s guide covering rules, scoring, equipment, court layout, basic shots, and tips for your first match.',
  keywords: [
    "how to play padel",
    "padel rules",
    "padel for beginners",
    "padel guide",
    "learn padel",
    "padel scoring",
    "padel techniques",
    "padel court",
  ],
  openGraph: {
    title: 'How to Play Padel: Complete Beginner\'s Guide (2026)',
    description: 'Learn how to play padel in 2026. Complete beginner\'s guide covering rules, scoring, equipment, court layout, basic shots, and tips for your first match.',
    url: 'https://www.padelcourtsfinder.com/how-to-play',
    siteName: 'Padel Courts Finder',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Play Padel: Complete Beginner\'s Guide (2026)',
    description: 'Learn how to play padel in 2026. Complete beginner\'s guide covering rules, scoring, equipment, court layout, basic shots, and tips for your first match.',
  },
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/how-to-play',
  },
};

export default function HowToPlayPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Play Padel: Complete Beginner's Guide (2026)",
    "description": "Learn how to play padel in 2026. Complete beginner's guide covering rules, scoring, equipment, court layout, basic shots, and tips for your first match.",
    "datePublished": "2025-01-15T00:00:00Z",
    "dateModified": "2026-03-26T00:00:00Z",
    "author": {
      "@type": "Organization",
      "name": "Padel Courts Finder",
      "url": "https://www.padelcourtsfinder.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Padel Courts Finder",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.padelcourtsfinder.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.padelcourtsfinder.com/how-to-play"
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is padel easy to learn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Most beginners rally comfortably within their first session. The enclosed glass court keeps the ball in play much longer than tennis, so you spend more time hitting and less time chasing balls. The underhand serve is also much easier to master than a tennis serve. Within 2–3 sessions, most people feel competent enough to play real matches."
        }
      },
      {
        "@type": "Question",
        "name": "What equipment do I need to play padel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You need a padel racket ($80–130 for beginners), padel balls (~$14 for a can of 3), and non-marking court shoes ($80–130). Many clubs offer racket and ball rentals so you can try before you buy. Standard athletic clothing works fine — there's nothing padel-specific required."
        }
      },
      {
        "@type": "Question",
        "name": "Can I play padel as singles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Technically yes, but padel is designed for and almost always played as doubles (2 vs 2). The court dimensions, rules, and strategy are all built around 4 players. Some clubs offer singles play on smaller courts, but doubles is the standard format worldwide."
        }
      },
      {
        "@type": "Question",
        "name": "How is padel different from tennis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Padel is played on a smaller enclosed court with glass walls that are in play — you can hit the ball off the walls like squash. The racket is solid with no strings, the serve is underhand, and it's always played as doubles. The scoring system is the same as tennis (15-30-40-game), but the gameplay feels completely different because of the walls, which create longer rallies and unique angles."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to play padel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Court rental typically costs $30–75 per hour, split between 4 players — so $8–19 per person per session. Some clubs charge per person instead. Many clubs also offer membership plans that bring the per-session cost down. Equipment rental (racket + balls) is usually $5–15 if you don't have your own gear."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* Sky-Blue Accent Stripe */}
      <div className="h-1 bg-sky-500" />

      {/* Dark Hero */}
      <header className="bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <span className="inline-block bg-sky-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">How-To Guide</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            How to Play Padel: Complete Beginner&apos;s Guide
          </h1>
          <p className="text-stone-400 mt-3">Everything you need to know to start playing America&apos;s fastest-growing sport</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>Updated March 26, 2026</span>
            <span className="mx-2">&bull;</span>
            <span>15 min read</span>
          </div>
        </div>
      </header>

      <article>
        {/* White Section: Intro + Quick Start */}
        <div className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Intro */}
            <div className="prose prose-lg prose-stone max-w-none mb-10">
              <p className="text-stone-600 leading-[1.75]">
                Padel is the fastest-growing sport in the world &mdash; and for good reason. It&apos;s easier to pick up than tennis, more social (always played in doubles), and addictive from the very first rally. The enclosed glass court keeps the ball in play longer, so beginners get real rallies from day one instead of chasing balls. Whether you&apos;ve never held a racket or you&apos;re a tennis player looking for something new, padel is remarkably easy to start and endlessly rewarding to improve at.
              </p>
              <p className="text-stone-600 leading-[1.75]">
                This guide covers everything you need to walk onto a padel court for the first time with confidence &mdash; the court, the rules, the gear, the shots, and practical tips for your first match. Curious how padel stacks up against pickleball? Read our <Link href="/blog/padel-vs-pickleball" className="text-sky-600 hover:underline font-medium">Padel vs Pickleball comparison</Link>.
              </p>
            </div>

            {/* Quick Start Box */}
            <div className="border-l-4 border-amber-500 bg-amber-50/80 rounded-r-lg p-5 sm:p-6">
              <h3 className="font-bold text-[#1a1a1a] mb-3 flex items-center gap-2">
                <span className="text-amber-500">&#9889;</span> Quick Start
              </h3>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-stone-700 whitespace-nowrap">Courts:</span>
                  <span className="text-sm text-stone-600">Enclosed glass walls, smaller than tennis</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-stone-700 whitespace-nowrap">Players:</span>
                  <span className="text-sm text-stone-600">Always doubles (4 players)</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-stone-700 whitespace-nowrap">Scoring:</span>
                  <span className="text-sm text-stone-600">Same as tennis (15-30-40-game)</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-stone-700 whitespace-nowrap">Serve:</span>
                  <span className="text-sm text-stone-600">Underhand, must bounce first</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-stone-700 whitespace-nowrap">Walls:</span>
                  <span className="text-sm text-stone-600">In play &mdash; you can hit the ball off them</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-stone-700 whitespace-nowrap">Gear:</span>
                  <span className="text-sm text-stone-600">Padel racket + balls + court shoes</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-stone-700 whitespace-nowrap">Cost:</span>
                  <span className="text-sm text-stone-600">$8&ndash;20 per person per session</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stone-50 Section: What Is Padel + The Court */}
        <div className="bg-stone-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* What Is Padel? */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">What Is Padel?</h2>
              <div className="bg-white border border-stone-200 rounded-xl p-6 md:p-8">
                <p className="text-stone-600 leading-[1.75] mb-4">
                  Padel is a racket sport that blends elements of tennis and squash. It was invented in Acapulco, Mexico in 1969 by Enrique Corcuera, who built the first court in his backyard. Today, over 35 million people play across 150+ countries, making it one of the most popular sports in Spain, Argentina, Sweden, and Mexico &mdash; and the fastest-growing sport in the United States.
                </p>
                <p className="text-stone-600 leading-[1.75] mb-4">
                  Padel is always played as doubles (2 vs 2) on an enclosed court surrounded by glass walls and metal mesh. The defining feature: <strong>the walls are in play</strong>. After the ball bounces on your side of the court, it can hit the back or side wall &mdash; and you play it off the rebound, just like squash. This creates unique angles, spectacular saves, and rallies that last much longer than tennis.
                </p>
                <p className="text-stone-600 leading-[1.75]">
                  The racket is solid (no strings) with a perforated face, the serve is underhand, and the scoring is identical to tennis. It&apos;s social by design &mdash; four people on a small court means constant interaction, and most clubs have a bar or lounge for the post-match socializing that&apos;s become part of the culture.
                </p>
              </div>
            </section>

            {/* The Court */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">The Court</h2>
              <div className="bg-white border border-stone-200 rounded-xl p-6 md:p-8">
                <p className="text-stone-600 leading-[1.75] mb-5">
                  A padel court is 20 meters long and 10 meters wide &mdash; about one-third smaller than a tennis court. It&apos;s divided by a net that sits slightly lower than tennis (88cm at the center, 92cm at the sides). The court is enclosed on all sides by a combination of glass walls and metal mesh fencing.
                </p>

                {/* Court Diagram */}
                <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 sm:p-6 mb-5 font-mono text-xs sm:text-sm overflow-x-auto">
                  <div className="text-center text-stone-500 mb-2">&larr; 10m wide &rarr;</div>
                  <div className="border-2 border-stone-400 rounded relative mx-auto max-w-md">
                    <div className="grid grid-cols-2">
                      {/* Back wall label */}
                      <div className="col-span-2 text-center text-stone-400 text-xs py-1 bg-sky-50 border-b border-stone-300">Glass wall (3m high)</div>

                      {/* Service boxes - top half */}
                      <div className="border-r border-b border-stone-300 p-3 sm:p-4 text-center">
                        <div className="text-stone-400">Service</div>
                        <div className="text-stone-400">Box</div>
                      </div>
                      <div className="border-b border-stone-300 p-3 sm:p-4 text-center">
                        <div className="text-stone-400">Service</div>
                        <div className="text-stone-400">Box</div>
                      </div>

                      {/* Service line */}
                      <div className="col-span-2 text-center text-stone-400 text-xs py-0.5 border-b border-stone-300 bg-stone-50">Service line (6.95m from net)</div>

                      {/* Back court */}
                      <div className="border-r border-b border-stone-300 p-2 sm:p-3 text-center">
                        <div className="text-stone-300 text-xs">Back court</div>
                      </div>
                      <div className="border-b border-stone-300 p-2 sm:p-3 text-center">
                        <div className="text-stone-300 text-xs">Back court</div>
                      </div>

                      {/* NET */}
                      <div className="col-span-2 text-center font-bold text-sky-600 py-1.5 bg-sky-100 border-b-2 border-sky-400">&#9552;&#9552;&#9552; NET (88cm center) &#9552;&#9552;&#9552;</div>

                      {/* Back court - other side */}
                      <div className="border-r border-b border-stone-300 p-2 sm:p-3 text-center">
                        <div className="text-stone-300 text-xs">Back court</div>
                      </div>
                      <div className="border-b border-stone-300 p-2 sm:p-3 text-center">
                        <div className="text-stone-300 text-xs">Back court</div>
                      </div>

                      {/* Service line */}
                      <div className="col-span-2 text-center text-stone-400 text-xs py-0.5 border-b border-stone-300 bg-stone-50">Service line</div>

                      {/* Service boxes - bottom half */}
                      <div className="border-r border-b border-stone-300 p-3 sm:p-4 text-center">
                        <div className="text-stone-400">Service</div>
                        <div className="text-stone-400">Box</div>
                      </div>
                      <div className="border-b border-stone-300 p-3 sm:p-4 text-center">
                        <div className="text-stone-400">Service</div>
                        <div className="text-stone-400">Box</div>
                      </div>

                      {/* Back wall label */}
                      <div className="col-span-2 text-center text-stone-400 text-xs py-1 bg-sky-50">Glass wall (3m high)</div>
                    </div>
                  </div>
                  <div className="text-center text-stone-400 mt-2 text-xs">Side walls: glass (3m) + metal mesh above &bull; Door openings on each side</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-sky-500 font-bold mt-0.5">&#9654;</span>
                    <p className="text-stone-600 text-sm leading-relaxed"><strong>Glass back walls (3m high):</strong> The ball rebounds off these during play. Learning to read these rebounds is the signature padel skill.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sky-500 font-bold mt-0.5">&#9654;</span>
                    <p className="text-stone-600 text-sm leading-relaxed"><strong>Side walls:</strong> Glass at the bottom (3m) with metal mesh above. The ball can hit the glass and come back into play.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sky-500 font-bold mt-0.5">&#9654;</span>
                    <p className="text-stone-600 text-sm leading-relaxed"><strong>Metal mesh fencing:</strong> Above the glass on the sides and back. If the ball hits the mesh on the full (without bouncing first), it&apos;s out.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sky-500 font-bold mt-0.5">&#9654;</span>
                    <p className="text-stone-600 text-sm leading-relaxed"><strong>Door openings:</strong> On both sides of the court. In advanced play, you can actually leave the court through these doors to retrieve a ball that bounced out &mdash; one of the most spectacular plays in padel.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* White Section: Equipment + Basic Rules */}
        <div className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Equipment You Need */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">Equipment You Need</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">Padel Racket</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">Solid face with drilled holes (no strings). Made of carbon fiber or fiberglass with an EVA foam core. Beginners should choose a <strong>round shape</strong> for the largest sweet spot and most forgiveness. Weighs 340&ndash;370g.</p>
                  <p className="text-sm text-stone-500">Starter cost: <strong className="text-[#1a1a1a]">$80&ndash;130</strong></p>
                </div>
                <div className="border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">Padel Balls</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">Look like tennis balls but are slightly less pressurized, which makes them slower and easier to control. Most clubs provide balls, but having your own is handy for practice sessions.</p>
                  <p className="text-sm text-stone-500">Cost: <strong className="text-[#1a1a1a]">~$14 for 3</strong></p>
                </div>
                <div className="border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">Court Shoes</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">Non-marking soles required on court. Tennis shoes or padel-specific shoes with herringbone tread work best. You need lateral support &mdash; don&apos;t wear running shoes.</p>
                  <p className="text-sm text-stone-500">Cost: <strong className="text-[#1a1a1a]">$80&ndash;130</strong></p>
                </div>
                <div className="border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">Clothing</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">Standard athletic wear. Shorts/skirt, t-shirt or polo, and a sweatband if you run hot. Nothing padel-specific needed &mdash; wear whatever you&apos;d wear to play tennis or gym.</p>
                  <p className="text-sm text-stone-500">Cost: <strong className="text-[#1a1a1a]">What you already own</strong></p>
                </div>
              </div>
              <p className="text-stone-600 leading-[1.75]">
                Most clubs offer racket and ball rentals ($5&ndash;15) so you can try before you buy. See our <Link href="/blog/best-padel-rackets-beginners" className="text-sky-600 hover:underline font-medium">Best Padel Rackets for Beginners (2026)</Link> guide for specific recommendations when you&apos;re ready to invest.
              </p>
            </section>

            {/* Basic Rules */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">Basic Rules</h2>
              <div className="space-y-4">
                <div className="border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">Always Doubles</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Padel is designed for 4 players &mdash; two on each side. One player stands near the net, the other covers the back. Teamwork and communication are essential. You&apos;ll switch sides with your partner throughout the match based on the score.</p>
                </div>
                <div className="border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">The Serve</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">The serve must be <strong>underhand</strong>. Bounce the ball on the ground, then strike it at or below waist height. The serve goes diagonally into the opposite service box. You get two attempts (like tennis). The ball can hit the back wall after bouncing in the service box &mdash; that&apos;s in play. But if it hits the side wall after the bounce, it&apos;s a fault.</p>
                </div>
                <div className="border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">Walls Are in Play</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">This is what makes padel unique. After the ball bounces on your side of the court, it can hit the back glass wall or side walls &mdash; and you play it off the rebound. However, a shot from your opponent must land on your side of the court <strong>before</strong> hitting any wall. If it hits the wall first (without bouncing), it&apos;s out.</p>
                </div>
                <div className="border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">One Bounce Maximum</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Like tennis, the ball can only bounce once on the ground before you must return it. After that single bounce, it can hit any number of walls and you can still play it. If it bounces twice on the ground, the point is over. You can also volley (hit before it bounces) at any time.</p>
                </div>
                <div className="border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">The Mesh Rule</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">If a ball hits the metal mesh fencing on the full (without bouncing in the court first), it&apos;s out. The mesh is only above the glass, so this mainly affects high lobs that fly over the back wall. The glass walls below are always in play after a bounce.</p>
                </div>
                <div className="border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">Leaving the Court</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">In advanced play, if the ball bounces on your side and then flies over the back wall or through a door opening, you can leave the court to retrieve it. This creates some of the most dramatic points in padel &mdash; but don&apos;t worry about it as a beginner.</p>
                </div>
              </div>
              <p className="text-stone-600 leading-[1.75] mt-5">
                For a deeper dive into the official rules, see our complete <Link href="/rules" className="text-sky-600 hover:underline font-medium">Padel Rules &amp; Regulations</Link> guide.
              </p>
            </section>
          </div>
        </div>

        {/* Stone-50 Section: Scoring + Basic Shots */}
        <div className="bg-stone-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Scoring */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">Scoring</h2>
              <div className="bg-white border border-stone-200 rounded-xl p-6 md:p-8">
                <p className="text-stone-600 leading-[1.75] mb-5">
                  Padel uses exactly the same scoring system as tennis. If you already know tennis scoring, you know padel scoring. If not, here&apos;s how it works:
                </p>
                <div className="space-y-4 mb-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-sky-100 text-sky-700 text-xs font-bold px-2 py-1 rounded mt-0.5">POINTS</span>
                    <p className="text-stone-600 text-sm leading-relaxed">Points count as 15, 30, 40, then game. So a game goes: 0-0 (called &ldquo;love&rdquo;), then 15, 30, 40, game. If both sides reach 40, it&apos;s &ldquo;deuce&rdquo; &mdash; you need to win two consecutive points (advantage, then game) to close out.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-sky-100 text-sky-700 text-xs font-bold px-2 py-1 rounded mt-0.5">GAMES</span>
                    <p className="text-stone-600 text-sm leading-relaxed">First team to win 6 games takes the set. You must lead by 2 games. If it reaches 6-6, a tiebreak is played (first to 7 points, win by 2).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-sky-100 text-sky-700 text-xs font-bold px-2 py-1 rounded mt-0.5">SETS</span>
                    <p className="text-stone-600 text-sm leading-relaxed">A match is best of 3 sets. Win 2 sets to win the match. Most casual games play a single set or a timed session (60&ndash;90 minutes).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-sky-100 text-sky-700 text-xs font-bold px-2 py-1 rounded mt-0.5">SERVE</span>
                    <p className="text-stone-600 text-sm leading-relaxed">The serving team alternates each game. The same player serves an entire game, then the other team serves. Players on the serving team alternate which side they serve from each point.</p>
                  </div>
                </div>
                <div className="border-l-4 border-sky-500 bg-sky-50/80 rounded-r-lg p-4">
                  <p className="text-stone-700 text-sm leading-relaxed">
                    <strong>Tip:</strong> Don&apos;t stress about the scoring system. It becomes second nature after a few games. Many beginners just count to 4 points per game until the &ldquo;15-30-40&rdquo; pattern clicks.
                  </p>
                </div>
              </div>
            </section>

            {/* Basic Shots for Beginners */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">Basic Shots for Beginners</h2>
              <p className="text-stone-600 leading-[1.75] mb-5">
                You don&apos;t need a huge arsenal to start playing. These six shots will cover 90% of situations in your first few months. Master these, and you&apos;ll be competitive in casual games.
              </p>
              <div className="space-y-4">
                <div className="bg-white border border-stone-200 rounded-xl p-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="bg-[#1a1a1a] text-white text-xs font-bold px-2 py-1 rounded">1</span>
                    <h3 className="font-bold text-[#1a1a1a]">The Serve</h3>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">Bounce the ball, strike it underhand at or below waist height, and aim diagonally into the opposite service box. Don&apos;t try to blast it &mdash; focus on consistency and placement. A reliable serve that lands deep in the box is far more effective than a hard one that misses. The underhand motion is natural and much easier to learn than a tennis serve.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-xl p-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="bg-[#1a1a1a] text-white text-xs font-bold px-2 py-1 rounded">2</span>
                    <h3 className="font-bold text-[#1a1a1a]">Forehand &amp; Backhand</h3>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">Similar to tennis groundstrokes but with a shorter, more compact swing. The padel racket is shorter than a tennis racket and has no strings, so the contact feel is different &mdash; more like a solid &ldquo;thud&rdquo; than a springy bounce. Keep your wrist firm and swing through the ball. Focus on directing the ball to open spaces rather than hitting hard.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-xl p-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="bg-[#1a1a1a] text-white text-xs font-bold px-2 py-1 rounded">3</span>
                    <h3 className="font-bold text-[#1a1a1a]">The Volley</h3>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">Hitting the ball before it bounces, typically near the net. This is the most important position in padel &mdash; the team that controls the net wins. Use short, punchy strokes. No big backswing needed. Angle the ball down into the court or toward the side walls. At the net, you&apos;re cutting off angles and putting pressure on your opponents.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-xl p-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="bg-[#1a1a1a] text-white text-xs font-bold px-2 py-1 rounded">4</span>
                    <h3 className="font-bold text-[#1a1a1a]">The Lob</h3>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">A high shot over your opponents&apos; heads that forces them away from the net and back toward the glass wall. This is your essential defensive weapon. When you&apos;re under pressure, a well-placed lob resets the point and gives you time to move forward. Aim for height and depth &mdash; too short and they&apos;ll smash it back at you.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-xl p-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="bg-[#1a1a1a] text-white text-xs font-bold px-2 py-1 rounded">5</span>
                    <h3 className="font-bold text-[#1a1a1a]">Playing Off the Wall</h3>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">This is <em>the</em> signature padel skill. When the ball bounces on the court and then hits the back glass wall, you let it rebound and play it off the wall. It takes a few sessions to judge the angles and timing, but once it clicks, it transforms your game. The key is patience &mdash; don&apos;t rush the ball. Wait for the rebound, set your feet, and play it calmly. For more on padel-specific terminology, see our <Link href="/get-started/glossary" className="text-sky-600 hover:underline">padel glossary</Link>.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-xl p-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="bg-[#1a1a1a] text-white text-xs font-bold px-2 py-1 rounded">6</span>
                    <h3 className="font-bold text-[#1a1a1a]">La Bandeja</h3>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">The &ldquo;bread and butter&rdquo; overhead of padel. Instead of smashing the ball hard (which often sets up your opponents off the rebound), <Link href="/get-started/glossary" className="text-sky-600 hover:underline">la bandeja</Link> is a controlled overhead slice with backspin. Hit from above your head, the slice keeps the ball low after it bounces, making it much harder for your opponents to attack. It&apos;s the shot that separates intermediate players from beginners &mdash; work on it early.</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* White Section: Tips + Where to Play */}
        <div className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Tips for Your First Match */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">Tips for Your First Match</h2>
              <p className="text-stone-600 leading-[1.75] mb-5">
                You&apos;ve got the rules and shots down in theory. Here&apos;s what actually matters when you step on court for the first time.
              </p>
              <div className="space-y-4">
                <div className="border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">Communicate With Your Partner</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Padel is a doubles sport. Talk constantly. Call &ldquo;mine&rdquo; or &ldquo;yours&rdquo; on every ball. Signal which side you&apos;re covering. Good communication between partners beats individual skill almost every time &mdash; it&apos;s what makes padel uniquely social.</p>
                </div>
                <div className="border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">Control the Net</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">The team at the net wins in padel. After every opportunity &mdash; a good return, a lob that pushes opponents back &mdash; move forward together. Both players should advance as a unit. If you&apos;re stuck at the back wall, use a lob to buy time and look for chances to move up.</p>
                </div>
                <div className="border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">Let the Walls Help You</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Beginners often panic when the ball heads toward the back wall. Don&apos;t chase it &mdash; let it bounce on the court, hit the wall, and then play the rebound. The wall is your friend. It gives you a second chance at balls that would be winners in tennis. Relax, watch the trajectory, and wait.</p>
                </div>
                <div className="border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">Consistency Over Power</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">The player who keeps the ball in play wins more points than the player who hits hard. Padel rewards placement and patience. Aim for the middle of the court when in doubt, keep the ball low over the net, and wait for your opponents to make mistakes. Power comes later when your technique is solid.</p>
                </div>
                <div className="border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">Watch the Walls</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Learning to read wall rebounds is the biggest learning curve in padel. Watch where the ball hits the glass, observe the angle it comes back, and start predicting where it&apos;ll go. It takes 2&ndash;3 sessions before this becomes natural. Once it clicks, you&apos;ll feel like you unlocked a new dimension of the sport.</p>
                </div>
                <div className="border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">Have Fun</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Padel is inherently social and fun. Don&apos;t stress about mistakes &mdash; everyone mishits, everyone misjudges wall rebounds, everyone serves into the net. Most clubs have a lounge, caf&eacute;, or bar area because the post-match socializing is part of the culture. Enjoy the game and the people.</p>
                </div>
              </div>
            </section>

            {/* Where to Play */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">Where to Play</h2>
              <div className="border border-stone-200 rounded-xl p-6 md:p-8">
                <p className="text-stone-600 leading-[1.75] mb-4">
                  Ready to try it? Padel is available in 34 states across the US, with new clubs opening every month. The sport has exploded from a handful of facilities to <Link href="/search" className="text-sky-600 hover:underline font-medium">350+ clubs nationwide</Link>, and that number is growing fast.
                </p>
                <p className="text-stone-600 leading-[1.75] mb-4">
                  Most clubs offer walk-in court bookings, equipment rental, and beginner lessons &mdash; so you can show up with nothing and start playing. Many also run social &ldquo;mix-in&rdquo; sessions where you&apos;re paired with other players, which is a great way to meet people and get started without needing to find 3 friends first.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mt-5">
                  <Link href="/blog/best-padel-clubs-miami" className="border border-stone-200 rounded-lg p-4 hover:border-sky-300 hover:shadow-sm transition-all text-center">
                    <span className="text-xs text-stone-400 uppercase tracking-wider">City Guide</span>
                    <h4 className="font-semibold text-[#1a1a1a] mt-1 text-sm">Miami &rarr;</h4>
                    <p className="text-xs text-stone-500 mt-0.5">29+ clubs, 170+ courts</p>
                  </Link>
                  <Link href="/blog/best-padel-clubs-houston" className="border border-stone-200 rounded-lg p-4 hover:border-sky-300 hover:shadow-sm transition-all text-center">
                    <span className="text-xs text-stone-400 uppercase tracking-wider">City Guide</span>
                    <h4 className="font-semibold text-[#1a1a1a] mt-1 text-sm">Houston &rarr;</h4>
                    <p className="text-xs text-stone-500 mt-0.5">10 clubs, 30+ courts</p>
                  </Link>
                  <Link href="/blog/best-padel-clubs-austin" className="border border-stone-200 rounded-lg p-4 hover:border-sky-300 hover:shadow-sm transition-all text-center">
                    <span className="text-xs text-stone-400 uppercase tracking-wider">City Guide</span>
                    <h4 className="font-semibold text-[#1a1a1a] mt-1 text-sm">Austin &rarr;</h4>
                    <p className="text-xs text-stone-500 mt-0.5">7 clubs, growing fast</p>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Stone-50 Section: FAQ */}
        <div className="bg-stone-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <section>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">Is padel easy to learn?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Yes. Most beginners rally comfortably within their first session. The enclosed glass court keeps the ball in play much longer than tennis, so you spend more time hitting and less time chasing balls. The underhand serve is also much easier to master than a tennis serve. Within 2&ndash;3 sessions, most people feel competent enough to play real matches.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">What equipment do I need?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">A padel racket ($80&ndash;130 for beginners), padel balls (~$14 for a can of 3), and non-marking court shoes ($80&ndash;130). Many clubs offer rentals so you can try before you buy. Standard athletic clothing works fine. See our <Link href="/blog/best-padel-rackets-beginners" className="text-sky-600 hover:underline">beginner rackets guide</Link> for specific picks.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">Can I play padel as singles?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Technically yes, but padel is designed for and almost always played as doubles (2 vs 2). The court dimensions, rules, and strategy are all built around 4 players. Some clubs offer singles play on smaller courts, but doubles is the standard format worldwide.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">How is padel different from tennis?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Padel uses a smaller enclosed court with glass walls in play (like squash), a solid racket with no strings, an underhand serve, and is always played as doubles. The scoring is the same as tennis (15-30-40-game), but the gameplay feels completely different because the walls create longer rallies and unique angles. It&apos;s generally easier to start than tennis.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">How much does it cost to play padel?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Court rental typically costs $30&ndash;75 per hour, split between 4 players &mdash; so $8&ndash;19 per person per session. Some clubs charge per person instead. Equipment rental (racket + balls) is usually $5&ndash;15 if you don&apos;t have your own gear. Many clubs offer membership plans that bring the cost down for regular players. <Link href="/search" className="text-sky-600 hover:underline">Compare prices across 350+ clubs</Link>.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* Dark CTA Section */}
      <div className="bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-white mb-2">Ready to Play?</h2>
          <p className="text-stone-400 mb-6">Find a court, grab a racket, and get your first rallies in.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/search" className="block border border-stone-700 rounded-lg p-5 hover:border-sky-500/50 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">Find a Court</h3>
              <p className="text-sm text-stone-400">350+ padel clubs across the US &rarr;</p>
            </Link>
            <Link href="/blog/best-padel-rackets-beginners" className="block border border-stone-700 rounded-lg p-5 hover:border-amber-500/50 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">Get Your Gear</h3>
              <p className="text-sm text-stone-400">Top 5 beginner rackets from $90 &rarr;</p>
            </Link>
            <Link href="/blog/padel-vs-pickleball" className="block border border-stone-700 rounded-lg p-5 hover:border-emerald-500/50 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">Padel vs Pickleball</h3>
              <p className="text-sm text-stone-400">How they compare &rarr;</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
