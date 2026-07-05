import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Star, Clock, Users, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in West Palm Beach (2026) | Complete Guide',
  description: 'Discover West Palm Beach\'s 5 padel clubs in 2026. Xcel Padel, Palm Beach Padel, Padel Club Palm Beach, Mondo Padel & what\'s opening next.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-west-palm-beach',
  },
  openGraph: {
    title: 'Best Padel Clubs in West Palm Beach (2026) | Complete Guide',
    description: 'Discover West Palm Beach\'s 5 padel clubs in 2026. Xcel Padel, Palm Beach Padel, Padel Club Palm Beach, Mondo Padel & what\'s opening next.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-west-palm-beach',
    type: 'article',
  },
};

interface Club {
  name: string;
  slug: string;
  location: string;
  courts: string;
  surface?: string;
  rating?: number;
  reviewCount?: number;
  pricing?: string;
  amenities: string[];
  prose: string;
  lessons?: boolean;
  rentals?: boolean;
}

const clubs: Club[] = [
  {
    name: 'Xcel Padel',
    slug: 'xcel-padel',
    location: '101 Sansburys Way, West Palm Beach, FL 33411',
    courts: '12 indoor courts',
    rating: 5.0,
    reviewCount: 16,
    pricing: 'Court rental: peak $160/90min ($40pp), off-peak $140/90min ($35pp); Open play $30/90min; Lessons: group $50-60pp, private $200-225; memberships from $99/mo',
    amenities: ['Sauna', 'Steam room', 'Cold plunge', 'Gym', 'Pro shop', 'Changing rooms', 'Lockers', 'WiFi', 'Restaurant'],
    prose: 'Xcel Padel West Palm HQ is the biggest padel facility in the city by a wide margin: 12 premium indoor courts fitted with AI cameras, backed by a perfect 5.0 Google rating across 16 reviews. Billed as Florida’s premier indoor padel and wellness club, it pairs court time with sauna, steam room, cold plunge, a gym, lounge, restaurant, and pro shop. The club is open to the public, with court rentals, open play, and lessons all on the menu.',
    lessons: true,
    rentals: true,
  },
  {
    name: 'Palm Beach Padel',
    slug: 'palm-beach-padel',
    location: '1710 Old Okeechobee Rd, West Palm Beach, FL 33409',
    courts: '4 outdoor courts',
    surface: 'synthetic turf',
    rating: 5.0,
    reviewCount: 39,
    pricing: '$30-40 per player per hour (off-peak/peak); memberships available',
    amenities: ['Pro shop', 'WiFi', 'Free parking', 'Sauna', 'Cold plunge (per Playtomic)', 'AI cameras'],
    prose: 'Palm Beach Padel carries a 5.0 Google rating on 39 reviews — the largest review base in the city. This community-focused club offers 4 world-class panoramic outdoor courts imported from Spain, plus professional coaching, a chill-out lounge, and a café for post-match relaxation. AI cameras, a pro shop, and free parking round out the package.',
    lessons: true,
    rentals: true,
  },
  {
    name: 'Padel Club Palm Beach',
    slug: 'padel-club-palm-beach',
    location: '2025 N Dixie Hwy, West Palm Beach, FL 33407',
    courts: '4 courts (3 outdoor + 1 indoor)',
    surface: 'outdoor: artificial turf; indoor: hard',
    rating: 5.0,
    reviewCount: 18,
    pricing: 'Pay-per-play: outdoor $30-35/player/hour, indoor $50/player/1.5hr ($200/court); memberships: annual $10k unlimited, monthly $275 w/ discounts; lessons $40-175',
    amenities: ['Premium locker rooms', 'Pro shop', 'Coaching by pros'],
    prose: 'Minutes from downtown, Padel Club Palm Beach is the city’s premier stand-alone padel club and its only mixed indoor/outdoor facility: 3 outdoor championship courts plus 1 indoor. A stylish clubhouse with bar and lounge, premium locker rooms, and pro coaching earn it a 5.0 Google rating across 18 reviews, and the calendar runs lessons, clinics, and tournaments in a welcoming community atmosphere.',
    lessons: true,
    rentals: true,
  },
  {
    name: 'Mondo Padel',
    slug: 'mondo-padel',
    location: 'West Palm Beach, FL',
    courts: '1 outdoor court',
    rating: 5.0,
    reviewCount: 3,
    amenities: ['Parking', 'Rackets and balls rental', 'Lockers', 'WiFi'],
    prose: 'Mondo Padel is the city’s boutique curiosity: an exclusive facility that doubles as a private club and a showcase for its world-class court manufacturing. Its single high-performance panoramic court is designed for competitive matches and casual play alike, and the club holds a 5.0 rating from its first 3 Google reviews. Racket and ball rental, lockers, WiFi, and parking are available on site.',
    rentals: true,
  },
];

