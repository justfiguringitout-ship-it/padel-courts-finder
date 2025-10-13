import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Star, Users, Globe, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Orlando (2025) | Complete Central Florida Guide',
  description: 'Orlando padel scene led by Orlando Padel Club Indoor. Complete guide to Central Florida padel with rankings, pricing & tourist appeal.',
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
    name: 'Orlando Padel Club Indoor',
    score: 90,
    location: '5950 Lakehurst Dr Unit 101, Orlando, FL 32819',
    courts: '3 indoor courts',
    price: '$$-$$$',
    website: 'orlandopadelclub.com',
    description: 'Central Florida&apos;s premier padel destination. Climate-controlled indoor facility perfect for Orlando&apos;s hot, humid summers. Strong community, excellent coaching, and convenient location near tourist corridor.',
    highlights: [
      '3 climate-controlled indoor courts',
      'AC essential for summer!',
      'Near I-Drive & attractions',
      'Professional coaching',
      'Tourist-friendly',
      'Active local community'
    ],
    programs: [
      'Beginner workshops',
      'Private lessons',
      'Adult leagues',
      'Open play sessions',
      'Youth programs',
      'Corporate events'
    ],
    bestFor: [
      'Orlando residents',
      'Tourists & visitors',
      'Summer play (AC!)',
      'All skill levels'
    ]
  }
];

export default function OrlandoBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in orlando (2025) | Complete Guide & Rankings",
    "description": "Discover the best padel clubs in orlando. Complete guide with rankings, pricing, programs, and insider tips.",
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
      "@id": "https://padelcourtsfinder.com/blog/best-padel-clubs-orlando"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />


      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-blue-200 hover:text-white">
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Orlando (2025)
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Orlando, FL</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>Growing Scene</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Year-Round Indoor</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">1+</div>
              <div className="text-sm text-gray-600">Active Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">3+</div>
              <div className="text-sm text-gray-600">Indoor Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$30-40</div>
              <div className="text-sm text-gray-600">Per Person</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Central Florida&apos;s Padel Hub
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Orlando&apos;s padel scene is growing steadily. As Central Florida&apos;s metro hub with 2.5M+ residents and 75M+ annual tourists, Orlando offers unique potential. Led by Orlando Padel Club Indoor, the city combines local community with visitor appeal.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With brutal summer heat and humidity, indoor climate-controlled facilities are essential. Orlando&apos;s international tourism brings players from padel-strong countries, creating built-in awareness.
          </p>
        </div>

        <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Guide</h3>
          <div className="space-y-2 text-lg">
            <p><strong>🏆 Best Overall:</strong> Orlando Padel Club Indoor (Premier facility)</p>
            <p><strong>❄️ Best Summer Play:</strong> Orlando Padel Club (AC indoor)</p>
            <p><strong>✈️ Best for Tourists:</strong> Orlando Padel Club (Near I-Drive)</p>
            <p><strong>🎯 Best for Beginners:</strong> Orlando Padel Club workshops</p>
          </div>
        </div>

        <div className="space-y-12">
          {clubs.map(club => (
            <div key={club.rank} id={`club-${club.rank}`} className="border-t-4 border-blue-600 bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm font-semibold mb-1">#{club.rank}</div>
                    <h3 className="text-3xl font-bold mb-2">{club.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < Math.floor(club.score / 20) ? 'fill-yellow-400 text-yellow-400' : 'text-purple-300'}`} />
                        ))}
                      </div>
                      <span className="text-xl font-bold">{club.score}/100</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{club.price}</div>
                    <div className="text-sm text-purple-100">Price Range</div>
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

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-12 mt-12">
          <h3 className="text-xl font-bold mb-3">☀️ Orlando Climate = Indoor Padel</h3>
          <p className="text-gray-700">
            <strong>Summer heat and humidity demand AC.</strong> Orlando&apos;s 95°F+ temps with 80%+ humidity June-September make outdoor play miserable. Indoor climate-controlled courts are essential for comfortable year-round play. Orlando Padel Club&apos;s indoor facility solves this perfectly.
          </p>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-12">
          <h3 className="text-xl font-bold mb-3">Why Orlando is Perfect for Padel</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ <strong>Tourism capital:</strong> 75M+ visitors annually from padel countries</li>
            <li>✓ <strong>Large metro:</strong> 2.5M+ residents</li>
            <li>✓ <strong>Latin American population:</strong> Familiar with sport</li>
            <li>✓ <strong>International vibe:</strong> Global city appeal</li>
            <li>✓ <strong>Sports culture:</strong> Golf, tennis infrastructure exists</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Orlando?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find all Orlando padel courts on our interactive map
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/search?city=Orlando"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View Orlando Courts Map
            </Link>
            <Link
              href="/florida"
              className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors"
            >
              All Florida Clubs
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Florida Padel</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-miami" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Miami</h4>
              <p className="text-sm text-gray-600">10+ clubs, America&apos;s padel capital</p>
            </Link>
            <Link href="/blog/best-padel-clubs-austin" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Austin</h4>
              <p className="text-sm text-gray-600">6+ clubs from downtown to Hill Country</p>
            </Link>
            <Link href="/blog/best-padel-clubs-charlotte" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Charlotte</h4>
              <p className="text-sm text-gray-600">Queen City padel scene</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
