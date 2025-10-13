import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Star, Users, Globe, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Phoenix (2025) | Complete Arizona Guide',
  description: 'Phoenix padel scene growing fast. From Conquer Padel Club in Tempe to emerging Valley facilities. Complete guide to Arizona padel with rankings & pricing.',
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
    name: 'Conquer Padel Club',
    score: 94,
    location: '7760 S Priest Dr Suite 108, Tempe, AZ 85284',
    courts: '4 indoor courts',
    price: '$$-$$$',
    website: 'conquerpadel.com',
    description: 'Phoenix metro&apos;s premier padel destination in Tempe. Conquer Padel brings world-class indoor facilities to the Valley. Climate-controlled courts perfect for Arizona&apos;s hot summers, strong coaching programs, and vibrant community.',
    highlights: [
      '4 climate-controlled indoor courts',
      'Escape Arizona heat year-round',
      'Professional coaching staff',
      'Modern locker rooms',
      'Active tournament schedule',
      'Pro shop with equipment'
    ],
    programs: [
      'Beginner clinics & workshops',
      'Private lessons',
      'Youth development programs',
      'Adult leagues',
      'Open play sessions',
      'Tournament preparation'
    ],
    bestFor: [
      'Tempe & ASU community',
      'Serious players',
      'Summer play (AC!)',
      'All skill levels'
    ]
  },
  {
    rank: 2,
    name: 'Padel Alley - Tucson',
    score: 86,
    location: '5943 E Speedway Blvd, Tucson, AZ 85712',
    courts: '2 outdoor courts',
    price: '$$',
    description: 'Tucson&apos;s padel pioneer. Community-focused facility bringing the sport to Southern Arizona. Great for beginners and casual players.',
    highlights: [
      '2 outdoor courts',
      'Tucson location',
      'Beginner-friendly',
      'Affordable pricing',
      'Community atmosphere',
      'Growing player base'
    ],
    programs: [
      'Intro to Padel workshops',
      'Open play',
      'Private instruction',
      'Social tournaments',
      'Youth programs'
    ],
    bestFor: [
      'Tucson residents',
      'Beginners',
      'Casual players',
      'Budget-conscious'
    ]
  }
];

export default function PhoenixBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in phoenix (2025) | Complete Guide & Rankings",
    "description": "Discover the best padel clubs in phoenix. Complete guide with rankings, pricing, programs, and insider tips.",
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
      "@id": "https://padelcourtsfinder.com/blog/best-padel-clubs-phoenix"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />


      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-orange-200 hover:text-white">
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Phoenix (2025)
          </h1>
          <div className="flex flex-wrap gap-4 text-orange-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Phoenix Metro Area, AZ</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>Growing Scene</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Year-Round Play</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600">2+</div>
              <div className="text-sm text-gray-600">Active Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">6+</div>
              <div className="text-sm text-gray-600">Total Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">$25-40</div>
              <div className="text-sm text-gray-600">Per Person</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Arizona Embraces Padel
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Phoenix is becoming a surprising padel hotspot. With year-round sunshine (indoor AC a must in summer!), a growing population, and strong sports culture, the Valley is perfect for padel growth.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Led by Conquer Padel Club in Tempe, Arizona&apos;s padel infrastructure is expanding. Expect multiple new facilities across the Valley by 2026.
          </p>
        </div>

        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>🏆 Best Overall:</strong> Conquer Padel Club (Premium Tempe facility)</p>
            <p><strong>❄️ Best Summer Play:</strong> Conquer (Climate-controlled indoor)</p>
            <p><strong>🎓 Best for ASU:</strong> Conquer Padel (Tempe location)</p>
            <p><strong>🌵 Best Tucson:</strong> Padel Alley (Southern Arizona)</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-12">
          <h3 className="text-xl font-bold mb-3">☀️ Arizona Padel Tip</h3>
          <p className="text-gray-700">
            <strong>Summer heat is real!</strong> Indoor, climate-controlled facilities like Conquer Padel Club are essential June-September when outdoor temps hit 110°F+. Indoor play is comfortable year-round. Outdoor courts are perfect October-May.
          </p>
        </div>

        <div className="space-y-12">
          {clubs.map(club => (
            <div key={club.rank} id={`club-${club.rank}`} className="border-t-4 border-red-600 bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm font-semibold mb-1">#{club.rank}</div>
                    <h3 className="text-3xl font-bold mb-2">{club.name}</h3>
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
                  {club.website && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Globe className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <a href={`https://${club.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
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

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Phoenix?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find all Phoenix metro padel courts on our interactive map
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/search?city=Phoenix"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View Phoenix Courts Map
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
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Best Club Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-austin" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Austin</h4>
              <p className="text-sm text-gray-600">6+ clubs from downtown to Hill Country</p>
            </Link>
            <Link href="/blog/best-padel-clubs-miami" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Miami</h4>
              <p className="text-sm text-gray-600">10+ clubs, America&apos;s padel capital</p>
            </Link>
            <Link href="/blog/best-padel-clubs-denver" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Denver</h4>
              <p className="text-sm text-gray-600">Rocky Mountain padel scene</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
