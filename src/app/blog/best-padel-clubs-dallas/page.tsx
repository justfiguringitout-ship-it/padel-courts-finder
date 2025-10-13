import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Star, Users, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Dallas (2025) | Complete DFW Padel Guide',
  description: 'Dallas padel scene growing across DFW metroplex. Complete guide to Dallas-Fort Worth padel with rankings, pricing & programs.',
};

export default function DallasBestClubsPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Padel Clubs in dallas (2025) | Complete Guide & Rankings",
    "description": "Discover the best padel clubs in dallas. Complete guide with rankings, pricing, programs, and insider tips.",
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
      "@id": "https://padelcourtsfinder.com/blog/best-padel-clubs-dallas"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />


      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-blue-200 hover:text-white">← Back to Blog</Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Dallas-Fort Worth (2025)
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Dallas-Fort Worth, TX</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>Growing Metro</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Year-Round Play</span>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold">DFW Metroplex Embraces Padel</h2>
          <p className="text-lg text-gray-700">
            The Dallas-Fort Worth metroplex is becoming a major padel hub in Texas. With 7.5 million residents, business-friendly environment, and strong sports culture, DFW is attracting multiple padel facility developers.
          </p>
          <p className="text-lg text-gray-700">
            From Plano to Fort Worth, new clubs are opening across the metroplex. The region&apos;s large Latin American community brings authentic padel culture, while Dallas&apos;s wealth and entrepreneurial spirit fuel rapid expansion.
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold mb-4">Quick Guide</h3>
          <div className="space-y-2 text-lg">
            <p><strong>🏙️ Best Urban:</strong> Uptown & Downtown Dallas facilities</p>
            <p><strong>👨‍👩‍👧 Best Suburban:</strong> Plano & Frisco family clubs</p>
            <p><strong>💰 Price Range:</strong> $25-40 per person</p>
            <p><strong>🎯 Best For Beginners:</strong> Community clubs with clinics</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-12">
          <h3 className="text-xl font-bold mb-3">Why DFW is Perfect for Padel</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ <strong>Massive population:</strong> 7.5M+ metro residents</li>
            <li>✓ <strong>Business friendly:</strong> Easy to open facilities</li>
            <li>✓ <strong>Latin community:</strong> Familiar with the sport</li>
            <li>✓ <strong>Year-round weather:</strong> Mild winters, hot summers (AC helps!)</li>
            <li>✓ <strong>Wealthy suburbs:</strong> Plano, Frisco, Southlake ready for premium clubs</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in DFW?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find padel courts across the Dallas-Fort Worth metroplex
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search?city=Dallas" className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              View DFW Courts Map
            </Link>
            <Link href="/texas" className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors">
              All Texas Clubs
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Texas Padel</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-houston" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Houston</h4>
              <p className="text-sm text-gray-600">Multiple clubs across Houston metro</p>
            </Link>
            <Link href="/blog/best-padel-clubs-austin" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Austin</h4>
              <p className="text-sm text-gray-600">6+ clubs from downtown to Hill Country</p>
            </Link>
            <Link href="/blog/best-padel-clubs-san-antonio" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in San Antonio</h4>
              <p className="text-sm text-gray-600">Alamo City padel scene</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
