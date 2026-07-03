"use client";

import { useEffect, useState } from "react";
import { TrackedLink } from "@/components/TrackedLink";

interface StickyPickBarProps {
  /** e.g. "Our top pick" or "Best overall" */
  label?: string;
  productName: string;
  price: string;
  href: string;
}

/**
 * Floating top-pick bar for affiliate guides. Slides in after the reader
 * scrolls past the intro, stays out of the way, dismissible.
 */
export function StickyPickBar({ label = "Our top pick", productName, price, href }: StickyPickBarProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 z-40 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      <div className="grain relative bg-court text-white rounded-2xl shadow-2xl shadow-court/40 border border-white/10 pl-5 pr-12 py-3.5 flex items-center gap-4 sm:max-w-md">
        <div className="min-w-0">
          <div className="font-mono text-[11px] text-turf leading-none mb-1">{label}</div>
          <div className="text-sm font-semibold truncate">
            {productName} <span className="text-white/50 font-normal">· {price}</span>
          </div>
        </div>
        <TrackedLink
          href={href}
          type="affiliate"
          productName={productName}
          target="_blank"
          className="shrink-0 rounded-lg bg-padel-green hover:bg-padel-green-dark active:scale-[0.98] text-white text-sm font-semibold px-4 py-2 transition-all whitespace-nowrap"
        >
          Check price
        </TrackedLink>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="absolute top-1.5 right-2 text-white/40 hover:text-white/80 text-lg leading-none p-1 transition-colors"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
