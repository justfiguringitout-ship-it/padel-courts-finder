import Link from "next/link";
import type { Metadata } from "next";
import { TrackedLink } from "@/components/TrackedLink";
import { StickyPickBar } from "@/components/sticky-pick-bar";

export const metadata: Metadata = {
  title: "Bullpadel Neuron Review (2026): Chingotto's Hybrid, Tested",
  description:
    "Bullpadel Neuron 2025 tested: 7.3/10 at $236. Chingotto's hybrid head keeps round-shape forgiveness with 7/10 power — the control racket that grows with you.",
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/blog/bullpadel-neuron-review",
  },
  openGraph: {
    title: "Bullpadel Neuron Review (2026): Chingotto's Hybrid, Tested",
    description:
      "Hands-on review of the Bullpadel Neuron 2025 — hybrid shape, full-carbon build, Vibradrive damping, and who should actually buy it.",
    url: "https://www.padelcourtsfinder.com/blog/bullpadel-neuron-review",
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bullpadel Neuron Review (2026)",
    description:
      "Fede Chingotto's signature hybrid scored: 8/10 control, 7/10 power, and a precise full-carbon feel.",
  },
};

export default function BullpadelNeuronReviewPage() {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://www.padelcourtsfinder.com/og/default.png",
    "name": "Bullpadel Neuron 2025 (Chingotto)",
    "description":
      "Fede Chingotto's signature padel racket with a hybrid teardrop-round head, Xtend Carbon 3K face, EVA core and 100% CarbonTube frame.",
    "offers": {
      "@type": "Offer",
      "price": "236.00",
      "priceCurrency": "USD",
      "url": "https://www.amazon.com/dp/B0DHZL5ZFF?tag=padel02-20",
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
        "name": "What shape is the Bullpadel Neuron?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hybrid — it sits between round and teardrop. You keep most of a round racket's centred sweet spot while gaining a real 7/10 of power for put-aways, which is why we rate it the control racket that grows with you.",
        },
      },
      {
        "@type": "Question",
        "name": "Is the Bullpadel Neuron good for intermediate players?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, for upper-intermediates moving toward more aggressive play. The hybrid head is a gentler transition than jumping straight to a teardrop or diamond, and Vibradrive damping protects the arm over long match days. At 370g and a firm full-carbon build, it is not a first racket.",
        },
      },
      {
        "@type": "Question",
        "name": "Is the Bullpadel Neuron worth $236?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you want precise feedback on touch shots, yes — the Xtend Carbon 3K face over a 100% CarbonTube frame gives a connected feel that fiberglass rackets cannot match. If you mainly want comfort and forgiveness for less money, a round fiberglass frame does that job better and cheaper.",
        },
      },
    ],
  };

  const scores = [
    { label: "Power", value: 7 },
    { label: "Control", value: 8 },
    { label: "Comfort", value: 7 },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <StickyPickBar label="Our verdict" productName="Bullpadel Neuron 2025" price="$236.00" href="https://www.amazon.com/dp/B0DHZL5ZFF?tag=padel02-20" />
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
            Bullpadel Neuron Review (2026)
          </h1>
          <p className="text-lg text-stone-400 mt-3">Fede Chingotto&apos;s signature hybrid &mdash; round-shape forgiveness with enough power to finish</p>
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
                <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$236.00</span>
              </div>
              <p className="text-sm italic text-stone-500 mb-5">Best for: improving players who want control that scales with them.</p>
              <TrackedLink href="https://www.amazon.com/dp/B0DHZL5ZFF?tag=padel02-20" type="affiliate" productName="Bullpadel Neuron" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 bg-padel-green text-white font-medium rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
            </div>
          </section>

          {/* Intro */}
          <section>
            <p className="text-stone-700 leading-relaxed">
              Fede Chingotto is one of the tour&apos;s great precision players, and his signature racket reflects that. The Neuron took the &quot;best control that grows with you&quot; slot in our <Link href="/blog/best-padel-rackets-control" className="text-padel-green hover:underline">control rackets guide</Link>, and the reason is the head shape: it splits the difference between round and teardrop, so you keep most of a round racket&apos;s centred sweet spot while gaining a real 7/10 of power for put-aways.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              The construction is fully carbon &mdash; an Xtend Carbon 3K face over a 100% CarbonTube frame &mdash; which gives the face a crisp, connected feel. You know exactly where the ball met the racket on every touch shot. Bullpadel&apos;s Vibradrive system filters vibration to protect the arm over long matches, which is what keeps comfort at 7/10 despite the stiffness.
            </p>
          </section>

          {/* Specs */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Specs at a glance</h2>
            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm bg-white">
                <tbody>
                  <tr className="border-b border-stone-100"><td className="p-3 font-medium text-stone-700">Shape</td><td className="p-3 text-stone-600">Hybrid (teardrop&ndash;round)</td></tr>
                  <tr className="border-b border-stone-100"><td className="p-3 font-medium text-stone-700">Weight</td><td className="p-3 text-stone-600">370g</td></tr>
                  <tr className="border-b border-stone-100"><td className="p-3 font-medium text-stone-700">Core</td><td className="p-3 text-stone-600">EVA</td></tr>
                  <tr className="border-b border-stone-100"><td className="p-3 font-medium text-stone-700">Face</td><td className="p-3 text-stone-600">Xtend Carbon 3K</td></tr>
                  <tr><td className="p-3 font-medium text-stone-700">Frame</td><td className="p-3 text-stone-600">100% CarbonTube</td></tr>
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
              7 / 8 / 7 is an unusually flat profile, and that is the point. Most rackets in this price band buy one score by spending another; the Neuron refuses to specialise. Control leads at 8/10 because the full-carbon build reports back exactly what happened at contact, and 7/10 power is enough that you are not stuck resetting rallies you should be ending.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              The trade is stiffness. This is noticeably firmer than the fiberglass rackets that sit above it in our control guide, and at 370g it is a full-weight frame. Vibradrive keeps that from becoming an arm problem, but firm is firm &mdash; if you want a soft, cushioned feel, this is not it.
            </p>
          </section>

          {/* Who it's for */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Who it&apos;s for &mdash; and who should skip it</h2>
            <p className="text-stone-700 leading-relaxed">
              <strong>Buy it if</strong> you have outgrown a round racket and want more attacking options without giving up the sweet spot that keeps your errors down. The hybrid head is the gentlest available transition toward teardrop geometry, and the full-carbon feedback is a genuine coaching aid &mdash; you learn faster when the racket tells you the truth about your contact.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              <strong>Skip it if</strong> you are new to padel or comfort is your first criterion. At 370g with a firm carbon build, this asks more of you than a beginner frame should. Start with our <Link href="/blog/best-padel-rackets-beginners" className="text-padel-green hover:underline">beginner picks</Link> instead. It is also a pro-signature price for what remains a control-oriented racket &mdash; worth knowing before you spend $236.
            </p>
          </section>

          {/* Alternatives */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Alternatives worth considering</h2>
            <p className="text-stone-700 leading-relaxed">
              The <Link href="/blog/nox-ml10-pro-cup-review" className="text-padel-green hover:underline">NOX ML10 Pro Cup</Link> is our top overall pick for intermediate players &mdash; a control-first round racket that rewards improving technique without punishing mishits, and the safer choice if you are not sure you want a hybrid yet. If you have decided you do want to attack, the <Link href="/blog/best-teardrop-padel-rackets" className="text-padel-green hover:underline">teardrop guide</Link> is the next shelf up. The rest of the control field is in our <Link href="/blog/best-padel-rackets-control" className="text-padel-green hover:underline">best control rackets</Link> guide.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What shape is the Bullpadel Neuron?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Hybrid &mdash; between round and teardrop. You keep most of a round racket&apos;s centred sweet spot while gaining a real 7/10 of power. Our <Link href="/blog/padel-racket-shapes-explained" className="text-padel-green hover:underline">shapes guide</Link> explains what that geometry does to the sweet spot.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Is the Neuron good for intermediate players?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Yes, for upper-intermediates moving toward more aggressive play &mdash; the hybrid head is a gentler transition than jumping straight to a teardrop. At 370g with a firm full-carbon build it is not a first racket. See our <Link href="/blog/best-padel-rackets-intermediate" className="text-padel-green hover:underline">intermediate picks</Link> for the alternatives.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Is it worth $236?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">If you want precise feedback on touch shots, yes &mdash; the Xtend Carbon 3K face over a 100% CarbonTube frame gives a connected feel fiberglass cannot match. If you mainly want comfort and forgiveness for less money, a round fiberglass frame does that job better and cheaper.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Keep Reading */}
        <section className="grain bg-court mt-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-white mb-6">Keep Reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/best-padel-rackets-control" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Control Rackets 2026</div>
                <p className="text-stone-400 text-sm mt-1">Where the Neuron ranks in the field</p>
              </Link>
              <Link href="/blog/nox-ml10-pro-cup-review" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">NOX ML10 Pro Cup Review</div>
                <p className="text-stone-400 text-sm mt-1">Our top intermediate pick, tested</p>
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
