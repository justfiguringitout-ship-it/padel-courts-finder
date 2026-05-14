"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Pause autoplay — we control playback via scroll
    video.pause();

    function handleScroll() {
      if (!containerRef.current || !video) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Progress 0→1 as the container scrolls through the viewport
      const progress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height))
      );

      // Scrub video to match scroll position
      if (video.duration && isFinite(video.duration)) {
        video.currentTime = progress * video.duration;
      }
    }

    // Wait for video metadata to load before scrubbing
    function onLoadedMetadata() {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    }

    if (video.readyState >= 1) {
      onLoadedMetadata();
    } else {
      video.addEventListener("loadedmetadata", onLoadedMetadata);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative mx-auto" style={{ maxWidth: "700px" }}>
        {/* Video — scroll-driven playback */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="w-full h-auto block"
        >
          <source src="/videos/hero-racket.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay — fades edges to white */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at center, transparent 35%, hsl(var(--background)) 80%),
              linear-gradient(to bottom, transparent 50%, hsl(var(--background)) 100%),
              linear-gradient(to top, transparent 75%, hsl(var(--background)) 100%)
            `,
          }}
        />
      </div>
    </div>
  );
}
