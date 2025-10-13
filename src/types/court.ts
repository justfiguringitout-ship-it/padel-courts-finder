/**
 * TypeScript interfaces for Padel Court data structure
 * Designed to work with Google Sheets import and Google Maps API data
 */

export interface PadelCourtAddress {
  streetAddress: string;
  city: string;
  state: string;
  stateCode: string; // e.g., "FL", "CA"
  zipCode: string;
  country: string;
  countryCode: string; // "US"
}

export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

export interface OpeningHours {
  dayOfWeek: string; // "Monday", "Tuesday", etc.
  opens: string; // "06:00"
  closes: string; // "22:00"
  closed?: boolean; // true if closed on this day
}

export interface PricingTier {
  name: string; // "Peak Hours", "Off-Peak", "Weekend"
  description: string;
  price: number; // hourly rate in dollars
  hours?: string; // "6am-12pm" or "After 6pm"
}

export interface MembershipOption {
  name: string; // "Monthly", "Annual", "Drop-in"
  price: number;
  description: string;
  features: string[];
}

export interface CourtImage {
  url: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  isPrimary?: boolean; // Hero image
}

export interface Review {
  id: string;
  reviewerName: string;
  rating: number; // 1-5
  date: string; // ISO date string
  text: string; // Review verbatim
  verified?: boolean;
  source?: string; // "Google Maps", "Direct", etc.
  sentiment?: "positive" | "neutral" | "negative"; // Extracted from analysis
}

export interface AggregateRating {
  ratingValue: number; // Average rating (e.g., 4.8)
  reviewCount: number; // Total number of reviews
  bestRating: number; // Always 5
  worstRating: number; // Always 1
  ratingBreakdown?: {
    // Distribution of ratings
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

export interface CourtFacility {
  totalCourts: number;
  indoorCourts: number;
  outdoorCourts: number;
  courtSurface: string; // "Artificial turf", "Panoramic glass walls"
  lighting: string; // "LED floodlights", "Natural + LED"
  courtDimensions?: string; // "10m x 20m"
  equipmentQuality?: string; // "Professional grade"
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PadelCourt {
  // Basic Info
  id: string;
  slug: string; // URL-friendly: "miami-padel-club"
  name: string;
  description: string; // 300-500 words for About section

  // Contact Info
  address: PadelCourtAddress;
  phone: string;
  email?: string;
  website?: string;

  // Location
  coordinates: GeoCoordinates;
  googleMapsPlaceId?: string; // For Maps API integration
  googleMapsUrl?: string; // Direct link to Google Maps

  // Facility Details
  facility: CourtFacility;

  // Amenities (checkmarks with icons)
  amenities: string[]; // e.g., ["Free Parking", "Pro Shop", "Locker Rooms"]
  features: string[]; // Unique selling points for badges

  // Pricing
  pricing: {
    peakHourlyRate: number;
    offPeakHourlyRate: number;
    pricingTiers?: PricingTier[];
    membershipOptions?: MembershipOption[];
    priceRange?: string; // "$40-$70" for schema
  };

  // Hours
  hours: OpeningHours[];
  timezone?: string; // "America/New_York"

  // Images
  images: CourtImage[];
  heroImage?: string; // Primary image URL

  // Reviews & Ratings (from Google Maps API)
  rating: AggregateRating;
  reviews: Review[];
  recentReviews?: Review[]; // Top 3-5 for display

  // SEO & Metadata
  keywords?: string[]; // For reference
  metaDescription?: string; // Override default

  // Additional Info
  parkingInstructions?: string;
  cancellationPolicy?: string;
  paymentMethods?: string[];
  instantBooking?: boolean;
  bookingUrl?: string;

  // Related courts (slugs)
  relatedCourts?: string[];

  // FAQ
  faqs?: FAQ[];

  // Status
  isActive?: boolean;
  isFeatured?: boolean;
  lastUpdated?: string; // ISO date string
}

/**
 * Interface for Google Maps API Review Response
 * Used when fetching reviews from Google Maps Places API
 */
export interface GoogleMapsReview {
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number; // Unix timestamp
}

/**
 * Interface for Google Maps Place Details Response
 * Used when fetching place data from Google Maps Places API
 */
export interface GoogleMapsPlace {
  place_id: string;
  name: string;
  formatted_address: string;
  formatted_phone_number?: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  rating?: number;
  user_ratings_total?: number;
  reviews?: GoogleMapsReview[];
  opening_hours?: {
    weekday_text: string[];
    open_now: boolean;
  };
  photos?: Array<{
    photo_reference: string;
    height: number;
    width: number;
  }>;
  website?: string;
  url?: string;
}
