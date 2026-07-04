import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "7 Padel Patterns Every Beginner Should Know (2026)",
  description: "Padel tactics for beginners: 7 standard patterns — serve and net rush, the lob, the chiquita, and more — with the sequence, why it works, and the counter.",
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/blog/padel-patterns-beginners",
  },
  openGraph: {
    title: "7 Padel Patterns Every Beginner Should Know",
    description: "The standard openings of padel: 7 repeatable patterns — serve and net rush, the lob, the chiquita, and more — with the sequence, why it works, and the counter.",
    url: "https://www.padelcourtsfinder.com/blog/padel-patterns-beginners",
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "7 Padel Patterns Every Beginner Should Know",
    description: "The standard openings of padel: 7 repeatable patterns with the sequence, why each works, and how to counter it.",
  },
};

export default function PadelPatternsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "7 Padel Patterns Every Beginner Should Know",
    "description": "Padel tactics for beginners: 7 standard patterns — serve and net rush, the lob, the chiquita, and more — with the sequence, why it works, and the counter.",
    "datePublished": "2026-07-04T00:00:00Z",
    "dateModified": "2026-07-04T00:00:00Z",
    "author": { "@type": "Organization", "name": "Padel Courts Finder", "url": "https://www.padelcourtsfinder.com" },
    "publisher": { "@type": "Organization", "name": "Padel Courts Finder", "logo": { "@type": "ImageObject", "url": "https://www.padelcourtsfinder.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.padelcourtsfinder.com/blog/padel-patterns-beginners" }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a chiquita in padel?",
        "acceptedAnswer": { "@type": "Answer", "text": "A chiquita is a slow, low ball played from the back of the court at the feet of a net player. It isn't meant to win the point — it forces an awkward low volley that the opponent must hit upward, giving your team time to advance to the net behind it. It's the safer alternative to the lob when your opponents defend the lob well." }
      },
      {
        "@type": "Question",
        "name": "What's the most important pattern for beginners?",
        "acceptedAnswer": { "@type": "Answer", "text": "The lob to take the net. Roughly 70–80% of points in club padel are won by the team at the net, and the lob is the main tool for getting there when you're stuck at the back. If you drill only one thing, drill a deep, high lob and the habit of advancing together behind it." }
      },
      {
        "@type": "Question",
        "name": "How is padel strategy different from tennis?",
        "acceptedAnswer": { "@type": "Answer", "text": "Tennis rewards hitting winners from the baseline; padel almost never does. The walls return most power shots, so padel is a positional game: the team at the net controls the point, the lob replaces the passing shot as the main weapon, and points are built over several shots rather than ended with one." }
      },
      {
        "@type": "Question",
        "name": "Where can I drill these patterns?",
        "acceptedAnswer": { "@type": "Answer", "text": "Any padel club with open court time or social play. Use the Padel Courts Finder search to find courts near you — many clubs run beginner clinics and drill sessions where coaches feed exactly these patterns." }
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
            7 Padel Patterns Every Beginner Should Know
          </h1>
          <p className="text-lg text-stone-400 mt-3">The standard openings of padel — the same sequences that decide nearly every club match</p>
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
              Chess players don&apos;t invent their first ten moves — they learn standard openings, because centuries
              of games have shown which sequences work. Padel is the same. Watch any club match and you&apos;ll see the
              same handful of patterns repeat, point after point: the serve-and-rush, the lob to steal the net, the
              smash through the middle. The players who win aren&apos;t improvising better — they&apos;re running
              patterns they&apos;ve drilled until they&apos;re automatic.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              That&apos;s great news for beginners. You don&apos;t need creativity or a hundred shots; you need seven
              sequences. Here&apos;s each one: the setup, the steps, why it works, and — because your opponents will run
              them at you too — the counter. They pair naturally with the court coverage rules in our{" "}
              <Link href="/blog/padel-positioning-guide" className="text-padel-green hover:underline">positioning guide</Link>.
            </p>
          </section>

          {/* 1. Serve + net rush */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Serve + net rush: the default opening</h2>
            <p className="text-stone-700 leading-relaxed">
              <strong>The setup:</strong> you&apos;re serving. Your partner is already stationed at the net on their side.
              This is padel&apos;s 1.e4 — the pattern that starts most points, because the serving team gets first claim
              on the net.
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-stone-700 leading-relaxed mt-4">
              <li>Hit a low slice serve out wide, dragging the returner toward the side glass.</li>
              <li>Follow your serve in immediately — three or four quick steps toward the net.</li>
              <li>Play your first volley <strong>deep</strong>, back at the returner&apos;s feet, not for a winner.</li>
              <li>Settle into net position next to your partner: two up, controlling the point.</li>
            </ol>
            <p className="text-stone-700 leading-relaxed mt-4">
              <strong>Why it works:</strong> the team at the net wins the large majority of points in padel. A wide slice
              stays low off the glass, making an aggressive return nearly impossible — the returner has to play something
              defensive, which is exactly what a rushing server wants to volley.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mt-4 bg-white border border-stone-200 rounded-lg p-4">
              <strong className="text-foreground">The counter:</strong> a deep lob return over the server&apos;s partner.
              If the serving team has to retreat for a lob, the rush is dead before it starts.
            </p>
          </section>

          {/* 2. Lob to take the net */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. The lob to take the net: defense&apos;s main plan</h2>
            <p className="text-stone-700 leading-relaxed">
              <strong>The setup:</strong> you and your partner are stuck at the back; your opponents own the net. In
              tennis you&apos;d try a passing shot. In padel the walls swallow passing shots — so the way forward is up
              and over.
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-stone-700 leading-relaxed mt-4">
              <li>Wait for a ball you can control — not a fast volley at your feet.</li>
              <li>Lift a high, deep lob over the net player&apos;s backhand side, aiming to land it near the back glass.</li>
              <li>The moment the lob is clearly over their heads, advance <strong>together</strong> with your partner.</li>
              <li>Take the net positions your opponents just vacated and get ready to volley.</li>
            </ol>
            <p className="text-stone-700 leading-relaxed mt-4">
              <strong>Why it works:</strong> a good lob forces both opponents to turn and retreat, flipping the court in
              one shot. It converts the worst position in padel into the best one without needing any power at all. If
              you drill one pattern from this article, drill this one.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mt-4 bg-white border border-stone-200 rounded-lg p-4">
              <strong className="text-foreground">The counter:</strong> the bandeja (pattern 4) — an overhead that returns
              the lob deep without giving up net position.
            </p>
          </section>

          {/* 3. Chiquita + advance */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Chiquita + advance: the low road to the net</h2>
            <p className="text-stone-700 leading-relaxed">
              <strong>The setup:</strong> same problem as the lob — you&apos;re at the back, they&apos;re at the net —
              but your opponents smash every lob you throw up. Time for the low road. The chiquita (&quot;little
              one&quot; in Spanish) is a slow, soft ball aimed at the net player&apos;s feet.
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-stone-700 leading-relaxed mt-4">
              <li>From the back of the court, take pace off the ball and play it low and slow at the nearest net player&apos;s shoelaces.</li>
              <li>They&apos;re forced into an awkward low volley — hitting up, with no pace to work with.</li>
              <li>Advance with your partner behind the shot, exactly as you would behind a lob.</li>
              <li>Attack their weak, floating reply from your new net position.</li>
            </ol>
            <p className="text-stone-700 leading-relaxed mt-4">
              <strong>Why it works:</strong> a volley struck below net height can&apos;t be hit downward or hard. The
              chiquita manufactures that situation on demand, and unlike a short lob, a slightly imperfect chiquita
              rarely gets smashed. It&apos;s the safer of the two roads forward.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mt-4 bg-white border border-stone-200 rounded-lg p-4">
              <strong className="text-foreground">The counter:</strong> a firm, deep low volley back to the corner — and
              net players who keep their volleys deep make the chiquita much harder to attempt.
            </p>
          </section>

          {/* 4. Bandeja */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. The bandeja to hold the net</h2>
            <p className="text-stone-700 leading-relaxed">
              <strong>The setup:</strong> you&apos;re at the net and an opponent throws up a decent lob — the exact
              counter from pattern 2. Smash it and you&apos;ll likely feed the back glass and lose the net; let it bounce
              and you&apos;ve surrendered the net anyway. The bandeja is the third option.
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-stone-700 leading-relaxed mt-4">
              <li>Turn sideways and track the lob back with small steps, racket up.</li>
              <li>Make contact at shoulder height with a flat, slicing swing — a tray (&quot;bandeja&quot;), not a hammer.</li>
              <li>Place it deep toward the opponents&apos; back corner, low and skidding after the bounce.</li>
              <li>Recover forward to the net position you never really left.</li>
            </ol>
            <p className="text-stone-700 leading-relaxed mt-4">
              <strong>Why it works:</strong> the bandeja answers the lob without gambling. The point resets with your
              team still at the net and your opponents still pinned at the back — which means the lob, their main plan,
              gained them nothing. It&apos;s the single most important overhead in padel; we break down the full
              technique in <Link href="/blog/padel-bandeja-explained" className="text-padel-green hover:underline">our bandeja guide</Link>.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mt-4 bg-white border border-stone-200 rounded-lg p-4">
              <strong className="text-foreground">The counter:</strong> lob again — deeper, and over the other player.
              Rallies at club level are often lob-bandeja-lob-bandeja until someone&apos;s ball comes up short.
            </p>
          </section>

          {/* 5. Attack the middle */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Attack the middle: the standard finish</h2>
            <p className="text-stone-700 leading-relaxed">
              <strong>The setup:</strong> your team is at the net and it&apos;s time to actually win the point. Beginners
              aim for the sidelines; experienced players aim between their opponents.
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-stone-700 leading-relaxed mt-4">
              <li>From the net, drive your volleys and overheads down the middle of the court, at hip height or below.</li>
              <li>Watch the hesitation — &quot;yours or mine?&quot; — as both defenders leave it or lunge together.</li>
              <li>Whatever comes back arrives through the center, with no angle on it.</li>
              <li>Volley the weak middle reply into the open space the scramble created, and repeat until it doesn&apos;t come back.</li>
            </ol>
            <p className="text-stone-700 leading-relaxed mt-4">
              <strong>Why it works:</strong> three reasons. The middle creates confusion between two players. The net is
              lowest at the center. And geometry: a ball returned from the middle can&apos;t be angled past you. Wide
              shots look spectacular but give the side glass a chance to rescue your opponent — the middle gives them
              nothing.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mt-4 bg-white border border-stone-200 rounded-lg p-4">
              <strong className="text-foreground">The counter:</strong> clear ownership rules — decide before the match
              who takes the middle (usually the player with the forehand there) so the hesitation never happens.
            </p>
          </section>

          {/* 6. Play the glass on defense */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Play the glass on defense: the patience pattern</h2>
            <p className="text-stone-700 leading-relaxed">
              <strong>The setup:</strong> your opponents are at the net firing deep volleys and overheads at you. The
              beginner instinct is to take everything before the wall, on the stretch, half-volleying under pressure.
              The wall is not your enemy — it&apos;s a teammate who slows the ball down for you.
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-stone-700 leading-relaxed mt-4">
              <li>When a deep ball comes, step <em>forward and away</em> from the back glass instead of crowding it.</li>
              <li>Let the ball hit the glass and rebound out to you — it comes off slower and at a friendlier height.</li>
              <li>Reset with a deep lob (pattern 2) or a controlled deep drive. No hero shots from the back.</li>
              <li>Repeat until the attackers overpress and give you a short ball or a lobbing chance.</li>
            </ol>
            <p className="text-stone-700 leading-relaxed mt-4">
              <strong>Why it works:</strong> the back glass takes pace off even a heavy overhead, turning a desperate
              scramble into a comfortable, waist-high reset. Defense in padel isn&apos;t about winning the point —
              it&apos;s about extending it until the attacking team makes the error or leaves a lobbing window. Patience
              is a pattern too.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mt-4 bg-white border border-stone-200 rounded-lg p-4">
              <strong className="text-foreground">The counter:</strong> attackers should mix in soft, short volleys that
              die before the glass — the wall can&apos;t help with a ball that never reaches it.
            </p>
          </section>

          {/* 7. Wide-angle finish */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. The wide-angle finish off the side glass</h2>
            <p className="text-stone-700 leading-relaxed">
              <strong>The setup:</strong> you&apos;ve been running pattern 5, hammering the middle, and your opponents
              have adjusted — both defenders now pinch toward the center. Good. You&apos;ve just opened the sides.
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-stone-700 leading-relaxed mt-4">
              <li>Play one or two more volleys through the middle to hold the defenders&apos; attention there.</li>
              <li>When a ball arrives that you can control, angle a <strong>short, soft volley</strong> wide toward the side glass.</li>
              <li>Aim for the ball to strike low on the side glass near the net, so it rebounds across and away from the court.</li>
              <li>The defender has to sprint from the middle and dig a ball that&apos;s dying sideways — usually they don&apos;t get there.</li>
            </ol>
            <p className="text-stone-700 leading-relaxed mt-4">
              <strong>Why it works:</strong> it&apos;s the payoff of the middle pattern. Attack the middle and the angles
              open; take the angle and the middle opens again. A short ball off the side glass changes direction after
              the bounce, which makes it one of the hardest balls in padel to retrieve. This is the point-ender — but
              only after the middle has done the setup work.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mt-4 bg-white border border-stone-200 rounded-lg p-4">
              <strong className="text-foreground">The counter:</strong> don&apos;t over-pinch. Defenders should shade
              toward the middle, not camp in it — one long step from the sideline, not three.
            </p>
          </section>

          {/* Closing */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Drill one pattern per session</h2>
            <p className="text-stone-700 leading-relaxed">
              Don&apos;t try to install all seven at once. Pick one pattern per session and run it deliberately, even
              when it costs you points — serve and rush every service game one week, lob-and-advance the next. In two
              months the sequences stop being decisions and start being habits, which is exactly what &quot;good
              instincts&quot; actually are.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              None of these patterns need an expensive racket — a forgiving round frame from our{" "}
              <Link href="/blog/best-padel-rackets-beginners" className="text-padel-green hover:underline">beginner rackets guide</Link>{" "}
              is ideal while you&apos;re grooving them, and good{" "}
              <Link href="/blog/padel-positioning-guide" className="text-padel-green hover:underline">positioning habits</Link>{" "}
              matter far more than equipment.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What is a chiquita in padel?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">A chiquita is a slow, low ball played from the back of the court at the feet of a net player. It isn&apos;t meant to win the point — it forces an awkward low volley that the opponent must hit upward, giving your team time to advance to the net behind it. It&apos;s the safer alternative to the lob when your opponents defend the lob well.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What&apos;s the most important pattern for beginners?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">The lob to take the net. Roughly 70–80% of points in club padel are won by the team at the net, and the lob is the main tool for getting there when you&apos;re stuck at the back. If you drill only one thing, drill a deep, high lob and the habit of advancing together behind it.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">How is padel strategy different from tennis?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Tennis rewards hitting winners from the baseline; padel almost never does. The walls return most power shots, so padel is a positional game: the team at the net controls the point, the lob replaces the passing shot as the main weapon, and points are built over several shots rather than ended with one.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Where can I drill these patterns?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Any padel club with open court time or social play — many run beginner clinics and drill sessions where coaches feed exactly these patterns. Use our <Link href="/search" className="text-padel-green hover:underline">court finder</Link> to find clubs near you.</p>
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
                <p className="text-stone-400 text-sm mt-1">Master the overhead that holds the net</p>
              </Link>
              <Link href="/blog/padel-positioning-guide" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Padel Positioning 101</div>
                <p className="text-stone-400 text-sm mt-1">Where to stand in every phase of the point</p>
              </Link>
              <Link href="/blog/best-padel-rackets-beginners" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Beginner Rackets</div>
                <p className="text-stone-400 text-sm mt-1">Forgiving round frames to learn the patterns on</p>
              </Link>
              <Link href="/blog/how-to-choose-padel-club" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">How to Choose a Padel Club</div>
                <p className="text-stone-400 text-sm mt-1">Find the right place to drill and play</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
