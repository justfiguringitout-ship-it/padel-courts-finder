/**
 * Coordinate sanity checks for the club maps.
 *
 * One pin at (0, 0) or in the wrong hemisphere is enough to make fitBounds
 * zoom a state map out to the whole world, so maps only plot coordinates that
 * fall inside a generous US box (contiguous US, Alaska, Hawaii, Puerto Rico
 * and the USVI).
 */

const US_BOUNDS = {
  south: 17.5, // Puerto Rico / USVI
  north: 71.5, // northern Alaska
  west: -180, // western Aleutians (east of the antimeridian)
  east: -64.5, // USVI / eastern Maine
};

export function isPlausibleUSCoordinate(lat: unknown, lng: unknown): boolean {
  if (typeof lat !== "number" || typeof lng !== "number") return false;
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return false;
  if (lat === 0 && lng === 0) return false;
  return (
    lat >= US_BOUNDS.south &&
    lat <= US_BOUNDS.north &&
    lng >= US_BOUNDS.west &&
    lng <= US_BOUNDS.east
  );
}
