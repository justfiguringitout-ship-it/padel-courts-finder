import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Padel Positioning 101: Where to Stand and Why (2026)",
  description: "Where to stand in padel: the attack and defense positions, why mid-court loses points, and how to move as a pair. Padel positioning made simple.",
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/blog/padel-positioning-guide",
  },
  openGraph: {
    title: "Padel Positioning 101: Where to Stand and Why",
    description: "The attack and defense positions, why mid-court loses points, and how to move as a pair. Padel positioning made simple.",
    url: "https://www.padelcourtsfinder.com/blog/padel-positioning-guide",
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Padel Positioning 101: Where to Stand and Why",
    description: "The attack and defense positions, why mid-court loses points, and how to move as a pair.",
  },
};

/* Top-view court diagram — green dots mark the two positions worth holding */
function CourtDiagram() {
  const ink = "oklch(0.16 0.028 255)";
  return (
    <figure className="bg-white border border-stone-200 rounded-xl p-6 my-8 text-center">
      <svg viewBox="0 0 240 440" className="mx-auto h-96 w-auto" role="img" aria-label="Top view of a padel court showing the attacking position about 3 meters from the net and the defensive position near the back glass">
        {/* Court outline (10m x 20m) */}
        <rect x="20" y="20" width="200" height="400" rx="4" fill={ink} fillOpacity="0.04" stroke={ink} strokeWidth="2.5" />
        {/* Net across the middle */}
        <line x1="14" y1="220" x2="226" y2="220" stroke={ink} strokeWidth="3" strokeDasharray="6 5" />
        {/* Service lines (6.95m from the net) */}
        <line x1="20" y1="81" x2="220" y2="81" stroke={ink} strokeWidth="1.5" strokeOpacity="0.5" />
        <line x1="20" y1="359" x2="220" y2="359" stroke={ink} strokeWidth="1.5" strokeOpacity="0.5" />
        {/* Center lines between the service lines */}
        <line x1="120" y1="81" x2="120" y2="220" stroke={ink} strokeWidth="1.5" strokeOpacity="0.5" />
        <line x1="120" y1="220" x2="120" y2="359" stroke={ink} strokeWidth="1.5" strokeOpacity="0.5" />
        {/* Attacking pair — ~2.5-3m off the net, slightly staggered */}
        <circle cx="72" cy="162" r="9" fill="#16A34A" fillOpacity="0.85" />
        <circle cx="168" cy="172" r="9" fill="#16A34A" fillOpacity="0.85" />
        <text x="120" y="146" textAnchor="middle" fill={ink} fillOpacity="0.55" fontSize="11" fontWeight="600">ATTACK &#183; 2.5&#8211;3m OFF THE NET</text>
        {/* Defensive pair — near the back glass */}
        <circle cx="72" cy="398" r="9" fill="#16A34A" fillOpacity="0.85" />
        <circle cx="168" cy="398" r="9" fill="#16A34A" fillOpacity="0.85" />
        <text x="120" y="382" textAnchor="middle" fill={ink} fillOpacity="0.55" fontSize="11" fontWeight="600">DEFENSE &#183; NEAR THE BACK GLASS</text>
      </svg>
      <figcaption className="mt-4 text-sm text-stone-500">
        The only two places worth standing: attacking 2.5&#8211;3m off the net, or defending near the back glass. Everything in between is borrowed time.
      </figcaption>
    </figure>
  );
}

