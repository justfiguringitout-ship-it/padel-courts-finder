import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Globe, Mail, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Los Angeles (2026) | 5 Clubs Ranked',
  description: 'Discover LA\'s 5 best padel clubs in 2026. Rooftop courts, Sunset Blvd originals & indoor gems. Rankings, pricing & Los Angeles guide.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-los-angeles',
  },
  openGraph: {
    title: 'Best Padel Clubs in Los Angeles (2026) | 5 Clubs Ranked',
    description: 'Discover LA\'s 5 best padel clubs in 2026. Rooftop courts, Sunset Blvd originals & indoor gems. Rankings, pricing & Los Angeles guide.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-los-angeles',
    type: 'article',
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
    name: 'Los Angeles Padel Club',
    slug: 'los-angeles-padel-club',
    score: 95,
    location: 'Los Angeles, CA',
    courts: '7 outdoor courts',
    price: '$$$',
    description: 'LA\'s premier padel destination. Los Angeles Padel Club (LAPC) boasts 7 state-of-the-art outdoor courts in a historic clubhouse setting, making it the largest dedicated padel facility in the city. With locker rooms, co-working space, a pro shop, gym and wellness center, and an outdoor terrace, LAPC is the complete package.',
    highlights: [
      '7 state-of-the-art outdoor courts',
      'Historic clubhouse setting',
      'Co-working space on-site',
      'Pro shop with premium gear',
      'Gym & wellness center',
      'Outdoor terrace & social areas'
    ],
    programs: [
      'Court bookings',
      'Professional coaching',
      'League play',
      'Social events',
      'Corporate events',
      'Beginner programs'
    ],
    bestFor: [
      'Serious competitive players',
      'Players wanting most courts',
      'Social padel enthusiasts',
      'Fitness-focused players'
    ]
  },
  {
    rank: 2,
    name: 'Padel Up - Culver City',
    slug: 'padel-up-culver-city',
    score: 93,
    location: 'Culver City, Los Angeles, CA',
    courts: '3 indoor courts',
    price: '$$$',
    website: 'padelup.com',
    description: 'Los Angeles\' first indoor padel club features 3 courts with high ceilings, professional coaching, and premium wellness amenities. Padel Up Culver City combines quality indoor play with sauna, cold plunge, and comfortable locker rooms for a complete experience.',
    highlights: [
      '3 indoor courts with high ceilings',
      'Sauna & cold plunge',
      'Locker rooms with showers',
      'Pro shop on-site',
      'Free parking & WiFi',
      'Google rating: 4.1 stars'
    ],
    programs: [
      'Off-peak $45/hr',
      'Peak $55/hr',
      'Memberships from $220/mo',
      'Professional coaching',
      'Group clinics',
      'Beginner workshops'
    ],
    bestFor: [
      'Indoor play seekers',
      'Culver City & Westside residents',
      'Wellness-focused players',
      'Year-round consistent play'
    ]
  },
  {
    rank: 3,
    name: 'The Padel Courts',
    slug: 'the-padel-courts',
    score: 91,
    location: 'Sunset Blvd, Los Angeles, CA',
    courts: '3 outdoor courts (2 full, 1 mini)',
    price: '$$-$$$',
    description: 'Los Angeles\' original outdoor padel club on iconic Sunset Boulevard. The Padel Courts offers 3 courts including 2 full-size and 1 mini court, professional lessons, clinics, and community events in an inclusive, welcoming atmosphere with military discounts and LGBTQ+ friendly policies.',
    highlights: [
      '3 courts on Sunset Blvd (2 full, 1 mini)',
      'LA\'s original padel club',
      'LGBTQ+ friendly & inclusive',
      'Military discounts available',
      'Dedicated parking',
      'Google rating: 5.0 stars'
    ],
    programs: [
      'Courts ~$25-60/hr',
      'Clinics $35-45',
      'Private lessons $60-120/hr',
      'Racket stringing service',
      'Community events',
      'Beginner programs'
    ],
    bestFor: [
      'Community-focused players',
      'Beginners & newcomers',
      'Sunset Blvd & Hollywood area',
      'Inclusive environment seekers'
    ]
  },
  {
    rank: 4,
    name: 'Padel Up - Century City',
    slug: 'padel-up-century-city',
    score: 90,
    location: 'Westfield Century City, Los Angeles, CA',
    courts: 'Outdoor courts',
    price: '$$-$$$',
    website: 'padelup.com',
    description: 'Premium outdoor padel atop the Westfield Century City mall. Padel Up Century City offers rooftop courts with quality turf, LED lighting for night play, lessons, equipment rentals, and a pro shop. The stunning rooftop views and convenient mall location make it a unique LA padel experience.',
    highlights: [
      'Rooftop courts with views',
      'LED lighting for night play',
      'Quality artificial turf surface',
      'Pro shop on-site',
      'Wheelchair accessible',
      'Google rating: 4.6 stars'
    ],
    programs: [
      'Court rates $30-60/hr',
      'Equipment rental available',
      'Professional coaching',
      'Event hosting',
      'Social leagues',
      'Beginner sessions'
    ],
    bestFor: [
      'West LA professionals',
      'Rooftop experience seekers',
      'Century City workers',
      'Evening players (LED courts)'
    ]
  },
  {
    rank: 5,
    name: 'Padel Up Club',
    slug: 'padel-up-club',
    score: 88,
    location: 'Los Angeles, CA',
    courts: '4 indoor courts',
    price: '$$$',
    description: 'Padel Up Club is an indoor padel facility dedicated to growing the padel community in Los Angeles. With 4 courts across locations including a flagship with 3 courts, high ceilings, and a bar and lounge area, it combines quality play with social atmosphere. Members enjoy sauna, cold plunge, and weights.',
    highlights: [
      '4 indoor courts across locations',
      'High ceilings at flagship',
      'Bar & lounge area',
      'Sauna & cold plunge (members)',
      'Weights & fitness area',
      'Showers & locker rooms'
    ],
    programs: [
      'Court bookings',
      'Membership packages',
      'Professional coaching',
      'League play',
      'Community events',
      'Beginner programs'
    ],
    bestFor: [
      'Indoor play enthusiasts',
      'Social players',
      'Community-focused members',
      'Players wanting bar & lounge'
    ]
  }
];

