import Link from "next/link";
import type { Metadata } from "next";
import { TrackedLink } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Padel Gifts (2026): What Players Actually Want, at Every Budget",
  description: "The best padel gifts in 2026 — for her, for him, and under $50. Every pick is gear we've verified and recommend on this site, from $14 stocking stuffers to flagship rackets.",
  alternates: { canonical: "https://www.padelcourtsfinder.com/blog/padel-gifts" },
  openGraph: { title: "Padel Gifts (2026): What Players Actually Want, at Every Budget", description: "The best padel gifts in 2026 — for her, for him, and under $50. Every pick is gear we've verified and recommend on this site, from $14 stocking stuffers to flagship rackets.", url: "https://www.padelcourtsfinder.com/blog/padel-gifts", siteName: "Padel Courts Finder", type: "article" },
  twitter: { card: "summary_large_image", title: "Padel Gifts (2026): What Players Actually Want, at Every Budget", description: "The best padel gifts in 2026 — for her, for him, and under $50. Every pick is gear we've verified and recommend on this site, from $14 stocking stuffers to flagship rackets." },
};

const articleData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Padel Gifts (2026): What Players Actually Want, at Every Budget",
  "description": "The best padel gifts in 2026 — for her, for him, and under $50. Every pick is gear we've verified and recommend on this site, from $14 stocking stuffers to flagship rackets.",
  "datePublished": "2026-07-31T00:00:00Z",
  "dateModified": "2026-07-31T00:00:00Z",
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
    "@id": "https://www.padelcourtsfinder.com/blog/padel-gifts"
  }
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a good padel gift for her?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Court shoes are the sleeper pick — most players never upgrade their own footwear, and the HEAD Women's Sprint Pro 4.0 ($89) is the shoe we recommend in our buying guide. The Babolat Court Lite backpack ($60) is the safe stylish option, and a fresh-strung round racket like the Wilson Optix V1 ($109) fits a newer player."
      }
    },
    {
      "@type": "Question",
      "name": "What are the best padel gifts under $50?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A sleeve of HEAD Padel Pro S balls (~$14) — the ball most US clubs play — or a 12-pack of overgrips ($27-35). Unglamorous, guaranteed used. Every padel player burns through both."
      }
    },
    {
      "@type": "Question",
      "name": "Should I gift a padel racket if I don't know their level?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stick to forgiving round-shaped rackets (Wilson Optix V1, NOX ML10 Pro Cup) — they suit the widest range of players. Avoid diamond-shaped 'pro' rackets as gifts; they punish anyone who isn't advanced. When in doubt, shoes or a bag are safer."
      }
    },
    {
      "@type": "Question",
      "name": "What do you get a padel player who has everything?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Consumables and court time: fresh balls, premium overgrips, or covering their next block of court bookings or clinics. Use our court finder to locate their club's booking page."
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
        "name": "HEAD Women's Sprint Pro 4.0 Shoes",
        "image": "https://www.padelcourtsfinder.com/og/default.png",
        "offers": {
          "@type": "Offer",
          "price": "89.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://www.amazon.com/dp/B0DQKHSSZB?tag=padel02-20"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Product",
        "name": "Babolat Court Lite Padel Backpack",
        "image": "https://www.padelcourtsfinder.com/og/default.png",
        "offers": {
          "@type": "Offer",
          "price": "59.95",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://www.amazon.com/dp/B0F2YBVGMG?tag=padel02-20"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Product",
        "name": "Wilson Optix V1 Padel Racket",
        "image": "https://www.padelcourtsfinder.com/og/default.png",
        "offers": {
          "@type": "Offer",
          "price": "109.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://www.amazon.com/dp/B0DX2M3JYY?tag=padel02-20"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Product",
        "name": "HEAD Men's Sprint Pro 4.0 Shoes",
        "image": "https://www.padelcourtsfinder.com/og/default.png",
        "offers": {
          "@type": "Offer",
          "price": "129.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://www.amazon.com/dp/B0G2TH1X7V?tag=padel02-20"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Product",
        "name": "HEAD Tour Racquet Bag M",
        "image": "https://www.padelcourtsfinder.com/og/default.png",
        "offers": {
          "@type": "Offer",
          "price": "99.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://www.amazon.com/dp/B0G8RX2824?tag=padel02-20"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Product",
        "name": "NOX Pro Cup USPA Edition",
        "image": "https://www.padelcourtsfinder.com/og/default.png",
        "offers": {
          "@type": "Offer",
          "price": "119.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://www.amazon.com/dp/B0F1ZVM7Y5?tag=padel02-20"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "Product",
        "name": "HEAD Padel Pro S Balls (3-can)",
        "image": "https://www.padelcourtsfinder.com/og/default.png",
        "offers": {
          "@type": "Offer",
          "price": "13.91",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://www.amazon.com/dp/B07D56XDNL?tag=padel02-20"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 8,
      "item": {
        "@type": "Product",
        "name": "Wilson Pro Overgrip 12-Pack",
        "image": "https://www.padelcourtsfinder.com/og/default.png",
        "offers": {
          "@type": "Offer",
          "price": "27.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://www.amazon.com/dp/B002GUEXTQ?tag=padel02-20"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 9,
      "item": {
        "@type": "Product",
        "name": "Babolat VS Overgrip 12-Pack",
        "image": "https://www.padelcourtsfinder.com/og/default.png",
        "offers": {
          "@type": "Offer",
          "price": "35.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://www.amazon.com/dp/B018SC9APW?tag=padel02-20"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 10,
      "item": {
        "@type": "Product",
        "name": "NOX ML10 Pro Cup Rough Surface",
        "image": "https://www.padelcourtsfinder.com/og/default.png",
        "offers": {
          "@type": "Offer",
          "price": "169.99",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://www.amazon.com/dp/B0DWTCG1PL?tag=padel02-20"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 11,
      "item": {
        "@type": "Product",
        "name": "NOX AT10 Genius 18K",
        "image": "https://www.padelcourtsfinder.com/og/default.png",
        "offers": {
          "@type": "Offer",
          "price": "272.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://www.amazon.com/dp/B0DHT1DVW1?tag=padel02-20"
        }
      }
    }
  ]
};

export default function PadelGiftsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListData) }} />
      <div className="h-1 bg-padel-green" />
      <header className="grain bg-court">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative">
          <div className="mb-5"><Link href="/blog" className="text-stone-400 hover:text-turf text-sm">&larr; Back to Blog</Link></div>
          <span className="inline-block bg-padel-green text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">Equipment</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Padel Gifts: What Players Actually Want</h1>
          <p className="text-lg text-stone-400 mt-3">For her, for him, and under $50 — every pick verified and recommended on this site</p>
          <div className="text-sm text-stone-500 mt-4"><span>Updated July 31, 2026</span><span className="mx-2">&bull;</span><span>6 min read</span></div>
          <div className="text-sm text-stone-500 mt-1">By the Padel Courts Finder editorial team</div>
        </div>
      </header>
      <article>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          <section>
            <p className="text-stone-700 leading-relaxed">
              Every pick here is gear we already recommend elsewhere on this site — the same rackets, shoes, and
              accessories from our tested buying guides, organized by who you&apos;re shopping for and what you want
              to spend. No filler, no mystery brands: if it&apos;s on this page, a padel player will actually use it.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mt-4 bg-white border border-stone-200 rounded-lg p-4">
              Shopping seasonally? We also keep dedicated <Link href="/blog/padel-gifts-mothers-day-2026" className="text-padel-green hover:underline">Mother&apos;s Day</Link> and{" "}
              <Link href="/blog/padel-gifts-fathers-day-2026" className="text-padel-green hover:underline">Father&apos;s Day</Link> guides.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Padel Gifts for Her</h2>
            <div className="space-y-5">
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-foreground">HEAD Women's Sprint Pro 4.0 Shoes</h3>
                  <div className="text-padel-green font-bold whitespace-nowrap">$89.00</div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mt-2">Proper padel footwear is the upgrade most players never buy themselves — herringbone grip, lateral support, reinforced toe. If she plays weekly, this beats any accessory.</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <TrackedLink href="https://www.amazon.com/dp/B0DQKHSSZB?tag=padel02-20" type="affiliate" productName="HEAD Women's Sprint Pro 4.0 Shoes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-padel-green text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-padel-green/90 transition-colors">Check price on Amazon</TrackedLink>
                </div>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-foreground">Babolat Court Lite Padel Backpack</h3>
                  <div className="text-padel-green font-bold whitespace-nowrap">$59.95</div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mt-2">Racket-ready backpack that doesn&apos;t look like gym kit — dedicated racket sleeve, shoe compartment, and clean styling she can carry to work and the court.</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <TrackedLink href="https://www.amazon.com/dp/B0F2YBVGMG?tag=padel02-20" type="affiliate" productName="Babolat Court Lite Padel Backpack" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-padel-green text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-padel-green/90 transition-colors">Check price on Amazon</TrackedLink>
                </div>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-foreground">Wilson Optix V1 Padel Racket</h3>
                  <div className="text-padel-green font-bold whitespace-nowrap">$109.00</div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mt-2">A forgiving round racket that suits new and improving players — a confident gift if she&apos;s been playing with a borrowed or entry frame.</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <TrackedLink href="https://www.amazon.com/dp/B0DX2M3JYY?tag=padel02-20" type="affiliate" productName="Wilson Optix V1 Padel Racket" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-padel-green text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-padel-green/90 transition-colors">Check price on Amazon</TrackedLink>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Padel Gifts for Him</h2>
            <div className="space-y-5">
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-foreground">HEAD Men's Sprint Pro 4.0 Shoes</h3>
                  <div className="text-padel-green font-bold whitespace-nowrap">$129.00</div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mt-2">The court shoe we recommend in our shoes guide — grip for sand-dressed turf, wrapped toe for drag, lateral cage for hard cuts. The gift that prevents the twisted ankle.</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <TrackedLink href="https://www.amazon.com/dp/B0G2TH1X7V?tag=padel02-20" type="affiliate" productName="HEAD Men's Sprint Pro 4.0 Shoes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-padel-green text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-padel-green/90 transition-colors">Check price on Amazon</TrackedLink>
                </div>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-foreground">HEAD Tour Racquet Bag M</h3>
                  <div className="text-padel-green font-bold whitespace-nowrap">$99.00</div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mt-2">Fits rackets, shoes, and kit with room to spare — the bag for the guy still stuffing a racket into a gym duffel.</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <TrackedLink href="https://www.amazon.com/dp/B0G8RX2824?tag=padel02-20" type="affiliate" productName="HEAD Tour Racquet Bag M" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-padel-green text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-padel-green/90 transition-colors">Check price on Amazon</TrackedLink>
                </div>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-foreground">NOX Pro Cup USPA Edition</h3>
                  <div className="text-padel-green font-bold whitespace-nowrap">$119.00</div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mt-2">The US Padel Association edition of NOX&apos;s beloved Pro Cup mold — a serious step-up racket at a giftable price.</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <TrackedLink href="https://www.amazon.com/dp/B0F1ZVM7Y5?tag=padel02-20" type="affiliate" productName="NOX Pro Cup USPA Edition" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-padel-green text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-padel-green/90 transition-colors">Check price on Amazon</TrackedLink>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Best Padel Gifts Under $50</h2>
            <div className="space-y-5">
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-foreground">HEAD Padel Pro S Balls (3-can)</h3>
                  <div className="text-padel-green font-bold whitespace-nowrap">$13.91</div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mt-2">The ball most US clubs play. A sleeve of fresh cans is the stocking-stuffer every padel player actually uses.</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <TrackedLink href="https://www.amazon.com/dp/B07D56XDNL?tag=padel02-20" type="affiliate" productName="HEAD Padel Pro S Balls (3-can)" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-padel-green text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-padel-green/90 transition-colors">Check price on Amazon</TrackedLink>
                </div>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-foreground">Wilson Pro Overgrip 12-Pack</h3>
                  <div className="text-padel-green font-bold whitespace-nowrap">$27.00</div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mt-2">The most replaced item in padel. Twelve fresh grips is months of tack — unglamorous, guaranteed useful.</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <TrackedLink href="https://www.amazon.com/dp/B002GUEXTQ?tag=padel02-20" type="affiliate" productName="Wilson Pro Overgrip 12-Pack" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-padel-green text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-padel-green/90 transition-colors">Check price on Amazon</TrackedLink>
                </div>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-foreground">Babolat VS Overgrip 12-Pack</h3>
                  <div className="text-padel-green font-bold whitespace-nowrap">$35.00</div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mt-2">The premium overgrip for players picky about feel — thinner and tackier than standard grips.</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <TrackedLink href="https://www.amazon.com/dp/B018SC9APW?tag=padel02-20" type="affiliate" productName="Babolat VS Overgrip 12-Pack" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-padel-green text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-padel-green/90 transition-colors">Check price on Amazon</TrackedLink>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">The Splurge Tier</h2>
            <div className="space-y-5">
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-foreground">NOX ML10 Pro Cup Rough Surface</h3>
                  <div className="text-padel-green font-bold whitespace-nowrap">$169.99</div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mt-2">Our highest-rated racket under $200 — pro-level control in a forgiving round shape. The safe premium racket gift for any improving player.</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <TrackedLink href="https://www.amazon.com/dp/B0DWTCG1PL?tag=padel02-20" type="affiliate" productName="NOX ML10 Pro Cup Rough Surface" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-padel-green text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-padel-green/90 transition-colors">Check price on Amazon</TrackedLink>
                <Link href="/blog/nox-ml10-pro-cup-review" className="inline-flex items-center border border-stone-300 text-foreground font-semibold text-sm px-4 py-2 rounded-lg hover:border-padel-green hover:text-padel-green transition-colors">Read our review</Link>
                </div>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-foreground">NOX AT10 Genius 18K</h3>
                  <div className="text-padel-green font-bold whitespace-nowrap">$272.00</div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mt-2">Tapia&apos;s flagship and the most versatile pro frame we&apos;ve tested. For the player who&apos;s earned it.</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <TrackedLink href="https://www.amazon.com/dp/B0DHT1DVW1?tag=padel02-20" type="affiliate" productName="NOX AT10 Genius 18K" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-padel-green text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-padel-green/90 transition-colors">Check price on Amazon</TrackedLink>
                <Link href="/blog/nox-at10-genius-18k-review" className="inline-flex items-center border border-stone-300 text-foreground font-semibold text-sm px-4 py-2 rounded-lg hover:border-padel-green hover:text-padel-green transition-colors">Read our review</Link>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What is a good padel gift for her?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Court shoes are the sleeper pick — most players never upgrade their own footwear, and the HEAD Women&apos;s Sprint Pro 4.0 ($89) is the shoe we recommend in our buying guide. The Babolat Court Lite backpack ($60) is the safe stylish option, and a fresh-strung round racket like the Wilson Optix V1 ($109) fits a newer player.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What are the best padel gifts under $50?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">A sleeve of HEAD Padel Pro S balls (~$14) — the ball most US clubs play — or a 12-pack of overgrips ($27-35). Unglamorous, guaranteed used. Every padel player burns through both.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Should I gift a padel racket if I don&apos;t know their level?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Stick to forgiving round-shaped rackets (Wilson Optix V1, NOX ML10 Pro Cup) — they suit the widest range of players. Avoid diamond-shaped &apos;pro&apos; rackets as gifts; they punish anyone who isn&apos;t advanced. When in doubt, shoes or a bag are safer.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What do you get a padel player who has everything?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Consumables and court time: fresh balls, premium overgrips, or covering their next block of court bookings or clinics. Use our court finder to locate their club&apos;s booking page.</p>
              </div>
            </div>
          </section>
        </div>
        <section className="grain bg-court mt-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-white mb-6">Keep Reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/best-padel-rackets-beginners" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Beginner Rackets</div>
                <p className="text-stone-400 text-sm mt-1">If the gift is a first racket, start here</p>
              </Link>
              <Link href="/blog/best-padel-shoes" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Padel Shoes</div>
                <p className="text-stone-400 text-sm mt-1">The upgrade most players never buy themselves</p>
              </Link>
              <Link href="/blog/best-padel-bags" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Padel Bags</div>
                <p className="text-stone-400 text-sm mt-1">Backpacks and tour bags compared</p>
              </Link>
              <Link href="/blog/padel-accessories" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Padel Accessories</div>
                <p className="text-stone-400 text-sm mt-1">Grips, balls, and the small stuff that matters</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
