import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Globe, Mail, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in San Diego (2026) | Complete Rankings & Guide',
  description: 'San Diego\'s 4 best padel clubs ranked for 2026. Padel N9NE, Kingdom of Padel, Taktika at Barnes & Fairmont. Courts, pricing & year-round play.',
  alternates: {
    canonical: 'https://padelcourtsfinder.com/blog/best-padel-clubs-san-diego',
  },
  openGraph: {
    title: 'Best Padel Clubs in San Diego (2026) | Complete Rankings & Guide',
    description: 'San Diego\'s 4 best padel clubs ranked for 2026. Padel N9NE, Kingdom of Padel, Taktika at Barnes & Fairmont. Courts, pricing & year-round play.',
    url: 'https://padelcourtsfinder.com/blog/best-padel-clubs-san-diego',
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
    name: 'Padel N9NE',
    slug: 'padel-n9ne',
    score: 96,
    location: 'Sorrento Valley, SD Tech Center, San Diego, CA',
    courts: '8 outdoor synthetic turf courts',
    price: '$$$',
    website: 'padeln9ne.com',
    description: 'San Diego\'s premier padel club and one of the most ambitious facilities in the country. Padel N9NE features 8 outdoor courts with synthetic turf surfaces, stadium courts for spectators, executive locker rooms, and access to the adjacent Exos gym and wellness center. The membership model offers unlimited court bookings with a six-month commitment.',
    highlights: [
      '8 outdoor courts (most in San Diego)',
      'Stadium courts for tournaments (USPA, FIP)',
      'Executive locker rooms with towel service',
      'Adjacent Exos gym & wellness center',
      'Pro shop with premium equipment',
      'Parking garage on-site'
    ],
    programs: [
      'Standard Membership (6-month commitment)',
      'Unlimited free court bookings for members',
      'Non-member court rental ($20-60/hr est.)',
      'Professional coaching',
      'USPA & FIP tournament hosting',
      'Group clinics'
    ],
    bestFor: [
      'Serious competitive players',
      'Luxury experience seekers',
      'Sorrento Valley workers',
      'Tournament players'
    ]
  },
  {
    rank: 2,
    name: 'Kingdom of Padel',
    slug: 'kingdom-of-padel',
    score: 93,
    location: 'San Diego, CA',
    courts: '6 crystal padel courts (indoor & outdoor)',
    price: '$$-$$$',
    website: 'kingdomofpadel.com',
    description: 'Kingdom of Padel is San Diego\'s most social padel destination, combining 6 crystal courts across indoor and outdoor settings with a full sports bar, golf simulators, and a play park for kids. Memberships range from $49/month up to $500 for unlimited all-you-can-play access, making it one of the most versatile padel clubs on the West Coast.',
    highlights: [
      '6 crystal padel courts (indoor & outdoor)',
      'Full restaurant & sports bar on-site',
      'Golf simulators for multi-sport fun',
      'Pro shop with equipment',
      'Kids play park',
      'Free parking & locker rooms'
    ],
    programs: [
      'Pay-to-play ($60/hr, $90/1.5hr prime indoor)',
      'Memberships from $49/month',
      'All-you-can-play ($500/month)',
      'Professional coaching',
      'Community events & leagues',
      'Pickleball courts available'
    ],
    bestFor: [
      'Social players & groups',
      'Families with kids',
      'Multi-sport enthusiasts',
      'After-work crowds'
    ]
  },
  {
    rank: 3,
    name: 'Taktika Padel - San Diego',
    slug: 'taktika-padel-san-diego',
    score: 90,
    location: 'Barnes Tennis Center, San Diego, CA',
    courts: '7 outdoor courts',
    price: '$$',
    website: 'taktikapadel.com',
    description: 'Taktika Padel at the Barnes Tennis Center brings professional-level coaching and 7 outdoor courts to San Diego. Known for elite instruction and a strong competitive community, Taktika offers some of the most affordable per-person rates in the city, starting at just $6 during off-peak midday hours.',
    highlights: [
      '7 outdoor courts at Barnes Tennis Center',
      'Professional coaching programs',
      'Most affordable rates in San Diego',
      'Racket rental available ($5)',
      'On-site snack bar & cafe',
      'Pro shop, lockers & changing rooms'
    ],
    programs: [
      'Per person rates from $6-$13/hr',
      'Private lessons from $80/hr',
      'Group clinics',
      'Racket rental ($5)',
      'Open play sessions',
      'Tournament play'
    ],
    bestFor: [
      'Budget-conscious players',
      'Players focused on coaching',
      'Competitive community seekers',
      'Barnes Tennis Center regulars'
    ]
  },
  {
    rank: 4,
    name: 'Taktika Padel - Fairmont Grand Del Mar',
    slug: 'taktika-padel-fairmont-grand-del-mar',
    score: 85,
    location: 'Fairmont Grand Del Mar Resort, San Diego, CA',
    courts: '1 outdoor court',
    price: '$$$',
    description: 'Located within the five-star Fairmont Grand Del Mar resort, this Taktika Padel outpost delivers a luxury padel experience in a world-class setting. While it has just one outdoor court, the resort surroundings and professional instruction make it a unique destination for padel in San Diego.',
    highlights: [
      'Five-star resort setting',
      'Professional Taktika coaching',
      'Luxury amenities & surroundings',
      'Lockers & changing rooms',
      'WiFi & free parking',
      'Cafeteria on-site'
    ],
    programs: [
      'Private lessons ($80-130/hr)',
      'Court bookings',
      'Resort guest sessions',
      'Beginner introductions',
      'Equipment provided'
    ],
    bestFor: [
      'Resort guests & visitors',
      'Luxury padel experience',
      'Beginners trying padel',
      'North San Diego residents'
    ]
  }
];

