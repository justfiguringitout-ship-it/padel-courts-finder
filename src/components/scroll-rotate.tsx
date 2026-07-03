"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRotateProps {
  children: ReactNode;
  className?: string;
  /** Starting rotation in degrees */
  base?: number;
  /** Degrees of rotation per pixel scrolled */
  factor?: number;
}

/** Rotates its children as the page scrolls. GPU transform only. */
export function ScrollRotate({ children, className, base = 12, factor = 0.04 }: ScrollRotateProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.transform = `rotate(${base}deg)`;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onScroll = () => {
      el.style.transform = `rotate(${base + window.scrollY * factor}deg)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [base, factor]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
