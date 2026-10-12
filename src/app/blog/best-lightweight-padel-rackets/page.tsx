import { Metadata } from 'next';
import Link from 'next/link';
import { TrackedLink } from '@/components/TrackedLink';
import { StickyPickBar } from '@/components/sticky-pick-bar';
import { HeroVideo } from '@/components/hero-video';
import type { ReactNode } from 'react';

const TITLE = 'Best Lightweight Padel Rackets (2026): 6 Picks From 340g';
const DESCRIPTION = 'The best lightweight padel rackets of 2026, from the 340g Babolat Contact to the adjustable Adidas Metalbone 3.4. Six light rackets for beginners, women, advanced players and anyone whose arm wants less weight.';
const URL = 'https://www.padelcourtsfinder.com/blog/best-lightweight-padel-rackets';

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
  contact: 'https://www.amazon.com/dp/B0BBPZLRVP?tag=padel02-20',
  metalbone34: 'https://www.amazon.com/dp/B0DMCZWNPV?tag=padel02-20',
  optix: 'https://www.amazon.com/dp/B0DX2M3JYY?tag=padel02-20',
  evo: 'https://www.amazon.com/dp/B0CGRV795T?tag=padel02-20',
  uspa: 'https://www.amazon.com/dp/B0F1ZVM7Y5?tag=padel02-20',
  adipower: 'https://www.amazon.com/dp/B0CNWGJP2N?tag=padel02-20',
};