export default function SanDiegoBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in San Diego (2026) | Complete Rankings & Guide",
    "description": "San Diego's 4 best padel clubs ranked for 2026. Padel N9NE, Kingdom of Padel, Taktika at Barnes & Fairmont.",
    "image": "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&h=630&fit=crop",
    "datePublished": "2026-03-21T00:00:00Z",
    "dateModified": "2026-03-21T00:00:00Z",
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
      "@id": "https://padelcourtsfinder.com/blog/best-padel-clubs-san-diego"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />

      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-orange-200 hover:text-white">
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in San Diego (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-orange-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>San Diego, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>4 Clubs Ranked</span>
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
              <div className="text-3xl font-bold text-orange-600">4</div>
              <div className="text-sm text-gray-600">Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">22</div>
              <div className="text-sm text-gray-600">Total Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">$6-90</div>
              <div className="text-sm text-gray-600">Price Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">Year-Round</div>
              <div className="text-sm text-gray-600">Perfect Weather</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            San Diego: Year-Round Padel in America&apos;s Finest City
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            San Diego&apos;s near-perfect climate and active outdoor culture have made it one of the best cities for padel on the West Coast. With 4 facilities offering 22 courts across the metro area, players enjoy everything from premium membership clubs to affordable per-person play, all under blue skies virtually every day of the year.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The scene is anchored by <Link href="/courts/padel-n9ne" className="text-orange-600 hover:underline">Padel N9NE</Link> in Sorrento Valley, which hosts USPA and FIP tournaments on 8 courts, while <Link href="/courts/kingdom-of-padel" className="text-orange-600 hover:underline">Kingdom of Padel</Link> delivers the most social experience with a sports bar, golf simulators, and indoor/outdoor crystal courts.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you are a seasoned competitor looking for tournament-level play or a beginner wanting affordable introductory sessions, San Diego has you covered. Browse all options on our <Link href="/california/san-diego" className="text-orange-600 hover:underline">San Diego courts page</Link> or explore the full <Link href="/california" className="text-orange-600 hover:underline">California padel directory</Link>.
          </p>
        </div>

        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Best Overall:</strong> <Link href="/courts/padel-n9ne" className="text-orange-600 hover:underline">Padel N9NE</Link> (8 courts, stadium seating, USPA/FIP tournaments)</p>
            <p><strong>Best Social:</strong> <Link href="/courts/kingdom-of-padel" className="text-orange-600 hover:underline">Kingdom of Padel</Link> (bar, golf sims, indoor/outdoor)</p>
            <p><strong>Best Value:</strong> <Link href="/courts/taktika-padel-san-diego" className="text-orange-600 hover:underline">Taktika Padel - San Diego</Link> (from $6/person off-peak)</p>
            <p><strong>Best Luxury Setting:</strong> <Link href="/courts/taktika-padel-fairmont-grand-del-mar" className="text-orange-600 hover:underline">Taktika at Fairmont Grand Del Mar</Link> (five-star resort)</p>
          </div>
        </div>

        <div className="space-y-12">
          {clubs.map(club => (
            <div key={club.rank} id={`club-${club.rank}`} className="border-t-4 border-orange-600 bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm font-semibold mb-1">#{club.rank}</div>
                    <h3 className="text-3xl font-bold mb-2">
                      <Link href={`/courts/${club.slug}`} className="hover:text-orange-200 transition-colors">
                        {club.name}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < Math.floor(club.score / 20) ? 'fill-yellow-400 text-yellow-400' : 'text-orange-300'}`} />
                        ))}
                      </div>
                      <span className="text-xl font-bold">{club.score}/100</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{club.price}</div>
                    <div className="text-sm text-orange-100">Price Range</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>{club.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span>{club.courts}</span>
                  </div>
                  {club.phone && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <a href={`tel:${club.phone}`} className="hover:text-orange-600">{club.phone}</a>
                    </div>
                  )}
                  {club.website && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Globe className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <a href={`https://${club.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
                        {club.website}
                      </a>
                    </div>
                  )}
                  {club.email && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <a href={`mailto:${club.email}`} className="hover:text-orange-600">{club.email}</a>
                    </div>
                  )}
                  {club.hours && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-5 h-5 text-orange-600 flex-shrink-0" />
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
                        <span className="text-orange-600 font-bold">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Programs & Offerings:</h4>
                  <div className="flex flex-wrap gap-2">
                    {club.programs.map((program, index) => (
                      <span key={index} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
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
          <h2 className="text-3xl font-bold mb-4">Ready to Play in San Diego?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find all San Diego padel courts with pricing, hours, and directions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/california/san-diego"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View San Diego Courts
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
            <Link href="/blog/best-padel-clubs-los-angeles" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Los Angeles</h4>
              <p className="text-sm text-gray-600">LA&apos;s growing padel scene from beaches to hills</p>
            </Link>
            <Link href="/blog/best-padel-clubs-san-francisco" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in San Francisco</h4>
              <p className="text-sm text-gray-600">Bay Area padel revolution</p>
            </Link>
            <Link href="/blog/best-padel-clubs-phoenix" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Phoenix</h4>
              <p className="text-sm text-gray-600">Arizona&apos;s fast-growing desert padel scene</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
