import Link from 'next/link';
import type { Metadata } from 'next';
import { TrackedLink } from '@/components/TrackedLink';
import { StickyPickBar } from '@/components/sticky-pick-bar';

export const metadata: Metadata = {
  title: 'Adidas Metalbone HRD+ 3.3 Review (2026): Maximum Power, Zero Apologies',
  description:
    'Adidas Metalbone HRD+ 3.3 review: Ale Galán-designed diamond racket with Carbon Aluminized 2:1 surface and hard EVA core. Explosive power — if your technique can handle it.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/adidas-metalbone-hrd-review',
  },
  openGraph: {
    title: 'Adidas Metalbone HRD+ 3.3 Review (2026): Maximum Power, Zero Apologies',
    description:
      'Ale Galán-designed diamond racket with Carbon Aluminized 2:1 surface and hard EVA core. Explosive power — if your technique can handle it.',
    url: 'https://www.padelcourtsfinder.com/blog/adidas-metalbone-hrd-review',
    siteName: 'Padel Courts Finder',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adidas Metalbone HRD+ 3.3 Review (2026)',
    description:
      'Ale Galán-designed diamond racket with explosive power — if your technique can handle it.',
  },
};

const AMAZON_URL = 'https://www.amazon.com/dp/B0CNWHR78K?tag=padel02-20';

