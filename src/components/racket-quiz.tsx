"use client";

import { useState } from "react";
import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";

/**
 * 3-question racket finder. Every recommendation is a racket reviewed in
 * our buying guides, picked with the same scores shown on those pages.
 */

type Level = "new" | "improving" | "advanced";
type Style = "control" | "balanced" | "power";
type Budget = "low" | "mid" | "high";

interface Pick {
  name: string;
  price: string;
  href: string;
  why: string;
  guide: { href: string; label: string };
  note?: string;
}

const GUIDES = {
  beginners: { href: "/blog/best-padel-rackets-beginners", label: "beginner rackets guide" },
  intermediate: { href: "/blog/best-padel-rackets-intermediate", label: "intermediate rackets guide" },
  pro: { href: "/blog/best-padel-rackets-2026", label: "pro rackets guide" },
  power: { href: "/blog/best-padel-rackets-power", label: "power rackets guide" },
  control: { href: "/blog/best-padel-rackets-control", label: "control rackets guide" },
};

const R = {
  contact: { name: "Babolat Contact", price: "$89.95", href: "https://www.amazon.com/dp/B0BBPZLRVP?tag=padel02-20" },
  extremeEvo: { name: "HEAD Extreme Evo", price: "$99.95", href: "https://www.amazon.com/dp/B0CGRV795T?tag=padel02-20" },
  optix: { name: "Wilson Optix V1", price: "$109.00", href: "https://www.amazon.com/dp/B0DX2M3JYY?tag=padel02-20" },
  proCup: { name: "NOX Pro Cup USPA Edition", price: "$119.00", href: "https://www.amazon.com/dp/B0F1ZVM7Y5?tag=padel02-20" },
  adipower: { name: "Adidas Adipower", price: "$129.00", href: "https://www.amazon.com/dp/B0CNWGJP2N?tag=padel02-20" },
  ml10: { name: "NOX ML10 Pro Cup", price: "$169.99", href: "https://www.amazon.com/dp/B0DWTCG1PL?tag=padel02-20" },
  blade: { name: "Wilson Blade Elite V2", price: "$189.00", href: "https://www.amazon.com/dp/B09TSWCFHD?tag=padel02-20" },
  at10Attack: { name: "NOX AT10 Genius Attack 12K", price: "$229.99", href: "https://www.amazon.com/dp/B0DHSVNSRK?tag=padel02-20" },
  neuron: { name: "Bullpadel Neuron 2025", price: "$236.00", href: "https://www.amazon.com/dp/B0DHZL5ZFF?tag=padel02-20" },
  viper: { name: "Babolat Technical Viper", price: "$249.00", href: "https://www.amazon.com/dp/B0DPH3GZGN?tag=padel02-20" },
  at10: { name: "NOX AT10 Genius 18K", price: "$272.00", href: "https://www.amazon.com/dp/B0DHT1DVW1?tag=padel02-20" },
  metalbone: { name: "Adidas Metalbone HRD+ 3.3", price: "$279.99", href: "https://www.amazon.com/dp/B0CNWHR78K?tag=padel02-20" },
  extremePro: { name: "HEAD Extreme Pro", price: "$319.95", href: "https://www.amazon.com/dp/B0G59YX8H5?tag=padel02-20" },
} as const;

