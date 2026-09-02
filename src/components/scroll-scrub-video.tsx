"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll-scrubbed video: the clip's playhead is driven by scroll progress
 * through a tall wrapper while the video itself stays pinned (sticky).
 * The source must be encoded all-intra (every frame a keyframe) or seeking
 * stutters. Desktop-only scrub; mobile and reduced-motion get the final
 * frame as a static image so nothing depends on JS or scroll events.
 */
export function ScrollScrubVideo({
  src,
  poster,
  caption,
}: {
  src: string;
  poster: string;
  caption?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let duration = 0;
    let raf = 0;

    const onMeta = () => { duration = video.duration || 0; };
    video.addEventListener("loadedmetadata", onMeta);
    if (video.readyState >= 1) onMeta();
    // ensure it never free-plays; we drive the clock
    video.pause();

    const update = () => {
      raf = 0;
      if (!duration) return;
      const rect = wrap.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const t = progress * (duration - 0.05);
      if (Math.abs(video.currentTime - t) > 0.02) video.currentTime = t;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    // debug hook: lets tooling drive/update the scrub directly
    (window as unknown as Record<string, unknown>).__scrub = { update, video, wrap, getDuration: () => duration };
    update();
    return () => {
      window.removeEventListener("scroll", onScroll, { capture: true } as EventListenerOptions);
      video.removeEventListener("loadedmetadata", onMeta);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Desktop: 250vh scroll runway, video pinned in the middle of it */}
      <div ref={wrapRef} className="hidden md:block relative h-[250vh]">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4">
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted
            playsInline
            preload="auto"
            aria-label={caption || "Padel court exploded view"}
            className="max-h-[78vh] w-auto max-w-full rounded-2xl shadow-2xl"
          />
          {caption && (
            <p className="mt-4 text-sm text-stone-500 text-center max-w-xl">{caption}</p>
          )}
          <p className="mt-1 text-xs text-stone-400">Keep scrolling to take the court apart</p>
        </div>
      </div>
      {/* Mobile + reduced-motion: the labeled final frame, no JS required */}
      <div className="md:hidden py-8 px-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={poster} alt={caption || "Padel court exploded view"} className="w-full rounded-xl border border-stone-200" loading="lazy" />
        {caption && <p className="mt-3 text-sm text-stone-500 text-center">{caption}</p>}
      </div>
    </>
  );
}
