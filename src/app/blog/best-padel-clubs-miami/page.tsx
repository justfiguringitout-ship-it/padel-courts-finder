import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Globe, Mail, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Miami (2025) | Complete Guide & Rankings',
  description: 'Discover Miami\'s 10 best padel clubs ranked and reviewed. From Reserve Padel\'s elite luxury to Urban Padel\'s community vibe. Complete with pricing, programs, and insider tips.',
};

interface Club {
  rank: number;
  name: string;
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
    name: 'Reserve Padel - Miami',
    score: 98,
    location: '1395 Brickell Ave, Miami, FL 33131',
    courts: '5 indoor courts',
    price: '$$$$ (Premium)',
    phone: '(305) 507-5525',
    email: 'miami@reservepadel.com',
    website: 'reservepadel.com',
    hours: '6am-11pm daily',
    description: 'Juan Martín Díaz brings world-class padel to Miami\'s Brickell district. Reserve Padel is where elite meets elegance—5 pristine indoor courts, spa-like facilities, and the highest level of coaching in America.',
    highlights: [
      'Juan Martín Díaz as Chief Padel Officer (world #1!)',
      '5 climate-controlled indoor courts',
      'Luxury locker rooms with premium amenities',
      'Wellness center & spa facilities',
      'High-end pro shop',
      'Members-only exclusivity'
    ],
    programs: [
      'Elite coaching with pro instructors',
      'Private lessons (1-on-1, group)',
      'Advanced clinics',
      'Tournament preparation',
      'Corporate events & memberships',
      'Wellness integration programs'
    ],
    bestFor: [
      'Elite players seeking world-class training',
      'Brickell professionals',
      'Luxury experience seekers',
      'Serious tournament players'
    ]
  },
  {
    rank: 2,
    name: 'Urban Padel - Miami',
    score: 95,
    location: '3250 NE 1st Ave, Miami, FL 33137 (Midtown)',
    courts: '4 outdoor courts',
    price: '$$-$$$ (Mid-high)',
    phone: '(786) 391-0013',
    website: 'urbanpadel.com',
    description: 'Miami\'s social padel hotspot in Midtown. Urban Padel combines excellent facilities with vibrant community atmosphere. Where Miami comes to play.',
    highlights: [
      '4 beautiful outdoor courts',
      'Midtown Miami location (walkable!)',
      'Strong social community',
      'Regular mixers & tournaments',
      'Bar & lounge area',
      'Open to all skill levels'
    ],
    programs: [
      'Open play sessions (daily)',
      'Beginner-friendly clinics',
      'League play',
      'Social tournaments',
      'Private coaching',
      'Youth programs'
    ],
    bestFor: [
      'Social players',
      'Midtown residents',
      'Beginners welcome',
      'Community seekers'
    ]
  },
  {
    rank: 3,
    name: 'PlayPadel Coral Gables',
    score: 93,
    location: '2450 SW 27th Ave, Miami, FL 33133',
    courts: '4 outdoor courts',
    price: '$$$',
    website: 'playpadel.us',
    description: 'Premier padel destination in the heart of Coral Gables. Modern facilities with a strong community focus and excellent coaching programs.',
    highlights: [
      '4 well-maintained outdoor courts',
      'Prime Coral Gables location',
      'Professional coaching staff',
      'Active tournament schedule',
      'Strong community atmosphere',
      'Pro shop on-site'
    ],
    programs: [
      'Private lessons & group clinics',
      'Youth development programs',
      'Adult leagues & tournaments',
      'Beginner workshops',
      'Corporate events',
      'Round robin play'
    ],
    bestFor: [
      'Coral Gables residents',
      'Families & youth players',
      'Competitive players',
      'Community-focused members'
    ]
  },
  {
    rank: 4,
    name: 'Miami Padel Club - Doral',
    score: 90,
    location: 'Doral, FL (Multiple locations)',
    courts: '3+ courts',
    price: '$$',
    description: 'Community-focused club in growing Doral padel scene. Family-friendly atmosphere with solid instruction and regular play.',
    highlights: [
      'Family-friendly environment',
      'Multiple court options',
      'Growing Doral community',
      'Affordable pricing',
      'Regular open play'
    ],
    programs: [
      'Beginner clinics',
      'Youth programs',
      'Adult leagues',
      'Open play',
      'Private lessons'
    ],
    bestFor: [
      'Families',
      'Doral residents',
      'Budget-conscious players',
      'Beginners'
    ]
  },
  {
    rank: 5,
    name: 'PadelMiami - Wynwood',
    score: 88,
    location: 'Wynwood Arts District, Miami, FL',
    courts: '2 outdoor courts',
    price: '$$',
    description: 'Artsy Wynwood vibes meet padel. Hip atmosphere, great for younger crowds and the social scene.',
    highlights: [
      'Wynwood Arts District location',
      'Urban outdoor setting',
      'Younger demographic',
      'Social atmosphere',
      'Nearby restaurants & bars'
    ],
    programs: [
      'Open play sessions',
      'Social mixers',
      'Beginner workshops',
      'Private coaching'
    ],
    bestFor: [
      'Young professionals',
      'Social players',
      'Wynwood residents',
      'Art district lovers'
    ]
  }
];

