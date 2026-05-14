"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      // Progress from 0 (top of section in view) to 1 (bottom of section leaving)
      const progress = Math.min(
        1,
        Math.max(0, -rect.top / (containerHeight * 0.6))
      );
      setScrollProgress(progress);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scale from 0.6 to 1.0 as user scrolls
  const scale = 0.6 + scrollProgress * 0.4;
  // Border radius shrinks from rounded to square
  const borderRadius = Math.round(24 * (1 - scrollProgress));

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <div
        className="relative mx-auto transition-none"
        style={{
          transform: `scale(${scale})`,
          borderRadius: `${borderRadius}px`,
          maxWidth: "900px",
          willChange: "transform",
        }}
      >
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto block"
          style={{ borderRadius: `${borderRadius}px` }}
        >
          <source src="/videos/hero-racket.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay — fades edges to white */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: `${borderRadius}px`,
            background: `
              radial-gradient(ellipse at center, transparent 40%, white 85%),
              linear-gradient(to bottom, transparent 60%, white 100%),
              linear-gradient(to top, transparent 80%, white 100%)
            `,
          }}
        />
      </div>
    </div>
  );
}
