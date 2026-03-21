import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Globe, Mail, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in San Francisco (2026) | Bay Area Padel Guide',
  description: 'Discover San Francisco\'s 3 best padel clubs in 2026. Bay views, indoor courts & world-class facilities. Rankings, pricing & Bay Area guide.',
  alternates: {
    canonical: 'https://padelcourtsfinder.com/blog/best-padel-clubs-san-francisco',
  },
  openGraph: {
    title: 'Best Padel Clubs in San Francisco (2026) | Bay Area Padel Guide',
    description: 'Discover San Francisco\'s 3 best padel clubs in 2026. Bay views, indoor courts & world-class facilities. Rankings, pricing & Bay Area guide.',
    url: 'https://padelcourtsfinder.com/blog/best-padel-clubs-san-francisco',
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
    name: 'Bay Padel - Treasure Island',
    slug: 'bay-padel-treasure-island',
    score: 96,
    location: 'Treasure Island, San Francisco, CA',
    courts: '6 indoor courts',
    price: '$$-$$$',
    description: 'Bay Padel Treasure Island is the Bay Area\'s largest padel facility, housed in a historic hangar on Treasure Island with the world\'s highest ceilings. The 6 indoor courts deliver stunning Bay views alongside a gear boutique, game room, snack bar, dressing rooms with showers, and free parking. With a 4.9 Google rating, it is the top-rated padel club in San Francisco.',
    highlights: [
      '6 indoor courts in a historic hangar',
      'World\'s highest ceilings for padel',
      'Stunning San Francisco Bay views',
      'Gear boutique & game room',
      'Dressing rooms with showers',
      '4.9 Google rating'
    ],
    programs: [
      'Non-member play ($28-35/hr per person)',
      'Standard membership ($99/mo)',
      'Unlimited membership ($319/mo)',
      'Professional coaching',
      'Group clinics',
      'Pickleball courts available'
    ],
    bestFor: [
      'Dedicated padel players',
      'Players wanting indoor courts',
      'Bay views enthusiasts',
      'Those seeking a full club experience'
    ]
  },
  {
    rank: 2,
    name: 'Park Padel - Embarcadero',
    slug: 'park-padel-embarcadero',
    score: 93,
    location: 'Embarcadero, San Francisco, CA (near Ferry Building)',
    courts: '3 outdoor courts',
    price: '$$-$$$',
    description: 'Park Padel Embarcadero offers three outdoor padel courts in the heart of San Francisco with stunning Bay views next to the Ferry Building. The Embarcadero location is unbeatable for accessibility, and the free community play hours (Mon-Thu 1-3pm) make it a welcoming entry point for newcomers. A 4.8 Google rating speaks to the quality experience.',
    highlights: [
      '3 outdoor courts at the Embarcadero',
      'Stunning Bay views next to Ferry Building',
      'Free community play hours (Mon-Thu 1-3pm)',
      'Equipment rental available',
      'Snack bar on-site',
      '4.8 Google rating'
    ],
    programs: [
      'Non-member peak ($40/person/hr)',
      'Non-member off-peak ($25/person/hr)',
      'Premier membership ($120/mo)',
      'Clinics ($55/hr non-member, $35 member)',
      'Social play ($30 non-member, $20 member)',
      'Free community hours'
    ],
    bestFor: [
      'Downtown SF workers & residents',
      'Beginners (free community hours)',
      'Outdoor play lovers',
      'Tourists & visitors'
    ]
  },
  {
    rank: 3,
    name: 'Bay Padel - Dogpatch',
    slug: 'bay-padel-dogpatch',
    score: 90,
    location: 'Dogpatch / Pier 70, San Francisco, CA',
    courts: '2 indoor courts',
    price: '$$-$$$',
    description: 'A modern indoor padel club in SF\'s Dogpatch neighborhood at Pier 70 with 2 padel courts, pickleball options, a fitness area with MX4 classes, showers and lockers, and a pro shop. Pet-friendly and well-located with available parking. With a 4.9 Google rating, Bay Padel Dogpatch delivers a boutique padel experience in one of SF\'s trendiest neighborhoods.',
    highlights: [
      '2 indoor padel courts at Pier 70',
      'Fitness area with MX4 classes',
      'Pro shop & WiFi',
      'Showers & lockers',
      'Pet-friendly facility',
      '4.9 Google rating'
    ],
    programs: [
      'Court bookings (~$35-80/hr)',
      'Standard membership ($99/mo)',
      'MX4 fitness classes',
      'Professional coaching',
      'Pickleball available',
      'Open play sessions'
    ],
    bestFor: [
      'Dogpatch & Potrero Hill residents',
      'Fitness-focused players',
      'Boutique club seekers',
      'Pet owners'
    ]
  }
];

