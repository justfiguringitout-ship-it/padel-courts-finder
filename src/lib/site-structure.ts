/**
 * Site Structure Helper
 *
 * Generates site navigation structure from court data
 */

import { padelCourts } from "@/data/padel-courts";
import { generateSlug } from "./court-adapter";

export interface StateInfo {
  name: string;
  code: string;
  slug: string;
  courtCount: number;
  cities: CityInfo[];
}

export interface CityInfo {
  name: string;
  state: string;
  stateCode: string;
  slug: string;
  courtCount: number;
  courts: string[]; // Court slugs
}

/**
 * Get unique states with court counts
 */
export function getStates(): StateInfo[] {
  const stateMap = new Map<string, StateInfo>();

  padelCourts.forEach((court) => {
    const stateCode = court.state;

    // Map state codes to full names
    const stateNames: Record<string, string> = {
      FL: "Florida",
      TX: "Texas",
      CA: "California",
      NY: "New York",
      TN: "Tennessee",
      IL: "Illinois",
      PA: "Pennsylvania",
      NJ: "New Jersey",
      AZ: "Arizona",
      MO: "Missouri",
      NC: "North Carolina",
    };

    const stateName = stateNames[stateCode] || stateCode;
    const slug = stateName.toLowerCase().replace(/\s+/g, "-");

    if (!stateMap.has(stateCode)) {
      stateMap.set(stateCode, {
        name: stateName,
        code: stateCode,
        slug,
        courtCount: 0,
        cities: [],
      });
    }

    const stateInfo = stateMap.get(stateCode)!;
    stateInfo.courtCount++;
  });

  // Add cities to each state
  stateMap.forEach((stateInfo) => {
    stateInfo.cities = getCitiesByState(stateInfo.code);
  });

  return Array.from(stateMap.values()).sort((a, b) => b.courtCount - a.courtCount);
}

/**
 * Get cities for a specific state
 */
export function getCitiesByState(stateCode: string): CityInfo[] {
  const cityMap = new Map<string, CityInfo>();

  padelCourts
    .filter((court) => court.state === stateCode)
    .forEach((court) => {
      const cityName = court.city;
      const citySlug = cityName.toLowerCase().replace(/\s+/g, "-");

      if (!cityMap.has(cityName)) {
        cityMap.set(cityName, {
          name: cityName,
          state: court.state,
          stateCode: court.state,
          slug: citySlug,
          courtCount: 0,
          courts: [],
        });
      }

      const cityInfo = cityMap.get(cityName)!;
      cityInfo.courtCount++;
      cityInfo.courts.push(generateSlug(court.name));
    });

  return Array.from(cityMap.values()).sort((a, b) => b.courtCount - a.courtCount);
}

/**
 * Get all cities across all states
 */
export function getAllCities(): CityInfo[] {
  const cityMap = new Map<string, CityInfo>();

  padelCourts.forEach((court) => {
    const cityKey = `${court.city}-${court.state}`;
    const citySlug = court.city.toLowerCase().replace(/\s+/g, "-");

    if (!cityMap.has(cityKey)) {
      cityMap.set(cityKey, {
        name: court.city,
        state: court.state,
        stateCode: court.state,
        slug: citySlug,
        courtCount: 0,
        courts: [],
      });
    }

    const cityInfo = cityMap.get(cityKey)!;
    cityInfo.courtCount++;
    cityInfo.courts.push(generateSlug(court.name));
  });

  return Array.from(cityMap.values()).sort((a, b) => b.courtCount - a.courtCount);
}

/**
 * Get city info by slug and state
 */
export function getCityBySlug(stateSlug: string, citySlug: string): CityInfo | undefined {
  const stateCode = getStateCodeFromSlug(stateSlug);
  if (!stateCode) return undefined;

  const cities = getCitiesByState(stateCode);
  return cities.find((c) => c.slug === citySlug);
}

/**
 * Get state code from slug
 */
function getStateCodeFromSlug(slug: string): string | undefined {
  const slugToCode: Record<string, string> = {
    florida: "FL",
    texas: "TX",
    california: "CA",
    "new-york": "NY",
    tennessee: "TN",
    illinois: "IL",
    pennsylvania: "PA",
    "new-jersey": "NJ",
    arizona: "AZ",
    missouri: "MO",
    "north-carolina": "NC",
  };

  return slugToCode[slug];
}

/**
 * Get state info by slug
 */
export function getStateBySlug(slug: string): StateInfo | undefined {
  const states = getStates();
  return states.find((s) => s.slug === slug);
}

/**
 * Get site statistics
 */
export function getSiteStats() {
  const states = getStates();
  const cities = getAllCities();

  return {
    totalCourts: padelCourts.length,
    totalStates: states.length,
    totalCities: cities.length,
    topStates: states.slice(0, 5),
    topCities: cities.slice(0, 10),
  };
}
