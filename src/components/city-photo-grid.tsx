import Link from "next/link";
import { padelCourts } from "@/data/padel-courts";

/**
 * Photo cards for the top padel metros. Images are self-hosted Wikimedia
 * Commons photos (CC/PD) — attribution lives at /photo-credits, linked in
 * the footer, which satisfies CC BY / BY-SA visible-credit requirements.
 */
const CITIES = [
  { name: "Miami", state: "FL", href: "/florida/miami", img: "miami" },
  { name: "New York", state: "NY", href: "/new-york/new-york", img: "new-york" },
  { name: "Los Angeles", state: "CA", href: "/california/los-angeles", img: "los-angeles" },
  { name: "Houston", state: "TX", href: "/texas/houston", img: "houston" },
  { name: "Austin", state: "TX", href: "/texas/austin", img: "austin" },
  { name: "Dallas", state: "TX", href: "/texas/dallas", img: "dallas" },
  { name: "Chicago", state: "IL", href: "/illinois/chicago", img: "chicago" },
  { name: "Atlanta", state: "GA", href: "/georgia/atlanta", img: "atlanta" },
  { name: "Phoenix", state: "AZ", href: "/arizona/phoenix", img: "phoenix" },
  { name: "San Francisco", state: "CA", href: "/california/san-francisco", img: "san-francisco" },
  { name: "Boston", state: "MA", href: "/massachusetts/boston", img: "boston" },
  { name: "Fort Lauderdale", state: "FL", href: "/florida/fort-lauderdale", img: "fort-lauderdale" },
];

export function CityPhotoGrid() {
  const counts = new Map<string, number>();
  for (const c of padelCourts) {
    if (c.status === "coming_soon" || c.status === "temporarily_closed") continue;
    const key = `${c.city}|${c.state}`;
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {CITIES.map((city) => {
        const n = counts.get(`${city.name}|${city.state}`) ?? 0;
        return (
          <Link
            key={city.img}
            href={city.href}
            className="group relative rounded-xl overflow-hidden aspect-[3/2] block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/cities/${city.img}.jpg`}
              alt={`Padel courts in ${city.name}, ${city.state}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-court/90 via-court/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="font-display font-bold text-white text-lg leading-tight">
                {city.name}, {city.state}
              </div>
              <div className="text-turf text-sm font-medium">
                {n > 0 ? `${n} ${n === 1 ? "club" : "clubs"}` : "View guide"} &rarr;
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
