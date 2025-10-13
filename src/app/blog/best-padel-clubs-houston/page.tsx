import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Star, Users, Globe, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Houston (2025) | Complete HTX Guide',
  description: 'Houston padel scene exploding with 4+ major clubs. TEMPO Padel, Cube, SB Padel & more. Complete guide to Houston padel with rankings & pricing.',
};

interface Club {
  rank: number;
  name: string;
  score: number;
  location: string;
  courts: string;
  price: string;
  website?: string;
  description: string;
  highlights: string[];
  programs: string[];
  bestFor: string[];
}

const clubs: Club[] = [
  {
    rank: 1,
    name: 'TEMPO Padel & Pickleball Club',
    score: 93,
    location: '1729 Brittmoore Rd Ste A, Houston, TX 77043',
    courts: '6 courts (padel + pickleball)',
    price: '$$-$$$',
    website: 'tempopadel.com',
    description: 'Houston&apos;s premier multi-sport facility combining padel and pickleball. TEMPO offers excellent courts, strong programming, and vibrant social atmosphere. Perfect for both sports in one location.',
    highlights: [
      'Multiple padel courts',
      'Combined padel/pickleball facility',
      'Great for social play',
      'Active tournament schedule',
      'Modern amenities',
      'Strong community vibe'
    ],
    programs: [
      'Beginner clinics',
      'Private lessons',
      'League play',
      'Open play sessions',
      'Youth programs',
      'Corporate events'
    ],
    bestFor: [
      'Social players',
      'Multi-sport athletes',
      'West Houston residents',
      'All skill levels'
    ]
  },
  {
    rank: 2,
    name: 'Cube Padel Houston',
    score: 90,
    location: '7918 Breen Rd, Houston, TX 77064',
    courts: '4 indoor courts',
    price: '$$-$$$',
    website: 'cubepadel.com',
    description: 'Part of the growing Cube Padel network. Climate-controlled indoor facility perfect for Houston summers. Professional coaching and modern amenities.',
    highlights: [
      '4 indoor courts',
      'Climate controlled (Houston heat!)',
      'Professional coaching',
      'Modern facility',
      'Part of national network',
      'Tournament hosting'
    ],
    programs: [
      'Beginner workshops',
      'Private instruction',
      'Adult leagues',
      'Open play',
      'Youth development',
      'Corporate memberships'
    ],
    bestFor: [
      'North Houston residents',
      'Summer play',
      'Serious players',
      'AC lovers'
    ]
  },
  {
    rank: 3,
    name: 'SB Padel Houston',
    score: 88,
    location: '1927 Harland Dr, Houston, TX 77055',
    courts: '3 courts',
    price: '$$',
    description: 'Community-focused padel club in the Galleria area. Great for beginners and casual players. Welcoming atmosphere with solid instruction.',
    highlights: [
      '3 well-maintained courts',
      'Galleria area location',
      'Beginner-friendly',
      'Community atmosphere',
      'Affordable pricing',
      'Open play options'
    ],
    programs: [
      'Intro to Padel',
      'Open play sessions',
      'Private lessons',
      'Social mixers',
      'League play'
    ],
    bestFor: [
      'Beginners',
      'Galleria area',
      'Casual players',
      'Budget conscious'
    ]
  },
  {
    rank: 4,
    name: 'Woodlands Padel',
    score: 86,
    location: '29600 I-45 N, The Woodlands, TX 77381',
    courts: '2 courts',
    price: '$$',
    description: 'Suburban padel in The Woodlands. Family-friendly facility serving North Houston suburbs. Great for local players.',
    highlights: [
      '2 courts',
      'The Woodlands location',
      'Family atmosphere',
      'Suburban convenience',
      'Good for kids',
      'Free parking'
    ],
    programs: [
      'Youth programs',
      'Family play',
      'Beginner clinics',
      'Open play',
      'Private lessons'
    ],
    bestFor: [
      'Woodlands families',
      'Suburban players',
      'Kids & youth',
      'Weekend warriors'
    ]
  }
];

export default function HoustonBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in houston (2025) | Complete Guide & Rankings",
    "description": "Discover the best padel clubs in houston. Complete guide with rankings, pricing, programs, and insider tips.",
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
      "@id": "https://padelcourtsfinder.com/blog/best-padel-clubs-houston"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />


      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-orange-200 hover:text-white">
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Houston (2025)
          </h1>
          <div className="flex flex-wrap gap-4 text-orange-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Houston, TX</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>4+ Major Clubs</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Updated October 2025</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-700">4+</div>
              <div className="text-sm text-gray-600">Major Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-700">15+</div>
              <div className="text-sm text-gray-600">Total Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-700">$25-40</div>
              <div className="text-sm text-gray-600">Per Person</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Houston Becomes Texas Padel Powerhouse
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Houston&apos;s padel scene is exploding. With 4+ major clubs across the metro area, the nation&apos;s 4th largest city is cementing its position as a Texas padel stronghold alongside Austin and Miami nationally.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            From West Houston&apos;s TEMPO Padel to The Woodlands suburban facilities, Houston offers diverse options. The city&apos;s massive Latin American population brings authentic padel culture, while Houston&apos;s energy wealth funds premium facilities.
          </p>
        </div>

        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>🏆 Best Overall:</strong> TEMPO Padel (Multi-sport facility)</p>
            <p><strong>❄️ Best Summer Play:</strong> Cube Padel (AC indoor)</p>
            <p><strong>💰 Best Value:</strong> SB Padel (Affordable Galleria)</p>
            <p><strong>👨‍👩‍👧 Best for Families:</strong> Woodlands Padel</p>
          </div>
        </div>

        <div className="space-y-12">
          {clubs.map(club => (
            <div key={club.rank} id={`club-${club.rank}`} className="border-t-4 border-red-700 bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-700 to-red-800 text-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm font-semibold mb-1">#{club.rank}</div>
                    <h3 className="text-3xl font-bold mb-2">{club.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < Math.floor(club.score / 20) ? 'fill-yellow-400 text-yellow-400' : 'text-red-300'}`} />
                        ))}
                      </div>
                      <span className="text-xl font-bold">{club.score}/100</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{club.price}</div>
                    <div className="text-sm text-red-100">Price Range</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                    <span>{club.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="w-5 h-5 text-red-700 flex-shrink-0" />
                    <span>{club.courts}</span>
                  </div>
                  {club.website && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Globe className="w-5 h-5 text-red-700 flex-shrink-0" />
                      <a href={`https://${club.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-red-700">
                        {club.website}
                      </a>
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
                        <span className="text-red-700 font-bold">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Programs & Offerings:</h4>
                  <div className="flex flex-wrap gap-2">
                    {club.programs.map((program, index) => (
                      <span key={index} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
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

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Houston?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find all Houston padel courts on our interactive map
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/search?city=Houston"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View Houston Courts Map
            </Link>
            <Link
              href="/texas"
              className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors"
            >
              All Texas Clubs
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Texas Padel</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-austin" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Austin</h4>
              <p className="text-sm text-gray-600">6+ clubs from downtown to Hill Country</p>
            </Link>
            <Link href="/blog/best-padel-clubs-dallas" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Dallas</h4>
              <p className="text-sm text-gray-600">DFW metroplex expanding</p>
            </Link>
            <Link href="/blog/best-padel-clubs-san-antonio" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in San Antonio</h4>
              <p className="text-sm text-gray-600">Alamo City padel</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
