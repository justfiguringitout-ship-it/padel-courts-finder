import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Globe, Mail, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Chicago (2026) | Complete Windy City Guide',
  description: 'Discover Chicago\'s 3 best padel clubs in 2026. Cube Padel, Union Padel Club & Proximo Padel ranked. Pricing, programs & indoor guide.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-chicago',
  },
  openGraph: {
    title: 'Best Padel Clubs in Chicago (2026) | Complete Windy City Guide',
    description: 'Discover Chicago\'s 3 best padel clubs in 2026. Cube Padel, Union Padel Club & Proximo Padel ranked. Pricing, programs & indoor guide.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-chicago',
    type: 'article',
    images: [{ url: 'https://cubepadel.com/wp-content/uploads/2024/08/cube-padel-slide.jpg' }],
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
    name: 'Cube Padel Chicago',
    slug: 'cube-padel-chicago',
    score: 95,
    location: 'South Chicago, IL',
    courts: '6 indoor courts',
    price: '$$-$$$',
    website: 'cubepadel.com',
    description: 'Chicago\'s flagship padel destination. Cube Padel brings European-style indoor padel to the Windy City with 6 climate-controlled courts, a vibrant bar and lounge scene, and premium amenities. Part of a national chain, Cube Padel combines professional-grade facilities with strong community and coaching programs.',
    highlights: [
      '6 climate-controlled indoor courts',
      'Bar & lounge on-site',
      'National chain quality standards',
      'Pro shop & equipment store',
      'Free parking',
      'Google rating: 5.0 stars'
    ],
    programs: [
      'Peak: $180/1.5hr (non-member)',
      'Premium member: $99/1.5hr',
      'Membership: $140/mo',
      'Racket rental: $5',
      'Professional coaching',
      'League play & tournaments'
    ],
    bestFor: [
      'Serious competitive players',
      'South Side residents',
      'Year-round indoor play',
      'Social players (bar & lounge)'
    ]
  },
  {
    rank: 2,
    name: 'Union Padel Club',
    slug: 'union-padel-club',
    score: 93,
    location: 'West Loop / Near West Side, Chicago, IL',
    courts: '5 indoor courts',
    price: '$$$',
    description: 'Chicago\'s first dedicated indoor padel club in the trendy West Loop. Union Padel Club features 5 world-class courts alongside upscale lifestyle amenities including sauna, cold plunge, VIP lounge, coworking space, and a bar. The early-bird Core membership at $110/month makes it an attractive option for regular players.',
    highlights: [
      '5 world-class indoor courts',
      'Sauna & cold plunge',
      'VIP lounge & bar',
      'Coworking space on-site',
      'Pro shop with gear',
      'Google rating: 5.0 stars'
    ],
    programs: [
      'Core membership $110/mo (early bird)',
      'Elite membership $250/mo',
      '10-pack 90min sessions $470',
      'Professional coaching',
      'League play',
      'Social events'
    ],
    bestFor: [
      'West Loop residents',
      'Wellness & lifestyle focused',
      'Remote workers (coworking)',
      'Premium experience seekers'
    ]
  },
  {
    rank: 3,
    name: 'Proximo Padel',
    slug: 'proximo-padel',
    score: 90,
    location: 'Logan Square, Chicago, IL',
    courts: '4 indoor courts',
    price: '$$-$$$',
    description: 'A premium indoor padel facility in Chicago\'s Logan Square neighborhood featuring 4 panoramic courts with impressive 40-foot ceilings and competition-grade lighting. Proximo Padel offers a modern, accessible experience with wheelchair access, warmup areas, and pickleball courts coming soon.',
    highlights: [
      '4 panoramic indoor courts',
      '40-foot ceilings',
      'Competition-grade lighting',
      'Warmup area',
      'Wheelchair accessible',
      'Pickleball courts coming soon'
    ],
    programs: [
      'Court bookings',
      'Professional coaching',
      'Events & tournaments',
      'Equipment at pro shop',
      'Open play sessions',
      'Beginner programs'
    ],
    bestFor: [
      'Logan Square & North Side residents',
      'Players wanting tall ceilings',
      'Accessible facility seekers',
      'All skill levels'
    ]
  }
];

