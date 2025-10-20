/**
 * Geocoding Script for Padel Courts
 *
 * This script finds all clubs missing specific coordinates and geocodes them
 * using the Google Geocoding API.
 *
 * Usage:
 *   1. Set GOOGLE_GEOCODING_API_KEY environment variable
 *   2. Run: npx tsx scripts/geocode-clubs.ts
 *   3. Review output in geocoded-results.json
 *   4. Manually add to src/lib/court-adapter.ts coordinateMap
 */

import { padelCourts } from '../src/data/padel-courts';

// Clubs that already have coordinates in coordinateMap
const CLUBS_WITH_COORDINATES = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 34, 35, 36, 37, 38, 40, 41, 42, 43,
  44, 45, 46, 47, 48, 50, 51, 58, 83, 84, 85, 86, 132
];

interface GeocodedResult {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  latitude: number;
  longitude: number;
  formattedAddress: string;
  confidence: 'ROOFTOP' | 'RANGE_INTERPOLATED' | 'GEOMETRIC_CENTER' | 'APPROXIMATE';
}

interface GoogleGeocodingResponse {
  results: Array<{
    formatted_address: string;
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
      location_type: string;
    };
  }>;
  status: string;
}

/**
 * Geocode a single address using Google Geocoding API
 */
async function geocodeAddress(
  address: string,
  city: string,
  state: string,
  zipCode: string,
  apiKey: string
): Promise<{ lat: number; lng: number; formatted: string; confidence: string } | null> {
  const fullAddress = `${address}, ${city}, ${state} ${zipCode}, USA`;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(fullAddress)}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data: GoogleGeocodingResponse = await response.json();

    if (data.status === 'OK' && data.results.length > 0) {
      const result = data.results[0];
      return {
        lat: result.geometry.location.lat,
        lng: result.geometry.location.lng,
        formatted: result.formatted_address,
        confidence: result.geometry.location_type
      };
    } else {
      console.error(`Geocoding failed for ${fullAddress}: ${data.status}`);
      return null;
    }
  } catch (error) {
    console.error(`Error geocoding ${fullAddress}:`, error);
    return null;
  }
}

/**
 * Add delay between API calls to respect rate limits
 */
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Main geocoding function
 */
async function geocodeAllClubs() {
  const apiKey = process.env.GOOGLE_GEOCODING_API_KEY;

  if (!apiKey) {
    console.error('❌ ERROR: GOOGLE_GEOCODING_API_KEY environment variable not set!');
    console.error('\nUsage:');
    console.error('  export GOOGLE_GEOCODING_API_KEY="your-api-key-here"');
    console.error('  npx tsx scripts/geocode-clubs.ts');
    process.exit(1);
  }

  // Find clubs without coordinates
  const clubsToGeocode = padelCourts.filter(
    club => !CLUBS_WITH_COORDINATES.includes(club.id)
  );

  console.log('🗺️  Padel Courts Geocoding Script');
  console.log('=====================================\n');
  console.log(`📊 Total clubs in database: ${padelCourts.length}`);
  console.log(`✅ Clubs with coordinates: ${CLUBS_WITH_COORDINATES.length}`);
  console.log(`❌ Clubs missing coordinates: ${clubsToGeocode.length}\n`);
  console.log(`💰 Estimated cost: $${(clubsToGeocode.length * 0.005).toFixed(2)}`);
  console.log(`⏱️  Estimated time: ${Math.ceil(clubsToGeocode.length * 1.2 / 60)} minutes\n`);

  const proceed = process.argv.includes('--run');
  if (!proceed) {
    console.log('⚠️  DRY RUN MODE - No API calls will be made');
    console.log('\nTo actually geocode, run:');
    console.log('  npx tsx scripts/geocode-clubs.ts --run\n');
    console.log('Preview of clubs to geocode:\n');
    clubsToGeocode.slice(0, 10).forEach(club => {
      console.log(`  ID ${club.id}: ${club.name} - ${club.address}, ${club.city}, ${club.state}`);
    });
    if (clubsToGeocode.length > 10) {
      console.log(`  ... and ${clubsToGeocode.length - 10} more`);
    }
    return;
  }

  console.log('🚀 Starting geocoding process...\n');

  const results: GeocodedResult[] = [];
  const failures: Array<{ id: number; name: string; reason: string }> = [];

  for (let i = 0; i < clubsToGeocode.length; i++) {
    const club = clubsToGeocode[i];
    const progress = `[${i + 1}/${clubsToGeocode.length}]`;

    console.log(`${progress} Geocoding: ${club.name}`);
    console.log(`           ${club.address}, ${club.city}, ${club.state} ${club.zipCode}`);

    const result = await geocodeAddress(
      club.address,
      club.city,
      club.state,
      club.zipCode,
      apiKey
    );

    if (result) {
      results.push({
        id: club.id,
        name: club.name,
        address: club.address,
        city: club.city,
        state: club.state,
        zipCode: club.zipCode,
        latitude: result.lat,
        longitude: result.lng,
        formattedAddress: result.formatted,
        confidence: result.confidence as any
      });
      console.log(`           ✅ ${result.lat}, ${result.lng} (${result.confidence})\n`);
    } else {
      failures.push({
        id: club.id,
        name: club.name,
        reason: 'Geocoding API failed'
      });
      console.log(`           ❌ Failed\n`);
    }

    // Rate limiting: 50 requests per second = 20ms delay minimum
    // Using 1.2s delay to be extra safe
    if (i < clubsToGeocode.length - 1) {
      await delay(1200);
    }
  }

  // Output results
  console.log('\n=====================================');
  console.log('📊 GEOCODING SUMMARY');
  console.log('=====================================\n');
  console.log(`✅ Successfully geocoded: ${results.length}`);
  console.log(`❌ Failed: ${failures.length}\n`);

  if (failures.length > 0) {
    console.log('Failed clubs:');
    failures.forEach(f => {
      console.log(`  - ID ${f.id}: ${f.name} (${f.reason})`);
    });
    console.log('');
  }

  // Save to JSON file
  const fs = await import('fs/promises');
  await fs.writeFile(
    './geocoded-results.json',
    JSON.stringify(results, null, 2)
  );
  console.log('💾 Results saved to: geocoded-results.json\n');

  // Generate TypeScript code to paste into court-adapter.ts
  console.log('=====================================');
  console.log('📝 CODE TO ADD TO coordinateMap');
  console.log('=====================================\n');
  console.log('Copy this into src/lib/court-adapter.ts coordinateMap:\n');

  const sortedResults = results.sort((a, b) => a.id - b.id);
  sortedResults.forEach(r => {
    console.log(`  ${r.id}: { latitude: ${r.latitude}, longitude: ${r.longitude} }, // ${r.name}, ${r.city}, ${r.state}`);
  });

  console.log('\n✅ Geocoding complete!');
  console.log(`💰 Actual cost: $${(results.length * 0.005).toFixed(2)}`);
}

// Run the script
geocodeAllClubs().catch(console.error);
