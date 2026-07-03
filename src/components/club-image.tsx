"use client";

import Image from "next/image";
import { useState } from "react";

interface ClubImageProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
}

/**
 * Club photo with a branded fallback — external club sites sometimes
 * block hotlinking or move files, so a broken image becomes a court-navy
 * panel with the club initial instead of an empty gray box.
 */
export function ClubImage({ src, alt, sizes, className }: ClubImageProps) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div className="absolute inset-0">
        <div className="grain bg-court w-full h-full flex items-center justify-center">
          <span className="font-display text-6xl font-bold text-turf/40" aria-hidden="true">
            {alt.charAt(0)}
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
