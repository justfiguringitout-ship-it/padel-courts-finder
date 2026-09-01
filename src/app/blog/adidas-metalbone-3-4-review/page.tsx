import Link from "next/link";
import type { Metadata } from "next";
import { TrackedLink } from "@/components/TrackedLink";
import { StickyPickBar } from "@/components/sticky-pick-bar";

export const metadata: Metadata = {
  title: "Adidas Metalbone 3.4 Review (2026): Galán's Tunable Diamond",
  description:
    "Adidas Metalbone 3.4 tested: 7.0/10 at $304.50. Ale Galán's frame with 12g of adjustable inserts — 345g to 372g in one racket. Full scores, specs, and who should skip it.",
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/blog/adidas-metalbone-3-4-review",
  },
  openGraph: {
    title: "Adidas Metalbone 3.4 Review (2026): Galán's Tunable Diamond",
    description:
      "Adidas Metalbone 3.4 tested: 7.0/10 at $304.50 — the Weight & Balance system, 16K aluminized carbon face, and who it's actually for.",
    url: "https://www.padelcourtsfinder.com/blog/adidas-metalbone-3-4-review",
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adidas Metalbone 3.4 Review (2026)",
    description:
      "Ale Galán's diamond frame, scored — and the one spec that makes it three rackets in one.",
  },
};

