/**
 * Court Data Adapter
 *
 * Converts existing PadelCourt data format to the format expected by court detail pages
 */

import { PadelCourt as ExistingCourt } from "@/types/padel-court";
import { padelCourts } from "@/data/padel-courts";

// Coordinate mapping for all clubs (from geocoding research)
const coordinateMap: Record<number, { latitude: number; longitude: number }> = {
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
  // Additional NY clubs
  58: { latitude: 40.7303, longitude: -73.9579 }, // Padel& Greenpoint, Brooklyn
  83: { latitude: 40.5886, longitude: -73.9378 }, // Golden Point Padel, Brooklyn
  84: { latitude: 40.7081, longitude: -73.9571 }, // Padel Haus Williamsburg, Brooklyn
  85: { latitude: 40.8157, longitude: -73.9537 }, // Mink Padel, Manhattan (Harlem)
  86: { latitude: 40.9359, longitude: -73.1167 }, // Paddles Up, East Setauket, NY
  132: { latitude: 40.9602901, longitude: -72.2442364 }, // Brisas East Hampton (duplicate)
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

    // Use real coordinates from coordinateMap, fallback to Miami if not found
    coordinates: coordinateMap[court.id] || {
      latitude: 25.7617, // Fallback to Miami coordinates
      longitude: -80.1918,
    },

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
