import { Metadata } from 'next';
import Link from 'next/link';
import { TrackedLink } from '@/components/TrackedLink';
import { StickyPickBar } from '@/components/sticky-pick-bar';

export const metadata: Metadata = {
  title: 'Best Power Padel Rackets (2026) — Top 5 for Attacking Players',
  description: 'The 5 most powerful padel rackets of 2026, ranked by our tested power scores. Diamond-shaped smashing machines from $230 to $399 for attacking players.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-rackets-power',
  },
  openGraph: {
    title: 'Best Power Padel Rackets (2026) — Top 5 for Attacking Players',
    description: 'The 5 most powerful padel rackets of 2026, ranked by our tested power scores. Diamond-shaped smashing machines from $230 to $399 for attacking players.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-rackets-power',
    type: 'article',
    images: [{ url: 'https://www.padelcourtsfinder.com/og/default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Power Padel Rackets (2026) — Top 5 for Attacking Players',
    description: 'The 5 most powerful padel rackets of 2026, ranked by our tested power scores, from $230 to $399.',
  },
};

export default function PowerRacketsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Power Padel Rackets (2026) — Top 5 for Attacking Players",
    "description": "The 5 most powerful padel rackets of 2026, ranked by our tested power scores. Diamond-shaped smashing machines from $230 to $399 for attacking players.",
    "image": "https://www.padelcourtsfinder.com/og/default.png",
    "datePublished": "2026-07-03T00:00:00Z",
    "dateModified": "2026-07-03T00:00:00Z",
    "author": { "@type": "Organization", "name": "Padel Courts Finder", "url": "https://www.padelcourtsfinder.com" },
    "publisher": { "@type": "Organization", "name": "Padel Courts Finder", "logo": { "@type": "ImageObject", "url": "https://www.padelcourtsfinder.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.padelcourtsfinder.com/blog/best-padel-rackets-power" }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do power rackets make your smashes faster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "On clean contact, yes. Head-heavy balance puts more mass behind the ball at the top of the face — right where you strike a full smash — and firm cores plus stiff carbon faces return energy faster than soft setups. The catch is the word clean: catch the ball an inch below the sweet spot and a power racket gives back less than a forgiving round frame would. Power rackets amplify good technique; they don't create pace out of nothing."
        }
      },
      {
        "@type": "Question",
        "name": "Are power padel rackets bad for tennis elbow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They're the harshest category for your arm, honestly. Head-heavy balance plus a firm core transmits more shock to the wrist and elbow on every hit, and the comfort scores in this guide (mostly 4-6 out of 10) reflect that. If you have any history of elbow or shoulder pain, a round or soft-teardrop racket with a low balance point is a much kinder choice — power isn't worth an injury layoff."
        }
      },
      {
        "@type": "Question",
        "name": "What shape are power padel rackets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Almost always diamond — every racket in this guide is one. Diamond frames stack their mass high in the head, which puts weight behind the ball exactly where you make contact on overheads. Some aggressive teardrops with firm cores also qualify as power rackets, trading a little pop for a slightly bigger sweet spot."
        }
      },
      {
        "@type": "Question",
        "name": "Can intermediates use a power racket?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, with caveats. You need consistent contact and good racket-head speed before a diamond shape helps more than it hurts. If that's you, the Adidas Metalbone HRD+ 3.3 and the NOX AT10 Genius Attack 12K are the two picks in this guide designed with upper-intermediates in mind — both come from our intermediate testing lineup. The HEAD Extreme Pro, Babolat Technical Viper, and Wilson Bela V3 are pro-level tools that punish developing technique."
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
          "image": "https://www.padelcourtsfinder.com/og/default.png",
          "name": "HEAD Extreme Pro",
          "description": "Best for: Smash-first attackers who want maximum ball speed",
          "offers": { "@type": "Offer", "price": "319.95", "priceCurrency": "USD", "url": "https://www.amazon.com/dp/B0G59YX8H5?tag=padel02-20" },
          "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": 6.3, "bestRating": 10 }, "author": { "@type": "Organization", "name": "Padel Courts Finder" } }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "image": "https://www.padelcourtsfinder.com/og/default.png",
          "name": "Adidas Metalbone HRD+ 3.3",
          "description": "Best for: Upper-intermediate attackers stepping into power play",
          "offers": { "@type": "Offer", "price": "279.99", "priceCurrency": "USD", "url": "https://www.amazon.com/dp/B0CNWHR78K?tag=padel02-20" },
          "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": 6.3, "bestRating": 10 }, "author": { "@type": "Organization", "name": "Padel Courts Finder" } }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "image": "https://www.padelcourtsfinder.com/og/default.png",
          "name": "Babolat Technical Viper Juan Lebrón",
          "description": "Best for: Technical aggressors who want elite power at the lowest pro price",
          "offers": { "@type": "Offer", "price": "249.00", "priceCurrency": "USD", "url": "https://www.amazon.com/dp/B0DPH3GZGN?tag=padel02-20" },
          "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": 6.7, "bestRating": 10 }, "author": { "@type": "Organization", "name": "Padel Courts Finder" } }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Product",
          "image": "https://www.padelcourtsfinder.com/og/default.png",
          "name": "Wilson Bela V3",
          "description": "Best for: Advanced attackers who want power with premium precision",
          "offers": { "@type": "Offer", "price": "399.00", "priceCurrency": "USD", "url": "https://www.amazon.com/dp/B0F2WMRTYB?tag=padel02-20" },
          "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": 6.7, "bestRating": 10 }, "author": { "@type": "Organization", "name": "Padel Courts Finder" } }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Product",
          "image": "https://www.padelcourtsfinder.com/og/default.png",
          "name": "NOX AT10 Genius Attack 12K",
          "description": "Best for: Developing attackers who want power with a comfort margin",
          "offers": { "@type": "Offer", "price": "229.99", "priceCurrency": "USD", "url": "https://www.amazon.com/dp/B0DHSVNSRK?tag=padel02-20" },
          "review": { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": 6.7, "bestRating": 10 }, "author": { "@type": "Organization", "name": "Padel Courts Finder" } }
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <StickyPickBar label="Most power" productName="HEAD Extreme Pro" price="$319.95" href="https://www.amazon.com/dp/B0G59YX8H5?tag=padel02-20" />
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
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Best Power Padel Rackets (2026) &mdash; Top 5 for Attacking Players</h1>
          <p className="text-lg text-stone-400 mt-3">The hardest-hitting frames we&apos;ve rated, ranked purely by power score</p>
          <div className="text-sm text-stone-500 mt-4 flex items-center gap-3">
            <span>July 3, 2026</span><span>&middot;</span><span>9 min read</span>
          </div>
          <div className="text-sm text-stone-500 mt-1">By the Padel Courts Finder editorial team</div>
        </div>
      </header>

      <article>
        {/* White Section: Affiliate disclosure + Intro + Quick Picks */}
        <div className="bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 mb-10 flex items-start gap-2">
              <span className="text-stone-400 mt-0.5 text-sm">&#8505;</span>
              <p className="text-xs text-stone-500 italic leading-relaxed">
                This guide contains affiliate links. If you purchase through our links, we may earn a small commission at no extra cost to you. We only recommend products we believe in.
              </p>
            </div>

            <div className="prose prose-lg prose-stone max-w-none mb-0">
              <p>This guide is for one type of player: the attacker. You live at the net, you finish points overhead, and the shot you care most about is the one that ends the rally. Every racket below is a diamond &mdash; the shape that concentrates mass high in the head, right where a smash makes contact (our <Link href="/blog/padel-racket-shapes-explained" className="text-padel-green hover:underline">racket shapes guide</Link> covers why that geometry matters). Our methodology is simple and transparent: we took every racket we&apos;ve rated across our buying guides and ranked the top five by their power scores &mdash; no editorial reshuffling.</p>
              <p>One honest warning before you scroll. Power shapes are the least forgiving category in padel: smaller sweet spots, head-heavy balance, firm cores that punish mishits and stress your arm. If your technique is still developing, one of these will make you worse, not better &mdash; start with our <Link href="/blog/best-padel-rackets-beginners" className="text-padel-green hover:underline">beginner rackets guide</Link> instead and come back when your contact is consistent. Price range here: <strong>$230&ndash;$399</strong>.</p>
            </div>

            {/* Quick Picks Box */}
            <div className="border-l-4 border-amber-500 bg-amber-50/80 rounded-r-lg p-5 sm:p-6 mt-8">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="text-amber-500">&#9889;</span> Quick Picks
              </h3>
              <div className="space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Most Power, Period:</span>
                  <span className="text-sm"><TrackedLink href="https://www.amazon.com/dp/B0G59YX8H5?tag=padel02-20" type="affiliate" productName="HEAD Extreme Pro" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline font-medium">HEAD Extreme Pro</TrackedLink> <span className="text-stone-500">&mdash; $319.95</span></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best Value Power:</span>
                  <span className="text-sm"><TrackedLink href="https://www.amazon.com/dp/B0DHSVNSRK?tag=padel02-20" type="affiliate" productName="NOX AT10 Genius Attack" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline font-medium">NOX AT10 Genius Attack 12K</TrackedLink> <span className="text-stone-500">&mdash; $229.99</span></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-sm font-semibold text-stone-700">Best for Intermediates:</span>
                  <span className="text-sm"><TrackedLink href="https://www.amazon.com/dp/B0CNWHR78K?tag=padel02-20" type="affiliate" productName="Adidas Metalbone HRD+" target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline font-medium">Adidas Metalbone HRD+ 3.3</TrackedLink> <span className="text-stone-500">&mdash; $279.99</span></span>
                </div>
              </div>
              <a href="#top-5-power" className="text-sm text-stone-500 hover:text-padel-green mt-3 inline-block">Jump to full reviews &darr;</a>
            </div>
          </div>
        </div>

        {/* Stone-50 Section: Top 5 Product Cards */}
        <div className="bg-stone-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <section>
              <h2 id="top-5-power" className="text-2xl font-bold text-foreground mb-5">Top 5 Power Padel Rackets for 2026</h2>

              {/* 1. HEAD Extreme Pro */}
              <div id="head-extreme-pro" className="relative bg-white border-2 border-padel-green rounded-xl p-6 md:p-8 mb-8 shadow-sm">
                <div className="absolute -top-3 -left-2 bg-padel-green text-white text-xs font-bold px-3 py-1.5 rounded-md -rotate-3 shadow-md z-10">
                  #1 PICK
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mt-2 mb-1">#1 &mdash; Most Power, Period (10/10)</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">HEAD Extreme Pro</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$319.95</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Smash-first attackers who want maximum ball speed</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Diamond</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">370g</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Power Foam</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">UD Carbon HS</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Carbon/Graphene Frame</span>
                </div>
                {/* Rating Bars */}
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Power</span>
                      <span className="text-xs text-stone-400">10/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-padel-green" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Control</span>
                      <span className="text-xs text-stone-400">5/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-amber-500" style={{ width: '50%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Comfort</span>
                      <span className="text-xs text-stone-400">4/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-amber-500" style={{ width: '40%' }} />
                    </div>
                  </div>
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">The only racket in our entire testing lineup to score a perfect 10 for power. HEAD pairs a UD Carbon HS face &mdash; the &quot;HS&quot; is High Speed, and the contact feel lives up to it &mdash; with Auxetic 2.0 frame technology that boosts energy return right at the moment of impact. Add a 370g diamond frame with high balance and a Power Foam core, and off-the-face ball speed is simply in a different class from everything else here. The Extreme Spin rough texture piles heavy topspin onto smashes and viboras, and Graphene Inside handles the weight distribution. Just know what you&apos;re signing up for: control rates 5 and comfort 4, so this frame gives nothing away for free. One buying note &mdash; the Amazon listing carries multiple variants, so confirm you&apos;ve selected the &quot;Pro&quot; before checkout.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> The only 10/10 power score in our testing</p>
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Auxetic 2.0 boosts energy return at impact; UD Carbon HS face feels instantly explosive</p>
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Extreme Spin rough texture adds heavy topspin to attacking shots</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> 370g with high balance demands real conditioning and clean technique</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Multi-variant Amazon listing &mdash; easy to pick the wrong model by accident</p>
                </div>
                <TrackedLink href="https://www.amazon.com/dp/B0G59YX8H5?tag=padel02-20" type="affiliate" productName="HEAD Extreme Pro" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 bg-padel-green text-white font-medium rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
              </div>

              {/* 2. Adidas Metalbone HRD+ 3.3 */}
              <div id="adidas-metalbone-hrd" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#2 &mdash; Best for Intermediates (9/10)</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">Adidas Metalbone HRD+ 3.3</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$279.99</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Upper-intermediate attackers stepping into power play</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Diamond</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">345&ndash;360g</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">High Memory EVA (Hard)</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Carbon Aluminized 2:1</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Carbon Frame</span>
                </div>
                {/* Rating Bars */}
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Power</span>
                      <span className="text-xs text-stone-400">9/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-padel-green" style={{ width: '90%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Control</span>
                      <span className="text-xs text-stone-400">5/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-amber-500" style={{ width: '50%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Comfort</span>
                      <span className="text-xs text-stone-400">5/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-amber-500" style={{ width: '50%' }} />
                    </div>
                  </div>
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">The rare power racket you don&apos;t need a pro-level game to swing. Designed with Ale Gal&aacute;n&apos;s input, the HRD+ 3.3 earns its 9/10 from a Carbon Aluminized 2:1 face &mdash; among the most explosive surfaces we&apos;ve rated under $300 &mdash; working with a hard High Memory EVA core that speeds up ball exit on every strike. The 345&ndash;360g weight sits lighter than the pro-tier frames on this list, which keeps the head-heavy diamond balance swingable for players who haven&apos;t maxed out their conditioning yet. It still concentrates enough mass up top to put real venom on overheads, and it still punishes off-center hits &mdash; there&apos;s no free lunch in this category. Adidas ships it with 3M protection tape already applied, which suits the glass-crashing style of play this racket encourages.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Carbon Aluminized 2:1 face &mdash; among the most explosive under $300</p>
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Lighter 345&ndash;360g build makes big power accessible to upper-intermediates</p>
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> 3M protection tape comes pre-applied</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Hard EVA core is unforgiving on mishits</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Control (5/10) trails the Viper and Bela V3</p>
                </div>
                <TrackedLink href="https://www.amazon.com/dp/B0CNWHR78K?tag=padel02-20" type="affiliate" productName="Adidas Metalbone HRD+" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
              </div>

              {/* 3. Babolat Technical Viper */}
              <div id="babolat-viper" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#3 &mdash; Best Power-for-Money (9/10)</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">Babolat Technical Viper Juan Lebr&oacute;n</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$249.00</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Technical aggressors who want elite power at the lowest pro price</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Diamond</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">370g</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Hard EVA</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">3K Carbon</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Carbon Frame</span>
                </div>
                {/* Rating Bars */}
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Power</span>
                      <span className="text-xs text-stone-400">9/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-padel-green" style={{ width: '90%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Control</span>
                      <span className="text-xs text-stone-400">7/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-padel-green" style={{ width: '70%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Comfort</span>
                      <span className="text-xs text-stone-400">4/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-amber-500" style={{ width: '40%' }} />
                    </div>
                  </div>
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">Juan Lebr&oacute;n&apos;s signature frame is the cheapest ticket to true pro-tier power on this list, and it doesn&apos;t sacrifice much to get there. The formula is classic power racket &mdash; hard EVA core, 3K carbon face, 370g diamond frame &mdash; and the ball comes off it with genuine acceleration. What separates the Viper from a pure sledgehammer is the supporting tech: the Dynamic Stability System keeps the frame from twisting on contact (which is why its control score of 7 beats the two rackets above it), the 3D Spin+ face texture loads up both topspin and sidespin, and the Holes Pattern System manages airflow through the head. The comfort score of 4 is the tax: hard core, high balance, and 370g add up to a physically demanding racket that expects strong technique and fitness.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Pro-tier 9/10 power at $249 &mdash; the value pick among flagship frames</p>
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Dynamic Stability System gives it the best control of the top three</p>
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> 3D Spin+ texture generates heavy top and side spin</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Comfort is a 4 &mdash; the hard EVA core is rough on the arm</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Smaller sweet spot than a teardrop; not for developing technique</p>
                </div>
                <TrackedLink href="https://www.amazon.com/dp/B0DPH3GZGN?tag=padel02-20" type="affiliate" productName="Babolat Technical Viper" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
              </div>

              {/* 4. Wilson Bela V3 */}
              <div id="wilson-bela-v3" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#4 &mdash; Most Refined Power (9/10)</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">Wilson Bela V3</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$399.00</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Advanced attackers who want power with premium precision</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Diamond</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">366&ndash;370g</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">EVA Firm / Power Foam</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">24K Carbon</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">C2 Tubular Carbon Frame</span>
                </div>
                {/* Rating Bars */}
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Power</span>
                      <span className="text-xs text-stone-400">9/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-padel-green" style={{ width: '90%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Control</span>
                      <span className="text-xs text-stone-400">7/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-padel-green" style={{ width: '70%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Comfort</span>
                      <span className="text-xs text-stone-400">4/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-amber-500" style={{ width: '40%' }} />
                    </div>
                  </div>
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">If the Extreme Pro is a hammer, Fernando Belastegu&iacute;n&apos;s Bela V3 is a scalpel that happens to hit like one. Its 24K carbon face &mdash; 24,000 filaments per strand, the densest weave sold in commercial padel &mdash; delivers 9/10 power with an unusual level of feedback: small changes in your swing show up in the ball, which is why it matches the Viper&apos;s control score of 7 despite the firm core and head-heavy diamond layout. Wilson splits the face into zones &mdash; a power region in the center and spin-oriented texture toward the edges &mdash; while SpinEffect drilling tunes airflow and bite, and the C2 tubular carbon frame adds stiffness without bulking up the 366&ndash;370g weight. At $399 it&apos;s the priciest racket in this guide by a wide margin, and the comfort score of 4 confirms it makes zero concessions to your elbow. For the advanced attacker who wants finishing power and placement, though, this is the ceiling.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> 24K carbon face &mdash; big power with unmatched precision and feedback</p>
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Dual-texture zones: center for power, edges for spin</p>
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> C2 tubular frame keeps it stiff without extra weight</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> $399 &mdash; by far the most expensive pick here</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Firm core + head-heavy balance is hard on the arm and on sloppy swings</p>
                </div>
                <TrackedLink href="https://www.amazon.com/dp/B0F2WMRTYB?tag=padel02-20" type="affiliate" productName="Wilson Bela V3" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
              </div>

              {/* 5. NOX AT10 Genius Attack 12K */}
              <div id="nox-at10-attack" className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">#5 &mdash; Best Value Power (8/10)</span>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-foreground">NOX AT10 Genius Attack 12K</h3>
                  <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-lg font-bold whitespace-nowrap">$229.99</span>
                </div>
                <p className="text-sm italic text-stone-500 mb-4">Best for: Developing attackers who want power with a comfort margin</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Diamond</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">360&ndash;370g</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">MLD Black EVA</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">12K Carbon Luxury</span>
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Carbon Frame</span>
                </div>
                {/* Rating Bars */}
                <div className="grid grid-cols-3 gap-3 mb-5 py-3 px-4 bg-stone-100/50 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Power</span>
                      <span className="text-xs text-stone-400">8/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-padel-green" style={{ width: '80%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Control</span>
                      <span className="text-xs text-stone-400">6/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-amber-500" style={{ width: '60%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-stone-500">Comfort</span>
                      <span className="text-xs text-stone-400">6/10</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full">
                      <div className="h-1.5 rounded-full bg-amber-500" style={{ width: '60%' }} />
                    </div>
                  </div>
                </div>
                <p className="text-stone-600 leading-[1.75] mb-5">The attack version of Agust&iacute;n Tapia&apos;s AT10 line rounds out our top five, and it&apos;s the smartest entry point into power padel. The 12K carbon face is a standout at $230 &mdash; stiff enough to reward aggressive swings with real pop &mdash; and the diamond shape puts the mass where finishers want it. What earns it the &quot;power with a margin&quot; label is the MLD Black EVA core: it takes the edge off impact in a way the hard-cored rackets above simply don&apos;t, which is why this frame posts the best comfort score (6/10) in the guide. NOX&apos;s Pulse System handle damping helps too, and the SPIN 3D face texture makes bandejas and viboras genuinely nasty. You give up a point or two of raw power versus the top four &mdash; that&apos;s the honest trade for a racket you can swing hard all match without your elbow filing a complaint.</p>
                <div className="space-y-2 mb-5">
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> Cheapest racket in the guide at $229.99, with a 12K carbon face that outclasses the price</p>
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> MLD Black EVA core + Pulse System = the best comfort score of any power pick here</p>
                  <p className="text-sm text-stone-700"><span className="text-padel-green mr-1.5">&#10003;</span> SPIN 3D texture piles topspin onto bandejas and viboras</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Lowest power score (8/10) of the five &mdash; the trade for the softer core</p>
                  <p className="text-sm text-stone-700"><span className="text-stone-400 mr-1.5">&#10007;</span> Still a head-heavy diamond &mdash; lower-intermediates should look elsewhere</p>
                </div>
                <TrackedLink href="https://www.amazon.com/dp/B0DHSVNSRK?tag=padel02-20" type="affiliate" productName="NOX AT10 Genius Attack" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 transition-all duration-200">Check Price on Amazon &rarr;</TrackedLink>
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
                      <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-wider text-stone-500">Power</th>
                      <th className="text-left py-3 text-xs font-semibold uppercase tracking-wider text-stone-500">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4"><TrackedLink href="https://www.amazon.com/dp/B0G59YX8H5?tag=padel02-20" type="affiliate" productName="HEAD Extreme Pro" className="text-padel-green hover:underline" target="_blank" rel="noopener noreferrer">HEAD Extreme Pro</TrackedLink></td>
                      <td className="py-3 pr-4 text-stone-600">$319.95</td>
                      <td className="py-3 pr-4 text-stone-600">Diamond</td>
                      <td className="py-3 pr-4 font-medium text-stone-700">10/10</td>
                      <td className="py-3 text-stone-600">Smash-first attackers</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4"><TrackedLink href="https://www.amazon.com/dp/B0CNWHR78K?tag=padel02-20" type="affiliate" productName="Adidas Metalbone HRD+" className="text-padel-green hover:underline" target="_blank" rel="noopener noreferrer">Adidas Metalbone HRD+ 3.3</TrackedLink></td>
                      <td className="py-3 pr-4 text-stone-600">$279.99</td>
                      <td className="py-3 pr-4 text-stone-600">Diamond</td>
                      <td className="py-3 pr-4 font-medium text-stone-700">9/10</td>
                      <td className="py-3 text-stone-600">Upper-intermediate attackers</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4"><TrackedLink href="https://www.amazon.com/dp/B0DPH3GZGN?tag=padel02-20" type="affiliate" productName="Babolat Technical Viper" className="text-padel-green hover:underline" target="_blank" rel="noopener noreferrer">Babolat Technical Viper</TrackedLink></td>
                      <td className="py-3 pr-4 text-stone-600">$249.00</td>
                      <td className="py-3 pr-4 text-stone-600">Diamond</td>
                      <td className="py-3 pr-4 font-medium text-stone-700">9/10</td>
                      <td className="py-3 text-stone-600">Technical aggressors on a budget</td>
                    </tr>
                    <tr className="border-b border-stone-100 bg-stone-50/50">
                      <td className="py-3 pr-4"><TrackedLink href="https://www.amazon.com/dp/B0F2WMRTYB?tag=padel02-20" type="affiliate" productName="Wilson Bela V3" className="text-padel-green hover:underline" target="_blank" rel="noopener noreferrer">Wilson Bela V3</TrackedLink></td>
                      <td className="py-3 pr-4 text-stone-600">$399.00</td>
                      <td className="py-3 pr-4 text-stone-600">Diamond</td>
                      <td className="py-3 pr-4 font-medium text-stone-700">9/10</td>
                      <td className="py-3 text-stone-600">Advanced precision attackers</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="py-3 pr-4"><TrackedLink href="https://www.amazon.com/dp/B0DHSVNSRK?tag=padel02-20" type="affiliate" productName="NOX AT10 Genius Attack" className="text-padel-green hover:underline" target="_blank" rel="noopener noreferrer">NOX AT10 Genius Attack 12K</TrackedLink></td>
                      <td className="py-3 pr-4 text-stone-600">$229.99</td>
                      <td className="py-3 pr-4 text-stone-600">Diamond</td>
                      <td className="py-3 pr-4 font-medium text-stone-700">8/10</td>
                      <td className="py-3 text-stone-600">Developing attackers</td>
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
                  <h3 className="font-semibold text-foreground mb-2">Do power rackets make your smashes faster?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">On clean contact, yes. Head-heavy balance puts more mass behind the ball at the top of the face &mdash; right where you strike a full smash &mdash; and firm cores plus stiff carbon faces return energy faster than soft setups. The catch is the word <em>clean</em>: catch the ball an inch below the sweet spot and a power racket gives back less than a forgiving round frame would. Power rackets amplify good technique; they don&apos;t create pace out of nothing.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">Are power padel rackets bad for tennis elbow?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">They&apos;re the harshest category for your arm, honestly. Head-heavy balance plus a firm core transmits more shock to the wrist and elbow on every hit, and the comfort scores in this guide (mostly 4&ndash;6 out of 10) reflect that. If you have any history of elbow or shoulder pain, a round or soft-teardrop racket with a low balance point is a much kinder choice &mdash; power isn&apos;t worth an injury layoff.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">What shape are power padel rackets?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Almost always diamond &mdash; every racket in this guide is one. Diamond frames stack their mass high in the head, which puts weight behind the ball exactly where you make contact on overheads. Some aggressive teardrops with firm cores also qualify, trading a little pop for a slightly bigger sweet spot. Our <Link href="/blog/padel-racket-shapes-explained" className="text-padel-green hover:underline">racket shapes guide</Link> breaks down the geometry in detail.</p>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">Can intermediates use a power racket?</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Yes, with caveats. You need consistent contact and good racket-head speed before a diamond shape helps more than it hurts. If that&apos;s you, the Adidas Metalbone HRD+ 3.3 and the NOX AT10 Genius Attack 12K are the two picks in this guide designed with upper-intermediates in mind &mdash; both come from our intermediate testing lineup. The HEAD Extreme Pro, Babolat Technical Viper, and Wilson Bela V3 are pro-level tools that punish developing technique.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* Dark Section: Keep Reading (outside article) */}
      <div className="grain bg-court">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-lg font-bold text-white mb-4">Keep Reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/padel-racket-shapes-explained" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Racket Shapes Explained</h3>
              <p className="text-sm text-stone-400 mt-1">Round vs teardrop vs diamond &mdash; what shape does to your game &rarr;</p>
            </Link>
            <Link href="/blog/best-padel-rackets-2026" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Best Pro Rackets (2026)</h3>
              <p className="text-sm text-stone-400 mt-1">Top 5 flagship rackets from $250&ndash;$400 &rarr;</p>
            </Link>
            <Link href="/blog/best-padel-rackets-intermediate" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Best Intermediate Rackets (2026)</h3>
              <p className="text-sm text-stone-400 mt-1">5 upgrade picks from $170&ndash;$280 &rarr;</p>
            </Link>
            <Link href="/blog/best-padel-rackets-control" className="block border border-stone-700 rounded-lg p-4 hover:border-turf/50 transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider text-turf">EQUIPMENT</span>
              <h3 className="font-semibold text-white mt-1">Best Control Rackets</h3>
              <p className="text-sm text-stone-400 mt-1">The other side of the coin &mdash; precision-first picks &rarr;</p>
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
