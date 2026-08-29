import Link from "next/link";
import type { Metadata } from "next";
import { TrackedLink } from "@/components/TrackedLink";
import { StickyPickBar } from "@/components/sticky-pick-bar";

export const metadata: Metadata = {
  title: "HEAD Extreme Evo Review (2026): The $100 Arm-Saver, Tested",
  description:
    "HEAD Extreme Evo tested: 7.3/10 at $99.95. A 511cm² round head, Innegra shock reduction and a 9/10 comfort score — the best beginner racket for anyone worried about their elbow.",
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/blog/head-extreme-evo-review",
  },
  openGraph: {
    title: "HEAD Extreme Evo Review (2026): The $100 Arm-Saver, Tested",
    description:
      "Hands-on review of the HEAD Extreme Evo — the largest sweet spot in our beginner lineup and a 9/10 comfort score, for under $100.",
    url: "https://www.padelcourtsfinder.com/blog/head-extreme-evo-review",
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "HEAD Extreme Evo Review (2026)",
    description:
      "A 511cm² head, Innegra shock reduction and 9/10 comfort for $99.95 — scored and compared.",
  },
};

export default function HeadExtremeEvoReviewPage() {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://www.padelcourtsfinder.com/og/default.png",
    "name": "HEAD Extreme Evo",
    "description":
      "HEAD's oversized 511cm² round padel racket with a Power Foam core, fiberglass/carbon hybrid face and Innegra frame for shock reduction.",
    "offers": {
      "@type": "Offer",
      "price": "99.95",
      "priceCurrency": "USD",
      "url": "https://www.amazon.com/dp/B0CGRV795T?tag=padel02-20",
    },
    "review": {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": 7.3, "bestRating": 10 },
      "author": { "@type": "Organization", "name": "Padel Courts Finder" },
      "datePublished": "2026-08-29",
    },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is the HEAD Extreme Evo good for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — it is our best all-around pick in the beginner category. The oversized 511cm² round head gives the largest sweet spot of any racket in that guide, and the Innegra frame cuts shock and vibration, which matters if you play more than once or twice a week.",
        },
      },
      {
        "@type": "Question",
        "name": "What is Innegra technology on the HEAD Extreme Evo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Innegra is a shock-absorbing fibre woven into the frame. On the Extreme Evo it noticeably reduces the vibration that reaches your arm on off-centre hits, which is why the racket scores 9/10 for comfort in our testing.",
        },
      },
      {
        "@type": "Question",
        "name": "HEAD Extreme Evo vs HEAD Extreme Pro — which should I buy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They sit at opposite ends of the line. The Evo is a $99.95 round beginner frame scoring 7.3/10 with 9/10 comfort. The Extreme Pro is a $319.95 diamond that scored a perfect 10/10 for power and just 4/10 for comfort. Unless you are a tournament-level attacker, the Evo is the racket you actually want.",
        },
      },
    ],
  };

  const scores = [
    { label: "Power", value: 5 },
    { label: "Control", value: 8 },
    { label: "Comfort", value: 9 },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <StickyPickBar label="Our verdict" productName="HEAD Extreme Evo" price="$99.95" href="https://www.amazon.com/dp/B0CGRV795T?tag=padel02-20" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }} />
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
            HEAD Extreme Evo Review (2026)
          </h1>
          <p className="text-lg text-stone-400 mt-3">The largest sweet spot in our beginner lineup, and the highest comfort score we&apos;ve given a racket under $100</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>August 29, 2026</span>
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
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-2">Our Verdict</span>
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="text-3xl font-bold text-foreground">7.3<span className="text-lg text-stone-400 font-medium">/10</span></div>
                <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$99.95</span>
              </div>
              <p className="text-sm italic text-stone-500 mb-5">Best for: new and returning players who want arm protection above everything else.</p>
              <TrackedLink href="https://www.amazon.com/dp/B0CGRV795T?tag=padel02-20" type="affiliate" productName="HEAD Extreme Evo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 bg-padel-green text-white font-medium rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
            </div>
          </section>

          {/* Intro */}
          <section>
            <p className="text-stone-700 leading-relaxed">
              The Extreme Evo is our &quot;best all-around&quot; pick in the <Link href="/blog/best-padel-rackets-beginners" className="text-padel-green hover:underline">beginner racket guide</Link>, and the case for it is simple: it is the most forgiving racket we have tested at any price. The oversized 511cm&sup2; round head gives the largest sweet spot in the category, so the mishits that define your first six months on court still come back over the net.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              The part that matters more, though, is the frame. HEAD weaves Innegra into it, and the effect on shock and vibration is not subtle &mdash; it is the single biggest reason this racket posts a 9/10 comfort score. If you have gone from playing once a week to three times a week, or you are coming to padel from tennis with an elbow that already has opinions, that number is the whole review.
            </p>
          </section>

          {/* Specs */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Specs at a glance</h2>
            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm bg-white">
                <tbody>
                  <tr className="border-b border-stone-100"><td className="p-3 font-medium text-stone-700">Shape</td><td className="p-3 text-stone-600">Round (511cm&sup2;)</td></tr>
                  <tr className="border-b border-stone-100"><td className="p-3 font-medium text-stone-700">Weight</td><td className="p-3 text-stone-600">355&ndash;365g</td></tr>
                  <tr className="border-b border-stone-100"><td className="p-3 font-medium text-stone-700">Core</td><td className="p-3 text-stone-600">Power Foam</td></tr>
                  <tr className="border-b border-stone-100"><td className="p-3 font-medium text-stone-700">Face</td><td className="p-3 text-stone-600">Fiberglass / carbon hybrid</td></tr>
                  <tr><td className="p-3 font-medium text-stone-700">Frame</td><td className="p-3 text-stone-600">Innegra</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Scores */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">How it scores</h2>
            <div className="grid grid-cols-3 gap-3 py-3 px-4 bg-stone-100/50 rounded-lg">
              {scores.map((s) => (
                <div key={s.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-stone-500">{s.label}</span>
                    <span className="text-xs text-stone-400">{s.value}/10</span>
                  </div>
                  <div className="h-1.5 bg-stone-200 rounded-full">
                    <div className={`h-1.5 rounded-full ${s.value >= 7 ? "bg-padel-green" : "bg-amber-500"}`} style={{ width: `${s.value * 10}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-stone-700 leading-relaxed mt-5">
              Comfort at 9/10 and control at 8/10 are the two numbers doing the work here, and 5/10 power is the honest cost. This racket does not finish points for you. Its Power Foam core has a fast memory effect that returns to shape quickly for a consistent feel, but a round head with mid-range weight will never generate the pop of a diamond frame &mdash; and it is not trying to.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              At 355&ndash;365g it is a touch heavier than the lightest beginner options, and that extra mass buys real stability at the net. In practice it is the difference between a volley that sits up and a volley that stays low.
            </p>
          </section>

          {/* Who it's for */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Who it&apos;s for &mdash; and who should skip it</h2>
            <p className="text-stone-700 leading-relaxed">
              <strong>Buy it if</strong> arm protection is anywhere on your list. The Innegra frame plus the 511cm&sup2; head is the most forgiving combination under $100, and at $99.95 the racket costs a third of what the pro-level frames do. It is also the right pick if you are playing several times a week and starting to feel it the next morning.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              <strong>Skip it if</strong> you already have clean technique and want power. 5/10 is genuinely low, and you will outgrow it. If you are past the beginner stage, our <Link href="/blog/best-padel-rackets-intermediate" className="text-padel-green hover:underline">intermediate guide</Link> is the better shelf &mdash; and if it is specifically elbow pain you are solving for at a higher level, see our <Link href="/blog/best-padel-rackets-tennis-elbow" className="text-padel-green hover:underline">tennis elbow picks</Link>.
            </p>
          </section>

          {/* Alternatives */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Alternatives worth considering</h2>
            <p className="text-stone-700 leading-relaxed">
              The <Link href="/blog/babolat-contact-review" className="text-padel-green hover:underline">Babolat Contact</Link> tops our beginner guide outright and costs less, with a softer feel but without Innegra&apos;s shock reduction. If you are already looking one step ahead, the <Link href="/blog/wilson-blade-elite-v2-review" className="text-padel-green hover:underline">Wilson Blade Elite V2</Link> ($189) is our favourite balanced step up. And at the far end of the same HEAD line, the <Link href="/blog/head-extreme-pro-review" className="text-padel-green hover:underline">HEAD Extreme Pro</Link> ($319.95) trades every point of comfort for a perfect 10/10 power score &mdash; the opposite racket in every way.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Is the HEAD Extreme Evo good for beginners?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Yes &mdash; it is our best all-around beginner pick. The 511cm&sup2; round head is the largest sweet spot in that guide, and the Innegra frame cuts the shock that reaches your arm. See the full <Link href="/blog/best-padel-rackets-beginners" className="text-padel-green hover:underline">beginner lineup</Link> for how it compares.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What is Innegra technology?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">A shock-absorbing fibre woven into the frame. On the Extreme Evo it noticeably reduces the vibration reaching your arm on off-centre hits, which is why the racket earns 9/10 for comfort in our testing &mdash; the highest score of any beginner frame we have tried.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Extreme Evo or Extreme Pro?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Opposite ends of the same line. The Evo is a $99.95 round frame at 7.3/10 with 9/10 comfort. The <Link href="/blog/head-extreme-pro-review" className="text-padel-green hover:underline">Extreme Pro</Link> is a $319.95 diamond with a perfect 10/10 power score and 4/10 comfort. Unless you are a tournament-level attacker, the Evo is the one you want.</p>
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
                <div className="font-semibold text-white">Best Beginner Rackets 2026</div>
                <p className="text-stone-400 text-sm mt-1">Where the Evo ranks against the field</p>
              </Link>
              <Link href="/blog/best-round-padel-rackets" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Round Rackets</div>
                <p className="text-stone-400 text-sm mt-1">The most forgiving shape, scored</p>
              </Link>
              <Link href="/blog/best-padel-rackets-tennis-elbow" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Rackets for Tennis Elbow</div>
                <p className="text-stone-400 text-sm mt-1">Comfort scores ranked, arm first</p>
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
