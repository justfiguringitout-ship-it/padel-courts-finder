import Link from "next/link";
import type { Metadata } from "next";
import { TrackedLink } from "@/components/TrackedLink";
import { StickyPickBar } from "@/components/sticky-pick-bar";

export const metadata: Metadata = {
  title: "Wilson Optix V1 Review (2026): The Softest Racket We've Scored",
  description:
    "Wilson Optix V1 tested: 7.7/10. $109. The only racket in our testing with a perfect 10/10 comfort score — all-fiberglass, round, and elbow-friendly. Full scores, specs, and who should skip it.",
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/blog/wilson-optix-v1-review",
  },
  openGraph: {
    title: "Wilson Optix V1 Review (2026): The Softest Racket We've Scored",
    description:
      "Wilson Optix V1 tested: 7.7/10 at $109. A perfect 10/10 for comfort, 9/10 for control — full scores, specs, and who it's for.",
    url: "https://www.padelcourtsfinder.com/blog/wilson-optix-v1-review",
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wilson Optix V1 Review (2026)",
    description:
      "The only racket we've scored a perfect 10 for comfort — tested, scored, and priced at $109.",
  },
};

export default function WilsonOptixV1ReviewPage() {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "image": "https://www.padelcourtsfinder.com/og/default.png",
    "name": "Wilson Optix V1",
    "description":
      "A round padel racket built entirely from fiberglass — face and frame — with a Soft EVA core and Wilson's Sharp Hole Technology drilling pattern, aimed at control-first players who prioritise comfort.",
    "offers": {
      "@type": "Offer",
      "price": "109.00",
      "priceCurrency": "USD",
      "url": "https://www.amazon.com/dp/B0DX2M3JYY?tag=padel02-20"
    },
    "review": {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": 7.7, "bestRating": 10 },
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
        "name": "Is the Wilson Optix V1 good for tennis elbow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is the softest racket we have scored — a perfect 10/10 for comfort. The face and frame are both fiberglass rather than carbon, and the Soft EVA core absorbs impact before it reaches your arm. If elbow pain is your main concern, this is the first racket on our list to try."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between the Wilson Optix V1 and V2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The V1 is the model we tested and scored at 7.7/10, and it is the one currently available at $109. We have not tested the V2 or the Optix Lite, so we do not publish scores for them — when we do, this review will be updated rather than replaced."
        }
      },
      {
        "@type": "Question",
        "name": "Is the Wilson Optix V1 good for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The round shape puts the sweet spot in the centre of the face where beginners actually make contact, and the all-fiberglass build is forgiving on mishits. It also appears in our beginner racket guide for exactly that reason. The trade-off is a low power ceiling — a 4/10 — which fast improvers will feel within a season or two."
        }
      },
      {
        "@type": "Question",
        "name": "What is Sharp Hole Technology?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is Wilson's modified drilling pattern for the perforations in the racket face, designed to give the ball extra bite. On a soft fiberglass racket like the Optix V1 it is what lets you put genuine cut on slices and lobs despite the low power."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <StickyPickBar label="Our verdict" productName="Wilson Optix V1" price="$109.00" href="https://www.amazon.com/dp/B0DX2M3JYY?tag=padel02-20" />
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
            Wilson Optix V1 Review (2026)
          </h1>
          <p className="text-lg text-stone-400 mt-3">The only racket we&apos;ve given a perfect 10 for comfort &mdash; and the reason why is the same reason it won&apos;t suit everyone</p>
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
                <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">7.7/10</span>
              </div>
              <p className="text-sm italic text-stone-500 mb-4">Best for: Precision players who put comfort first</p>
              <p className="text-stone-600 leading-[1.75] mb-5">
                The Optix V1 is the racket we hand to anyone who says their arm hurts. Wilson builds it entirely from fiberglass &mdash; face and frame alike &mdash; and that single decision explains the whole racket: the ball sits on the face a beat longer, the frame soaks up vibration before it reaches your elbow, and every block and chiquita lands where you pointed it. A 9 for control and a perfect 10 for comfort is a combination nothing else on our score cards matches. It won&apos;t win you points on pace, and we&apos;ve scored the power an honest 4. But at $109 for a control-first game, nothing else comes close.
              </p>
              <TrackedLink
                href="https://www.amazon.com/dp/B0DX2M3JYY?tag=padel02-20"
                type="affiliate"
                productName="Wilson Optix V1"
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
                    <td className="p-3 text-stone-600">355&ndash;360g</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="p-3 font-medium text-stone-700">Core</td>
                    <td className="p-3 text-stone-600">Soft EVA</td>
                  </tr>
                  <tr className="border-b border-stone-100 bg-stone-50/50">
                    <td className="p-3 font-medium text-stone-700">Surface</td>
                    <td className="p-3 text-stone-600">Fiberglass Weave</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="p-3 font-medium text-stone-700">Frame</td>
                    <td className="p-3 text-stone-600">Fiberglass</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-stone-700">Price</td>
                    <td className="p-3 text-stone-600">$109.00</td>
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
                  <span className="text-xs text-stone-400">9/10</span>
                </div>
                <div className="h-1.5 bg-stone-200 rounded-full">
                  <div className="h-1.5 rounded-full bg-padel-green" style={{ width: "90%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-stone-500">Comfort</span>
                  <span className="text-xs text-stone-400">10/10</span>
                </div>
                <div className="h-1.5 bg-stone-200 rounded-full">
                  <div className="h-1.5 rounded-full bg-padel-green" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
            <p className="text-stone-600 leading-[1.75] mt-5">
              A 4 for power next to a 10 for comfort is the widest spread on any score card we publish, and it is not an accident &mdash; it is the same material choice showing up twice. Carbon is stiff, so it returns energy to the ball and sends shock back up your arm. Fiberglass flexes, so it does neither. Wilson used fiberglass for the face <em>and</em> the frame, which is unusual even among soft rackets, and the result is a frame that dampens impact more thoroughly than anything else we have hit.
            </p>
            <p className="text-stone-600 leading-[1.75] mt-4">
              The 9 for control comes from the round shape rather than the material. A round head puts the balance point low and the sweet spot dead centre, which is where a placement player makes contact anyway. Spin is the detail that keeps this from being a purely defensive racket: Wilson&apos;s Sharp Hole Technology modifies the drilling pattern through the face so the ball grips on the way off, and you can put real cut on a slice or a lob without needing the head speed a stiffer racket would demand.
            </p>
          </section>

          {/* Who it's for */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Who It&apos;s For &mdash; and Who Should Skip It</h2>
            <p className="text-stone-600 leading-[1.75]">
              Buy the Optix V1 if your game is built on placement, or if your elbow has started making decisions for you. It is the top pick in our <Link href="/blog/best-padel-rackets-control" className="text-padel-green hover:underline">best control padel rackets guide</Link> and the racket we recommend first to anyone dealing with arm pain &mdash; the all-fiberglass build does more for that than any grip or dampener will. It is also a genuinely good first racket: the centred sweet spot is forgiving on the mishits every new player makes, and $109 is a reasonable place to start.
            </p>
            <p className="text-stone-600 leading-[1.75] mt-4">
              Skip it if you finish points with your smash. The power ceiling is real and low &mdash; hard drives are entirely on your swing, and a fast improver will feel the limit inside a season or two. If you already know you want pace, start with a teardrop or diamond frame instead and save yourself the upgrade.
            </p>
          </section>

          {/* Alternatives */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Alternatives Worth Considering</h2>
            <p className="text-stone-600 leading-[1.75]">
              If you want the Optix&apos;s control but with more spin bite, the NOX ML10 Pro Cup ($169.99) matches its 9/10 control on a gritty sand-textured face &mdash; read our <Link href="/blog/nox-ml10-pro-cup-review" className="text-padel-green hover:underline">NOX ML10 Pro Cup review</Link>. If $109 is more than you want to spend on a first racket, the <Link href="/blog/babolat-contact-review" className="text-padel-green hover:underline">Babolat Contact</Link> at $89.95 is the round racket we recommend to nearly every new player. And if you like the round shape but want to see the full field, our <Link href="/blog/best-round-padel-rackets" className="text-padel-green hover:underline">best round padel rackets guide</Link> ranks them all.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Is the Wilson Optix V1 good for tennis elbow?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">It&apos;s the softest racket we&apos;ve scored &mdash; a perfect 10/10 for comfort. The face and frame are both fiberglass rather than carbon, and the Soft EVA core absorbs impact before it reaches your arm. If elbow pain is your main concern, this is the first racket on our list to try. See our full <Link href="/blog/best-padel-rackets-tennis-elbow" className="text-padel-green hover:underline">tennis elbow racket guide</Link> for the rest of the shortlist.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What&apos;s the difference between the Wilson Optix V1 and V2?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">The V1 is the model we tested and scored at 7.7/10, and it&apos;s the one currently available at $109. We haven&apos;t tested the V2 or the Optix Lite, so we don&apos;t publish scores for them &mdash; when we do, this review will be updated rather than replaced.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Is the Wilson Optix V1 good for beginners?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Yes. The round shape puts the sweet spot in the centre of the face where beginners actually make contact, and the all-fiberglass build is forgiving on mishits &mdash; it appears in our <Link href="/blog/best-padel-rackets-beginners" className="text-padel-green hover:underline">beginner racket guide</Link> for exactly that reason. The trade-off is a low power ceiling, a 4/10, which fast improvers will feel within a season or two.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What is Sharp Hole Technology?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">It&apos;s Wilson&apos;s modified drilling pattern for the perforations in the racket face, designed to give the ball extra bite. On a soft fiberglass racket like the Optix V1 it&apos;s what lets you put genuine cut on slices and lobs despite the low power.</p>
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
                <div className="font-semibold text-white">Best Control Rackets (2026)</div>
                <p className="text-stone-400 text-sm mt-1">The Optix V1 is our #1 pick &mdash; see the other four</p>
              </Link>
              <Link href="/blog/best-round-padel-rackets" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Round Padel Rackets</div>
                <p className="text-stone-400 text-sm mt-1">Why the round shape forgives what others punish</p>
              </Link>
              <Link href="/blog/best-padel-rackets-tennis-elbow" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Rackets for Tennis Elbow</div>
                <p className="text-stone-400 text-sm mt-1">Softest frames we&apos;ve scored, ranked by comfort</p>
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
