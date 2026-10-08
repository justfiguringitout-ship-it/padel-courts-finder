"use client";

import Image from "next/image";
import { useState } from "react";
import { ClubPlaceholder } from "@/components/club-placeholder";

interface ClubImageProps {
  src?: string | null;
  alt: string;
  sizes?: string;
  className?: string;
  /** Court count for the placeholder caption when there is no photo. */
  courts?: number;
  /** Set only on the first above-the-fold club image of a page. */
  priority?: boolean;
}

/**
 * Club photo that fills its positioned parent. The parent must reserve the
 * space with an aspect ratio (aspect-video, aspect-[16/10], ...) so nothing
 * shifts while it loads. Lazy by default. When the club has no photo, or the
 * file fails to load, it swaps to the designed court placeholder instead of
 * a broken box.
 */
export function ClubImage({ src, alt, sizes, className, courts, priority }: ClubImageProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  if (!src || failedSrc === src) {
    return <ClubPlaceholder label={alt} courts={courts} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
      className={className}
      {...(priority ? { preload: true, fetchPriority: "high" as const } : { loading: "lazy" as const })}
      onError={() => setFailedSrc(src)}
    />
  );
}
