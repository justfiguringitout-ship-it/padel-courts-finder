import Image from "next/image";
import type { ClubPhoto } from "@/lib/club-media";

/**
 * The club's own photos under the hero. A swipeable strip on phones, a row
 * of tiles on larger screens. Tiles have a fixed aspect ratio, so lazy
 * loading never moves the page. Renders nothing without photos.
 */
export function ClubGallery({ name, photos, credit }: { name: string; photos: ClubPhoto[]; credit?: string }) {
  if (photos.length === 0) return null;
  return (
    <section className="club-gallery-wrap" aria-labelledby="club-photos">
      <div className="club-section-head">
        <h2 id="club-photos" className="club-h2">Photos</h2>
        <span className="club-kicker">{photos.length} {photos.length === 1 ? "photo" : "photos"}</span>
      </div>
      <ul className="club-gallery">
        {photos.map((p, i) => (
          <li key={p.src} className="club-gallery-tile">
            <Image
              src={p.src}
              alt={`${name}, photo ${i + 2}`}
              fill
              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, 66vw"
              className="object-cover"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
      {credit && <p className="mt-2 text-xs text-muted-foreground">Photos: {credit}</p>}
    </section>
  );
}
