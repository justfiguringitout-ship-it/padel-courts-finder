import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Padel Racket Shapes Explained: Round vs Teardrop vs Diamond (2026)",
  description: "Round, teardrop, or diamond? What padel racket shape actually does to your game — sweet spot, balance, power, and control — and how to pick the right one for your level.",
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/blog/padel-racket-shapes-explained",
  },
  openGraph: {
    title: "Padel Racket Shapes Explained: Round vs Teardrop vs Diamond",
    description: "What padel racket shape actually does to your game — sweet spot, balance, power, and control — and how to pick the right one for your level.",
    url: "https://www.padelcourtsfinder.com/blog/padel-racket-shapes-explained",
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Padel Racket Shapes Explained: Round vs Teardrop vs Diamond",
    description: "What padel racket shape actually does to your game and how to pick the right one for your level.",
  },
};

/* Simplified racket-head diagrams — the shaded zone is the sweet spot */
function ShapeDiagram() {
  const shapes = [
    {
      name: "Round",
      head: "M60 10 C95 10 110 40 110 75 C110 115 90 140 60 140 C30 140 10 115 10 75 C10 40 25 10 60 10 Z",
      spot: { cx: 60, cy: 78, rx: 28, ry: 30 },
      note: "Sweet spot: center, large",
    },
    {
      name: "Teardrop",
      head: "M60 8 C100 8 112 45 110 80 C108 118 88 142 60 142 C32 142 12 118 10 80 C8 45 20 8 60 8 Z",
      spot: { cx: 60, cy: 60, rx: 26, ry: 26 },
      note: "Sweet spot: mid-high, medium",
    },
    {
      name: "Diamond",
      head: "M60 6 C98 6 114 38 112 72 C110 112 92 144 60 144 C28 144 10 112 8 72 C6 38 22 6 60 6 Z",
      spot: { cx: 60, cy: 42, rx: 22, ry: 20 },
      note: "Sweet spot: high, small",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
      {shapes.map((s) => (
        <figure key={s.name} className="bg-white border border-stone-200 rounded-xl p-6 text-center">
          <svg viewBox="0 0 120 190" className="mx-auto h-44 w-auto" role="img" aria-label={`${s.name} padel racket shape — ${s.note}`}>
            <path d={s.head} fill="oklch(0.16 0.028 255)" fillOpacity="0.06" stroke="oklch(0.16 0.028 255)" strokeWidth="2.5" />
            <ellipse cx={s.spot.cx} cy={s.spot.cy} rx={s.spot.rx} ry={s.spot.ry} fill="#16A34A" fillOpacity="0.3" />
            <ellipse cx={s.spot.cx} cy={s.spot.cy} rx={s.spot.rx * 0.55} ry={s.spot.ry * 0.55} fill="#16A34A" fillOpacity="0.45" />
            <rect x="52" y="140" width="16" height="42" rx="5" fill="oklch(0.16 0.028 255)" fillOpacity="0.15" stroke="oklch(0.16 0.028 255)" strokeWidth="2" />
          </svg>
          <figcaption className="mt-3">
            <div className="font-display font-semibold text-foreground">{s.name}</div>
            <div className="text-sm text-stone-500 mt-1">{s.note}</div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function RacketShapesPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Padel Racket Shapes Explained: Round vs Teardrop vs Diamond",
    "description": "What padel racket shape actually does to your game — sweet spot, balance, power, and control — and how to pick the right one for your level.",
    "datePublished": "2026-07-03T00:00:00Z",
    "dateModified": "2026-07-03T00:00:00Z",
    "author": { "@type": "Organization", "name": "Padel Courts Finder", "url": "https://www.padelcourtsfinder.com" },
    "publisher": { "@type": "Organization", "name": "Padel Courts Finder", "logo": { "@type": "ImageObject", "url": "https://www.padelcourtsfinder.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.padelcourtsfinder.com/blog/padel-racket-shapes-explained" }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best padel racket shape for beginners?",
        "acceptedAnswer": { "@type": "Answer", "text": "Round. The sweet spot sits in the center of the face and is the largest of the three shapes, so off-center hits still come back over the net. Nearly every coach recommends starting round and only moving on once your technique is consistent." }
      },
      {
        "@type": "Question",
        "name": "Is a diamond padel racket harder to play with?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. The head-heavy balance and small, high sweet spot punish off-center contact. Diamond rackets reward players who already strike cleanly and want maximum smash power — for most club players a teardrop gives 90% of the power with far more forgiveness." }
      },
      {
        "@type": "Question",
        "name": "What shape do professional padel players use?",
        "acceptedAnswer": { "@type": "Answer", "text": "Mostly diamond and aggressive teardrop shapes, because pros generate their own control through technique and want power on demand. But pros are the exception — their rackets are often the worst choice for the players who buy them." }
      },
      {
        "@type": "Question",
        "name": "Can racket shape fix problems in my padel game?",
        "acceptedAnswer": { "@type": "Answer", "text": "It can help more than most upgrades. If you're mistiming volleys, a round racket adds forgiveness; if your smashes die at the glass, a teardrop or diamond adds pop. But shape complements technique — it doesn't replace lessons or court time." }
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
          <span className="inline-block bg-padel-green text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">Equipment</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Padel Racket Shapes Explained: Round vs Teardrop vs Diamond
          </h1>
          <p className="text-lg text-stone-400 mt-3">The one spec that matters more than price, brand, or carbon count</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>July 3, 2026</span>
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
              Walk into any pro shop and you&apos;ll hear about carbon layups, EVA densities, and player signatures.
              Ignore all of it for a minute. The single spec that changes how a padel racket plays more than anything
              else is its <strong>shape</strong> — because shape decides where the sweet spot sits, how big it is,
              and how the racket&apos;s weight is balanced in your hand.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              There are three shapes: <strong>round</strong>, <strong>teardrop</strong>, and <strong>diamond</strong>.
              Here&apos;s what each one actually does to your game, and how to pick without overthinking it.
            </p>
            <ShapeDiagram />
          </section>

          {/* Round */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Round: the control shape</h2>
            <p className="text-stone-700 leading-relaxed">
              A round racket puts the sweet spot dead center and makes it as large as the geometry allows. The balance
              sits low, toward the handle, so the racket feels lighter than its actual weight and whips through the
              air easily. The result is forgiveness: mishits still clear the net, quick volleys feel stable, and your
              wrist and elbow take less shock.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              The trade-off is raw power — with the mass centered low, you have to supply the pace yourself. That&apos;s
              exactly what you want while you&apos;re building technique, which is why every racket in our{" "}
              <Link href="/blog/best-padel-rackets-beginners" className="text-padel-green hover:underline">beginner rackets guide</Link>{" "}
              is round. Plenty of advanced defensive players stay on round shapes their whole careers.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mt-4 bg-white border border-stone-200 rounded-lg p-4">
              <strong className="text-foreground">Pick round if:</strong> you&apos;re in your first 1–2 years, you play a defensive
              or all-court game, or you&apos;ve ever had tennis elbow.
            </p>
          </section>

          {/* Teardrop */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Teardrop: the all-rounder</h2>
            <p className="text-stone-700 leading-relaxed">
              A teardrop shifts the sweet spot up the face and moves the balance toward the head — not all the way,
              but enough that the racket does some of the work on overheads and smashes. You lose a little of the
              round shape&apos;s forgiveness and gain meaningful power. For most club players who&apos;ve got the basics
              down, this is the sweet spot in both senses.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              It&apos;s the natural second racket: when your beginner frame starts feeling like it has a ceiling, a
              teardrop raises it without punishing every off-center volley. Most of the picks in our{" "}
              <Link href="/blog/best-padel-rackets-intermediate" className="text-padel-green hover:underline">intermediate rackets guide</Link>{" "}
              are teardrops for exactly this reason.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mt-4 bg-white border border-stone-200 rounded-lg p-4">
              <strong className="text-foreground">Pick teardrop if:</strong> you play 1–3 times a week, your technique is
              consistent, and you want more put-away power without a punishing racket.
            </p>
          </section>

          {/* Diamond */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Diamond: the power shape</h2>
            <p className="text-stone-700 leading-relaxed">
              A diamond racket stacks its mass high in the head. The sweet spot is small and sits near the top of the
              face — exactly where you make contact on a full smash. Hit it clean and the ball explodes off the face;
              hit it an inch low and you&apos;ll feel the frame twist and the ball die. Head-heavy balance also means
              slower hands at the net and more strain on the arm.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              This is the shape the pros swing, and the shape in most of our{" "}
              <Link href="/blog/best-padel-rackets-2026" className="text-padel-green hover:underline">top pro picks for 2026</Link>.
              Be honest about your level before you buy one: a diamond amplifies a great technique and exposes a
              developing one.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mt-4 bg-white border border-stone-200 rounded-lg p-4">
              <strong className="text-foreground">Pick diamond if:</strong> you play aggressively at a high level, you finish
              points overhead, and forgiveness is no longer what&apos;s holding you back.
            </p>
          </section>

          {/* Comparison table */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Side by side</h2>
            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="bg-stone-50 text-left">
                    <th className="p-3 font-semibold">Shape</th>
                    <th className="p-3 font-semibold">Sweet spot</th>
                    <th className="p-3 font-semibold">Balance</th>
                    <th className="p-3 font-semibold">Character</th>
                    <th className="p-3 font-semibold">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Round</td>
                    <td className="p-3">Center, large</td>
                    <td className="p-3">Low (handle)</td>
                    <td className="p-3">Control &amp; forgiveness</td>
                    <td className="p-3"><Link href="/blog/best-padel-rackets-beginners" className="text-padel-green hover:underline">Beginners</Link>, defensive players</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Teardrop</td>
                    <td className="p-3">Mid-high, medium</td>
                    <td className="p-3">Medium</td>
                    <td className="p-3">Balanced power</td>
                    <td className="p-3"><Link href="/blog/best-padel-rackets-intermediate" className="text-padel-green hover:underline">Intermediates</Link>, all-court players</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Diamond</td>
                    <td className="p-3">High, small</td>
                    <td className="p-3">High (head)</td>
                    <td className="p-3">Maximum power</td>
                    <td className="p-3"><Link href="/blog/best-padel-rackets-2026" className="text-padel-green hover:underline">Advanced</Link>, attacking players</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* How to choose */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">How to choose in 30 seconds</h2>
            <ul className="space-y-3 text-stone-700 leading-relaxed list-disc pl-5">
              <li><strong>First racket, or under a year of play?</strong> Round. No exceptions worth making.</li>
              <li><strong>Consistent contact, want more on your smash?</strong> Teardrop.</li>
              <li><strong>Advanced, attacking, finishing points overhead?</strong> Diamond — or a hard teardrop if your arm complains.</li>
              <li><strong>Any history of elbow or shoulder pain?</strong> Stay round or soft teardrop regardless of level. Head-light balance is kinder to joints.</li>
            </ul>
            <p className="text-stone-700 leading-relaxed mt-4">
              Whatever shape you land on, try before you buy when you can — many clubs keep demo rackets at the front
              desk. Find one near you with our <Link href="/search" className="text-padel-green hover:underline">court finder</Link>.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What is the best padel racket shape for beginners?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Round. The sweet spot sits in the center of the face and is the largest of the three shapes, so off-center hits still come back over the net. Nearly every coach recommends starting round — see our <Link href="/blog/best-padel-rackets-beginners" className="text-padel-green hover:underline">beginner picks</Link>.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Is a diamond padel racket harder to play with?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Yes. The head-heavy balance and small, high sweet spot punish off-center contact. For most club players a teardrop gives 90% of the power with far more forgiveness.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What shape do professional padel players use?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Mostly diamond and aggressive teardrop shapes — pros generate their own control through technique and want power on demand. Their rackets are often the worst choice for the players who buy them.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Can racket shape fix problems in my padel game?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">It can help more than most upgrades — a round racket adds forgiveness, a teardrop or diamond adds pop. But shape complements technique; it doesn&apos;t replace lessons or court time.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Keep Reading */}
        <section className="grain bg-court mt-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-white mb-6">Keep Reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/best-padel-rackets-beginners" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Beginner Rackets</div>
                <p className="text-stone-400 text-sm mt-1">5 round-shaped picks from $90–$130</p>
              </Link>
              <Link href="/blog/best-padel-rackets-intermediate" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Intermediate Rackets</div>
                <p className="text-stone-400 text-sm mt-1">Teardrop upgrades from $170–$280</p>
              </Link>
              <Link href="/blog/best-padel-rackets-2026" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Pro Rackets 2026</div>
                <p className="text-stone-400 text-sm mt-1">The top 5 signature frames reviewed</p>
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
