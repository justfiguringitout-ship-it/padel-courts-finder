/**
 * Court Data Adapter
 *
 * Converts existing PadelCourt data format to the format expected by court detail pages
 */

import { PadelCourt as ExistingCourt } from "@/types/padel-court";
import { padelCourts } from "@/data/padel-courts";

// Coordinate mapping for all clubs (from geocoding via Google Geocoding API)
const coordinateMap: Record<number, { latitude: number; longitude: number }> = {
  // Original manually geocoded clubs
  1: { latitude: 25.8357, longitude: -80.1885 },
  2: { latitude: 40.9176, longitude: -73.7849 },
  3: { latitude: 26.0065, longitude: -80.2225 },
  4: { latitude: 26.2704, longitude: -80.1742 },
  5: { latitude: 25.7970, longitude: -80.1990 },
  6: { latitude: 25.7447, longitude: -80.2384 },
  7: { latitude: 25.7937, longitude: -80.1920 },
  8: { latitude: 29.8084, longitude: -95.5728 },
  9: { latitude: 26.5584, longitude: -80.0745 },
  10: { latitude: 25.9706, longitude: -80.1688 },
  11: { latitude: 25.6364, longitude: -80.4990 },
  12: { latitude: 34.059, longitude: -118.420 },
  13: { latitude: 26.1196, longitude: -80.1437 },
  14: { latitude: 25.7917, longitude: -80.1400 },
  15: { latitude: 25.7856, longitude: -80.3213 },
  16: { latitude: 25.8706, longitude: -80.2092 },
  17: { latitude: 29.9424, longitude: -95.5567 },
  18: { latitude: 40.7032, longitude: -73.9838 },
  19: { latitude: 26.1862, longitude: -80.1560 },
  20: { latitude: 30.1657, longitude: -95.4613 },
  21: { latitude: 25.7858508, longitude: -80.3418635 },
  22: { latitude: 28.4527277, longitude: -81.4608156 },
  23: { latitude: 35.119693, longitude: -80.868499 },
  24: { latitude: 25.8335, longitude: -80.3312 },
  25: { latitude: 26.0832, longitude: -80.2213 },
  26: { latitude: 36.0934, longitude: -86.7548 },
  27: { latitude: 25.957389, longitude: -80.142646 },
  28: { latitude: 25.949, longitude: -80.1944 },
  29: { latitude: 25.851915, longitude: -80.14131 },
  34: { latitude: 25.851915, longitude: -80.14131 },
  35: { latitude: 40.9602901, longitude: -72.2442364 },
  36: { latitude: 34.1571414, longitude: -118.4373027 },
  37: { latitude: 25.8907, longitude: -80.1767 },
  38: { latitude: 38.9583, longitude: -94.6694 },
  40: { latitude: 33.1943, longitude: -117.3776 },
  41: { latitude: 26.492691, longitude: -80.086586 },
  42: { latitude: 36.1799461, longitude: -86.7832455 },
  43: { latitude: 32.2367, longitude: -110.8726 },
  44: { latitude: 41.823027, longitude: -87.665744 },
  45: { latitude: 25.8753, longitude: -80.3685 },
  46: { latitude: 25.9872, longitude: -80.1532 },
  47: { latitude: 29.8134, longitude: -95.4770 },
  48: { latitude: 40.6135, longitude: -79.9603 },
  50: { latitude: 40.3192615, longitude: -74.0359834 },
  51: { latitude: 33.3477235, longitude: -111.965268 },
  58: { latitude: 40.7303, longitude: -73.9579 },
  // Geocoded via Google API (October 2025)
  52: { latitude: 25.8983889, longitude: -80.2226331 },
  53: { latitude: 25.787633, longitude: -80.19146239999999 },
  54: { latitude: 42.9950599, longitude: -87.9207546 },
  55: { latitude: 37.7998957, longitude: -122.3984239 },
  56: { latitude: 37.66046120000001, longitude: -122.3904865 },
  57: { latitude: 38.5748325, longitude: -121.5146076 },
  59: { latitude: 25.8128711, longitude: -80.1940666 },
  60: { latitude: 25.7836433, longitude: -80.17756729999999 },
  61: { latitude: 25.9112275, longitude: -80.1535835 },
  62: { latitude: 25.898494, longitude: -80.2219904 },
  63: { latitude: 25.8310624, longitude: -80.33491769999999 },
  64: { latitude: 39.0066993, longitude: -77.4291298 },
  65: { latitude: 34.026452, longitude: -118.3652122 },
  66: { latitude: 42.5442913, longitude: -83.04102089999999 },
  67: { latitude: 34.0791098, longitude: -118.2687094 },
  68: { latitude: 36.1697096, longitude: -115.1236952 },
  69: { latitude: 32.2122731, longitude: -110.9613934 },
  70: { latitude: 32.2182322, longitude: -110.9623992 },
  71: { latitude: 28.3599961, longitude: -81.4931131 },
  72: { latitude: 28.5058949, longitude: -81.3776244 },
  73: { latitude: 36.1807191, longitude: -86.7835139 },
  74: { latitude: 33.557575, longitude: -117.1564652 },
  75: { latitude: 32.7539709, longitude: -117.2349091 },
  76: { latitude: 42.231809, longitude: -71.1708769 },
  77: { latitude: 25.7817426, longitude: -80.26462649999999 },
  78: { latitude: 25.9961287, longitude: -80.1635982 },
  79: { latitude: 39.0207668, longitude: -77.004626 },
  80: { latitude: 38.9647051, longitude: -77.107548 },
  81: { latitude: 38.9797454, longitude: -76.9264489 },
  82: { latitude: 40.3192615, longitude: -74.03598339999999 },
  83: { latitude: 40.5886, longitude: -73.9378 },
  84: { latitude: 40.7081, longitude: -73.9571 },
  85: { latitude: 40.8157, longitude: -73.9537 },
  86: { latitude: 40.9359, longitude: -73.1167 },
  87: { latitude: 41.0864613, longitude: -73.4150202 },
  88: { latitude: 40.5279459, longitude: -80.1387048 },
  89: { latitude: 42.0985904, longitude: -87.81386599999999 },
  90: { latitude: 41.8226457, longitude: -87.666601 },
  91: { latitude: 42.2474456, longitude: -87.9859567 },
  92: { latitude: 37.8184377, longitude: -122.3670083 },
  93: { latitude: 37.7586689, longitude: -122.3839131 },
  94: { latitude: 37.4144993, longitude: -122.0135217 },
  95: { latitude: 34.1568918, longitude: -118.43639 },
  96: { latitude: 33.7763292, longitude: -116.2998737 },
  97: { latitude: 33.1937567, longitude: -117.3772287 },
  98: { latitude: 32.89845650000001, longitude: -117.2014694 },
  99: { latitude: 32.8223223, longitude: -117.2261814 },
  100: { latitude: 32.2802363, longitude: -110.9279378 },
  101: { latitude: 40.8664861, longitude: -111.9134954 },
  102: { latitude: 39.5789301, longitude: -104.8612308 },
  103: { latitude: 39.7541032, longitude: -105.0002242 },
  104: { latitude: 38.8413423, longitude: -104.8162784 },
  105: { latitude: 39.5815071, longitude: -104.7170954 },
  106: { latitude: 31.793786, longitude: -106.493598 },
  107: { latitude: 26.2188442, longitude: -98.2322355 },
  108: { latitude: 25.9964301, longitude: -97.5788975 },
  109: { latitude: 35.0848894, longitude: -106.6468148 },
  110: { latitude: 35.1009909, longitude: -106.5701927 },
  111: { latitude: 29.46357, longitude: -98.5226706 },
  112: { latitude: 29.422658, longitude: -98.48699049999999 },
  113: { latitude: 30.2729209, longitude: -97.74438630000002 },
  114: { latitude: 30.24567279999999, longitude: -97.76883579999999 },
  115: { latitude: 30.1859258, longitude: -97.90482 },
  116: { latitude: 30.1902067, longitude: -98.0866781 },
  117: { latitude: 32.788993, longitude: -96.7989312 },
  118: { latitude: 29.7889257, longitude: -98.19942759999999 },
  119: { latitude: 34.0716538, longitude: -84.3068644 },
  120: { latitude: 33.755711, longitude: -84.3883717 },
  121: { latitude: 33.7946333, longitude: -84.44877199999999 },
  122: { latitude: 33.8363126, longitude: -84.38574419999999 },
  123: { latitude: 28.4527778, longitude: -81.4608535 },
  124: { latitude: 28.5542151, longitude: -81.34544170000001 },
  125: { latitude: 35.2326781, longitude: -80.8460822 },
  126: { latitude: 35.092109, longitude: -80.7231741 },
  127: { latitude: 18.4679641, longitude: -66.1088086 },
  128: { latitude: 18.3902046, longitude: -66.1504497 },
  129: { latitude: 18.4402095, longitude: -66.0047211 },
  130: { latitude: 26.4948227, longitude: -80.0866226 },
  131: { latitude: 25.8521122, longitude: -80.1410918 },
  132: { latitude: 40.9602901, longitude: -72.2442364 },
  133: { latitude: 25.8909585, longitude: -80.17457499999999 },
  134: { latitude: 38.9649414, longitude: -94.6639668 },
  135: { latitude: 33.7717008, longitude: -84.3726049 },
  136: { latitude: 33.8644651, longitude: -118.2628949 },
  137: { latitude: 37.9764934, longitude: -121.3171911 },
  138: { latitude: 33.7158496, longitude: -116.3767807 },
  139: { latitude: 32.9381616, longitude: -117.1978827 },
  140: { latitude: 33.5106684, longitude: -112.029752 },
  141: { latitude: 33.3258407, longitude: -111.6798878 },
  142: { latitude: 30.3079798, longitude: -97.9546225 },
  143: { latitude: 32.929666, longitude: -96.88252299999999 },
  144: { latitude: 32.9365823, longitude: -96.8255516 },
  145: { latitude: 33.1236856, longitude: -96.81584099999999 },
  146: { latitude: 32.0173071, longitude: -102.1354324 },
  147: { latitude: 40.7551658, longitude: -74.0018189 },
  148: { latitude: 40.7031429, longitude: -73.9875891 },
  149: { latitude: 40.7155925, longitude: -73.9639687 },
  150: { latitude: 40.683223, longitude: -73.9680142 },
  151: { latitude: 40.9646619, longitude: -72.1877969 },
  152: { latitude: 28.3992174, longitude: -81.2789066 },
  153: { latitude: 28.4842556, longitude: -81.4575523 },
  154: { latitude: 28.5202591, longitude: -81.3766562 },
  155: { latitude: 26.1046326, longitude: -80.1436854 },
  156: { latitude: 25.7739503, longitude: -80.1385842 },
  157: { latitude: 41.9293444, longitude: -87.6637577 },
  158: { latitude: 41.883627, longitude: -87.652422 },
  159: { latitude: 42.084079, longitude: -87.8674326 },
  160: { latitude: 42.1843563, longitude: -87.8043074 },
  161: { latitude: 42.2412841, longitude: -87.97899129999999 },
  162: { latitude: 33.9187479, longitude: -84.19241869999999 },
  163: { latitude: 42.3771008, longitude: -71.0833641 },
  164: { latitude: 36.1681011, longitude: -86.7833501 },
  165: { latitude: 35.1376809, longitude: -80.71398649999999 },
  166: { latitude: 42.2541097, longitude: -71.16935939999999 },
};

