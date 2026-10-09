import { Metadata } from 'next';
import Link from 'next/link';
import { TrackedLink } from '@/components/TrackedLink';
import { StickyPickBar } from '@/components/sticky-pick-bar';
import { HeroVideo } from '@/components/hero-video';
import type { ReactNode } from 'react';

const TITLE = 'Best NOX Padel Rackets (2026): 4 Picks by Playing Level';
const DESCRIPTION = 'The best NOX padel rackets of 2026 for beginners, intermediate players, control and power. Four NOX rackets from $119 to $272, each scored for power, control and comfort.';
const URL = 'https://www.padelcourtsfinder.com/blog/best-nox-padel-rackets';

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
  nox18k: 'https://www.amazon.com/dp/B0DHT1DVW1?tag=padel02-20',
  ml10: 'https://www.amazon.com/dp/B0DWTCG1PL?tag=padel02-20',
  uspa: 'https://www.amazon.com/dp/B0F1ZVM7Y5?tag=padel02-20',
  attack12k: 'https://www.amazon.com/dp/B0DHSVNSRK?tag=padel02-20',
};

const articleData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": TITLE,
  "description": DESCRIPTION,
  "image": "https://www.padelcourtsfinder.com/og/default.png",
  "datePublished": "2026-10-05T00:00:00Z",
  "dateModified": "2026-10-05T00:00:00Z",
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
      "name": "What is the best NOX padel racket in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The NOX AT10 Genius 18K at $272.00. It scores 7.3/10 in our ratings with 8/10 for control and 7/10 for power, and it is our top pick for advanced players. It is a lot of racket for someone still learning, though. For an intermediate player the NOX ML10 Pro Cup Rough Surface at $169.99 is the better choice, and for a beginner the NOX Pro Cup USPA Edition at $119.00."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best NOX padel racket for beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The NOX Pro Cup USPA Edition at $119.00. It is a round racket with a fiberglass face, NOX's HR3 core and a carbon frame, and it scores 8/10 for both control and comfort. At 360 to 365g it is a little heavier than most first rackets, so smaller players may prefer a lighter frame from our beginner guide."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best NOX padel racket for intermediate players?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The NOX ML10 Pro Cup Rough Surface at $169.99. It scores 9/10 for control, has a rough surface for topspin and a low balance point that makes it quick at the net. Intermediate players with clean technique who want more power can look at the NOX AT10 Genius Attack 12K at $229.99, a diamond that scores 8/10 for power."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best NOX padel racket for control?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The NOX ML10 Pro Cup Rough Surface, which scores 9/10 for control, the highest of the NOX rackets we have reviewed. If you want control with more power behind it, the NOX AT10 Genius 18K scores 8/10 for control and 7/10 for power."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best NOX padel racket for power?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The NOX AT10 Genius Attack 12K at $229.99. It is a diamond-shaped racket with a 12K carbon face and scores 8/10 for power. It is demanding to play, with 6/10 for control and comfort, so it suits players whose contact is already consistent."
      }
    },
    {
      "@type": "Question",
      "name": "Which NOX padel racket is best for tennis elbow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Of the NOX rackets we have reviewed, the ML10 Pro Cup Rough Surface is the one we include in our tennis elbow guide. It scores 8/10 for comfort and has NOX's Pulse System in the handle to reduce vibration. It is not the softest racket we have tested. If your elbow is actively sore, a softer fiberglass racket from another brand is the safer choice, and our tennis elbow guide covers those."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between the NOX AT10 Genius 18K and the AT10 Genius Attack 12K?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They are different rackets in the same line. The Genius 18K is a teardrop at $272.00 that scores 7.3/10, with 8/10 for control. The Genius Attack 12K is a diamond at $229.99 that scores 6.7/10, with more power (8/10) and less forgiveness. Choose the Attack only if your game is built around the smash."
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
    product(1, "NOX AT10 Genius 18K", "https://www.padelcourtsfinder.com/blog/nox-at10-genius-18k-review", "272.00", AMZ.nox18k, 7.3),,
    product(2, "NOX ML10 Pro Cup Rough Surface", "https://www.padelcourtsfinder.com/blog/nox-ml10-pro-cup-review", "169.99", AMZ.ml10, 7.3),,
    product(3, "NOX Pro Cup USPA Edition", "https://www.padelcourtsfinder.com/blog/best-nox-padel-rackets#nox-pro-cup-uspa", "119.00", AMZ.uspa, 7.3),,
    product(4, "NOX AT10 Genius Attack 12K", "https://www.padelcourtsfinder.com/blog/nox-at10-genius-attack-review", "229.99", AMZ.attack12k, 6.7)
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

export default function NoxRacketsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <StickyPickBar label="Best NOX racket" productName="NOX AT10 Genius 18K" price="$272.00" href={AMZ.nox18k} />
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
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Best NOX Padel Rackets (2026)</h1>
          <p className="text-lg text-stone-400 mt-3">Four NOX rackets from $119 to $272, matched to how you play</p>
          <div className="text-sm text-stone-500 mt-4 flex items-center gap-3">
            <span>Updated October 5, 2026 &middot; 7 min read</span>
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
              <p className="text-stone-600 leading-[1.75]">NOX is the brand behind Agust&iacute;n Tapia&apos;s AT10 and the ML10 Pro Cup, and its name is on the NOX USPA Circuit in the United States. The range runs from fiberglass rackets at a little over $100 to carbon frames near $300, so <strong className="text-foreground">the best NOX padel racket depends on your level</strong> more than on the model name.</p>
              <p className="text-stone-600 leading-[1.75]">This page covers the four NOX rackets we have rated on the site. Each one keeps the same power, control and comfort scores it has in our other guides. NOX sells more models than these four. We only list rackets we have already scored, so if a model is missing here, it means we have not reviewed it yet.</p>
            </div>

            {/* Quick Picks Box */}
            <div className="border-l-4 border-amber-500 bg-amber-50/80 rounded-r-lg p-5 sm:p-6 mt-8">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="text-amber-500">&#9889;</span> Quick Picks
              </h3>
              <div className="space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best Overall:</span>
                  <span className="text-sm"><TrackedLink href={AMZ.nox18k} type="affiliate" productName="NOX AT10 Genius 18K" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline font-medium">NOX AT10 Genius 18K</TrackedLink> <span className="text-stone-500">&mdash; $272.00</span></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best for Intermediates:</span>
                  <span className="text-sm"><TrackedLink href={AMZ.ml10} type="affiliate" productName="NOX ML10 Pro Cup Rough Surface" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline font-medium">NOX ML10 Pro Cup Rough Surface</TrackedLink> <span className="text-stone-500">&mdash; $169.99</span></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best for Beginners:</span>
                  <span className="text-sm"><TrackedLink href={AMZ.uspa} type="affiliate" productName="NOX Pro Cup USPA Edition" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline font-medium">NOX Pro Cup USPA Edition</TrackedLink> <span className="text-stone-500">&mdash; $119.00</span></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best for Power:</span>
                  <span className="text-sm"><TrackedLink href={AMZ.attack12k} type="affiliate" productName="NOX AT10 Genius Attack 12K" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline font-medium">NOX AT10 Genius Attack 12K</TrackedLink> <span className="text-stone-500">&mdash; $229.99</span></span>
                </div>
              </div>
              <a href="#top-nox-rackets" className="text-sm text-stone-500 hover:text-padel-green mt-3 inline-block">Jump to full reviews &darr;</a>
            </div>
          </div>
        </div>

        {/* Stone-50 Section: Table + How to choose + Cards */}
        <div className="bg-stone-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-5">NOX Padel Rackets Compared</h2>
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
                      <td className="px-3 py-2.5 font-medium text-foreground">NOX AT10 Genius 18K</td>
                      <td className="px-3 py-2.5">Teardrop</td>
                      <td className="px-3 py-2.5">360&ndash;375g</td>
                      <td className="px-3 py-2.5">18K Aluminized Carbon</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">7.3/10</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">$272.00</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="px-3 py-2.5 font-medium text-foreground">NOX ML10 Pro Cup Rough Surface</td>
                      <td className="px-3 py-2.5">Round</td>
                      <td className="px-3 py-2.5">360&ndash;375g</td>
                      <td className="px-3 py-2.5">FG 3K Rough</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">7.3/10</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">$169.99</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="px-3 py-2.5 font-medium text-foreground">NOX Pro Cup USPA Edition</td>
                      <td className="px-3 py-2.5">Round</td>
                      <td className="px-3 py-2.5">360&ndash;365g</td>
                      <td className="px-3 py-2.5">FG 3K Silver</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">7.3/10</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">$119.00</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2.5 font-medium text-foreground">NOX AT10 Genius Attack 12K</td>
                      <td className="px-3 py-2.5">Diamond</td>
                      <td className="px-3 py-2.5">360&ndash;370g</td>
                      <td className="px-3 py-2.5">12K Carbon Luxury</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">6.7/10</td>
                      <td className="px-3 py-2.5 whitespace-nowrap">$229.99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone-500 mt-3">Prices are the Amazon prices at the time of our reviews and can change.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-5">Which NOX racket for your level</h2>
              <div className="space-y-3">
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <p className="text-stone-600 text-sm leading-relaxed"><strong className="text-foreground">Beginner.</strong> The <a href="#nox-pro-cup-uspa" className="text-padel-green hover:underline">NOX Pro Cup USPA Edition</a> ($119.00). Round shape, fiberglass face, 8/10 for control and for comfort.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <p className="text-stone-600 text-sm leading-relaxed"><strong className="text-foreground">Intermediate.</strong> The <a href="#nox-ml10-pro-cup" className="text-padel-green hover:underline">NOX ML10 Pro Cup Rough Surface</a> ($169.99) for control and spin. If your technique is clean and you want to attack, the <a href="#nox-at10-genius-attack-12k" className="text-padel-green hover:underline">AT10 Genius Attack 12K</a> ($229.99).</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <p className="text-stone-600 text-sm leading-relaxed"><strong className="text-foreground">Advanced.</strong> The <a href="#nox-at10-genius-18k" className="text-padel-green hover:underline">NOX AT10 Genius 18K</a> ($272.00). The best mix of control and power in the range, with a weight system you can adjust.</p>
                </div>
              </div>
              <div className="prose prose-lg prose-stone max-w-none mt-6">
                <p className="text-stone-600 leading-[1.75]">The pattern across the range is simple. The two Pro Cup rackets are <strong className="text-foreground">round with fiberglass faces</strong>, which means a large, centred sweet spot and more forgiveness. The two AT10 rackets use <strong className="text-foreground">carbon faces</strong> in teardrop and diamond shapes, which means more power and less margin for error. Our <Link href="/blog/padel-racket-shapes-explained" className="text-padel-green hover:underline">racket shapes guide</Link> explains what each shape changes.</p>
              </div>
            </section>

            <section className="mb-4">
              <h2 id="top-nox-rackets" className="text-2xl font-bold text-foreground mb-5">The 4 Best NOX Padel Rackets in 2026</h2>

              {/* 1. NOX AT10 Genius 18K */}
              <div id="nox-at10-genius-18k" className="relative bg-white border-2 border-padel-green rounded-xl p-6 md:p-8 mb-8 shadow-sm">
                <div className="absolute -top-3 -left-2 bg-padel-green text-white text-xs font-bold px-3 py-1.5 rounded-md -rotate-3 shadow-md z-10">#1 PICK</div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mt-2 mb-1">#1 &mdash; Best NOX Racket Overall</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">NOX AT10 Genius 18K</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$272.00</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Advanced and strong intermediate players who win with placement first</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag>Teardrop</Tag><Tag>360&ndash;375g</Tag><Tag>MLD Black EVA</Tag><Tag>18K Aluminized Carbon</Tag><Tag>Adjustable weight</Tag>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <Bar label="Power" score={7} /><Bar label="Control" score={8} /><Bar label="Comfort" score={7} />
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">Agust&iacute;n Tapia&apos;s racket, and our top pick in the pro tier. The reason is control: 8/10 is unusually high for a racket at this level, and it comes from the teardrop shape, which puts the sweet spot closer to the middle of the face than a diamond does. Power is still a genuine 7/10 through the 18K aluminized carbon face and MLD Black EVA core. The weight system lets you load the head for more power or move mass toward the handle when your arm wants a break. It is also the top pick in our <Link href="/blog/best-padel-rackets-advanced" className="text-padel-green hover:underline">advanced</Link> and <Link href="/blog/best-teardrop-padel-rackets" className="text-padel-green hover:underline">teardrop</Link> guides. Read our full <Link href="/blog/nox-at10-genius-18k-review" className="text-padel-green hover:underline">NOX AT10 Genius 18K review</Link>.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> 8/10 control with 7/10 power, adjustable balance, comfortable enough for regular play</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> The most expensive NOX here, and it gives up a point or two of smash power to a diamond</p>
                </div>
                <TrackedLink href={AMZ.nox18k} type="affiliate" productName="NOX AT10 Genius 18K" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 bg-padel-green text-white font-medium rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
              </div>

              {/* 2. NOX ML10 Pro Cup Rough Surface */}
              <div id="nox-ml10-pro-cup" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#2 &mdash; Best NOX Racket for Intermediate Players</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">NOX ML10 Pro Cup Rough Surface</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$169.99</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Improving players who want control and spin without paying $200+</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag>Round</Tag><Tag>360&ndash;375g</Tag><Tag>HR3 EVA</Tag><Tag>FG 3K Rough</Tag><Tag>Carbon Frame</Tag>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <Bar label="Power" score={5} /><Bar label="Control" score={9} /><Bar label="Comfort" score={8} />
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">The NOX we point most improving players to. It keeps the safety of a round shape and adds a rough sand-finish surface that bites the ball for topspin, a low balance point that makes it quick at the net, and the Pulse System in the handle to take the sting out of impact. Control is 9/10, the highest of the four NOX rackets on this page. The fiberglass face limits raw power to 5/10, so this is an upgrade in spin and precision rather than pace. It is the first pick in our <Link href="/blog/best-padel-rackets-intermediate" className="text-padel-green hover:underline">intermediate guide</Link>. Read our full <Link href="/blog/nox-ml10-pro-cup-review" className="text-padel-green hover:underline">NOX ML10 Pro Cup review</Link>.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> 9/10 control, rough surface for topspin, quick at the net, 8/10 comfort</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Fiberglass face caps power at 5/10</p>
                </div>
                <TrackedLink href={AMZ.ml10} type="affiliate" productName="NOX ML10 Pro Cup Rough Surface" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
              </div>

              {/* 3. NOX Pro Cup USPA Edition */}
              <div id="nox-pro-cup-uspa" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#3 &mdash; Best NOX Racket for Beginners</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">NOX Pro Cup USPA Edition</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$119.00</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: New players who want a NOX with a carbon frame for about $120</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag>Round</Tag><Tag>360&ndash;365g</Tag><Tag>HR3 EVA</Tag><Tag>FG 3K Silver</Tag><Tag>Carbon Frame</Tag>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <Bar label="Power" score={6} /><Bar label="Control" score={8} /><Bar label="Comfort" score={8} />
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">The official racket of the NOX USPA Circuit and the least expensive NOX we recommend. The HR3 core gives a consistent bounce across the face, the FG 3K Silver surface keeps the forgiveness of fiberglass, and the carbon frame adds the stability you start to want as your shots get harder. It scores 6/10 for power with 8/10 for control, which is more pace than a pure fiberglass first racket like the Wilson Optix V1 (4/10). At 360&ndash;365g it is on the heavier side for a complete beginner. It is one of the picks in our <Link href="/blog/best-padel-rackets-beginners" className="text-padel-green hover:underline">beginner guide</Link> and our <Link href="/blog/best-budget-padel-rackets" className="text-padel-green hover:underline">budget guide</Link>.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Carbon frame and HR3 core at $119, 6/10 power with 8/10 control</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Heavier than most first rackets at 360&ndash;365g</p>
                </div>
                <TrackedLink href={AMZ.uspa} type="affiliate" productName="NOX Pro Cup USPA Edition" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
              </div>

              {/* 4. NOX AT10 Genius Attack 12K */}
              <div id="nox-at10-genius-attack-12k" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#4 &mdash; Best NOX Racket for Power</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">NOX AT10 Genius Attack 12K</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$229.99</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Aggressive players with clean technique who finish points overhead</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <Tag>Diamond</Tag><Tag>360&ndash;370g</Tag><Tag>MLD Black EVA</Tag><Tag>12K Carbon Luxury</Tag><Tag>Carbon Frame</Tag>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <Bar label="Power" score={8} /><Bar label="Control" score={6} /><Bar label="Comfort" score={6} />
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">The diamond sibling of the Genius 18K and the most powerful NOX we have reviewed, at 8/10. The 12K carbon face has a SPIN 3D texture that puts real topspin on the bandeja and the vibora, and the MLD Black EVA core is the same one used in the 18K. The trade is forgiveness. A diamond with a head-heavy balance is demanding, and control and comfort both drop to 6/10. If your contact is consistent, this rewards an attacking game for about $40 less than the 18K. If it is not, the ML10 above is the better buy. Read our full <Link href="/blog/nox-at10-genius-attack-review" className="text-padel-green hover:underline">NOX AT10 Genius Attack 12K review</Link>, which compares it head to head with the 18K.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> 8/10 power, 12K carbon face with SPIN 3D texture, cheaper than the 18K</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Diamond shape and head-heavy balance punish inconsistent contact</p>
                </div>
                <TrackedLink href={AMZ.attack12k} type="affiliate" productName="NOX AT10 Genius Attack 12K" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
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
                      <td className="py-3 pr-4 font-medium text-stone-700">Best NOX Racket Overall</td>
                      <td className="py-3 pr-4"><TrackedLink href={AMZ.nox18k} type="affiliate" productName="NOX AT10 Genius 18K" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline">NOX AT10 Genius 18K</TrackedLink></td>
                      <td className="py-3 text-stone-600">$272.00</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4 font-medium text-stone-700">Best NOX Racket for Intermediate Players</td>
                      <td className="py-3 pr-4"><TrackedLink href={AMZ.ml10} type="affiliate" productName="NOX ML10 Pro Cup Rough Surface" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline">NOX ML10 Pro Cup Rough Surface</TrackedLink></td>
                      <td className="py-3 text-stone-600">$169.99</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4 font-medium text-stone-700">Best NOX Racket for Beginners</td>
                      <td className="py-3 pr-4"><TrackedLink href={AMZ.uspa} type="affiliate" productName="NOX Pro Cup USPA Edition" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline">NOX Pro Cup USPA Edition</TrackedLink></td>
                      <td className="py-3 text-stone-600">$119.00</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4 font-medium text-stone-700">Best NOX Racket for Power</td>
                      <td className="py-3 pr-4"><TrackedLink href={AMZ.attack12k} type="affiliate" productName="NOX AT10 Genius Attack 12K" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline">NOX AT10 Genius Attack 12K</TrackedLink></td>
                      <td className="py-3 text-stone-600">$229.99</td>
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
                  <h3 className="font-semibold text-foreground mb-2">What is the best NOX padel racket in 2026?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">The NOX AT10 Genius 18K at $272.00. It scores 7.3/10 in our ratings with 8/10 for control and 7/10 for power, and it is our top pick for advanced players. It is a lot of racket for someone still learning, though. For an intermediate player the NOX ML10 Pro Cup Rough Surface at $169.99 is the better choice, and for a beginner the NOX Pro Cup USPA Edition at $119.00.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">What is the best NOX padel racket for beginners?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">The NOX Pro Cup USPA Edition at $119.00. It is a round racket with a fiberglass face, NOX&apos;s HR3 core and a carbon frame, and it scores 8/10 for both control and comfort. At 360 to 365g it is a little heavier than most first rackets, so smaller players may prefer a lighter frame from our beginner guide.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">What is the best NOX padel racket for intermediate players?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">The NOX ML10 Pro Cup Rough Surface at $169.99. It scores 9/10 for control, has a rough surface for topspin and a low balance point that makes it quick at the net. Intermediate players with clean technique who want more power can look at the NOX AT10 Genius Attack 12K at $229.99, a diamond that scores 8/10 for power.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">What is the best NOX padel racket for control?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">The NOX ML10 Pro Cup Rough Surface, which scores 9/10 for control, the highest of the NOX rackets we have reviewed. If you want control with more power behind it, the NOX AT10 Genius 18K scores 8/10 for control and 7/10 for power.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">What is the best NOX padel racket for power?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">The NOX AT10 Genius Attack 12K at $229.99. It is a diamond-shaped racket with a 12K carbon face and scores 8/10 for power. It is demanding to play, with 6/10 for control and comfort, so it suits players whose contact is already consistent.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">Which NOX padel racket is best for tennis elbow?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Of the NOX rackets we have reviewed, the ML10 Pro Cup Rough Surface is the one we include in our tennis elbow guide. It scores 8/10 for comfort and has NOX&apos;s Pulse System in the handle to reduce vibration. It is not the softest racket we have tested. If your elbow is actively sore, a softer fiberglass racket from another brand is the safer choice, and our tennis elbow guide covers those.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">What is the difference between the NOX AT10 Genius 18K and the AT10 Genius Attack 12K?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">They are different rackets in the same line. The Genius 18K is a teardrop at $272.00 that scores 7.3/10, with 8/10 for control. The Genius Attack 12K is a diamond at $229.99 that scores 6.7/10, with more power (8/10) and less forgiveness. Choose the Attack only if your game is built around the smash.</p>
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
            <Link href="/blog/nox-at10-genius-18k-review" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">NOX AT10 Genius 18K Review</h3>
              <p className="text-sm text-stone-400 mt-1">Our top NOX pick, tested in full &rarr;</p>
            </Link>
            <Link href="/blog/nox-ml10-pro-cup-review" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">NOX ML10 Pro Cup Review</h3>
              <p className="text-sm text-stone-400 mt-1">The intermediate pick, scored &rarr;</p>
            </Link>
            <Link href="/blog/nox-at10-genius-attack-review" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">NOX AT10 Genius Attack 12K Review</h3>
              <p className="text-sm text-stone-400 mt-1">Attack vs Genius 18K, head to head &rarr;</p>
            </Link>
            <Link href="/blog/best-budget-padel-rackets" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Best Budget Padel Rackets</h3>
              <p className="text-sm text-stone-400 mt-1">6 picks from $90 to $170, any brand &rarr;</p>
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
