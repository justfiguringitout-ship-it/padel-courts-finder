import Link from "next/link";
import type { Metadata } from "next";
import { TrackedLink } from "@/components/TrackedLink";
import { StickyPickBar } from "@/components/sticky-pick-bar";

export const metadata: Metadata = {
  title: "Wilson Bela V3 Review (2026): Is 24K Carbon Worth $399?",
  description:
    "Hands-on review of the Wilson Bela V3, Fernando Belasteguín's 24K carbon signature racket. Power, control, and comfort scores — and who should actually buy it.",
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/blog/wilson-bela-v3-review",
  },
  openGraph: {
    title: "Wilson Bela V3 Review (2026): Is 24K Carbon Worth $399?",
    description:
      "Hands-on review of the Wilson Bela V3, Fernando Belasteguín's 24K carbon signature racket — power, control, and comfort scores, plus who should buy it.",
    url: "https://www.padelcourtsfinder.com/blog/wilson-bela-v3-review",
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wilson Bela V3 Review (2026): Is 24K Carbon Worth $399?",
    description:
      "Fernando Belasteguín's 24K carbon signature racket reviewed — power, control, comfort, and who should actually buy it.",
  },
};

export default function WilsonBelaV3ReviewPage() {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Wilson Bela V3",
    "description":
      "Fernando Belasteguín's signature padel racket with 24K carbon face, C2 tubular carbon frame, diamond shape, and firm EVA / Power Foam core.",
    "offers": {
      "@type": "Offer",
      "price": "399.00",
      "priceCurrency": "USD",
      "url": "https://www.amazon.com/dp/B0F2WMRTYB?tag=padel02-20",
    },
    "review": {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": 6.7, "bestRating": 10 },
      "author": { "@type": "Organization", "name": "Padel Courts Finder" },
      "datePublished": "2026-07-05",
    },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does 24K carbon mean on the Wilson Bela V3?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "24K carbon means 24,000 filaments per strand in the carbon weave — the finest weave used in commercial padel. The result is an extremely precise, responsive hitting surface where small adjustments in your swing translate directly to the ball.",
        },
      },
      {
        "@type": "Question",
        "name": "Is the Wilson Bela V3 good for intermediate players?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally no. It is a head-heavy diamond racket at 366–370g with a firm EVA / Power Foam core, which makes it unforgiving on off-center hits. It scores just 4/10 for comfort in our testing, so it suits advanced and pro-level players with clean technique.",
        },
      },
      {
        "@type": "Question",
        "name": "Why does the Wilson Bela V3 cost $399?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You are paying for the finest materials available in commercial padel: a 24K carbon face, a C2 tubular carbon frame, a dual-texture surface with separate power and spin zones, and SpinEffect drilling. It is the most expensive racket in our 2026 pro guide by a significant margin.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <StickyPickBar label="Our verdict" productName="Wilson Bela V3" price="$399.00" href="https://www.amazon.com/dp/B0F2WMRTYB?tag=padel02-20" />
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
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Wilson Bela V3 Review (2026)
          </h1>
          <p className="text-lg text-stone-400 mt-3">Fernando Belasteguín&apos;s 24K carbon flagship — the most premium racket we&apos;ve tested, and the least forgiving</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>July 5, 2026</span>
            <span className="mx-2">&middot;</span>
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

          {/* Verdict */}
          <section>
            <div className="bg-white border-2 border-padel-green rounded-xl p-6 md:p-8 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-2">Our Verdict</span>
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2 className="text-2xl font-bold text-foreground">6.7<span className="text-base font-medium text-stone-400">/10</span></h2>
                <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$399.00</span>
              </div>
              <p className="text-sm italic text-stone-500 mb-4">Best for: Advanced players who want the finest materials</p>
              <p className="text-stone-600 leading-relaxed mb-5">
                The Bela V3 is the pinnacle of material engineering in commercial padel — a 24K carbon face on a C2 tubular carbon frame. It rewards clean, advanced technique with remarkable precision and power, but its firm core and head-heavy diamond shape make it one of the most demanding rackets you can buy. Ranked #5 in our <Link href="/blog/best-padel-rackets-2026" className="text-padel-green hover:underline">best pro rackets of 2026</Link>.
              </p>
              <TrackedLink href="https://www.amazon.com/dp/B0F2WMRTYB?tag=padel02-20" type="affiliate" productName="Wilson Bela V3" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 bg-padel-green text-white font-medium rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
            </div>
          </section>

          {/* Specs */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Wilson Bela V3 Specs</h2>
            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm bg-white">
                <tbody>
                  <tr className="border-b border-stone-100"><td className="p-3 font-medium text-stone-700 w-1/3">Shape</td><td className="p-3 text-stone-600">Diamond</td></tr>
                  <tr className="border-b border-stone-100"><td className="p-3 font-medium text-stone-700">Weight</td><td className="p-3 text-stone-600">366&ndash;370g</td></tr>
                  <tr className="border-b border-stone-100"><td className="p-3 font-medium text-stone-700">Core</td><td className="p-3 text-stone-600">EVA Firm / Power Foam</td></tr>
                  <tr className="border-b border-stone-100"><td className="p-3 font-medium text-stone-700">Face</td><td className="p-3 text-stone-600">24K Carbon</td></tr>
                  <tr><td className="p-3 font-medium text-stone-700">Frame</td><td className="p-3 text-stone-600">C2 Tubular Carbon</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Ratings */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">How It Scores</h2>
            <div className="grid grid-cols-3 gap-3 py-3 px-4 bg-stone-100/50 rounded-lg">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-stone-500">Power</span>
                  <span className="text-xs text-stone-400">9/10</span>
                </div>
                <div className="h-1.5 bg-stone-200 rounded-full">
                  <div className="h-1.5 rounded-full bg-padel-green" style={{ width: '90%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-stone-500">Control</span>
                  <span className="text-xs text-stone-400">7/10</span>
                </div>
                <div className="h-1.5 bg-stone-200 rounded-full">
                  <div className="h-1.5 rounded-full bg-padel-green" style={{ width: '70%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-stone-500">Comfort</span>
                  <span className="text-xs text-stone-400">4/10</span>
                </div>
                <div className="h-1.5 bg-stone-200 rounded-full">
                  <div className="h-1.5 rounded-full bg-amber-500" style={{ width: '40%' }} />
                </div>
              </div>
            </div>
            <p className="text-stone-700 leading-relaxed mt-6">
              The story here is the face. 24K carbon means 24,000 filaments per strand — the finest weave in commercial padel — and it produces the most precise, responsive hitting surface money can buy. Every micro-adjustment in your swing shows up in the ball&apos;s flight. Paired with the firm EVA / Power Foam core and head-heavy diamond geometry, that translates into a 9/10 power score: full smashes come off this racket with serious pace.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              Control lands at a strong 7/10 for a diamond racket, and Wilson&apos;s dual-texture surface is a big reason why — the face has distinct zones, with the center tuned for power and the edges tuned for spin. SpinEffect technology in the drilling pattern optimizes airflow and ball grip on top of that. The C2 tubular carbon frame keeps the structure rigid without piling on excess weight.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              Comfort is where the bill comes due: 4/10. A firm core, 366&ndash;370g of mass, and head-heavy balance mean off-center hits are punished and long sessions load your arm. This is by design — it&apos;s a pro-spec tool, not a plush club racket.
            </p>
          </section>

          {/* Who it's for */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Who It&apos;s For — and Who Should Skip It</h2>
            <p className="text-stone-700 leading-relaxed">
              <strong>Buy it if</strong> you&apos;re an advanced or pro-level player with clean, consistent technique who wants the absolute best materials available. If you generate your own control and finish points overhead, the Bela V3&apos;s precision and ball speed are the pinnacle of what a commercial racket offers.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              <strong>Skip it if</strong> you&apos;re still developing your game or you&apos;re sensitive to arm strain. The firm core and head-heavy diamond shape are unforgiving, and at $399 this is the most expensive racket in our pro lineup by a significant margin — money that buys frustration, not improvement, if your technique isn&apos;t ready for it.
            </p>
          </section>

          {/* Alternatives */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Alternatives Worth Considering</h2>
            <p className="text-stone-700 leading-relaxed">
              If you want a similar aggressive, diamond-shaped profile for $150 less, read our <Link href="/blog/babolat-technical-viper-review" className="text-padel-green hover:underline">Babolat Technical Viper review</Link> — Juan Lebr&oacute;n&apos;s racket delivers the same 9/10 power at $249, making it the most affordable true pro racket we&apos;ve tested. And if you&apos;re not sold on a diamond shape at all, our <Link href="/blog/best-padel-rackets-2026" className="text-padel-green hover:underline">full 2026 pro racket guide</Link> covers five flagships across shapes and price points, including a more versatile teardrop as our overall top pick.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What does 24K carbon mean on the Wilson Bela V3?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">24K carbon means 24,000 filaments per strand in the carbon weave — the finest weave used in commercial padel. The result is an extremely precise, responsive hitting surface where small adjustments in your swing translate directly to the ball.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Is the Wilson Bela V3 good for intermediate players?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Generally no. It&apos;s a head-heavy diamond racket at 366&ndash;370g with a firm EVA / Power Foam core, which makes it unforgiving on off-center hits. It scores just 4/10 for comfort in our testing, so it suits advanced and pro-level players with clean technique.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Why does the Wilson Bela V3 cost $399?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">You&apos;re paying for the finest materials available in commercial padel: a 24K carbon face, a C2 tubular carbon frame, a dual-texture surface with separate power and spin zones, and SpinEffect drilling. It&apos;s the most expensive racket in our 2026 pro guide by a significant margin.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Keep Reading */}
        <section className="grain bg-court mt-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-white mb-6">Keep Reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/best-padel-rackets-2026" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Pro Rackets 2026</div>
                <p className="text-stone-400 text-sm mt-1">The top 5 signature frames reviewed</p>
              </Link>
              <Link href="/blog/babolat-technical-viper-review" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Babolat Technical Viper Review</div>
                <p className="text-stone-400 text-sm mt-1">Juan Lebr&oacute;n&apos;s $249 power racket, tested</p>
              </Link>
              <Link href="/blog/best-padel-rackets-power" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Power Rackets</div>
                <p className="text-stone-400 text-sm mt-1">Diamond-shaped picks for attacking players</p>
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
