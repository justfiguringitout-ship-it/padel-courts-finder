import Link from "next/link";
import type { Metadata } from "next";
import { TrackedLink } from "@/components/TrackedLink";
import { StickyPickBar } from "@/components/sticky-pick-bar";

export const metadata: Metadata = {
  title: "Wilson Blade Elite V2 Review (2026): The Balanced Upgrade",
  description:
    "Full review of the $189 Wilson Blade Elite V2 — a 360g teardrop with a carbon/fiberglass hybrid face. Scores, specs, and who this all-court racket suits.",
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/blog/wilson-blade-elite-v2-review",
  },
  openGraph: {
    title: "Wilson Blade Elite V2 Review (2026): The Balanced Upgrade",
    description:
      "Full review of the $189 Wilson Blade Elite V2 — a 360g teardrop with a carbon/fiberglass hybrid face. Scores, specs, and who this all-court racket suits.",
    url: "https://www.padelcourtsfinder.com/blog/wilson-blade-elite-v2-review",
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wilson Blade Elite V2 Review (2026): The Balanced Upgrade",
    description:
      "Full review of the $189 Wilson Blade Elite V2 — a 360g teardrop with a carbon/fiberglass hybrid face. Scores, specs, and who this all-court racket suits.",
  },
};

export default function WilsonBladeEliteV2ReviewPage() {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Wilson Blade Elite V2",
    "description": "A 360g teardrop padel racket with a soft EVA core, textured carbon/fiberglass hybrid surface, and carbon frame, aimed at all-court intermediate players.",
    "offers": {
      "@type": "Offer",
      "price": "189.00",
      "priceCurrency": "USD",
      "url": "https://www.amazon.com/dp/B09TSWCFHD?tag=padel02-20"
    },
    "review": {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": 7.0, "bestRating": 10 },
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
        "name": "Is the Wilson Blade Elite V2 good for intermediate players?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — it's our pick for all-court intermediates who want balance. The teardrop shape and carbon/fiberglass hybrid surface add power over a beginner racket, while the Soft EVA core keeps it forgiving enough for players who still mishit occasionally."
        }
      },
      {
        "@type": "Question",
        "name": "Is the Wilson Blade Elite V2 outdated in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's a 2022 model, so it's older than most rivals — but that means it's battle-tested and proven, and at $189 you're getting Wilson build quality that would cost more in a current-year release."
        }
      },
      {
        "@type": "Question",
        "name": "What is Sharp Hole Technology on the Blade Elite V2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's Wilson's modified drilling pattern for the face perforations, designed to give the ball extra bite. Combined with the textured hybrid surface, it helps you generate more spin on cuts and overheads."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <StickyPickBar label="Our verdict" productName="Wilson Blade Elite V2" price="$189.00" href="https://www.amazon.com/dp/B09TSWCFHD?tag=padel02-20" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Accent Stripe */}
      <div className="h-1 bg-padel-green" />

      {/* Dark Hero */}
      <header className="grain bg-court">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="mb-5">
            <Link href="/blog" className="text-stone-400 hover:text-turf text-sm">&larr; Back to Blog</Link>
          </div>
          <span className="inline-block bg-padel-green text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">Equipment</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Wilson Blade Elite V2 Review (2026)
          </h1>
          <p className="text-lg text-stone-400 mt-3">A teardrop that refuses to pick a side &mdash; and that&apos;s exactly the point</p>
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
          {/* Affiliate Disclosure */}
          <div className="bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 flex items-start gap-2">
            <span className="text-stone-400 mt-0.5 text-sm">&#8505;</span>
            <p className="text-xs text-stone-500 italic leading-relaxed">
              This guide contains affiliate links. If you purchase through our links, we may earn a small commission at no extra cost to you. We only recommend products we believe in.
            </p>
          </div>

          {/* Verdict Box */}
          <section>
            <div className="bg-white border-2 border-padel-green rounded-xl p-6 md:p-8 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2 className="text-2xl font-bold text-foreground">Our Verdict</h2>
                <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">7.0/10</span>
              </div>
              <p className="text-sm italic text-stone-500 mb-4">Best for: All-court players who want balance</p>
              <p className="text-stone-600 leading-[1.75] mb-5">
                The Blade Elite V2 is the racket we point to when an intermediate asks for &quot;a bit of everything.&quot; It&apos;s a 360g teardrop that adds real ball speed over a beginner frame without turning punishing: the carbon/fiberglass hybrid face brings the pace, the Soft EVA core keeps the landing gentle, and the textured surface plus Sharp Hole Technology handle the spin. Yes, it&apos;s a 2022 model &mdash; but that cuts both ways, because at $189 you&apos;re getting proven Wilson build quality at a price newer releases can&apos;t touch.
              </p>
              <TrackedLink
                href="https://www.amazon.com/dp/B09TSWCFHD?tag=padel02-20"
                type="affiliate"
                productName="Wilson Blade Elite V2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 bg-padel-green text-white font-medium rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 hover:shadow-md transition-all duration-200"
              >
                Check Price on Amazon &rarr;
              </TrackedLink>
            </div>
          </section>

          {/* Specs */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Specs at a Glance</h2>
            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm bg-white">
                <tbody>
                  <tr className="border-b border-stone-100">
                    <td className="p-3 font-medium text-stone-700">Shape</td>
                    <td className="p-3 text-stone-600">Teardrop</td>
                  </tr>
                  <tr className="border-b border-stone-100 bg-stone-50/50">
                    <td className="p-3 font-medium text-stone-700">Weight</td>
                    <td className="p-3 text-stone-600">360g</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="p-3 font-medium text-stone-700">Core</td>
                    <td className="p-3 text-stone-600">Soft EVA</td>
                  </tr>
                  <tr className="border-b border-stone-100 bg-stone-50/50">
                    <td className="p-3 font-medium text-stone-700">Surface</td>
                    <td className="p-3 text-stone-600">Carbon/Fiberglass Hybrid, Textured</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="p-3 font-medium text-stone-700">Frame</td>
                    <td className="p-3 text-stone-600">Carbon</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-stone-700">Price</td>
                    <td className="p-3 text-stone-600">$189.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Rating Bars */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">How It Scores</h2>
            <div className="grid grid-cols-3 gap-3 py-4 px-4 bg-white border border-stone-200 rounded-xl">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-stone-500">Power</span>
                  <span className="text-xs text-stone-400">7/10</span>
                </div>
                <div className="h-1.5 bg-stone-200 rounded-full">
                  <div className="h-1.5 rounded-full bg-padel-green" style={{ width: "70%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-stone-500">Control</span>
                  <span className="text-xs text-stone-400">7/10</span>
                </div>
                <div className="h-1.5 bg-stone-200 rounded-full">
                  <div className="h-1.5 rounded-full bg-padel-green" style={{ width: "70%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-stone-500">Comfort</span>
                  <span className="text-xs text-stone-400">7/10</span>
                </div>
                <div className="h-1.5 bg-stone-200 rounded-full">
                  <div className="h-1.5 rounded-full bg-padel-green" style={{ width: "70%" }} />
                </div>
              </div>
            </div>
            <p className="text-stone-600 leading-[1.75] mt-5">
              Three sevens across the board is unusual on our score cards, and it&apos;s the most honest summary of this racket you&apos;ll find. Nothing spikes, nothing craters. The teardrop shape moves the sweet spot up the face enough that overheads carry more weight than they would on a round frame, while the Soft EVA core pulls comfort back toward beginner-racket territory. The carbon/fiberglass hybrid surface splits the difference too &mdash; noticeably quicker off the face than pure fiberglass, but without the harshness of a full carbon build.
            </p>
            <p className="text-stone-600 leading-[1.75] mt-4">
              Spin is where the details earn their keep. The textured finish gives the face genuine grip on the ball, and Wilson&apos;s Sharp Hole Technology &mdash; a modified drilling pattern for the perforations &mdash; adds extra bite on top. Wrapped in a carbon frame at a manageable 360g, the whole package feels coherent: every component pushes toward the same balanced, all-court brief.
            </p>
          </section>

          {/* Who it's for */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Who It&apos;s For &mdash; and Who Should Skip It</h2>
            <p className="text-stone-600 leading-[1.75]">
              Buy the Blade Elite V2 if you&apos;re an intermediate all-court player making your first serious upgrade. It rewards a more consistent swing with real power and spin, but the Soft EVA core means the occasional mishit &mdash; and at this level there will be occasional mishits &mdash; doesn&apos;t sting or sail. It&apos;s also the value play of the intermediate tier: $189 for this much Wilson build quality is, frankly, a steal.
            </p>
            <p className="text-stone-600 leading-[1.75] mt-4">
              Skip it if you want a specialist. Aggressive attackers chasing maximum smash power will find the balanced setup tame compared with a dedicated power frame, and buyers who need the newest gear should know this is a 2022 release &mdash; battle-tested and proven, but not this season&apos;s launch. If your game already leans hard in one direction, a racket that refuses to pick a side may feel like a compromise rather than a feature.
            </p>
          </section>

          {/* Alternatives */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Alternatives Worth Considering</h2>
            <p className="text-stone-600 leading-[1.75]">
              The Blade Elite V2 is the all-around pick in our <Link href="/blog/best-padel-rackets-intermediate" className="text-padel-green hover:underline">best intermediate padel rackets guide</Link>, where it sits alongside the spin-focused NOX ML10 Pro Cup ($169.99) and the power-first Adidas Metalbone HRD+ ($279.99) if you want to lean one way or the other. Not ready for an intermediate frame yet? Read our <Link href="/blog/babolat-contact-review" className="text-padel-green hover:underline">Babolat Contact review</Link> &mdash; the $89.95 round racket we recommend to nearly every new player.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Is the Wilson Blade Elite V2 good for intermediate players?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Yes &mdash; it&apos;s our pick for all-court intermediates who want balance. The teardrop shape and carbon/fiberglass hybrid surface add power over a beginner racket, while the Soft EVA core keeps it forgiving enough for players who still mishit occasionally.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Is the Wilson Blade Elite V2 outdated in 2026?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">It&apos;s a 2022 model, so it&apos;s older than most rivals &mdash; but that means it&apos;s battle-tested and proven, and at $189 you&apos;re getting Wilson build quality that would cost more in a current-year release.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What is Sharp Hole Technology on the Blade Elite V2?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">It&apos;s Wilson&apos;s modified drilling pattern for the face perforations, designed to give the ball extra bite. Combined with the textured hybrid surface, it helps you generate more spin on cuts and overheads.</p>
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
                <div className="font-semibold text-white">Best Intermediate Rackets (2026)</div>
                <p className="text-stone-400 text-sm mt-1">The Blade Elite V2 vs 4 upgrades from $170&ndash;$280</p>
              </Link>
              <Link href="/blog/babolat-contact-review" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Babolat Contact Review</div>
                <p className="text-stone-400 text-sm mt-1">Our top beginner pick at $89.95</p>
              </Link>
              <Link href="/blog/best-padel-rackets-control" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Control Rackets</div>
                <p className="text-stone-400 text-sm mt-1">Precision-first picks for steady players</p>
              </Link>
              <Link href="/search" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Find a Court Near You</div>
                <p className="text-stone-400 text-sm mt-1">Search padel clubs across the US</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