// Helper function to generate URL-friendly slug from court name
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens
}

// Helper to convert opening hours format
function convertOpeningHours(hours: ExistingCourt["openingHours"]) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const hourKeys = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  return days.map((day, index) => {
    const hourString = hours[hourKeys[index] as keyof typeof hours];

    if (hourString === "varies" || hourString === "24h") {
      return {
        dayOfWeek: day,
        opens: "06:00",
        closes: "22:00",
        closed: false,
      };
    }

    // Parse format like "7h-23h" or "8:30-23:30"
    const match = hourString.match(/(\d+):?(\d*)-(\d+):?(\d*)/);
    if (match) {
      const [, openHour, openMin = "00", closeHour, closeMin = "00"] = match;
      return {
        dayOfWeek: day,
        opens: `${openHour.padStart(2, "0")}:${openMin.padStart(2, "0")}`,
        closes: `${closeHour.padStart(2, "0")}:${closeMin.padStart(2, "0")}`,
        closed: false,
      };
    }

    // Default hours
    return {
      dayOfWeek: day,
      opens: "07:00",
      closes: "22:00",
      closed: false,
    };
  });
}

// Helper to extract state code from state name or return as-is
function getStateCode(state: string): string {
  const stateCodes: Record<string, string> = {
    Florida: "FL",
    Texas: "TX",
    California: "CA",
    "New York": "NY",
    Tennessee: "TN",
    Illinois: "IL",
    Pennsylvania: "PA",
    "New Jersey": "NJ",
    Arizona: "AZ",
    Missouri: "MO",
    "North Carolina": "NC",
  };

  return stateCodes[state] || state;
}

