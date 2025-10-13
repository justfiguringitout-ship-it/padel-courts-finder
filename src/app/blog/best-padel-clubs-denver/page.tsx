import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Star, Users, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Denver (2025) | Rocky Mountain Padel Guide',
  description: 'Denver padel scene emerging in the Rockies. Complete guide to Colorado padel with rankings, pricing, and mountain-high energy.',
};

export default function DenverBestClubsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-blue-200 hover:text-white">← Back to Blog</Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Denver (2025)
          </h1>
          <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Denver, CO</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>Emerging Scene</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Mile High Energy</span>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold">Padel Comes to the Rockies</h2>
          <p className="text-lg text-gray-700">
            Denver&apos;s padel scene is just beginning but shows immense promise. With Colorado&apos;s active outdoor culture, 300 days of sunshine, and rapidly growing population, the Mile High City is primed for padel explosion.
          </p>
          <p className="text-lg text-gray-700">
            While currently limited, expect multiple new facilities across Denver and Boulder by 2026 as entrepreneurs recognize the opportunity.
          </p>
        </div>

        <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold mb-4">Why Denver is Perfect for Padel</h3>
          <ul className="space-y-2 text-lg">
            <li>⛰️ <strong>Active lifestyle:</strong> Outdoor sports culture</li>
            <li>☀️ <strong>300 days of sunshine:</strong> Year-round outdoor play</li>
            <li>📈 <strong>Growing population:</strong> Tech & remote workers influx</li>
            <li>💰 <strong>Affluent demographics:</strong> Resources for facilities</li>
            <li>🌍 <strong>International community:</strong> Many familiar with padel</li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-700 p-6 mb-12">
          <h3 className="text-xl font-bold mb-3">🏔️ Altitude Advantage</h3>
          <p className="text-gray-700">
            Playing padel at 5,280 feet elevation means the ball flies faster and bounces differently! Denver&apos;s thin air creates unique playing conditions that take some adjustment. But the stunning mountain views and perfect weather make it worth it.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Denver?</h2>
          <p className="text-xl text-green-100 mb-6">
            Find padel courts across the Denver metro area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search?city=Denver" className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              View Denver Courts Map
            </Link>
            <Link href="/colorado" className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors">
              All Colorado Clubs
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
