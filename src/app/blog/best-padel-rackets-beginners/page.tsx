import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Padel Rackets for Beginners (2026) — Top 5 Picks',
  description: 'Looking for your first padel racket? We compare the 5 best beginner padel rackets available in 2026, from $90 to $130. Round shapes, forgiving sweet spots, and trusted brands.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-rackets-beginners',
  },
  openGraph: {
    title: 'Best Padel Rackets for Beginners (2026) — Top 5 Picks',
    description: 'Looking for your first padel racket? We compare the 5 best beginner padel rackets available in 2026, from $90 to $130. Round shapes, forgiving sweet spots, and trusted brands.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-rackets-beginners',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=630&fit=crop' }],
  },
};

export default function BeginnerRacketsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Rackets for Beginners (2026) — Top 5 Picks",
    "description": "Looking for your first padel racket? We compare the 5 best beginner padel rackets available in 2026, from $90 to $130.",
    "image": "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=630&fit=crop",
    "datePublished": "2026-03-24T00:00:00Z",
    "dateModified": "2026-03-24T00:00:00Z",
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
      "@id": "https://www.padelcourtsfinder.com/blog/best-padel-rackets-beginners"
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />

      {/* Amber Accent Stripe */}
      <div className="h-1 bg-amber-500" />

      {/* Dark Gradient Hero */}
      <header className="bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="mb-4">
            <Link href="/blog" className="text-stone-400 hover:text-amber-400 text-sm">&larr; Back to Blog</Link>
          </div>
          <span className="inline-block bg-amber-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">Equipment</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Best Padel Rackets for Beginners (2026)
          </h1>
          <p className="text-stone-400 mt-3">Tested and compared so you don&apos;t have to</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>March 24, 2026</span>
            <span className="mx-2">&bull;</span>
            <span>12 min read</span>
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
                You just tried padel and you&apos;re hooked. Now you need your own racket — but with dozens of options, where do you start? The good news: choosing a beginner racket is straightforward if you know what to look for.
              </p>
              <p className="text-stone-600 leading-[1.75]">
                Beginners should always look for a <strong>round shape</strong> (bigger sweet spot, more forgiveness), a <strong>soft EVA core</strong> (comfortable, less arm fatigue), a <strong>fiberglass or hybrid surface</strong> (forgiving on mishits), and a <strong>weight under 365g</strong>. Budget $60–130 for your first racket — don&apos;t overspend until you know your play style. Here are our top 5 picks for 2026. Once you have your racket, <Link href="/search" className="text-emerald-600 hover:underline">find a court near you</Link> to start playing.
              </p>
            </div>

            {/* Quick Picks Box */}
            <div className="border-l-4 border-amber-500 bg-amber-50/80 rounded-r-lg p-5 sm:p-6 mt-8">
              <h3 className="font-bold text-[#1a1a1a] mb-3 flex items-center gap-2">
                <span className="text-amber-500">&#9889;</span> Quick Picks
              </h3>
              <div className="space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best Overall:</span>
                  <span className="text-sm"><a href="https://www.amazon.com/dp/B0BBPZLRVP?tag=padel02-20" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline font-medium">Babolat Contact</a> <span className="text-stone-500">&mdash; $89.95</span></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best All-Around:</span>
                  <span className="text-sm"><a href="https://www.amazon.com/dp/B0CGRV795T?tag=padel02-20" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline font-medium">HEAD Extreme Evo</a> <span className="text-stone-500">&mdash; $99.95</span></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best to Grow With:</span>
                  <span className="text-sm"><a href="https://www.amazon.com/dp/B0CNWGJP2N?tag=padel02-20" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline font-medium">Adidas Adipower</a> <span className="text-stone-500">&mdash; $129.00</span></span>
                </div>
              </div>
              <a href="#top-5-beginner" className="text-sm text-stone-500 hover:text-emerald-600 mt-3 inline-block">Jump to full reviews &darr;</a>
            </div>
          </div>
        </div>

        {/* Stone-50 Section: What Makes a Good Beginner Racket + Product Cards */}
        <div className="bg-stone-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* What Makes a Good Beginner Racket */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">What Makes a Good Beginner Racket?</h2>
              <div className="space-y-4">
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-1">Shape: Round</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Round rackets have the largest sweet spot centered in the middle of the face. This means off-center hits still feel decent — exactly what you want while your technique develops. Teardrop and diamond shapes offer more power but punish mishits.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-1">Weight: 340–365g</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Lighter rackets are easier to maneuver and cause less fatigue during long sessions. As you develop technique, you&apos;ll naturally want more weight for power — but start light.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-1">Core: Soft EVA Foam</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Soft EVA absorbs vibration and provides a comfortable, forgiving feel. Hard cores deliver more power but transmit more shock to your arm. Save those for when your technique is solid.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-1">Surface: Fiberglass</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Fiberglass faces offer a softer, more flexible feel than carbon. They&apos;re more forgiving on your arm and easier to generate natural ball control. Carbon surfaces come later when you need raw power.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-1">Price: $60–130</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Don&apos;t spend $300 on your first racket. You don&apos;t yet know if you prefer control, power, or spin. A $90–130 racket from a trusted brand will serve you well for your first 1–2 years.</p>
                </div>
              </div>
            </section>

            {/* Product Reviews */}
            <section>
              <h2 id="top-5-beginner" className="text-2xl font-bold text-[#1a1a1a] mb-5">Top 5 Beginner Padel Rackets</h2>

              {/* 1. Babolat Contact */}
              <div id="babolat-contact" className="relative bg-white border-2 border-amber-400 rounded-xl p-6 md:p-8 mb-8 shadow-sm">
                <div className="absolute -top-3 -left-2 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-md -rotate-3 shadow-md z-10">
                  #1 PICK
                </div>

                <div className="flex items-start justify-between gap-4 mb-1 mt-2">
                  <h3 className="text-xl font-bold text-[#1a1a1a]">Babolat Contact</h3>
                  <span className="bg-[#1a1a1a] text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$89.95</span>
                </div>

                <p className="text-sm italic text-stone-500 mb-4">Best for: Complete beginners and smaller players</p>

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
                      <div className="h-1.5 rounded-full bg-emerald-500" style={{ width: '80%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Comfort</span>
                      <span className="text-xs text-stone-400">9/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-emerald-500" style={{ width: '90%' }} />
                    </div>
                  </div>
                </div>

                <p className="text-stone-600 leading-[1.75] mb-5">
                  The lightest racket on our list at 340g. The Babolat Contact is built for complete beginners, smaller players, and anyone with wrist or elbow concerns. Its round shape delivers a huge, centered sweet spot, and the hybrid carbon/fiberglass frame adds durability without extra weight. Babolat&apos;s Dynamic Stability System uses tungsten reinforcement in the neck to reduce twisting on off-center hits — a subtle but meaningful detail for new players who mishit often. If you just want to get on court without overthinking it, this is the racket.
                </p>

                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-emerald-600 mr-1.5">&#10003;</span> Lightest at 340g, huge sweet spot, hybrid frame adds durability</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> May lack stability on hard returns due to low weight</p>
                </div>

                <a
                  href="https://www.amazon.com/dp/B0BBPZLRVP?tag=padel02-20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 hover:shadow-md transition-all duration-200"
                >
                  Check Price on Amazon &rarr;
                </a>
              </div>

              {/* 2. HEAD Extreme Evo */}
              <div id="head-extreme-evo" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#2 — Best All-Around</span>

                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-[#1a1a1a]">HEAD Extreme Evo</h3>
                  <span className="bg-[#1a1a1a] text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$99.95</span>
                </div>

                <p className="text-sm italic text-stone-500 mb-4">Best for: Players who want arm protection</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Round (511cm&sup2;)</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">355–365g</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Power Foam</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">FG/Carbon Hybrid</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Innegra Frame</span>
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
                      <span className="text-xs text-stone-400">8/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-emerald-500" style={{ width: '80%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Comfort</span>
                      <span className="text-xs text-stone-400">9/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-emerald-500" style={{ width: '90%' }} />
                    </div>
                  </div>
                </div>

                <p className="text-stone-600 leading-[1.75] mb-5">
                  HEAD&apos;s Extreme Evo is our top pick for most beginners. The oversized 511cm&sup2; head gives you the largest sweet spot in this category, while Innegra technology in the frame significantly reduces shock and vibration — a real benefit if you play multiple times a week. The Power Foam core has an ultra-fast memory effect that returns to shape quickly for consistent feel. It&apos;s slightly heavier than the Babolat at 355–365g, but that extra weight translates to better stability at the net. If arm protection matters to you, this is the one.
                </p>

                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-emerald-600 mr-1.5">&#10003;</span> Innegra tech reduces shock, largest sweet spot in category</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Slightly firmer than pure fiberglass options</p>
                </div>

                <a
                  href="https://www.amazon.com/dp/B0CGRV795T?tag=padel02-20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-amber-500 text-white font-medium text-sm rounded-lg hover:bg-amber-600 hover:shadow-md transition-all duration-200"
                >
                  Check Price on Amazon &rarr;
                </a>
              </div>

              {/* 3. Wilson Optix V1 */}
              <div id="wilson-optix-v1" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#3 — Softest Feel</span>

                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-[#1a1a1a]">Wilson Optix V1</h3>
                  <span className="bg-[#1a1a1a] text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$109.00</span>
                </div>

                <p className="text-sm italic text-stone-500 mb-4">Best for: Comfort-first players</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Round</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">355–360g</span>
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
                      <div className="h-1.5 rounded-full bg-emerald-500" style={{ width: '90%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Comfort</span>
                      <span className="text-xs text-stone-400">10/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-emerald-500" style={{ width: '100%' }} />
                    </div>
                  </div>
                </div>

                <p className="text-stone-600 leading-[1.75] mb-5">
                  The Wilson Optix V1 is a pure fiberglass racket through and through — face and frame. That makes it the softest, most forgiving option on this list. Wilson&apos;s Sharp Hole Technology modifies the drilling pattern to give extra ball bite for spin, which is a nice bonus as you start developing your game. The trade-off is a lower power ceiling than the carbon-hybrid options — eventually you&apos;ll feel limited when you want to drive hard. But for your first 6–12 months, the comfort and control are unmatched.
                </p>

                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-emerald-600 mr-1.5">&#10003;</span> Full fiberglass build = softest feel on the list, Sharp Hole Technology for spin</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Limited power ceiling — you&apos;ll outgrow it</p>
                </div>

                <a
                  href="https://www.amazon.com/dp/B0DX2M3JYY?tag=padel02-20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-amber-500 text-white font-medium text-sm rounded-lg hover:bg-amber-600 hover:shadow-md transition-all duration-200"
                >
                  Check Price on Amazon &rarr;
                </a>
              </div>

              {/* 4. NOX Pro Cup USPA */}
              <div id="nox-pro-cup-uspa" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#4 — Official USPA Racket</span>

                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-[#1a1a1a]">NOX Pro Cup USPA Edition</h3>
                  <span className="bg-[#1a1a1a] text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$119.00</span>
                </div>

                <p className="text-sm italic text-stone-500 mb-4">Best for: Players who want tour pedigree</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Round</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">360–365g</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">HR3 EVA</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">FG 3K Silver</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Carbon Frame</span>
                </div>

                {/* Rating Bars */}
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-50 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Power</span>
                      <span className="text-xs text-stone-400">6/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-amber-500" style={{ width: '60%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Control</span>
                      <span className="text-xs text-stone-400">8/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-emerald-500" style={{ width: '80%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Comfort</span>
                      <span className="text-xs text-stone-400">8/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-emerald-500" style={{ width: '80%' }} />
                    </div>
                  </div>
                </div>

                <p className="text-stone-600 leading-[1.75] mb-5">
                  This is the official racket of the NOX USPA Circuit — the largest padel tour in the US. NOX&apos;s signature HR3 core offers consistent bounce and rapid memory return, meaning the feel stays uniform across the face. The FG 3K Silver surface provides fiberglass forgiveness with a premium finish, while the carbon frame adds durability and stability that you&apos;ll appreciate as your shots get harder. It&apos;s on the heavier side for beginners at 360–365g, but if you want the racket that US tour players compete with, this is it. The Smartstrap system is a nice safety touch too.
                </p>

                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-emerald-600 mr-1.5">&#10003;</span> HR3 core consistency, carbon frame durability, official USPA edition</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Slightly heavier than other beginner options</p>
                </div>

                <a
                  href="https://www.amazon.com/dp/B0F1ZVM7Y5?tag=padel02-20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-amber-500 text-white font-medium text-sm rounded-lg hover:bg-amber-600 hover:shadow-md transition-all duration-200"
                >
                  Check Price on Amazon &rarr;
                </a>
              </div>

              {/* 5. Adidas Adipower */}
              <div id="adidas-adipower" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#5 — Best to Grow With</span>

                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-[#1a1a1a]">Adidas Adipower</h3>
                  <span className="bg-[#1a1a1a] text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$129.00</span>
                </div>

                <p className="text-sm italic text-stone-500 mb-4">Best for: Players who want customizable weight</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Round</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">360–365g (Adjustable)</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">EVA Soft Performance</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">FG 3K</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Carbon Frame</span>
                </div>

                {/* Rating Bars */}
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-50 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Power</span>
                      <span className="text-xs text-stone-400">6/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-amber-500" style={{ width: '60%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Control</span>
                      <span className="text-xs text-stone-400">7/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-emerald-500" style={{ width: '70%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Comfort</span>
                      <span className="text-xs text-stone-400">8/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-emerald-500" style={{ width: '80%' }} />
                    </div>
                  </div>
                </div>

                <p className="text-stone-600 leading-[1.75] mb-5">
                  The Adipower stands out with Adidas&apos;s Multiweight system — removable weight inserts that let you adjust the balance and total weight as you improve. Start lighter while you&apos;re learning, then add weight for more power as your technique develops. The EVA Soft Performance core and FG 3K fiberglass face provide the forgiveness beginners need, while Spin Blade technology and Smart Holes Curve enhance spin potential. It&apos;s the priciest on our list at $129, but the customization means you won&apos;t need to replace it as quickly. <strong>Note:</strong> the listing has multiple variants — select the $129 fiberglass base model, not the carbon upgrade.
                </p>

                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-emerald-600 mr-1.5">&#10003;</span> Multiweight system — add/remove weight inserts as you improve</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> At 365g+ with weights, toward the heavy end for beginners</p>
                </div>

                <a
                  href="https://www.amazon.com/dp/B0CNWGJP2N?tag=padel02-20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-amber-500 text-white font-medium text-sm rounded-lg hover:bg-amber-600 hover:shadow-md transition-all duration-200"
                >
                  Check Price on Amazon &rarr;
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* White Section: Comparison Table + What Else You Need + FAQ */}
        <div className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Comparison Summary */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">Quick Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-stone-200">
                      <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-wider text-stone-500">Category</th>
                      <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-wider text-stone-500">Pick</th>
                      <th className="text-left py-3 text-xs font-semibold uppercase tracking-wider text-stone-500">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4 font-medium text-stone-700">Best Value</td>
                      <td className="py-3 pr-4"><a href="https://www.amazon.com/dp/B0BBPZLRVP?tag=padel02-20" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Babolat Contact</a></td>
                      <td className="py-3 text-stone-600">$89.95</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4 font-medium text-stone-700">Best All-Around</td>
                      <td className="py-3 pr-4"><a href="https://www.amazon.com/dp/B0CGRV795T?tag=padel02-20" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">HEAD Extreme Evo</a></td>
                      <td className="py-3 text-stone-600">$99.95</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4 font-medium text-stone-700">Best to Grow With</td>
                      <td className="py-3 pr-4"><a href="https://www.amazon.com/dp/B0CNWGJP2N?tag=padel02-20" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Adidas Adipower</a></td>
                      <td className="py-3 text-stone-600">$129.00</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4 font-medium text-stone-700">Lightest / Most Forgiving</td>
                      <td className="py-3 pr-4"><a href="https://www.amazon.com/dp/B0BBPZLRVP?tag=padel02-20" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">Babolat Contact (340g)</a></td>
                      <td className="py-3 text-stone-600">$89.95</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4 font-medium text-stone-700">Best Brand Pedigree</td>
                      <td className="py-3 pr-4"><a href="https://www.amazon.com/dp/B0F1ZVM7Y5?tag=padel02-20" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">NOX Pro Cup USPA</a></td>
                      <td className="py-3 text-stone-600">$119.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* What Else You Need */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">What Else You Need</h2>
              <p className="text-stone-600 leading-[1.75] mb-4">A racket alone won&apos;t get you on court. Here&apos;s the essential gear to round out your kit:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-1">Padel Balls</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">Padel balls look like tennis balls but have slightly less pressure. Most clubs provide them, but having your own is handy for practice.</p>
                  <div className="flex flex-col gap-1.5">
                    <a href="https://www.amazon.com/dp/B07D56XDNL?tag=padel02-20" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline text-sm">HEAD Padel Pro S — $13.91</a>
                    <a href="https://www.amazon.com/dp/B07SBHNKJF?tag=padel02-20" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline text-sm">Dunlop Pro Padel — $14.74</a>
                  </div>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-1">Overgrips</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">Replace your overgrip every few sessions to maintain tackiness and sweat absorption. Buy in bulk — you&apos;ll go through them.</p>
                  <div className="flex flex-col gap-1.5">
                    <a href="https://www.amazon.com/dp/B002GUEXTQ?tag=padel02-20" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline text-sm">Wilson Pro Overgrip 12-pack — $27</a>
                    <a href="https://www.amazon.com/dp/B018SC9APW?tag=padel02-20" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline text-sm">Babolat VS 12-pack — $35</a>
                  </div>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5 sm:col-span-2">
                  <h3 className="font-semibold text-[#1a1a1a] mb-1">Court Shoes</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">Don&apos;t wear running shoes on court. Padel requires lateral movement — get shoes with herringbone soles designed for court sports.</p>
                  <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-4">
                    <a href="https://www.amazon.com/dp/B0G2TH1X7V?tag=padel02-20" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline text-sm">HEAD Sprint Pro 4.0 Men&apos;s — $129</a>
                    <a href="https://www.amazon.com/dp/B0DQKHSSZB?tag=padel02-20" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline text-sm">HEAD Sprint Pro 4.0 Women&apos;s — $89</a>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">Can I use a tennis racket for padel?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">No — they&apos;re completely different. Padel rackets are solid (no strings) with a perforated face, shorter handle, and wrist strap. Using a tennis racket on a padel court would be like using a baseball bat for golf.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">How much should I spend on my first racket?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">$60–130 is the sweet spot for beginners. Don&apos;t overspend until you know your play style — after 6–12 months you&apos;ll have a much better idea of what you want in an upgrade. Check out our <Link href="/blog/best-padel-rackets-intermediate" className="text-emerald-600 hover:underline">intermediate rackets guide</Link> when you&apos;re ready.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">Round, teardrop, or diamond shape?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Round. Always round for beginners. The sweet spot is centered and large, which means more forgiveness on off-center hits. Teardrop and diamond shapes shift the sweet spot higher and reward precise technique — something you&apos;ll develop over time.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">How long will a beginner racket last?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">1–2 years with regular play (2–3 times per week). The EVA foam core gradually loses its responsiveness before the frame shows wear. You&apos;ll likely want to upgrade before the racket actually breaks — that&apos;s when it&apos;s time for an <Link href="/blog/best-padel-rackets-intermediate" className="text-emerald-600 hover:underline">intermediate racket</Link>.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-[#1a1a1a] mb-2">Where can I play padel near me?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Check our <Link href="/search" className="text-emerald-600 hover:underline">court finder</Link> — we list 350+ padel clubs across the US. If you&apos;re in South Florida, don&apos;t miss our <Link href="/blog/best-padel-clubs-miami" className="text-emerald-600 hover:underline">Miami padel guide</Link>.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* Dark Keep Reading Section */}
      <div className="bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-lg font-bold text-white mb-4">Keep Reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/best-padel-rackets-intermediate" className="block border border-stone-700 rounded-lg p-4 hover:border-amber-500/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-amber-500">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Best Intermediate Rackets (2026)</h3>
              <p className="text-sm text-stone-400 mt-1">Ready to upgrade? 5 rackets from $170–$280 &rarr;</p>
            </Link>
            <Link href="/blog/best-padel-rackets-2026" className="block border border-stone-700 rounded-lg p-4 hover:border-amber-500/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-amber-500">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Best Pro Rackets (2026)</h3>
              <p className="text-sm text-stone-400 mt-1">Top 5 flagship rackets from $250–$400 &rarr;</p>
            </Link>
            <Link href="/search" className="block border border-stone-700 rounded-lg p-4 hover:border-emerald-500/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-stone-500">DIRECTORY</span>
              <h3 className="font-semibold text-white mt-1">Find a Court Near You</h3>
              <p className="text-sm text-stone-400 mt-1">Search 350+ padel clubs across the US &rarr;</p>
            </Link>
            <Link href="/how-to-play" className="block border border-stone-700 rounded-lg p-4 hover:border-emerald-500/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-stone-500">GUIDE</span>
              <h3 className="font-semibold text-white mt-1">New to Padel?</h3>
              <p className="text-sm text-stone-400 mt-1">Learn the rules and start playing today &rarr;</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