// Helper to get state full name from code
function getStateName(stateCode: string): string {
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

  return stateNames[stateCode] || stateCode;
}

// City center coordinates for geocoding fallback when specific coordinates not available
function getCityDefaultCoordinates(city: string, state: string): { lat: number; lng: number } {
  const cityCoords: Record<string, { lat: number; lng: number }> = {
    // Florida
    "Miami": { lat: 25.7617, lng: -80.1918 },
    "Orlando": { lat: 28.5383, lng: -81.3792 },
    "Tampa": { lat: 27.9506, lng: -82.4572 },
    "Jacksonville": { lat: 30.3322, lng: -81.6557 },
    "Fort Lauderdale": { lat: 26.1224, lng: -80.1373 },
    "Boynton Beach": { lat: 26.5259, lng: -80.0931 },
    "Coconut Creek": { lat: 26.2517, lng: -80.1790 },
    "North Miami": { lat: 25.8901, lng: -80.1867 },
    "Pembroke Pines": { lat: 26.0032, lng: -80.2962 },
    "Doral": { lat: 25.8195, lng: -80.3553 },
    "Miami Beach": { lat: 25.7907, lng: -80.1300 },
    "Aventura": { lat: 25.9565, lng: -80.1393 },
    "Coral Gables": { lat: 25.7210, lng: -80.2683 },
    "Key Biscayne": { lat: 25.6931, lng: -80.1631 },
    "Hallandale Beach": { lat: 25.9812, lng: -80.1484 },
    "Hollywood": { lat: 26.0112, lng: -80.1495 },
    "Miramar": { lat: 25.9873, lng: -80.3322 },
    "Sunrise": { lat: 26.1669, lng: -80.2565 },
    "Plantation": { lat: 26.1276, lng: -80.2331 },
    "Davie": { lat: 26.0765, lng: -80.2520 },
    "Weston": { lat: 26.1003, lng: -80.3997 },
    "Boca Raton": { lat: 26.3683, lng: -80.1289 },
    "Delray Beach": { lat: 26.4615, lng: -80.0728 },
    "West Palm Beach": { lat: 26.7153, lng: -80.0534 },
    "Palm Beach": { lat: 26.7056, lng: -80.0364 },
    "Sarasota": { lat: 27.3364, lng: -82.5307 },
    "Clearwater": { lat: 27.9659, lng: -82.8001 },
    "St. Petersburg": { lat: 27.7676, lng: -82.6403 },
    "Naples": { lat: 26.1420, lng: -81.7948 },
    "Fort Myers": { lat: 26.6406, lng: -81.8723 },
    "Cape Coral": { lat: 26.5629, lng: -81.9495 },
    "Tallahassee": { lat: 30.4383, lng: -84.2807 },
    "Gainesville": { lat: 29.6516, lng: -82.3248 },
    "Ocala": { lat: 29.1872, lng: -82.1401 },
    
    // Texas  
    "Austin": { lat: 30.2672, lng: -97.7431 },
    "Houston": { lat: 29.7604, lng: -95.3698 },
    "Dallas": { lat: 32.7767, lng: -96.7970 },
    "San Antonio": { lat: 29.4241, lng: -98.4936 },
    "Fort Worth": { lat: 32.7555, lng: -97.3308 },
    "El Paso": { lat: 31.7619, lng: -106.4850 },
    "Arlington": { lat: 32.7357, lng: -97.1081 },
    "Corpus Christi": { lat: 27.8006, lng: -97.3964 },
    "Plano": { lat: 33.0198, lng: -96.6989 },
    "Lubbock": { lat: 33.5779, lng: -101.8552 },
    "Irving": { lat: 32.8140, lng: -96.9489 },
    "Laredo": { lat: 27.5306, lng: -99.4803 },
    "Garland": { lat: 32.9126, lng: -96.6389 },
    "Frisco": { lat: 33.1507, lng: -96.8236 },
    "McKinney": { lat: 33.1972, lng: -96.6397 },
    "Katy": { lat: 29.7858, lng: -95.8244 },
    "Conroe": { lat: 30.3119, lng: -95.4560 },
    "Spring": { lat: 30.0799, lng: -95.4172 },
    "The Woodlands": { lat: 30.1658, lng: -95.4613 },
    "Pearland": { lat: 29.5636, lng: -95.2861 },
    "Sugar Land": { lat: 29.6196, lng: -95.6349 },
    
    // California
    "Los Angeles": { lat: 34.0522, lng: -118.2437 },
    "San Diego": { lat: 32.7157, lng: -117.1611 },
    "San Francisco": { lat: 37.7749, lng: -122.4194 },
    "Sacramento": { lat: 38.5816, lng: -121.4944 },
    "San Jose": { lat: 37.3382, lng: -121.8863 },
    "Fresno": { lat: 36.7378, lng: -119.7871 },
    "Oakland": { lat: 37.8044, lng: -122.2712 },
    "Long Beach": { lat: 33.7701, lng: -118.1937 },
    "Bakersfield": { lat: 35.3733, lng: -119.0187 },
    "Anaheim": { lat: 33.8366, lng: -117.9143 },
    "Santa Monica": { lat: 34.0195, lng: -118.4912 },
    "Pasadena": { lat: 34.1478, lng: -118.1445 },
    "Oceanside": { lat: 33.1959, lng: -117.3795 },
    "Carlsbad": { lat: 33.1581, lng: -117.3506 },
    "Chula Vista": { lat: 32.6401, lng: -117.0842 },
    "Irvine": { lat: 33.6846, lng: -117.8265 },
    
    // New York
    "Brooklyn": { lat: 40.6782, lng: -73.9442 },
    "New York": { lat: 40.7128, lng: -74.0060 },
    "Manhattan": { lat: 40.7831, lng: -73.9712 },
    "Queens": { lat: 40.7282, lng: -73.7949 },
    "Bronx": { lat: 40.8448, lng: -73.8648 },
    "Staten Island": { lat: 40.5795, lng: -74.1502 },
    "New Rochelle": { lat: 40.9115, lng: -73.7823 },
    "Yonkers": { lat: 40.9312, lng: -73.8987 },
    "East Hampton": { lat: 40.9632, lng: -72.1848 },
    "Southampton": { lat: 40.8843, lng: -72.3895 },
    "Montauk": { lat: 41.0357, lng: -71.9579 },
    
    // Arizona
    "Phoenix": { lat: 33.4484, lng: -112.0740 },
    "Tucson": { lat: 32.2226, lng: -110.9747 },
    "Mesa": { lat: 33.4152, lng: -111.8315 },
    "Chandler": { lat: 33.3062, lng: -111.8413 },
    "Scottsdale": { lat: 33.4942, lng: -111.9261 },
    "Tempe": { lat: 33.4255, lng: -111.9400 },
    
    // Illinois
    "Chicago": { lat: 41.8781, lng: -87.6298 },
    "Naperville": { lat: 41.7508, lng: -88.1535 },
    "Aurora": { lat: 41.7606, lng: -88.3201 },
    "Rockford": { lat: 42.2711, lng: -89.0940 },
    "Joliet": { lat: 41.5250, lng: -88.0817 },
    
    // Pennsylvania
    "Philadelphia": { lat: 39.9526, lng: -75.1652 },
    "Pittsburgh": { lat: 40.4406, lng: -79.9959 },
    
    // Georgia
    "Atlanta": { lat: 33.7490, lng: -84.3880 },
    "Savannah": { lat: 32.0809, lng: -81.0912 },
    "Augusta": { lat: 33.4735, lng: -82.0105 },
    "Columbus": { lat: 32.4609, lng: -84.9877 },
    
    // Colorado
    "Denver": { lat: 39.7392, lng: -104.9903 },
    "Colorado Springs": { lat: 38.8339, lng: -104.8214 },
    "Aurora": { lat: 39.7294, lng: -104.8319 },
    "Boulder": { lat: 40.0150, lng: -105.2705 },
    
    // Tennessee
    "Nashville": { lat: 36.1627, lng: -86.7816 },
    "Memphis": { lat: 35.1495, lng: -90.0490 },
    "Knoxville": { lat: 35.9606, lng: -83.9207 },
    "Chattanooga": { lat: 35.0456, lng: -85.3097 },
    
    // North Carolina
    "Charlotte": { lat: 35.2271, lng: -80.8431 },
    "Raleigh": { lat: 35.7796, lng: -78.6382 },
    "Durham": { lat: 35.9940, lng: -78.8986 },
    "Greensboro": { lat: 36.0726, lng: -79.7920 },
    
    // Missouri
    "St. Louis": { lat: 38.6270, lng: -90.1994 },
    "Kansas City": { lat: 39.0997, lng: -94.5786 },
    
    // New Jersey
    "Newark": { lat: 40.7357, lng: -74.1724 },
    "Jersey City": { lat: 40.7178, lng: -74.0431 },
    
    // Nevada
    "Las Vegas": { lat: 36.1699, lng: -115.1398 },
    "Reno": { lat: 39.5296, lng: -119.8138 },
    
    // Massachusetts
    "Boston": { lat: 42.3601, lng: -71.0589 },
    "Cambridge": { lat: 42.3736, lng: -71.1097 },
    
    // Wisconsin
    "Milwaukee": { lat: 43.0389, lng: -87.9065 },
    "Madison": { lat: 43.0731, lng: -89.4012 },
    
    // Michigan
    "Detroit": { lat: 42.3314, lng: -83.0458 },
    "Grand Rapids": { lat: 42.9634, lng: -85.6681 },
    
    // Maryland
    "Baltimore": { lat: 39.2904, lng: -76.6122 },
    "Bethesda": { lat: 38.9807, lng: -77.1003 },
    
    // Virginia
    "Virginia Beach": { lat: 36.8529, lng: -75.9780 },
    "Norfolk": { lat: 36.8508, lng: -76.2859 },
    "Richmond": { lat: 37.5407, lng: -77.4360 },
    
    // Puerto Rico
    "San Juan": { lat: 18.4655, lng: -66.1057 },
    "Ponce": { lat: 18.0111, lng: -66.6141 },
    
    // Connecticut
    "Hartford": { lat: 41.7658, lng: -72.6734 },
    "New Haven": { lat: 41.3083, lng: -72.9279 },
    "Stamford": { lat: 41.0534, lng: -73.5387 },
    
    // New Mexico
    "Albuquerque": { lat: 35.0844, lng: -106.6504 },
    "Santa Fe": { lat: 35.6870, lng: -105.9378 },
    
    // Utah
    "Salt Lake City": { lat: 40.7608, lng: -111.8910 },
    "Provo": { lat: 40.2338, lng: -111.6585 },
  };
  
  const key = city;
  // Return city coordinates if found, otherwise return geographic center of USA
  return cityCoords[key] || { lat: 39.8283, lng: -98.5795 };
}

