/**
 * Sample Padel Court Data
 *
 * IMPORTANT: This is sample data for development.
 * Replace with real data from your Google Sheet.
 *
 * To import from Google Sheets:
 * 1. Export your sheet as CSV
 * 2. Use a conversion script to map columns to this structure
 * 3. Or use the Google Sheets API to fetch data at build time
 *
 * See DATA_IMPORT_GUIDE.md for detailed instructions
 */

import { PadelCourt } from "@/types/court";

// ============================================================================
// MAIN COURT DATA
// ============================================================================

export const courts: PadelCourt[] = [
  {
    // Basic Info
    id: "miami-padel-club-001",
    slug: "miami-padel-club",
    name: "Miami Padel Club",
    description: `Welcome to Miami Padel Club, South Florida's premier destination for padel enthusiasts. Located in the heart of Miami, our state-of-the-art facility features 6 professional-grade courts with panoramic glass walls and premium artificial turf surfaces. Whether you're a seasoned player or new to the sport, our climate-controlled indoor courts and outdoor courts offer the perfect environment year-round.

Our facility is designed with players in mind, featuring professional LED lighting systems that ensure optimal visibility during evening matches. The courts meet official international padel dimensions and specifications, providing an authentic playing experience that rivals the best clubs in Europe and Latin America.

At Miami Padel Club, we're more than just courts—we're a community. Our experienced coaching staff offers lessons for all skill levels, from beginners to competitive players. Join our growing community of padel lovers and experience why this is the fastest-growing racquet sport in the world. With convenient parking, modern amenities, and a welcoming atmosphere, Miami Padel Club is your home for padel in South Florida.`,

    // Contact Info
    address: {
      streetAddress: "1250 S Miami Ave",
      city: "Miami",
      state: "Florida",
      stateCode: "FL",
      zipCode: "33130",
      country: "United States",
      countryCode: "US",
    },
    phone: "+1 (305) 555-7235",
    email: "info@miamipadelclub.com",
    website: "https://miamipadelclub.com",

    // Location
    coordinates: {
      latitude: 25.7617,
      longitude: -80.1918,
    },
    googleMapsPlaceId: "ChIJExample123456", // Replace with real Place ID
    googleMapsUrl: "https://maps.google.com/?cid=12345678901234567890", // Replace with real URL

    // Facility Details
    facility: {
      totalCourts: 6,
      indoorCourts: 4,
      outdoorCourts: 2,
      courtSurface: "Panoramic glass walls with artificial turf (15mm pile)",
      lighting: "Professional LED floodlights (500+ lux)",
      courtDimensions: "10m x 20m (official USPA standards)",
      equipmentQuality: "Professional-grade nets and glass walls",
    },

    // Amenities
    amenities: [
      "Free Parking",
      "Pro Shop",
      "Equipment Rental",
      "Locker Rooms",
      "Showers",
      "Café & Vending",
      "Professional Coaching",
      "Tournament Hosting",
      "Spectator Seating",
      "Free WiFi",
      "Wheelchair Accessible",
      "Climate Control (Indoor Courts)",
    ],

    // Features (for badges)
    features: ["Climate Controlled", "Glass Walls", "LED Lighting", "Pro Shop"],

    // Pricing
    pricing: {
      peakHourlyRate: 65,
      offPeakHourlyRate: 45,
      priceRange: "$45-$65",
      pricingTiers: [
        {
          name: "Peak Hours",
          description: "Weekdays 5pm-10pm, Weekends 8am-8pm",
          price: 65,
          hours: "Peak times",
        },
        {
          name: "Off-Peak",
          description: "Weekdays 6am-5pm",
          price: 45,
          hours: "Off-peak times",
        },
        {
          name: "Late Night",
          description: "After 10pm weekdays",
          price: 50,
          hours: "10pm-12am",
        },
      ],
      membershipOptions: [
        {
          name: "Monthly Unlimited",
          price: 299,
          description: "Unlimited court access during off-peak hours",
          features: [
            "Unlimited off-peak play",
            "10% pro shop discount",
            "Priority tournament registration",
            "1 guest pass per month",
          ],
        },
        {
          name: "Annual Premium",
          price: 2999,
          description: "Unlimited access anytime + perks",
          features: [
            "Unlimited play (all hours)",
            "20% pro shop discount",
            "Free equipment rental",
            "2 private lessons/month",
            "Guest passes included",
          ],
        },
        {
          name: "Drop-in",
          price: 55,
          description: "Single session - no commitment",
          features: [
            "Pay per session",
            "No membership required",
            "Equipment rental available",
          ],
        },
      ],
    },

    // Hours
    hours: [
      { dayOfWeek: "Monday", opens: "06:00", closes: "22:00" },
      { dayOfWeek: "Tuesday", opens: "06:00", closes: "22:00" },
      { dayOfWeek: "Wednesday", opens: "06:00", closes: "22:00" },
      { dayOfWeek: "Thursday", opens: "06:00", closes: "22:00" },
      { dayOfWeek: "Friday", opens: "06:00", closes: "23:00" },
      { dayOfWeek: "Saturday", opens: "07:00", closes: "23:00" },
      { dayOfWeek: "Sunday", opens: "07:00", closes: "22:00" },
    ],
    timezone: "America/New_York",

    // Images (Replace with real images from your assets)
    images: [
      {
        url: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=800&fit=crop",
        alt: "Miami Padel Club - Indoor courts with panoramic glass walls",
        caption: "Professional indoor courts with climate control",
        isPrimary: true,
        width: 1200,
        height: 800,
      },
      {
        url: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1200&h=800&fit=crop",
        alt: "Miami Padel Club - Outdoor courts at sunset",
        caption: "Outdoor courts with LED lighting for evening play",
        width: 1200,
        height: 800,
      },
      {
        url: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=800&h=600&fit=crop",
        alt: "Miami Padel Club - Players during match",
        caption: "Competitive play on professional-grade courts",
        width: 800,
        height: 600,
      },
      {
        url: "https://images.unsplash.com/photo-1617883861744-b24c1d5a8c93?w=800&h=600&fit=crop",
        alt: "Miami Padel Club - Pro shop and lounge area",
        caption: "Fully stocked pro shop with equipment and apparel",
        width: 800,
        height: 600,
      },
      {
        url: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&h=600&fit=crop",
        alt: "Miami Padel Club - Court surface detail",
        caption: "Premium artificial turf with optimal ball bounce",
        width: 800,
        height: 600,
      },
      {
        url: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&h=600&fit=crop",
        alt: "Miami Padel Club - Evening match under lights",
        caption: "Professional LED lighting for evening sessions",
        width: 800,
        height: 600,
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&h=1080&fit=crop",

    // Reviews & Ratings
    // NOTE: These should be fetched from Google Maps API
    // See GOOGLE_MAPS_SETUP.md for integration guide
    rating: {
      ratingValue: 4.8,
      reviewCount: 127,
      bestRating: 5,
      worstRating: 1,
      ratingBreakdown: {
        5: 98,
        4: 22,
        3: 4,
        2: 2,
        1: 1,
      },
    },
    reviews: [
      {
        id: "review-001",
        reviewerName: "Carlos M.",
        rating: 5,
        date: "2024-09-15",
        text: "Absolutely phenomenal facility! The courts are pristine, staff is incredibly welcoming, and the coaching program helped me improve my game significantly. Best padel club in Miami hands down.",
        verified: true,
        source: "Google Maps",
        sentiment: "positive",
      },
      {
        id: "review-002",
        reviewerName: "Jennifer S.",
        rating: 5,
        date: "2024-09-10",
        text: "This place is awesome because of the climate-controlled indoor courts. Even in Miami's summer heat, we can play comfortably. The equipment rental is convenient and the pro shop has everything you need.",
        verified: true,
        source: "Google Maps",
        sentiment: "positive",
      },
      {
        id: "review-003",
        reviewerName: "Miguel R.",
        rating: 5,
        date: "2024-08-28",
        text: "Great community vibe! Everyone is friendly and welcoming to new players. Courts are well-maintained and the lighting is perfect for evening matches. Highly recommend for anyone interested in padel.",
        verified: true,
        source: "Google Maps",
        sentiment: "positive",
      },
      {
        id: "review-004",
        reviewerName: "Amanda K.",
        rating: 4,
        date: "2024-08-20",
        text: "Excellent courts and amenities. Only reason for 4 stars is that peak hours can get quite busy, so book early. Otherwise, it's a fantastic place to play.",
        verified: true,
        source: "Google Maps",
        sentiment: "positive",
      },
      {
        id: "review-005",
        reviewerName: "David L.",
        rating: 5,
        date: "2024-08-15",
        text: "Top-notch facility with professional coaching. My kids love their junior program. The courts are always clean and well-maintained. Worth every penny!",
        verified: true,
        source: "Google Maps",
        sentiment: "positive",
      },
    ],
    recentReviews: [], // Will be populated from first 5 reviews

    // SEO
    keywords: [
      "Miami padel courts",
      "padel Miami",
      "indoor padel Florida",
      "padel club Miami",
      "book padel courts Miami",
      "padel near me",
      "South Florida padel",
    ],

    // Additional Info
    parkingInstructions: "Free parking available in the adjacent lot. Enter via S Miami Ave and follow signs to the Padel Club entrance. Overflow parking available on weekends at the nearby public garage (first 2 hours free).",
    cancellationPolicy: "Cancel up to 24 hours before your reservation for a full refund. Cancellations within 24 hours are subject to a 50% fee. No-shows are charged the full court fee.",
    paymentMethods: ["Credit Card", "Debit Card", "Cash", "Venmo", "Apple Pay"],
    instantBooking: true,
    bookingUrl: "https://miamipadelclub.com/book",

    // Related courts (slugs only - will be resolved at render time)
    relatedCourts: ["brickell-padel-center", "coral-gables-padel", "wynwood-padel-courts"],

    // FAQ
    faqs: [
      {
        question: "What equipment do I need to bring?",
        answer: "We provide all equipment including padel rackets and balls for rental ($10/session). You just need athletic shoes with non-marking soles and comfortable sportswear. If you have your own equipment, you're welcome to bring it!",
      },
      {
        question: "How do I book a court?",
        answer: "You can book online through our website, call us directly, or use our mobile app. Courts can be reserved up to 14 days in advance. Members get priority booking access.",
      },
      {
        question: "What is your cancellation policy?",
        answer: "Cancel up to 24 hours before your reservation for a full refund. Cancellations within 24 hours incur a 50% fee. No-shows are charged the full court rate.",
      },
      {
        question: "Do you offer coaching and lessons?",
        answer: "Yes! We have certified padel coaches offering private lessons ($80/hour), semi-private lessons ($50/person), and group clinics ($30/person). Contact us to schedule a lesson tailored to your skill level.",
      },
      {
        question: "Is there parking available?",
        answer: "Yes, we have free parking adjacent to the facility. Additional overflow parking is available on weekends at the nearby public garage (first 2 hours free).",
      },
      {
        question: "Can you host tournaments and private events?",
        answer: "Absolutely! We regularly host tournaments, corporate events, and private parties. Contact our events team for custom packages and availability.",
      },
      {
        question: "What are your peak hours?",
        answer: "Peak hours are weekdays 5pm-10pm and weekends 8am-8pm. We recommend booking during off-peak hours (weekdays 6am-5pm) for better rates and availability.",
      },
      {
        question: "Do you rent equipment?",
        answer: "Yes, we rent padel rackets ($10/session) and sell balls. Our pro shop also carries a full range of equipment, apparel, and accessories for purchase.",
      },
    ],

    // Status
    isActive: true,
    isFeatured: true,
    lastUpdated: "2024-10-08",
  },

  // ============================================================================
  // RELATED COURTS (Sample data for "Other Courts in Miami" section)
  // ============================================================================
  {
    id: "brickell-padel-center-002",
    slug: "brickell-padel-center",
    name: "Brickell Padel Center",
    description: "Modern padel facility in the heart of Brickell's financial district.",
    address: {
      streetAddress: "801 Brickell Ave",
      city: "Miami",
      state: "Florida",
      stateCode: "FL",
      zipCode: "33131",
      country: "United States",
      countryCode: "US",
    },
    phone: "+1 (305) 555-8100",
    coordinates: {
      latitude: 25.7663,
      longitude: -80.1917,
    },
    facility: {
      totalCourts: 4,
      indoorCourts: 4,
      outdoorCourts: 0,
      courtSurface: "Glass walls with artificial turf",
      lighting: "LED lighting",
    },
    amenities: ["Parking", "Pro Shop", "Locker Rooms", "WiFi"],
    features: ["Indoor", "Downtown Location"],
    pricing: {
      peakHourlyRate: 70,
      offPeakHourlyRate: 50,
      priceRange: "$50-$70",
    },
    hours: [
      { dayOfWeek: "Monday", opens: "06:00", closes: "22:00" },
      { dayOfWeek: "Tuesday", opens: "06:00", closes: "22:00" },
      { dayOfWeek: "Wednesday", opens: "06:00", closes: "22:00" },
      { dayOfWeek: "Thursday", opens: "06:00", closes: "22:00" },
      { dayOfWeek: "Friday", opens: "06:00", closes: "23:00" },
      { dayOfWeek: "Saturday", opens: "08:00", closes: "23:00" },
      { dayOfWeek: "Sunday", opens: "08:00", closes: "22:00" },
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&h=600&fit=crop",
        alt: "Brickell Padel Center - Indoor courts",
        isPrimary: true,
        width: 800,
        height: 600,
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1200&h=800&fit=crop",
    rating: {
      ratingValue: 4.6,
      reviewCount: 83,
      bestRating: 5,
      worstRating: 1,
    },
    reviews: [],
    isActive: true,
    isFeatured: false,
    lastUpdated: "2024-10-08",
  },
  {
    id: "coral-gables-padel-003",
    slug: "coral-gables-padel",
    name: "Coral Gables Padel Academy",
    description: "Upscale padel facility with championship courts in beautiful Coral Gables.",
    address: {
      streetAddress: "2090 Ponce de Leon Blvd",
      city: "Coral Gables",
      state: "Florida",
      stateCode: "FL",
      zipCode: "33134",
      country: "United States",
      countryCode: "US",
    },
    phone: "+1 (305) 555-9200",
    coordinates: {
      latitude: 25.7465,
      longitude: -80.2597,
    },
    facility: {
      totalCourts: 5,
      indoorCourts: 3,
      outdoorCourts: 2,
      courtSurface: "Championship-grade glass and turf",
      lighting: "Premium LED",
    },
    amenities: ["Free Parking", "Pro Shop", "Café", "Coaching", "Tournament Hosting"],
    features: ["Championship Courts", "Coaching Academy"],
    pricing: {
      peakHourlyRate: 75,
      offPeakHourlyRate: 55,
      priceRange: "$55-$75",
    },
    hours: [
      { dayOfWeek: "Monday", opens: "06:00", closes: "22:00" },
      { dayOfWeek: "Tuesday", opens: "06:00", closes: "22:00" },
      { dayOfWeek: "Wednesday", opens: "06:00", closes: "22:00" },
      { dayOfWeek: "Thursday", opens: "06:00", closes: "22:00" },
      { dayOfWeek: "Friday", opens: "06:00", closes: "23:00" },
      { dayOfWeek: "Saturday", opens: "07:00", closes: "23:00" },
      { dayOfWeek: "Sunday", opens: "07:00", closes: "22:00" },
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1617883861744-b24c1d5a8c93?w=800&h=600&fit=crop",
        alt: "Coral Gables Padel Academy - Courts",
        isPrimary: true,
        width: 800,
        height: 600,
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1617883861744-b24c1d5a8c93?w=1200&h=800&fit=crop",
    rating: {
      ratingValue: 4.9,
      reviewCount: 156,
      bestRating: 5,
      worstRating: 1,
    },
    reviews: [],
    isActive: true,
    isFeatured: true,
    lastUpdated: "2024-10-08",
  },
  {
    id: "wynwood-padel-courts-004",
    slug: "wynwood-padel-courts",
    name: "Wynwood Padel Courts",
    description: "Trendy outdoor padel courts in the artistic Wynwood neighborhood.",
    address: {
      streetAddress: "2550 NW 2nd Ave",
      city: "Miami",
      state: "Florida",
      stateCode: "FL",
      zipCode: "33127",
      country: "United States",
      countryCode: "US",
    },
    phone: "+1 (305) 555-7500",
    coordinates: {
      latitude: 25.8011,
      longitude: -80.1994,
    },
    facility: {
      totalCourts: 3,
      indoorCourts: 0,
      outdoorCourts: 3,
      courtSurface: "Outdoor glass and turf",
      lighting: "LED floodlights",
    },
    amenities: ["Street Parking", "Bar & Lounge", "Equipment Rental", "WiFi"],
    features: ["Outdoor", "Bar & Lounge", "Art District"],
    pricing: {
      peakHourlyRate: 60,
      offPeakHourlyRate: 40,
      priceRange: "$40-$60",
    },
    hours: [
      { dayOfWeek: "Monday", opens: "07:00", closes: "23:00" },
      { dayOfWeek: "Tuesday", opens: "07:00", closes: "23:00" },
      { dayOfWeek: "Wednesday", opens: "07:00", closes: "23:00" },
      { dayOfWeek: "Thursday", opens: "07:00", closes: "23:00" },
      { dayOfWeek: "Friday", opens: "07:00", closes: "00:00" },
      { dayOfWeek: "Saturday", opens: "08:00", closes: "00:00" },
      { dayOfWeek: "Sunday", opens: "08:00", closes: "23:00" },
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&h=600&fit=crop",
        alt: "Wynwood Padel Courts - Outdoor courts",
        isPrimary: true,
        width: 800,
        height: 600,
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1200&h=800&fit=crop",
    rating: {
      ratingValue: 4.7,
      reviewCount: 94,
      bestRating: 5,
      worstRating: 1,
    },
    reviews: [],
    isActive: true,
    isFeatured: false,
    lastUpdated: "2024-10-08",
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get court by slug
 */
export function getCourtBySlug(slug: string): PadelCourt | undefined {
  return courts.find((court) => court.slug === slug);
}

/**
 * Get all court slugs (for generateStaticParams)
 */
export function getAllCourtSlugs(): string[] {
  return courts.map((court) => court.slug);
}

/**
 * Get related courts by slugs
 */
export function getRelatedCourts(slugs: string[]): PadelCourt[] {
  return courts.filter((court) => slugs.includes(court.slug));
}

/**
 * Get courts by city
 */
export function getCourtsByCity(city: string): PadelCourt[] {
  return courts.filter(
    (court) => court.address.city.toLowerCase() === city.toLowerCase()
  );
}

/**
 * Calculate distance between two coordinates (in miles)
 * Haversine formula
 */
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

/**
 * Get today's opening hours
 */
export function getTodayHours(court: PadelCourt): string {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = days[new Date().getDay()];
  const todayHours = court.hours.find((h) => h.dayOfWeek === today);

  if (!todayHours) return "Hours not available";
  if (todayHours.closed) return "Closed today";

  // Convert 24h to 12h format
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${minutes.toString().padStart(2, "0")}${period}`;
  };

  return `${formatTime(todayHours.opens)} - ${formatTime(todayHours.closes)}`;
}

/**
 * Check if court is currently open
 */
export function isCurrentlyOpen(court: PadelCourt): boolean {
  const now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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
