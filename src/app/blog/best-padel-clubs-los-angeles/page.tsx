import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Star, Users, Globe, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Los Angeles (2025) | 8+ Clubs Ranked',
  description: 'LA&apos;s padel scene spans from Santa Monica beaches to Pasadena hills. 8+ clubs including rooftop courts and Mediterranean vibes. Complete guide.',
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
    name: 'Padel Up - Century City',
    score: 95,
    location: '10250 Santa Monica Blvd, Los Angeles, CA 90067',
    courts: '4 courts',
    price: '$$$$',
    website: 'padelup.com',
    description: 'LA&apos;s premier padel destination in the heart of Century City. Sleek, modern facility serving West LA&apos;s affluent community. Minutes from Beverly Hills and Santa Monica, Padel Up offers top-tier courts and exclusive atmosphere.',
    highlights: [
      'Century City premium location',
      'Modern, upscale facility',
      'Close to Beverly Hills & Santa Monica',
      'High-end clientele',
      'Professional coaching',
      'Corporate memberships available'
    ],
    programs: [
      'Private lessons',
      'Group clinics',
      'Corporate events',
      'League play',
      'Open play sessions',
      'Beginner workshops'
    ],
    bestFor: [
      'West LA professionals',
      'Luxury seekers',
      'Century City workers',
      'Serious players'
    ]
  },
  {
    rank: 2,
    name: 'Pura Padel',
    score: 93,
    location: '14006 Riverside Dr, Sherman Oaks, CA 91423',
    courts: '3 rooftop courts',
    price: '$$$',
    website: 'purapadel.com',
    description: 'Valley&apos;s unique rooftop padel experience in Sherman Oaks. Play with stunning views of the San Fernando Valley. Community-focused club with vibrant social atmosphere and excellent coaching.',
    highlights: [
      'Rooftop parking lot courts',
      'Valley views',
      'Sherman Oaks location',
      'Social atmosphere',
      'Community-focused',
      'Valley&apos;s padel hub'
    ],
    programs: [
      'Beginner-friendly clinics',
      'Open play',
      'Social tournaments',
      'Private coaching',
      'Youth programs',
      'League play'
    ],
    bestFor: [
      'Valley residents',
      'Social players',
      'Rooftop experience lovers',
      'Community seekers'
    ]
  },
  {
    rank: 3,
    name: 'Heimat LA',
    score: 91,
    location: 'Downtown Los Angeles',
    courts: '3 rooftop courts',
    price: '$$$-$$$$',
    description: 'Downtown LA&apos;s iconic rooftop padel venue. Part of Heimat&apos;s hospitality complex, offering padel with skyline views, restaurant, and bar. Where LA&apos;s creative class comes to play.',
    highlights: [
      'Downtown rooftop location',
      'LA skyline views',
      'Restaurant & bar on-site',
      'Creative community',
      'Events & nightlife',
      'Unique LA experience'
    ],
    programs: [
      'Open play',
      'Social events',
      'Private lessons',
      'Corporate events',
      'League play',
      'Beginner clinics'
    ],
    bestFor: [
      'Downtown residents',
      'Social scene lovers',
      'Creative professionals',
      'After-work players'
    ]
  },
  {
    rank: 4,
    name: 'Padel Los Feliz',
    score: 89,
    location: 'Los Feliz',
    courts: '3 courts',
    price: '$$-$$$',
    description: 'Los Feliz neighborhood gem with Mediterranean design vibes. Intimate facility serving East LA&apos;s artistic community. Beautiful courts with European aesthetic.',
    highlights: [
      'Mediterranean design',
      'Los Feliz charm',
      'Artistic community',
      'Beautiful aesthetic',
      'Neighborhood atmosphere',
      'Close to Griffith Park'
    ],
    programs: [
      'Open play',
      'Beginner workshops',
      'Private lessons',
      'Social mixers',
      'Community events'
    ],
    bestFor: [
      'Los Feliz residents',
      'East LA community',
      'Design lovers',
      'Casual players'
    ]
  },
  {
    rank: 5,
    name: 'Santa Monica Padel',
    score: 87,
    location: 'Santa Monica',
    courts: '2 outdoor courts',
    price: '$$-$$$',
    description: 'Beach city padel with that quintessential SoCal vibe. Perfect post-beach activity. Welcoming atmosphere for tourists and locals.',
    highlights: [
      'Santa Monica location',
      'Beach city vibes',
      'Outdoor courts',
      'Tourist-friendly',
      'Ocean breeze',
      'Westside access'
    ],
    programs: [
      'Drop-in play',
      'Beginner sessions',
      'Private coaching',
      'Tourist programs',
      'Weekend clinics'
    ],
    bestFor: [
      'Beach lovers',
      'Tourists & visitors',
      'Santa Monica residents',
      'Casual players'
    ]
  }
];

