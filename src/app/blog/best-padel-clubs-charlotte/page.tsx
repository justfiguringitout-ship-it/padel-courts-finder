import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Star, Users, Globe, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Charlotte (2025) | Complete QC Padel Guide',
  description: 'Charlotte padel scene led by Charlotte Padel Club. Complete guide to Queen City padel with rankings, pricing, and Southern charm.',
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
    name: 'Charlotte Padel Club - South Charlotte',
    score: 91,
    location: '8401 Sharon Lakes Rd, Charlotte, NC 28210',
    courts: '4 courts',
    price: '$$-$$$',
    website: 'charlottepadelclub.com',
    description: 'Charlotte&apos;s premier padel destination in South Charlotte. Well-maintained courts, strong community atmosphere, and excellent programming. Leading the charge for padel growth in the Carolinas.',
    highlights: [
      '4 well-maintained courts',
      'South Charlotte location',
      'Active community',
      'Strong coaching programs',
      'Tournament hosting',
      'Family-friendly'
    ],
    programs: [
      'Beginner clinics',
      'Private lessons',
      'Youth development',
      'Adult leagues',
      'Open play sessions',
      'Social tournaments'
    ],
    bestFor: [
      'South Charlotte residents',
      'All skill levels',
      'Families',
      'Social players'
    ]
  }
];

export default function CharlotteBestClubsPage() {
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
            Best Padel Clubs in Charlotte (2025)
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Charlotte, NC</span>
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
              <div className="text-3xl font-bold text-blue-600">1+</div>
              <div className="text-sm text-gray-600">Active Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">4+</div>
              <div className="text-sm text-gray-600">Courts</div>
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
            Queen City Embraces Padel
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Charlotte&apos;s padel scene is growing steadily. Led by Charlotte Padel Club, the Queen City is establishing itself as the Carolinas&apos; padel hub. With banking wealth, population growth, and mild climate, Charlotte is perfect for padel expansion.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            As one of America&apos;s fastest-growing metros, Charlotte attracts transplants from padel-strong cities. This fuels demand for more facilities across the region.
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Guide</h3>
          <div className="space-y-2 text-lg">
            <p><strong>🏆 Best Overall:</strong> Charlotte Padel Club (Premier facility)</p>
            <p><strong>👨‍👩‍👧 Best for Families:</strong> Charlotte Padel Club (Youth programs)</p>
            <p><strong>🎯 Best for Beginners:</strong> Charlotte Padel Club clinics</p>
            <p><strong>💰 Price Range:</strong> $30-40 per person</p>
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

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12 mt-12">
          <h3 className="text-xl font-bold mb-3">Why Charlotte is Perfect for Padel Growth</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ <strong>Fast growth:</strong> One of America&apos;s fastest-growing metros</li>
            <li>✓ <strong>Banking wealth:</strong> Financial center resources</li>
            <li>✓ <strong>Mild climate:</strong> Year-round outdoor play</li>
            <li>✓ <strong>Transplants:</strong> New residents from padel cities</li>
            <li>✓ <strong>Sports culture:</strong> Active, tennis-playing community</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Charlotte?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find all Charlotte padel courts on our interactive map
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/search?city=Charlotte"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View Charlotte Courts Map
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
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Southeast Padel</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-atlanta" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Atlanta</h4>
              <p className="text-sm text-gray-600">ATL metro emerging scene</p>
            </Link>
            <Link href="/blog/best-padel-clubs-miami" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Miami</h4>
              <p className="text-sm text-gray-600">10+ clubs, America&apos;s capital</p>
            </Link>
            <Link href="/blog/best-padel-clubs-orlando" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Orlando</h4>
              <p className="text-sm text-gray-600">Central Florida padel</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
