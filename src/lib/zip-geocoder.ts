/**
 * ZIP Code Geocoding Utility
 * 
 * Uses free zippopotam.us API to convert ZIP codes to coordinates
 */

interface ZipCodeData {
  latitude: number;
  longitude: number;
  city: string;
  state: string;
}

/**
 * Geocode a US ZIP code to get coordinates
 * Returns null if ZIP code not found or invalid
 */
export async function geocodeZipCode(zipCode: string): Promise<ZipCodeData | null> {
  try {
    // Clean ZIP code (remove spaces, dashes, only keep first 5 digits)
    const cleanZip = zipCode.replace(/\D/g, '').slice(0, 5);
    
    if (cleanZip.length !== 5) {
      return null;
    }

    // Use free zippopotam.us API (no key required)
    const response = await fetch(`https://api.zippopotam.us/us/${cleanZip}`, {
      cache: 'force-cache', // Cache ZIP lookups
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    // Extract first place from results
    const place = data.places?.[0];
    if (!place) {
      return null;
    }

    return {
      latitude: parseFloat(place.latitude),
      longitude: parseFloat(place.longitude),
      city: place['place name'],
      state: place['state abbreviation'],
    };
  } catch (error) {
    console.error('ZIP geocoding error:', error);
    return null;
  }
}

/**
 * Check if a string is a valid US ZIP code format
 */
export function isZipCode(str: string): boolean {
  const cleaned = str.replace(/\D/g, '');
  return cleaned.length === 5 && /^\d{5}$/.test(cleaned);
}
