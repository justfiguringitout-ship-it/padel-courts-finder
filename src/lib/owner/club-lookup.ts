/**
 * Server-only lookups against our own club data. Club details always come
 * from here, never from the browser.
 */
import { padelCourts } from "@/data/padel-courts";
import { generateSlug } from "@/lib/court-adapter";
import type { PadelCourt } from "@/types/padel-court";
import { DAYS, type CurrentListing } from "@/lib/owner/listing-fields";

export interface ClubIndexEntry {
  slug: string;
  name: string;
  city: string;
  state: string;
}

export function findCourtBySlug(slug: string): PadelCourt | undefined {
  if (!slug || slug.length > 120) return undefined;
  return padelCourts.find((c) => generateSlug(c.name) === slug);
}

/** Small public index for the /claim search box. Only fields already on every club page. */
export function clubIndex(): ClubIndexEntry[] {
  const seen = new Set<string>();
  const out: ClubIndexEntry[] = [];
  for (const c of padelCourts) {
    const slug = generateSlug(c.name);
    if (seen.has(slug)) continue;
    seen.add(slug);
    out.push({ slug, name: c.name, city: c.city, state: c.state });
  }
  return out.sort((a, b) => a.name.localeCompare(b.name));
}

export function currentListing(court: PadelCourt): CurrentListing {
  const hours: CurrentListing["openingHours"] = {};
  for (const d of DAYS) {
    const v = court.openingHours?.[d];
    if (typeof v === "string") hours[d] = v;
  }
  return {
    name: court.name,
    city: court.city,
    state: court.state,
    openingHours: hours,
    phone: court.phone,
    website: court.website,
    bookingUrl: court.bookingUrl,
    membershipEmail: court.membershipEmail,
    numberOfCourts: court.numberOfCourts,
    indoorCourts: court.indoorCourts,
    outdoorCourts: court.outdoorCourts,
    courtType: court.courtType,
    pricingText: court.pricingText,
    amenities: court.amenities,
    description: court.description,
    membersOnly: court.membersOnly,
    access: court.access,
    ogImageUrl: court.ogImageUrl,
    galleryImages: court.galleryImages,
  };
}
