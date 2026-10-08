import { Metadata } from 'next';
import Link from 'next/link';
import { TrackedLink } from '@/components/TrackedLink';
import { RacketCompare } from '@/components/gear/gear-compare';
import { RacketPlate } from '@/components/gear/racket-plate';
import type { GearRacket } from '@/components/gear/types';
import { StickyPickBar } from '@/components/sticky-pick-bar';
import { HeroVideo } from '@/components/hero-video';
import type { ReactNode } from 'react';

const TITLE = 'Best Budget Padel Rackets (2026): 6 Picks From $90 to $170';
const DESCRIPTION = 'The 6 best budget padel rackets of 2026, from $89.95 to $169.99 — ranked by what you get per dollar, with the best cheap picks for beginners and for intermediate players.';
const URL = 'https://www.padelcourtsfinder.com/blog/best-budget-padel-rackets';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'Padel Courts Finder',
    type: 'article',
    images: [{ url: 'https://www.padelcourtsfinder.com/og/default.png' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

const AMZ = {
  optix: 'https://www.amazon.com/dp/B0DX2M3JYY?tag=padel02-20',
  evo: 'https://www.amazon.com/dp/B0CGRV795T?tag=padel02-20',
  contact: 'https://www.amazon.com/dp/B0BBPZLRVP?tag=padel02-20',
  uspa: 'https://www.amazon.com/dp/B0F1ZVM7Y5?tag=padel02-20',
  ml10: 'https://www.amazon.com/dp/B0DWTCG1PL?tag=padel02-20',
  adipower: 'https://www.amazon.com/dp/B0CNWGJP2N?tag=padel02-20',
  blade: 'https://www.amazon.com/dp/B09TSWCFHD?tag=padel02-20',
  attack12k: 'https://www.amazon.com/dp/B0DHSVNSRK?tag=padel02-20',
};

const articleData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": TITLE,
  "description": DESCRIPTION,
  "image": "https://www.padelcourtsfinder.com/og/default.png",
  "datePublished": "2026-09-28T00:00:00Z",
  "dateModified": "2026-09-28T00:00:00Z",
  "author": { "@type": "Organization", "name": "Padel Courts Finder", "url": "https://www.padelcourtsfinder.com" },
  "publisher": { "@type": "Organization", "name": "Padel Courts Finder", "logo": { "@type": "ImageObject", "url": "https://www.padelcourtsfinder.com/logo.png" } },
  "mainEntityOfPage": { "@type": "WebPage", "@id": URL }
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best budget padel racket in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Wilson Optix V1 at $109.00. It scores 7.7/10 in our ratings, the highest of any racket under $170 we have reviewed, with 9/10 for control and 10/10 for comfort. If you want to stay under $100, the HEAD Extreme Evo at $99.95 is the best pick, and the Babolat Contact at $89.95 is the cheapest racket we recommend."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best budget padel racket for beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most beginners, the Wilson Optix V1 ($109.00) or the HEAD Extreme Evo ($99.95). Both are round, forgiving rackets with a large sweet spot. The Optix V1 is the softer and more comfortable of the two; the Extreme Evo has the bigger head and better shock reduction. Smaller players and anyone who wants the lightest option should look at the 340g Babolat Contact at $89.95."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best budget padel racket for intermediate players?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The NOX ML10 Pro Cup Rough Surface at $169.99. It is the least expensive racket we recommend for an intermediate game: 9/10 control, a rough surface for topspin and a low balance point that makes it quick at the net. If you want more power and can stretch the budget, the Wilson Blade Elite V2 at $189.00 is the next step."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best padel racket under $100?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The HEAD Extreme Evo at $99.95 is our pick under $100, with the largest sweet spot on this list and Innegra shock reduction in the frame. The Babolat Contact at $89.95 is the other racket we recommend under $100, and the better choice if you want the lightest frame."
      }
    },
    {
      "@type": "Question",
      "name": "Are cheap padel rackets worth buying?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, if you buy from an established padel brand. Every racket on this page costs between $89.95 and $169.99 and scores 7.0/10 or higher in our ratings. What you give up at this price is mostly power: budget rackets use fiberglass faces and softer cores, which are more comfortable and forgiving but do not hit as hard as the carbon faces on rackets costing $250 or more. For a beginner that is a good trade, not a compromise."
      }
    }
  ]
};

