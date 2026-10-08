"use client";

import { useEffect, useState } from "react";

const STILL_SRC = "/video/hero-padel-still.webp";
const VIDEO_SRC = "/video/hero-padel.mp4";

// Only these visitors get the mp4. Everyone else (phones, reduced motion,
// Save-Data) keeps the server-rendered still and never fetches the video.
const VIDEO_QUERY = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

type NetworkInformationLike = { saveData?: boolean };

function canPlayVideo(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
  const connection = (navigator as Navigator & { connection?: NetworkInformationLike }).connection;
  if (connection?.saveData) return false;
  return window.matchMedia(VIDEO_QUERY).matches;
}

/**
 * Background B-roll for dark hero sections. Parent must be
 * `relative overflow-hidden` (ideally with `grain bg-court`); content
 * above it needs `relative`.
 *
 * The still frame (~56KB WebP) is rendered on the server so it paints
 * instantly for everyone, with a slow Ken Burns zoom (off under
 * prefers-reduced-motion). The <video> element, and with it the mp4
 * request, is only mounted by client JS after the matchMedia + Save-Data
 * check, so phones never download the video. The server render and the
 * first client render are identical (no video), so there is no hydration
 * mismatch, and both layers are absolutely positioned, so no layout shift.
 */
export function HeroVideo() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (canPlayVideo()) setShowVideo(true);
  }, []);

  return (
    <>
      {/* Group opacity: the opaque video covers the still, so they never double-expose. */}
      <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative background, already optimized WebP */}
        <img
          src={STILL_SRC}
          alt=""
          width={960}
          height={540}
          decoding="async"
          fetchPriority="high"
          className={`absolute inset-0 h-full w-full object-cover ${showVideo ? "" : "hero-still-zoom"}`}
        />
        {showVideo && (
          <video
            className="hero-bg-video absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={STILL_SRC}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-court/60 via-transparent to-court/80 pointer-events-none" aria-hidden="true" />
    </>
  );
}