// Adapted court interface for page template
export interface AdaptedCourt {
  id: string;
  slug: string;
  name: string;
  description: string;
  address: {
    streetAddress: string;
    city: string;
    state: string;
    stateCode: string;
    zipCode: string;
    country: string;
    countryCode: string;
  };
  phone: string;
  email?: string;
  website?: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  googleMapsPlaceId?: string;
  googleMapsUrl?: string;
  facility: {
    totalCourts: number;
    indoorCourts: number;
    outdoorCourts: number;
    courtSurface: string;
    lighting: string;
    courtDimensions?: string;
    equipmentQuality?: string;
  };
  amenities: string[];
  features: string[];
  pricing: {
    peakHourlyRate: number;
    offPeakHourlyRate: number;
    priceRange?: string;
    pricingTiers?: Array<{
      name: string;
      description: string;
      price: number;
      hours?: string;
    }>;
    membershipOptions?: Array<{
      name: string;
      price: number;
      description: string;
      features: string[];
    }>;
  };
  hours: Array<{
    dayOfWeek: string;
    opens: string;
    closes: string;
    closed?: boolean;
  }>;
  timezone?: string;
  images: Array<{
    url: string;
    alt: string;
    caption?: string;
    isPrimary?: boolean;
    width?: number;
    height?: number;
  }>;
  heroImage?: string;
  rating: {
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
    worstRating: number;
    ratingBreakdown?: {
      5: number;
      4: number;
      3: number;
      2: number;
      1: number;
    };
  };
  reviews: Array<{
    id: string;
    reviewerName: string;
    rating: number;
    date: string;
    text: string;
    verified?: boolean;
    source?: string;
    sentiment?: "positive" | "neutral" | "negative";
  }>;
  recentReviews?: Array<{
    id: string;
    reviewerName: string;
    rating: number;
    date: string;
    text: string;
    verified?: boolean;
    source?: string;
    sentiment?: "positive" | "neutral" | "negative";
  }>;
  keywords?: string[];
  metaDescription?: string;
  parkingInstructions?: string;
  cancellationPolicy?: string;
  paymentMethods?: string[];
  instantBooking?: boolean;
  bookingUrl?: string;
  relatedCourts?: string[];
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  isActive?: boolean;
  isFeatured?: boolean;
  lastUpdated?: string;

