import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getSiteStats } from "@/lib/site-structure";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertise on Padel Courts Finder | Reach US Padel Players",
  description: "Put your brand in front of American padel players. Featured club listings, sponsored gear guides, and brand partnerships on the most comprehensive US padel directory.",
  alternates: {
    canonical: "https://www.padelcourtsfinder.com/advertise",
  },
  openGraph: {
    title: "Advertise on Padel Courts Finder",
    description: "Featured listings, sponsored guides, and brand partnerships on the most comprehensive US padel directory.",
    url: "https://www.padelcourtsfinder.com/advertise",
    siteName: "Padel Courts Finder",
    type: "website",
  },
};

export default function AdvertisePage() {
  const stats = getSiteStats();

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

      {/* Why here */}
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

      {/* Offerings */}
      <section className="border-y bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
            Ways to work together
          </h2>
          <div className="space-y-6">
            <div className="flex gap-5 items-start">
              <div className="font-mono text-sm text-padel-green pt-1 shrink-0">01</div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">Featured club listings</h3>
                <p className="text-stone-600 leading-relaxed">
                  Priority placement on the homepage, the constellation map, and your state and
                  city pages. Built for clubs that want to fill courts and grow programs.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="font-mono text-sm text-padel-green pt-1 shrink-0">02</div>
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
              <div className="font-mono text-sm text-padel-green pt-1 shrink-0">03</div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">Industry &amp; B2B sponsorship</h3>
                <p className="text-stone-600 leading-relaxed">
                  Court builders, club software, insurance, franchising — our club-owner content
                  reaches the people opening America&apos;s next wave of padel facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grain relative bg-court text-white rounded-3xl overflow-hidden">
          <div className="relative px-6 py-12 md:px-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Let&apos;s talk.
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Tell us what you&apos;re promoting and who you want to reach — we&apos;ll come back
              with current numbers and a straightforward proposal.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-padel-green hover:bg-padel-green-dark active:scale-[0.98] text-white font-semibold px-8 py-4 transition-all shadow-lg shadow-padel-green/25"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
