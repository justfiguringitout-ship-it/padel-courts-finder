import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Star, Users, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in San Antonio (2025) | Alamo City Padel Guide',
  description: 'San Antonio padel scene emerging strong. Complete guide to Alamo City padel with rankings, pricing, and Texas-sized hospitality.',
};

export default function SanAntonioBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in san antonio (2025) | Complete Guide & Rankings",
    "description": "Discover the best padel clubs in san antonio. Complete guide with rankings, pricing, programs, and insider tips.",
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
      "@id": "https://padelcourtsfinder.com/blog/best-padel-clubs-san-antonio"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />


      <section className="bg-gradient-to-r from-blue-700 to-red-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-blue-200 hover:text-white">← Back to Blog</Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in San Antonio (2025)
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>San Antonio, TX</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>Emerging Scene</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Texas Growth</span>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold">Alamo City Discovers Padel</h2>
          <p className="text-lg text-gray-700">
            San Antonio&apos;s padel scene is in early stages but showing promise. As Texas&apos;s 7th largest city with 1.5M+ residents and strong Latin American heritage, San Antonio has the perfect foundation for padel growth.
          </p>
          <p className="text-lg text-gray-700">
            Following Austin, Houston, and Dallas, San Antonio is next in Texas&apos; padel expansion. The city&apos;s culture, climate, and growing economy create ideal conditions for facilities.
          </p>
        </div>

        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold mb-4">Why San Antonio is Perfect for Padel</h3>
          <ul className="space-y-2 text-lg">
            <li>🌮 <strong>Latin heritage:</strong> Strong Mexican-American community familiar with padel</li>
            <li>☀️ <strong>Year-round climate:</strong> Mild winters, hot summers</li>
            <li>📈 <strong>Growing economy:</strong> Tech & healthcare expansion</li>
            <li>👥 <strong>1.5M+ residents:</strong> 7th largest city in US</li>
            <li>🏀 <strong>Sports culture:</strong> Passionate Spurs fans love athletics</li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-700 p-6 mb-12">
          <h3 className="text-xl font-bold mb-3">🌮 Coming Soon to the Alamo City</h3>
          <p className="text-gray-700">
            Padel is coming to San Antonio! With Austin just 80 miles north showing the demand, entrepreneurs are eyeing SA. The city&apos;s demographics and culture make it a natural fit. Expect facilities to open across the metro by 2026, from downtown to Stone Oak.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in San Antonio?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find padel courts across San Antonio metro area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search?city=San+Antonio" className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              View San Antonio Courts Map
            </Link>
            <Link href="/texas" className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors">
              All Texas Clubs
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Texas Padel</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-austin" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Austin</h4>
              <p className="text-sm text-gray-600">Just 80 miles north - 6+ clubs</p>
            </Link>
            <Link href="/blog/best-padel-clubs-houston" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Houston</h4>
              <p className="text-sm text-gray-600">4+ major facilities</p>
            </Link>
            <Link href="/blog/best-padel-clubs-dallas" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Dallas</h4>
              <p className="text-sm text-gray-600">DFW metroplex padel</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