export default function SanFranciscoBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in San Francisco (2026) | Bay Area Padel Guide",
    "description": "Discover San Francisco's 3 best padel clubs in 2026. Bay views, indoor courts & world-class facilities.",
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
      "@id": "https://padelcourtsfinder.com/blog/best-padel-clubs-san-francisco"
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
            Best Padel Clubs in San Francisco (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-orange-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>San Francisco Bay Area, CA</span>
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
              <div className="text-3xl font-bold text-orange-600">3</div>
              <div className="text-sm text-gray-600">Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">11</div>
              <div className="text-sm text-gray-600">Total Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">$25-40</div>
              <div className="text-sm text-gray-600">Per Person Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">4.8-4.9</div>
              <div className="text-sm text-gray-600">Avg Google Rating</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            San Francisco&apos;s Bay Area Padel Scene
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            San Francisco&apos;s padel scene may be compact, but what it lacks in quantity it makes up for in quality. The city&apos;s 3 clubs average a remarkable 4.8-4.9 Google rating, and each offers a distinct experience: waterfront outdoor courts at the Embarcadero, a massive indoor facility in a historic Treasure Island hangar, and a boutique club in the trendy Dogpatch neighborhood.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The Bay Area&apos;s tech-savvy, internationally connected population has embraced padel enthusiastically. <Link href="/courts/bay-padel-treasure-island" className="text-orange-600 hover:underline">Bay Padel on Treasure Island</Link> leads the pack with 6 indoor courts under the world&apos;s highest ceilings, while <Link href="/courts/park-padel-embarcadero" className="text-orange-600 hover:underline">Park Padel at the Embarcadero</Link> offers free community play hours multiple days per week.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Explore all options on our <Link href="/california/san-francisco" className="text-orange-600 hover:underline">San Francisco courts page</Link> or browse the full <Link href="/california" className="text-orange-600 hover:underline">California padel directory</Link>.
          </p>
        </div>

        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>Best Overall:</strong> <Link href="/courts/bay-padel-treasure-island" className="text-orange-600 hover:underline">Bay Padel - Treasure Island</Link> (6 indoor courts, historic hangar)</p>
            <p><strong>Best Location:</strong> <Link href="/courts/park-padel-embarcadero" className="text-orange-600 hover:underline">Park Padel - Embarcadero</Link> (Bay views, Ferry Building)</p>
            <p><strong>Best for Beginners:</strong> <Link href="/courts/park-padel-embarcadero" className="text-orange-600 hover:underline">Park Padel</Link> (free community hours Mon-Thu)</p>
            <p><strong>Best Boutique:</strong> <Link href="/courts/bay-padel-dogpatch" className="text-orange-600 hover:underline">Bay Padel - Dogpatch</Link> (Pier 70, fitness classes)</p>
          </div>
        </div>

        <div className="space-y-12">
          {clubs.map(club => (
            <div key={club.rank} id={`club-${club.rank}`} className="border-t-4 border-orange-500 bg-white shadow-lg rounded-xl overflow-hidden">
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

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in San Francisco?</h2>
          <p className="text-xl text-orange-100 mb-6">
            Find all San Francisco Bay Area padel courts with directions and details
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/california/san-francisco"
              className="inline-block bg-white text-orange-700 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              View San Francisco Courts
            </Link>
            <Link
              href="/california"
              className="inline-block bg-orange-400 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-300 transition-colors"
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
              <p className="text-sm text-gray-600">LA&apos;s top padel clubs from beaches to hills</p>
            </Link>
            <Link href="/blog/best-padel-clubs-san-diego" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in San Diego</h4>
              <p className="text-sm text-gray-600">Perfect weather padel paradise</p>
            </Link>
            <Link href="/blog/best-padel-clubs-new-york" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in New York</h4>
              <p className="text-sm text-gray-600">NYC&apos;s booming padel scene</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
