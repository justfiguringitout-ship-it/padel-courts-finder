export interface PadelCourt {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone?: string;
  email?: string;
  website?: string;
  rating?: number;
  reviewCount: number;
  openingHours: OpeningHours;
  description?: string;
  features?: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  // Enhanced fields from cross-reference verification
  numberOfCourts?: number;                      // Total individual courts at facility
  courtType?: "indoor" | "outdoor" | "both";   // Indoor, outdoor, or mixed
  hasSinglesCourts?: boolean;                   // Has singles courts available
  amenities?: string[];                         // Specific amenities (bar, restaurant, pro shop, etc.)
  courtSurface?: string;                        // e.g., "artificial grass", "synthetic turf"
  is24_7?: boolean;                             // 24/7 access available
  chainName?: string;                           // Parent company/chain (e.g., "Padel Haus")
  locationName?: string;                        // Specific location name for chains (e.g., "Nashville")
  verified?: boolean;                           // Cross-referenced and verified
  verificationDate?: string;                    // Date of last verification
  // New fields from master data research
  instagram?: string;                            // Instagram URL
  facebook?: string;                             // Facebook URL
  membersOnly?: boolean;                         // Members-only / private club
  lessonsAvailable?: boolean;                    // Offers padel lessons
  rentalAvailable?: boolean;                     // Equipment rental available
  socialArea?: boolean;                          // Has social/lounge area
  foodAndDrink?: boolean;                        // Has food & drink on-site
  positiveReviewThemes?: string[];               // Common positive review themes
  negativeReviewThemes?: string[];               // Common negative review themes
  pricingText?: string;                          // Pricing info as free text
  status?: "open" | "coming_soon" | "temporarily_closed"; // Facility status
  ogImageUrl?: string;                                    // OG image URL from club website
  googlePlacePhotoRef?: string;                            // Google Places photo_reference
  googleMapsPlaceId?: string;                              // Google Maps place_id
}

export interface OpeningHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