const product = (position: number, name: string, url: string, price: string, offerUrl: string, rating: number) => ({
  "@type": "ListItem",
  "position": position,
  "item": {
    "@type": "Product",
    "name": name,
    "image": "https://www.padelcourtsfinder.com/og/default.png",
    "url": url,
    "offers": { "@type": "Offer", "price": price, "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": offerUrl },
    "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": rating, "bestRating": 10 }, "author": { "@type": "Organization", "name": "Padel Courts Finder" } }
  }
});

const itemListData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    product(1, "Wilson Optix V1", "https://www.padelcourtsfinder.com/blog/wilson-optix-v1-review", "109.00", AMZ.optix, 7.7),
    product(2, "HEAD Extreme Evo", "https://www.padelcourtsfinder.com/blog/head-extreme-evo-review", "99.95", AMZ.evo, 7.3),
    product(3, "Babolat Contact", "https://www.padelcourtsfinder.com/blog/babolat-contact-review", "89.95", AMZ.contact, 7.0),
    product(4, "NOX Pro Cup USPA Edition", "https://www.padelcourtsfinder.com/blog/best-budget-padel-rackets#nox-pro-cup-uspa", "119.00", AMZ.uspa, 7.3),
    product(5, "NOX ML10 Pro Cup Rough Surface", "https://www.padelcourtsfinder.com/blog/nox-ml10-pro-cup-review", "169.99", AMZ.ml10, 7.3),
    product(6, "Adidas Adipower", "https://www.padelcourtsfinder.com/blog/best-budget-padel-rackets#adidas-adipower", "129.00", AMZ.adipower, 7.0),
  ]
};

function Bar({ label, score }: { label: string; score: number }) {
  const color = score >= 7 ? 'bg-padel-green' : 'bg-amber-500';
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-medium text-stone-500">{label}</span>
        <span className="text-xs text-stone-400">{score}/10</span>
      </div>
      <div className="h-1.5 bg-stone-200 rounded-full">
        <div className={`h-1.5 rounded-full ${color}`} style={{ width: `${score * 10}%` }} />
      </div>
    </div>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">{children}</span>;
}

/** Presentation data for the compare view and racket drawings. Every value is
 *  copied from this page's own cards; nothing here is new. */
const RACKETS: GearRacket[] = [
  { id: "wilson-optix-v1", rank: 1, name: "Wilson Optix V1", productName: "Wilson Optix V1", price: "$109.00", href: AMZ.optix, brand: "wilson", shape: "round", shapeLabel: "Round", weight: "355–360g", core: "Soft EVA", face: "Fiberglass Weave", bestFor: "Anyone who wants the most comfortable, most forgiving racket for about $110", level: "Beginner", score: "7.7/10" },
  { id: "head-extreme-evo", rank: 2, name: "HEAD Extreme Evo", productName: "HEAD Extreme Evo", price: "$99.95", href: AMZ.evo, brand: "head", shape: "round", shapeLabel: "Round (511cm²)", weight: "355–365g", core: "Power Foam", face: "FG/Carbon Hybrid", bestFor: "Players who want arm protection and a huge sweet spot for under $100", level: "Beginner", score: "7.3/10" },
  { id: "babolat-contact", rank: 3, name: "Babolat Contact", productName: "Babolat Contact", price: "$89.95", href: AMZ.contact, brand: "babolat", shape: "round", shapeLabel: "Round", weight: "340g", core: "Soft EVA", face: "Fiberglass", bestFor: "Complete beginners, smaller players and anyone spending as little as possible", level: "Beginner", score: "7.0/10" },
  { id: "nox-pro-cup-uspa", rank: 4, name: "NOX Pro Cup USPA Edition", productName: "NOX Pro Cup USPA Edition", price: "$119.00", href: AMZ.uspa, brand: "nox", shape: "round", shapeLabel: "Round", weight: "360–365g", core: "HR3 EVA", face: "FG 3K Silver", bestFor: "Budget buyers who want a carbon frame and a bit more pace", level: "Beginner", score: "7.3/10" },
  { id: "nox-ml10-pro-cup", rank: 5, name: "NOX ML10 Pro Cup Rough Surface", productName: "NOX ML10 Pro Cup Rough Surface", price: "$169.99", href: AMZ.ml10, brand: "nox", shape: "round", shapeLabel: "Round", weight: "360–375g", core: "HR3 EVA", face: "FG 3K Rough", bestFor: "Improving players who want a real upgrade without paying $200+", balance: "Low", level: "Intermediate", score: "7.3/10" },
  { id: "adidas-adipower", rank: 6, name: "Adidas Adipower", productName: "Adidas Adipower", price: "$129.00", href: AMZ.adipower, brand: "adidas", shape: "round", shapeLabel: "Round", weight: "360–365g (Adjustable)", core: "EVA Soft Performance", face: "FG 3K", bestFor: "Players who want one racket they can re-weight as they improve", level: "Beginner", score: "7.0/10" },
];

