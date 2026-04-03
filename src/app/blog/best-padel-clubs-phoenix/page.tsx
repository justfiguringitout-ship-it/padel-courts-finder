import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Globe, Mail, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Phoenix (2026) | Complete Arizona Guide',
  description: 'Phoenix metro\'s 3 best padel clubs ranked for 2026, plus 2 coming soon. Conquer Padel, Padel Pals & Camelback. Indoor AC courts & desert padel.',
  alternates: {
    canonical: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-phoenix',
  },
  openGraph: {
    title: 'Best Padel Clubs in Phoenix (2026) | Complete Arizona Guide',
    description: 'Phoenix metro\'s 3 best padel clubs ranked for 2026, plus 2 coming soon. Conquer Padel, Padel Pals & Camelback. Indoor AC courts & desert padel.',
    url: 'https://www.padelcourtsfinder.com/blog/best-padel-clubs-phoenix',
    type: 'article',
    images: [{ url: 'https://conquerpadel.com/wp-content/uploads/2026/01/hero.webp' }],
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
    name: 'Conquer Padel Club',
    slug: 'conquer-padel-club',
    score: 96,
    location: 'Tempe, AZ',
    courts: '5 indoor courts',
    price: '$$-$$$',
    website: 'conquerpadel.com',
    description: 'The undisputed leader of Phoenix-area padel. Conquer Padel Club in Tempe delivers 5 premium indoor courts in a climate-controlled facility, essential for surviving Arizona summers. Beyond the courts, the facility features wellness amenities including cold plunges, infrared sauna, and red light therapy, making it a complete athletic experience.',
    highlights: [
      '5 climate-controlled indoor courts',
      'Cold plunges & infrared sauna',
      'Red light therapy & stretch area',
      'Pro shop with premium equipment',
      'Wheelchair accessible',
      'Free parking'
    ],
    programs: [
      'Platinum Membership ($350/mo)',
      'Gold Membership ($99/mo)',
      'Bronze Membership ($45/mo)',
      'Family Membership ($200/mo)',
      'Walk-in play ($20-35/person/hr)',
      'Professional coaching & clinics'
    ],
    bestFor: [
      'Serious competitive players',
      'Wellness-focused athletes',
      'Tempe & ASU community',
      'Summer play (AC essential!)'
    ]
  },
  {
    rank: 2,
    name: 'Padel Pals',
    slug: 'padel-pals',
    score: 95,
    location: 'Mesa, AZ',
    courts: '7 indoor courts',
    price: '$$-$$$',
    description: 'The largest indoor padel facility in the Phoenix metro area. Padel Pals in Mesa features 7 premium indoor courts alongside pickleball and badminton, a sports bar, kid\'s zone, co-working spaces, and a fitness center. It is a true multi-sport social hub built for families and groups as much as serious players.',
    highlights: [
      '7 indoor courts (largest in Phoenix metro)',
      'Sports bar & social lounge',
      'Kid\'s zone for families',
      'Co-working spaces',
      'Fitness center on-site',
      'Pro shop with equipment'
    ],
    programs: [
      'Court rental ($110/hour)',
      'Racket rental ($5)',
      'Membership with 50% discount',
      'Professional coaching',
      'Pickleball & badminton',
      'Community tournaments'
    ],
    bestFor: [
      'Families with kids',
      'Multi-sport enthusiasts',
      'East Valley residents',
      'Social groups & after-work play'
    ]
  },
  {
    rank: 3,
    name: 'Camelback Padel Club',
    slug: 'camelback-padel-club',
    score: 84,
    location: 'Phoenix, AZ (base of Camelback Mountain)',
    courts: '1 outdoor lighted court',
    price: '$$',
    description: 'A boutique padel experience at the base of iconic Camelback Mountain. Camelback Padel Club offers a private, lighted outdoor court with a tight-knit community connected through a WhatsApp group. While small with just one court, its unique location and AI video highlights for match analysis set it apart from larger facilities.',
    highlights: [
      'Stunning Camelback Mountain setting',
      'Lighted court for evening play',
      'AI video highlights for match analysis',
      'WhatsApp community group',
      'Pro shop available',
      'Private & intimate atmosphere'
    ],
    programs: [
      'Court rental ($20-50/hr)',
      'Community WhatsApp group',
      'AI match video highlights',
      'Equipment available',
      'Social play sessions'
    ],
    bestFor: [
      'Central Phoenix players',
      'Outdoor padel enthusiasts',
      'Intimate community seekers',
      'Budget-conscious players'
    ]
  }
];

