import Link from "next/link";
import type { Metadata } from "next";
import { TrackedLink } from "@/components/TrackedLink";
import { StickyPickBar } from "@/components/sticky-pick-bar";

export const metadata: Metadata = {
  title: "Babolat Contact Review (2026): The Easiest First Padel Racket",
  description:
    "Hands-on review of the $89.95 Babolat Contact — a 340g round racket with a soft EVA core. Who it suits, who should skip it, and how it scores.",
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/blog/babolat-contact-review",
  },
  openGraph: {
    title: "Babolat Contact Review (2026): The Easiest First Padel Racket",
    description:
      "Hands-on review of the $89.95 Babolat Contact — a 340g round racket with a soft EVA core. Who it suits, who should skip it, and how it scores.",
    url: "https://www.padelcourtsfinder.com/blog/babolat-contact-review",
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Babolat Contact Review (2026): The Easiest First Padel Racket",
    description:
      "Hands-on review of the $89.95 Babolat Contact — a 340g round racket with a soft EVA core. Who it suits, who should skip it, and how it scores.",
  },
};

export default function BabolatContactReviewPage() {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://www.padelcourtsfinder.com/og/default.png",
    "name": "Babolat Contact",
    "description": "A 340g round-shaped beginner padel racket with a soft EVA core, fiberglass face, and carbon/fiberglass hybrid frame.",
    "offers": {
      "@type": "Offer",
      "price": "89.95",
      "priceCurrency": "USD",
      "url": "https://www.amazon.com/dp/B0BBPZLRVP?tag=padel02-20"
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
        "name": "How much does the Babolat Contact weigh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "340g, which makes it the lightest racket in our beginner lineup. The low weight keeps it easy to maneuver and reduces fatigue, though it can lack stability against hard returns."
        }
      },
      {
        "@type": "Question",
        "name": "Is the Babolat Contact good for complete beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — it's built exactly for that. The round shape puts a huge sweet spot in the center of the face, the soft EVA core is gentle on the arm, and Babolat's Dynamic Stability System uses tungsten reinforcement in the neck to reduce twisting on off-center hits."
        }
      },
      {
        "@type": "Question",
        "name": "How long will the Babolat Contact last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Expect 1–2 years with regular play of 2–3 sessions per week. The EVA foam core gradually loses its responsiveness before the frame shows wear, so most players upgrade before the racket actually breaks."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <StickyPickBar label="Our verdict" productName="Babolat Contact" price="$89.95" href="https://www.amazon.com/dp/B0BBPZLRVP?tag=padel02-20" />
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
            Babolat Contact Review (2026)
          </h1>
          <p className="text-lg text-stone-400 mt-3">The lightest racket in our beginner lineup — and the easiest way to just get on court</p>
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
              <p className="text-sm italic text-stone-500 mb-4">Best for: Complete beginners and smaller players</p>
              <p className="text-stone-600 leading-[1.75] mb-5">
                The Babolat Contact is our top overall pick for first-time padel players, and after living with it, the appeal is simple: it removes every excuse. At $89.95 it sits comfortably inside the $60&ndash;130 budget we recommend for a first racket, at 340g it&apos;s the lightest option we&apos;ve tested in this class, and its round face keeps a big, centered sweet spot under your mishits while your technique catches up. It won&apos;t win you points on raw pace &mdash; power is genuinely modest &mdash; but as a first racket it&apos;s about as friendly as they come.
              </p>
              <TrackedLink
                href="https://www.amazon.com/dp/B0BBPZLRVP?tag=padel02-20"
                type="affiliate"
                productName="Babolat Contact"
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
                    <td className="p-3 text-stone-600">Round</td>
                  </tr>
                  <tr className="border-b border-stone-100 bg-stone-50/50">
                    <td className="p-3 font-medium text-stone-700">Weight</td>
                    <td className="p-3 text-stone-600">340g</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="p-3 font-medium text-stone-700">Core</td>
                    <td className="p-3 text-stone-600">Soft EVA</td>
                  </tr>
                  <tr className="border-b border-stone-100 bg-stone-50/50">
                    <td className="p-3 font-medium text-stone-700">Surface</td>
                    <td className="p-3 text-stone-600">Fiberglass</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="p-3 font-medium text-stone-700">Frame</td>
                    <td className="p-3 text-stone-600">Carbon/Fiberglass Hybrid</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-stone-700">Price</td>
                    <td className="p-3 text-stone-600">$89.95</td>
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
                  <span className="text-xs text-stone-400">4/10</span>
                </div>
                <div className="h-1.5 bg-stone-200 rounded-full">
                  <div className="h-1.5 rounded-full bg-amber-500" style={{ width: "40%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-stone-500">Control</span>
                  <span className="text-xs text-stone-400">8/10</span>
                </div>
                <div className="h-1.5 bg-stone-200 rounded-full">
                  <div className="h-1.5 rounded-full bg-padel-green" style={{ width: "80%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-stone-500">Comfort</span>
                  <span className="text-xs text-stone-400">9/10</span>
                </div>
                <div className="h-1.5 bg-stone-200 rounded-full">
                  <div className="h-1.5 rounded-full bg-padel-green" style={{ width: "90%" }} />
                </div>
              </div>
            </div>
            <p className="text-stone-600 leading-[1.75] mt-5">
              The Contact&apos;s scores tell you exactly what kind of racket this is. Control (8/10) and comfort (9/10) do the heavy lifting: the round shape delivers a huge sweet spot right in the middle of the face, the soft EVA core soaks up vibration before it reaches your elbow, and the fiberglass surface flexes forgivingly when contact isn&apos;t clean. Power sits at 4/10 &mdash; the lowest score on the card &mdash; because at 340g with a soft core, the racket simply isn&apos;t built to add pace. You supply the speed; the Contact supplies the margin for error.
            </p>
            <p className="text-stone-600 leading-[1.75] mt-4">
              The detail we like most is one you can&apos;t see: Babolat&apos;s Dynamic Stability System embeds tungsten reinforcement in the neck to reduce twisting when you hit off-center. New players mishit constantly, and a face that stays square on those shots keeps more balls in play. The carbon/fiberglass hybrid frame is the other quiet win &mdash; it adds durability without piling on weight, which is how the racket manages to be both the lightest and one of the tougher builds in its price bracket.
            </p>
          </section>

          {/* Who it's for */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Who It&apos;s For &mdash; and Who Should Skip It</h2>
            <p className="text-stone-600 leading-[1.75]">
              Buy the Contact if you&apos;re a complete beginner, a smaller player, or anyone with wrist or elbow concerns. The 340g weight means less fatigue over long sessions, and the soft, forgiving build is exactly what a developing swing needs. It&apos;s also the racket for people who don&apos;t want to overthink the purchase: it checks every box we look for in a first racket &mdash; round shape, soft EVA core, fiberglass face, under 365g &mdash; at the low end of the sensible price range.
            </p>
            <p className="text-stone-600 leading-[1.75] mt-4">
              Skip it if you already have some racket-sport background and hit with real pace. The same low weight that makes the Contact so maneuverable means it can lack stability on hard returns &mdash; heavy incoming balls will push it around more than a heavier frame. And if you&apos;re past the beginner stage entirely, the modest power ceiling will frustrate you quickly. Plan on 1&ndash;2 years of life with regular play before the EVA core starts to fade and you&apos;re shopping for an upgrade anyway.
            </p>
          </section>

          {/* Alternatives */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Alternatives Worth Considering</h2>
            <p className="text-stone-600 leading-[1.75]">
              The Contact tops our <Link href="/blog/best-padel-rackets-beginners" className="text-padel-green hover:underline">best beginner padel rackets guide</Link>, but it isn&apos;t the only good first racket: the HEAD Extreme Evo ($99.95) adds Innegra shock reduction and an oversized 511cm&sup2; head, while the Adidas Adipower ($129.00) lets you adjust weight as you improve. And if you&apos;re already outgrowing beginner gear, look at the <Link href="/blog/wilson-blade-elite-v2-review" className="text-padel-green hover:underline">Wilson Blade Elite V2</Link> &mdash; a $189 teardrop that&apos;s our favorite balanced step up.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">How much does the Babolat Contact weigh?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">340g, which makes it the lightest racket in our beginner lineup. The low weight keeps it easy to maneuver and reduces fatigue, though it can lack stability against hard returns.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Is the Babolat Contact good for complete beginners?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Yes &mdash; it&apos;s built exactly for that. The round shape puts a huge sweet spot in the center of the face, the soft EVA core is gentle on the arm, and Babolat&apos;s Dynamic Stability System uses tungsten reinforcement in the neck to reduce twisting on off-center hits.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">How long will the Babolat Contact last?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Expect 1&ndash;2 years with regular play of 2&ndash;3 sessions per week. The EVA foam core gradually loses its responsiveness before the frame shows wear, so most players upgrade before the racket actually breaks.</p>
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
                <div className="font-semibold text-white">Best Beginner Rackets (2026)</div>
                <p className="text-stone-400 text-sm mt-1">The Contact vs 4 rivals from $90&ndash;$130</p>
              </Link>
              <Link href="/blog/wilson-blade-elite-v2-review" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Wilson Blade Elite V2 Review</div>
                <p className="text-stone-400 text-sm mt-1">Our favorite balanced upgrade at $189</p>
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
