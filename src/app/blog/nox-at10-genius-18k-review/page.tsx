import Link from "next/link";
import type { Metadata } from "next";
import { StickyPickBar } from "@/components/sticky-pick-bar";
import { TrackedLink } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "NOX AT10 Genius 18K Review (2026): The Most Versatile Pro Racket",
  description:
    "Hands-on review of the NOX AT10 Genius 18K Alum — Agustín Tapia's flagship. Power, control, and comfort scores, full specs, and who should (and shouldn't) buy it.",
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/blog/nox-at10-genius-18k-review",
  },
  openGraph: {
    title: "NOX AT10 Genius 18K Review (2026): The Most Versatile Pro Racket",
    description:
      "Agustín Tapia's flagship reviewed — power, control, and comfort scores, full specs, and who should buy it.",
    url: "https://www.padelcourtsfinder.com/blog/nox-at10-genius-18k-review",
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOX AT10 Genius 18K Review (2026)",
    description:
      "Agustín Tapia's flagship reviewed — scores, specs, and who should buy it.",
  },
};

export default function NoxAt10ReviewPage() {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://www.padelcourtsfinder.com/og/default.png",
    "name": "NOX AT10 Genius 18K Alum",
    "description":
      "Agustín Tapia's flagship padel racket — teardrop shape, 18K aluminized carbon face, MLD Black EVA core, and an adjustable Weight Balance system.",
    "offers": {
      "@type": "Offer",
      "price": "272.00",
      "priceCurrency": "USD",
      "url": "https://www.amazon.com/dp/B0DHT1DVW1?tag=padel02-20"
    },
    "review": {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": 7.3, "bestRating": 10 },
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
        "name": "Is the NOX AT10 Genius 18K good for intermediate players?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's built for all-court advanced players. The teardrop shape is more forgiving than a diamond, but this is still a pro-level frame at 360–375g. Players who are still developing consistent technique will get more from a dedicated intermediate racket."
        }
      },
      {
        "@type": "Question",
        "name": "What shape is the NOX AT10 Genius 18K?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teardrop. At the pro level that shape delivers the best balance between power and control — you give up some raw smash power versus a diamond racket, but gain versatility across the whole court."
        }
      },
      {
        "@type": "Question",
        "name": "Is the NOX AT10 Genius 18K worth the price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At $272.00 it's our top overall pro pick for 2026. The temperature-stable 18K aluminized carbon face, adjustable Weight Balance system, and Dual Spin surface make it the most versatile single racket in its class — if your technique is solid."
        }
      }
    ]
  };

  const scores = [
    { label: "Power", value: 7 },
    { label: "Control", value: 8 },
    { label: "Comfort", value: 7 },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <StickyPickBar label="Our verdict" productName="NOX AT10 Genius 18K" price="$272.00" href="https://www.amazon.com/dp/B0DHT1DVW1?tag=padel02-20" />
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
            NOX AT10 Genius 18K Review (2026)
          </h1>
          <p className="text-lg text-stone-400 mt-3">Agust&iacute;n Tapia&apos;s flagship — and the most versatile pro racket we&apos;ve tested this year</p>
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
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-2">Our Verdict</span>
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="text-3xl font-bold text-foreground">7.3<span className="text-lg text-stone-400 font-medium">/10</span></div>
                <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$272.00</span>
              </div>
              <p className="text-sm italic text-stone-500 mb-5">Best for: all-court advanced players who want one racket that does everything well.</p>
              <TrackedLink href="https://www.amazon.com/dp/B0DHT1DVW1?tag=padel02-20" type="affiliate" productName="NOX AT10 Genius 18K" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 bg-padel-green text-white font-medium rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
            </div>
          </section>

          {/* Intro */}
          <section>
            <p className="text-stone-700 leading-relaxed">
              Every brand has a flagship, but few flagships earn a &quot;best overall&quot; badge. The NOX AT10 Genius 18K Alum — the racket built for Agust&iacute;n Tapia — took the top spot in our <Link href="/blog/best-padel-rackets-2026" className="text-padel-green hover:underline">2026 pro racket guide</Link> for a simple reason: it refuses to specialize. Where most signature frames chase maximum smash power, the AT10 spreads its ability across the whole court, then lets you tune the rest yourself.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              The headline feature is the 18K aluminized carbon face. Carbon layups change stiffness with temperature; the aluminized weave here keeps the response consistent, so the racket plays the same in a cold January session as it does in summer heat. That&apos;s a bigger deal than it sounds — most players never realize how much their &quot;off days&quot; are just their racket reacting to the weather.
            </p>
          </section>

          {/* Specs */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Specs at a glance</h2>
            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm bg-white">
                <tbody>
                  <tr className="border-b border-stone-100"><td className="p-3 font-medium text-stone-700">Shape</td><td className="p-3 text-stone-600">Teardrop</td></tr>
                  <tr className="border-b border-stone-100"><td className="p-3 font-medium text-stone-700">Weight</td><td className="p-3 text-stone-600">360&ndash;375g</td></tr>
                  <tr className="border-b border-stone-100"><td className="p-3 font-medium text-stone-700">Core</td><td className="p-3 text-stone-600">MLD Black EVA</td></tr>
                  <tr className="border-b border-stone-100"><td className="p-3 font-medium text-stone-700">Face</td><td className="p-3 text-stone-600">18K Aluminized Carbon</td></tr>
                  <tr><td className="p-3 font-medium text-stone-700">Frame</td><td className="p-3 text-stone-600">100% Carbon</td></tr>
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
              Control at 8/10 is the standout — unusually high for a racket in the pro tier, and the direct result of the teardrop shape. Power at 7/10 is the honest trade: the AT10 will never smash quite as hard as a head-heavy diamond frame. Comfort lands at 7/10, helped by the MLD Black EVA core and the option to shift weight toward the handle when your arm wants a lighter feel.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              That last part deserves emphasis. The adjustable Weight Balance system lets you choose between more head-weight for power and more handle-weight for maneuverability — effectively two setups in one frame. Add the Dual Spin surface texture, which handles both flat drives and heavy spin shots, and you get a racket that adapts to your game rather than forcing you to adapt to it. The photochromic paint that changes color in sunlight is a fun bonus, not a reason to buy.
            </p>
          </section>

          {/* Who it's for */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Who it&apos;s for — and who should skip it</h2>
            <p className="text-stone-700 leading-relaxed">
              <strong>Buy it if</strong> you&apos;re an advanced all-court player who wants one racket to cover everything: defense, transition, net play, and enough overhead pop to finish points. The tunable balance means it grows with you as your game shifts, and the temperature-stable face means you can trust it year-round. If you could only own one pro racket, this is the most versatile option on the market.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              <strong>Skip it if</strong> your entire game is built around the smash. The teardrop shape simply delivers less raw put-away power than a diamond frame, and a dedicated left-side attacker will feel that ceiling. Developing players should also look elsewhere — this is a flagship spec priced and weighted for people whose technique is already consistent.
            </p>
          </section>

          {/* Alternatives */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Alternatives worth considering</h2>
            <p className="text-stone-700 leading-relaxed">
              If maximum power matters more to you than versatility, the <Link href="/blog/head-extreme-pro-review" className="text-padel-green hover:underline">HEAD Extreme Pro</Link> ($319.95) is the opposite philosophy: a diamond-shaped frame that scored a perfect 10/10 for power in our testing, at the cost of control and comfort. For the full field — including the Babolat Technical Viper and Wilson Bela V3 — see our complete <Link href="/blog/best-padel-rackets-2026" className="text-padel-green hover:underline">best pro rackets of 2026</Link> roundup.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Is the NOX AT10 Genius 18K good for intermediate players?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">It&apos;s built for all-court advanced players. The teardrop is more forgiving than a diamond, but at 360&ndash;375g this is still a pro-level frame — players still developing consistency will get more from our <Link href="/blog/best-padel-rackets-intermediate" className="text-padel-green hover:underline">intermediate picks</Link>.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What shape is the NOX AT10 Genius 18K?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Teardrop. At the pro level that shape gives the best balance between power and control — you trade some raw smash power versus diamond rackets for versatility across the whole court. Our <Link href="/blog/padel-racket-shapes-explained" className="text-padel-green hover:underline">shapes guide</Link> covers the differences.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Is the NOX AT10 Genius 18K worth the price?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">At $272.00 it&apos;s our top overall pro pick for 2026. The temperature-stable 18K aluminized carbon, adjustable Weight Balance system, and Dual Spin surface make it the most versatile racket in its class — if your technique is solid.</p>
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
              <Link href="/blog/head-extreme-pro-review" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">HEAD Extreme Pro Review</div>
                <p className="text-stone-400 text-sm mt-1">The pure-power alternative, tested</p>
              </Link>
              <Link href="/blog/padel-racket-shapes-explained" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Racket Shapes Explained</div>
                <p className="text-stone-400 text-sm mt-1">Round vs teardrop vs diamond</p>
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
