"use client";

import { useEffect, useRef } from "react";

/**
 * Inline scroll-driven frame sequence — surprise-and-delight, not a takeover.
 * No sticky runway, the page never pauses: the animation plays as the element
 * travels up the viewport (starts near the bottom, completes by the upper
 * third). Frames are individual JPEGs drawn to a canvas, so scrubbing is
 * instant — no video seek latency. White frame backgrounds are blended into
 * the page with mix-blend-multiply, so nothing reads as a "card".
 */
export function ScrollFrameSequence({
  framePattern,
  frameCount,
  width,
  height,
  alt,
  className = "",
}: {
  /** URL with "{i}" placeholder for the 1-based, 2-digit frame number,
   *  e.g. "/frames/court-explode/f-{i}.jpg" */
  framePattern: string;
  frameCount: number;
  width: number;
  height: number;
  alt: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frames = useRef<(HTMLImageElement | null)[]>([]);
  const lastDrawn = useRef(-1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const draw = (i: number) => {
      const img = frames.current[i];
      if (!img || !img.complete || i === lastDrawn.current) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      lastDrawn.current = i;
    };

    // load all frames up front (small JPEGs); draw frame 0 (or the final
    // frame for reduced-motion users) as soon as it arrives
    frames.current = Array.from({ length: frameCount }, (_, i) => {
      const img = new Image();
      img.src = framePattern.replace("{i}", String(i + 1).padStart(2, "0"));
      img.onload = () => {
        if (reduced) { if (i === frameCount - 1) draw(frameCount - 1); }
        else if (i === 0 && lastDrawn.current === -1) draw(0);
      };
      return img;
    });

    if (reduced) return; // static final frame only

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = canvas.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // play while the element rises from 85% of the viewport to 4% — starts
      // a beat after it appears, and the longer window (~81vh of scroll vs the
      // original 65vh) makes the explosion unfold ~25% slower
      const start = vh * 0.85;
      const end = vh * 0.04;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      draw(Math.min(frameCount - 1, Math.round(progress * (frameCount - 1))));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    (window as unknown as Record<string, unknown>).__frameSeq = { update, canvas };
    update();
    return () => {
      window.removeEventListener("scroll", onScroll, { capture: true } as EventListenerOptions);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [frameCount, framePattern]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      role="img"
      aria-label={alt}
      className={`w-full h-auto mix-blend-multiply ${className}`}
    />
  );
}