export default function LosAngelesBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in Los Angeles (2026) | 5 Clubs Ranked",
    "description": "Discover LA's 5 best padel clubs in 2026. Rooftop courts, Sunset Blvd originals & indoor gems. Rankings, pricing & Los Angeles guide.",
    "image": "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=630&fit=crop",
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
      "@id": "https://www.padelcourtsfinder.com/blog/best-padel-clubs-los-angeles"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />

      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-green-200 hover:text-white">
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Los Angeles (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-green-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Los Angeles, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>5 Clubs Ranked</span>
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
              <div className="text-3xl font-bold text-green-600">5</div>
              <div className="text-sm text-gray-600">Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">17+</div>
              <div className="text-sm text-gray-600">Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">$25-60</div>
              <div className="text-sm text-gray-600">Per Hour Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">300+</div>
              <div className="text-sm text-gray-600">Sunny Days/Year</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            LA&apos;s Padel Scene in 2026: From Rooftops to Historic Clubhouses
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Los Angeles has cemented its position as the West Coast&apos;s padel capital in 2026. With 5 clubs and over 17 courts, the city offers everything from rooftop courts atop Century City to LA&apos;s original outdoor club on Sunset Boulevard. The biggest addition is <Link href="/courts/los-angeles-padel-club" className="text-green-600 hover:underline">Los Angeles Padel Club</Link>, which leads the pack with 7 outdoor courts in a historic clubhouse setting.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The <Link href="/courts/padel-up-culver-city" className="text-green-600 hover:underline">Padel Up</Link> brand has two LA locations covering both indoor (Culver City) and outdoor (Century City) play, while <Link href="/courts/the-padel-courts" className="text-green-600 hover:underline">The Padel Courts</Link> on Sunset Blvd continues to build community with its inclusive, welcoming atmosphere and a perfect 5.0 Google rating.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With 300+ days of sunshine and a massive international population, LA is primed for continued padel growth. Browse all courts on our <Link href="/california/los-angeles" className="text-green-600 hover:underline">Los Angeles courts page</Link> or explore the full <Link href="/california" className="text-green-600 hover:underline">California state directory</Link>.
          </p>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Best Overall:</strong> <Link href="/courts/los-angeles-padel-club" className="text-green-600 hover:underline">LA Padel Club</Link> (7 courts, historic clubhouse)</p>
            <p><strong>Best Indoor:</strong> <Link href="/courts/padel-up-culver-city" className="text-green-600 hover:underline">Padel Up Culver City</Link> (3 courts, sauna & cold plunge)</p>
            <p><strong>Best Community:</strong> <Link href="/courts/the-padel-courts" className="text-green-600 hover:underline">The Padel Courts</Link> (Sunset Blvd, 5.0 stars)</p>
            <p><strong>Best Rooftop:</strong> <Link href="/courts/padel-up-century-city" className="text-green-600 hover:underline">Padel Up Century City</Link> (mall-top views)</p>
            <p><strong>Best Social:</strong> <Link href="/courts/padel-up-club" className="text-green-600 hover:underline">Padel Up Club</Link> (bar & lounge, 4 courts)</p>
          </div>
        </div>

        <div className="space-y-12">
          {clubs.map(club => (
            <div key={club.rank} id={`club-${club.rank}`} className="border-t-4 border-green-600 bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm font-semibold mb-1">#{club.rank}</div>
                    <h3 className="text-3xl font-bold mb-2">
                      <Link href={`/courts/${club.slug}`} className="hover:text-green-200 transition-colors">
                        {club.name}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < Math.floor(club.score / 20) ? 'fill-yellow-400 text-yellow-400' : 'text-green-300'}`} />
                        ))}
                      </div>
                      <span className="text-xl font-bold">{club.score}/100</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{club.price}</div>
                    <div className="text-sm text-green-100">Price Range</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{club.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>{club.courts}</span>
                  </div>
                  {club.phone && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <a href={`tel:${club.phone}`} className="hover:text-green-600">{club.phone}</a>
                    </div>
                  )}
                  {club.website && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Globe className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <a href={`https://${club.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
                        {club.website}
                      </a>
                    </div>
                  )}
                  {club.email && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <a href={`mailto:${club.email}`} className="hover:text-green-600">{club.email}</a>
                    </div>
                  )}
                  {club.hours && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-5 h-5 text-green-600 flex-shrink-0" />
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
                        <span className="text-green-600 font-bold">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Programs & Offerings:</h4>
                  <div className="flex flex-wrap gap-2">
                    {club.programs.map((program, index) => (
                      <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Best For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {club.bestFor.map((item, index) => (
                      <span key={index} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in LA?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find all Los Angeles padel courts in one place
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/california/los-angeles"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View LA Courts
            </Link>
            <Link
              href="/california"
              className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors"
            >
              All California Clubs
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Padel Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-san-francisco" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in San Francisco</h4>
              <p className="text-sm text-gray-600">Bay Area padel with stunning views</p>
            </Link>
            <Link href="/blog/best-padel-clubs-san-diego" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in San Diego</h4>
              <p className="text-sm text-gray-600">Year-round padel in perfect weather</p>
            </Link>
            <Link href="/blog/best-padel-clubs-phoenix" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Phoenix</h4>
              <p className="text-sm text-gray-600">Desert padel with world-class facilities</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
