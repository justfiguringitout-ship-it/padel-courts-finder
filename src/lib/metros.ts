import { getAllAdaptedCourts } from "@/lib/court-adapter";

/**
 * Major US cities for the /padel-near/[city] long-tail pages.
 * Coordinates are city centers. A city is EXCLUDED from page generation
 * when the directory already has a club whose city matches by name —
 * those cities have real /[state]/[city] directory pages instead, and
 * duplicating them would be doorway-page territory.
 */
export interface Metro {
  slug: string;
  name: string;
  stateName: string;
  stateCode: string;
  lat: number;
  lng: number;
}

const m = (name: string, stateName: string, stateCode: string, lat: number, lng: number): Metro => ({
  slug: name.toLowerCase().replace(/[^a-z]+/g, "-"),
  name,
  stateName,
  stateCode,
  lat,
  lng,
});

export const METROS: Metro[] = [
  m("New York", "New York", "NY", 40.71, -74.01),
  m("Los Angeles", "California", "CA", 34.05, -118.24),
  m("Chicago", "Illinois", "IL", 41.88, -87.63),
  m("Houston", "Texas", "TX", 29.76, -95.37),
  m("Phoenix", "Arizona", "AZ", 33.45, -112.07),
  m("Philadelphia", "Pennsylvania", "PA", 39.95, -75.17),
  m("San Antonio", "Texas", "TX", 29.42, -98.49),
  m("San Diego", "California", "CA", 32.72, -117.16),
  m("Dallas", "Texas", "TX", 32.78, -96.8),
  m("Austin", "Texas", "TX", 30.27, -97.74),
  m("Jacksonville", "Florida", "FL", 30.33, -81.66),
  m("Fort Worth", "Texas", "TX", 32.76, -97.33),
  m("Columbus", "Ohio", "OH", 39.96, -83.0),
  m("Charlotte", "North Carolina", "NC", 35.23, -80.84),
  m("San Francisco", "California", "CA", 37.77, -122.42),
  m("Indianapolis", "Indiana", "IN", 39.77, -86.16),
  m("Seattle", "Washington", "WA", 47.61, -122.33),
  m("Denver", "Colorado", "CO", 39.74, -104.99),
  m("Oklahoma City", "Oklahoma", "OK", 35.47, -97.52),
  m("Nashville", "Tennessee", "TN", 36.16, -86.78),
  m("El Paso", "Texas", "TX", 31.76, -106.49),
  m("Washington", "District of Columbia", "DC", 38.91, -77.04),
  m("Boston", "Massachusetts", "MA", 42.36, -71.06),
  m("Las Vegas", "Nevada", "NV", 36.17, -115.14),
  m("Portland", "Oregon", "OR", 45.52, -122.68),
  m("Detroit", "Michigan", "MI", 42.33, -83.05),
  m("Louisville", "Kentucky", "KY", 38.25, -85.76),
  m("Memphis", "Tennessee", "TN", 35.15, -90.05),
  m("Baltimore", "Maryland", "MD", 39.29, -76.61),
  m("Milwaukee", "Wisconsin", "WI", 43.04, -87.91),
  m("Albuquerque", "New Mexico", "NM", 35.08, -106.65),
  m("Tucson", "Arizona", "AZ", 32.22, -110.97),
  m("Fresno", "California", "CA", 36.75, -119.77),
  m("Sacramento", "California", "CA", 38.58, -121.49),
  m("Mesa", "Arizona", "AZ", 33.42, -111.83),
  m("Kansas City", "Missouri", "MO", 39.1, -94.58),
  m("Atlanta", "Georgia", "GA", 33.75, -84.39),
  m("Colorado Springs", "Colorado", "CO", 38.83, -104.82),
  m("Omaha", "Nebraska", "NE", 41.26, -95.93),
  m("Raleigh", "North Carolina", "NC", 35.78, -78.64),
  m("Miami", "Florida", "FL", 25.76, -80.19),
  m("Virginia Beach", "Virginia", "VA", 36.85, -75.98),
  m("Oakland", "California", "CA", 37.8, -122.27),
  m("Minneapolis", "Minnesota", "MN", 44.98, -93.27),
  m("Tulsa", "Oklahoma", "OK", 36.15, -95.99),
  m("Arlington", "Texas", "TX", 32.74, -97.11),
  m("Tampa", "Florida", "FL", 27.95, -82.46),
  m("New Orleans", "Louisiana", "LA", 29.95, -90.07),
  m("Wichita", "Kansas", "KS", 37.69, -97.34),
  m("Cleveland", "Ohio", "OH", 41.5, -81.69),
  m("Bakersfield", "California", "CA", 35.37, -119.02),
  m("Aurora", "Colorado", "CO", 39.73, -104.83),
  m("Anaheim", "California", "CA", 33.84, -117.91),
  m("Honolulu", "Hawaii", "HI", 21.31, -157.86),
  m("Santa Ana", "California", "CA", 33.75, -117.87),
  m("Riverside", "California", "CA", 33.95, -117.4),
  m("Corpus Christi", "Texas", "TX", 27.8, -97.4),
  m("Lexington", "Kentucky", "KY", 38.04, -84.5),
  m("Stockton", "California", "CA", 37.96, -121.29),
  m("Henderson", "Nevada", "NV", 36.04, -114.98),
  m("Saint Paul", "Minnesota", "MN", 44.95, -93.09),
  m("St. Louis", "Missouri", "MO", 38.63, -90.2),
  m("Cincinnati", "Ohio", "OH", 39.1, -84.51),
  m("Pittsburgh", "Pennsylvania", "PA", 40.44, -80.0),
  m("Greensboro", "North Carolina", "NC", 36.07, -79.79),
  m("Anchorage", "Alaska", "AK", 61.22, -149.9),
  m("Plano", "Texas", "TX", 33.02, -96.7),
  m("Lincoln", "Nebraska", "NE", 40.81, -96.68),
  m("Orlando", "Florida", "FL", 28.54, -81.38),
  m("Irvine", "California", "CA", 33.68, -117.83),
  m("Newark", "New Jersey", "NJ", 40.74, -74.17),
  m("Durham", "North Carolina", "NC", 35.99, -78.9),
  m("Chula Vista", "California", "CA", 32.64, -117.08),
  m("Toledo", "Ohio", "OH", 41.65, -83.54),
  m("Fort Wayne", "Indiana", "IN", 41.08, -85.14),
  m("St. Petersburg", "Florida", "FL", 27.77, -82.64),
  m("Laredo", "Texas", "TX", 27.51, -99.51),
  m("Jersey City", "New Jersey", "NJ", 40.73, -74.08),
  m("Chandler", "Arizona", "AZ", 33.31, -111.84),
  m("Madison", "Wisconsin", "WI", 43.07, -89.4),
  m("Lubbock", "Texas", "TX", 33.58, -101.86),
  m("Scottsdale", "Arizona", "AZ", 33.49, -111.93),
  m("Reno", "Nevada", "NV", 39.53, -119.81),
  m("Buffalo", "New York", "NY", 42.89, -78.88),
  m("Gilbert", "Arizona", "AZ", 33.35, -111.79),
  m("Glendale", "Arizona", "AZ", 33.54, -112.19),
  m("North Las Vegas", "Nevada", "NV", 36.2, -115.12),
  m("Winston-Salem", "North Carolina", "NC", 36.1, -80.24),
  m("Chesapeake", "Virginia", "VA", 36.77, -76.29),
  m("Norfolk", "Virginia", "VA", 36.85, -76.29),
  m("Fremont", "California", "CA", 37.55, -121.99),
  m("Garland", "Texas", "TX", 32.91, -96.64),
  m("Irving", "Texas", "TX", 32.81, -96.95),
  m("Hialeah", "Florida", "FL", 25.86, -80.28),
  m("Richmond", "Virginia", "VA", 37.54, -77.44),
  m("Boise", "Idaho", "ID", 43.62, -116.21),
  m("Spokane", "Washington", "WA", 47.66, -117.43),
  m("Baton Rouge", "Louisiana", "LA", 30.45, -91.15),
  m("Tacoma", "Washington", "WA", 47.25, -122.44),
  m("San Bernardino", "California", "CA", 34.11, -117.29),
  m("Modesto", "California", "CA", 37.64, -120.99),
  m("Fontana", "California", "CA", 34.09, -117.44),
  m("Des Moines", "Iowa", "IA", 41.59, -93.62),
  m("Moreno Valley", "California", "CA", 33.94, -117.23),
  m("Santa Clarita", "California", "CA", 34.39, -118.54),
  m("Fayetteville", "North Carolina", "NC", 35.05, -78.88),
  m("Birmingham", "Alabama", "AL", 33.52, -86.81),
  m("Oxnard", "California", "CA", 34.2, -119.18),
  m("Rochester", "New York", "NY", 43.16, -77.61),
  m("Port St. Lucie", "Florida", "FL", 27.27, -80.35),
  m("Grand Rapids", "Michigan", "MI", 42.96, -85.66),
  m("Huntsville", "Alabama", "AL", 34.73, -86.59),
  m("Salt Lake City", "Utah", "UT", 40.76, -111.89),
  m("Frisco", "Texas", "TX", 33.15, -96.82),
  m("Yonkers", "New York", "NY", 40.93, -73.9),
  m("Amarillo", "Texas", "TX", 35.22, -101.83),
  m("Glendale", "California", "CA", 34.14, -118.25),
  m("Huntington Beach", "California", "CA", 33.66, -118.0),
  m("McKinney", "Texas", "TX", 33.2, -96.62),
  m("Montgomery", "Alabama", "AL", 32.38, -86.31),
  m("Augusta", "Georgia", "GA", 33.47, -81.97),
  m("Columbus", "Georgia", "GA", 32.46, -84.99),
  m("Akron", "Ohio", "OH", 41.08, -81.52),
  m("Little Rock", "Arkansas", "AR", 34.75, -92.29),
  m("Providence", "Rhode Island", "RI", 41.82, -71.41),
  m("Knoxville", "Tennessee", "TN", 35.96, -83.92),
  m("Chattanooga", "Tennessee", "TN", 35.05, -85.31),
  m("Worcester", "Massachusetts", "MA", 42.26, -71.8),
  m("Grand Prairie", "Texas", "TX", 32.75, -96.99),
];

// Dedupe slugs (two Glendales, two Columbuses) — keep the larger city, skip the second
const seen = new Set<string>();
export const UNIQUE_METROS: Metro[] = METROS.filter((mm) => {
  if (seen.has(mm.slug)) return false;
  seen.add(mm.slug);
  return true;
});

/**
 * Metros that get a /padel-near page: those where the directory has NO club
 * whose city matches the metro name (those cities have real directory pages).
 */
export function getPadelNearMetros(): Metro[] {
  const clubCities = new Set(
    getAllAdaptedCourts().map((c) => c.address.city.toLowerCase().trim())
  );
  return UNIQUE_METROS.filter((mm) => !clubCities.has(mm.name.toLowerCase()));
}
