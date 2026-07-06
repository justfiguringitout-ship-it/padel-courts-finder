import { Metadata } from 'next';
import Link from 'next/link';
import { TrackedLink } from '@/components/TrackedLink';
import { StickyPickBar } from '@/components/sticky-pick-bar';

export const metadata: Metadata = {
  title: 'Best Control Padel Rackets (2026) — Top 5 for Precision & Comfort',
  description: 'The 5 best control padel rackets of 2026, ranked by our control and comfort scores. Precision-first, arm-friendly picks for every level, from $89 to $272.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-rackets-control',
  },
  openGraph: {
    title: 'Best Control Padel Rackets (2026) — Top 5 for Precision & Comfort',
    description: 'The 5 best control padel rackets of 2026, ranked by our control and comfort scores. Precision-first, arm-friendly picks for every level, from $89 to $272.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-rackets-control',
    type: 'article',
    images: [{ url: 'https://www.padelcourtsfinder.com/og/default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Control Padel Rackets (2026) — Top 5 for Precision & Comfort',
    description: 'The 5 best control padel rackets of 2026, ranked by our control and comfort scores — from $89 to $272.',
  },
};

export default function ControlRacketsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Control Padel Rackets (2026) — Top 5 for Precision & Comfort",
    "description": "The 5 best control padel rackets of 2026, ranked by our control and comfort scores. Precision-first, arm-friendly picks from $89 to $272.",
    "image": "https://www.padelcourtsfinder.com/og/default.png",
    "datePublished": "2026-07-03T00:00:00Z",
    "dateModified": "2026-07-03T00:00:00Z",
    "author": { "@type": "Organization", "name": "Padel Courts Finder", "url": "https://www.padelcourtsfinder.com" },
    "publisher": { "@type": "Organization", "name": "Padel Courts Finder", "logo": { "@type": "ImageObject", "url": "https://www.padelcourtsfinder.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.padelcourtsfinder.com/blog/best-padel-rackets-control" }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes a padel racket a control racket?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Three things working together: a round or round-leaning shape that centers and enlarges the sweet spot, a balance point low toward the handle so the head moves quickly and predictably, and a softer core or face that holds the ball a fraction longer for placement. The trade-off is pace — the racket returns less free energy, so you place shots rather than overpower with them."
        }
      },
      {
        "@type": "Question",
        "name": "Are control rackets better for tennis elbow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally yes, though no racket is a medical fix. Head-light balance means less torque on the forearm with every swing, and softer cores and fiberglass faces absorb vibration instead of passing it to the elbow. If arm pain is a factor, prioritize the comfort score, keep the weight moderate, and see a physio if symptoms persist — equipment helps, it doesn't cure."
        }
      },
      {
        "@type": "Question",
        "name": "Do control rackets have less power?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, and that's by design. With the mass sitting low and the core tuned soft, the racket gives back less free pace — you supply it with your swing. For defensive and all-court players that's a feature: the ball goes where you aim it at the speed you choose, instead of flying long off a trampoline-stiff face."
        }
      },
      {
        "@type": "Question",
        "name": "Should beginners buy a control racket?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — a round control racket is the standard recommendation for anyone in their first year or two of padel. The big centered sweet spot forgives off-center contact while your technique develops, and the softer build is kinder to an arm that isn't used to the sport yet. Two rackets on this list come straight from our beginner guide for exactly that reason."
        }
      }
    ]
  };

  const itemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "Wilson Optix V1",
          "description": "Best for: Precision players who put comfort first",
          "offers": { "@type": "Offer", "price": "109.00", "priceCurrency": "USD", "url": "https://www.amazon.com/dp/B0DX2M3JYY?tag=padel02-20" },
          "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": 7.7, "bestRating": 10 }, "author": { "@type": "Organization", "name": "Padel Courts Finder" } }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "NOX ML10 Pro Cup Rough Surface",
          "description": "Best for: Control players who want spin on top of placement",
          "offers": { "@type": "Offer", "price": "169.99", "priceCurrency": "USD", "url": "https://www.amazon.com/dp/B0DWTCG1PL?tag=padel02-20" },
          "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": 7.3, "bestRating": 10 }, "author": { "@type": "Organization", "name": "Padel Courts Finder" } }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "NOX AT10 Genius 18K Alum",
          "description": "Best for: Advanced players who refuse to trade away control",
          "offers": { "@type": "Offer", "price": "272.00", "priceCurrency": "USD", "url": "https://www.amazon.com/dp/B0DHT1DVW1?tag=padel02-20" },
          "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": 7.3, "bestRating": 10 }, "author": { "@type": "Organization", "name": "Padel Courts Finder" } }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Product",
          "name": "Bullpadel Neuron 2025 (Chingotto)",
          "description": "Best for: Improving players who want control that scales with them",
          "offers": { "@type": "Offer", "price": "236.00", "priceCurrency": "USD", "url": "https://www.amazon.com/dp/B0DHZL5ZFF?tag=padel02-20" },
          "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": 7.3, "bestRating": 10 }, "author": { "@type": "Organization", "name": "Padel Courts Finder" } }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Product",
          "name": "Babolat Contact",
          "description": "Best for: Budget control and easy handling",
          "offers": { "@type": "Offer", "price": "89.95", "priceCurrency": "USD", "url": "https://www.amazon.com/dp/B0BBPZLRVP?tag=padel02-20" },
          "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": 7.0, "bestRating": 10 }, "author": { "@type": "Organization", "name": "Padel Courts Finder" } }
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <StickyPickBar label="Best control" productName="Wilson Optix V1" price="$109.00" href="https://www.amazon.com/dp/B0DX2M3JYY?tag=padel02-20" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListData) }} />

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
            Best Control Padel Rackets (2026) — Top 5 for Precision &amp; Comfort
          </h1>
          <p className="text-lg text-stone-400 mt-3">The highest control and comfort scores from across our racket guides, in one list</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>July 3, 2026</span>
            <span className="mx-2">&bull;</span>
            <span>9 min read</span>
          </div>
          <div className="text-sm text-stone-500 mt-1">By the Padel Courts Finder editorial team</div>
        </div>
      </header>

      <article>
        {/* White Section: Disclosure + Intro + Quick Picks */}
        <div className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Affiliate Disclosure */}
            <div className="bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 mb-10 flex items-start gap-2">
              <span className="text-stone-400 mt-0.5 text-sm">&#8505;</span>
              <p className="text-xs text-stone-500 italic leading-relaxed">
                This guide contains affiliate links. If you purchase through our links, we may earn a small commission at no extra cost to you. We only recommend products we believe in.
              </p>
            </div>

            {/* Intro */}
            <div className="prose prose-lg prose-stone max-w-none">
              <p className="text-stone-600 leading-[1.75]">
                Not everyone wins points with the smash. If your game is built on placement — steering lobs into corners, absorbing pace at the net, making one more ball than your opponent — you want a control racket: precision over raw speed, a predictable face, and a build that&apos;s gentle on the elbow. Defensive and all-court players live here, and so does anyone whose arm has ever complained after a long session. Most of these picks use the round shape we break down in our <Link href="/blog/padel-racket-shapes-explained" className="text-padel-green hover:underline">racket shapes guide</Link>.
              </p>
              <p className="text-stone-600 leading-[1.75]">
                A quick word on methodology: these five are ranked by the control and comfort scores from our testing across our beginner, intermediate, and pro racket guides — the same numbers you&apos;ll see on the rating bars below. That&apos;s also why control rackets turn out to span every level and price point: this list runs from <strong>$89 to $272</strong>, from a first-year racket to a World Padel Tour signature frame.
              </p>
            </div>

            {/* Quick Picks Box */}
            <div className="border-l-4 border-amber-500 bg-amber-50/80 rounded-r-lg p-5 sm:p-6 mt-8">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="text-amber-500">&#9889;</span> Quick Picks
              </h3>
              <div className="space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best Overall:</span>
                  <span className="text-sm"><TrackedLink href="https://www.amazon.com/dp/B0DX2M3JYY?tag=padel02-20" type="affiliate" productName="Wilson Optix V1" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline font-medium">Wilson Optix V1</TrackedLink> <span className="text-stone-500">&mdash; $109.00</span></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best on a Budget:</span>
                  <span className="text-sm"><TrackedLink href="https://www.amazon.com/dp/B0BBPZLRVP?tag=padel02-20" type="affiliate" productName="Babolat Contact" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline font-medium">Babolat Contact</TrackedLink> <span className="text-stone-500">&mdash; $89.95</span></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best Advanced Option:</span>
                  <span className="text-sm"><TrackedLink href="https://www.amazon.com/dp/B0DHT1DVW1?tag=padel02-20" type="affiliate" productName="NOX AT10 Genius 18K" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline font-medium">NOX AT10 Genius 18K</TrackedLink> <span className="text-stone-500">&mdash; $272.00</span></span>
                </div>
              </div>
              <a href="#top-5-control" className="text-sm text-stone-500 hover:text-padel-green mt-3 inline-block">Jump to full reviews &darr;</a>
            </div>
          </div>
        </div>

        {/* Stone-50 Section: Product Cards */}
        <div className="bg-stone-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <section>
              <h2 id="top-5-control" className="text-2xl font-bold text-foreground mb-5">Top 5 Control Padel Rackets</h2>

              {/* 1. Wilson Optix V1 */}
              <div id="wilson-optix-v1" className="relative bg-white border-2 border-padel-green rounded-xl p-6 md:p-8 mb-8 shadow-sm">
                <div className="absolute -top-3 -left-2 bg-padel-green text-white text-xs font-bold px-3 py-1.5 rounded-md -rotate-3 shadow-md z-10">
                  #1 PICK
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mt-2 mb-1">#1 &mdash; Best Overall Control</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">Wilson Optix V1</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$109.00</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Precision players who put comfort first</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Round</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">355&ndash;360g</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Soft EVA</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Fiberglass Weave</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">FG Frame</span>
                </div>
                {/* Rating Bars */}
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-50 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Power</span>
                      <span className="text-xs text-stone-400">4/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-amber-500" style={{ width: '40%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Control</span>
                      <span className="text-xs text-stone-400">9/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-padel-green" style={{ width: '90%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Comfort</span>
                      <span className="text-xs text-stone-400">10/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-padel-green" style={{ width: '100%' }} />
                    </div>
                  </div>
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">
                  No racket we&apos;ve scored matches the Optix V1&apos;s combination of a 9 for control and a perfect 10 for comfort — which is why it tops this list. Wilson builds it entirely from fiberglass, face and frame alike, and that all-soft construction is the whole story: the ball sits on the face a beat longer, the frame soaks up vibration before it reaches your elbow, and every block and chiquita lands where you pointed it. The round shape keeps a large, centered sweet spot, and Wilson&apos;s Sharp Hole Technology tweaks the drilling pattern so you can add bite to slices and lobs. It won&apos;t win you points on pace — the power score is an honest 4 — but for a control-first game at $109, nothing else comes close.
                </p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Only racket in our testing with a perfect 10/10 comfort score</p>
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> All-fiberglass face and frame gives the softest, most forgiving feel</p>
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Sharp Hole Technology adds spin grip for placement shots</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Power ceiling is low — hard drives are all on your swing</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Fast improvers chasing pace may outgrow it within a season or two</p>
                </div>
                <TrackedLink
                  href="https://www.amazon.com/dp/B0DX2M3JYY?tag=padel02-20"
                  type="affiliate"
                  productName="Wilson Optix V1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 bg-padel-green text-white font-medium rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200"
                >
                  Check Price on Amazon &rarr;
                </TrackedLink>
              </div>

              {/* 2. NOX ML10 Pro Cup Rough Surface */}
              <div id="nox-ml10-pro-cup" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#2 &mdash; Best Control + Spin</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">NOX ML10 Pro Cup Rough Surface</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$169.99</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Control players who want spin on top of placement</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Round</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">360&ndash;375g</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">HR3 EVA</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">FG 3K Rough</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Carbon Frame</span>
                </div>
                {/* Rating Bars */}
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-50 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Power</span>
                      <span className="text-xs text-stone-400">5/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-amber-500" style={{ width: '50%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Control</span>
                      <span className="text-xs text-stone-400">9/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-padel-green" style={{ width: '90%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Comfort</span>
                      <span className="text-xs text-stone-400">8/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-padel-green" style={{ width: '80%' }} />
                    </div>
                  </div>
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">
                  The ML10 matches the Optix&apos;s 9/10 control score while adding two things the Wilson can&apos;t: a gritty sand-textured face that grabs the ball for topspin, and a carbon frame that keeps the head steady when you&apos;re blocking hard drives. The balance point sits low, which makes it one of the quickest rackets through the hands at the net — exactly where a control player earns a living. Inside, NOX&apos;s HR3 EVA core keeps the response even across the face, and the Pulse System in the handle takes the sting out of impact, backing up its 8/10 comfort score. The fiberglass face caps outright power, but that is precisely the character a placement-first player is shopping for.
                </p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Sand-rough surface turns clean placement into biting topspin</p>
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Low balance keeps it fast and stable in net exchanges</p>
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Pulse System handle damping keeps long sessions comfortable</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Fiberglass face means modest raw power (5/10)</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> At up to 375g, heavier than the other budget-tier picks here</p>
                </div>
                <TrackedLink
                  href="https://www.amazon.com/dp/B0DWTCG1PL?tag=padel02-20"
                  type="affiliate"
                  productName="NOX ML10 Pro Cup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200"
                >
                  Check Price on Amazon &rarr;
                </TrackedLink>
              </div>

              {/* 3. NOX AT10 Genius 18K Alum */}
              <div id="nox-at10-18k" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#3 &mdash; Best Advanced Control</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">NOX AT10 Genius 18K Alum</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$272.00</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Advanced players who refuse to trade away control</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Teardrop</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">360&ndash;375g</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">MLD Black EVA</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">18K Aluminized Carbon</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">100% Carbon Frame</span>
                </div>
                {/* Rating Bars */}
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-50 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Power</span>
                      <span className="text-xs text-stone-400">7/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-padel-green" style={{ width: '70%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Control</span>
                      <span className="text-xs text-stone-400">8/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-padel-green" style={{ width: '80%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Comfort</span>
                      <span className="text-xs text-stone-400">7/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-padel-green" style={{ width: '70%' }} />
                    </div>
                  </div>
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">
                  The one non-budget-friendly entry earns its place: Agust&iacute;n Tapia&apos;s flagship posts the highest control score of any pro-tier racket we&apos;ve tested. The 18K aluminized carbon face is the key — its response doesn&apos;t drift with temperature, so the touch you calibrate in a cold morning match is the same touch you have on a hot afternoon. Consistency is control. The teardrop shape and MLD Black EVA core keep enough pop for finishing (7/10 power), while the adjustable Weight Balance system lets you shift mass toward the handle for a lighter, more control-oriented setup. The Dual Spin texture covers both flat pushes and heavy cut. For an advanced all-courter who wants precision without giving up the ability to end points, this is the ceiling.
                </p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Temperature-stable 18K face keeps feel consistent year-round</p>
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Adjustable weight system can be tuned toward a control balance</p>
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Best control-to-power ratio of any flagship we&apos;ve scored</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> At $272, a serious investment for a control racket</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Firmer than the fiberglass picks — comfort is good, not plush</p>
                </div>
                <TrackedLink
                  href="https://www.amazon.com/dp/B0DHT1DVW1?tag=padel02-20"
                  type="affiliate"
                  productName="NOX AT10 Genius 18K"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200"
                >
                  Check Price on Amazon &rarr;
                </TrackedLink>
              </div>

              {/* 4. Bullpadel Neuron 2025 */}
              <div id="bullpadel-neuron" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#4 &mdash; Best Control That Grows With You</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">Bullpadel Neuron 2025 (Chingotto)</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$236.00</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Improving players who want control that scales with them</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Hybrid (Teardrop-Round)</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">370g</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">EVA</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Xtend Carbon 3K</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">100% CarbonTube Frame</span>
                </div>
                {/* Rating Bars */}
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-50 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Power</span>
                      <span className="text-xs text-stone-400">7/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-padel-green" style={{ width: '70%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Control</span>
                      <span className="text-xs text-stone-400">8/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-padel-green" style={{ width: '80%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Comfort</span>
                      <span className="text-xs text-stone-400">7/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-padel-green" style={{ width: '70%' }} />
                    </div>
                  </div>
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">
                  Fede Chingotto is one of the tour&apos;s great precision players, and his signature racket reflects that. The head splits the difference between round and teardrop, so you keep most of a round racket&apos;s centered sweet spot while gaining a real 7/10 of power for put-aways. The construction is fully carbon — Xtend Carbon 3K face over a 100% CarbonTube frame — which gives the face a crisp, connected feel: you know exactly where the ball met the racket on every touch shot. Bullpadel&apos;s Vibradrive system filters vibration to protect the arm over long matches. It&apos;s stiffer than the fiberglass rackets above it, but that stiffness buys feedback and stability that upper-level control players will value.
                </p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Hybrid head keeps round-shape forgiveness with real finishing power</p>
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Full-carbon build gives precise, connected feedback on touch shots</p>
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Vibradrive damping protects the arm through long match days</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Noticeably firmer feel than the fiberglass options on this list</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Pro-signature price for what is still a control-oriented racket</p>
                </div>
                <TrackedLink
                  href="https://www.amazon.com/dp/B0DHZL5ZFF?tag=padel02-20"
                  type="affiliate"
                  productName="Bullpadel Neuron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200"
                >
                  Check Price on Amazon &rarr;
                </TrackedLink>
              </div>

              {/* 5. Babolat Contact */}
              <div id="babolat-contact" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#5 &mdash; Best Budget Control</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">Babolat Contact</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$89.95</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Budget control and easy handling</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Round</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">340g</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Soft EVA</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Fiberglass</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Carbon/FG Hybrid Frame</span>
                </div>
                {/* Rating Bars */}
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-50 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Power</span>
                      <span className="text-xs text-stone-400">4/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-amber-500" style={{ width: '40%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Control</span>
                      <span className="text-xs text-stone-400">8/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-padel-green" style={{ width: '80%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Comfort</span>
                      <span className="text-xs text-stone-400">9/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-padel-green" style={{ width: '90%' }} />
                    </div>
                  </div>
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">
                  Proof that control doesn&apos;t require a big budget. At 340g the Contact is the lightest racket here by a clear margin, and that low swingweight is its own form of control — the head gets to fast volleys in time and stays easy to steer deep into a third set when heavier frames start wandering. The round face centers a generous sweet spot, the soft EVA core and fiberglass face cushion the arm (9/10 comfort), and Babolat&apos;s Dynamic Stability System puts tungsten in the neck to resist twisting when contact isn&apos;t perfect. Power is minimal at 4/10, and the light head can get pushed around by heavy pace — but at $89.95 it&apos;s the cheapest ticket to genuinely precise, arm-friendly padel.
                </p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Lightest pick at 340g — quick to position and easy on the arm</p>
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Tungsten-reinforced neck steadies the face on off-center contact</p>
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Under $90 — the most affordable racket on this list</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Low mass can feel unstable against hard-hit returns</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> The least powerful pick here — every put-away is on you</p>
                </div>
                <TrackedLink
                  href="https://www.amazon.com/dp/B0BBPZLRVP?tag=padel02-20"
                  type="affiliate"
                  productName="Babolat Contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200"
                >
                  Check Price on Amazon &rarr;
                </TrackedLink>
              </div>
            </section>
          </div>
        </div>

        {/* White Section: Comparison Table */}
        <div className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-5">Quick Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-stone-200">
                      <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-wider text-stone-500">Racket</th>
                      <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-wider text-stone-500">Price</th>
                      <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-wider text-stone-500">Shape</th>
                      <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-wider text-stone-500">Control</th>
                      <th className="text-left py-3 text-xs font-semibold uppercase tracking-wider text-stone-500">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4"><TrackedLink href="https://www.amazon.com/dp/B0DX2M3JYY?tag=padel02-20" type="affiliate" productName="Wilson Optix V1" className="text-padel-green hover:underline" target="_blank" rel="noopener noreferrer">Wilson Optix V1</TrackedLink></td>
                      <td className="py-3 pr-4 text-stone-600">$109.00</td>
                      <td className="py-3 pr-4 text-stone-600">Round</td>
                      <td className="py-3 pr-4 text-stone-600">9/10</td>
                      <td className="py-3 text-stone-600">Comfort-first precision</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4"><TrackedLink href="https://www.amazon.com/dp/B0DWTCG1PL?tag=padel02-20" type="affiliate" productName="NOX ML10 Pro Cup" className="text-padel-green hover:underline" target="_blank" rel="noopener noreferrer">NOX ML10 Pro Cup</TrackedLink></td>
                      <td className="py-3 pr-4 text-stone-600">$169.99</td>
                      <td className="py-3 pr-4 text-stone-600">Round</td>
                      <td className="py-3 pr-4 text-stone-600">9/10</td>
                      <td className="py-3 text-stone-600">Control plus topspin</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4"><TrackedLink href="https://www.amazon.com/dp/B0DHT1DVW1?tag=padel02-20" type="affiliate" productName="NOX AT10 Genius 18K" className="text-padel-green hover:underline" target="_blank" rel="noopener noreferrer">NOX AT10 Genius 18K</TrackedLink></td>
                      <td className="py-3 pr-4 text-stone-600">$272.00</td>
                      <td className="py-3 pr-4 text-stone-600">Teardrop</td>
                      <td className="py-3 pr-4 text-stone-600">8/10</td>
                      <td className="py-3 text-stone-600">Advanced all-courters</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4"><TrackedLink href="https://www.amazon.com/dp/B0DHZL5ZFF?tag=padel02-20" type="affiliate" productName="Bullpadel Neuron" className="text-padel-green hover:underline" target="_blank" rel="noopener noreferrer">Bullpadel Neuron 2025</TrackedLink></td>
                      <td className="py-3 pr-4 text-stone-600">$236.00</td>
                      <td className="py-3 pr-4 text-stone-600">Hybrid</td>
                      <td className="py-3 pr-4 text-stone-600">8/10</td>
                      <td className="py-3 text-stone-600">Improvers moving up</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4"><TrackedLink href="https://www.amazon.com/dp/B0BBPZLRVP?tag=padel02-20" type="affiliate" productName="Babolat Contact" className="text-padel-green hover:underline" target="_blank" rel="noopener noreferrer">Babolat Contact</TrackedLink></td>
                      <td className="py-3 pr-4 text-stone-600">$89.95</td>
                      <td className="py-3 pr-4 text-stone-600">Round</td>
                      <td className="py-3 pr-4 text-stone-600">8/10</td>
                      <td className="py-3 text-stone-600">Budget control</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>

        {/* Stone-50 Section: FAQ */}
        <div className="bg-stone-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">What makes a padel racket a control racket?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Three things working together: a round or round-leaning shape that centers and enlarges the sweet spot, a balance point low toward the handle so the head moves quickly and predictably, and a softer core or face that holds the ball a fraction longer for placement. The trade-off is pace &mdash; the racket returns less free energy, so you place shots rather than overpower with them.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">Are control rackets better for tennis elbow?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Generally yes, though no racket is a medical fix. Head-light balance means less torque on the forearm with every swing, and softer cores and fiberglass faces absorb vibration instead of passing it to the elbow. If arm pain is a factor, prioritize the comfort score, keep the weight moderate, and see a physio if symptoms persist &mdash; equipment helps, it doesn&apos;t cure.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">Do control rackets have less power?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Yes, and that&apos;s by design. With the mass sitting low and the core tuned soft, the racket gives back less free pace &mdash; you supply it with your swing. For defensive and all-court players that&apos;s a feature: the ball goes where you aim it at the speed you choose, instead of flying long off a trampoline-stiff face.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">Should beginners buy a control racket?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Yes &mdash; a round control racket is the standard recommendation for anyone in their first year or two of padel. The big centered sweet spot forgives off-center contact while your technique develops, and the softer build is kinder to an arm that isn&apos;t used to the sport yet. Two rackets on this list come straight from our <Link href="/blog/best-padel-rackets-beginners" className="text-padel-green hover:underline">beginner rackets guide</Link> for exactly that reason.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* Dark Keep Reading Section */}
      <div className="grain bg-court">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-lg font-bold text-white mb-4">Keep Reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/padel-racket-shapes-explained" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Racket Shapes Explained</h3>
              <p className="text-sm text-stone-400 mt-1">Round vs teardrop vs diamond &mdash; what shape does to your game &rarr;</p>
            </Link>
            <Link href="/blog/best-padel-rackets-power" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Best Power Rackets</h3>
              <p className="text-sm text-stone-400 mt-1">The other side of the spectrum &mdash; top picks for smash-first players &rarr;</p>
            </Link>
            <Link href="/blog/best-padel-rackets-beginners" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Best Beginner Rackets (2026)</h3>
              <p className="text-sm text-stone-400 mt-1">Just starting out? 5 rackets from $90&ndash;$130 &rarr;</p>
            </Link>
            <Link href="/blog/best-padel-rackets-intermediate" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Best Intermediate Rackets (2026)</h3>
              <p className="text-sm text-stone-400 mt-1">5 upgrade picks from $170&ndash;$280 &rarr;</p>
            </Link>
            <Link href="/search" className="block border border-stone-700 rounded-lg p-4 hover:border-padel-green/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-stone-500">DIRECTORY</span>
              <h3 className="font-semibold text-white mt-1">Find a Court Near You</h3>
              <p className="text-sm text-stone-400 mt-1">Search 350+ padel clubs across the US &rarr;</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