export default function BudgetRacketsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <StickyPickBar label="Best budget pick" productName="Wilson Optix V1" price="$109.00" href={AMZ.optix} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListData) }} />

      {/* Accent Stripe */}
      <div className="h-1 bg-padel-green" />

      {/* Dark Hero */}
      <header className="grain bg-court relative overflow-hidden">
        <HeroVideo />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="mb-5">
            <Link href="/blog" className="text-stone-400 hover:text-turf text-sm">&larr; Back to Blog</Link>
          </div>
          <span className="inline-block bg-padel-green text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">Equipment</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Best Budget Padel Rackets (2026)</h1>
          <p className="text-lg text-stone-400 mt-3">Six rackets from $89.95 to $169.99 &mdash; ranked by what you get for the money, not by the logo</p>
          <div className="text-sm text-stone-500 mt-4 flex items-center gap-3">
            <span>Updated September 28, 2026 &middot; 8 min read</span>
          </div>
          <div className="text-sm text-stone-500 mt-1">By the Padel Courts Finder editorial team</div>
        </div>
      </header>

      <article>
        {/* White Section: Disclosure + Intro + Quick Picks */}
        <div className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 mb-10 flex items-start gap-2">
              <span className="text-stone-400 mt-0.5 text-sm">&#8505;</span>
              <p className="text-xs text-stone-500 italic leading-relaxed">
                This guide contains affiliate links. If you purchase through our links, we may earn a small commission at no extra cost to you. We only recommend products we believe in.
              </p>
            </div>

            <div className="prose prose-lg prose-stone max-w-none mb-0">
              <p className="text-stone-600 leading-[1.75]">A budget padel racket is not a worse racket. It is a softer one. Under about $170, brands build with <strong className="text-foreground">fiberglass faces and softer cores</strong> instead of stiff carbon, and that changes two things: the ball comes off the face with less pace, and the racket forgives far more of your mistakes. For anyone in their first year or two that is the right trade, which is why the highest-scoring racket on this page costs $109.</p>
              <p className="text-stone-600 leading-[1.75]">Every racket below is one we already recommend elsewhere on the site, in our <Link href="/blog/best-padel-rackets-beginners" className="text-padel-green hover:underline">beginner</Link> and <Link href="/blog/best-padel-rackets-intermediate" className="text-padel-green hover:underline">intermediate</Link> guides. Here they are ranked on a different question: <strong className="text-foreground">what do you get per dollar?</strong> We set the ceiling at $170 because that is where the first racket we would hand to an intermediate player sits. Below $89.95 we have not reviewed a racket we would recommend, so we do not list one.</p>
            </div>

            {/* Quick Picks Box */}
            <div className="border-l-4 border-amber-500 bg-amber-50/80 rounded-r-lg p-5 sm:p-6 mt-8">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="text-amber-500">&#9889;</span> Quick Picks
              </h3>
              <div className="space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best Overall:</span>
                  <span className="text-sm"><TrackedLink href={AMZ.optix} type="affiliate" productName="Wilson Optix V1" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline font-medium">Wilson Optix V1</TrackedLink> <span className="text-stone-500">&mdash; $109.00</span></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best Under $100:</span>
                  <span className="text-sm"><TrackedLink href={AMZ.evo} type="affiliate" productName="HEAD Extreme Evo" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline font-medium">HEAD Extreme Evo</TrackedLink> <span className="text-stone-500">&mdash; $99.95</span></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Cheapest:</span>
                  <span className="text-sm"><TrackedLink href={AMZ.contact} type="affiliate" productName="Babolat Contact" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline font-medium">Babolat Contact</TrackedLink> <span className="text-stone-500">&mdash; $89.95</span></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best for Intermediates:</span>
                  <span className="text-sm"><TrackedLink href={AMZ.ml10} type="affiliate" productName="NOX ML10 Pro Cup Rough Surface" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline font-medium">NOX ML10 Pro Cup Rough Surface</TrackedLink> <span className="text-stone-500">&mdash; $169.99</span></span>
                </div>
              </div>
              <a href="#top-budget-rackets" className="text-sm text-stone-500 hover:text-padel-green mt-3 inline-block">Jump to full reviews &darr;</a>
            </div>
          </div>
        </div>

        {/* Stone-50 Section: Table + How we picked + Cards */}
        <div className="bg-stone-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-5">Budget Padel Rackets Compared</h2>
              <p className="text-sm text-stone-500 mb-5 -mt-2">Each racket is drawn as a simple outline of its shape, not to scale, so the shapes are easy to compare. The green glow shows where our shapes guide places the sweet spot. Tap a racket to jump to its review.</p>
              <RacketCompare rackets={RACKETS} uidPrefix="bud" caption="Budget padel rackets compared" />
              <p className="text-xs text-stone-500 mt-3">All six are round rackets. Prices are the Amazon prices at the time of our reviews and can change.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-5">How we picked the best budget padel racket</h2>
              <div className="prose prose-lg prose-stone max-w-none">
                <p className="text-stone-600 leading-[1.75]">We started from the rackets we have already rated and kept everything at $170 or less. Then we ranked on <strong className="text-foreground">score against price</strong>. Each racket carries the same power, control and comfort ratings it has in our other guides; nothing was re-scored to make a cheap racket look better. That is why the $109 Optix V1 (7.7/10) sits above the $169.99 ML10 (7.3/10): the ML10 is the better racket for an intermediate player, but it is not better value for most people reading a budget guide.</p>
                <p className="text-stone-600 leading-[1.75]">All six are <strong className="text-foreground">round</strong>. That is not a coincidence. Teardrop and diamond frames in this price range exist, but the ones we rate start at $189, and a round shape is where a limited budget buys the most: a large, centred sweet spot and good control. Our <Link href="/blog/padel-racket-shapes-explained" className="text-padel-green hover:underline">racket shapes guide</Link> explains why. If you are shopping for power first, a budget racket is the wrong tool, and our <Link href="/blog/best-padel-rackets-power" className="text-padel-green hover:underline">power rackets guide</Link> is the honest place to look.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-5">Which budget racket by what you can spend</h2>
              <div className="space-y-3">
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <p className="text-stone-600 text-sm leading-relaxed"><strong className="text-foreground">Under $100.</strong> Two choices: the <a href="#head-extreme-evo" className="text-padel-green hover:underline">HEAD Extreme Evo</a> ($99.95) for the bigger sweet spot and arm protection, or the <a href="#babolat-contact" className="text-padel-green hover:underline">Babolat Contact</a> ($89.95) if you want the lightest and cheapest.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <p className="text-stone-600 text-sm leading-relaxed"><strong className="text-foreground">$100 to $130.</strong> The <a href="#wilson-optix-v1" className="text-padel-green hover:underline">Wilson Optix V1</a> ($109.00) is our overall pick. Choose the <a href="#nox-pro-cup-uspa" className="text-padel-green hover:underline">NOX Pro Cup USPA</a> ($119.00) instead if you want more pace and a carbon frame, or the <a href="#adidas-adipower" className="text-padel-green hover:underline">Adidas Adipower</a> ($129.00) if adjustable weight matters to you.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <p className="text-stone-600 text-sm leading-relaxed"><strong className="text-foreground">Up to $170.</strong> Only worth it if you are past the beginner stage. The <a href="#nox-ml10-pro-cup" className="text-padel-green hover:underline">NOX ML10 Pro Cup</a> ($169.99) is the best budget padel racket for intermediate players we have reviewed.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 id="top-budget-rackets" className="text-2xl font-bold text-foreground mb-5">The 6 Best Budget Padel Rackets in 2026</h2>

              {/* 1. Wilson Optix V1 */}
              <div id="wilson-optix-v1" className="relative bg-white border-2 border-padel-green rounded-xl p-6 md:p-8 mb-8 shadow-sm">
                <div className="absolute -top-3 -left-2 bg-padel-green text-white text-xs font-bold px-3 py-1.5 rounded-md -rotate-3 shadow-md z-10">#1 PICK</div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mt-2 mb-1">#1 &mdash; Best Budget Racket Overall</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">Wilson Optix V1</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$109.00</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Anyone who wants the most comfortable, most forgiving racket for about $110</p>
                <RacketPlate racket={RACKETS[0]} uidPrefix="bud" />
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag>Round</Tag><Tag>355&ndash;360g</Tag><Tag>Soft EVA</Tag><Tag>Fiberglass Weave</Tag><Tag>FG Frame</Tag>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <Bar label="Power" score={4} /><Bar label="Control" score={9} /><Bar label="Comfort" score={10} />
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">The highest-scoring racket on this page is not the most expensive one. The Optix V1 is fiberglass through and through &mdash; face and frame &mdash; which makes it the softest, most forgiving frame we have reviewed: 10/10 for comfort and 9/10 for control. Wilson&apos;s Sharp Hole Technology changes the drilling pattern to give the ball a little extra bite for spin. The cost of all that softness is a 4/10 for power, and we mean it: once you start driving the ball hard you will feel the ceiling. For a first racket, or for a player whose game is placement rather than pace, nothing else at this price scores as well. Read our full <Link href="/blog/wilson-optix-v1-review" className="text-padel-green hover:underline">Wilson Optix V1 review</Link>.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Softest feel we have reviewed, 9/10 control, Sharp Hole Technology for spin</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> 4/10 power &mdash; a limited ceiling once you start hitting hard</p>
                </div>
                <TrackedLink href={AMZ.optix} type="affiliate" productName="Wilson Optix V1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 bg-padel-green text-white font-medium rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
              </div>

              {/* 2. HEAD Extreme Evo */}
              <div id="head-extreme-evo" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#2 &mdash; Best Under $100</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">HEAD Extreme Evo</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$99.95</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Players who want arm protection and a huge sweet spot for under $100</p>
                <RacketPlate racket={RACKETS[1]} uidPrefix="bud" />
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag>Round (511cm&sup2;)</Tag><Tag>355&ndash;365g</Tag><Tag>Power Foam</Tag><Tag>FG/Carbon Hybrid</Tag><Tag>Innegra Frame</Tag>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <Bar label="Power" score={5} /><Bar label="Control" score={8} /><Bar label="Comfort" score={9} />
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">Five cents under $100 and the best all-round spec sheet in that bracket. The oversized 511cm&sup2; head gives the largest sweet spot of any racket here, and Innegra in the frame takes a meaningful amount of shock and vibration out of each hit &mdash; worth having if you play several times a week. The Power Foam core recovers its shape quickly, so the feel stays consistent, and the fiberglass/carbon hybrid face gives it one more point of power than the Optix. At 355&ndash;365g it is a little heavier than the Babolat below, and that weight is what makes it steadier at the net. Read our full <Link href="/blog/head-extreme-evo-review" className="text-padel-green hover:underline">HEAD Extreme Evo review</Link>.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Largest sweet spot here, Innegra shock reduction, 9/10 comfort</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Slightly firmer feel than the pure-fiberglass options</p>
                </div>
                <TrackedLink href={AMZ.evo} type="affiliate" productName="HEAD Extreme Evo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
              </div>

              {/* 3. Babolat Contact */}
              <div id="babolat-contact" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#3 &mdash; Cheapest Racket We Recommend</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">Babolat Contact</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$89.95</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Complete beginners, smaller players and anyone spending as little as possible</p>
                <RacketPlate racket={RACKETS[2]} uidPrefix="bud" />
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag>Round</Tag><Tag>340g</Tag><Tag>Soft EVA</Tag><Tag>Fiberglass</Tag><Tag>Carbon/FG Hybrid Frame</Tag>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <Bar label="Power" score={4} /><Bar label="Control" score={8} /><Bar label="Comfort" score={9} />
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">At $89.95 this is the least expensive racket we recommend, and at 340g it is also the lightest. The round shape puts a big sweet spot in the middle of the face, the hybrid carbon/fiberglass frame adds durability without adding weight, and Babolat&apos;s Dynamic Stability System uses tungsten reinforcement in the neck to reduce twisting on off-center hits. The low weight is the trade-off as well as the selling point: against hard-hit balls it can feel less stable than the heavier frames above. If the budget is fixed at under $90, this is the answer. Read our full <Link href="/blog/babolat-contact-review" className="text-padel-green hover:underline">Babolat Contact review</Link>.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Lowest price on the list, lightest at 340g, big centred sweet spot</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Can lack stability on hard returns because of the low weight</p>
                </div>
                <TrackedLink href={AMZ.contact} type="affiliate" productName="Babolat Contact" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
              </div>

              {/* 4. NOX Pro Cup USPA Edition */}
              <div id="nox-pro-cup-uspa" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#4 &mdash; Most Power for the Money</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">NOX Pro Cup USPA Edition</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$119.00</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Budget buyers who want a carbon frame and a bit more pace</p>
                <RacketPlate racket={RACKETS[3]} uidPrefix="bud" />
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag>Round</Tag><Tag>360&ndash;365g</Tag><Tag>HR3 EVA</Tag><Tag>FG 3K Silver</Tag><Tag>Carbon Frame</Tag>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <Bar label="Power" score={6} /><Bar label="Control" score={8} /><Bar label="Comfort" score={8} />
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">The official racket of the NOX USPA Circuit, and the cheapest frame here to score 6/10 for power while keeping control at 8/10. NOX&apos;s HR3 core gives a consistent bounce across the face, the FG 3K Silver surface keeps fiberglass forgiveness, and the carbon frame adds the stability you start to want as your shots get harder. At 360&ndash;365g it is on the heavier side for a first racket. If you already know you like to hit through the ball, the extra $10&ndash;$20 over the rackets above is well spent.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Carbon frame and HR3 core at $119, 6/10 power with 8/10 control</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Heavier than the other sub-$120 options</p>
                </div>
                <TrackedLink href={AMZ.uspa} type="affiliate" productName="NOX Pro Cup USPA Edition" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
              </div>

              {/* 5. NOX ML10 Pro Cup Rough Surface */}
              <div id="nox-ml10-pro-cup" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#5 &mdash; Best Budget Racket for Intermediate Players</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">NOX ML10 Pro Cup Rough Surface</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$169.99</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Improving players who want a real upgrade without paying $200+</p>
                <RacketPlate racket={RACKETS[4]} uidPrefix="bud" />
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag>Round</Tag><Tag>360&ndash;375g</Tag><Tag>HR3 EVA</Tag><Tag>FG 3K Rough</Tag><Tag>Carbon Frame</Tag>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <Bar label="Power" score={5} /><Bar label="Control" score={9} /><Bar label="Comfort" score={8} />
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">The top of our budget range, and the least expensive racket we recommend to an intermediate player. The ML10 keeps the safety of a round shape but adds a rough sand-finish surface that bites the ball for topspin, a low balance point that makes it quick at the net, and NOX&apos;s Pulse System to damp vibration in the handle. Control is 9/10. The fiberglass face limits raw power to 5/10, so this is an upgrade in spin and precision rather than pace. If you have played for a year and your first racket is holding you back, this is the most affordable step up that is actually a step up. Read our full <Link href="/blog/nox-ml10-pro-cup-review" className="text-padel-green hover:underline">NOX ML10 Pro Cup review</Link>.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> 9/10 control, rough surface for topspin, quick at the net</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Fiberglass face limits raw power; the priciest pick on this page</p>
                </div>
                <TrackedLink href={AMZ.ml10} type="affiliate" productName="NOX ML10 Pro Cup Rough Surface" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
              </div>

              {/* 6. Adidas Adipower */}
              <div id="adidas-adipower" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#6 &mdash; Best to Grow Into</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">Adidas Adipower</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$129.00</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Players who want one racket they can re-weight as they improve</p>
                <RacketPlate racket={RACKETS[5]} uidPrefix="bud" />
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag>Round</Tag><Tag>360&ndash;365g (Adjustable)</Tag><Tag>EVA Soft Performance</Tag><Tag>FG 3K</Tag><Tag>Carbon Frame</Tag>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <Bar label="Power" score={6} /><Bar label="Control" score={7} /><Bar label="Comfort" score={8} />
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">The budget case for the Adipower is that you may not need to replace it as soon. Adidas&apos;s Multiweight system uses removable inserts, so you can start lighter while you are learning and add weight for more power as your technique develops. The EVA Soft Performance core and FG 3K fiberglass face keep it forgiving, and Spin Blade and Smart Holes Curve add spin potential. It scores a point lower for control than the NOX Pro Cup at $10 more, which is why it sits last here. One buying note: the Amazon listing has multiple variants &mdash; select the <strong className="text-foreground">$129 fiberglass base model</strong>, not the carbon upgrade.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Multiweight inserts let you add or remove weight as you improve</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> With the weights in it is toward the heavy end; 7/10 control is the lowest here</p>
                </div>
                <TrackedLink href={AMZ.adipower} type="affiliate" productName="Adidas Adipower" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="text-2xl font-bold text-foreground mb-5">Two more if you can stretch the budget</h2>
              <div className="space-y-3">
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <p className="text-stone-600 text-sm leading-relaxed"><strong className="text-foreground">Wilson Blade Elite V2 ($189.00).</strong> The next step after the ML10 and the all-court pick in our intermediate guide, scoring 7.0/10. Read our <Link href="/blog/wilson-blade-elite-v2-review" className="text-padel-green hover:underline">Wilson Blade Elite V2 review</Link> before deciding whether the extra $19 is worth it for your game.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <p className="text-stone-600 text-sm leading-relaxed"><strong className="text-foreground">NOX AT10 Genius Attack 12K ($229.99).</strong> Not a budget racket, but the cheapest true diamond we recommend, at 6.7/10. If you want a power shape and clean technique is already there, our <Link href="/blog/nox-at10-genius-attack-review" className="text-padel-green hover:underline">Attack 12K review</Link> covers it.</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* White Section: Quick Comparison */}
        <div className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-5">Quick Comparison</h2>
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
                      <td className="py-3 pr-4 font-medium text-stone-700">Best Budget Racket Overall</td>
                      <td className="py-3 pr-4"><TrackedLink href={AMZ.optix} type="affiliate" productName="Wilson Optix V1" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline">Wilson Optix V1</TrackedLink></td>
                      <td className="py-3 text-stone-600">$109.00</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4 font-medium text-stone-700">Best Under $100</td>
                      <td className="py-3 pr-4"><TrackedLink href={AMZ.evo} type="affiliate" productName="HEAD Extreme Evo" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline">HEAD Extreme Evo</TrackedLink></td>
                      <td className="py-3 text-stone-600">$99.95</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4 font-medium text-stone-700">Cheapest Racket We Recommend</td>
                      <td className="py-3 pr-4"><TrackedLink href={AMZ.contact} type="affiliate" productName="Babolat Contact" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline">Babolat Contact</TrackedLink></td>
                      <td className="py-3 text-stone-600">$89.95</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4 font-medium text-stone-700">Most Power for the Money</td>
                      <td className="py-3 pr-4"><TrackedLink href={AMZ.uspa} type="affiliate" productName="NOX Pro Cup USPA Edition" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline">NOX Pro Cup USPA Edition</TrackedLink></td>
                      <td className="py-3 text-stone-600">$119.00</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4 font-medium text-stone-700">Best Budget Racket for Intermediate Players</td>
                      <td className="py-3 pr-4"><TrackedLink href={AMZ.ml10} type="affiliate" productName="NOX ML10 Pro Cup Rough Surface" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline">NOX ML10 Pro Cup Rough Surface</TrackedLink></td>
                      <td className="py-3 text-stone-600">$169.99</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4 font-medium text-stone-700">Best to Grow Into</td>
                      <td className="py-3 pr-4"><TrackedLink href={AMZ.adipower} type="affiliate" productName="Adidas Adipower" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline">Adidas Adipower</TrackedLink></td>
                      <td className="py-3 text-stone-600">$129.00</td>
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
                  <h3 className="font-semibold text-foreground mb-2">What is the best budget padel racket in 2026?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">The Wilson Optix V1 at $109.00. It scores 7.7/10 in our ratings, the highest of any racket under $170 we have reviewed, with 9/10 for control and 10/10 for comfort. If you want to stay under $100, the HEAD Extreme Evo at $99.95 is the best pick, and the Babolat Contact at $89.95 is the cheapest racket we recommend.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">What is the best budget padel racket for beginners?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">For most beginners, the Wilson Optix V1 ($109.00) or the HEAD Extreme Evo ($99.95). Both are round, forgiving rackets with a large sweet spot. The Optix V1 is the softer and more comfortable of the two; the Extreme Evo has the bigger head and better shock reduction. Smaller players and anyone who wants the lightest option should look at the 340g Babolat Contact at $89.95.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">What is the best budget padel racket for intermediate players?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">The NOX ML10 Pro Cup Rough Surface at $169.99. It is the least expensive racket we recommend for an intermediate game: 9/10 control, a rough surface for topspin and a low balance point that makes it quick at the net. If you want more power and can stretch the budget, the Wilson Blade Elite V2 at $189.00 is the next step.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">What is the best padel racket under $100?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">The HEAD Extreme Evo at $99.95 is our pick under $100, with the largest sweet spot on this list and Innegra shock reduction in the frame. The Babolat Contact at $89.95 is the other racket we recommend under $100, and the better choice if you want the lightest frame.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">Are cheap padel rackets worth buying?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Yes, if you buy from an established padel brand. Every racket on this page costs between $89.95 and $169.99 and scores 7.0/10 or higher in our ratings. What you give up at this price is mostly power: budget rackets use fiberglass faces and softer cores, which are more comfortable and forgiving but do not hit as hard as the carbon faces on rackets costing $250 or more. For a beginner that is a good trade, not a compromise.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* Keep Reading — Dark Section (outside article) */}
      <div className="grain bg-court">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-lg font-bold text-white mb-4">Keep Reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/best-padel-rackets-beginners" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Best Padel Rackets for Beginners</h3>
              <p className="text-sm text-stone-400 mt-1">The same first rackets, ranked for learning rather than price &rarr;</p>
            </Link>
            <Link href="/blog/best-padel-rackets-intermediate" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Best Intermediate Rackets (2026)</h3>
              <p className="text-sm text-stone-400 mt-1">5 upgrade picks from $170&ndash;$280 &rarr;</p>
            </Link>
            <Link href="/blog/best-padel-rackets-control" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Best Control Padel Rackets</h3>
              <p className="text-sm text-stone-400 mt-1">Placement over pace, at every price &rarr;</p>
            </Link>
            <Link href="/blog/best-round-padel-rackets" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Best Round Padel Rackets</h3>
              <p className="text-sm text-stone-400 mt-1">The forgiving shape, ranked &rarr;</p>
            </Link>
            <Link href="/blog/best-padel-shoes" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Best Padel Shoes</h3>
              <p className="text-sm text-stone-400 mt-1">The other purchase that changes how you play &rarr;</p>
            </Link>
            <Link href="/search" className="block border border-stone-700 rounded-lg p-4 hover:border-padel-green/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-stone-500">DIRECTORY</span>
              <h3 className="font-semibold text-white mt-1">Find a Court Near You</h3>
              <p className="text-sm text-stone-400 mt-1">Search 340+ padel clubs across the US &rarr;</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
