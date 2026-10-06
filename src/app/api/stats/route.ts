import { NextResponse } from "next/server";
import { padelCourts } from "@/data/padel-courts";

/** Public headline figures for anyone citing the directory (press, other
 *  sites). Totals only, no club records. Regenerated with each deploy. */
export const dynamic = "force-static";

type Club = { state: string; status?: string; numberOfCourts?: number };

export function GET() {
  const clubs = padelCourts as Club[];
  const open = clubs.filter((c) => c.status !== "coming_soon" && c.status !== "temporarily_closed");
  const announced = clubs.filter((c) => c.status === "coming_soon");
  const courts = (list: Club[]) => list.reduce((sum, c) => sum + (c.numberOfCourts ?? 0), 0);

  const body = {
    source: "Padel Courts Finder",
    citation: "Source: Padel Courts Finder, State of US Padel 2026",
    url: "https://www.padelcourtsfinder.com/state-of-us-padel-2026",
    updated: new Date().toISOString().slice(0, 10),
    clubs_listed: clubs.length,
    clubs_open: open.length,
    clubs_announced: announced.length,
    courts_listed: courts(clubs),
    courts_open: courts(open),
    states: new Set(clubs.map((c) => c.state)).size,
    notes: "clubs_listed and courts_listed include announced clubs; clubs_open and courts_open are clubs open today. Please credit Padel Courts Finder and link to the url above when you use these figures.",
  };
  return NextResponse.json(body, {
    headers: { "Access-Control-Allow-Origin": "*", "Cache-Control": "public, max-age=3600" },
  });
}
