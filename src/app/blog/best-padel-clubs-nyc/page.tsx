import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Star, Users, Globe, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in NYC (2025) | Brooklyn, Manhattan & Beyond',
  description: 'NYC&apos;s padel scene heats up with Padel Haus Dumbo leading the charge. Complete guide to New York padel clubs with rankings, pricing & programs.',
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
    name: 'Padel Haus - Dumbo',
    score: 96,
    location: '257 Water St, Brooklyn, NY 11201',
    courts: '6 indoor courts',
    price: '$$$$',
    website: 'padelhaus.com',
    description: 'NYC&apos;s premier padel destination in iconic Dumbo. State-of-the-art indoor facility with stunning Manhattan skyline views. Padel Haus brings European padel culture to Brooklyn with world-class instruction and vibrant community.',
    highlights: [
      '6 climate-controlled indoor courts',
      'Dumbo waterfront location',
      'Manhattan skyline views',
      'Premium locker rooms & amenities',
      'European-style cafe & lounge',
      'Pro shop with top brands'
    ],
    programs: [
      'Elite coaching programs',
      'Beginner workshops',
      'Corporate memberships',
      'Youth academies',
      'Private lessons',
      'League play & tournaments'
    ],
    bestFor: [
      'Serious players',
      'Brooklyn residents',
      'Corporate groups',
      'Social players'
    ]
  },
  {
    rank: 2,
    name: 'Mink Padel',
    score: 92,
    location: '439 W 127th St, New York, NY 10027',
    courts: '2 outdoor courts',
    price: '$$-$$$',
    website: 'mink.playbypoint.com',
    description: 'Manhattan&apos;s first public padel courts in Harlem! Historic milestone for NYC padel. Part of a multi-sport complex, Mink Padel makes the sport accessible to all New Yorkers with affordable public courts.',
    highlights: [
      'First public Manhattan courts',
      'Harlem location',
      'Affordable public access',
      'Multi-sport complex',
      '2 outdoor courts',
      'Community-focused'
    ],
    programs: [
      'Open play sessions',
      'Beginner clinics',
      'Community programs',
      'Youth access',
      'Public reservations'
    ],
    bestFor: [
      'Manhattan residents',
      'Budget players',
      'Beginners',
      'Community access'
    ]
  },
  {
    rank: 3,
    name: 'Padel& Greenpoint',
    score: 90,
    location: '73 West St, Brooklyn, NY',
    courts: '3 courts',
    price: '$$-$$$',
    description: 'Brooklyn&apos;s Greenpoint neighborhood padel hub. Modern facility serving North Brooklyn with excellent courts and strong community vibe.',
    highlights: [
      'Greenpoint location',
      '3 quality courts',
      'North Brooklyn access',
      'Strong community',
      'Modern facilities',
      'Easy subway access'
    ],
    programs: [
      'Open play',
      'Beginner sessions',
      'Private lessons',
      'League play',
      'Social tournaments'
    ],
    bestFor: [
      'North Brooklyn residents',
      'Greenpoint community',
      'All skill levels',
      'Social players'
    ]
  },
  {
    rank: 4,
    name: 'Padel Haus Williamsburg',
    score: 88,
    location: '257 Water Street, Brooklyn, NY',
    courts: '4 courts',
    price: '$$-$$$',
    website: 'padelhaus.com',
    description: 'Padel Haus expansion to Williamsburg brings premium padel to another Brooklyn neighborhood. Part of the Padel Haus network quality.',
    highlights: [
      '4 courts',
      'Williamsburg location',
      'Padel Haus quality',
      'Professional staff',
      'Modern amenities',
      'Network benefits'
    ],
    programs: [
      'Pro coaching',
      'Beginner workshops',
      'League play',
      'Open play',
      'Corporate events'
    ],
    bestFor: [
      'Williamsburg residents',
      'Brooklyn players',
      'Quality seekers',
      'Network members'
    ]
  },
  {
    rank: 5,
    name: 'New Rochelle Indoor Sports',
    score: 86,
    location: '235 Fifth Ave, New Rochelle, NY 10801',
    courts: '2 indoor courts',
    price: '$$',
    description: 'Westchester&apos;s padel pioneer. Family-friendly multi-sport facility that added padel courts to serve growing demand. Great for beginners and suburban players.',
    highlights: [
      '2 indoor courts',
      'Easy Westchester access',
      'Multi-sport facility',
      'Family-friendly atmosphere',
      'Affordable pricing',
      'Free parking'
    ],
    programs: [
      'Beginner clinics',
      'Open play sessions',
      'Youth programs',
      'Private instruction',
      'League play'
    ],
    bestFor: [
      'Westchester families',
      'Beginners',
      'Budget-conscious players',
      'Suburban residents'
    ]
  },
  {
    rank: 6,
    name: 'Brisas East Hampton',
    score: 84,
    location: '174 Daniels Hole Rd, East Hampton, NY 11937',
    courts: '2 outdoor courts',
    price: '$$$-$$$$',
    description: 'Hamptons padel destination. Seasonal outdoor courts serving the East Hampton community and summer visitors with luxury atmosphere.',
    highlights: [
      'Hamptons location',
      '2 outdoor courts',
      'Luxury setting',
      'Summer season',
      'Resort atmosphere',
      'High-end clientele'
    ],
    programs: [
      'Private lessons',
      'Open play',
      'Group clinics',
      'Summer programs'
    ],
    bestFor: [
      'Hamptons residents',
      'Summer visitors',
      'Luxury seekers',
      'Seasonal players'
    ]
  }
];

