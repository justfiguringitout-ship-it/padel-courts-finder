import { Metadata } from 'next';
import Link from 'next/link';
import { TrackedLink } from '@/components/TrackedLink';
import { BuyButtons, StoreTextLink } from '@/components/gear/buy-buttons';
import { StickyPickBar } from '@/components/sticky-pick-bar';
import { HeroVideo } from '@/components/hero-video';
import type { ReactNode } from 'react';
import { GEAR_DISCLOSURE, primaryOffer } from '@/lib/retailer-links';

const TITLE = 'Best Wilson Padel Rackets (2026): 3 Picks by Playing Level';
const DESCRIPTION = 'The best Wilson padel rackets of 2026 for beginners, intermediate players, control and power. The Wilson Optix V1, Blade Elite V2 and Bela Pro V3 compared, each scored for power, control and comfort.';
const URL = 'https://www.padelcourtsfinder.com/blog/best-wilson-padel-rackets';

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
  blade: 'https://www.amazon.com/dp/B09TSWCFHD?tag=padel02-20',
  bela: 'https://www.amazon.com/dp/B0F2WMRTYB?tag=padel02-20',
};

/** Bela Pro V3: Padel USA is the main store (same $399), Amazon the outline button */
const belaOffer = primaryOffer(AMZ.bela, '$399.00');

const articleData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": TITLE,
  "description": DESCRIPTION,
  "image": "https://www.padelcourtsfinder.com/og/default.png",
  "datePublished": "2026-10-19T00:00:00Z",
  "dateModified": "2026-10-19T00:00:00Z",
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
      "name": "What is the best Wilson padel racket in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By our scores, the Wilson Optix V1 at $109.00. It rates 7.7/10, the highest of the three Wilson rackets we have reviewed, with 9/10 for control and the only 10/10 comfort score on the site. That score comes from control and comfort, not pace: power is 4/10. An intermediate player who wants more ball speed should look at the Wilson Blade Elite V2 ($208.58, 7.0/10), and an advanced player at the Wilson Bela Pro V3 ($399.00, 6.7/10, 9/10 for power)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best Wilson padel racket for beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Wilson Optix V1 at $109.00. It is round, so the sweet spot sits in the centre of the face where new players make contact, and the face and frame are both fiberglass, which forgives mishits and keeps shock off the arm. It is in our beginner guide for that reason. Power is 4/10, so a fast improver will outgrow it within a season or two."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best Wilson padel racket for intermediate players?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Wilson Blade Elite V2 at $208.58. It is a 360g teardrop with a carbon and fiberglass hybrid face and a Soft EVA core, and it scores 7/10 for power, control and comfort. It is the all-round pick in our intermediate guide. It is a 2022 model and the only Amazon listing we found ships from Amazon Japan as an import, so check availability before you plan around it."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best Wilson padel racket for control?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Wilson Optix V1, which scores 9/10 for control and is the top pick in our control racket guide. The round shape puts the balance point low and the sweet spot in the middle of the face. If you want control with more power behind it, the Wilson Blade Elite V2 scores 7/10 for both."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best Wilson padel racket for women?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Wilson Optix V1. At 355 to 360g it is the lightest Wilson we have reviewed, and it is the second pick in our women's racket guide behind the 340g Babolat Contact. If you want more pace than its 4/10 power, the Blade Elite V2 at 360g is the next step up in the Wilson range."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best Wilson padel racket for spin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most players, the Wilson Blade Elite V2. Its textured hybrid face and Wilson's Sharp Hole Technology drilling pattern give the ball extra bite on cuts and overheads. For advanced players, the Wilson Bela Pro V3 adds the Spin2 texture and a DuoGrid hole pattern with separate power and spin zones, on a 24K carbon face that is far less forgiving."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between the Wilson Bela V3 and the Bela Pro V3?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They are different rackets. The Bela Pro V3 is the one we reviewed: a $399.00 diamond with a 24K carbon face and a tubular carbon frame, scored 6.7/10 with 9/10 for power and 4/10 for comfort. Wilson also sells a plain Bela V3 at $349 with a 3K carbon face, which we have not scored, so our numbers do not apply to it."
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
    product(2, "Wilson Blade Elite V2", "https://www.padelcourtsfinder.com/blog/wilson-blade-elite-v2-review", "208.58", AMZ.blade, 7.0),
    product(3, "Wilson Bela Pro V3", "https://www.padelcourtsfinder.com/blog/wilson-bela-v3-review", belaOffer.price.replace('$', ''), belaOffer.href, 6.7)
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

