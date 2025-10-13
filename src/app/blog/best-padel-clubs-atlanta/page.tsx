import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Star, Users, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Atlanta (2025) | Complete ATL Padel Guide',
  description: 'Atlanta padel scene emerging across the metro. Complete guide to ATL padel with rankings, pricing, and Southern hospitality.',
};

export default function AtlantaBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in atlanta (2025) | Complete Guide & Rankings",
    "description": "Discover the best padel clubs in atlanta. Complete guide with rankings, pricing, programs, and insider tips.",
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
      "@id": "https://padelcourtsfinder.com/blog/best-padel-clubs-atlanta"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />


      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-orange-200 hover:text-white">← Back to Blog</Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Atlanta (2025)
          </h1>
          <div className="flex flex-wrap gap-4 text-orange-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Atlanta, GA</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>Emerging Scene</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Growing Community</span>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold">Padel Comes to the ATL</h2>
          <p className="text-lg text-gray-700">
            Atlanta&apos;s padel scene is in early stages but showing promising growth. As the Southeast&apos;s major hub, Atlanta&apos;s diverse international community and sports culture make it ideal for padel expansion.
          </p>
          <p className="text-lg text-gray-700">
            With major population growth, business-friendly environment, and affluent suburbs, expect multiple new facilities across the metro area by 2026. From Buckhead to suburbs, padel is coming.
          </p>
        </div>

        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold mb-4">Why Atlanta is Perfect for Padel</h3>
          <ul className="space-y-2 text-lg">
            <li>🌆 <strong>Major metro:</strong> 6M+ residents across region</li>
            <li>✈️ <strong>International hub:</strong> Busiest airport, global connections</li>
            <li>📈 <strong>Growth city:</strong> People & businesses relocating</li>
            <li>☀️ <strong>Mild winters:</strong> Year-round outdoor play</li>
            <li>💰 <strong>Wealthy suburbs:</strong> Buckhead, Alpharetta, Johns Creek</li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12">
          <h3 className="text-xl font-bold mb-3">🍑 Coming Soon to ATL</h3>
          <p className="text-gray-700">
            Multiple padel facilities are in development across the Atlanta metro. From Midtown to suburbs, entrepreneurs recognize the opportunity. The city&apos;s thriving Latin American community and tennis culture create perfect conditions for rapid growth.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Atlanta?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find padel courts across the Atlanta metro area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search?city=Atlanta" className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              View Atlanta Courts Map
            </Link>
            <Link href="/georgia" className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors">
              All Georgia Clubs
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
