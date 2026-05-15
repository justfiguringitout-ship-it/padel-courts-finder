"use client";

import { useEffect, useRef, useState } from "react";

const TOTAL_FRAMES = 61;

function getFrameSrc(i: number) {
  const padded = String(i + 1).padStart(3, "0");
  return `/videos/frames/f${padded}.jpg`;
}

interface HeroVideoProps {
  variant?: "light" | "dark";
}

export function HeroVideo({ variant = "light" }: HeroVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const currentFrameRef = useRef(-1);

  // Preload all frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = images;
          setLoaded(true);
        }
      };
      images[i] = img;
    }
  }, []);

  // Draw frame 0 as soon as it loads, then wire up scroll
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const firstImg = imagesRef.current[0];
    canvas.width = firstImg.naturalWidth;
    canvas.height = firstImg.naturalHeight;

    function drawFrame(index: number) {
      if (index === currentFrameRef.current) return;
      currentFrameRef.current = index;
      const img = imagesRef.current[index];
      if (img && ctx) {
        ctx.drawImage(img, 0, 0);
      }
    }

    function handleScroll() {
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startY = windowHeight * 0.85;
      const endY = windowHeight * 0.15;
      const progress = Math.min(
        1,
        Math.max(0, (startY - rect.top) / (startY - endY))
      );

      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(progress * TOTAL_FRAMES)
      );

      drawFrame(frameIndex);
    }

    drawFrame(0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loaded]);

  const fadeColor = variant === "dark"
    ? "rgb(28 25 23)"
    : "hsl(var(--background))";

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative mx-auto" style={{ maxWidth: "420px" }}>
        {/* Show first frame as static image until all frames loaded */}
        {!loaded && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={getFrameSrc(0)}
            alt=""
            className="w-full h-auto block"
          />
        )}

        <canvas
          ref={canvasRef}
          className="w-full h-auto block"
          style={{ display: loaded ? "block" : "none" }}
        />

        {/* Gradient overlay */}
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
