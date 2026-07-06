"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TrackedLink } from "@/components/TrackedLink";
import { RacketQuiz } from "@/components/racket-quiz";

const products = [
  {
    name: "Wilson Optix V1",
    tagline: "Beginner racket · 10/10 comfort in our tests",
    price: "$109.00",
    url: "https://www.amazon.com/dp/B0DX2M3JYY?tag=padel02-20",
    more: "/blog/best-padel-rackets-beginners",
  },
  {
    name: "HEAD Padel Pro S",
    tagline: "The ball at most US clubs",
    price: "$13.91",
    url: "https://www.amazon.com/dp/B07D56XDNL?tag=padel02-20",
    more: "/blog/best-padel-balls",
  },
  {
    name: "Wilson Pro Overgrip 12-Pack",
    tagline: "The highest-ROI $2 in padel",
    price: "$27.00",
    url: "https://www.amazon.com/dp/B002GUEXTQ?tag=padel02-20",
    more: "/blog/padel-accessories",
  },
];

export function GearWidget() {
  const [showQuiz, setShowQuiz] = useState(false);

  if (showQuiz) {
    return (
      <section className="mt-12">
        <RacketQuiz />
      </section>
    );
  }

  return (
    <section className="mt-12">
      <div className="grain relative bg-court text-white rounded-3xl overflow-hidden">
        <div className="relative p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
          {/* Quiz lead */}
          <div>
            <p className="font-mono text-sm text-turf mb-3">racket finder</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
              What racket is best for you?
            </h3>
            <p className="text-white/60 mb-6 max-w-sm">
              Three questions, one honest pick from the rackets we&apos;ve actually rated.
              Answer right here — no need to leave this page.
            </p>
            <button
              onClick={() => setShowQuiz(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-padel-green hover:bg-padel-green-dark active:scale-[0.98] text-white font-semibold px-6 py-3 transition-all shadow-lg shadow-padel-green/25"
            >
              Take the 20-second quiz
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Court-day picks */}
          <div>
            <p className="text-sm text-white/50 mb-3">Or grab the court-day basics:</p>
            <div className="space-y-3">
              {products.map((p) => (
                <div
                  key={p.name}
                  className="glass-panel rounded-xl px-4 py-3 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <Link href={p.more} className="font-medium text-sm hover:text-turf transition-colors">
                      {p.name}
                    </Link>
                    <div className="text-xs text-white/40 truncate">{p.tagline}</div>
                  </div>
                  <TrackedLink
                    href={p.url}
                    type="affiliate"
                    productName={p.name}
                    target="_blank"
                    className="shrink-0 rounded-lg border border-turf/40 text-turf text-xs font-semibold px-3 py-1.5 hover:bg-turf/10 transition-colors whitespace-nowrap tabular-nums"
                  >
                    {p.price} &rarr;
                  </TrackedLink>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-white/30 mt-3">
              From our reviewed guides. Affiliate links support the directory at no cost to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
