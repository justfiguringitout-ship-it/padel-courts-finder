import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Globe, Mail, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in NYC (2026) | Brooklyn, Manhattan & Beyond',
  description: 'Discover NYC\'s 7 best padel clubs in 2026. From Padel Haus Dumbo to Reserve Hudson Yards. Rankings, pricing & New York guide.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-nyc',
  },
  openGraph: {
    title: 'Best Padel Clubs in NYC (2026) | Brooklyn, Manhattan & Beyond',
    description: 'Discover NYC\'s 7 best padel clubs in 2026. From Padel Haus Dumbo to Reserve Hudson Yards. Rankings, pricing & New York guide.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-nyc',
    type: 'article',
    images: [{ url: 'https://static.wixstatic.com/media/f5e84b_55da76b8631948a7b5f8a96f7bfde8a2%7Emv2.png/v1/fit/w_2500,h_1330,al_c/f5e84b_55da76b8631948a7b5f8a96f7bfde8a2%7Emv2.png' }],
  },
};

interface Club {
  rank: number;
  name: string;
  slug: string;
  score: number;
  location: string;
  courts: string;
  price: string;
  phone?: string;
  email?: string;
  website?: string;
  hours?: string;
  description: string;
  highlights: string[];
  programs: string[];
  bestFor: string[];
}