export default function AdidasMetalboneHrdReviewPage() {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Adidas Metalbone HRD+ 3.3",
    "description": "Ale Galán-designed diamond padel racket with a Carbon Aluminized 2:1 surface, hard High Memory EVA core, and carbon frame. Best for left-side attackers who want firepower.",
    "offers": { "@type": "Offer", "price": "279.99", "priceCurrency": "USD", "url": AMAZON_URL },
    "review": {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": 6.3, "bestRating": 10 },
      "author": { "@type": "Organization", "name": "Padel Courts Finder" },
      "datePublished": "2026-07-05"
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is the Adidas Metalbone HRD+ 3.3 too advanced for intermediate players?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is demanding for pure intermediates. The hard EVA core and head-heavy diamond balance punish mishits and require precise technique. It suits upper-intermediate or borderline advanced players — especially left-side attackers — rather than players making their first upgrade."
        }
      },
      {
        "@type": "Question",
        "name": "How powerful is the Adidas Metalbone HRD+ 3.3?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We score it 9/10 for power. The Carbon Aluminized 2:1 surface is one of the most explosive under $300, and the diamond shape concentrates weight in the head for devastating smashes while the hard EVA core enhances ball exit speed."
        }
      },
      {
        "@type": "Question",
        "name": "Does the Adidas Metalbone HRD+ 3.3 come with protection tape?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — 3M protection tape comes pre-applied from the factory, a useful touch given the aggressive net play this racket invites."
        }
      }
    ]
  };

  const ratings = [
    { label: 'Power', score: 9 },
    { label: 'Control', score: 5 },
    { label: 'Comfort', score: 5 },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <StickyPickBar label="Our verdict" productName="Adidas Metalbone HRD+ 3.3" price="$279.99" href={AMAZON_URL} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      <div className="h-1 bg-padel-green" />

      {/* Hero */}
      <header className="grain bg-court">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="mb-5">
            <Link href="/blog" className="text-stone-400 hover:text-turf text-sm">&larr; Back to Blog</Link>
          </div>
          <span className="inline-block bg-padel-green text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">Equipment</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Adidas Metalbone HRD+ 3.3 Review (2026)</h1>
          <p className="text-lg text-stone-400 mt-3">Maximum power, zero apologies &mdash; the attacker&apos;s racket that punishes anything less than clean contact</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>July 5, 2026</span>
            <span className="mx-2">&bull;</span>
            <span>4 min read</span>
          </div>
          <div className="text-sm text-stone-500 mt-1">By the Padel Courts Finder editorial team</div>
        </div>
      </header>

      <article>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          {/* Affiliate disclosure */}
          <div className="bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 flex items-start gap-2">
            <span className="text-stone-400 mt-0.5 text-sm">&#8505;</span>
            <p className="text-xs text-stone-500 italic leading-relaxed">
              This guide contains affiliate links. If you purchase through our links, we may earn a small commission at no extra cost to you. We only recommend products we believe in.
            </p>
          </div>

          {/* Verdict box */}
          <section>
            <div className="bg-white border-2 border-padel-green rounded-xl p-6 md:p-8 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">Our Verdict</span>
              <div className="flex items-start justify-between gap-4 mb-1">
                <h2 className="text-xl font-bold text-foreground">Adidas Metalbone HRD+ 3.3</h2>
                <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">6.3/10</span>
              </div>
              <p className="text-sm italic text-stone-500 mb-4">Best for: Left-side attackers who want firepower</p>
              <p className="text-stone-600 leading-[1.75] mb-5">
                The Metalbone HRD+ 3.3 is a specialist&apos;s racket: one of the most explosive surfaces under $300, built for players who finish points overhead. The 6.3 average hides the point &mdash; if you buy it for the 9/10 power and have the technique to feed it, the control and comfort trade-offs are the price of admission.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <TrackedLink href={AMAZON_URL} type="affiliate" productName="Adidas Metalbone HRD+" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 bg-padel-green text-white font-medium rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
                <span className="text-stone-500 text-sm">$279.99 at time of writing</span>
              </div>
            </div>
          </section>

          {/* Intro */}
          <section>
            <p className="text-stone-700 leading-relaxed">
              Designed with world #1-caliber input from Ale Gal&aacute;n, the Metalbone HRD+ 3.3 makes no pretense of being an all-rounder. It&apos;s a diamond-shaped power frame: the mass sits high in the head, the Carbon Aluminized 2:1 surface returns energy explosively, and the hard High Memory EVA core pushes ball exit speed even further. Every design decision points the same direction &mdash; toward the smash.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              That single-mindedness is exactly why it earns a place in our intermediate lineup despite its demands. Nothing else under $300 delivers this much firepower, and Adidas even ships it with 3M protection tape pre-applied &mdash; a small but telling detail, because this is a racket that invites aggressive, glass-scraping play.
            </p>
          </section>

          {/* Specs */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Specs at a Glance</h2>
            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm bg-white">
                <tbody>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium text-foreground">Shape</td>
                    <td className="p-3 text-stone-600">Diamond</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium text-foreground">Weight</td>
                    <td className="p-3 text-stone-600">345&ndash;360g</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium text-foreground">Core</td>
                    <td className="p-3 text-stone-600">High Memory EVA (Hard)</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium text-foreground">Surface</td>
                    <td className="p-3 text-stone-600">Carbon Aluminized 2:1</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium text-foreground">Frame</td>
                    <td className="p-3 text-stone-600">Carbon</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium text-foreground">Price</td>
                    <td className="p-3 text-stone-600">$279.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Ratings */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">How It Scores</h2>
            <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-5">
              {ratings.map((r) => (
                <div key={r.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-stone-600">{r.label}</span>
                    <span className="text-sm text-stone-400">{r.score}/10</span>
                  </div>
                  <div className="h-2 bg-stone-200 rounded-full">
                    <div className={`h-2 rounded-full ${r.score >= 7 ? 'bg-padel-green' : 'bg-amber-500'}`} style={{ width: `${r.score * 10}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-stone-700 leading-relaxed mt-5">
              Power (9/10) is the reason this racket exists. The diamond shape with high balance concentrates weight in the head for devastating smashes, and the hard EVA core enhances ball exit speed. Control (5/10) and comfort (5/10) pay for it: the hard core and head-heavy balance punish mishits and demand precise technique on every ball.
            </p>
          </section>

          {/* Who it's for */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Who It&apos;s For &mdash; and Who Should Skip It</h2>
            <p className="text-stone-700 leading-relaxed">
              <strong className="text-foreground">Buy it if</strong> you&apos;re an upper-intermediate or borderline advanced player who plays primarily left-side &mdash; the attacker position. If you already strike cleanly, finish points overhead, and your current racket feels like it has a power ceiling, this delivers serious firepower that few frames under $300 can match.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              <strong className="text-foreground">Skip it if</strong> you&apos;re a pure intermediate still building consistency. The trade-off is real: this racket punishes mishits, and the hard core plus head-heavy balance will expose a developing technique rather than flatter it. A more forgiving frame will win you more points until your contact is reliably clean.
            </p>
            <div className="space-y-2 mt-5">
              <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> One of the most powerful surfaces under $300, 3M tape pre-applied</p>
              <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Hard EVA core punishes mishits, demanding for pure intermediates</p>
            </div>
          </section>

          {/* Alternatives */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Alternatives Worth Considering</h2>
            <p className="text-stone-700 leading-relaxed">
              If you read the &quot;skip it&quot; paragraph and felt seen, the <Link href="/blog/nox-ml10-pro-cup-review" className="text-padel-green hover:underline">NOX ML10 Pro Cup</Link> is the mirror-image pick &mdash; a $169.99 round racket scoring 9/10 on control that trades smash power for forgiveness and topspin. For the full field between those two extremes, our <Link href="/blog/best-padel-rackets-intermediate" className="text-padel-green hover:underline">best intermediate padel rackets guide</Link> compares five upgrades from $170 to $280, where the Metalbone took the &quot;most power under $300&quot; slot.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Is the Adidas Metalbone HRD+ 3.3 too advanced for intermediate players?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">It&apos;s demanding for pure intermediates. The hard EVA core and head-heavy diamond balance punish mishits and require precise technique. It suits upper-intermediate or borderline advanced players &mdash; especially left-side attackers &mdash; rather than players making their first upgrade.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">How powerful is the Adidas Metalbone HRD+ 3.3?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">We score it 9/10 for power. The Carbon Aluminized 2:1 surface is one of the most explosive under $300, and the diamond shape concentrates weight in the head for devastating smashes while the hard EVA core enhances ball exit speed.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Does the Adidas Metalbone HRD+ 3.3 come with protection tape?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Yes &mdash; 3M protection tape comes pre-applied from the factory, a useful touch given the aggressive net play this racket invites.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Keep Reading */}
        <section className="grain bg-court mt-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-white mb-6">Keep Reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/best-padel-rackets-intermediate" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Intermediate Rackets</div>
                <p className="text-stone-400 text-sm mt-1">Top 5 upgrades from $170&ndash;$280 compared</p>
              </Link>
              <Link href="/blog/nox-ml10-pro-cup-review" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">NOX ML10 Pro Cup Review</div>
                <p className="text-stone-400 text-sm mt-1">The control pick &mdash; 9/10 control at $169.99</p>
              </Link>
              <Link href="/blog/padel-racket-shapes-explained" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Racket Shapes Explained</div>
                <p className="text-stone-400 text-sm mt-1">Round vs teardrop vs diamond &mdash; what shape does to your game</p>
              </Link>
              <Link href="/search" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Find a Court Near You</div>
                <p className="text-stone-400 text-sm mt-1">Test your new racket at a club nearby</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
