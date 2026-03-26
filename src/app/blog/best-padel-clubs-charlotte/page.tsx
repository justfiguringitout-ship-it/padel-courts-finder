import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Globe, Mail, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Charlotte (2026) | Complete QC Padel Guide',
  description: 'Discover Charlotte\'s 2 best padel clubs in 2026. Charlotte Padel Club & Epic Padel Inc. Rankings, pricing & Queen City padel guide.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-charlotte',
  },
  openGraph: {
    title: 'Best Padel Clubs in Charlotte (2026) | Complete QC Padel Guide',
    description: 'Discover Charlotte\'s 2 best padel clubs in 2026. Charlotte Padel Club & Epic Padel Inc. Rankings, pricing & Queen City padel guide.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-charlotte',
    type: 'article',
    images: [{ url: 'https://charlottepadelclub.com/og-image.png' }],
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
    name: 'Charlotte Padel Club - South Charlotte',
    slug: 'charlotte-padel-club-south-charlotte',
    score: 93,
    location: 'South Charlotte, NC',
    courts: '2 indoor courts',
    price: '$$-$$$',
    website: 'charlottepadelclub.com',
    description: 'Charlotte\'s premier indoor padel facility in South Charlotte with 2 climate-controlled courts for year-round play. Features a pro shop, equipment rental, coaching programs, a lounge area with coffee and bar, and booking via the Playtomic app. A 4.9 Google rating reflects the quality experience and strong community.',
    highlights: [
      '2 climate-controlled indoor courts',
      'Pro shop & equipment rental',
      'Coffee bar & lounge area',
      'Changing rooms & showers',
      'Playtomic app booking',
      '4.9 Google rating'
    ],
    programs: [
      'Club membership: $60/month',
      'Plus membership: $150/month',
      'Premium: $250/month',
      'Signature: $350/month',
      'Day pass: $25',
      'Clinics & private lessons'
    ],
    bestFor: [
      'South Charlotte residents',
      'Year-round indoor play',
      'Beginners & all levels',
      'Social padel community'
    ]
  },
  {
    rank: 2,
    name: 'Epic Padel Inc',
    slug: 'epic-padel-inc',
    score: 90,
    location: 'Prosperity Athletic Club, North Charlotte, NC',
    courts: '5 outdoor courts',
    price: '$$$',
    description: 'Epic Padel Inc operates 5 brand-new outdoor padel courts at Prosperity Athletic Club in north Charlotte. Members enjoy access to the full athletic club including gym, pools, tennis and pickleball courts, and locker rooms with sauna and cold plunge. Phase 2 plans include canopies and food and beverage service.',
    highlights: [
      '5 brand-new outdoor padel courts',
      'Part of Prosperity Athletic Club',
      'Gym, pools & full fitness center',
      'Locker rooms with sauna & cold plunge',
      'Tennis & pickleball also available',
      'Phase 2: canopies & food/beverage coming'
    ],
    programs: [
      'Founding membership: $149/month',
      'Racquets & balls included',
      'Full athletic club access',
      'Open play sessions',
      'Community events',
      'Multi-sport programming'
    ],
    bestFor: [
      'North Charlotte residents',
      'Multi-sport athletes',
      'Players wanting full gym access',
      'Outdoor padel enthusiasts'
    ]
  }
];

export default function CharlotteBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in Charlotte (2026) | Complete QC Padel Guide",
    "description": "Discover Charlotte's 2 best padel clubs in 2026. Charlotte Padel Club & Epic Padel Inc. Rankings, pricing & Queen City padel guide.",
    "image": "https://charlottepadelclub.com/og-image.png",
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
      "@id": "https://www.padelcourtsfinder.com/blog/best-padel-clubs-charlotte"
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
            Best Padel Clubs in Charlotte (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Charlotte, NC</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>2 Clubs Ranked</span>
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
              <div className="text-3xl font-bold text-blue-600">2</div>
              <div className="text-sm text-gray-600">Open Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">7</div>
              <div className="text-sm text-gray-600">Total Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$25-50</div>
              <div className="text-sm text-gray-600">Per Session</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">Indoor & Out</div>
              <div className="text-sm text-gray-600">Court Types</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Queen City Embraces Padel in 2026
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Charlotte&apos;s padel scene has doubled. The Queen City now has 2 distinct clubs offering 7 courts across indoor and outdoor settings. <Link href="/courts/charlotte-padel-club-south-charlotte" className="text-blue-600 hover:underline">Charlotte Padel Club</Link> continues to lead with its premium indoor facility in South Charlotte and a stellar 4.9 Google rating, while newcomer <Link href="/courts/epic-padel-inc" className="text-blue-600 hover:underline">Epic Padel Inc</Link> brings 5 brand-new outdoor courts at Prosperity Athletic Club in north Charlotte.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            As one of America&apos;s fastest-growing metros, Charlotte attracts transplants from padel-strong cities like Miami, New York, and Dallas. The city&apos;s banking wealth, mild year-round climate, and active sports culture position it for significant padel growth in the coming years.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Browse all courts on our <Link href="/north-carolina/charlotte" className="text-blue-600 hover:underline">Charlotte courts page</Link> or explore the full <Link href="/north-carolina" className="text-blue-600 hover:underline">North Carolina padel directory</Link>.
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Best Overall:</strong> <Link href="/courts/charlotte-padel-club-south-charlotte" className="text-blue-600 hover:underline">Charlotte Padel Club</Link> (indoor, 4.9 rating, pro shop & bar)</p>
            <p><strong>Most Courts:</strong> <Link href="/courts/epic-padel-inc" className="text-blue-600 hover:underline">Epic Padel Inc</Link> (5 outdoor courts at athletic club)</p>
            <p><strong>Best for Beginners:</strong> <Link href="/courts/charlotte-padel-club-south-charlotte" className="text-blue-600 hover:underline">Charlotte Padel Club</Link> (clinics, rentals, day pass $25)</p>
            <p><strong>Best Multi-Sport:</strong> <Link href="/courts/epic-padel-inc" className="text-blue-600 hover:underline">Epic Padel Inc</Link> (gym, pools, sauna, cold plunge)</p>
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

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Charlotte?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find all Charlotte and North Carolina padel courts in one place
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/north-carolina/charlotte"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View Charlotte Courts
            </Link>
            <Link
              href="/north-carolina"
              className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors"
            >
              All North Carolina Clubs
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Southeast Padel Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-atlanta" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Atlanta</h4>
              <p className="text-sm text-gray-600">3 clubs including Padel Haus ATL</p>
            </Link>
            <Link href="/blog/best-padel-clubs-orlando" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Orlando</h4>
              <p className="text-sm text-gray-600">Central Florida padel with indoor courts</p>
            </Link>
            <Link href="/blog/best-padel-clubs-miami" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Miami</h4>
              <p className="text-sm text-gray-600">29+ clubs, America&apos;s padel capital</p>
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