export default function PositioningGuidePage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Padel Positioning 101: Where to Stand and Why",
    "description": "The attack and defense positions, why mid-court loses points, and how to move as a pair. Padel positioning made simple.",
    "datePublished": "2026-07-04T00:00:00Z",
    "dateModified": "2026-07-04T00:00:00Z",
    "author": { "@type": "Organization", "name": "Padel Courts Finder", "url": "https://www.padelcourtsfinder.com" },
    "publisher": { "@type": "Organization", "name": "Padel Courts Finder", "logo": { "@type": "ImageObject", "url": "https://www.padelcourtsfinder.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.padelcourtsfinder.com/blog/padel-positioning-guide" }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where should I stand in padel?",
        "acceptedAnswer": { "@type": "Answer", "text": "In one of two places: about 2.5 to 3 meters back from the net when your team is attacking, or close to the back glass when your team is defending. The mid-court area between them — often called no man's land — is where balls land at your feet, so pass through it but never wait there." }
      },
      {
        "@type": "Question",
        "name": "Which side should the stronger player take?",
        "acceptedAnswer": { "@type": "Answer", "text": "In a right-handed pair, the stronger or more aggressive player usually takes the left side, because the left player's forehand covers the middle and finishes most of the overheads. The right side rewards consistency and control. But the honest answer is the side where each player wins the most points — try both and count." }
      },
      {
        "@type": "Question",
        "name": "Why do we keep losing points at the net?",
        "acceptedAnswer": { "@type": "Answer", "text": "Usually one of three things: you're standing too close to the net so every lob clears you; you and your partner are leaving a gap in the middle by not shifting together; or you advanced behind a weak ball that let opponents hit at your feet. Hold 2.5 to 3 meters off the net, move as a pair, and only come in behind a deep lob or a good chiquita." }
      },
      {
        "@type": "Question",
        "name": "How do I practice positioning?",
        "acceptedAnswer": { "@type": "Answer", "text": "Play practice sets where position is the only thing you grade yourself on — not winners, not smashes. After every shot, ask: am I at the net position, at the back glass, or stuck in between? Book a court and dedicate a session to it." }
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
            Padel Positioning 101: Where to Stand and Why
          </h1>
          <p className="text-lg text-stone-400 mt-3">The two positions worth holding, the zone that loses points, and how to move as a pair</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>July 4, 2026</span>
            <span className="mx-2">&bull;</span>
            <span>7 min read</span>
          </div>
          <div className="text-sm text-stone-500 mt-1">By the Padel Courts Finder editorial team</div>
        </div>
      </header>

      <article>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          {/* Intro */}
          <section>
            <p className="text-stone-700 leading-relaxed">
              Here&apos;s the thing nobody tells you in your first months of padel: most points aren&apos;t won by
              better shots. They&apos;re won by better <strong>positions</strong>. Padel is a net game — the team
              standing at the net wins the large majority of points at every level, because from the net you hit
              down and volley early, while the team at the back can only defend and look for a way forward. The
              whole sport, underneath the bandejas and chiquitas, is a fight for those three meters of court next
              to the net.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              Once you see the game that way, positioning stops being abstract. There are exactly two places worth
              standing, one zone to avoid, and a handful of rules about moving between them. This guide covers all
              of it.
            </p>
            <CourtDiagram />
          </section>

          {/* The two positions */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">The two positions: attack and defense</h2>
            <p className="text-stone-700 leading-relaxed">
              <strong>The attacking position</strong> is roughly 2.5 to 3 meters back from the net — not touching
              it. From there you can volley anything driven at you, and you still have time to track a lob back
              with a bandeja instead of watching it sail over your head. The pair stands slightly staggered: the
              player on the ball side a half-step closer to the net, the partner a half-step back and toward the
              middle, covering the cross-court angle.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              <strong>The defensive position</strong> is near the back glass — close enough that balls bounce past
              you into the wall and come back to a comfortable height, far enough that you&apos;re not jammed
              against it. From here you absorb pressure, keep the ball in play, and wait for the lob or chiquita
              that lets your team take the net back.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mt-4 bg-white border border-stone-200 rounded-lg p-4">
              <strong className="text-foreground">The core habit:</strong> at any moment in a point, you and your partner
              should be in one of these two positions — both at the net, or both at the back. If you can&apos;t say
              which one you&apos;re in, you&apos;re in the wrong place.
            </p>
          </section>

          {/* No man's land */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">No man&apos;s land: where points go to die</h2>
            <p className="text-stone-700 leading-relaxed">
              The transition zone — the strip of mid-court between the service line and the net position — is where
              club players lose more points than anywhere else. Stand there and every decent shot from your
              opponents lands at your feet: too short to play off the glass, too deep to volley comfortably. You
              end up scooping half-volleys off your shoelaces with no time and no angle.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              The zone itself isn&apos;t the problem — you have to cross it every time you move from defense to
              attack. The problem is <strong>camping</strong> in it. Move through it with purpose while the ball is
              traveling, then split-step into one of the two real positions before your opponents make contact. If
              you get caught mid-court as they&apos;re about to hit, stop, get low, and defend the feet — then keep
              moving on the next ball.
            </p>
          </section>

          {/* Moving as a pair */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Move as a pair: the invisible rope</h2>
            <p className="text-stone-700 leading-relaxed">
              Imagine a rope about three or four meters long tied between you and your partner. When one of you
              moves, the rope drags the other along: forward together, back together, and — just as important —
              <strong> sideways together</strong>. When the ball is on your partner&apos;s side, you shift toward
              the middle; when it&apos;s on yours, your partner shifts toward you. The pair slides as a unit toward
              the ball side of the court.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              Why? Because at club level, most winners don&apos;t paint the lines — they go straight through the
              gap <strong>in the middle</strong> of a pair that isn&apos;t shifting together. The side glass helps
              you defend the alleys; nothing helps you defend a hole between two players. Cover the middle first
              and make opponents beat you with the harder, riskier shot down the line. This is the positional
              foundation for the tactical plays in our{" "}
              <Link href="/blog/padel-patterns-beginners" className="text-padel-green hover:underline">7 patterns every beginner should know</Link>.
            </p>
          </section>

          {/* Left vs right */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Left side or right side?</h2>
            <p className="text-stone-700 leading-relaxed">
              In a right-handed pair, the two sides play different roles. The <strong>right side</strong> is the
              consistency role: you take more balls off the glass, keep rallies alive, and set the table. The{" "}
              <strong>left side</strong> is typically the finisher: the left player&apos;s forehand faces the
              middle of the court, so they take most of the overheads through the center and hit more of the
              put-aways. That&apos;s why the more aggressive or stronger player in a pair usually ends up on the
              left.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              But choose honestly, not by ego. The left side means more responsibility on high balls — if your
              overhead game isn&apos;t there yet, you&apos;ll donate points from the &quot;stronger&quot; side.
              Play a few matches on each side and count which one wins your team more points. Left-handers flip the
              logic, and a righty-lefty pair can put both forehands in the middle, which is its own advantage.
            </p>
          </section>

          {/* Advance and retreat */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">When to advance, when to retreat</h2>
            <p className="text-stone-700 leading-relaxed">
              You don&apos;t take the net by wanting it — you take it behind the right ball. The two classic green
              lights are a <strong>deep lob</strong> that pushes your opponents to the back glass, and a good{" "}
              <strong>chiquita</strong> — the soft, low ball at the net player&apos;s feet that forces an upward
              volley. Both buy the time you need to cross no man&apos;s land while your opponents are hitting a
              defensive shot. A weak, floating mid-court ball is a red light: advance behind that and you&apos;ll
              arrive just in time to eat a drive at your ankles.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              Retreating has a rule too. When a lob goes over your head beyond{" "}
              <Link href="/blog/padel-bandeja-explained" className="text-padel-green hover:underline">bandeja range</Link>{" "}
              — the zone where you can still cut it off with a controlled overhead — don&apos;t stretch for a
              miracle smash. Turn, retreat <strong>together</strong> with your partner, and rebuild from the back
              glass. Giving up the net for one ball is a small loss; leaving one player stranded up front while the
              other runs back is how you lose the next three points.
            </p>
          </section>

          {/* The glass */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Let the glass do the work</h2>
            <p className="text-stone-700 leading-relaxed">
              Good defensive positioning is really about trusting the back glass. Players coming from tennis lunge
              at every deep ball before it passes them — and hit rushed, cramped shots from an impossible position.
              In padel, the wall is your second chance: let the deep ball go by, let it rebound off the glass, and
              play it as it comes back toward the court, with more time, a better height, and your body moving
              forward instead of backward.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              That only works if you&apos;re standing in the right place — near the glass, side-on, watching the
              ball all the way. It takes reps on a real court to trust it, and courts with good glass and honest
              bounces make learning faster; our guide on{" "}
              <Link href="/blog/how-to-choose-padel-club" className="text-padel-green hover:underline">how to choose a padel club</Link>{" "}
              covers what to look for. Once the rebound becomes your friend, defense stops feeling like panic and
              starts feeling like patience — which is exactly the mindset that wins the net back.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Where should I stand in padel?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">In one of two places: about 2.5&#8211;3 meters back from the net when your team is attacking, or close to the back glass when your team is defending. The mid-court strip between them — no man&apos;s land — is where balls land at your feet, so pass through it but never wait there.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Which side should the stronger player take?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">In a right-handed pair, usually the left — the left player&apos;s forehand covers the middle and finishes most overheads, so it&apos;s the finisher&apos;s side. The right side rewards consistency. But the honest answer is the side where each player wins the most points: try both and count.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Why do we keep losing points at the net?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Usually one of three things: standing too tight to the net so every lob clears you, leaving a gap in the middle by not shifting together, or advancing behind a weak ball that lets opponents hit at your feet. Hold 2.5&#8211;3m off the net, move as a pair, and only come in behind a deep lob or a good chiquita.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">How do I practice positioning?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Play practice sets where position is the only thing you grade yourself on — not winners, not smashes. After every shot, ask: am I at the net, at the back glass, or stuck in between? <Link href="/search" className="text-padel-green hover:underline">Book a court near you</Link> and dedicate a session to it.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Keep Reading */}
        <section className="grain bg-court mt-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-white mb-6">Keep Reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/padel-bandeja-explained" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">The Bandeja, Explained</div>
                <p className="text-stone-400 text-sm mt-1">The overhead that keeps you at the net</p>
              </Link>
              <Link href="/blog/padel-patterns-beginners" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">7 Patterns Every Beginner Should Know</div>
                <p className="text-stone-400 text-sm mt-1">Simple plays that win club-level points</p>
              </Link>
              <Link href="/blog/best-padel-rackets-control" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Control Rackets</div>
                <p className="text-stone-400 text-sm mt-1">Forgiving frames for a positional game</p>
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