export default function MiamiBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in Miami (2025) | Complete Guide & Rankings",
    "description": "Discover Miami's 10 best padel clubs ranked and reviewed. From Reserve Padel's elite luxury to Urban Padel's community vibe. Complete with pricing, programs, and insider tips.",
    "image": "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=630&fit=crop",
    "datePublished": "2025-10-13T00:00:00Z",
    "dateModified": "2025-10-13T00:00:00Z",
    "author": {
      "@type": "Organization",
      "name": "Padel Courts Finder",
      "url": "https://padelcourtsfinder.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Padel Courts Finder",
      "logo": {
        "@type": "ImageObject",
        "url": "https://padelcourtsfinder.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://padelcourtsfinder.com/blog/best-padel-clubs-miami"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-blue-200 hover:text-white">
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Miami (2025)
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Miami, FL</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>10+ Clubs Ranked</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Updated October 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-sm text-gray-600">Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">40+</div>
              <div className="text-sm text-gray-600">Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$30-50</div>
              <div className="text-sm text-gray-600">Per Person</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">Year-Round</div>
              <div className="text-sm text-gray-600">Perfect Weather</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Miami Leads America's Padel Revolution
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Miami isn&apos;t just keeping up with the global padel explosion—it&apos;s leading it in the United States. With 10+ world-class clubs, perfect year-round weather, and a Latin American influence that brings authentic padel culture, Miami is America&apos;s padel capital.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            From Brickell&apos;s ultra-premium Reserve Padel to community-focused clubs in Doral, Miami offers the most diverse and sophisticated padel landscape in the country.
          </p>
        </div>

        {/* Quick Rankings */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>🏆 Best Overall:</strong> Reserve Padel (Elite luxury + Juan Martín Díaz)</p>
            <p><strong>💎 Best Social:</strong> Urban Padel Midtown (Community vibe)</p>
            <p><strong>🏛️ Best Coral Gables:</strong> PlayPadel Coral Gables (Prime location)</p>
            <p><strong>👨‍👩‍👧 Best for Families:</strong> Miami Padel Club Doral</p>
            <p><strong>🎨 Best Atmosphere:</strong> PadelMiami Wynwood (Arts district)</p>
          </div>
        </div>

        {/* Club Rankings */}
        <div className="space-y-12">
          {clubs.map(club => (
            <div key={club.rank} id={`club-${club.rank}`} className="border-t-4 border-blue-600 bg-white shadow-lg rounded-xl overflow-hidden">
              {/* Club Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm font-semibold mb-1">#{club.rank}</div>
                    <h3 className="text-3xl font-bold mb-2">{club.name}</h3>
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

              {/* Club Details */}
              <div className="p-6">
                {/* Contact Info */}
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

                {/* Description */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {club.description}
                </p>

                {/* Highlights */}
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

                {/* Programs */}
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

                {/* Best For */}
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

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Miami?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find all Miami padel courts on our interactive map
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/search?city=Miami"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View Miami Courts Map
            </Link>
            <Link
              href="/florida"
              className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors"
            >
              All Florida Clubs
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Best Club Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-austin" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Austin</h4>
              <p className="text-sm text-gray-600">6+ clubs from downtown to Hill Country</p>
            </Link>
            <Link href="/blog/best-padel-clubs-los-angeles" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in LA</h4>
              <p className="text-sm text-gray-600">8+ clubs from beaches to hills</p>
            </Link>
            <Link href="/blog/best-padel-clubs-nyc" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in NYC</h4>
              <p className="text-sm text-gray-600">Brooklyn, Manhattan & beyond</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
