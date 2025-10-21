import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Star, Users, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in San Francisco Bay Area (2025) | Complete Guide',
  description: 'Discover the Bay Area&apos;s emerging padel scene. From Peninsula clubs to East Bay facilities. Complete guide to SF padel with rankings, pricing & programs.',
  alternates: {
    canonical: 'https://padelcourtsfinder.com/blog/best-padel-clubs-san-francisco',
  },
};

export default function SanFranciscoBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in san francisco (2025) | Complete Guide & Rankings",
    "description": "Discover the best padel clubs in san francisco. Complete guide with rankings, pricing, programs, and insider tips.",
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
      "@id": "https://padelcourtsfinder.com/blog/best-padel-clubs-san-francisco"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />


      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-orange-200 hover:text-white">← Back to Blog</Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in San Francisco Bay Area (2025)
          </h1>
          <div className="flex flex-wrap gap-4 text-orange-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>San Francisco Bay Area, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>Growing Scene</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Multiple Locations</span>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold">Bay Area&apos;s Padel Revolution</h2>
          <p className="text-lg text-gray-700">
            The San Francisco Bay Area&apos;s padel scene is rapidly expanding. While still emerging compared to LA or Miami, the Bay Area&apos;s tech-savvy, sports-enthusiastic population is embracing this European import with enthusiasm.
          </p>
          <p className="text-lg text-gray-700">
            From Peninsula facilities to East Bay clubs, the region offers diverse options for players of all levels. Expect the scene to explode over the next 2-3 years as more facilities open.
          </p>
        </div>

        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold mb-4">Quick Guide</h3>
          <div className="space-y-2 text-lg">
            <p><strong>🌉 Best Peninsula:</strong> Multiple clubs in development</p>
            <p><strong>🏙️ Best East Bay:</strong> Growing community</p>
            <p><strong>💰 Price Range:</strong> $25-45 per person</p>
            <p><strong>🎯 Best For Beginners:</strong> Open play sessions at local clubs</p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12">
          <h3 className="text-xl font-bold mb-3">Why Bay Area Padel is Exciting</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ <strong>Tech influence:</strong> Silicon Valley innovation meeting traditional sport</li>
            <li>✓ <strong>International community:</strong> Many expats familiar with padel</li>
            <li>✓ <strong>Wealth & interest:</strong> Resources to build world-class facilities</li>
            <li>✓ <strong>Year-round play:</strong> Mild California weather</li>
            <li>✓ <strong>Rapid expansion:</strong> Multiple new clubs planned for 2025-2026</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in the Bay Area?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find padel courts across the San Francisco Bay Area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search?city=San+Francisco" className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              View Bay Area Courts Map
            </Link>
            <Link href="/california" className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors">
              All California Clubs
            </Link>
          </div>
        </div>
        {/* Related Guides */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More California Padel Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-los-angeles" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Los Angeles</h4>
              <p className="text-sm text-gray-600">8+ clubs from beaches to hills</p>
            </Link>
            <Link href="/blog/best-padel-clubs-san-diego" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in San Diego</h4>
              <p className="text-sm text-gray-600">Perfect weather padel paradise</p>
            </Link>
            <Link href="/blog/best-padel-clubs-austin" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Austin</h4>
              <p className="text-sm text-gray-600">Texas padel capital</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