export default function LosAngelesBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in los angeles (2025) | Complete Guide & Rankings",
    "description": "Discover the best padel clubs in los angeles. Complete guide with rankings, pricing, programs, and insider tips.",
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
      "@id": "https://padelcourtsfinder.com/blog/best-padel-clubs-los-angeles"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />


      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-green-200 hover:text-white">← Back to Blog</Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Los Angeles (2025)
          </h1>
          <div className="flex flex-wrap gap-4 text-green-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Los Angeles, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>8+ Clubs</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Year-Round Perfect Weather</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600">8+</div>
              <div className="text-sm text-gray-600">Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">30+</div>
              <div className="text-sm text-gray-600">Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">$35-60</div>
              <div className="text-sm text-gray-600">Per Person</div>
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
            LA&apos;s Diverse Padel Landscape
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Los Angeles is California&apos;s padel capital. From Century City&apos;s luxury Padel Up to Sherman Oaks&apos; rooftop Pura Padel, from Downtown&apos;s Heimat LA to beachy Santa Monica, LA offers the most diverse padel scene on the West Coast.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With perfect year-round weather, a massive international population, and wealth to fund world-class facilities, LA&apos;s padel explosion mirrors the sport&apos;s European growth. Expect 20+ clubs across the metro by 2026.
          </p>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>🏆 Best Overall:</strong> Padel Up Century City (Premium West LA)</p>
            <p><strong>🏙️ Best Rooftop:</strong> Pura Padel (Valley views) & Heimat LA (Downtown skyline)</p>
            <p><strong>🎨 Best Atmosphere:</strong> Padel Los Feliz (Mediterranean vibes)</p>
            <p><strong>🏖️ Best Beach Access:</strong> Santa Monica Padel (SoCal perfection)</p>
            <p><strong>💼 Best for Professionals:</strong> Padel Up (Century City location)</p>
          </div>
        </div>

        <div className="space-y-12">
          {clubs.map(club => (
            <div key={club.rank} id={`club-${club.rank}`} className="border-t-4 border-green-600 bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm font-semibold mb-1">#{club.rank}</div>
                    <h3 className="text-3xl font-bold mb-2">{club.name}</h3>
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
                  {club.website && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Globe className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <a href={`https://${club.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
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

        <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-12 mt-12">
          <h3 className="text-xl font-bold mb-3">🌴 Why LA is America&apos;s Next Padel Capital</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ <strong>Perfect weather:</strong> 300+ days of sunshine, 70°F year-round</li>
            <li>✓ <strong>International city:</strong> Massive Latin American, European populations</li>
            <li>✓ <strong>Wealth:</strong> Resources to build world-class facilities</li>
            <li>✓ <strong>Sports culture:</strong> Tennis, beach sports already huge</li>
            <li>✓ <strong>Rooftop opportunities:</strong> Parking lots convert to courts</li>
            <li>✓ <strong>Diverse geography:</strong> Beach to Valley to Downtown options</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in LA?</h2>
          <p className="text-xl text-green-100 mb-6">
            From beaches to hills, find your perfect LA padel court
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/search?city=Los+Angeles"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View LA Courts Map
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
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More California Padel</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-san-diego" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in San Diego</h4>
              <p className="text-sm text-gray-600">5 clubs from downtown to North County</p>
            </Link>
            <Link href="/blog/best-padel-clubs-san-francisco" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in San Francisco</h4>
              <p className="text-sm text-gray-600">Bay Area emerging scene</p>
            </Link>
            <Link href="/blog/best-padel-clubs-miami" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Miami</h4>
              <p className="text-sm text-gray-600">10+ clubs, America&apos;s capital</p>
            </Link>
          </div>
        </div>
        {/* Related Guides */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More California Padel Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-san-francisco" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in San Francisco</h4>
              <p className="text-sm text-gray-600">Bay Area padel revolution</p>
            </Link>
            <Link href="/blog/best-padel-clubs-san-diego" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in San Diego</h4>
              <p className="text-sm text-gray-600">Year-round perfect weather</p>
            </Link>
            <Link href="/blog/best-padel-clubs-austin" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Austin</h4>
              <p className="text-sm text-gray-600">America&apos;s padel capital</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