function recommend(level: Level, style: Style, budget: Budget): Pick {
  if (level === "new") {
    const overspendNote =
      budget === "high"
        ? "You said $250+, but honestly: don't spend it yet. Learn on a forgiving round racket, figure out your style, then upgrade with confidence."
        : undefined;
    if (budget === "low") {
      if (style === "power") return { ...R.extremeEvo, why: "The liveliest of our budget beginner picks — round and forgiving, but with a bit more pop when you swing through.", guide: GUIDES.beginners };
      if (style === "control") return { ...R.contact, why: "Our beginner top pick — big centered sweet spot, soft feel, and the friendliest price of anything we rate.", guide: GUIDES.beginners };
      return { ...R.contact, why: "Our beginner top pick — round, forgiving, and cheap enough that you can upgrade guilt-free once you find your style.", guide: GUIDES.beginners };
    }
    if (style === "control") return { ...R.optix, why: "The most comfortable racket we've rated (10/10) with 9/10 control — your arm will thank you while you learn.", guide: GUIDES.control, note: overspendNote };
    if (style === "power") return { ...R.adipower, why: "Still round and forgiving, but with the most power of our beginner picks for when you want the ball to jump.", guide: GUIDES.beginners, note: overspendNote };
    return { ...R.proCup, why: "The official USPA edition — a balanced, confidence-building round racket you won't outgrow in a season.", guide: GUIDES.beginners, note: overspendNote };
  }

  if (level === "improving") {
    if (budget === "low") {
      return { ...R.ml10, why: "Slightly over your budget, but it's the cheapest racket we'd honestly recommend for an improving player — 9/10 control and a real step up.", guide: GUIDES.intermediate, note: "Under $120 at this level usually means buying twice. The ML10 is the value pick worth stretching for." };
    }
    if (budget === "mid") {
      if (style === "control") return { ...R.ml10, why: "Our best-value upgrade — 9/10 control with a rough spin surface, and the friendliest price in its class.", guide: GUIDES.intermediate };
      if (style === "power") return { ...R.at10Attack, why: "Agustín Tapia's shape in a 12K layup — 8/10 power that stays manageable for an improving player.", guide: GUIDES.intermediate };
      return { ...R.blade, why: "The all-rounder of our intermediate picks — 7/7/7 across the board, so nothing in your game gets punished.", guide: GUIDES.intermediate };
    }
    if (style === "control") return { ...R.neuron, why: "Chingotto's racket — 8/10 control with a tungsten-weighted neck for stability on fast exchanges.", guide: GUIDES.control };
    if (style === "power") return { ...R.metalbone, why: "9/10 power with Adidas' adjustable weight system — the hardest hitter we rate below pro flagships.", guide: GUIDES.power };
    return { ...R.at10, why: "Our best-overall racket — Tapia's 18K flagship balances 7/8/7 power, control, and comfort.", guide: GUIDES.pro };
  }

  // advanced
  if (budget === "low") {
    return { ...R.at10Attack, why: "The most racket we rate near your budget — Tapia's attack shape in 12K carbon at $229.99.", guide: GUIDES.intermediate, note: "At an advanced level, the flagships ($250+) are genuinely better tools — worth saving for." };
  }
  if (budget === "mid") {
    if (style === "power") return { ...R.viper, why: "Juan Lebrón's weapon — 9/10 power at the friendliest flagship price we've rated.", guide: GUIDES.power };
    if (style === "control") return { ...R.neuron, why: "8/10 control with tungsten stability — the precision pick among our advanced-friendly frames.", guide: GUIDES.control };
    return { ...R.viper, why: "9/10 power with 7/10 control — the best price-to-performance flagship in our pro guide.", guide: GUIDES.pro };
  }
  if (style === "power") return { ...R.extremePro, why: "The only 10/10 power score we've ever given. Small sweet spot, huge reward — for finishers only.", guide: GUIDES.power };
  if (style === "control") return { ...R.at10, why: "8/10 control in an 18K flagship — the most precise of the premium frames we've rated.", guide: GUIDES.control };
  return { ...R.at10, why: "Our best-overall racket, full stop — Tapia's 18K flagship with no real weakness.", guide: GUIDES.pro };
}