const comingSoon: Club = {
  name: 'DUS Padel',
  slug: 'dus-padel',
  location: '2031 Okeechobee Blvd, West Palm Beach, FL 33409',
  courts: '6 indoor courts',
  amenities: ['Luxury spa (saunas, cold plunges, lockers)', 'Pro shop', 'Store', 'Free parking', 'Changing rooms', 'WiFi', 'Disabled access'],
  prose: 'DUS Padel is building a sport and wellness ecosystem around premium indoor padel in the heart of West Palm Beach. The plan: 6 world-class indoor courts, luxury spa amenities with saunas and cold plunges, an organic café, and a community rooted in healthy living — all under one roof on Okeechobee Blvd.',
  rentals: true,
};

export default function WestPalmBeachBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in West Palm Beach (2026)",
    "description": "Discover West Palm Beach's 5 padel clubs in 2026. Xcel Padel, Palm Beach Padel, Padel Club Palm Beach, Mondo Padel & what's opening next.",
    "datePublished": "2026-07-05T00:00:00Z",
    "dateModified": "2026-07-05T00:00:00Z",
    "author": {
      "@type": "Organization",
      "name": "Padel Courts Finder",
      "url": "https://www.padelcourtsfinder.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Padel Courts Finder",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.padelcourtsfinder.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.padelcourtsfinder.com/blog/best-padel-clubs-west-palm-beach"
    }
  };

  const itemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [...clubs, comingSoon].map((club, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SportsActivityLocation",
        "name": club.name,
        "url": `https://www.padelcourtsfinder.com/courts/${club.slug}`
      }
    }))
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many padel clubs are in West Palm Beach?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "West Palm Beach has 5 padel clubs in our directory: 4 currently open (Xcel Padel, Palm Beach Padel, Padel Club Palm Beach, and Mondo Padel) with 21 courts between them, plus DUS Padel opening soon with 6 more indoor courts."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a membership to play padel in West Palm Beach?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally no. Xcel Padel, Palm Beach Padel, and Padel Club Palm Beach all offer pay-per-play court rentals, with optional memberships that add discounts and perks. Check each club's listing for current booking policies and rates."
        }
      },
      {
        "@type": "Question",
        "name": "Where can beginners learn padel in West Palm Beach?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Three clubs offer lessons: Xcel Padel (group and private lessons), Palm Beach Padel (professional coaching), and Padel Club Palm Beach (lessons and clinics). All four open clubs offer equipment rental, so you can try padel before buying gear."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      <section className="grain bg-court text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-stone-400 hover:text-turf">
              &larr; Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in West Palm Beach (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>West Palm Beach, FL</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>5 Clubs Covered</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>July 5, 2026</span>
            </div>
          </div>
          <div className="text-sm text-stone-500 mt-1">By the Padel Courts Finder editorial team</div>
        </div>
      </section>

      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-padel-green">4</div>
              <div className="text-sm text-stone-600">Open Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-padel-green">21</div>
              <div className="text-sm text-stone-600">Courts Open Now</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-padel-green">Indoor &amp; Out</div>
              <div className="text-sm text-stone-600">Court Types</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-padel-green">+6</div>
              <div className="text-sm text-stone-600">Courts Coming Soon</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">
            West Palm Beach Punches Above Its Weight
          </h2>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            For a city its size, West Palm Beach has a remarkably deep padel bench: 4 open clubs with 21 courts, and every single one of them holds a perfect 5.0 Google rating. The mix runs the full spectrum &mdash; <Link href="/courts/xcel-padel" className="text-padel-green hover:underline">Xcel Padel</Link> brings 12 indoor courts with full wellness amenities, <Link href="/courts/palm-beach-padel" className="text-padel-green hover:underline">Palm Beach Padel</Link> plays outdoors on Spanish-imported panoramic courts, <Link href="/courts/padel-club-palm-beach" className="text-padel-green hover:underline">Padel Club Palm Beach</Link> splits the difference with both formats, and boutique <Link href="/courts/mondo-padel" className="text-padel-green hover:underline">Mondo Padel</Link> showcases a single high-performance court.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed">
            A fifth club, DUS Padel, is opening soon with 6 more indoor courts. Here&apos;s every club in the city, ordered by rating and court count.
          </p>
        </div>

        <div className="space-y-12">
          {clubs.map((club) => (
            <div key={club.slug} className="border-t-4 border-padel-green bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="grain bg-court text-white p-6">
                <h2 className="text-3xl font-bold mb-2">
                  <Link href={`/courts/${club.slug}`} className="hover:text-turf transition-colors">
                    {club.name}
                  </Link>
                </h2>
                {club.rating && (
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xl font-bold">{club.rating.toFixed(1)}</span>
                    <span className="text-blue-100">({club.reviewCount} Google reviews)</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2 text-stone-700">
                    <MapPin className="w-5 h-5 text-padel-green flex-shrink-0 mt-0.5" />
                    <span>{club.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-700">
                    <Users className="w-5 h-5 text-padel-green flex-shrink-0" />
                    <span>{club.courts}{club.surface ? ` · ${club.surface}` : ''}</span>
                  </div>
                  {club.lessons && (
                    <div className="flex items-center gap-2 text-stone-700">
                      <GraduationCap className="w-5 h-5 text-padel-green flex-shrink-0" />
                      <span>Lessons &amp; racket rental available</span>
                    </div>
                  )}
                </div>

                <p className="text-stone-700 text-lg leading-relaxed mb-6">
                  {club.prose}
                </p>

                <div className="mb-6">
                  <h3 className="font-bold text-stone-900 mb-3 text-lg">Amenities:</h3>
                  <div className="flex flex-wrap gap-2">
                    {club.amenities.map((amenity, index) => (
                      <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {club.pricing && (
                  <div className="bg-slate-50 border rounded-lg p-4">
                    <h3 className="font-bold text-stone-900 mb-1">Pricing (as listed):</h3>
                    <p className="text-stone-700">{club.pricing}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Opening Soon in West Palm Beach</h2>
          <div className="border-t-4 border-amber-400 bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="grain bg-court text-white p-6">
              <div className="inline-block px-3 py-1 bg-amber-400 text-stone-900 rounded-full text-sm font-bold mb-2">Coming Soon</div>
              <h3 className="text-3xl font-bold">
                <Link href={`/courts/${comingSoon.slug}`} className="hover:text-turf transition-colors">
                  {comingSoon.name}
                </Link>
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-2 text-stone-700">
                  <MapPin className="w-5 h-5 text-padel-green flex-shrink-0 mt-0.5" />
                  <span>{comingSoon.location}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <Users className="w-5 h-5 text-padel-green flex-shrink-0" />
                  <span>{comingSoon.courts}</span>
                </div>
              </div>
              <p className="text-stone-700 text-lg leading-relaxed mb-6">{comingSoon.prose}</p>
              <div className="flex flex-wrap gap-2">
                {comingSoon.amenities.map((amenity, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Booking + What to Expect</h2>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            Book through each club&apos;s website or booking app rather than showing up cold &mdash; weekday evenings and weekend mornings are the first slots to go, especially in season. Off-peak daytime bookings are easier to land and cheaper at clubs with tiered pricing. All four open clubs offer equipment rental, so a first session requires nothing but court shoes.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed">
            Rates and formats vary from 60-minute to 90-minute sessions, so confirm the details when you book. Compare every West Palm Beach club in our <Link href="/search" className="text-padel-green hover:underline">court search</Link>, or explore the full <Link href="/florida" className="text-padel-green hover:underline">Florida padel directory</Link> &mdash; the deepest padel state in the country.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-2">How many padel clubs are in West Palm Beach?</h3>
              <p className="text-stone-700 leading-relaxed">
                West Palm Beach has 5 padel clubs in our directory: 4 currently open &mdash; Xcel Padel, Palm Beach Padel, Padel Club Palm Beach, and Mondo Padel &mdash; with 21 courts between them, plus DUS Padel opening soon with 6 more indoor courts.
              </p>
            </div>
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-2">Do I need a membership to play padel in West Palm Beach?</h3>
              <p className="text-stone-700 leading-relaxed">
                Generally no. Xcel Padel, Palm Beach Padel, and Padel Club Palm Beach all offer pay-per-play court rentals, with optional memberships adding discounts and perks. Check each club&apos;s listing for current booking policies and rates.
              </p>
            </div>
            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-2">Where can beginners learn padel in West Palm Beach?</h3>
              <p className="text-stone-700 leading-relaxed">
                Three clubs offer lessons: Xcel Padel (group and private), Palm Beach Padel (professional coaching), and Padel Club Palm Beach (lessons and clinics). All four open clubs rent equipment, so you can try the sport first &mdash; then check our guide to the <Link href="/blog/best-padel-rackets-beginners" className="text-padel-green hover:underline">best beginner padel rackets</Link> when you&apos;re ready for your own.
              </p>
            </div>
          </div>
        </div>

        <div className="grain bg-court text-white rounded-xl p-8 mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Keep Reading</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/search" className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-5 transition-colors">
              <h3 className="font-bold text-lg mb-1">Search All Courts</h3>
              <p className="text-sm text-blue-100">Filter every US padel club by city, surface &amp; amenities</p>
            </Link>
            <Link href="/florida" className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-5 transition-colors">
              <h3 className="font-bold text-lg mb-1">Florida Padel Directory</h3>
              <p className="text-sm text-blue-100">Every padel court in the Sunshine State</p>
            </Link>
            <Link href="/blog/padel-patterns-beginners" className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-5 transition-colors">
              <h3 className="font-bold text-lg mb-1">Padel Patterns for Beginners</h3>
              <p className="text-sm text-blue-100">The core shot patterns to learn first</p>
            </Link>
            <Link href="/blog/how-to-choose-padel-club" className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-5 transition-colors">
              <h3 className="font-bold text-lg mb-1">How to Choose a Padel Club</h3>
              <p className="text-sm text-blue-100">What actually matters when picking your home club</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