  // Original data reference
  _original?: ExistingCourt;
}

/**
 * Convert existing court data to adapted format
 */
export function adaptCourt(court: ExistingCourt): AdaptedCourt {
  const slug = generateSlug(court.name);
  const stateCode = getStateCode(court.state);
  const stateName = getStateName(stateCode);

  // Determine court breakdown
  let indoorCourts = 0;
  let outdoorCourts = 0;
  const totalCourts = court.numberOfCourts || 4; // Default to 4 if not specified

  if (court.courtType === "indoor") {
    indoorCourts = totalCourts;
  } else if (court.courtType === "outdoor") {
    outdoorCourts = totalCourts;
  } else {
    // Both or unknown - split evenly
    indoorCourts = Math.floor(totalCourts / 2);
    outdoorCourts = totalCourts - indoorCourts;
  }

  // Generate features array
  const features: string[] = [];
  if (court.courtType === "indoor") features.push("Indoor");
  if (court.courtType === "outdoor") features.push("Outdoor");
  if (court.courtType === "both") features.push("Indoor & Outdoor");
  if (court.hasSinglesCourts) features.push("Singles Courts");
  if (court.is24_7) features.push("24/7 Access");
  if (court.verified) features.push("Verified");

  // Create Google Maps URL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${court.address}, ${court.city}, ${stateCode} ${court.zipCode}`
  )}`;

  // Generate placeholder images
  const images = [
    {
      url: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=800&fit=crop",
      alt: `${court.name} - Main court view`,
      caption: `Professional padel courts at ${court.name}`,
      isPrimary: true,
      width: 1200,
      height: 800,
    },
    {
      url: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1200&h=800&fit=crop",
      alt: `${court.name} - Court facilities`,
      caption: "State-of-the-art facilities",
      width: 1200,
      height: 800,
    },
    {
      url: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=800&h=600&fit=crop",
      alt: `${court.name} - Players in action`,
      caption: "Competitive play environment",
      width: 800,
      height: 600,
    },
  ];

  // Estimated pricing (can be updated with real data later)
  const basePrice = court.rating >= 4.8 ? 65 : court.rating >= 4.5 ? 55 : 45;

  return {
    id: court.id.toString(),
    slug,
    name: court.name,
    description: court.description || `${court.name} offers premier padel facilities in ${court.city}, ${stateName}. Experience world-class courts with professional amenities and a welcoming community for players of all skill levels.`,

    address: {
      streetAddress: court.address,
      city: court.city,
      state: stateName,
      stateCode: stateCode,
      zipCode: court.zipCode,
      country: "United States",
      countryCode: "US",
    },

    phone: court.phone,
    email: court.email,
    website: court.website,

    // Use specific coordinates if available, otherwise use city center
    coordinates: coordinateMap[court.id] || getCityDefaultCoordinates(court.city, court.state),

    googleMapsUrl,

    facility: {
      totalCourts,
      indoorCourts,
      outdoorCourts,
      courtSurface: court.courtSurface || "Professional-grade artificial turf with panoramic glass walls",
      lighting: "LED floodlights for evening play",
      courtDimensions: "10m x 20m (official USPA standards)",
      equipmentQuality: "Tournament-grade equipment",
    },

    amenities: court.amenities || [
      "Professional Coaching",
      "Equipment Rental",
      "Pro Shop",
      "Locker Rooms",
      "Free WiFi",
      "Parking",
    ],

    features,

    pricing: {
      peakHourlyRate: basePrice + 10,
      offPeakHourlyRate: basePrice,
      priceRange: `$${basePrice}-$${basePrice + 10}`,
    },

    hours: convertOpeningHours(court.openingHours),
    timezone: stateCode === "CA" ? "America/Los_Angeles" :
               stateCode === "TX" ? "America/Chicago" :
               "America/New_York",

    images,
    heroImage: images[0].url,

    rating: {
      ratingValue: court.rating,
      reviewCount: court.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },

    reviews: [], // Will be populated from Google Maps API

    keywords: [
      `${court.city} padel courts`,
      `padel ${court.city}`,
      `${court.name}`,
      `${stateCode} padel`,
      `book padel ${court.city}`,
    ],

    metaDescription: `Book padel courts at ${court.name} in ${court.city}, ${stateCode}. ${totalCourts} ${court.courtType || "professional"} courts. Rated ${court.rating} stars. Reserve online today!`,

    faqs: [
      {
        question: "What equipment do I need to bring?",
        answer: "We provide padel rackets and balls for rental. You just need athletic shoes with non-marking soles and comfortable sportswear. If you have your own equipment, you're welcome to bring it!",
      },
      {
        question: "How do I book a court?",
        answer: court.website
          ? `You can book online through our website at ${court.website}, call us at ${court.phone}, or visit us in person. We recommend booking in advance, especially during peak hours.`
          : `Call us at ${court.phone} to book your court. We recommend calling in advance, especially during peak hours.`,
      },
      {
        question: "Do you offer coaching and lessons?",
        answer: "Yes! We have certified padel coaches available for private lessons, group clinics, and training programs for all skill levels.",
      },
      {
        question: "What are your peak hours?",
        answer: "Peak hours are typically weekday evenings (5pm-9pm) and weekend mornings (8am-12pm). Off-peak hours offer better rates and availability.",
      },
    ],

    isActive: true,
    isFeatured: court.verified || court.rating >= 4.8,
    lastUpdated: court.verificationDate || new Date().toISOString().split("T")[0],

    _original: court,
  };
}

/**
 * Get all adapted courts
 */
export function getAllAdaptedCourts(): AdaptedCourt[] {
  return padelCourts.map(adaptCourt);
}

/**
 * Get adapted court by slug
 */
export function getAdaptedCourtBySlug(slug: string): AdaptedCourt | undefined {
  const court = padelCourts.find((c) => generateSlug(c.name) === slug);
  return court ? adaptCourt(court) : undefined;
}

/**
 * Get all court slugs for static generation
 */
export function getAllAdaptedCourtSlugs(): string[] {
  return padelCourts.map((c) => generateSlug(c.name));
}

/**
 * Get related courts (same city or nearby)
 */
export function getAdaptedRelatedCourts(court: AdaptedCourt, limit: number = 3): AdaptedCourt[] {
  const allCourts = getAllAdaptedCourts();

  // Filter courts in same city or state, excluding current court
  const related = allCourts
    .filter((c) =>
      c.slug !== court.slug &&
      (c.address.city === court.address.city || c.address.stateCode === court.address.stateCode)
    )
    .slice(0, limit);

  return related;
}

/**
 * Helper functions (same as court-data.ts)
 */
export function getTodayHours(court: AdaptedCourt): string {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = days[new Date().getDay()];
  const todayHours = court.hours.find((h) => h.dayOfWeek === today);

  if (!todayHours) return "Hours not available";
  if (todayHours.closed) return "Closed today";

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${minutes.toString().padStart(2, "0")}${period}`;
  };

  return `${formatTime(todayHours.opens)} - ${formatTime(todayHours.closes)}`;
}

export function isCurrentlyOpen(court: AdaptedCourt): boolean {
  const now = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = days[now.getDay()];
  const todayHours = court.hours.find((h) => h.dayOfWeek === today);

  if (!todayHours || todayHours.closed) return false;

  const currentTime = now.getHours() * 60 + now.getMinutes();
  const [openHour, openMin] = todayHours.opens.split(":").map(Number);
  const [closeHour, closeMin] = todayHours.closes.split(":").map(Number);
  const openTime = openHour * 60 + openMin;
  const closeTime = closeHour * 60 + closeMin;

  return currentTime >= openTime && currentTime < closeTime;
}

export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 3959; // Radius of Earth in miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
