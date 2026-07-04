import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Bandeja, Explained: Padel's Most Important Shot",
  description: "What the bandeja is, why it exists, and how to hit it — the sliced padel overhead that answers the lob without giving up the net, step by step.",
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/blog/padel-bandeja-explained",
  },
  openGraph: {
    title: "The Bandeja, Explained: Padel's Most Important Shot",
    description: "What the bandeja is, why it exists, and how to hit it — the sliced padel overhead that answers the lob without giving up the net.",
    url: "https://www.padelcourtsfinder.com/blog/padel-bandeja-explained",
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Bandeja, Explained: Padel's Most Important Shot",
    description: "The sliced padel overhead that answers the lob without giving up the net — what it is and how to hit it.",
  },
};

export default function BandejaExplainedPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Bandeja, Explained: Padel's Most Important Shot",
    "description": "What the bandeja is, why it exists, and how to hit it — the sliced padel overhead that answers the lob without giving up the net.",
    "datePublished": "2026-07-04T00:00:00Z",
    "dateModified": "2026-07-04T00:00:00Z",
    "author": { "@type": "Organization", "name": "Padel Courts Finder", "url": "https://www.padelcourtsfinder.com" },
    "publisher": { "@type": "Organization", "name": "Padel Courts Finder", "logo": { "@type": "ImageObject", "url": "https://www.padelcourtsfinder.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.padelcourtsfinder.com/blog/padel-bandeja-explained" }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does bandeja mean in padel?",
        "acceptedAnswer": { "@type": "Answer", "text": "Bandeja is Spanish for 'tray' — the name comes from the way you carry the racket through contact, face open, as if holding a tray. In padel it refers to a controlled, sliced overhead used to answer a lob while keeping your position at the net." }
      },
      {
        "@type": "Question",
        "name": "What's the difference between a bandeja and a víbora?",
        "acceptedAnswer": { "@type": "Answer", "text": "Both are sliced overheads, but the bandeja is defensive-neutral: slower, flatter contact, hit mostly to keep the net. The víbora ('viper') is its aggressive cousin — faster swing, more side-spin, contact slightly lower and more to the side, aimed to hurt the opponents rather than just reset the point." }
      },
      {
        "@type": "Question",
        "name": "Should beginners learn the bandeja?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — after the basics. Once you can rally, volley, and lob, the bandeja is the first 'real padel' shot to learn, because opponents will lob you constantly and smashing every lob loses points fast. Even a rough bandeja that lands deep beats a spectacular smash that comes back off the glass." }
      },
      {
        "@type": "Question",
        "name": "What racket suits a bandeja-heavy game?",
        "acceptedAnswer": { "@type": "Answer", "text": "A control-oriented round or soft teardrop racket. The bandeja rewards precision and repeatability over raw power — a head-light, forgiving frame makes it easier to place the ball deep time after time." }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      <div className="h-1 bg-padel-green" />

      {/* Hero */}
      <header className="grain bg-court">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative">
          <div className="mb-5">
            <Link href="/blog" className="text-stone-400 hover:text-turf text-sm">&larr; Back to Blog</Link>
          </div>
          <span className="inline-block bg-padel-green text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">How-To</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            The Bandeja, Explained: Padel&apos;s Most Important Shot
          </h1>
          <p className="text-lg text-stone-400 mt-3">The sliced overhead that answers the lob without giving up the net</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>July 4, 2026</span>
            <span className="mx-2">&bull;</span>
            <span>6 min read</span>
          </div>
          <div className="text-sm text-stone-500 mt-1">By the Padel Courts Finder editorial team</div>
        </div>
      </header>

      <article>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          {/* Intro */}
          <section>
            <p className="text-stone-700 leading-relaxed">
              The bandeja — Spanish for <strong>&ldquo;tray&rdquo;</strong> — is padel&apos;s signature overhead, and
              the shot that most clearly separates people who&apos;ve taken a lesson from people who haven&apos;t.
              It looks like a gentle, almost lazy smash, and that&apos;s exactly the point of confusion: unlike a
              tennis smash, the bandeja&apos;s job usually isn&apos;t to end the rally. Its job is to <strong>keep
              your position at the net</strong> while a lob travels over your head.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              If you come from tennis, this will feel wrong for a few weeks. Then it will click, and your whole
              understanding of the sport will click with it.
            </p>
          </section>

          {/* What it is */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">What a bandeja actually is</h2>
            <p className="text-stone-700 leading-relaxed">
              A bandeja is a <strong>controlled, sliced overhead</strong>. Contact happens at shoulder-to-head
              height — not at full stretch above you — slightly in front of your body and out to your hitting side.
              The racket face stays open, you carve under and around the outside of the ball, and the swing finishes
              forward rather than snapping down. Picture carrying a tray of drinks through the contact zone: that
              flat, open carry is where the name comes from.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              The target is almost always <strong>deep, and usually cross-court</strong>. The slice keeps the ball
              low after it bounces and deadens it off the back glass, so the opponents can&apos;t attack the rebound.
              You&apos;re not trying to win the point with this ball — you&apos;re trying to make it impossible for
              them to win the point with theirs, while you and your partner stay parked at the net.
            </p>
          </section>

          {/* Why it exists */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Why the bandeja exists at all</h2>
            <p className="text-stone-700 leading-relaxed">
              Padel is a net game: the team at the net wins most points, which is why smart{" "}
              <Link href="/blog/padel-positioning-guide" className="text-padel-green hover:underline">positioning</Link>{" "}
              revolves around taking and holding that ground. The main weapon for taking the net <em>back</em> is
              the lob. Every decent team will lob you again and again, betting that you&apos;ll either retreat or
              do something rash.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              The rash thing is the full smash. Smash a deep lob with everything you have and the walls punish you:
              the ball rebounds off the back glass, your opponents play it comfortably, and — because a big smash
              pulls you backward and off balance — they lob or pass you while you&apos;re recovering. You hit the
              &ldquo;winner&rdquo;; they took the net. The bandeja is the counter that answers the lob{" "}
              <strong>without surrendering position</strong>. It trades spectacular for sustainable, which is the
              trade padel rewards over and over — the same logic behind most of the{" "}
              <Link href="/blog/padel-patterns-beginners" className="text-padel-green hover:underline">patterns beginners should learn first</Link>.
            </p>
          </section>

          {/* How to hit it */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">How to hit it, step by step</h2>
            <ol className="space-y-3 text-stone-700 leading-relaxed list-decimal pl-5">
              <li>
                <strong>Turn sideways early.</strong> The moment you read the lob, rotate your shoulders and hips
                side-on to the net. Facing the net square-on is the number one giveaway of a player about to hit a
                bad overhead.
              </li>
              <li>
                <strong>Racket up immediately.</strong> Get the racket behind your head as you turn, non-hitting
                arm pointing up at the ball to track it. No last-second backswing.
              </li>
              <li>
                <strong>Move back with side steps or crossovers.</strong> Track the ball backward while staying
                sideways — never backpedal facing the net. Small adjusting steps position you so the ball drops
                into your zone instead of onto your head.
              </li>
              <li>
                <strong>Contact at shoulder-to-head height, in front and to the side.</strong> Let the ball come
                down out of the sky. Contact slightly in front of your body line gives you control and lets you
                move forward through the shot.
              </li>
              <li>
                <strong>Slice with an open face.</strong> Carve the outside-bottom of the ball with the face open,
                like a high volley with more shape. The finish travels forward toward your target, not down at
                the court.
              </li>
              <li>
                <strong>Land moving forward.</strong> The shot ends with your weight coming through the ball and
                your first step heading back to the net. Bandeja and recovery are one motion, not two.
              </li>
            </ol>
            <p className="text-stone-600 text-sm leading-relaxed mt-6 bg-white border border-stone-200 rounded-lg p-4">
              <strong className="text-foreground">The three most common mistakes:</strong> letting the ball drift
              behind your head (turn and move earlier), hitting it flat and hard like a mini-smash (open the face,
              swing slower than feels natural), and drifting backward after contact and staying there (the whole
              point of the shot is to return to the net — if you don&apos;t recover, you paid for the bandeja and
              skipped the reward).
            </p>
          </section>

          {/* Bandeja vs víbora vs smash */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Bandeja vs víbora vs smash</h2>
            <p className="text-stone-700 leading-relaxed mb-5">
              The bandeja is one of three overheads you&apos;ll choose between every time a lob goes up. Which one
              is right depends on how short the lob is and how much balance you have under it.
            </p>
            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="bg-stone-50 text-left">
                    <th className="p-3 font-semibold">Shot</th>
                    <th className="p-3 font-semibold">Speed &amp; spin</th>
                    <th className="p-3 font-semibold">Contact</th>
                    <th className="p-3 font-semibold">Job</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Bandeja</td>
                    <td className="p-3">Controlled pace, slice</td>
                    <td className="p-3">Shoulder-to-head height, in front</td>
                    <td className="p-3">Keep the net, neutralize the lob</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Víbora</td>
                    <td className="p-3">Faster, heavy side-spin</td>
                    <td className="p-3">Lower and more to the side, more aggressive cut</td>
                    <td className="p-3">Attack a weaker lob, force a defensive reply</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Smash</td>
                    <td className="p-3">Maximum pace, flat or topspin</td>
                    <td className="p-3">Full extension overhead</td>
                    <td className="p-3">End the point when the lob is short</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-stone-700 leading-relaxed mt-5">
              A useful default for club players: bandeja unless the lob is clearly short and you&apos;re balanced —
              then smash. The víbora sits in between and is worth adding once the bandeja is automatic.
            </p>
          </section>

          {/* Receiving end */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">When you&apos;re on the receiving end</h2>
            <p className="text-stone-700 leading-relaxed">
              A good bandeja is bad news for the lobbing team, and it&apos;s worth understanding why. Your lob was
              supposed to do one of two things: force an error, or force the net team to retreat so you could move
              up. A well-placed bandeja does neither — it comes back deep, low off the glass, and hard to attack,
              and when you look up, both opponents are still standing at the net. You&apos;ve spent a lob and
              gained nothing.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              Against bandeja-solid opponents, quality beats quantity: lob deeper and higher to push contact behind
              them, aim at the weaker overhead (usually the backhand side), and mix in low, fast balls at their feet
              so they can&apos;t camp on the volley. And when a bandeja lands short — they will, eventually — that&apos;s
              your invitation to attack. The fastest way to build the shot yourself is repetition, so{" "}
              <Link href="/search" className="text-padel-green hover:underline">find a court to practice on</Link>{" "}
              and feed each other lobs for twenty minutes. It&apos;s the highest-return drill in padel.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What does bandeja mean in padel?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Bandeja is Spanish for &ldquo;tray&rdquo; — the name comes from the way you carry the racket through contact, face open, as if holding a tray. In padel it refers to a controlled, sliced overhead used to answer a lob while keeping your position at the net.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What&apos;s the difference between a bandeja and a víbora?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Both are sliced overheads, but the bandeja is defensive-neutral: slower, flatter contact, hit mostly to keep the net. The víbora (&ldquo;viper&rdquo;) is its aggressive cousin — faster swing, more side-spin, contact slightly lower and more to the side, aimed to hurt the opponents rather than just reset the point.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Should beginners learn the bandeja?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Yes — after the basics. Once you can rally, volley, and lob, the bandeja is the first &ldquo;real padel&rdquo; shot to learn, because opponents will lob you constantly and smashing every lob loses points fast. Even a rough bandeja that lands deep beats a spectacular smash that comes back off the glass.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What racket suits a bandeja-heavy game?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">A control-oriented round or soft teardrop racket. The bandeja rewards precision and repeatability over raw power — a head-light, forgiving frame makes it easier to place the ball deep time after time. See our <Link href="/blog/best-padel-rackets-control" className="text-padel-green hover:underline">control rackets guide</Link> for picks.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Keep Reading */}
        <section className="grain bg-court mt-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-white mb-6">Keep Reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/padel-positioning-guide" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Padel Positioning 101</div>
                <p className="text-stone-400 text-sm mt-1">Where to stand, and why the net wins</p>
              </Link>
              <Link href="/blog/padel-patterns-beginners" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">7 Patterns Every Beginner Should Know</div>
                <p className="text-stone-400 text-sm mt-1">Simple point plans that win club matches</p>
              </Link>
              <Link href="/blog/best-padel-rackets-power" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Power Rackets</div>
                <p className="text-stone-400 text-sm mt-1">For when the lob is short and it&apos;s time to smash</p>
              </Link>
              <Link href="/search" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Find a Court Near You</div>
                <p className="text-stone-400 text-sm mt-1">312+ clubs across 37 states</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
