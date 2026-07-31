import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy a Padel Court (2026): Costs, Options & Quotes — US Guide",
  description: "What it costs to buy a padel court in the US in 2026 — kit prices ($20k-30k), full outdoor builds ($40k-75k), indoor projects, and how to get quotes without the runaround.",
  alternates: { canonical: "https://www.padelcourtsfinder.com/buy-a-padel-court" },
  openGraph: { title: "Buy a Padel Court (2026): Costs, Options & Quotes — US Guide", description: "What it costs to buy a padel court in the US in 2026 — kit prices ($20k-30k), full outdoor builds ($40k-75k), indoor projects, and how to get quotes without the runaround.", url: "https://www.padelcourtsfinder.com/buy-a-padel-court", siteName: "Padel Courts Finder", type: "article" },
  twitter: { card: "summary_large_image", title: "Buy a Padel Court (2026): Costs, Options & Quotes — US Guide", description: "What it costs to buy a padel court in the US in 2026 — kit prices ($20k-30k), full outdoor builds ($40k-75k), indoor projects, and how to get quotes without the runaround." },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to buy a padel court?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A quality outdoor court kit (steel frame, 12mm tempered glass, turf) runs roughly $20,000-$30,000 from published manufacturer pricing. A complete installed outdoor court — slab, kit, freight, installation, lighting — typically lands in the $40,000-$75,000 range. Indoor projects cost more because the building dominates the budget."
      }
    },
    {
      "@type": "Question",
      "name": "Can I buy a padel court for my backyard?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — a single outdoor court needs roughly 66 x 33 feet of usable space plus runoff, a properly engineered concrete slab, and local permits. The kit itself is the smaller half of the project; site prep and the slab are where backyard budgets usually surprise people."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to get a padel court installed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Domestically stocked kits can install in a few weeks once the slab is cured; imported kits commonly add 8-16 weeks of lead time and heavier freight. Permitting timelines vary widely by municipality and are often the real schedule driver."
      }
    },
    {
      "@type": "Question",
      "name": "Is buying a padel court a good investment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The math comes down to utilization: US clubs charge $30-$60 per court-hour split across four players. A conservatively-run outdoor court can gross on the order of $70,000/year at modest utilization — against a $40,000-$75,000 build. Demand modeling for your specific market matters more than the construction quote. Our padel court cost guide walks the full math."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I get padel court quotes in the US?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use the quote-request form on this page — tell us your site type, location, and timeline, and we'll connect you with suppliers and installers active in the US market. Padel Courts Finder tracks the US club pipeline, so we see which manufacturers are actually delivering here."
      }
    }
  ]
};