const clubs: Club[] = [
  {
    rank: 1,
    name: 'Padel Haus - Dumbo',
    slug: 'padel-haus-dumbo',
    score: 96,
    location: 'Dumbo, Brooklyn, NY',
    courts: '4 indoor courts',
    price: '$$$$',
    website: 'padelhaus.com',
    description: 'NYC\'s premier padel destination on the Brooklyn waterfront. Padel Haus Dumbo features 4 state-of-the-art indoor courts with spa-like amenities including Malin + Goetz locker rooms, fitness equipment, and social lounges. The facility that put New York padel on the map continues to set the standard.',
    highlights: [
      '4 state-of-the-art indoor courts',
      'Spa-like locker rooms (Malin + Goetz)',
      'Fitness equipment on-site',
      'Social lounges & event spaces',
      'Pro shop with top brands',
      'Parking available'
    ],
    programs: [
      'Memberships from $190/month',
      'Court bookings ~$40-80/hr',
      'Elite coaching programs',
      'Corporate memberships',
      'Youth academies',
      'League play & tournaments'
    ],
    bestFor: [
      'Serious competitive players',
      'Brooklyn residents',
      'Corporate groups',
      'Premium experience seekers'
    ]
  },
  {
    rank: 2,
    name: 'Padel& Greenpoint',
    slug: 'padel-greenpoint',
    score: 95,
    location: 'Greenpoint, Brooklyn, NY',
    courts: '6 indoor courts',
    price: '$$$',
    website: 'padeland.com',
    description: 'Brooklyn\'s largest padel club features 6 courts under a soaring 36-foot ceiling in Greenpoint. Padel& combines premium court quality with wellness amenities like cold plunges and recovery areas, plus a well-stocked pro shop and comfortable locker rooms.',
    highlights: [
      '6 courts under 36-foot ceilings',
      'Cold plunges & recovery areas',
      'Pro shop with premium gear',
      'Locker rooms with showers',
      'Lounge & social space',
      'Google rating: 4.8 stars'
    ],
    programs: [
      'Peak: $75/hour',
      'Off-peak: $65/hour',
      'Memberships from $75/month',
      'Off-peak membership (50% off bookings)',
      'Professional coaching',
      'League play'
    ],
    bestFor: [
      'North Brooklyn residents',
      'Players wanting most courts',
      'Wellness-focused players',
      'All skill levels'
    ]
  },
  {
    rank: 3,
    name: 'Golden Point Padel',
    slug: 'golden-point-padel',
    score: 93,
    location: '2781 Shell Rd, Brooklyn, NY',
    courts: '4 indoor courts',
    price: '$$-$$$',
    description: 'An elegantly designed private membership club offering an elevated padel experience. Golden Point Padel features 4 professional indoor courts with lessons, clinics, and a refined atmosphere that sets it apart from the typical padel facility.',
    highlights: [
      '4 professional indoor courts',
      'Elegant private club design',
      'Online booking system',
      'Changing rooms',
      'Professional coaching available',
      'Google rating: 4.7 stars'
    ],
    programs: [
      'Court rates $25-60/hour',
      'Membership packages available',
      'Private lessons',
      'Group clinics',
      'Online booking',
      'Beginner programs'
    ],
    bestFor: [
      'Members seeking exclusivity',
      'South Brooklyn players',
      'Players wanting private club feel',
      'Intermediate to advanced players'
    ]
  },
  {
    rank: 4,
    name: 'Mink Padel',
    slug: 'mink-padel',
    score: 91,
    location: '439 W 127th St, New York, NY 10027',
    courts: '2 outdoor courts',
    price: '$$$-$$$$',
    website: 'mink.playbypoint.com',
    description: 'Harlem\'s premier padel club features panoramic glass courts in a stunning courtyard surrounded by 200-year-old buildings. Mink Padel brings a unique Manhattan outdoor experience with pro-grade lighting for evening play and a full suite of membership options.',
    highlights: [
      'Panoramic glass courts in historic courtyard',
      '200-year-old building backdrop',
      'Pro-grade lighting for night play',
      'Equipment rental available',
      'Leagues & tournaments',
      'Google rating: 5.0 stars'
    ],
    programs: [
      'Full membership $550/mo (fees waived)',
      'Basic membership $140/mo (50% off)',
      'Student membership $90/mo (50% off)',
      'Professional coaching',
      'Leagues & tournaments',
      'Equipment rental'
    ],
    bestFor: [
      'Manhattan residents',
      'Unique atmosphere seekers',
      'Students (discounted membership)',
      'Social players'
    ]
  },
  {
    rank: 5,
    name: 'Padel Haus - Williamsburg',
    slug: 'padel-haus-williamsburg',
    score: 90,
    location: 'Williamsburg, Brooklyn, NY',
    courts: '5 indoor courts',
    price: '$$-$$$$',
    website: 'padelhaus.com',
    description: 'Padel Haus brings its premium padel experience to Brooklyn\'s trendiest neighborhood with 5 indoor courts, a bar, and event hosting. Part of the growing Padel Haus network, the Williamsburg location combines quality courts with the neighborhood\'s signature social energy.',
    highlights: [
      '5 indoor courts',
      'Bar & social lounge',
      'Williamsburg neighborhood vibe',
      'Events & leagues hosted',
      'Padel Haus network benefits',
      'Google rating: 4.2 stars'
    ],
    programs: [
      'Court rentals ~$40-70/hr off-peak',
      'Peak rates up to $250+/hr',
      'Single-club membership from $155/mo',
      'Pro coaching',
      'League play',
      'Corporate events'
    ],
    bestFor: [
      'Williamsburg residents',
      'Social scene players',
      'Padel Haus network members',
      'After-work groups'
    ]
  },
  {
    rank: 6,
    name: 'Reserve Padel - Hudson Yards',
    slug: 'reserve-padel-hudson-yards',
    score: 88,
    location: 'Hudson Yards, New York, NY',
    courts: '3 outdoor courts (bubble-enclosed)',
    price: '$$$$',
    description: 'Manhattan\'s first padel club in the iconic Hudson Yards district features 3 premium glass-enclosed courts in a bubble structure for year-round play. Reserve Padel offers a wellness-forward experience with cold plunges, yoga classes, and a planned gym expansion.',
    highlights: [
      '3 premium glass-enclosed courts',
      'Year-round bubble structure',
      'Cold plunges & wellness classes',
      'Observation deck',
      'Showers & lockers',
      'Planned gym expansion'
    ],
    programs: [
      'Court ~$225/hr',
      'Clinics $40-50 ($32-40 member)',
      'Membership waitlist',
      'Yoga & pilates classes',
      'Pro shop',
      'Private lessons'
    ],
    bestFor: [
      'Midtown Manhattan players',
      'Wellness-focused players',
      'Hudson Yards community',
      'Premium experience seekers'
    ]
  },
  {
    rank: 7,
    name: 'Elite Sports Club at 111 West 57th Street',
    slug: 'elite-sports-club-at-111-west-57th-street',
    score: 85,
    location: '111 West 57th St, New York, NY',
    courts: '1 indoor court',
    price: '$$$$',
    description: 'Manhattan\'s only indoor residential padel court sits inside one of New York\'s most exclusive luxury towers. Elite Sports Club offers a private padel experience alongside an 82-foot pool with cabanas, spa, and a double-height fitness center with mezzanine terrace.',
    highlights: [
      'Manhattan\'s only indoor residential court',
      'Luxury residential tower setting',
      '82-foot pool with cabanas',
      'Spa, sauna & treatment rooms',
      'Double-height fitness center',
      'Golf simulator'
    ],
    programs: [
      'Private residential club access',
      'Court reservations for residents',
      'Fitness center access',
      'Spa & wellness services'
    ],
    bestFor: [
      'Building residents',
      'Ultra-luxury seekers',
      'Private club members',
      'Midtown Manhattan elite'
    ]
  }
];

