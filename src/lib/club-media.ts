import type { AdaptedCourt } from "@/lib/court-adapter";
import imageKinds from "@/data/club-image-kinds.json";

type ImageKind = "photo" | "logo";
type KindEntry = {
  kind: ImageKind;
  width: number;
  height: number;
  /** Logos only: the box the mark occupies, in image pixels */
  mark?: { x: number; y: number; w: number; h: number };
  /** Logos only: background colour around the mark */
  bg?: string;
};
const KINDS = imageKinds as Record<string, KindEntry>;

export interface ClubPhoto {
  src: string;
  width?: number;
  height?: number;
}

export interface ClubLogo {
  src: string;
  width: number;
  height: number;
  /** Plate width / height (1 = square, up to 2.2 for wordmarks) */
  aspect: number;
  /** Plate colour, matched to the logo's own background */
  bg: string;
  /** Image placement inside the plate, in % of the plate, cropping the empty margins */
  place?: { width: number; left: number; top: number };
}

export interface ClubMedia {
  /** A real photo of the club, used as the full-width hero. */
  hero?: ClubPhoto;
  /** The club's logo, shown as a small avatar on the designed hero. */
  logo?: ClubLogo;
  /** Extra club photos for the gallery under the hero (hero excluded). */
  gallery: ClubPhoto[];
  photoCredit?: string;
}

/**
 * Photo or logo? The club's own `imageKind` wins; otherwise the build-time
 * classification in src/data/club-image-kinds.json (npm run images:classify);
 * otherwise only the filename is checked, so a new image is treated as a
 * photo until the classifier runs.
 */
export function imageKindOf(url: string, explicit?: ImageKind): ImageKind {
  if (explicit) return explicit;
  const known = KINDS[url]?.kind;
  if (known) return known;
  return /logo/i.test(url.split("/").pop() ?? "") ? "logo" : "photo";
}

function photo(src: string): ClubPhoto {
  const k = KINDS[src];
  return k ? { src, width: k.width, height: k.height } : { src };
}

function logoPlate(src: string): ClubLogo {
  const k = KINDS[src];
  if (!k?.mark) {
    return { src, width: k?.width ?? 256, height: k?.height ?? 256, aspect: 1, bg: k?.bg ?? "#ffffff" };
  }
  const { x, y, w, h } = k.mark;
  const aspect = Math.min(Math.max(w / h, 1), 2.2);
  // Plate is aspect x 1. Fit the mark at 84% of the width or 74% of the height.
  const scale = Math.min((0.84 * aspect) / w, 0.74 / h);
  const round = (n: number) => Math.round(n * 10) / 10;
  return {
    src,
    width: k.width,
    height: k.height,
    aspect: round(aspect),
    bg: k.bg ?? "#ffffff",
    place: {
      width: round(((k.width * scale) / aspect) * 100),
      left: round(((aspect / 2 - (x + w / 2) * scale) / aspect) * 100),
      top: round((0.5 - (y + h / 2) * scale) * 100),
    },
  };
}

/**
 * Only the club's own images, never stock. `photos` (the dedicated gallery
 * field) comes first, then the older `galleryImages`.
 */
export function getClubMedia(court: AdaptedCourt): ClubMedia {
  const raw = court._original;
  const og = raw?.ogImageUrl;
  const ogKind = og ? imageKindOf(og, raw?.imageKind) : undefined;
  const extra = [...new Set([...(raw?.photos ?? []), ...(raw?.galleryImages ?? [])])].filter(Boolean);

  const heroSrc = og && ogKind === "photo" ? og : extra[0];
  const gallery = extra.filter((src) => src !== heroSrc).map(photo);

  return {
    hero: heroSrc ? photo(heroSrc) : undefined,
    logo: og && ogKind === "logo" ? logoPlate(og) : undefined,
    gallery,
    photoCredit: raw?.photoCredit,
  };
}
