"use client";

import { useEffect, useRef } from "react";

/**
 * A faint turf-green glow that trails the cursor. Fixed, non-interactive,
 * skipped entirely on touch devices and for reduced-motion users.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let targetX = -1000;
    let targetY = -1000;
    let x = targetX;
    let y = targetY;
    let active = false;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!active) {
        active = true;
        el.style.opacity = "1";
        // First movement: jump straight to the cursor, no cross-screen swoop
        x = targetX;
        y = targetY;
        loop();
      }
    };

    const loop = () => {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      el.style.transform = `translate(${x - 250}px, ${y - 250}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[500px] w-[500px] opacity-0 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(circle, rgba(74, 222, 128, 0.09) 0%, rgba(74, 222, 128, 0.04) 35%, transparent 65%)",
        willChange: "transform",
      }}
    />
  );
}