export default function PhoenixBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in Phoenix (2026) | Complete Arizona Guide",
    "description": "Phoenix metro's 3 best padel clubs ranked for 2026, plus 2 coming soon. Conquer Padel, Padel Pals & Camelback.",
    "image": "https://conquerpadel.com/wp-content/uploads/2026/01/hero.webp",
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
      "@id": "https://www.padelcourtsfinder.com/blog/best-padel-clubs-phoenix"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />

      <section className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-orange-200 hover:text-white">
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Phoenix (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-orange-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Phoenix Metro Area, AZ</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>3 Open + 2 Coming Soon</span>
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
              <div className="text-3xl font-bold text-red-600">3</div>
              <div className="text-sm text-gray-600">Open Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">13</div>
              <div className="text-sm text-gray-600">Courts Now</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">$20-110</div>
              <div className="text-sm text-gray-600">Price Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">2</div>
              <div className="text-sm text-gray-600">Coming Soon</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Phoenix Metro: Arizona&apos;s Padel Scene Heats Up
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The Phoenix metropolitan area is emerging as one of the Southwest&apos;s most exciting padel markets. With 3 open clubs spanning Tempe, Mesa, and Phoenix proper, plus 2 ambitious facilities coming soon in Mesa and Scottsdale, the Valley of the Sun is poised for major growth in 2026 and beyond.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Climate-controlled indoor courts are essential here. When summer temperatures soar past 110 degrees Fahrenheit, facilities like <Link href="/courts/conquer-padel-club" className="text-red-600 hover:underline">Conquer Padel Club</Link> and <Link href="/courts/padel-pals" className="text-red-600 hover:underline">Padel Pals</Link> offer comfortable year-round play. The outdoor season from October through May is glorious, with mild temperatures and clear skies.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Browse all courts on our <Link href="/arizona/phoenix" className="text-red-600 hover:underline">Phoenix courts page</Link> or explore the full <Link href="/arizona" className="text-red-600 hover:underline">Arizona padel directory</Link>.
          </p>
        </div>

        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Best Overall:</strong> <Link href="/courts/conquer-padel-club" className="text-red-600 hover:underline">Conquer Padel Club</Link> (5 indoor courts, wellness amenities)</p>
            <p><strong>Largest Facility:</strong> <Link href="/courts/padel-pals" className="text-red-600 hover:underline">Padel Pals</Link> (7 indoor courts, sports bar, multi-sport)</p>
            <p><strong>Best Location:</strong> <Link href="/courts/camelback-padel-club" className="text-red-600 hover:underline">Camelback Padel Club</Link> (base of Camelback Mountain)</p>
            <p><strong>Most Anticipated:</strong> PURE Pickleball &amp; Padel (8 padel courts coming to Scottsdale)</p>
          </div>
        </div>

        <div className="space-y-12">
          {clubs.map(club => (
            <div key={club.rank} id={`club-${club.rank}`} className="border-t-4 border-red-600 bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6">
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
                    <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>{club.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span>{club.courts}</span>
                  </div>
                  {club.phone && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <a href={`tel:${club.phone}`} className="hover:text-red-600">{club.phone}</a>
                    </div>
                  )}
                  {club.website && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Globe className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <a href={`https://${club.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                        {club.website}
                      </a>
                    </div>
                  )}
                  {club.email && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <a href={`mailto:${club.email}`} className="hover:text-red-600">{club.email}</a>
                    </div>
                  )}
                  {club.hours && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-5 h-5 text-red-600 flex-shrink-0" />
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
                        <span className="text-red-600 font-bold">✓</span>
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

        <div className="mt-12 border-t-4 border-amber-500 bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-6">
            <h3 className="text-2xl font-bold">Coming Soon to Phoenix Metro</h3>
            <p className="text-amber-100 mt-1">Two major facilities are in development for the Valley</p>
          </div>
          <div className="p-6 space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold">Coming Soon</span>
                <h4 className="text-xl font-bold text-gray-900">
                  <Link href="/courts/mesa-padel-club" className="hover:text-red-600 transition-colors">Mesa Padel Club</Link>
                </h4>
              </div>
              <p className="text-gray-700 mb-3">
                The first outdoor multi-court padel facility in the Phoenix metropolitan area, located in downtown Mesa. Plans include 4 outdoor courts, a pro shop, lounge area, coaching programs, and equipment rental.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">4 outdoor courts</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">Downtown Mesa</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">Pro shop & lounge</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold">Coming Soon</span>
                <h4 className="text-xl font-bold text-gray-900">
                  <Link href="/courts/pure-pickleball-padel" className="hover:text-red-600 transition-colors">PURE Pickleball &amp; Padel</Link>
                </h4>
              </div>
              <p className="text-gray-700 mb-3">
                A world-class indoor facility under development in Scottsdale featuring 8 padel courts, 40 pickleball courts, a 1,200-seat pro arena, HonorHealth sports performance center, spa, childcare, and a rooftop bar. This will be one of the largest racquet sports complexes in the country.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">8 indoor padel courts</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">Scottsdale</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">1,200-seat arena</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">Spa & rooftop bar</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Phoenix?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find all Phoenix metro padel courts with pricing, hours, and directions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/arizona/phoenix"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View Phoenix Courts
            </Link>
            <Link
              href="/arizona"
              className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors"
            >
              All Arizona Clubs
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
            <Link href="/blog/best-padel-clubs-dallas" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Dallas</h4>
              <p className="text-sm text-gray-600">DFW metroplex padel guide</p>
            </Link>
            <Link href="/blog/best-padel-clubs-san-diego" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in San Diego</h4>
              <p className="text-sm text-gray-600">Year-round padel in Southern California</p>
            </Link>
            <Link href="/blog/best-padel-rackets-beginners" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Beginner Rackets (2026)</h4>
              <p className="text-sm text-gray-600">Top 5 picks from $90–$130 →</p>
            </Link>
            <Link href="/rules" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Padel Rules Explained</h4>
              <p className="text-sm text-gray-600">Complete guide to scoring &amp; gameplay</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