export default function AdidasMetalbone34ReviewPage() {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://www.padelcourtsfinder.com/og/default.png",
    "name": "Adidas Metalbone 3.4 (Ale Galán)",
    "description":
      "Ale Galán's diamond-shape padel racket with a Carbon Aluminized 16K face, EVA Soft Performance core, Low Poly frame structure and a Weight & Balance system offering up to 12g of removable inserts.",
    "offers": {
      "@type": "Offer",
      "price": "304.50",
      "priceCurrency": "USD",
      "url": "https://www.amazon.com/dp/B0DMCZWNPV?tag=padel02-20"
    },
    "review": {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": 7.0, "bestRating": 10 },
      "author": { "@type": "Organization", "name": "Padel Courts Finder" },
      "datePublished": "2026-09-01"
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does the Adidas Metalbone 3.4 Weight & Balance system work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The racket ships with up to 12g of removable inserts that seat inside the frame. With them out you are playing a 345g racket that moves quickly at the net; with them fully loaded you are at 372g with noticeably more mass behind the smash. It is the same frame either way — you are moving where the weight sits, not swapping rackets."
        }
      },
      {
        "@type": "Question",
        "name": "Is the Adidas Metalbone 3.4 good for intermediate players?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only at the top of that range. It is a diamond-shape racket scoring 8/10 for power against 6/10 for comfort, which means the sweet spot sits high on the face and mishits are punished. If you are still mishitting regularly, a teardrop or round frame will serve you better and cost less."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between the Metalbone 3.4 and the Metalbone HRD+?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 3.4 is the Ale Galán signature edition with the Weight & Balance insert system and a Carbon Aluminized 16K face at $304.50. The HRD+ is the harder-feeling sibling in the same family at $279.99. The 3.4 is the one to buy if the adjustability matters to you; if it does not, the HRD+ saves you money for a similar power profile."
        }
      },
      {
        "@type": "Question",
        "name": "Does the Adidas Metalbone 3.4 play differently in cold weather?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, and it cuts both ways. The Carbon Aluminized 16K surface holds its stiffness across temperature swings better than plain carbon, which is a genuine advantage outdoors. But the soft EVA core still gets softer in the cold, so the racket loses some of its pop on winter mornings even though the face does not."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <StickyPickBar label="Our verdict" productName="Adidas Metalbone 3.4" price="$304.50" href="https://www.amazon.com/dp/B0DMCZWNPV?tag=padel02-20" />
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
            Adidas Metalbone 3.4 Review (2026)
          </h1>
          <p className="text-lg text-stone-400 mt-3">Ale Gal&aacute;n&apos;s frame is the only racket here you can re-weight between games &mdash; and that is most of what you&apos;re paying for</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>September 1, 2026</span>
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
              <p className="text-sm italic text-stone-500 mb-4">Best for: Players who want tunable weight and balance</p>
              <p className="text-stone-600 leading-[1.75] mb-5">
                Ale Gal&aacute;n&apos;s latest edition earns its score on one feature rather than an all-round profile. The Weight &amp; Balance system gives you up to 12g of removable inserts, so the same frame plays at 345g for quick doubles or 372g for power singles &mdash; genuinely three rackets in one. Around that, the Carbon Aluminized 16K surface holds stiffness through temperature swings, the Low Poly polyhedral frame adds rigidity at the impact points, and Spin Blade 3D grips the ball on cuts. The honest caveats: the base weight is light without inserts, and the soft EVA core does soften in the cold.
              </p>
              <TrackedLink
                href="https://www.amazon.com/dp/B0DMCZWNPV?tag=padel02-20"
                type="affiliate"
                productName="Adidas Metalbone 3.4"
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
                    <td className="p-3 text-stone-600">Diamond</td>
                  </tr>
                  <tr className="border-b border-stone-100 bg-stone-50/50">
                    <td className="p-3 font-medium text-stone-700">Weight</td>
                    <td className="p-3 text-stone-600">345&ndash;360g (+12g adjustable)</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="p-3 font-medium text-stone-700">Core</td>
                    <td className="p-3 text-stone-600">EVA Soft Performance</td>
                  </tr>
                  <tr className="border-b border-stone-100 bg-stone-50/50">
                    <td className="p-3 font-medium text-stone-700">Surface</td>
                    <td className="p-3 text-stone-600">Carbon Aluminized 16K</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="p-3 font-medium text-stone-700">Frame</td>
                    <td className="p-3 text-stone-600">Carbon, Low Poly structure</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-stone-700">Price</td>
                    <td className="p-3 text-stone-600">$304.50</td>
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
                  <span className="text-xs text-stone-400">8/10</span>
                </div>
                <div className="h-1.5 bg-stone-200 rounded-full">
                  <div className="h-1.5 rounded-full bg-padel-green" style={{ width: "80%" }} />
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
                  <span className="text-xs text-stone-400">6/10</span>
                </div>
                <div className="h-1.5 bg-stone-200 rounded-full">
                  <div className="h-1.5 rounded-full bg-amber-500" style={{ width: "60%" }} />
                </div>
              </div>
            </div>
            <p className="text-stone-600 leading-[1.75] mt-5">
              An 8 for power against a 6 for comfort is the standard diamond-shape trade, and the Metalbone 3.4 does not dodge it. The balance sits high, which is what puts mass behind an overhead &mdash; and it is also what makes a mishit low on the face feel like nothing at all. This is a racket for players whose contact point is already consistent.
            </p>
            <p className="text-stone-600 leading-[1.75] mt-4">
              What separates it from every other diamond we have scored is that the trade is adjustable. Pull the inserts and you are at 345g, quick enough through the hands to defend a net exchange; load all 12g and you are at 372g with the extra mass sitting where the smash needs it. Most players will find one setting and stay there, but the ability to change your mind after a month &mdash; without buying a second racket &mdash; is worth something real, and it is the reason this frame sits in our guide as the customization pick.
            </p>
            <p className="text-stone-600 leading-[1.75] mt-4">
              The 16K aluminized carbon face is the other spec worth understanding. Aluminized carbon holds its stiffness as temperature moves, so the face plays consistently on a cold morning and a hot afternoon &mdash; a genuine advantage if your club is outdoors. The soft EVA core does not share that property and will feel duller in winter, so the racket as a whole still changes with the weather, just less than most.
            </p>
          </section>

          {/* Who it's for */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Who It&apos;s For &mdash; and Who Should Skip It</h2>
            <p className="text-stone-600 leading-[1.75]">
              Buy the Metalbone 3.4 if you are an advanced player who finishes points overhead and genuinely wants to tune the frame &mdash; if the insert system is just a spec sheet line to you, you are paying $304.50 for a feature you will not use. It also suits anyone playing outdoors year-round, where the aluminized face earns its keep.
            </p>
            <p className="text-stone-600 leading-[1.75] mt-4">
              Skip it if you are still developing consistency. A 6/10 comfort score on a high-balance diamond frame is unforgiving, and there are better ways to spend $300 while your contact point is still moving. Skip it too if you want maximum power for the money: the <Link href="/blog/best-padel-rackets-power" className="text-padel-green hover:underline">power rackets guide</Link> has cheaper frames that hit as hard, they just will not let you re-weight them.
            </p>
          </section>

          {/* Alternatives */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Alternatives Worth Considering</h2>
            <p className="text-stone-600 leading-[1.75]">
              The obvious cross-shop is Agust&iacute;n Tapia&apos;s frame &mdash; our <Link href="/blog/nox-at10-genius-18k-review" className="text-padel-green hover:underline">NOX AT10 Genius 18K review</Link> covers the teardrop that scores 7.3/10 at $272 and asks less of your technique. Within the Adidas family, the <Link href="/blog/adidas-metalbone-hrd-review" className="text-padel-green hover:underline">Metalbone HRD+</Link> at $279.99 gives a similar power profile without the insert system. And if the diamond shape is what you came for, our <Link href="/blog/best-diamond-padel-rackets" className="text-padel-green hover:underline">best diamond padel rackets guide</Link> ranks the full field.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">How does the Weight &amp; Balance system work?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">The racket ships with up to 12g of removable inserts that seat inside the frame. With them out you&apos;re playing a 345g racket that moves quickly at the net; fully loaded you&apos;re at 372g with noticeably more mass behind the smash. It&apos;s the same frame either way &mdash; you&apos;re moving where the weight sits, not swapping rackets.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Is the Metalbone 3.4 good for intermediate players?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Only at the top of that range. It&apos;s a diamond-shape racket scoring 8/10 for power against 6/10 for comfort, so the sweet spot sits high and mishits are punished. If you&apos;re still mishitting regularly, our <Link href="/blog/best-padel-rackets-intermediate" className="text-padel-green hover:underline">intermediate guide</Link> has teardrop frames that will serve you better and cost less.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Metalbone 3.4 vs Metalbone HRD+ &mdash; which one?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">The 3.4 is the Ale Gal&aacute;n signature edition with the Weight &amp; Balance inserts and a Carbon Aluminized 16K face at $304.50. The <Link href="/blog/adidas-metalbone-hrd-review" className="text-padel-green hover:underline">HRD+</Link> is the harder-feeling sibling at $279.99. Buy the 3.4 if the adjustability matters to you; if it doesn&apos;t, the HRD+ saves you money for a similar power profile.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Does it play differently in cold weather?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Yes, and it cuts both ways. The Carbon Aluminized 16K surface holds its stiffness across temperature swings better than plain carbon, which is a real advantage outdoors. But the soft EVA core still softens in the cold, so the racket loses some pop on winter mornings even though the face doesn&apos;t.</p>
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
                <div className="font-semibold text-white">Best Padel Rackets (2026)</div>
                <p className="text-stone-400 text-sm mt-1">The Metalbone 3.4 is our customization pick</p>
              </Link>
              <Link href="/blog/best-diamond-padel-rackets" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Diamond Padel Rackets</div>
                <p className="text-stone-400 text-sm mt-1">Power-first frames for players who finish overhead</p>
              </Link>
              <Link href="/blog/nox-at10-genius-18k-review" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">NOX AT10 Genius 18K Review</div>
                <p className="text-stone-400 text-sm mt-1">Tapia&apos;s teardrop &mdash; the obvious cross-shop at $272</p>
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
