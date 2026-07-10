import Link from "next/link";
import type { Metadata } from "next";
import { TrackedLink } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "The Best Padel Accessories Under $30 (2026)",
  description: "The cheap gear that actually matters in padel: overgrips, fresh balls, racket protectors, and wristbands — what to buy under $30 and what to skip.",
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/blog/padel-accessories",
  },
  openGraph: {
    title: "The Best Padel Accessories Under $30 (2026)",
    description: "The cheap gear that actually matters in padel: overgrips, fresh balls, racket protectors, and wristbands — what to buy under $30 and what to skip.",
    url: "https://www.padelcourtsfinder.com/blog/padel-accessories",
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Padel Accessories Under $30 (2026)",
    description: "The cheap gear that actually matters in padel — overgrips, fresh balls, protectors, and wristbands under $30.",
  },
};

export default function PadelAccessoriesPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Best Padel Accessories Under $30 (2026)",
    "description": "The cheap gear that actually matters in padel: overgrips, fresh balls, racket protectors, and wristbands — what to buy under $30 and what to skip.",
    "datePublished": "2026-07-04T00:00:00Z",
    "dateModified": "2026-07-04T00:00:00Z",
    "author": { "@type": "Organization", "name": "Padel Courts Finder", "url": "https://www.padelcourtsfinder.com" },
    "publisher": { "@type": "Organization", "name": "Padel Courts Finder", "logo": { "@type": "ImageObject", "url": "https://www.padelcourtsfinder.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.padelcourtsfinder.com/blog/padel-accessories" }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How often should I change my overgrip?",
        "acceptedAnswer": { "@type": "Answer", "text": "Every few sessions if you play regularly. Once the grip feels slick, shiny, or compressed, it has stopped absorbing sweat and it's time to rewrap. At roughly $2 per grip from a 12-pack, there's no reason to squeeze extra weeks out of a dead one." }
      },
      {
        "@type": "Question",
        "name": "What accessories do I actually need for padel?",
        "acceptedAnswer": { "@type": "Answer", "text": "Four things cover almost everyone: spare overgrips, a can of fresh balls, a racket protector strip, and a wristband or small towel for sweat. All four together cost less than $50 and make a bigger difference to a typical session than most racket upgrades." }
      },
      {
        "@type": "Question",
        "name": "Why do padel rackets have wrist straps?",
        "acceptedAnswer": { "@type": "Answer", "text": "Safety — and the rules. Official padel regulations require players to wear the wrist strap during play, because a sweaty racket flying out of your hand on a smash is genuinely dangerous on a court enclosed by glass with three other people inside." }
      },
      {
        "@type": "Question",
        "name": "What should I keep in my padel bag?",
        "acceptedAnswer": { "@type": "Answer", "text": "Two or three spare overgrips, a fresh can of balls, a small towel, a wristband, and a spare protector strip. Add water, sunscreen for outdoor courts, and you're covered for any session." }
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
          "name": "Wilson Pro Overgrip 12-Pack",
          "description": "Tacky, sweat-absorbing overgrips — the club standard",
          "offers": { "@type": "Offer", "price": "27.00", "priceCurrency": "USD", "url": "https://www.amazon.com/dp/B002GUEXTQ?tag=padel02-20" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "image": "https://www.padelcourtsfinder.com/og/default.png",
          "name": "Babolat VS Overgrip 12-Pack",
          "description": "Thin, classic-feel overgrips that preserve handle shape",
          "offers": { "@type": "Offer", "price": "35.00", "priceCurrency": "USD", "url": "https://www.amazon.com/dp/B018SC9APW?tag=padel02-20" }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "image": "https://www.padelcourtsfinder.com/og/default.png",
          "name": "HEAD Padel Pro S Balls",
          "description": "Fresh pressurized padel balls for consistent bounce",
          "offers": { "@type": "Offer", "price": "13.91", "priceCurrency": "USD", "url": "https://www.amazon.com/dp/B07D56XDNL?tag=padel02-20" }
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListData) }} />

      <div className="h-1 bg-padel-green" />

      {/* Hero */}
      <header className="grain bg-court">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative">
          <div className="mb-5">
            <Link href="/blog" className="text-stone-400 hover:text-turf text-sm">&larr; Back to Blog</Link>
          </div>
          <span className="inline-block bg-padel-green text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">Equipment</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            The Best Padel Accessories Under $30 (2026)
          </h1>
          <p className="text-lg text-stone-400 mt-3">The cheap stuff that changes your sessions more than a new racket</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>July 4, 2026</span>
            <span className="mx-2">&bull;</span>
            <span>5 min read</span>
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

          {/* Intro */}
          <section>
            <p className="text-stone-700 leading-relaxed">
              Padel players agonize over $200 rackets and then play with a slick grip, dead balls, and a frame
              full of glass scrapes. Backwards. The accessories below cost less than a single club session each,
              and together they do more for a typical week of padel than any racket upgrade. Here&apos;s what&apos;s
              actually worth buying — and the categories where you don&apos;t need a link, just advice.
            </p>
          </section>

          {/* Overgrips */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Overgrips: the highest-ROI $2 in padel</h2>
            <p className="text-stone-700 leading-relaxed">
              Nothing you can buy improves feel per dollar like a fresh overgrip. It soaks up sweat before your
              hand slides, adds a little thickness so the handle fills your palm, and gives you back the tackiness
              a factory grip loses within weeks. If you play regularly, rewrap every few sessions — the moment
              the surface turns shiny and slick, it&apos;s done. That&apos;s why you buy them by the dozen.
            </p>
            <div className="bg-white border border-stone-200 rounded-xl p-6 mt-6">
              <div className="flex items-start justify-between gap-4 mb-1">
                <h3 className="text-lg font-bold text-foreground">Wilson Pro Overgrip 12-Pack</h3>
                <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg font-bold whitespace-nowrap">$27.00</span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                The default choice for a reason: a tacky, absorbent feel that&apos;s become the standard grip in
                racket sports. Slightly cushioned, easy to wrap, and consistent from grip to grip. If you don&apos;t
                have a strong preference, start here.
              </p>
              <TrackedLink
                href="https://www.amazon.com/dp/B002GUEXTQ?tag=padel02-20"
                type="affiliate"
                productName="Wilson Pro Overgrip 12-Pack"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 hover:shadow-md transition-all duration-200"
              >
                Check Price on Amazon &rarr;
              </TrackedLink>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-6 mt-4">
              <div className="flex items-start justify-between gap-4 mb-1">
                <h3 className="text-lg font-bold text-foreground">Babolat VS Overgrip 12-Pack</h3>
                <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg font-bold whitespace-nowrap">$35.00</span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                The classic thin option. Because it adds less bulk than a cushioned grip, the handle keeps its
                bevels and your hand stays closer to the racket. Players who like a direct, precise feel tend to
                stick with the VS once they&apos;ve tried it.
              </p>
              <TrackedLink
                href="https://www.amazon.com/dp/B018SC9APW?tag=padel02-20"
                type="affiliate"
                productName="Babolat VS Overgrip 12-Pack"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 hover:shadow-md transition-all duration-200"
              >
                Check Price on Amazon &rarr;
              </TrackedLink>
            </div>
          </section>

          {/* Fresh balls */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Fresh balls: stop practicing with dead ones</h2>
            <p className="text-stone-700 leading-relaxed">
              Padel balls are pressurized, and they start dying the moment the can is opened. A dead ball sits
              low off the glass, robs your smashes of rebound, and quietly teaches you timing that falls apart
              the moment someone opens a fresh can. Clubs often supply balls, but keeping a can in your bag means
              warm-ups and practice sessions actually resemble match conditions.
            </p>
            <div className="bg-white border border-stone-200 rounded-xl p-6 mt-6">
              <div className="flex items-start justify-between gap-4 mb-1">
                <h3 className="text-lg font-bold text-foreground">HEAD Padel Pro S Balls</h3>
                <span className="bg-stone-900 text-white px-3 py-1.5 rounded-lg font-bold whitespace-nowrap">$13.91</span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                A widely used tournament-grade ball with a lively, consistent bounce. Grab a can for your bag and
                rotate it out once the bounce fades.
              </p>
              <TrackedLink
                href="https://www.amazon.com/dp/B07D56XDNL?tag=padel02-20"
                type="affiliate"
                productName="HEAD Padel Pro S Balls"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-padel-green text-white font-medium text-sm rounded-lg hover:bg-padel-green-dark shadow-lg shadow-padel-green/25 hover:shadow-md transition-all duration-200"
              >
                Check Price on Amazon &rarr;
              </TrackedLink>
            </div>
          </section>

          {/* Protector strips */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Racket protector strips: cheap insurance for an expensive frame</h2>
            <p className="text-stone-700 leading-relaxed">
              Every padel player eventually clips the glass or scrapes the frame picking a ball off the wall.
              On a $200+ racket, an adhesive protector strip along the head is the cheapest insurance you can buy —
              it takes the scrape so your carbon doesn&apos;t. Look for a strip shaped for your frame (round,
              teardrop, and diamond heads curve differently — see our{" "}
              <Link href="/blog/padel-racket-shapes-explained" className="text-padel-green hover:underline">shapes guide</Link>),
              press it on clean and dry, and replace it once it&apos;s shredded or peeling rather than playing with
              flaps of it hanging off. We don&apos;t have a verified pick to link here, but nearly every club pro
              shop stocks strips for a few dollars — and they&apos;ll usually fit it for you on the spot.
            </p>
          </section>

          {/* Wristbands & towels */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Wristbands and towels: sweat management is safety</h2>
            <p className="text-stone-700 leading-relaxed">
              A sweaty forearm ends up on your grip, and a sweaty grip is how rackets go flying. A basic cotton
              wristband and a small towel on the fence do more for your grip security than any grip technology.
              And while we&apos;re on flying rackets: padel rules require you to wear the wrist strap during play.
              It&apos;s not decoration — on a court enclosed in glass with three other people, a launched racket is
              a real hazard. Loop it every time you step on court, and make it a habit, not a judgment call.
              No product links needed here; any brand of wristband works, and you already own a towel.
            </p>
          </section>

          {/* Court shoes teaser */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">The one thing over $30: proper court shoes</h2>
            <p className="text-stone-700 leading-relaxed">
              Everything above fits under $30. The one exception worth naming: running shoes don&apos;t belong on a
              padel court, because the sport is all lateral movement and quick stops. When you&apos;re ready to fix
              your footwork foundation, our <Link href="/blog/best-padel-shoes" className="text-padel-green hover:underline">best padel shoes guide</Link>{" "}
              breaks down what to look for and which pairs are worth it.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">How often should I change my overgrip?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Every few sessions if you play regularly. Once the grip feels slick, shiny, or compressed, it has stopped absorbing sweat and it&apos;s time to rewrap. At roughly $2 per grip from a 12-pack, there&apos;s no reason to squeeze extra weeks out of a dead one.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What accessories do I actually need for padel?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Four things cover almost everyone: spare overgrips, a can of fresh balls, a racket protector strip, and a wristband or small towel for sweat. All four together cost less than $50 and make a bigger difference to a typical session than most racket upgrades.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Why do padel rackets have wrist straps?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Safety — and the rules. Official padel regulations require players to wear the wrist strap during play, because a sweaty racket flying out of your hand on a smash is genuinely dangerous on a court enclosed by glass with three other people inside.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">What should I keep in my padel bag?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Two or three spare overgrips, a fresh can of balls, a small towel, a wristband, and a spare protector strip. Add water and sunscreen for outdoor courts and you&apos;re covered. If you&apos;re still carrying it all in a backpack, our <Link href="/blog/best-padel-bags" className="text-padel-green hover:underline">padel bags guide</Link> covers proper options.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Keep Reading */}
        <section className="grain bg-court mt-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-white mb-6">Keep Reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/best-padel-balls" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Padel Balls</div>
                <p className="text-stone-400 text-sm mt-1">Which cans keep their bounce, compared</p>
              </Link>
              <Link href="/blog/best-padel-shoes" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Padel Shoes</div>
                <p className="text-stone-400 text-sm mt-1">Court-ready soles for lateral movement</p>
              </Link>
              <Link href="/blog/best-padel-bags" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Padel Bags</div>
                <p className="text-stone-400 text-sm mt-1">Carry your racket and kit properly</p>
              </Link>
              <Link href="/blog/best-padel-rackets-beginners" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Best Beginner Rackets</div>
                <p className="text-stone-400 text-sm mt-1">5 round-shaped picks from $90–$130</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
