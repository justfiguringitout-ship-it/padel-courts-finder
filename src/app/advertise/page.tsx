import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { getSiteStats } from "@/lib/site-structure";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us | Padel Courts Finder",
  description: "Club partnerships and brand or commercial partnerships on the most comprehensive US padel directory. Featured listings, gear placements, and B2B sponsorship.",
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/advertise",
  },
  openGraph: {
    title: "Partner With Padel Courts Finder",
    description: "Club partnerships and brand or commercial partnerships on the most comprehensive US padel directory.",
    url: "https://www.padelcourtsfinder.com/advertise",
    siteName: "Padel Courts Finder",
    type: "website",
  },
};

export default async function AdvertisePage({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string }>;
}) {
  const stats = getSiteStats();
  const { submitted } = await searchParams;

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="h-1 bg-padel-green" />

      {/* Hero */}
      <header className="grain bg-court text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="font-mono text-sm text-turf mb-4">work with us</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-5">
            Reach American padel players where they decide.
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Padel Courts Finder is the most comprehensive directory of padel clubs
            in the United States — {stats.totalCourts}+ clubs across {stats.totalStates} states —
            plus the buying guides players read before they spend.
          </p>
        </div>
      </header>

      {/* Audience */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
          An audience with intent
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white border border-stone-200 rounded-2xl p-6">
            <div className="font-display text-4xl font-bold text-padel-green tabular-nums mb-2">
              {stats.totalCourts}+
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              club listings players browse when choosing where to play — hours, pricing, reviews.
            </p>
          </div>
          <div className="bg-white border border-stone-200 rounded-2xl p-6">
            <div className="font-display text-4xl font-bold text-padel-green tabular-nums mb-2">
              {stats.totalStates}
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              states covered, city by city — from Miami and Austin to emerging markets.
            </p>
          </div>
          <div className="bg-white border border-stone-200 rounded-2xl p-6">
            <div className="font-display text-4xl font-bold text-padel-green tabular-nums mb-2">
              25+
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              guides on rackets, gear, tactics, and city scenes — read at the moment of purchase.
            </p>
          </div>
        </div>
        <p className="text-sm text-stone-500 mt-5">
          Current traffic and audience numbers available on request — we&apos;ll share real
          analytics, not estimates.
        </p>
      </section>

      {/* Club Partnerships */}
      <section className="border-y bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-mono text-sm text-padel-green mb-2">for clubs</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
            Club Partnerships
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-stone-200 rounded-2xl p-7 flex flex-col">
              <h3 className="font-display text-xl font-semibold mb-1">Free listing</h3>
              <p className="text-sm text-stone-500 mb-5">Every US padel club belongs on the map — no charge, ever.</p>
              <ul className="space-y-2.5 text-sm text-stone-600 mb-7">
                <li className="flex gap-2.5"><Check className="w-4 h-4 text-padel-green shrink-0 mt-0.5" /> Full club page — hours, pricing, photos, amenities</li>
                <li className="flex gap-2.5"><Check className="w-4 h-4 text-padel-green shrink-0 mt-0.5" /> Your light on the homepage map</li>
                <li className="flex gap-2.5"><Check className="w-4 h-4 text-padel-green shrink-0 mt-0.5" /> State and city page placement</li>
              </ul>
              <Link
                href="/list-your-court"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 border-padel-green text-padel-green font-semibold px-6 py-3 hover:bg-padel-green hover:text-white transition-all"
              >
                Get listed free
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grain relative bg-court text-white rounded-2xl p-7 flex flex-col overflow-hidden">
              <div className="relative flex flex-col h-full">
                <h3 className="font-display text-xl font-semibold mb-1">Featured listing</h3>
                <p className="text-sm text-white/50 mb-5">For clubs that want to fill courts and grow programs.</p>
                <ul className="space-y-2.5 text-sm text-white/70 mb-7">
                  <li className="flex gap-2.5"><Check className="w-4 h-4 text-turf shrink-0 mt-0.5" /> Priority placement on the homepage showcase</li>
                  <li className="flex gap-2.5"><Check className="w-4 h-4 text-turf shrink-0 mt-0.5" /> Highlighted, ringed light on the map — on top of the cluster</li>
                  <li className="flex gap-2.5"><Check className="w-4 h-4 text-turf shrink-0 mt-0.5" /> Top of your state and city pages</li>
                </ul>
                <a
                  href="#partner-form"
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-padel-green hover:bg-padel-green-dark text-white font-semibold px-6 py-3 transition-all shadow-lg shadow-padel-green/25"
                >
                  Ask about featured
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand & Commercial Partnerships */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <p className="font-mono text-sm text-padel-green mb-2">for brands &amp; businesses</p>
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
          Brand &amp; Commercial Partnerships
        </h2>
        <div className="space-y-6">
          <div className="flex gap-5 items-start">
            <div className="font-mono text-sm text-padel-green pt-1 shrink-0">01</div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-1">Gear partnerships</h3>
              <p className="text-stone-600 leading-relaxed">
                Placement in our racket and gear guides and the racket-finder quiz. We only
                recommend products we can stand behind — sponsorships are always disclosed,
                and editorial scores are never for sale.
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <div className="font-mono text-sm text-padel-green pt-1 shrink-0">02</div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-1">Industry &amp; B2B sponsorship</h3>
              <p className="text-stone-600 leading-relaxed">
                Court builders, club software, insurance, franchising — our club-owner content
                reaches the people opening America&apos;s next wave of padel facilities.
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <div className="font-mono text-sm text-padel-green pt-1 shrink-0">03</div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-1">Something else</h3>
              <p className="text-stone-600 leading-relaxed">
                Events, tournaments, media, local campaigns — if it belongs in front of padel
                players, tell us about it below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership intake form */}
      <section id="partner-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 scroll-mt-24">
        <div className="grain relative bg-court text-white rounded-3xl overflow-hidden">
          <div className="relative px-6 py-12 md:px-12">
            {submitted === "true" ? (
              <div className="text-center py-8">
                <div className="mx-auto w-14 h-14 rounded-full bg-padel-green/20 border border-turf/40 flex items-center justify-center mb-5">
                  <Check className="w-7 h-7 text-turf" />
                </div>
                <h2 className="font-display text-3xl font-bold mb-3">Got it.</h2>
                <p className="text-white/60 max-w-md mx-auto">
                  We&apos;ll come back with current numbers and a straightforward proposal —
                  usually within two business days.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
                    Let&apos;s talk.
                  </h2>
                  <p className="text-white/60 max-w-xl">
                    Tell us what you&apos;re promoting and who you want to reach — we&apos;ll
                    reply with real numbers and a straightforward proposal.
                  </p>
                </div>
                <form
                  action="https://formspree.io/f/xaqlweaw"
                  method="POST"
                  className="grid sm:grid-cols-2 gap-4"
                >
                  <input type="hidden" name="_subject" value="New Partnership Inquiry — Padel Courts Finder" />
                  <input type="hidden" name="formType" value="partnership-inquiry" />
                  <input type="hidden" name="_next" value="https://www.padelcourtsfinder.com/advertise?submitted=true#partner-form" />
                  <div style={{ display: "none" }}>
                    <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm text-white/70 mb-1.5">
                      Company or club <span className="text-turf">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      required
                      placeholder="e.g. NOX USA / Nicol Rackets"
                      className="glass-panel w-full rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-turf/70"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm text-white/70 mb-1.5">
                      Your name <span className="text-turf">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="First and last"
                      className="glass-panel w-full rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-turf/70"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-white/70 mb-1.5">
                      Email <span className="text-turf">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="glass-panel w-full rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-turf/70"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm text-white/70 mb-1.5">
                      Website
                    </label>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://"
                      className="glass-panel w-full rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-turf/70"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="partnershipType" className="block text-sm text-white/70 mb-1.5">
                      Partnership type <span className="text-turf">*</span>
                    </label>
                    <select
                      id="partnershipType"
                      name="partnershipType"
                      required
                      defaultValue=""
                      className="glass-panel w-full rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-turf/70 [&>option]:text-stone-900"
                    >
                      <option value="" disabled>
                        Choose one
                      </option>
                      <option value="Featured club listing">Featured club listing</option>
                      <option value="Gear / brand partnership">Gear / brand partnership</option>
                      <option value="B2B sponsorship">B2B sponsorship (courts, software, services)</option>
                      <option value="Press / data inquiry">Press / data inquiry (State of US Padel)</option>
                      <option value="Something else">Something else</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm text-white/70 mb-1.5">
                      What are you promoting? <span className="text-turf">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="A sentence or two about the product or club, your audience, and rough timing."
                      className="glass-panel w-full rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-turf/70 resize-y"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-xl bg-padel-green hover:bg-padel-green-dark active:scale-[0.98] text-white font-semibold px-8 py-4 transition-all shadow-lg shadow-padel-green/25"
                    >
                      Send inquiry
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