const articleData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": TITLE,
  "description": DESCRIPTION,
  "image": "https://www.padelcourtsfinder.com/og/default.png",
  "datePublished": "2026-10-12T00:00:00Z",
  "dateModified": "2026-10-12T00:00:00Z",
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
      "name": "What is the best lightweight padel racket in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Babolat Contact at $89.95 is the lightest racket we have rated, at 340g, and it scores 9/10 for comfort with 8/10 for control. If you want the highest overall score in a light frame, the Wilson Optix V1 at $109.00 weighs 355 to 360g and scores 7.7/10, the best of any racket on this page."
      }
    },
    {
      "@type": "Question",
      "name": "What counts as a lightweight padel racket?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The rackets we have rated weigh between 340g and 375g. Anything at 360g or under is light for padel, and most advanced frames play best at 365 to 375g. Four of the six rackets here are under 360g. The two at 360 to 365g are included because they are the lightest options we rate with a carbon frame or with adjustable weight."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best lightweight padel racket for beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Wilson Optix V1 at $109.00. It is fiberglass in both the face and the frame, weighs 355 to 360g, and scores 10/10 for comfort and 9/10 for control. If budget matters more, the Babolat Contact at $89.95 is lighter still at 340g. Both are round rackets with a large, centred sweet spot."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best lightweight padel racket for women?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our women's guide ranks the Babolat Contact first because it is the lightest frame we recommend at 340g and scores 9/10 for comfort. The Wilson Optix V1, HEAD Extreme Evo and Adidas Adipower are the other three picks in that guide, and all four appear on this page."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best lightweight padel racket for advanced players?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Adidas Metalbone 3.4 at $304.50. Its Weight and Balance system uses up to 12g of removable inserts, so with the inserts out you swing a 345g diamond racket that scores 8/10 for power. No other racket in our advanced guide can be set up that light."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a lightweight padel racket for intermediate players?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not a dedicated one among the rackets we have rated. Our intermediate picks run heavier: the NOX ML10 Pro Cup Rough Surface, our first intermediate pick, is 360 to 375g, and the Wilson Blade Elite V2 is 360g. The closest options are the NOX Pro Cup USPA Edition at 360 to 365g, which adds a carbon frame and 6/10 power, and the Adidas Adipower, which lets you add weight as you improve."
      }
    },
    {
      "@type": "Question",
      "name": "Is a lighter padel racket better for tennis elbow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Weight is one factor and the softness of the face and core is the other. The three lightest rackets here, the Wilson Optix V1, Babolat Contact and HEAD Extreme Evo, are also the first three picks in our tennis elbow guide because they combine a light frame with a soft fiberglass face and a high comfort score. Our tennis elbow guide covers the trade-offs in more detail."
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
    product(1, "Babolat Contact", "https://www.padelcourtsfinder.com/blog/babolat-contact-review", "89.95", AMZ.contact, 7.0),
    product(2, "Adidas Metalbone 3.4", "https://www.padelcourtsfinder.com/blog/adidas-metalbone-3-4-review", "304.50", AMZ.metalbone34, 7.0),
    product(3, "Wilson Optix V1", "https://www.padelcourtsfinder.com/blog/wilson-optix-v1-review", "109.00", AMZ.optix, 7.7),
    product(4, "HEAD Extreme Evo", "https://www.padelcourtsfinder.com/blog/head-extreme-evo-review", "99.95", AMZ.evo, 7.3),
    product(5, "NOX Pro Cup USPA Edition", "https://www.padelcourtsfinder.com/blog/best-lightweight-padel-rackets#nox-pro-cup-uspa", "119.00", AMZ.uspa, 7.3),
    product(6, "Adidas Adipower", "https://www.padelcourtsfinder.com/blog/best-lightweight-padel-rackets#adidas-adipower", "129.00", AMZ.adipower, 7.0)
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

export default function LightweightRacketsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <StickyPickBar label="Lightest racket" productName="Babolat Contact" price="$89.95" href={AMZ.contact} />
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
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Best Lightweight Padel Rackets (2026)</h1>
          <p className="text-lg text-stone-400 mt-3">Six light rackets from 340g, ranked by weight, with the scores they earned in our other guides</p>
          <div className="text-sm text-stone-500 mt-4 flex items-center gap-3">
            <span>Updated October 12, 2026 &middot; 8 min read</span>
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
              <p className="text-stone-600 leading-[1.75]">Padel rackets do not vary much in weight. Every racket we have rated sits between 340g and 375g, and the difference between the lightest and heaviest is about the weight of a tennis ball. That small range matters more than it sounds: <strong className="text-foreground">a racket at 340g comes round faster at the net and tires your arm less</strong> over a two-hour session, and a racket at 375g carries more mass into the smash and holds steadier against hard-hit balls.</p>
              <p className="text-stone-600 leading-[1.75]">This page lists the six lightest rackets we have scored, from 340g up to 365g. Four are under 360g, which is light for padel. The other two sit at 360&ndash;365g and are here because they are the lightest options we rate that add a carbon frame or let you adjust the weight later. Every weight, price and score below is the one the racket already has in our other guides; we have not re-weighed anything.</p>
            </div>

            {/* Quick Picks Box */}
            <div className="border-l-4 border-amber-500 bg-amber-50/80 rounded-r-lg p-5 sm:p-6 mt-8">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="text-amber-500">&#9889;</span> Quick Picks
              </h3>
              <div className="space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Lightest Overall:</span>
                  <span className="text-sm"><TrackedLink href={AMZ.contact} type="affiliate" productName="Babolat Contact" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline font-medium">Babolat Contact</TrackedLink> <span className="text-stone-500">&mdash; 340g, $89.95</span></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best for Beginners:</span>
                  <span className="text-sm"><TrackedLink href={AMZ.optix} type="affiliate" productName="Wilson Optix V1" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline font-medium">Wilson Optix V1</TrackedLink> <span className="text-stone-500">&mdash; 355&ndash;360g, $109.00</span></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best for Advanced Players:</span>
                  <span className="text-sm"><TrackedLink href={AMZ.metalbone34} type="affiliate" productName="Adidas Metalbone 3.4" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline font-medium">Adidas Metalbone 3.4</TrackedLink> <span className="text-stone-500">&mdash; 345g with inserts out, $304.50</span></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Lightest with a Carbon Frame:</span>
                  <span className="text-sm"><TrackedLink href={AMZ.uspa} type="affiliate" productName="NOX Pro Cup USPA Edition" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline font-medium">NOX Pro Cup USPA Edition</TrackedLink> <span className="text-stone-500">&mdash; 360&ndash;365g, $119.00</span></span>
                </div>
              </div>
              <a href="#top-lightweight-rackets" className="text-sm text-stone-500 hover:text-padel-green mt-3 inline-block">Jump to full reviews &darr;</a>
            </div>
          </div>
        </div>

        {/* Stone-50 Section: Table + Who should go light + Cards */}
        <div className="bg-stone-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-5">Lightweight Padel Rackets Compared</h2>
              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                <table className="w-full text-sm border border-stone-200 rounded-lg bg-white">
                  <thead>
                    <tr className="border-b border-stone-200 text-left">
                      <th className="px-3 py-2.5 font-semibold text-foreground">Racket</th>
                      <th className="px-3 py-2.5 font-semibold text-foreground">Weight</th>
                      <th className="px-3 py-2.5 font-semibold text-foreground">Shape</th>
                      <th className="px-3 py-2.5 font-semibold text-foreground">Face</th>
                      <th className="px-3 py-2.5 font-semibold text-foreground whitespace-nowrap">Score</th>
                      <th className="px-3 py-2.5 font-semibold text-foreground whitespace-nowrap">Price</th>
                    </tr>
                  </thead>
                  <tbody className="text-stone-600">
                    <tr className="border-b border-stone-100">
                      <td className="px-3 py-2.5 font-medium text-foreground">Babolat Contact</td>
                      <td className="px-3 py-2.5">340g</td>
                      <td className="px-3 py-2.5">Round</td>
                      <td className="px-3 py-2.5">Fiberglass</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">7.0/10</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">$89.95</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="px-3 py-2.5 font-medium text-foreground">Adidas Metalbone 3.4</td>
                      <td className="px-3 py-2.5">345&ndash;372g</td>
                      <td className="px-3 py-2.5">Diamond</td>
                      <td className="px-3 py-2.5">16K Aluminized Carbon</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">7.0/10</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">$304.50</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="px-3 py-2.5 font-medium text-foreground">Wilson Optix V1</td>
                      <td className="px-3 py-2.5">355&ndash;360g</td>
                      <td className="px-3 py-2.5">Round</td>
                      <td className="px-3 py-2.5">Fiberglass Weave</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">7.7/10</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">$109.00</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="px-3 py-2.5 font-medium text-foreground">HEAD Extreme Evo</td>
                      <td className="px-3 py-2.5">355&ndash;365g</td>
                      <td className="px-3 py-2.5">Round (511cm&sup2;)</td>
                      <td className="px-3 py-2.5">FG/Carbon Hybrid</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">7.3/10</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">$99.95</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="px-3 py-2.5 font-medium text-foreground">NOX Pro Cup USPA Edition</td>
                      <td className="px-3 py-2.5">360&ndash;365g</td>
                      <td className="px-3 py-2.5">Round</td>
                      <td className="px-3 py-2.5">FG 3K Silver</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">7.3/10</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">$119.00</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2.5 font-medium text-foreground">Adidas Adipower</td>
                      <td className="px-3 py-2.5">360&ndash;365g (adjustable)</td>
                      <td className="px-3 py-2.5">Round</td>
                      <td className="px-3 py-2.5">FG 3K</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">7.0/10</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">$129.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone-500 mt-3">Weights are the manufacturer ranges we quote in each review. Prices are the Amazon prices at the time of our reviews and can change.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-5">Who should play a lighter racket</h2>
              <div className="space-y-3">
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <p className="text-stone-600 text-sm leading-relaxed"><strong className="text-foreground">New players.</strong> A light round racket is easier to get into position and more forgiving when contact is off-centre. The <a href="#wilson-optix-v1" className="text-padel-green hover:underline">Wilson Optix V1</a> ($109.00) and <a href="#babolat-contact" className="text-padel-green hover:underline">Babolat Contact</a> ($89.95) are the two we recommend most.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <p className="text-stone-600 text-sm leading-relaxed"><strong className="text-foreground">Anyone with a sore arm.</strong> Less weight means less load on the elbow and shoulder on every swing, and the three lightest rackets here also have soft fiberglass faces. Our <Link href="/blog/best-padel-rackets-tennis-elbow" className="text-padel-green hover:underline">tennis elbow guide</Link> ranks them in detail.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <p className="text-stone-600 text-sm leading-relaxed"><strong className="text-foreground">Smaller players and many women.</strong> The <a href="#babolat-contact" className="text-padel-green hover:underline">Babolat Contact</a> is the first pick in our <Link href="/blog/best-padel-rackets-women" className="text-padel-green hover:underline">women&apos;s racket guide</Link> for exactly this reason: at 340g it is the lightest frame we recommend.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <p className="text-stone-600 text-sm leading-relaxed"><strong className="text-foreground">Advanced players who want speed at the net.</strong> The <a href="#adidas-metalbone-3-4" className="text-padel-green hover:underline">Adidas Metalbone 3.4</a> ($304.50) is the only racket in our advanced guide that can be set up at 345g, and you can add the weight back for match days.</p>
                </div>
              </div>
              <div className="prose prose-lg prose-stone max-w-none mt-6">
                <p className="text-stone-600 leading-[1.75]">The trade-off is stability. A 340g racket can feel twitchy against a hard-hit ball, and none of the round rackets here scores above 6/10 for power; the Metalbone 3.4 is the exception, and it costs $304.50. If you already drive the ball hard and want the racket to add pace, you are better served by our <Link href="/blog/best-padel-rackets-power" className="text-padel-green hover:underline">power rackets guide</Link>, which ranks frames for the smash rather than for swing weight. Weight is also only half the feel: a head-heavy 360g diamond swings heavier than a 365g round racket with a low balance point. Our <Link href="/blog/padel-racket-shapes-explained" className="text-padel-green hover:underline">racket shapes guide</Link> explains why.</p>
              </div>
            </section>

            <section className="mb-4">
              <h2 id="top-lightweight-rackets" className="text-2xl font-bold text-foreground mb-5">The 6 Best Lightweight Padel Rackets in 2026</h2>

              {/* 1. Babolat Contact */}
              <div id="babolat-contact" className="relative bg-white border-2 border-padel-green rounded-xl p-6 md:p-8 mb-8 shadow-sm">
                <div className="absolute -top-3 -left-2 bg-padel-green text-white text-xs font-bold px-3 py-1.5 rounded-md -rotate-3 shadow-md z-10">#1 PICK</div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mt-2 mb-1">#1 &mdash; Lightest Padel Racket We Rate</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">Babolat Contact</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$89.95</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Complete beginners, smaller players and anyone who finds other rackets slow to bring round</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag>340g</Tag><Tag>Round</Tag><Tag>Soft EVA</Tag><Tag>Fiberglass</Tag><Tag>Carbon/FG Hybrid Frame</Tag>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <Bar label="Power" score={4} /><Bar label="Control" score={8} /><Bar label="Comfort" score={9} />
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">At 340g this is the lightest racket we have rated, and at $89.95 it is also the least expensive one we recommend. The round shape puts a big sweet spot in the middle of the face, the hybrid carbon and fiberglass frame adds durability without adding weight, and Babolat&apos;s Dynamic Stability System uses tungsten reinforcement in the neck to reduce twisting on off-centre hits. The low weight is the trade-off as well as the selling point: against hard-hit balls it can feel less stable than the heavier frames below, and power is 4/10. It is the first pick in our <Link href="/blog/best-padel-rackets-women" className="text-padel-green hover:underline">women&apos;s guide</Link> and the second in our <Link href="/blog/best-padel-rackets-tennis-elbow" className="text-padel-green hover:underline">tennis elbow guide</Link>. Read our full <Link href="/blog/babolat-contact-review" className="text-padel-green hover:underline">Babolat Contact review</Link>.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Lightest frame we rate at 340g, 9/10 comfort, the cheapest racket on this page</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Can lack stability on hard returns, and 4/10 power is a ceiling you will reach</p>
                </div>
                <TrackedLink href={AMZ.contact} type="affiliate" productName="Babolat Contact" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 bg-padel-green text-white font-medium rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
              </div>

              {/* 2. Adidas Metalbone 3.4 */}
              <div id="adidas-metalbone-3-4" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#2 &mdash; Best Lightweight Racket for Advanced Players</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">Adidas Metalbone 3.4</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$304.50</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Advanced attackers who want a 345g racket on practice days and a 372g one in matches</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag>345&ndash;372g</Tag><Tag>Diamond</Tag><Tag>EVA Soft Performance</Tag><Tag>16K Aluminized Carbon</Tag><Tag>Weight &amp; Balance system</Tag>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <Bar label="Power" score={8} /><Bar label="Control" score={7} /><Bar label="Comfort" score={6} />
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">The only racket on this page built for advanced players, and it earns its place through Adidas&apos;s Weight and Balance system. Up to 12g of removable inserts seat inside the frame: with them out you are swinging a 345g diamond that moves quickly at the net, and fully loaded you are at 372g with real mass behind the smash. Same frame, different balance. The 16K aluminized carbon face and EVA Soft Performance core keep it firmer than the name suggests, 7/10 control is strong for a diamond, and 8/10 power is the highest of anything here by a wide margin. It is a pick in our <Link href="/blog/best-padel-rackets-advanced" className="text-padel-green hover:underline">advanced guide</Link>. Read our full <Link href="/blog/adidas-metalbone-3-4-review" className="text-padel-green hover:underline">Adidas Metalbone 3.4 review</Link>.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Tunable from 345g to 372g, 8/10 power, the most balanced diamond we have tested</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> $304.50, a diamond shape that punishes off-centre contact, and 6/10 comfort</p>
                </div>
                <TrackedLink href={AMZ.metalbone34} type="affiliate" productName="Adidas Metalbone 3.4" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
              </div>

              {/* 3. Wilson Optix V1 */}
              <div id="wilson-optix-v1" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#3 &mdash; Best Lightweight Racket for Beginners</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">Wilson Optix V1</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$109.00</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Anyone who wants the most comfortable, most forgiving racket for about $110</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag>355&ndash;360g</Tag><Tag>Round</Tag><Tag>Soft EVA</Tag><Tag>Fiberglass Weave</Tag><Tag>FG Frame</Tag>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <Bar label="Power" score={4} /><Bar label="Control" score={9} /><Bar label="Comfort" score={10} />
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">The highest-scoring racket on this page at 7.7/10, and it is not the most expensive one. The Optix V1 is fiberglass through and through, face and frame, which makes it the softest, most forgiving frame we have reviewed: 10/10 for comfort and 9/10 for control. Wilson&apos;s Sharp Hole Technology changes the drilling pattern to give the ball a little extra bite for spin. At 355&ndash;360g it is 15 to 20 grams heavier than the Contact, and that extra mass is part of why it feels steadier. The cost of all that softness is a 4/10 for power: once you start driving the ball hard you will feel the ceiling. It is the first pick in our <Link href="/blog/best-padel-rackets-tennis-elbow" className="text-padel-green hover:underline">tennis elbow guide</Link> and our <Link href="/blog/best-budget-padel-rackets" className="text-padel-green hover:underline">budget guide</Link>. Read our full <Link href="/blog/wilson-optix-v1-review" className="text-padel-green hover:underline">Wilson Optix V1 review</Link>.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> 10/10 comfort and 9/10 control, the highest overall score of any light racket we rate</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> 4/10 power; a player who already hits hard will outgrow it</p>
                </div>
                <TrackedLink href={AMZ.optix} type="affiliate" productName="Wilson Optix V1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
              </div>

              {/* 4. HEAD Extreme Evo */}
              <div id="head-extreme-evo" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#4 &mdash; Best Lightweight Racket for a Big Sweet Spot</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">HEAD Extreme Evo</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$99.95</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Players who want arm protection and the largest sweet spot here for under $100</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag>355&ndash;365g</Tag><Tag>Round (511cm&sup2;)</Tag><Tag>Power Foam</Tag><Tag>FG/Carbon Hybrid</Tag><Tag>Innegra Frame</Tag>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <Bar label="Power" score={5} /><Bar label="Control" score={8} /><Bar label="Comfort" score={9} />
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">Five cents under $100 and the best all-round spec sheet in that bracket. The oversized 511cm&sup2; head gives the largest sweet spot of any racket on this page, and Innegra in the frame takes a meaningful amount of shock and vibration out of each hit, which is worth having if you play several times a week. The Power Foam core recovers its shape quickly, so the feel stays consistent, and the fiberglass and carbon hybrid face gives it one more point of power than the Optix. At 355&ndash;365g the top of its range is a touch heavier than the two rackets above, and that weight is what makes it steadier at the net. It is the third pick in our <Link href="/blog/best-padel-rackets-tennis-elbow" className="text-padel-green hover:underline">tennis elbow guide</Link>. Read our full <Link href="/blog/head-extreme-evo-review" className="text-padel-green hover:underline">HEAD Extreme Evo review</Link>.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Largest sweet spot here, Innegra vibration damping, 9/10 comfort for $99.95</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Up to 365g at the top of its range, so not the pick if the lowest weight is the goal</p>
                </div>
                <TrackedLink href={AMZ.evo} type="affiliate" productName="HEAD Extreme Evo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
              </div>

              {/* 5. NOX Pro Cup USPA Edition */}
              <div id="nox-pro-cup-uspa" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#5 &mdash; Lightest Racket With a Carbon Frame</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">NOX Pro Cup USPA Edition</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$119.00</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Players who want a light racket that still adds some pace to the ball</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag>360&ndash;365g</Tag><Tag>Round</Tag><Tag>HR3 EVA</Tag><Tag>FG 3K Silver</Tag><Tag>Carbon Frame</Tag>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <Bar label="Power" score={6} /><Bar label="Control" score={8} /><Bar label="Comfort" score={8} />
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">The official racket of the NOX USPA Circuit, and with the Adipower one of only two round rackets on this page that we rate at 6/10 for power. NOX&apos;s HR3 core gives a consistent bounce across the face, the FG 3K Silver surface keeps the forgiveness of fiberglass, and the carbon frame adds the stability you start to want as your shots get harder. That carbon frame is also why it sits at 360&ndash;365g rather than 340: it is the lightest carbon-framed racket we rate, not the lightest racket outright. If you know you like to hit through the ball, it is the better buy over the Contact or Optix. It is a pick in our <Link href="/blog/best-nox-padel-rackets" className="text-padel-green hover:underline">NOX guide</Link>, <Link href="/blog/best-padel-rackets-beginners" className="text-padel-green hover:underline">beginner guide</Link> and <Link href="/blog/best-budget-padel-rackets" className="text-padel-green hover:underline">budget guide</Link>.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Carbon frame and 6/10 power at $119, with 8/10 control and comfort</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> At 360&ndash;365g it is light only by comparison with carbon rackets, not with the Contact</p>
                </div>
                <TrackedLink href={AMZ.uspa} type="affiliate" productName="NOX Pro Cup USPA Edition" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
              </div>

              {/* 6. Adidas Adipower */}
              <div id="adidas-adipower" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#6 &mdash; Start Light, Add Weight Later</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">Adidas Adipower</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$129.00</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Players who want one racket they can re-weight as they improve</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag>360&ndash;365g (adjustable)</Tag><Tag>Round</Tag><Tag>EVA Soft Performance</Tag><Tag>FG 3K</Tag><Tag>Carbon Frame</Tag>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <Bar label="Power" score={6} /><Bar label="Control" score={7} /><Bar label="Comfort" score={8} />
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">The case for the Adipower on a lightweight page is that you may not need to replace it. Adidas&apos;s Multiweight system uses removable inserts, so you can start lighter while you are learning and add weight for more power as your technique develops, the same idea as the Metalbone 3.4 above for a fraction of the price. The EVA Soft Performance core and FG 3K fiberglass face keep it forgiving, and Spin Blade and Smart Holes Curve add spin potential. It scores a point lower for control than the NOX Pro Cup at $10 more, which is why it sits last here. One buying note: the Amazon listing has multiple variants, so select the <strong className="text-foreground">$129 fiberglass base model</strong>, not the carbon upgrade. It is the fourth pick in our <Link href="/blog/best-padel-rackets-women" className="text-padel-green hover:underline">women&apos;s guide</Link>.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Multiweight inserts let you add or remove weight as you improve</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> With the weights in it is toward the heavy end; 7/10 control is the lowest here</p>
                </div>
                <TrackedLink href={AMZ.adipower} type="affiliate" productName="Adidas Adipower" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
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
                      <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-wider text-stone-500">Weight</th>
                      <th className="text-left py-3 text-xs font-semibold uppercase tracking-wider text-stone-500">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4 font-medium text-stone-700">Lightest Padel Racket</td>
                      <td className="py-3 pr-4"><TrackedLink href={AMZ.contact} type="affiliate" productName="Babolat Contact" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline">Babolat Contact</TrackedLink></td>
                      <td className="py-3 pr-4 text-stone-600">340g</td>
                      <td className="py-3 text-stone-600">$89.95</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4 font-medium text-stone-700">Best Lightweight Racket for Beginners</td>
                      <td className="py-3 pr-4"><TrackedLink href={AMZ.optix} type="affiliate" productName="Wilson Optix V1" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline">Wilson Optix V1</TrackedLink></td>
                      <td className="py-3 pr-4 text-stone-600">355&ndash;360g</td>
                      <td className="py-3 text-stone-600">$109.00</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4 font-medium text-stone-700">Best Lightweight Racket for Advanced Players</td>
                      <td className="py-3 pr-4"><TrackedLink href={AMZ.metalbone34} type="affiliate" productName="Adidas Metalbone 3.4" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline">Adidas Metalbone 3.4</TrackedLink></td>
                      <td className="py-3 pr-4 text-stone-600">345&ndash;372g</td>
                      <td className="py-3 text-stone-600">$304.50</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4 font-medium text-stone-700">Biggest Sweet Spot Under $100</td>
                      <td className="py-3 pr-4"><TrackedLink href={AMZ.evo} type="affiliate" productName="HEAD Extreme Evo" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline">HEAD Extreme Evo</TrackedLink></td>
                      <td className="py-3 pr-4 text-stone-600">355&ndash;365g</td>
                      <td className="py-3 text-stone-600">$99.95</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4 font-medium text-stone-700">Lightest With a Carbon Frame</td>
                      <td className="py-3 pr-4"><TrackedLink href={AMZ.uspa} type="affiliate" productName="NOX Pro Cup USPA Edition" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline">NOX Pro Cup USPA Edition</TrackedLink></td>
                      <td className="py-3 pr-4 text-stone-600">360&ndash;365g</td>
                      <td className="py-3 text-stone-600">$119.00</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4 font-medium text-stone-700">Adjustable Weight Under $150</td>
                      <td className="py-3 pr-4"><TrackedLink href={AMZ.adipower} type="affiliate" productName="Adidas Adipower" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline">Adidas Adipower</TrackedLink></td>
                      <td className="py-3 pr-4 text-stone-600">360&ndash;365g</td>
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
                  <h3 className="font-semibold text-foreground mb-2">What is the best lightweight padel racket in 2026?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">The Babolat Contact at $89.95 is the lightest racket we have rated, at 340g, and it scores 9/10 for comfort with 8/10 for control. If you want the highest overall score in a light frame, the Wilson Optix V1 at $109.00 weighs 355 to 360g and scores 7.7/10, the best of any racket on this page.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">What counts as a lightweight padel racket?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">The rackets we have rated weigh between 340g and 375g. Anything at 360g or under is light for padel, and most advanced frames play best at 365 to 375g. Four of the six rackets here are under 360g. The two at 360 to 365g are included because they are the lightest options we rate with a carbon frame or with adjustable weight.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">What is the best lightweight padel racket for beginners?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">The Wilson Optix V1 at $109.00. It is fiberglass in both the face and the frame, weighs 355 to 360g, and scores 10/10 for comfort and 9/10 for control. If budget matters more, the Babolat Contact at $89.95 is lighter still at 340g. Both are round rackets with a large, centred sweet spot.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">What is the best lightweight padel racket for women?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Our <Link href="/blog/best-padel-rackets-women" className="text-padel-green hover:underline">women&apos;s guide</Link> ranks the Babolat Contact first because it is the lightest frame we recommend at 340g and scores 9/10 for comfort. The Wilson Optix V1, HEAD Extreme Evo and Adidas Adipower are the other three picks in that guide, and all four appear on this page.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">What is the best lightweight padel racket for advanced players?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">The Adidas Metalbone 3.4 at $304.50. Its Weight and Balance system uses up to 12g of removable inserts, so with the inserts out you swing a 345g diamond racket that scores 8/10 for power. No other racket in our advanced guide can be set up that light.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">Is there a lightweight padel racket for intermediate players?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Not a dedicated one among the rackets we have rated. The picks in our <Link href="/blog/best-padel-rackets-intermediate" className="text-padel-green hover:underline">intermediate guide</Link> run heavier: the NOX ML10 Pro Cup Rough Surface, our first intermediate pick, is 360 to 375g, and the Wilson Blade Elite V2 is 360g. The closest options are the NOX Pro Cup USPA Edition at 360 to 365g, which adds a carbon frame and 6/10 power, and the Adidas Adipower, which lets you add weight as you improve.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">Is a lighter padel racket better for tennis elbow?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Weight is one factor and the softness of the face and core is the other. The three lightest rackets here, the Wilson Optix V1, Babolat Contact and HEAD Extreme Evo, are also the first three picks in our <Link href="/blog/best-padel-rackets-tennis-elbow" className="text-padel-green hover:underline">tennis elbow guide</Link> because they combine a light frame with a soft fiberglass face and a high comfort score. That guide covers the trade-offs in more detail.</p>
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
            <Link href="/blog/babolat-contact-review" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Babolat Contact Review</h3>
              <p className="text-sm text-stone-400 mt-1">The 340g pick, tested in full &rarr;</p>
            </Link>
            <Link href="/blog/wilson-optix-v1-review" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Wilson Optix V1 Review</h3>
              <p className="text-sm text-stone-400 mt-1">The highest score on this page &rarr;</p>
            </Link>
            <Link href="/blog/best-padel-rackets-women" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Best Padel Rackets for Women</h3>
              <p className="text-sm text-stone-400 mt-1">Four light rackets, ranked for women &rarr;</p>
            </Link>
            <Link href="/blog/best-padel-rackets-tennis-elbow" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Best Padel Rackets for Tennis Elbow</h3>
              <p className="text-sm text-stone-400 mt-1">Soft faces and light frames, scored &rarr;</p>
            </Link>
            <Link href="/blog/padel-racket-shapes-explained" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Racket Shapes Explained</h3>
              <p className="text-sm text-stone-400 mt-1">Why balance matters as much as weight &rarr;</p>
            </Link>
            <Link href="/search" className="block border border-stone-700 rounded-lg p-4 hover:border-padel-green/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-stone-500">DIRECTORY</span>
              <h3 className="font-semibold text-white mt-1">Find a Court Near You</h3>
              <p className="text-sm text-stone-400 mt-1">Search 320+ padel clubs across the US &rarr;</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