const QUESTIONS = [
  {
    key: "level",
    prompt: "How long have you been playing?",
    options: [
      { value: "new", label: "Just starting", detail: "New or under a year in" },
      { value: "improving", label: "Improving", detail: "Consistent contact, 1–3 years" },
      { value: "advanced", label: "Advanced", detail: "Competitive, attacking play" },
    ],
  },
  {
    key: "style",
    prompt: "What's your game?",
    options: [
      { value: "control", label: "Precision", detail: "Placement, defense, long rallies" },
      { value: "balanced", label: "All-court", detail: "A bit of everything" },
      { value: "power", label: "Attack", detail: "Finish points overhead" },
    ],
  },
  {
    key: "budget",
    prompt: "What's the budget?",
    options: [
      { value: "low", label: "Under $120", detail: "Smart money" },
      { value: "mid", label: "$120–$250", detail: "The sweet spot" },
      { value: "high", label: "$250+", detail: "No compromises" },
    ],
  },
] as const;

export function RacketQuiz() {
  const [answers, setAnswers] = useState<string[]>([]);
  const step = answers.length;
  const done = step === 3;
  const pick = done
    ? recommend(answers[0] as Level, answers[1] as Style, answers[2] as Budget)
    : null;

  return (
    <div id="racket-quiz" className="grain relative bg-court text-white rounded-3xl overflow-hidden scroll-mt-24">
      <div className="relative px-6 py-10 md:px-10 md:py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="font-mono text-sm text-turf mb-2">racket finder</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              {done ? "Your racket" : "Find your racket in 20 seconds"}
            </h2>
          </div>
          {/* Progress dots */}
          <div className="flex gap-2" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i < step ? "w-6 bg-turf" : i === step && !done ? "w-6 bg-white/40" : "w-2 bg-white/15"
                }`}
              />
            ))}
          </div>
        </div>

        {!done && (
          <div key={step}>
            <p className="text-lg text-white/80 mb-5">{QUESTIONS[step].prompt}</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {QUESTIONS[step].options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setAnswers([...answers, opt.value])}
                  className="glass-panel group rounded-xl p-5 text-left transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-turf/70"
                >
                  <div className="font-display font-semibold group-hover:text-turf transition-colors">
                    {opt.label}
                  </div>
                  <div className="text-sm text-white/50 mt-1">{opt.detail}</div>
                </button>
              ))}
            </div>
            {step > 0 && (
              <button
                onClick={() => setAnswers(answers.slice(0, -1))}
                className="mt-5 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                &larr; Back
              </button>
            )}
          </div>
        )}

        {done && pick && (
          <div>
            <div className="glass-panel rounded-2xl p-6 md:p-7">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                <div>
                  <div className="font-mono text-[11px] text-turf mb-2">our pick for you</div>
                  <div className="font-display text-2xl font-bold">
                    {pick.name} <span className="text-white/50 font-normal text-xl">· {pick.price}</span>
                  </div>
                  <p className="text-white/60 mt-3 max-w-lg leading-relaxed">{pick.why}</p>
                  {pick.note && (
                    <p className="text-sm text-turf/90 mt-3 max-w-lg leading-relaxed">{pick.note}</p>
                  )}
                </div>
                <div className="flex flex-col gap-3 shrink-0">
                  <TrackedLink
                    href={pick.href}
                    type="affiliate"
                    productName={pick.name}
                    target="_blank"
                    className="rounded-xl bg-padel-green hover:bg-padel-green-dark active:scale-[0.98] text-white text-center font-semibold px-6 py-3 transition-all shadow-lg shadow-padel-green/25 whitespace-nowrap"
                  >
                    Check price on Amazon
                  </TrackedLink>
                  <Link
                    href={pick.guide.href}
                    className="text-center text-sm text-turf hover:underline"
                  >
                    Read the full {pick.guide.label}
                  </Link>
                </div>
              </div>
            </div>
            <button
              onClick={() => setAnswers([])}
              className="mt-5 text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              &#8635; Start over
            </button>
          </div>
        )}

        <p className="text-[11px] text-white/30 mt-8">
          Recommendations come from the rackets we&apos;ve rated in our buying guides. Links are
          affiliate links — purchases support the site at no extra cost to you.
        </p>
      </div>
    </div>
  );
}
