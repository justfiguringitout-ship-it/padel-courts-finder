import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Padel vs Pickleball: What\u2019s the Difference? (2026 Guide)',
  description: 'Padel vs pickleball \u2014 what\u2019s the difference? We compare courts, rules, equipment, cost, fitness, and difficulty. Find out which sport is right for you.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/padel-vs-pickleball',
  },
  openGraph: {
    title: 'Padel vs Pickleball: What\u2019s the Difference? (2026 Guide)',
    description: 'Padel vs pickleball \u2014 what\u2019s the difference? We compare courts, rules, equipment, cost, fitness, and difficulty. Find out which sport is right for you.',
    url: 'https://www.padelcourtsfinder.com/blog/padel-vs-pickleball',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=630&fit=crop' }],
  },
};

export default function PadelVsPickleballPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Padel vs Pickleball: What\u2019s the Difference? (2026 Guide)",
    "description": "Padel vs pickleball \u2014 we compare courts, rules, equipment, cost, fitness, and difficulty. Find out which sport is right for you.",
    "image": "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=630&fit=crop",
    "datePublished": "2026-03-25T00:00:00Z",
    "dateModified": "2026-03-25T00:00:00Z",
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
      "@id": "https://www.padelcourtsfinder.com/blog/padel-vs-pickleball"
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is padel the same as pickleball?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No \u2014 padel and pickleball are completely different sports. Padel is played on an enclosed glass court with walls in play, always as doubles, using a perforated solid racket and a pressurized rubber ball. Pickleball is played on an open court (similar to badminton size), can be singles or doubles, and uses a flat paddle with a plastic wiffle-style ball. The rules, scoring, and gameplay feel are entirely different."
        }
      },
      {
        "@type": "Question",
        "name": "Is padel harder than pickleball?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Padel has a slightly steeper learning curve because of the glass walls \u2014 reading rebounds takes practice. However, both sports are significantly easier to pick up than tennis. Pickleball is the easiest racket sport to start, with most people rallying within minutes. Padel becomes more complex and strategic faster as you improve, while pickleball\u2019s depth emerges at higher competitive levels."
        }
      },
      {
        "@type": "Question",
        "name": "Which is more popular, padel or pickleball?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the United States, pickleball dominates with approximately 36 million players. Globally, padel has around 35 million players across 150+ countries and is the fastest-growing sport in Europe and Latin America. Padel is growing rapidly in the US, with 350+ clubs now operating across the country."
        }
      },
      {
        "@type": "Question",
        "name": "Can you play padel on a pickleball court?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Padel requires an enclosed court with glass walls that are integral to gameplay \u2014 players hit the ball off the walls as part of rallies, similar to squash. Pickleball courts are open with no walls. The two sports require completely different facilities, which is why padel is played at dedicated padel clubs while pickleball can use converted tennis courts or portable setups."
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

      {/* Emerald Accent Stripe */}
      <div className="h-1 bg-emerald-600" />

      {/* Dark Hero */}
      <header className="bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="mb-4">
            <Link href="/blog" className="text-stone-400 hover:text-emerald-400 text-sm">&larr; Back to Blog</Link>
          </div>
          <span className="inline-block bg-emerald-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">How-To Guide</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Padel vs Pickleball: What&apos;s the Difference?
          </h1>
          <p className="text-stone-400 mt-3">Everything you need to know to pick the right sport &mdash; or play both</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>March 25, 2026</span>
            <span className="mx-2">&bull;</span>
            <span>11 min read</span>
          </div>
        </div>
      </header>

      <article>
        {/* White Section: Intro + Comparison Table */}
        <div className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Intro */}
            <div className="prose prose-lg prose-stone max-w-none mb-10">
              <p className="text-stone-600 leading-[1.75]">
                Two of the fastest-growing sports in the world, often confused, completely different on court. <strong>Padel</strong> is tennis with walls &mdash; fast-paced, always doubles, with rallies that use glass walls as part of the game. <strong>Pickleball</strong> is ping-pong on a court &mdash; more accessible, can be singles or doubles, with a plastic ball and a kitchen zone that changes everything.
              </p>
              <p className="text-stone-600 leading-[1.75]">
                Both are social, beginner-friendly, and addictive. This guide breaks down every difference so you can pick the right one &mdash; or play both.
              </p>
            </div>

            {/* Quick Comparison Table */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">Quick Comparison</h2>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full text-sm min-w-[600px]">
                  <thead>
                    <tr className="border-b-2 border-stone-200">
                      <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-wider text-stone-500 w-1/3"></th>
                      <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-wider text-emerald-600 w-1/3">Padel</th>
                      <th className="text-left py-3 text-xs font-semibold uppercase tracking-wider text-amber-600 w-1/3">Pickleball</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4 font-medium text-stone-700">Court size</td>
                      <td className="py-3 pr-4 text-stone-600">20m &times; 10m (enclosed, glass walls)</td>
                      <td className="py-3 text-stone-600">13.4m &times; 6.1m (open, no walls)</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4 font-medium text-stone-700">Walls</td>
                      <td className="py-3 pr-4 text-stone-600">Yes &mdash; walls are in play</td>
                      <td className="py-3 text-stone-600">No walls</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4 font-medium text-stone-700">Players</td>
                      <td className="py-3 pr-4 text-stone-600">Doubles only (4 players)</td>
                      <td className="py-3 text-stone-600">Singles or doubles</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4 font-medium text-stone-700">Racket/Paddle</td>
                      <td className="py-3 pr-4 text-stone-600">Solid, perforated, carbon/fiberglass, 340&ndash;390g</td>
                      <td className="py-3 text-stone-600">Flat paddle, lighter, wood/graphite/composite</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4 font-medium text-stone-700">Ball</td>
                      <td className="py-3 pr-4 text-stone-600">Pressurized rubber (like tennis ball)</td>
                      <td className="py-3 text-stone-600">Plastic with holes (wiffle-style)</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4 font-medium text-stone-700">Scoring</td>
                      <td className="py-3 pr-4 text-stone-600">Tennis-style (15-30-40, games, sets)</td>
                      <td className="py-3 text-stone-600">First to 11, win by 2, only server scores</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4 font-medium text-stone-700">Serve</td>
                      <td className="py-3 pr-4 text-stone-600">Underhand, diagonal, must bounce</td>
                      <td className="py-3 text-stone-600">Underhand, diagonal, must bounce</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4 font-medium text-stone-700">Net height</td>
                      <td className="py-3 pr-4 text-stone-600">~34.6 inches</td>
                      <td className="py-3 text-stone-600">36&Prime; sides, 34&Prime; center</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4 font-medium text-stone-700">Cost per hour</td>
                      <td className="py-3 pr-4 text-stone-600">$30&ndash;75/hr (court rental)</td>
                      <td className="py-3 text-stone-600">$5&ndash;15/hr or free (public courts)</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4 font-medium text-stone-700">Learning curve</td>
                      <td className="py-3 pr-4 text-stone-600">Easy start, strategic depth over months</td>
                      <td className="py-3 text-stone-600">Very easy start, strategic at high level</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4 font-medium text-stone-700">Fitness level</td>
                      <td className="py-3 pr-4 text-stone-600">Moderate&ndash;high (more running)</td>
                      <td className="py-3 text-stone-600">Low&ndash;moderate (less movement)</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4 font-medium text-stone-700">Global players</td>
                      <td className="py-3 pr-4 text-stone-600">~35M (150+ countries)</td>
                      <td className="py-3 text-stone-600">~36M US, ~14M worldwide</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4 font-medium text-stone-700">Biggest markets</td>
                      <td className="py-3 pr-4 text-stone-600">Spain, Argentina, Sweden, Mexico, US</td>
                      <td className="py-3 text-stone-600">United States, Canada</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>

        {/* Stone-50 Section: Courts + Equipment + Rules */}
        <div className="bg-stone-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* The Courts */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">The Courts</h2>
              <div className="bg-white border border-stone-200 rounded-xl p-6 md:p-8">
                <p className="text-stone-600 leading-[1.75] mb-4">
                  The biggest visual difference. Padel courts are enclosed in glass and metal mesh &mdash; the walls are <strong>in play</strong>, meaning you can hit the ball off them like squash. This creates longer rallies and angles that don&apos;t exist in any other racket sport. Courts cost $40,000&ndash;100,000+ to build, which is why padel requires dedicated facilities.
                </p>
                <p className="text-stone-600 leading-[1.75] mb-4">
                  Pickleball courts are open, about the size of a badminton court. The &ldquo;kitchen&rdquo; (non-volley zone) is the signature feature &mdash; a 7-foot zone near the net where you can&apos;t volley. Courts can be painted onto existing tennis courts or set up in parking lots with portable nets, which is why pickleball is <em>everywhere</em>.
                </p>
                <p className="text-stone-600 leading-[1.75]">
                  <strong>Bottom line:</strong> Padel courts are purpose-built arenas. Pickleball courts can be set up almost anywhere. This single difference explains most of the cost and accessibility gap between the two sports.
                </p>
              </div>
            </section>

            {/* Equipment */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">Equipment</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-white border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">Padel Racket</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">Solid with holes, made of carbon fiber or fiberglass, weighs 340&ndash;390g. Different shapes for different styles &mdash; round for control, diamond for power, teardrop for balance.</p>
                  <p className="text-sm text-stone-500">Starter cost: <strong className="text-[#1a1a1a]">$80&ndash;130</strong></p>
                </div>
                <div className="bg-white border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">Pickleball Paddle</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">Flat and lighter, made of wood, graphite, or composite. Simpler design with less variation in shape &mdash; most paddles look similar.</p>
                  <p className="text-sm text-stone-500">Starter cost: <strong className="text-[#1a1a1a]">$30&ndash;80</strong></p>
                </div>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-6">
                <p className="text-stone-600 leading-[1.75] mb-4">
                  Both use solid paddles (no strings), but the similarity ends there. Padel balls look like slightly deflated tennis balls &mdash; pressurized rubber that bounces and spins. Pickleball balls are plastic with holes, like a wiffle ball. The ball difference alone changes the entire feel of the game: padel is fast and dynamic, pickleball is slower and more tactical at the net.
                </p>
                <p className="text-stone-600 leading-[1.75]">
                  Need a padel racket? Check our <Link href="/blog/best-padel-rackets-beginners" className="text-emerald-600 hover:underline font-medium">Best Padel Rackets for Beginners (2026)</Link> guide.
                </p>
              </div>
            </section>

            {/* Rules & Gameplay */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">Rules &amp; Gameplay</h2>
              <div className="space-y-4">
                <div className="bg-white border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">Padel</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Always doubles. Walls are in play &mdash; the ball can bounce off the glass after hitting your side of the court, and you play it off the wall. Scoring is tennis-style: 15-30-40-game, best of 3 sets. The serve must be underhand, bounce in the diagonal service box, and can then hit the back wall. The walls create longer, more dynamic rallies with unique angles.
                  </p>
                </div>
                <div className="bg-white border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">Pickleball</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Singles or doubles. The defining feature is the &ldquo;kitchen&rdquo; &mdash; a 7-foot non-volley zone at the net. You cannot hit the ball out of the air while standing in the kitchen, which forces a soft &ldquo;dinking&rdquo; game near the net. Scoring goes to 11 (win by 2), and only the serving team can score points. The serve is underhand and must bounce before the return.
                  </p>
                </div>
                <div className="bg-white border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-2">Common Ground</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Both require an underhand serve. Both have a &ldquo;two-bounce rule&rdquo; &mdash; the serve must bounce, and the return must bounce, before volleys are allowed. Both are played with a net. And both are <em>dramatically</em> more social than most individual sports &mdash; you&apos;re always playing with and against other people on a small court.
                  </p>
                </div>
              </div>
              <p className="text-stone-600 leading-[1.75] mt-5">
                <strong>The feel is different.</strong> Padel rallies are longer and more dynamic &mdash; the walls keep the ball alive, creating spectacular saves and creative angles. Pickleball rallies tend to be shorter and more tactical &mdash; the kitchen forces a soft game near the net that rewards patience and placement over power.
              </p>
            </section>
          </div>
        </div>

        {/* White Section: Learning + Fitness + Cost */}
        <div className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* How Hard Is It to Learn? */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">How Hard Is It to Learn?</h2>
              <p className="text-stone-600 leading-[1.75] mb-4">
                Both are easier than tennis. Pickleball has the lowest barrier of any racket sport &mdash; most people rally within minutes. The smaller court, slower ball, and simple scoring make it incredibly accessible, especially for older players or those returning to sport after a break.
              </p>
              <p className="text-stone-600 leading-[1.75] mb-4">
                Padel&apos;s learning curve is slightly steeper because of the walls &mdash; reading rebounds off glass takes practice and spatial awareness that feels foreign at first. But the enclosed court means the ball stays in play longer, so beginners actually get <em>more</em> rallies (and more fun) from day one compared to tennis. Within 2&ndash;3 sessions, most people feel competent.
              </p>
              <div className="border-l-4 border-emerald-500 bg-emerald-50/80 rounded-r-lg p-5 mt-6">
                <p className="text-stone-700 text-sm leading-relaxed">
                  <strong>Verdict:</strong> Pickleball is easier to start. Padel scales up in complexity and excitement faster as you improve. If you&apos;re looking for a sport with deep strategic layers, padel gets there sooner.
                </p>
              </div>
            </section>

            {/* Fitness & Workout */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">Fitness &amp; Workout</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-1">Padel</h3>
                  <p className="text-3xl font-bold text-emerald-600 mb-2">400&ndash;600 cal/hr</p>
                  <p className="text-stone-600 text-sm leading-relaxed">Larger court means more running, more lateral movement, more explosive bursts. A solid cardio and agility workout.</p>
                </div>
                <div className="border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-1">Pickleball</h3>
                  <p className="text-3xl font-bold text-amber-500 mb-2">250&ndash;400 cal/hr</p>
                  <p className="text-stone-600 text-sm leading-relaxed">Lower impact, less running, less strain on joints. Great for staying active without high physical demands.</p>
                </div>
              </div>
              <p className="text-stone-600 leading-[1.75]">
                Padel is the better workout. But both are dramatically more social and engaging than hitting the gym &mdash; and you&apos;ll barely notice the exercise because you&apos;re focused on the game.
              </p>
            </section>

            {/* Cost to Play */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">Cost to Play</h2>
              <p className="text-stone-600 leading-[1.75] mb-4">
                This is where pickleball wins decisively. Public pickleball courts are free in many US cities &mdash; parks departments have been adding courts at an incredible pace. A starter paddle costs $30&ndash;50. Total cost to start: <strong>under $50</strong>.
              </p>
              <p className="text-stone-600 leading-[1.75] mb-4">
                Padel requires dedicated facilities with glass walls &mdash; you almost always pay for court time. Expect $30&ndash;75 per hour, split between 4 players ($8&ndash;19 per person per session). A starter racket costs $80&ndash;130. Total cost to start: <strong>$100&ndash;200</strong> including your first court rental.
              </p>
              <p className="text-stone-600 leading-[1.75] mb-4">
                The per-session cost of padel is higher, but when you split court rental four ways, it&apos;s comparable to many gym memberships. Many padel clubs also offer membership plans that bring the per-session cost down significantly.
              </p>
              <p className="text-stone-600 leading-[1.75]">
                Find padel courts near you and compare pricing at <Link href="/search" className="text-emerald-600 hover:underline font-medium">Padel Courts Finder</Link>.
              </p>
            </section>
          </div>
        </div>

        {/* Stone-50 Section: Which Should You Play + FAQ */}
        <div className="bg-stone-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Which Should You Play? */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">Which Should You Play?</h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-white border-2 border-emerald-200 rounded-xl p-6">
                  <h3 className="font-bold text-emerald-700 mb-3">Choose Padel If You&hellip;</h3>
                  <ul className="space-y-2">
                    <li className="text-stone-600 text-sm flex items-start gap-2"><span className="text-emerald-600 mt-0.5">&#10003;</span> Want a fast-paced, athletic game</li>
                    <li className="text-stone-600 text-sm flex items-start gap-2"><span className="text-emerald-600 mt-0.5">&#10003;</span> Love strategic doubles play</li>
                    <li className="text-stone-600 text-sm flex items-start gap-2"><span className="text-emerald-600 mt-0.5">&#10003;</span> Enjoy the unique wall-bounce element</li>
                    <li className="text-stone-600 text-sm flex items-start gap-2"><span className="text-emerald-600 mt-0.5">&#10003;</span> Are willing to invest a bit more to start</li>
                    <li className="text-stone-600 text-sm flex items-start gap-2"><span className="text-emerald-600 mt-0.5">&#10003;</span> Want a sport with serious global competitive growth (FIP is pushing for 2032 Olympics)</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-amber-200 rounded-xl p-6">
                  <h3 className="font-bold text-amber-700 mb-3">Choose Pickleball If You&hellip;</h3>
                  <ul className="space-y-2">
                    <li className="text-stone-600 text-sm flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#10003;</span> Want the easiest possible entry point</li>
                    <li className="text-stone-600 text-sm flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#10003;</span> Prefer lower-impact exercise</li>
                    <li className="text-stone-600 text-sm flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#10003;</span> Want to play singles sometimes</li>
                    <li className="text-stone-600 text-sm flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#10003;</span> Have access to free public courts</li>
                    <li className="text-stone-600 text-sm flex items-start gap-2"><span className="text-amber-500 mt-0.5">&#10003;</span> Are looking for the largest immediate US community</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-stone-200 rounded-xl p-6">
                <h3 className="font-bold text-[#1a1a1a] mb-2">Choose Both If You&hellip;</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Live somewhere with both options. Many players enjoy both for different reasons &mdash; pickleball for the casual accessibility and large community, padel for the athletic intensity and unique wall gameplay. They train different skills and scratch different itches. There&apos;s no rule that says you have to pick just one.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">Is padel the same as pickleball?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">No &mdash; they&apos;re completely different sports. Padel uses enclosed glass courts with walls in play, pressurized rubber balls, and is always played as doubles. Pickleball uses open courts, plastic wiffle-style balls, and can be played as singles or doubles. The rules, scoring, equipment, and gameplay feel are entirely different.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">Is padel harder than pickleball?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Slightly. Padel has a steeper learning curve because of the glass walls &mdash; reading rebounds takes practice. But both are significantly easier than tennis. Pickleball is the easiest racket sport to start. Padel becomes more complex and strategically rewarding faster as you improve.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">Which is more popular, padel or pickleball?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">In the US, pickleball dominates with ~36 million players. Globally, padel has ~35 million players across 150+ countries and is the fastest-growing sport in Europe and Latin America. Padel is growing rapidly in the US with <Link href="/search" className="text-emerald-600 hover:underline">350+ clubs now operating</Link>.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">Can you play padel on a pickleball court?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">No. Padel requires enclosed glass walls that are integral to gameplay. Pickleball courts are open. The two sports require completely different facilities, which is why padel is played at dedicated clubs while pickleball can use converted tennis courts or portable setups.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* Dark CTA Section */}
      <div className="bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-white mb-2">Ready to Try Padel?</h2>
          <p className="text-stone-400 mb-6">Find a court, learn the rules, and get your first racket.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/search" className="block border border-stone-700 rounded-lg p-5 hover:border-emerald-500/50 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">Find Courts Near You</h3>
              <p className="text-sm text-stone-400">350+ padel clubs across the US &rarr;</p>
            </Link>
            <Link href="/how-to-play" className="block border border-stone-700 rounded-lg p-5 hover:border-emerald-500/50 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">How to Play Padel</h3>
              <p className="text-sm text-stone-400">Rules, scoring, and tips &rarr;</p>
            </Link>
            <Link href="/blog/best-padel-rackets-beginners" className="block border border-stone-700 rounded-lg p-5 hover:border-amber-500/50 transition-colors text-center">
              <h3 className="font-semibold text-white mb-1">Best Beginner Rackets</h3>
              <p className="text-sm text-stone-400">Top 5 picks from $90&ndash;$130 &rarr;</p>
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            <Link href="/blog/best-padel-clubs-miami" className="block border border-stone-700 rounded-lg p-4 hover:border-emerald-500/50 transition-colors">
              <span className="text-xs text-stone-500 uppercase tracking-wider">City Guide</span>
              <h3 className="font-semibold text-white text-sm mt-0.5">Best Clubs in Miami &rarr;</h3>
            </Link>
            <Link href="/blog/best-padel-clubs-nyc" className="block border border-stone-700 rounded-lg p-4 hover:border-emerald-500/50 transition-colors">
              <span className="text-xs text-stone-500 uppercase tracking-wider">City Guide</span>
              <h3 className="font-semibold text-white text-sm mt-0.5">Best Clubs in NYC &rarr;</h3>
            </Link>
            <Link href="/equipment" className="block border border-stone-700 rounded-lg p-4 hover:border-amber-500/50 transition-colors">
              <span className="text-xs text-stone-500 uppercase tracking-wider">Equipment</span>
              <h3 className="font-semibold text-white text-sm mt-0.5">All Gear Guides &rarr;</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
