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
    let ticking = false;

    function handleScroll() {
      if (!containerRef.current || !video) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start when top of container is 80% down viewport,
      // finish when top reaches 20% from top
      const startY = windowHeight * 0.8;
      const endY = windowHeight * 0.2;
      const progress = Math.min(
        1,
        Math.max(0, (startY - rect.top) / (startY - endY))
      );

      if (video.duration && isFinite(video.duration)) {
        targetTime = progress * video.duration;
      }

      if (!ticking) {
        ticking = true;
        requestAnimationFrame(tick);
      }
    }

    function tick() {
      if (!video) return;

      const diff = targetTime - currentTime;

      // Fast lerp for snappy response
      if (Math.abs(diff) < 0.005) {
        currentTime = targetTime;
      } else {
        currentTime += diff * 0.15;
      }

      if (Math.abs(video.currentTime - currentTime) > 0.008) {
        video.currentTime = currentTime;
      }

      if (Math.abs(targetTime - currentTime) > 0.005) {
        requestAnimationFrame(tick);
      } else {
        ticking = false;
      }
    }

    function start() {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      currentTime = targetTime;
    }

    if (video.readyState >= 1) {
      start();
    } else {
      video.addEventListener("loadedmetadata", start);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      video.removeEventListener("loadedmetadata", start);
    };
  }, []);

  const fadeColor = variant === "dark"
    ? "rgb(28 25 23)"
    : "hsl(var(--background))";

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative mx-auto" style={{ maxWidth: "420px" }}>
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="w-full h-auto block"
        >
          <source src="/videos/hero-racket.mp4" type="video/mp4" />
        </video>

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
