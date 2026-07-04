import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Does It Cost to Build a Padel Court? (2026)",
  description: "How much does it cost to build a padel court in 2026? Realistic US ranges for the court kit, concrete slab, lighting, indoor builds, and ongoing costs.",
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/blog/padel-court-cost",
  },
  openGraph: {
    title: "How Much Does It Cost to Build a Padel Court? (2026)",
    description: "Realistic US cost ranges for building a padel court — the court kit, concrete slab, lighting, indoor vs outdoor, shipping, and ongoing costs.",
    url: "https://www.padelcourtsfinder.com/blog/padel-court-cost",
    siteName: "Padel Courts Finder",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Does It Cost to Build a Padel Court? (2026)",
    description: "Realistic US cost ranges for building a padel court — kit, slab, lighting, indoor vs outdoor, and ongoing costs.",
  },
};

export default function PadelCourtCostPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Much Does It Cost to Build a Padel Court? (2026)",
    "description": "Realistic US cost ranges for building a padel court — the court kit, concrete slab, lighting, indoor vs outdoor builds, shipping, and ongoing operating costs.",
    "datePublished": "2026-07-04T00:00:00Z",
    "dateModified": "2026-07-04T00:00:00Z",
    "author": { "@type": "Organization", "name": "Padel Courts Finder", "url": "https://www.padelcourtsfinder.com" },
    "publisher": { "@type": "Organization", "name": "Padel Courts Finder", "logo": { "@type": "ImageObject", "url": "https://www.padelcourtsfinder.com/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.padelcourtsfinder.com/blog/padel-court-cost" }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does one padel court cost?",
        "acceptedAnswer": { "@type": "Answer", "text": "For an outdoor court in the US, realistic all-in budgets typically land between roughly $40,000 and $75,000 per court once you include the court kit ($20,000–$30,000), concrete slab, lighting, shipping, and installation. Indoor courts run far higher — often $70,000–$100,000+ per court before the building itself — because the enclosure dominates the budget." }
      },
      {
        "@type": "Question",
        "name": "How much land do you need for a padel court?",
        "acceptedAnswer": { "@type": "Answer", "text": "The playing area is fixed at 20m x 10m (about 66ft x 33ft), but the total footprint is larger once you add structural clearance, walkways, and access around the enclosure. Most builders plan on a pad meaningfully bigger than the court itself, and multi-court layouts need additional circulation space between courts." }
      },
      {
        "@type": "Question",
        "name": "Is a padel club profitable?",
        "acceptedAnswer": { "@type": "Answer", "text": "It can be, but it depends almost entirely on utilization and local market depth. Courts that stay booked through peak hours at healthy rates can pay back construction costs in a few years; courts in thin markets or bad locations can sit empty. Run conservative utilization numbers before you build, not optimistic ones." }
      },
      {
        "@type": "Question",
        "name": "Can you build a padel court outdoors in cold climates?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — the structures handle weather fine — but your revenue season shrinks with the playing season. In cold or wet climates most operators either budget for a canopy over outdoor courts or go indoor, trading higher construction cost for year-round bookings and premium rates." }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      <div className="h-1 bg-padel-green" />

      {/* Hero */}
      <header className="grain bg-court">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative">
          <div className="mb-5">
            <Link href="/blog" className="text-stone-400 hover:text-turf text-sm">&larr; Back to Blog</Link>
          </div>
          <span className="inline-block bg-padel-green text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">How-To</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            How Much Does It Cost to Build a Padel Court? (2026)
          </h1>
          <p className="text-lg text-stone-400 mt-3">Real numbers for entrepreneurs and club owners — and why quotes vary so much</p>
          <div className="text-sm text-stone-500 mt-4">
            <span>July 4, 2026</span>
            <span className="mx-2">&bull;</span>
            <span>8 min read</span>
          </div>
          <div className="text-sm text-stone-500 mt-1">By the Padel Courts Finder editorial team</div>
        </div>
      </header>

      <article>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          {/* Intro / headline answer */}
          <section>
            <p className="text-stone-700 leading-relaxed">
              Here&apos;s the short answer: for a single <strong>outdoor</strong> padel court in the US, realistic
              all-in budgets today land somewhere between roughly <strong>$40,000 and $75,000 per court</strong>.
              US installers typically quote $20,000–$30,000 for the court kit itself, but published project
              breakdowns show the finished number climbing well past that once concrete, lighting, shipping, and
              labor are in. Indoor projects are a different animal entirely — often $70,000–$100,000+ per court
              before you&apos;ve paid for the building over it.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              Why do quotes vary so wildly? Because the court kit — the part manufacturers advertise — is often
              less than half the real cost. Site preparation, foundations, freight, and climate decisions do the
              rest. Below is where the money actually goes, based on published manufacturer pricing and installer
              project breakdowns, so you can pressure-test any quote you receive.
            </p>
          </section>

          {/* Court structure */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">The court structure itself: glass, steel, turf</h2>
            <p className="text-stone-700 leading-relaxed">
              The kit is the visible part: a galvanized steel frame, 12mm tempered glass walls, mesh panels, and
              an artificial turf playing surface. Published manufacturer pricing for a quality outdoor kit runs
              roughly <strong>$20,000–$30,000</strong> depending on the model — panoramic glass configurations
              (fewer steel posts, more glass) sit at the top of that range, standard configurations at the bottom.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              Where the kit comes from matters. Imported courts from established European and Asian manufacturers
              are often cheaper on the sticker but carry heavier freight and longer lead times; kits stocked or
              fabricated domestically cost more upfront but ship faster and cheaper. Coastal and hurricane-zone
              sites may also need upgraded coatings and engineering, which adds to the base price. Industry cost
              guides consistently note that the enclosure — not the playing surface — is the single largest
              component of the kit, often 40–60% of the total project.
            </p>
          </section>

          {/* Site prep */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Site preparation and the concrete slab: the hidden cost</h2>
            <p className="text-stone-700 leading-relaxed">
              This is the line item that surprises first-time builders. A padel court needs a reinforced concrete
              slab — typically 4–8 inches thick with rebar — laid dead flat over a properly drained, compacted
              base. Published cost guides put foundation work anywhere from <strong>$5,000 to $20,000+</strong> for
              a straightforward site, and one detailed US installer breakdown showed excavation, cement, and labor
              alone exceeding <strong>$30,000</strong> on a single-court project. Some installers estimate the slab
              and site work at around 40% of the entire budget.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              The spread depends on what&apos;s under your site. Flat, accessible land with good soil is cheap;
              sloped lots, poor drainage, or sites needing significant excavation are not. A geotechnical study
              (often quoted at $1,000–$3,000) is money well spent before you sign anything.
            </p>
          </section>

          {/* Lighting */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Lighting</h2>
            <p className="text-stone-700 leading-relaxed">
              If you want evening bookings — and evening is when working adults play — you need proper LED
              lighting. Published ranges for a complete system run roughly <strong>$2,000–$15,000 per court</strong>:
              basic pole-mounted LED packages sit at the low end, while competition-standard illumination with
              electrical trenching and controls pushes toward the top. Skimping here is false economy; evening
              hours are usually your highest-revenue slots.
            </p>
          </section>

          {/* Indoor vs outdoor */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Indoor vs outdoor: the building dominates</h2>
            <p className="text-stone-700 leading-relaxed">
              Go indoor and the math changes completely. Industry guides put indoor builds at
              <strong> $70,000–$100,000+ per court</strong> — several times the outdoor figure — and that&apos;s before
              accounting for the warehouse lease or purchase, HVAC, and interior fit-out. Ceiling height is the
              gotcha: you need generous clearance for lobs, which rules out many existing buildings.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              The middle path is a canopy or fabric structure over outdoor courts. Published pricing for full
              weather-protection structures runs roughly <strong>$50,000–$85,000 per court</strong> — not cheap,
              but it extends the season dramatically in wet or hot climates without full building costs. Indoor
              and covered courts also command 20–40% higher hourly rates in most markets, so the premium can pay
              for itself where winters are real.
            </p>
          </section>

          {/* Permits */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Permits and zoning</h2>
            <p className="text-stone-700 leading-relaxed">
              Budget roughly <strong>5% of project cost</strong> for permits, design, and professional fees,
              per published installer estimates — but the real cost is time. Padel is new enough that many US
              municipalities have no category for it, so expect education, variance hearings in some
              jurisdictions, and questions about lighting spill and noise from glass walls. Start zoning
              conversations before you order steel, not after.
            </p>
          </section>

          {/* Shipping & installation */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Shipping and installation</h2>
            <p className="text-stone-700 leading-relaxed">
              A padel court arrives as several tons of steel and glass. Installer breakdowns put freight at
              under 5% of project cost for US-stocked courts but <strong>10–15% for imported kits</strong> — one
              published single-court example showed around $8,000 in international and local shipping alone.
              Professional installation typically adds about 15% of project cost and takes 3–4 days per court
              once the slab has cured (the slab itself needs 7–10 days of prep). Multi-court projects get
              meaningfully cheaper per court: one slab pour, one crew mobilization, one freight container doing
              double duty.
            </p>
          </section>

          {/* Ongoing costs */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Ongoing costs: the part nobody quotes you</h2>
            <ul className="space-y-3 text-stone-700 leading-relaxed list-disc pl-5">
              <li><strong>Turf replacement.</strong> The playing surface is a wear item. Manufacturers generally cite a 5–10 year life depending on traffic, with published replacement costs in the mid-four to low-five figures per court. Busy commercial courts sit at the short end of that cycle.</li>
              <li><strong>Balls and equipment.</strong> Padel balls lose pressure fast and demo rackets take abuse. Small individually, constant in aggregate.</li>
              <li><strong>Booking software.</strong> A monthly SaaS cost, and non-negotiable — utilization is your whole business, and you can&apos;t maximize what you can&apos;t schedule.</li>
              <li><strong>Insurance.</strong> Liability coverage for a racquet sport played inside glass walls. Get quotes early; they vary by state and setup.</li>
              <li><strong>Staffing.</strong> The biggest ongoing lever. Some clubs run nearly staff-free with app-based access; others build revenue through coaching programs that need pros on payroll.</li>
            </ul>
          </section>

          {/* Revenue math */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">The revenue math: a sketch</h2>
            <p className="text-stone-700 leading-relaxed">
              Court rental economics come down to three numbers: <strong>bookable hours &times; hourly rate &times;
              utilization</strong>. US clubs commonly charge $30–$60 per court-hour depending on market and whether
              the court is covered, and that fee is split across four players — which is why padel fills courts
              more easily than tennis.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              A deliberately conservative illustration — <em>illustrative only, not a projection</em>: a court
              bookable 14 hours a day at $40/hour running 35% average utilization generates roughly $196 per day,
              or about $70,000 a year — against an outdoor build cost in the $40,000–$75,000 range. Real clubs
              see utilization concentrated in evenings and weekends, and mature clubs in strong markets report
              much higher peak-hour occupancy. The lesson isn&apos;t any specific payback number; it&apos;s that
              utilization, not construction cost, decides whether the project works. Model your local demand
              honestly before you pour concrete.
            </p>
          </section>

          {/* US notes */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">The US market in 2026: still early</h2>
            <p className="text-stone-700 leading-relaxed">
              Our directory currently tracks <strong>312+ clubs across 37 states</strong> — a number that keeps
              climbing but remains tiny against padel&apos;s footprint in Spain or Argentina, where a single city
              can out-court entire US regions. Franchise groups and venture-backed chains are moving fastest in
              Florida, Texas, California, and the Northeast metros, often signing multi-site deals.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              That&apos;s exactly why the opportunity is still real for independent operators: most American metros
              have a handful of courts or none at all, and the first well-run club in a market tends to own that
              market&apos;s community — leagues, coaching, corporate events — before competitors arrive. The window
              where you can be first is still open in a lot of places. It won&apos;t stay open forever.
            </p>
          </section>

          {/* CTA */}
          <section>
            <div className="bg-white border border-stone-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Building a club — or already running one?</h2>
              <p className="text-stone-700 leading-relaxed">
                Get in front of players searching for courts in your area.{" "}
                <Link href="/list-your-court" className="text-padel-green font-semibold hover:underline">List your club on Padel Courts Finder</Link>{" "}
                — it&apos;s how players across 37 states find where to play. And if you&apos;re a manufacturer,
                installer, or brand serving club owners, check out our{" "}
                <Link href="/advertise" className="text-padel-green font-semibold hover:underline">partnership options</Link>.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">How much does one padel court cost?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">For an outdoor court in the US, realistic all-in budgets typically land between roughly $40,000 and $75,000 once you include the court kit ($20,000–$30,000), concrete slab, lighting, shipping, and installation. Indoor courts run far higher — often $70,000–$100,000+ per court before the building itself — because the enclosure dominates the budget.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">How much land do you need for a padel court?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">The playing area is fixed at 20m &times; 10m (about 66ft &times; 33ft), but the total footprint is larger once you add structural clearance, walkways, and access around the enclosure. Plan on a pad meaningfully bigger than the court itself, and multi-court layouts need circulation space between courts.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Is a padel club profitable?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">It can be, but it depends almost entirely on utilization and local market depth. Courts that stay booked through peak hours at healthy rates can pay back construction costs in a few years; courts in thin markets or bad locations can sit empty. Run conservative utilization numbers before you build, not optimistic ones.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Can you build a padel court outdoors in cold climates?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Yes — the structures handle weather fine — but your revenue season shrinks with the playing season. In cold or wet climates most operators either budget for a canopy over outdoor courts or go indoor, trading higher construction cost for year-round bookings and premium rates.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Keep Reading */}
        <section className="grain bg-court mt-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-white mb-6">Keep Reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/list-your-court" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">List Your Club</div>
                <p className="text-stone-400 text-sm mt-1">Get found by players searching in your market</p>
              </Link>
              <Link href="/blog/how-to-choose-padel-club" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">How to Choose a Padel Club</div>
                <p className="text-stone-400 text-sm mt-1">What separates a great club from a mediocre one</p>
              </Link>
              <Link href="/search" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Browse 312+ Clubs</div>
                <p className="text-stone-400 text-sm mt-1">Every padel club we track across 37 states</p>
              </Link>
              <Link href="/about" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">About Padel Courts Finder</div>
                <p className="text-stone-400 text-sm mt-1">Why we built the US padel directory</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