const BUTTON = 'inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200';

export default function WilsonRacketsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <StickyPickBar label="Best Wilson racket" productName="Wilson Optix V1" price="$109.00" href={AMZ.optix} />
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
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Best Wilson Padel Rackets (2026)</h1>
          <p className="text-lg text-stone-400 mt-3">Three Wilson rackets, matched to how you play</p>
          <div className="text-sm text-stone-500 mt-4 flex items-center gap-3">
            <span>Updated October 19, 2026 &middot; 7 min read</span>
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
                {GEAR_DISCLOSURE}
              </p>
            </div>

            <div className="prose prose-lg prose-stone max-w-none mb-0">
              <p className="text-stone-600 leading-[1.75]">Wilson came to padel from tennis, and its range reads like a ladder: an all-fiberglass round racket at $109, a carbon and fiberglass hybrid teardrop at about $209, and Fernando Belastegu&iacute;n&apos;s 24K carbon diamond at $399. Each step up adds power and takes away forgiveness, so <strong className="text-foreground">the best Wilson padel racket depends on your level</strong> more than on the model name.</p>
              <p className="text-stone-600 leading-[1.75]">This page covers the three Wilson rackets we have rated on the site. Each one keeps the same power, control and comfort scores it has in our other guides and reviews. Wilson sells more models than these three, including the plain Bela V3, the Optix V2 and the Optix Lite. We only list rackets we have already scored, so if a model is missing here, it means we have not reviewed it yet.</p>
            </div>

            {/* Quick Picks Box */}
            <div className="border-l-4 border-amber-500 bg-amber-50/80 rounded-r-lg p-5 sm:p-6 mt-8">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="text-amber-500">&#9889;</span> Quick Picks
              </h3>
              <div className="space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best Overall, Beginners and Control:</span>
                  <span className="text-sm"><TrackedLink href={AMZ.optix} type="affiliate" productName="Wilson Optix V1" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline font-medium">Wilson Optix V1</TrackedLink> <span className="text-stone-500">&mdash; $109.00</span></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best for Intermediates:</span>
                  <span className="text-sm"><TrackedLink href={AMZ.blade} type="affiliate" productName="Wilson Blade Elite V2" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline font-medium">Wilson Blade Elite V2</TrackedLink> <span className="text-stone-500">&mdash; $208.58</span></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best for Power and Advanced Players:</span>
                  <span className="text-sm"><StoreTextLink href={AMZ.bela} productName="Wilson Bela Pro V3" className="text-padel-green hover:underline font-medium">Wilson Bela Pro V3</StoreTextLink> <span className="text-stone-500">&mdash; $399.00</span></span>
                </div>
              </div>
              <a href="#top-wilson-rackets" className="text-sm text-stone-500 hover:text-padel-green mt-3 inline-block">Jump to full reviews &darr;</a>
            </div>
          </div>
        </div>

        {/* Stone-50 Section: Table + How to choose + Cards */}
        <div className="bg-stone-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-5">Wilson Padel Rackets Compared</h2>
              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                <table className="w-full text-sm border border-stone-200 rounded-lg bg-white">
                  <thead>
                    <tr className="border-b border-stone-200 text-left">
                      <th className="px-3 py-2.5 font-semibold text-foreground">Racket</th>
                      <th className="px-3 py-2.5 font-semibold text-foreground">Shape</th>
                      <th className="px-3 py-2.5 font-semibold text-foreground">Weight</th>
                      <th className="px-3 py-2.5 font-semibold text-foreground">Face</th>
                      <th className="px-3 py-2.5 font-semibold text-foreground whitespace-nowrap">Score</th>
                      <th className="px-3 py-2.5 font-semibold text-foreground whitespace-nowrap">Price</th>
                    </tr>
                  </thead>
                  <tbody className="text-stone-600">
                    <tr className="border-b border-stone-100">
                      <td className="px-3 py-2.5 font-medium text-foreground">Wilson Optix V1</td>
                      <td className="px-3 py-2.5">Round</td>
                      <td className="px-3 py-2.5">355&ndash;360g</td>
                      <td className="px-3 py-2.5">Fiberglass weave</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">7.7/10</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">$109.00</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="px-3 py-2.5 font-medium text-foreground">Wilson Blade Elite V2</td>
                      <td className="px-3 py-2.5">Teardrop</td>
                      <td className="px-3 py-2.5">360g</td>
                      <td className="px-3 py-2.5">Carbon/fiberglass hybrid, textured</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">7.0/10</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">$208.58</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2.5 font-medium text-foreground">Wilson Bela Pro V3</td>
                      <td className="px-3 py-2.5">Diamond</td>
                      <td className="px-3 py-2.5">370g</td>
                      <td className="px-3 py-2.5">24K carbon</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">6.7/10</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">$399.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone-500 mt-3">Prices are the Amazon and Padel USA prices checked in October 2026. The Blade Elite V2 price is for an import listing that ships from Amazon Japan. Prices can change.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-5">Which Wilson racket for your level</h2>
              <div className="space-y-3">
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <p className="text-stone-600 text-sm leading-relaxed"><strong className="text-foreground">Beginner.</strong> The <a href="#wilson-optix-v1" className="text-padel-green hover:underline">Wilson Optix V1</a> ($109.00). Round shape, fiberglass face and frame, 9/10 for control and 10/10 for comfort. The forgiving choice, and the one we hand to anyone whose arm hurts.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <p className="text-stone-600 text-sm leading-relaxed"><strong className="text-foreground">Intermediate.</strong> The <a href="#wilson-blade-elite-v2" className="text-padel-green hover:underline">Wilson Blade Elite V2</a> ($208.58). A teardrop with a hybrid face that adds real pace over the Optix without turning harsh. Three 7/10 scores, which is the point of it.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <p className="text-stone-600 text-sm leading-relaxed"><strong className="text-foreground">Advanced.</strong> The <a href="#wilson-bela-pro-v3" className="text-padel-green hover:underline">Wilson Bela Pro V3</a> ($399.00). 24K carbon, diamond shape, 9/10 for power. It punishes off-centre contact, so it is for players whose technique is already consistent.</p>
                </div>
              </div>
              <div className="prose prose-lg prose-stone max-w-none mt-6">
                <p className="text-stone-600 leading-[1.75]">The pattern across the three is stiffness. The Optix is <strong className="text-foreground">fiberglass in the face and the frame</strong>, so it flexes, returns less energy to the ball and sends less shock up the arm. The Blade Elite mixes carbon into the face and puts it in the frame. The Bela Pro is <strong className="text-foreground">24K carbon on a tubular carbon frame</strong>, the stiffest build we have tested. Power goes 4, 7, 9 up the range and comfort goes 10, 7, 4 down it. The shapes follow the same order, round to teardrop to diamond, and our <Link href="/blog/padel-racket-shapes-explained" className="text-padel-green hover:underline">racket shapes guide</Link> explains what each one changes.</p>
              </div>
            </section>

            <section className="mb-4">
              <h2 id="top-wilson-rackets" className="text-2xl font-bold text-foreground mb-5">The 3 Best Wilson Padel Rackets in 2026</h2>

              {/* 1. Wilson Optix V1 */}
              <div id="wilson-optix-v1" className="relative bg-white border-2 border-padel-green rounded-xl p-6 md:p-8 mb-8 shadow-sm">
                <div className="absolute -top-3 -left-2 bg-padel-green text-white text-xs font-bold px-3 py-1.5 rounded-md -rotate-3 shadow-md z-10">#1 PICK</div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mt-2 mb-1">#1 &mdash; Best Wilson Racket Overall, for Beginners and for Control</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">Wilson Optix V1</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$109.00</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: New players, placement players and anyone with a sore elbow</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag>Round</Tag><Tag>355&ndash;360g</Tag><Tag>Soft EVA</Tag><Tag>Fiberglass face</Tag><Tag>Fiberglass frame</Tag>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <Bar label="Power" score={4} /><Bar label="Control" score={9} /><Bar label="Comfort" score={10} />
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">The highest-scoring Wilson we have tested, and the only racket on the site with a perfect 10 for comfort. Wilson builds the face and the frame from fiberglass, which is unusual even among soft rackets, and that one decision explains the whole racket: the ball sits on the face a beat longer, the frame soaks up vibration before it reaches the elbow, and blocks land where you aimed them. The 9/10 for control comes from the round shape, which puts the sweet spot dead centre. Sharp Hole Technology, Wilson&apos;s modified drilling pattern, lets you put real cut on a slice or a lob despite the low power. It is the top pick in our <Link href="/blog/best-padel-rackets-control" className="text-padel-green hover:underline">control guide</Link> and appears in our <Link href="/blog/best-padel-rackets-beginners" className="text-padel-green hover:underline">beginner</Link>, <Link href="/blog/best-padel-rackets-tennis-elbow" className="text-padel-green hover:underline">tennis elbow</Link> and <Link href="/blog/best-padel-rackets-women" className="text-padel-green hover:underline">women&apos;s</Link> guides. Read our full <Link href="/blog/wilson-optix-v1-review" className="text-padel-green hover:underline">Wilson Optix V1 review</Link>.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> 9/10 control and 10/10 comfort, the softest racket we have scored, $109</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Power is an honest 4/10; a fast improver will feel the ceiling within a season or two</p>
                </div>
                <TrackedLink href={AMZ.optix} type="affiliate" productName="Wilson Optix V1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 bg-padel-green text-white font-medium rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
              </div>

              {/* 2. Wilson Blade Elite V2 */}
              <div id="wilson-blade-elite-v2" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#2 &mdash; Best Wilson Racket for Intermediate Players</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">Wilson Blade Elite V2</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$208.58</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: All-court intermediates making their first serious upgrade</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag>Teardrop</Tag><Tag>360g</Tag><Tag>Soft EVA</Tag><Tag>Carbon/fiberglass hybrid</Tag><Tag>Carbon frame</Tag>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <Bar label="Power" score={7} /><Bar label="Control" score={7} /><Bar label="Comfort" score={7} />
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">The Wilson we point to when an intermediate asks for a bit of everything. The teardrop shape moves the sweet spot up the face so overheads carry more weight than on the Optix, the carbon and fiberglass hybrid face is noticeably quicker than pure fiberglass without the harshness of full carbon, and the Soft EVA core keeps the occasional mishit from stinging. The textured finish and Sharp Hole Technology handle the spin. Three sevens is the most honest summary of it: nothing spikes, nothing craters. It is the all-round pick in our <Link href="/blog/best-padel-rackets-intermediate" className="text-padel-green hover:underline">intermediate guide</Link> and one of the picks in our <Link href="/blog/best-teardrop-padel-rackets" className="text-padel-green hover:underline">teardrop guide</Link>. It is a 2022 model, and that now shows in how hard it is to buy: the only Amazon listing we found ships from Amazon Japan as an import. Read our full <Link href="/blog/wilson-blade-elite-v2-review" className="text-padel-green hover:underline">Wilson Blade Elite V2 review</Link>.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Even 7/10 power, control and comfort, real spin, a manageable 360g</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> A 2022 model that is getting hard to find; the Amazon listing is a Japan import</p>
                </div>
                <TrackedLink href={AMZ.blade} type="affiliate" productName="Wilson Blade Elite V2" target="_blank" rel="noopener noreferrer" className={BUTTON}>Check Price on Amazon &rarr;</TrackedLink>
              </div>

              {/* 3. Wilson Bela Pro V3 */}
              <div id="wilson-bela-pro-v3" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#3 &mdash; Best Wilson Racket for Power and Advanced Players</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">Wilson Bela Pro V3</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$399.00</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Advanced players with clean technique who finish points overhead</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag>Diamond</Tag><Tag>370g</Tag><Tag>High-density foam</Tag><Tag>24K carbon</Tag><Tag>Tubular carbon frame</Tag>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <Bar label="Power" score={9} /><Bar label="Control" score={7} /><Bar label="Comfort" score={4} />
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">Fernando Belastegu&iacute;n&apos;s signature racket and the most premium build we have tested. 24K carbon means 24,000 filaments per strand, the finest weave in commercial padel, and on a firm high-density foam core with a head-heavy diamond shape it produces a 9/10 for power. Control is a strong 7/10 for a diamond, helped by Wilson&apos;s DuoGrid hole pattern, which uses larger holes up top for power and tighter holes lower down for bite, and the Spin2 texture. Comfort is where the bill comes due: 4/10. Off-centre hits are punished and long sessions load the arm. It is ranked #5 in our <Link href="/blog/best-padel-rackets-2026" className="text-padel-green hover:underline">pro racket guide</Link> and appears in our <Link href="/blog/best-padel-rackets-power" className="text-padel-green hover:underline">power</Link> and <Link href="/blog/best-padel-rackets-advanced" className="text-padel-green hover:underline">advanced</Link> guides. This is the Bela Pro V3; Wilson&apos;s plain Bela V3 ($349, 3K carbon face) is a different racket we have not scored. Read our full <Link href="/blog/wilson-bela-v3-review" className="text-padel-green hover:underline">Wilson Bela Pro V3 review</Link>.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> 9/10 power, 7/10 control for a diamond, the finest materials in the range</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> 4/10 comfort and $399; money that buys frustration if your technique is not ready for it</p>
                </div>
                <BuyButtons href={AMZ.bela} productName="Wilson Bela Pro V3" className={BUTTON} />
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
                      <td className="py-3 pr-4 font-medium text-stone-700">Best Wilson Racket Overall</td>
                      <td className="py-3 pr-4"><TrackedLink href={AMZ.optix} type="affiliate" productName="Wilson Optix V1" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline">Wilson Optix V1</TrackedLink></td>
                      <td className="py-3 text-stone-600">$109.00</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4 font-medium text-stone-700">Best Wilson Racket for Beginners</td>
                      <td className="py-3 pr-4"><TrackedLink href={AMZ.optix} type="affiliate" productName="Wilson Optix V1" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline">Wilson Optix V1</TrackedLink></td>
                      <td className="py-3 text-stone-600">$109.00</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4 font-medium text-stone-700">Best Wilson Racket for Intermediate Players</td>
                      <td className="py-3 pr-4"><TrackedLink href={AMZ.blade} type="affiliate" productName="Wilson Blade Elite V2" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline">Wilson Blade Elite V2</TrackedLink></td>
                      <td className="py-3 text-stone-600">$208.58</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4 font-medium text-stone-700">Best Wilson Racket for Control</td>
                      <td className="py-3 pr-4"><TrackedLink href={AMZ.optix} type="affiliate" productName="Wilson Optix V1" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline">Wilson Optix V1</TrackedLink></td>
                      <td className="py-3 text-stone-600">$109.00</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4 font-medium text-stone-700">Best Wilson Racket for Power</td>
                      <td className="py-3 pr-4"><StoreTextLink href={AMZ.bela} productName="Wilson Bela Pro V3" className="text-padel-green hover:underline">Wilson Bela Pro V3</StoreTextLink></td>
                      <td className="py-3 text-stone-600">$399.00</td>
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
                  <h3 className="font-semibold text-foreground mb-2">What is the best Wilson padel racket in 2026?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">By our scores, the Wilson Optix V1 at $109.00. It rates 7.7/10, the highest of the three Wilson rackets we have reviewed, with 9/10 for control and the only 10/10 comfort score on the site. That score comes from control and comfort, not pace: power is 4/10. An intermediate player who wants more ball speed should look at the Wilson Blade Elite V2 ($208.58, 7.0/10), and an advanced player at the Wilson Bela Pro V3 ($399.00, 6.7/10, 9/10 for power).</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">What is the best Wilson padel racket for beginners?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">The Wilson Optix V1 at $109.00. It is round, so the sweet spot sits in the centre of the face where new players make contact, and the face and frame are both fiberglass, which forgives mishits and keeps shock off the arm. It is in our <Link href="/blog/best-padel-rackets-beginners" className="text-padel-green hover:underline">beginner guide</Link> for that reason. Power is 4/10, so a fast improver will outgrow it within a season or two.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">What is the best Wilson padel racket for intermediate players?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">The Wilson Blade Elite V2 at $208.58. It is a 360g teardrop with a carbon and fiberglass hybrid face and a Soft EVA core, and it scores 7/10 for power, control and comfort. It is the all-round pick in our <Link href="/blog/best-padel-rackets-intermediate" className="text-padel-green hover:underline">intermediate guide</Link>. It is a 2022 model and the only Amazon listing we found ships from Amazon Japan as an import, so check availability before you plan around it.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">What is the best Wilson padel racket for control?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">The Wilson Optix V1, which scores 9/10 for control and is the top pick in our <Link href="/blog/best-padel-rackets-control" className="text-padel-green hover:underline">control racket guide</Link>. The round shape puts the balance point low and the sweet spot in the middle of the face. If you want control with more power behind it, the Wilson Blade Elite V2 scores 7/10 for both.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">What is the best Wilson padel racket for women?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">The Wilson Optix V1. At 355 to 360g it is the lightest Wilson we have reviewed, and it is the second pick in our <Link href="/blog/best-padel-rackets-women" className="text-padel-green hover:underline">women&apos;s racket guide</Link> behind the 340g Babolat Contact. If you want more pace than its 4/10 power, the Blade Elite V2 at 360g is the next step up in the Wilson range.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">What is the best Wilson padel racket for spin?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">For most players, the Wilson Blade Elite V2. Its textured hybrid face and Wilson&apos;s Sharp Hole Technology drilling pattern give the ball extra bite on cuts and overheads. For advanced players, the Wilson Bela Pro V3 adds the Spin2 texture and a DuoGrid hole pattern with separate power and spin zones, on a 24K carbon face that is far less forgiving.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">What is the difference between the Wilson Bela V3 and the Bela Pro V3?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">They are different rackets. The Bela Pro V3 is the one we reviewed: a $399.00 diamond with a 24K carbon face and a tubular carbon frame, scored 6.7/10 with 9/10 for power and 4/10 for comfort. Wilson also sells a plain Bela V3 at $349 with a 3K carbon face, which we have not scored, so our numbers do not apply to it.</p>
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
            <Link href="/blog/wilson-optix-v1-review" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Wilson Optix V1 Review</h3>
              <p className="text-sm text-stone-400 mt-1">Our top Wilson pick, tested in full &rarr;</p>
            </Link>
            <Link href="/blog/wilson-blade-elite-v2-review" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Wilson Blade Elite V2 Review</h3>
              <p className="text-sm text-stone-400 mt-1">The intermediate pick, scored &rarr;</p>
            </Link>
            <Link href="/blog/wilson-bela-v3-review" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Wilson Bela Pro V3 Review</h3>
              <p className="text-sm text-stone-400 mt-1">Is 24K carbon worth $399? &rarr;</p>
            </Link>
            <Link href="/blog/best-nox-padel-rackets" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Best NOX Padel Rackets</h3>
              <p className="text-sm text-stone-400 mt-1">Four NOX rackets by playing level &rarr;</p>
            </Link>
            <Link href="/blog/padel-racket-shapes-explained" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Racket Shapes Explained</h3>
              <p className="text-sm text-stone-400 mt-1">Round, teardrop or diamond &rarr;</p>
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
