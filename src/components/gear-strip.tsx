import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TrackedLink } from "@/components/TrackedLink";

/**
 * Compact, disclosed gear module for directory pages. Value-forward:
 * leads with the quiz (help first), then three honest picks from our
 * reviewed lineup — never a wall of ads.
 */

const PICKS = [
  {
    name: "Wilson Optix V1",
    label: "Starting out",
    price: "$109.00",
    href: "https://www.amazon.com/dp/B0DX2M3JYY?tag=padel02-20",
    review: "/blog/best-padel-rackets-control",
  },
  {
    name: "Wilson Blade Elite V2",
    label: "Improving",
    price: "$189.00",
    href: "https://www.amazon.com/dp/B09TSWCFHD?tag=padel02-20",
    review: "/blog/wilson-blade-elite-v2-review",
  },
  {
    name: "NOX AT10 Genius 18K",
    label: "Best overall",
    price: "$272.00",
    href: "https://www.amazon.com/dp/B0DHT1DVW1?tag=padel02-20",
    review: "/blog/nox-at10-genius-18k-review",
  },
];

export function GearStrip() {
  return (
    <div className="grain relative bg-court text-white rounded-2xl overflow-hidden">
      <div className="relative p-6">
        <p className="font-mono text-[11px] text-turf mb-1.5">before you play</p>
        <h3 className="font-display text-lg font-bold mb-4">Need a racket?</h3>
        <div className="space-y-3 mb-5">
          {PICKS.map((p) => (
            <div key={p.name} className="flex items-center justify-between gap-3 text-sm">
              <div className="min-w-0">
                <div className="font-medium truncate">
                  <Link href={p.review} className="hover:text-turf transition-colors">
                    {p.name}
                  </Link>
                </div>
                <div className="text-white/40 text-xs">{p.label} · {p.price}</div>
              </div>
              <TrackedLink
                href={p.href}
                type="affiliate"
                productName={p.name}
                target="_blank"
                className="shrink-0 rounded-lg border border-turf/40 text-turf text-xs font-semibold px-3 py-1.5 hover:bg-turf/10 transition-colors whitespace-nowrap"
              >
                Price
              </TrackedLink>
            </div>
          ))}
        </div>
        <Link
          href="/equipment#racket-quiz"
          className="group inline-flex items-center gap-2 text-sm font-medium text-turf hover:gap-3 transition-all"
        >
          Not sure? Take the 20-second quiz
          <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-[10px] text-white/30 mt-4">
          Picks from our reviewed lineup. Affiliate links support the directory at no cost to you.
        </p>
      </div>
    </div>
  );
}