export default function NYCBestClubsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-blue-200 hover:text-white">
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in NYC (2025)
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>New York City & Metro Area</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>Growing Scene</span>
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
              <div className="text-3xl font-bold text-blue-600">2+</div>
              <div className="text-sm text-gray-600">Active Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">8+</div>
              <div className="text-sm text-gray-600">Total Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$35-60</div>
              <div className="text-sm text-gray-600">Per Person</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            NYC&apos;s Padel Scene Takes Off
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            New York City is rapidly embracing padel. Led by Padel Haus&apos;s stunning Dumbo facility, the city&apos;s padel infrastructure is expanding. With NYC&apos;s dense population, international community, and sports culture, expect massive growth in 2025-2026.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            From Brooklyn waterfront courts to Westchester suburban facilities, the NYC metro area offers diverse options for all skill levels.
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>🏆 Best Overall:</strong> Padel Haus Dumbo (Premium Brooklyn facility)</p>
            <p><strong>👨‍👩‍👧 Best for Families:</strong> New Rochelle Indoor Sports (Westchester)</p>
            <p><strong>🌃 Best Views:</strong> Padel Haus (Manhattan skyline)</p>
            <p><strong>💰 Best Value:</strong> New Rochelle (Affordable suburban option)</p>
          </div>
        </div>

        <div className="space-y-12">
          {clubs.map(club => (
            <div key={club.rank} id={`club-${club.rank}`} className="border-t-4 border-blue-600 bg-white shadow-lg rounded-xl overflow-hidden">
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
                  {club.website && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <a href={`https://${club.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
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

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in NYC?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find all NYC metro padel courts on our interactive map
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/search?city=New+York"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View NYC Courts Map
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
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Best Club Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-miami" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Miami</h4>
              <p className="text-sm text-gray-600">10+ clubs, America&apos;s padel capital</p>
            </Link>
            <Link href="/blog/best-padel-clubs-los-angeles" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in LA</h4>
              <p className="text-sm text-gray-600">8+ clubs from beaches to hills</p>
            </Link>
            <Link href="/blog/best-padel-clubs-austin" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Austin</h4>
              <p className="text-sm text-gray-600">6+ clubs from downtown to Hill Country</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