export default function NYCBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in NYC (2026) | Brooklyn, Manhattan & Beyond",
    "description": "Discover NYC's 7 best padel clubs in 2026. From Padel Haus Dumbo to Reserve Hudson Yards. Rankings, pricing & New York guide.",
    "image": "https://static.wixstatic.com/media/f5e84b_55da76b8631948a7b5f8a96f7bfde8a2%7Emv2.png/v1/fit/w_2500,h_1330,al_c/f5e84b_55da76b8631948a7b5f8a96f7bfde8a2%7Emv2.png",
    "datePublished": "2026-03-21T00:00:00Z",
    "dateModified": "2026-03-21T00:00:00Z",
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
      "@id": "https://www.padelcourtsfinder.com/blog/best-padel-clubs-nyc"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-blue-200 hover:text-white">
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in NYC (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>New York City & Brooklyn</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>7 Clubs Ranked</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">7</div>
              <div className="text-sm text-gray-600">Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">25</div>
              <div className="text-sm text-gray-600">Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$25-225</div>
              <div className="text-sm text-gray-600">Per Hour Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">1 More</div>
              <div className="text-sm text-gray-600">Coming Soon</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            NYC&apos;s Padel Scene Explodes in 2026
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            New York City&apos;s padel revolution is in full swing. From Brooklyn&apos;s waterfront to Manhattan&apos;s Hudson Yards, the city now boasts 7 open clubs with 25 courts and another facility on the way. Led by <Link href="/courts/padel-haus-dumbo" className="text-blue-600 hover:underline">Padel Haus Dumbo</Link> and the massive 6-court <Link href="/courts/padel-greenpoint" className="text-blue-600 hover:underline">Padel& Greenpoint</Link>, NYC has become one of America&apos;s most exciting padel markets.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Brooklyn dominates the scene with five clubs, while Manhattan contributes three unique venues: <Link href="/courts/mink-padel" className="text-blue-600 hover:underline">Mink Padel</Link>&apos;s historic Harlem courtyard, <Link href="/courts/reserve-padel-hudson-yards" className="text-blue-600 hover:underline">Reserve Padel</Link>&apos;s bubble-enclosed Hudson Yards courts, and the ultra-exclusive <Link href="/courts/elite-sports-club-at-111-west-57th-street" className="text-blue-600 hover:underline">Elite Sports Club</Link> at 111 West 57th Street.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you&apos;re a Brooklyn local, a Manhattan commuter, or visiting the city, this guide covers every padel option in the five boroughs. Browse all courts on our <Link href="/new-york/new-york" className="text-blue-600 hover:underline">New York City courts page</Link> or explore the full <Link href="/new-york" className="text-blue-600 hover:underline">New York state directory</Link>.
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Best Overall:</strong> <Link href="/courts/padel-haus-dumbo" className="text-blue-600 hover:underline">Padel Haus Dumbo</Link> (premium Brooklyn waterfront)</p>
            <p><strong>Most Courts:</strong> <Link href="/courts/padel-greenpoint" className="text-blue-600 hover:underline">Padel& Greenpoint</Link> (6 courts, 36-ft ceilings)</p>
            <p><strong>Best Manhattan:</strong> <Link href="/courts/mink-padel" className="text-blue-600 hover:underline">Mink Padel</Link> (historic Harlem courtyard)</p>
            <p><strong>Best Value:</strong> <Link href="/courts/golden-point-padel" className="text-blue-600 hover:underline">Golden Point Padel</Link> (from $25/hr)</p>
            <p><strong>Best Wellness:</strong> <Link href="/courts/reserve-padel-hudson-yards" className="text-blue-600 hover:underline">Reserve Padel</Link> (cold plunges, yoga, pilates)</p>
          </div>
        </div>

        <div className="space-y-12">
          {clubs.map(club => (
            <div key={club.rank} id={`club-${club.rank}`} className="border-t-4 border-blue-600 bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm font-semibold mb-1">#{club.rank}</div>
                    <h3 className="text-3xl font-bold mb-2">
                      <Link href={`/courts/${club.slug}`} className="hover:text-blue-200 transition-colors">
                        {club.name}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < Math.floor(club.score / 20) ? 'fill-yellow-400 text-yellow-400' : 'text-blue-300'}`} />
                        ))}
                      </div>
                      <span className="text-xl font-bold">{club.score}/100</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{club.price}</div>
                    <div className="text-sm text-blue-100">Price Range</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{club.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{club.courts}</span>
                  </div>
                  {club.phone && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <a href={`tel:${club.phone}`} className="hover:text-blue-600">{club.phone}</a>
                    </div>
                  )}
                  {club.website && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <a href={`https://${club.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        {club.website}
                      </a>
                    </div>
                  )}
                  {club.email && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <a href={`mailto:${club.email}`} className="hover:text-blue-600">{club.email}</a>
                    </div>
                  )}
                  {club.hours && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{club.hours}</span>
                    </div>
                  )}
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {club.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">What Makes It Special:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {club.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Programs & Offerings:</h4>
                  <div className="flex flex-wrap gap-2">
                    {club.programs.map((program, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Best For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {club.bestFor.map((item, index) => (
                      <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon to NYC</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="px-2 py-1 bg-amber-200 text-amber-800 rounded text-xs font-semibold whitespace-nowrap">COMING SOON</span>
              <div>
                <h4 className="font-bold text-gray-900">Padel Haus Greenpoint</h4>
                <p className="text-gray-700">5 indoor courts along the Brooklyn waterfront near McCarren Park. Features state-of-the-art courts, spa-like locker rooms, Juice Haus bar, lounge and co-working space. Court rates expected $30-70/hr.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in NYC?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find all New York City padel courts in one place
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/new-york/new-york"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View NYC Courts
            </Link>
            <Link
              href="/new-york"
              className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors"
            >
              All New York Clubs
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Padel Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-new-jersey" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in New Jersey</h4>
              <p className="text-sm text-gray-600">NYC&apos;s neighbor with growing padel options</p>
            </Link>
            <Link href="/blog/best-padel-clubs-philadelphia" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Philadelphia</h4>
              <p className="text-sm text-gray-600">Philly&apos;s emerging padel scene</p>
            </Link>
            <Link href="/blog/best-padel-clubs-chicago" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Chicago</h4>
              <p className="text-sm text-gray-600">Windy City&apos;s indoor padel boom</p>
            </Link>
            <Link href="/blog/best-padel-rackets-beginners" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Beginner Rackets (2026)</h4>
              <p className="text-sm text-gray-600">Top 5 picks from $90–$130 →</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
