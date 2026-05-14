"use client";

import { useEffect, useRef } from "react";

interface HeroVideoProps {
  variant?: "light" | "dark";
}

export function HeroVideo({ variant = "light" }: HeroVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    let targetTime = 0;
    let currentTime = 0;
    let rafId: number;

    function handleScroll() {
      if (!containerRef.current || !video) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height))
      );

      if (video.duration && isFinite(video.duration)) {
        targetTime = progress * video.duration;
      }
    }

    function animate() {
      if (!video) return;

      const diff = targetTime - currentTime;
      currentTime += diff * 0.08;

      if (Math.abs(video.currentTime - currentTime) > 0.01) {
        video.currentTime = currentTime;
      }

      rafId = requestAnimationFrame(animate);
    }

    function start() {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      currentTime = targetTime;
      rafId = requestAnimationFrame(animate);
    }

    if (video.readyState >= 1) {
      start();
    } else {
      video.addEventListener("loadedmetadata", start);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      video.removeEventListener("loadedmetadata", start);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const fadeColor = variant === "dark"
    ? "rgb(28 25 23)"   // stone-900
    : "hsl(var(--background))";

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative mx-auto" style={{ maxWidth: "700px" }}>
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="w-full h-auto block"
        >
          <source src="/videos/hero-racket.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay — fades edges into surrounding background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at center, transparent 30%, ${fadeColor}40 55%, ${fadeColor} 75%),
              linear-gradient(to bottom, transparent 45%, ${fadeColor} 95%),
              linear-gradient(to top, transparent 70%, ${fadeColor} 95%)
            `,
          }}
        />
      </div>
    </div>
  );
}