export default function BuyAPadelCourtPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <div className="h-1 bg-padel-green" />
      <header className="grain bg-court">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative">
          <span className="inline-block bg-padel-green text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">For Builders &amp; Buyers</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Buy a Padel Court: the 2026 US Guide</h1>
          <p className="text-lg text-stone-400 mt-3">Real cost ranges, what to check before you sign, and quotes without the runaround</p>
          <div className="text-sm text-stone-500 mt-4"><span>Updated July 31, 2026</span></div>
        </div>
      </header>
      <article>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          <section>
            <p className="text-stone-700 leading-relaxed">
              Whether you&apos;re a club founder, a facility owner adding courts, or building the backyard court your
              neighbors will envy, the buying process is the same three questions: what does it really cost, who
              actually delivers in the US, and what breaks budgets. We track the US padel market — every club,
              every opening, every pipeline project — so here&apos;s the straight version.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Padel court prices at a glance</h2>
            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="bg-stone-50 text-left">
                    <th className="p-3 font-semibold">What you&apos;re buying</th>
                    <th className="p-3 font-semibold">Typical range</th>
                    <th className="p-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Court kit only (outdoor)</td>
                    <td className="p-3">$20,000&ndash;$30,000</td>
                    <td className="p-3">Steel frame, 12mm glass, turf; panoramic configs at the top of the range</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Complete outdoor court, installed</td>
                    <td className="p-3">$40,000&ndash;$75,000</td>
                    <td className="p-3">Adds slab, freight, installation, lighting &mdash; site prep is the hidden cost</td>
                  </tr>
                  <tr className="border-t border-stone-100">
                    <td className="p-3 font-medium">Indoor project</td>
                    <td className="p-3">Building-dependent</td>
                    <td className="p-3">The structure dominates; the court is the cheap part</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed mt-4">
              Full breakdown — slab engineering, permits, lighting, ongoing costs, and the revenue math — in our{" "}
              <Link href="/blog/padel-court-cost" className="text-padel-green hover:underline">padel court cost guide</Link>.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Before you buy: the five checks</h2>
            <ul className="space-y-3 text-stone-700 leading-relaxed list-disc pl-5">
              <li><strong>The slab, not the kit.</strong> A padel court needs a properly engineered, level concrete base. Get the slab spec from your supplier before quoting concrete — retrofit fixes are brutal.</li>
              <li><strong>Freight and lead time.</strong> Imported kits are often cheaper on the sticker and slower to arrive (8&ndash;16 weeks is common), with freight that erases the savings. Ask what&apos;s stocked domestically.</li>
              <li><strong>Wind and weather rating.</strong> Coastal and hurricane-zone sites may need upgraded engineering and coatings. Ask for the rating in writing.</li>
              <li><strong>Permits first.</strong> Zoning, lighting ordinances, and noise rules vary by municipality and often drive the schedule more than construction does.</li>
              <li><strong>Installation references.</strong> Ask any supplier for US installs you can call. The US market is young — experience here, not in Spain, is what de-risks your project.</li>
            </ul>
          </section>
          <section id="quotes" className="bg-court grain rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Get padel court quotes</h2>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Tell us about your project and we&apos;ll connect you with suppliers and installers active in the US
              market. No spam, no obligation — we track who&apos;s actually delivering courts here.
            </p>
            <form action="https://formspree.io/f/xaqlweaw" method="POST" className="space-y-4">
              <input type="hidden" name="formType" value="court-buyer-inquiry" />
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" name="name" required placeholder="Your name" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-stone-500 text-sm" />
                <input type="email" name="email" required placeholder="Email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-stone-500 text-sm" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" name="location" required placeholder="Project location (city, state)" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-stone-500 text-sm" />
                <select name="projectType" required className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm" defaultValue="">
                  <option value="" disabled>Project type</option>
                  <option value="new-club">New club (multiple courts)</option>
                  <option value="add-courts">Adding courts to existing facility</option>
                  <option value="residential">Residential / backyard</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <textarea name="message" rows={3} placeholder="Timeline, number of courts, indoor/outdoor, anything else" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-stone-500 text-sm" />
              <button type="submit" className="bg-padel-green text-white font-semibold px-6 py-3 rounded-lg hover:bg-padel-green/90 transition-colors">Request quotes</button>
            </form>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">How much does it cost to buy a padel court?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">A quality outdoor court kit (steel frame, 12mm tempered glass, turf) runs roughly $20,000-$30,000 from published manufacturer pricing. A complete installed outdoor court — slab, kit, freight, installation, lighting — typically lands in the $40,000-$75,000 range. Indoor projects cost more because the building dominates the budget.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Can I buy a padel court for my backyard?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Yes — a single outdoor court needs roughly 66 x 33 feet of usable space plus runoff, a properly engineered concrete slab, and local permits. The kit itself is the smaller half of the project; site prep and the slab are where backyard budgets usually surprise people.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">How long does it take to get a padel court installed?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Domestically stocked kits can install in a few weeks once the slab is cured; imported kits commonly add 8-16 weeks of lead time and heavier freight. Permitting timelines vary widely by municipality and are often the real schedule driver.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Is buying a padel court a good investment?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">The math comes down to utilization: US clubs charge $30-$60 per court-hour split across four players. A conservatively-run outdoor court can gross on the order of $70,000/year at modest utilization — against a $40,000-$75,000 build. Demand modeling for your specific market matters more than the construction quote. Our padel court cost guide walks the full math.</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Where can I get padel court quotes in the US?</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Use the quote-request form on this page — tell us your site type, location, and timeline, and we&apos;ll connect you with suppliers and installers active in the US market. Padel Courts Finder tracks the US club pipeline, so we see which manufacturers are actually delivering here.</p>
              </div>
            </div>
          </section>
        </div>
        <section className="grain bg-court mt-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-white mb-6">Keep Reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/padel-court-cost" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Padel Court Cost Guide</div>
                <p className="text-stone-400 text-sm mt-1">The full line-item breakdown</p>
              </Link>
              <Link href="/state-of-us-padel-2026" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">State of US Padel 2026</div>
                <p className="text-stone-400 text-sm mt-1">The market data behind your business case</p>
              </Link>
              <Link href="/blog/how-to-choose-padel-club" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">How Players Choose a Club</div>
                <p className="text-stone-400 text-sm mt-1">What your future customers care about</p>
              </Link>
              <Link href="/advertise" className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white">Partner With Us</div>
                <p className="text-stone-400 text-sm mt-1">Reach US padel players and operators</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
