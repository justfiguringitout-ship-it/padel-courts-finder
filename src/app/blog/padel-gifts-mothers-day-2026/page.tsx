import { Metadata } from 'next';
import Link from 'next/link';
import { TrackedLink } from '@/components/TrackedLink';

export const metadata: Metadata = {
  title: 'Best Padel Gifts for Mom (2026) — 12 Ideas She\'ll Actually Use',
  description: 'The best padel gifts for Mother\'s Day 2026. From beginner rackets to premium bags, 12 curated picks at every budget — $14 to $399. Gift guide for the padel-loving mom.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/padel-gifts-mothers-day-2026',
  },
  openGraph: {
    title: 'Best Padel Gifts for Mom (2026) — 12 Ideas She\'ll Actually Use',
    description: 'The best padel gifts for Mother\'s Day 2026. From beginner rackets to premium bags, 12 curated picks at every budget — $14 to $399.',
    url: 'https://www.padelcourtsfinder.com/blog/padel-gifts-mothers-day-2026',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=630&fit=crop' }],
  },
};

export default function MothersDay2026GiftGuidePage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Gifts for Mom (2026) — 12 Ideas She'll Actually Use",
    "description": "The best padel gifts for Mother's Day 2026. From beginner rackets to premium bags, 12 curated picks at every budget — $14 to $399.",
    "image": "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=630&fit=crop",
    "datePublished": "2026-03-25T00:00:00Z",
    "dateModified": "2026-03-25T00:00:00Z",
    "author": {
      "@type": "Organization",
      "name": "Padel Courts Finder",
      "url": "https://www.padelcourtsfinder.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Padel Courts Finder",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.padelcourtsfinder.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.padelcourtsfinder.com/blog/padel-gifts-mothers-day-2026"
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's a good padel gift for a beginner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A round-shape beginner racket like the Babolat Contact ($90) plus a can of HEAD Padel Pro balls ($14) and a Wilson Pro Overgrip 12-pack ($27) — total around $130. This covers everything she needs for her first session on court."
        }
      },
      {
        "@type": "Question",
        "name": "How much should I spend on a padel racket as a gift?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "$80–130 for a beginner, $170–280 for an intermediate player, and $250–400 for an advanced player. If you're unsure of her skill level, a beginner racket in the $90–120 range is always a safe and appreciated choice."
        }
      },
      {
        "@type": "Question",
        "name": "What size padel racket should I get?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Padel rackets are one-size — there's no need to know her size. All adult padel rackets have standardized dimensions (max 45.5cm long, 26cm wide). Just match the racket to her skill level: round shape for beginners, teardrop for intermediate, diamond for advanced."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* Amber Accent Stripe */}
      <div className="h-1 bg-amber-500" />

      {/* Dark Hero */}
      <header className="bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="mb-4">
            <Link href="/blog" className="text-stone-400 hover:text-amber-400 text-sm">&larr; Back to Blog</Link>
          </div>
          <span className="inline-block bg-amber-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">Equipment</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Best Padel Gifts for Mom (2026)
          </h1>
          <p className="text-stone-400 mt-3">Mother&apos;s Day 2026 &mdash; curated picks for every budget</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>March 25, 2026</span>
            <span className="mx-2">&bull;</span>
            <span>8 min read</span>
          </div>
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
                Whether she just discovered padel or she&apos;s been playing for years, these are the gifts that actually get used &mdash; not the ones that collect dust. We&apos;ve organized everything by budget so you can find something perfect whether you&apos;re spending $15 or $400.
              </p>
              <p className="text-stone-600 leading-[1.75]">
                Every pick links directly to Amazon with Prime shipping, so you&apos;re covered even if you&apos;re shopping last-minute. Happy Mother&apos;s Day.
              </p>
            </div>

            {/* Quick Picks Box */}
            <div className="border-l-4 border-amber-500 bg-amber-50/80 rounded-r-lg p-5 sm:p-6 mt-8">
              <h3 className="font-bold text-[#1a1a1a] mb-3 flex items-center gap-2">
                <span className="text-amber-500">&#9889;</span> Quick Picks
              </h3>
              <div className="space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best Splurge:</span>
                  <span className="text-sm"><a href="#wilson-bela-v3" className="text-emerald-600 hover:underline font-medium">Wilson Bela V3</a> <span className="text-stone-500">&mdash; $399</span></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best Starter Set:</span>
                  <span className="text-sm"><a href="#starter-set" className="text-emerald-600 hover:underline font-medium">Babolat Contact + balls + overgrip</a> <span className="text-stone-500">&mdash; ~$131 total</span></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best Under $60:</span>
                  <span className="text-sm"><a href="#babolat-backpack" className="text-emerald-600 hover:underline font-medium">Babolat Court Lite Backpack</a> <span className="text-stone-500">&mdash; $59.95</span></span>
                </div>
              </div>
              <a href="#under-25" className="text-sm text-stone-500 hover:text-emerald-600 mt-3 inline-block">Browse all 12 picks &darr;</a>
            </div>
          </div>
        </div>

        {/* Stone-50 Section: Under $25 + $50–$100 */}
        <div className="bg-stone-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Under $25 */}
            <section id="under-25" className="mb-12">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Under $25 &mdash; Small But Thoughtful</h2>
              <p className="text-stone-500 text-sm mb-5">Stocking-stuffer energy. She&apos;ll use every single one.</p>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* 1. HEAD Balls */}
                <div className="bg-white border border-stone-200 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-[#1a1a1a] text-base">HEAD Padel Pro S Balls</h3>
                    <span className="bg-[#1a1a1a] text-white px-2.5 py-1 rounded-lg text-sm font-bold whitespace-nowrap">$13.91</span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    Every padel player goes through balls. She&apos;ll always need more. The HEAD Pro S is the most popular padel ball in the US &mdash; consistent bounce, good durability.
                  </p>
                  <p className="text-xs text-stone-500 mb-3">Great for: any padel mom, any level</p>
                  <TrackedLink
                    href="https://www.amazon.com/dp/B07D56XDNL?tag=padel02-20"
                    type="affiliate"
                    productName="HEAD Padel Pro S Balls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2 bg-amber-500 text-white font-medium text-sm rounded-lg hover:bg-amber-600 hover:shadow-md transition-all duration-200"
                  >
                    Shop on Amazon &rarr;
                  </TrackedLink>
                </div>

                {/* 2. Wilson Overgrip */}
                <div className="bg-white border border-stone-200 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-[#1a1a1a] text-base">Wilson Pro Overgrip 12-Pack</h3>
                    <span className="bg-[#1a1a1a] text-white px-2.5 py-1 rounded-lg text-sm font-bold whitespace-nowrap">$27.00</span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    The grip she&apos;ll actually replace every few weeks. Tacky, absorbent, and the industry standard. A 12-pack lasts months.
                  </p>
                  <p className="text-xs text-stone-500 mb-3">Great for: any padel mom who plays regularly</p>
                  <TrackedLink
                    href="https://www.amazon.com/dp/B002GUEXTQ?tag=padel02-20"
                    type="affiliate"
                    productName="Wilson Pro Overgrip 12-Pack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2 bg-amber-500 text-white font-medium text-sm rounded-lg hover:bg-amber-600 hover:shadow-md transition-all duration-200"
                  >
                    Shop on Amazon &rarr;
                  </TrackedLink>
                </div>
              </div>
            </section>

            {/* $50–$100 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">$50&ndash;$100 &mdash; Solid Gifts</h2>
              <p className="text-stone-500 text-sm mb-5">The sweet spot. Useful, appreciated, and won&apos;t break the bank.</p>

              <div className="space-y-4">
                {/* 3. Babolat Backpack */}
                <div id="babolat-backpack" className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-[#1a1a1a] text-lg">Babolat Court Lite Padel Backpack</h3>
                    <span className="bg-[#1a1a1a] text-white px-2.5 py-1 rounded-lg text-sm font-bold whitespace-nowrap">$59.95</span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    Purpose-built for padel with a racket compartment, shoe pocket, and room for everything else. Sleek black design that works on and off the court. If she&apos;s still using a gym bag, this is a major upgrade.
                  </p>
                  <p className="text-xs text-stone-500 mb-3">Great for: the mom who plays 2+ times a week</p>
                  <TrackedLink
                    href="https://www.amazon.com/dp/B0F2YBVGMG?tag=padel02-20"
                    type="affiliate"
                    productName="Babolat Court Lite Backpack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 bg-amber-500 text-white font-medium text-sm rounded-lg hover:bg-amber-600 hover:shadow-md transition-all duration-200"
                  >
                    Shop on Amazon &rarr;
                  </TrackedLink>
                </div>

                {/* 4. Babolat Contact */}
                <div className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-[#1a1a1a] text-lg">Babolat Contact Padel Racket</h3>
                    <span className="bg-[#1a1a1a] text-white px-2.5 py-1 rounded-lg text-sm font-bold whitespace-nowrap">$89.95</span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    The <Link href="/blog/best-padel-rackets-beginners" className="text-emerald-600 hover:underline">best beginner racket on the market</Link>. 340g, huge sweet spot, gentle on arms. If she&apos;s just starting padel, this is the one &mdash; our #1 pick in our beginner racket guide.
                  </p>
                  <p className="text-xs text-stone-500 mb-3">Great for: the beginner mom</p>
                  <TrackedLink
                    href="https://www.amazon.com/dp/B0BBPZLRVP?tag=padel02-20"
                    type="affiliate"
                    productName="Babolat Contact Racket"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 bg-amber-500 text-white font-medium text-sm rounded-lg hover:bg-amber-600 hover:shadow-md transition-all duration-200"
                  >
                    Shop on Amazon &rarr;
                  </TrackedLink>
                </div>

                {/* 5. HEAD Shoes */}
                <div className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-[#1a1a1a] text-lg">HEAD Women&apos;s Sprint Pro 4.0 Shoes</h3>
                    <span className="bg-[#1a1a1a] text-white px-2.5 py-1 rounded-lg text-sm font-bold whitespace-nowrap">$89.00</span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    Non-marking padel-approved court shoes. Lightweight, breathable, herringbone tread for grip on all court surfaces. Currently 31% off regular price.
                  </p>
                  <p className="text-xs text-stone-500 mb-3">Great for: the mom still wearing running shoes on court</p>
                  <TrackedLink
                    href="https://www.amazon.com/dp/B0DQKHSSZB?tag=padel02-20"
                    type="affiliate"
                    productName="HEAD Sprint Pro 4.0 Shoes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 bg-amber-500 text-white font-medium text-sm rounded-lg hover:bg-amber-600 hover:shadow-md transition-all duration-200"
                  >
                    Shop on Amazon &rarr;
                  </TrackedLink>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* White Section: Starter Set Callout */}
        <div className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div id="starter-set" className="border-l-4 border-emerald-500 bg-emerald-50/80 rounded-r-lg p-5 sm:p-6">
              <h3 className="font-bold text-[#1a1a1a] mb-4 text-lg">The Perfect Starter Set</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-stone-700 text-sm">Babolat Contact Racket</span>
                  <span className="text-stone-500 text-sm">$89.95</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-stone-700 text-sm">+ HEAD Padel Pro S Balls</span>
                  <span className="text-stone-500 text-sm">$13.91</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-stone-700 text-sm">+ Wilson Pro Overgrip 12-pack</span>
                  <span className="text-stone-500 text-sm">$27.00</span>
                </div>
                <div className="border-t border-emerald-200 pt-2 mt-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[#1a1a1a] font-bold text-sm">Total</span>
                    <span className="text-[#1a1a1a] font-bold">~$131</span>
                  </div>
                </div>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                Everything she needs for her first session on court. The racket is beginner-perfect, the balls are tour-standard, and the overgrips will keep her grip fresh for months. If she&apos;s brand new to padel, this is the gift.
              </p>
              <TrackedLink
                href="https://www.amazon.com/dp/B0BBPZLRVP?tag=padel02-20"
                type="affiliate"
                productName="Starter Set Bundle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-amber-500 text-white font-medium text-sm rounded-lg hover:bg-amber-600 hover:shadow-md transition-all duration-200"
              >
                Shop the set on Amazon &rarr;
              </TrackedLink>
            </div>
          </div>
        </div>

        {/* Stone-50 Section: $100–$200 */}
        <div className="bg-stone-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <section>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">$100&ndash;$200 &mdash; Premium Picks</h2>
              <p className="text-stone-500 text-sm mb-5">For the mom who&apos;s committed to the sport. These are serious upgrades.</p>

              <div className="space-y-4">
                {/* 6. HEAD Extreme Evo */}
                <div className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-[#1a1a1a] text-lg">HEAD Extreme Evo Padel Racket</h3>
                    <span className="bg-[#1a1a1a] text-white px-2.5 py-1 rounded-lg text-sm font-bold whitespace-nowrap">$99.95</span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    Innegra vibration dampening protects arms and elbows &mdash; important for the mom who plays multiple times a week. The most comfortable beginner racket we&apos;ve tested, with the largest sweet spot in its category. Our <Link href="/blog/best-padel-rackets-beginners" className="text-emerald-600 hover:underline">#2 beginner pick</Link>.
                  </p>
                  <p className="text-xs text-stone-500 mb-3">Great for: the mom who values comfort above all</p>
                  <TrackedLink
                    href="https://www.amazon.com/dp/B0CGRV795T?tag=padel02-20"
                    type="affiliate"
                    productName="HEAD Extreme Evo Racket"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 bg-amber-500 text-white font-medium text-sm rounded-lg hover:bg-amber-600 hover:shadow-md transition-all duration-200"
                  >
                    Shop on Amazon &rarr;
                  </TrackedLink>
                </div>

                {/* 7. HEAD Tour Bag */}
                <div className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-[#1a1a1a] text-lg">HEAD Tour Racquet Bag M</h3>
                    <span className="bg-[#1a1a1a] text-white px-2.5 py-1 rounded-lg text-sm font-bold whitespace-nowrap">$99.00</span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    Holds up to 6 rackets with padded compartments. Separate shoe compartment, insulated pocket for drinks, and adjustable shoulder straps. For the mom who plays multiple times a week and carries gear for friends.
                  </p>
                  <p className="text-xs text-stone-500 mb-3">Great for: the serious player who carries everything</p>
                  <TrackedLink
                    href="https://www.amazon.com/dp/B0G8RX2824?tag=padel02-20"
                    type="affiliate"
                    productName="HEAD Tour Bag M"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 bg-amber-500 text-white font-medium text-sm rounded-lg hover:bg-amber-600 hover:shadow-md transition-all duration-200"
                  >
                    Shop on Amazon &rarr;
                  </TrackedLink>
                </div>

                {/* 8. Wilson Optix V1 */}
                <div className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-[#1a1a1a] text-lg">Wilson Optix V1 Padel Racket</h3>
                    <span className="bg-[#1a1a1a] text-white px-2.5 py-1 rounded-lg text-sm font-bold whitespace-nowrap">$109.00</span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    All-fiberglass build for the softest feel possible. Wilson&apos;s Sharp Hole Technology adds spin without extra effort. Perfect for the mom transitioning from tennis who wants a forgiving, easy-on-the-arm racket.
                  </p>
                  <p className="text-xs text-stone-500 mb-3">Great for: the tennis-to-padel convert</p>
                  <TrackedLink
                    href="https://www.amazon.com/dp/B0DX2M3JYY?tag=padel02-20"
                    type="affiliate"
                    productName="Wilson Optix V1 Racket"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 bg-amber-500 text-white font-medium text-sm rounded-lg hover:bg-amber-600 hover:shadow-md transition-all duration-200"
                  >
                    Shop on Amazon &rarr;
                  </TrackedLink>
                </div>

                {/* 9. NOX Pro Cup */}
                <div className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-[#1a1a1a] text-lg">NOX Pro Cup USPA Edition</h3>
                    <span className="bg-[#1a1a1a] text-white px-2.5 py-1 rounded-lg text-sm font-bold whitespace-nowrap">$119.00</span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    Official USPA circuit racket. NOX&apos;s signature HR3 core delivers consistent feel across the face. A step up from basic beginner rackets &mdash; ideal for the mom who&apos;s been playing 6+ months and wants something with pedigree.
                  </p>
                  <p className="text-xs text-stone-500 mb-3">Great for: the competitive mom who follows the tour</p>
                  <TrackedLink
                    href="https://www.amazon.com/dp/B0F1ZVM7Y5?tag=padel02-20"
                    type="affiliate"
                    productName="NOX Pro Cup USPA Edition"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 bg-amber-500 text-white font-medium text-sm rounded-lg hover:bg-amber-600 hover:shadow-md transition-all duration-200"
                  >
                    Shop on Amazon &rarr;
                  </TrackedLink>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* White Section: $200+ The Splurge */}
        <div className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">$200+ &mdash; The Splurge</h2>
              <p className="text-stone-500 text-sm mb-5">For the mom who&apos;s all-in on padel. These are the rackets she&apos;d never buy herself.</p>

              <div className="space-y-4">
                {/* 10. NOX ML10 Pro Cup */}
                <div className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-[#1a1a1a] text-lg">NOX ML10 Pro Cup Rough Surface</h3>
                    <span className="bg-[#1a1a1a] text-white px-2.5 py-1 rounded-lg text-sm font-bold whitespace-nowrap">$169.99</span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    For the <Link href="/blog/best-padel-rackets-intermediate" className="text-emerald-600 hover:underline">intermediate player</Link>. Rough sand finish for topspin, low balance for net play. Miguel Lamperti signature model &mdash; one of the most popular rackets in professional padel.
                  </p>
                  <p className="text-xs text-stone-500 mb-3">Great for: the intermediate mom who wants more spin</p>
                  <TrackedLink
                    href="https://www.amazon.com/dp/B0DWTCG1PL?tag=padel02-20"
                    type="affiliate"
                    productName="NOX ML10 Pro Cup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 bg-amber-500 text-white font-medium text-sm rounded-lg hover:bg-amber-600 hover:shadow-md transition-all duration-200"
                  >
                    Shop on Amazon &rarr;
                  </TrackedLink>
                </div>

                {/* 11. Bullpadel Neuron */}
                <div className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-[#1a1a1a] text-lg">Bullpadel Neuron (Chingotto)</h3>
                    <span className="bg-[#1a1a1a] text-white px-2.5 py-1 rounded-lg text-sm font-bold whitespace-nowrap">$236.00</span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    Full carbon pro racket with a hybrid shape that forgives mistakes. Paquito Navarro&apos;s former partner Chingotto plays with this line. For the mom who&apos;s getting serious about competing.
                  </p>
                  <p className="text-xs text-stone-500 mb-3">Great for: the mom who&apos;s playing tournaments</p>
                  <TrackedLink
                    href="https://www.amazon.com/dp/B0DHZL5ZFF?tag=padel02-20"
                    type="affiliate"
                    productName="Bullpadel Neuron"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 bg-amber-500 text-white font-medium text-sm rounded-lg hover:bg-amber-600 hover:shadow-md transition-all duration-200"
                  >
                    Shop on Amazon &rarr;
                  </TrackedLink>
                </div>

                {/* 12. Wilson Bela V3 */}
                <div id="wilson-bela-v3" className="relative bg-white border-2 border-amber-400 rounded-xl p-6 md:p-8 shadow-sm">
                  <div className="absolute -top-3 -left-2 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-md -rotate-3 shadow-md z-10">
                    TOP PICK
                  </div>

                  <div className="flex items-start justify-between gap-3 mb-2 mt-2">
                    <h3 className="text-xl font-bold text-[#1a1a1a]">Wilson Bela V3</h3>
                    <span className="bg-[#1a1a1a] text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$399.00</span>
                  </div>
                  <p className="text-stone-600 leading-relaxed mb-3">
                    The ultimate. 24K carbon face &mdash; the finest weave in commercial padel. Fernando Belastegu&iacute;n&apos;s signature racket, designed with the greatest player in the sport&apos;s history. This is the gift she&apos;d never buy herself but would absolutely love. Featured in our <Link href="/blog/best-padel-rackets-2026" className="text-emerald-600 hover:underline">best pro rackets guide</Link>.
                  </p>
                  <p className="text-xs text-stone-500 mb-4">Great for: the mom who wants the absolute best</p>
                  <TrackedLink
                    href="https://www.amazon.com/dp/B0F2WMRTYB?tag=padel02-20"
                    type="affiliate"
                    productName="Wilson Bela V3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 hover:shadow-md transition-all duration-200"
                  >
                    Shop on Amazon &rarr;
                  </TrackedLink>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">What&apos;s a good padel gift for a beginner?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">A round-shape beginner racket like the <TrackedLink href="https://www.amazon.com/dp/B0BBPZLRVP?tag=padel02-20" type="affiliate" productName="Babolat Contact Racket" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Babolat Contact</TrackedLink> ($90) plus a can of balls and an overgrip &mdash; total ~$130. That covers everything she needs for her first session. See our full <Link href="/blog/best-padel-rackets-beginners" className="text-emerald-600 hover:underline">beginner racket guide</Link> for more options.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">How much should I spend on a padel racket as a gift?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">$80&ndash;130 for a beginner, $170&ndash;280 for an <Link href="/blog/best-padel-rackets-intermediate" className="text-emerald-600 hover:underline">intermediate player</Link>, $250&ndash;400 for advanced. If you&apos;re unsure of her skill level, a beginner racket in the $90&ndash;120 range is always a safe and appreciated choice.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">What size padel racket should I get?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Padel rackets are one-size &mdash; no need to know her size. All adult padel rackets have standardized dimensions. Just match the racket to her skill level: round shape for beginners, teardrop for intermediate, diamond for advanced.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* Dark Keep Reading / CTA Section */}
      <div className="bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-lg font-bold text-white mb-2">Find a Court for Mom</h2>
          <p className="text-stone-400 text-sm mb-5">Gift the gear, then book the court.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/search" className="block border border-stone-700 rounded-lg p-4 hover:border-emerald-500/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-stone-500">DIRECTORY</span>
              <h3 className="font-semibold text-white mt-1">Find Courts Near You</h3>
              <p className="text-sm text-stone-400 mt-1">350+ padel clubs across the US &rarr;</p>
            </Link>
            <Link href="/how-to-play" className="block border border-stone-700 rounded-lg p-4 hover:border-emerald-500/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-stone-500">GUIDE</span>
              <h3 className="font-semibold text-white mt-1">How to Play Padel</h3>
              <p className="text-sm text-stone-400 mt-1">Perfect if she&apos;s brand new &rarr;</p>
            </Link>
            <Link href="/blog/best-padel-rackets-beginners" className="block border border-stone-700 rounded-lg p-4 hover:border-amber-500/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-amber-500">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Best Beginner Rackets</h3>
              <p className="text-sm text-stone-400 mt-1">Deep-dive reviews of our top 5 &rarr;</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