export default function ChicagoBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in Chicago (2026) | Complete Windy City Guide",
    "description": "Discover Chicago's 3 best padel clubs in 2026. Cube Padel, Union Padel Club & Proximo Padel ranked. Pricing, programs & indoor guide.",
    "image": "https://cubepadel.com/wp-content/uploads/2024/08/cube-padel-slide.jpg",
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
      "@id": "https://www.padelcourtsfinder.com/blog/best-padel-clubs-chicago"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />

      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-green-200 hover:text-white">
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Chicago (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-green-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Chicago, IL</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>3 Clubs Ranked</span>
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
              <div className="text-3xl font-bold text-blue-600">3</div>
              <div className="text-sm text-gray-600">Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">15</div>
              <div className="text-sm text-gray-600">Indoor Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$47-120</div>
              <div className="text-sm text-gray-600">Per Hour Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-gray-600">Indoor Facilities</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Chicago&apos;s Padel Boom: From 1 Club to 3 in 2026
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Chicago&apos;s padel scene has tripled in size. What started with <Link href="/courts/cube-padel-chicago" className="text-blue-600 hover:underline">Cube Padel</Link> as the city&apos;s sole option has expanded to 3 dedicated indoor clubs with 15 courts, all designed to keep Chicagoans playing year-round regardless of the brutal Midwest winters. Every facility is fully indoor and climate-controlled.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The newest additions are impressive. <Link href="/courts/union-padel-club" className="text-blue-600 hover:underline">Union Padel Club</Link> in the West Loop pairs 5 world-class courts with lifestyle amenities like sauna, cold plunge, and coworking space. <Link href="/courts/proximo-padel" className="text-blue-600 hover:underline">Proximo Padel</Link> in Logan Square features 4 panoramic courts under 40-foot ceilings with competition lighting.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With all three clubs earning 5.0 Google ratings and offering distinct neighborhoods, Chicago players now have real choice. Browse all courts on our <Link href="/illinois/chicago" className="text-blue-600 hover:underline">Chicago courts page</Link> or explore the full <Link href="/illinois" className="text-blue-600 hover:underline">Illinois state directory</Link>.
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Best Overall:</strong> <Link href="/courts/cube-padel-chicago" className="text-blue-600 hover:underline">Cube Padel Chicago</Link> (6 courts, bar & lounge)</p>
            <p><strong>Best Lifestyle:</strong> <Link href="/courts/union-padel-club" className="text-blue-600 hover:underline">Union Padel Club</Link> (sauna, cold plunge, coworking)</p>
            <p><strong>Best Ceilings:</strong> <Link href="/courts/proximo-padel" className="text-blue-600 hover:underline">Proximo Padel</Link> (40-ft ceilings, panoramic courts)</p>
            <p><strong>Best Value:</strong> <Link href="/courts/union-padel-club" className="text-blue-600 hover:underline">Union Padel Club</Link> ($110/mo early-bird membership)</p>
          </div>
        </div>

        <div className="space-y-12">
          {clubs.map(club => (
            <div key={club.rank} id={`club-${club.rank}`} className="border-t-4 border-blue-600 bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6">
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
                          <Star key={i} className={`w-5 h-5 ${i < Math.floor(club.score / 20) ? 'fill-yellow-400 text-yellow-400' : 'text-blue-300'}`} />
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

        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Chicago?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find all Chicago padel courts in one place
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/illinois/chicago"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View Chicago Courts
            </Link>
            <Link
              href="/illinois"
              className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors"
            >
              All Illinois Clubs
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Padel Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-denver" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Denver</h4>
              <p className="text-sm text-gray-600">Rocky Mountain padel scene</p>
            </Link>
            <Link href="/blog/best-padel-clubs-nyc" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in NYC</h4>
              <p className="text-sm text-gray-600">7 clubs across Brooklyn & Manhattan</p>
            </Link>
            <Link href="/blog/best-padel-clubs-dallas" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Dallas</h4>
              <p className="text-sm text-gray-600">Texas padel with premium facilities</p>
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
