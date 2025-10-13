import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Globe, Clock, Star, Users, Dumbbell, Wine } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in San Diego (2025) | Complete Rankings & Reviews',
  description: 'San Diego\'s 5 best padel clubs ranked. Padel N9NE\'s 100K sq ft mega-facility, Kingdom\'s bar scene, Taktika\'s elite coaching, and perfect year-round weather.',
};

export default function SanDiegoBestClubsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-orange-200 hover:text-white">
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in San Diego (2025)
          </h1>
          <p className="text-xl text-orange-100 mb-6">
            America&apos;s Perfect-Weather Padel Paradise
          </p>
          <div className="flex flex-wrap gap-4 text-orange-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>San Diego, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>5 Clubs Ranked</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Updated October 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600">5</div>
              <div className="text-sm text-gray-600">Major Clubs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">25+</div>
              <div className="text-sm text-gray-600">Total Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">$25-35</div>
              <div className="text-sm text-gray-600">Per Person</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">365</div>
              <div className="text-sm text-gray-600">Perfect Days/Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            San Diego: Where Perfect Weather Meets Perfect Padel
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            San Diego takes "year-round outdoor sports" to another level. With 5 major facilities, a 100,000+ sq ft mega-club, and weather that never disappoints, San Diego is California's southern padel jewel.
          </p>
        </div>

        {/* Quick Rankings */}
        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>🏆 Best Overall:</strong> Padel N9NE (8 courts, 100K sq ft, wellness campus)</p>
            <p><strong>💎 Best Luxury:</strong> Padel N9NE (premium membership club)</p>
            <p><strong>🎉 Best Social:</strong> Kingdom of Padel (bar scene, "party never stops")</p>
            <p><strong>🏅 Best Coaching:</strong> Taktika Padel (Paquito Navarro Academy)</p>
            <p><strong>🌊 Best Beach Access:</strong> Padel California Oceanside (first in California!)</p>
          </div>
        </div>

        {/* Club #1: Padel N9NE */}
        <div className="border-t-4 border-orange-600 bg-white shadow-lg rounded-xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="text-sm font-semibold mb-1">#1</div>
                <h3 className="text-3xl font-bold mb-2">Padel N9NE</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xl font-bold">97/100</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">$$$</div>
                <div className="text-sm text-orange-100">Premium</div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-2 text-gray-700">
                <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <span>9955 Barnes Canyon Road, Sorrento Valley, San Diego, CA</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="w-5 h-5 text-orange-600" />
                <span>8 world-class indoor courts</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Globe className="w-5 h-5 text-orange-600" />
                <a href="https://padeln9ne.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
                  padeln9ne.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Dumbbell className="w-5 h-5 text-orange-600" />
                <span>Over 100,000 sq ft facility!</span>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
              <p className="text-orange-900 font-semibold mb-2">
                &quot;The world is in your court.&quot;
              </p>
              <p className="text-gray-700">
                Padel N9NE is San Diego&apos;s—and potentially America&apos;s—most ambitious padel project. Over 100,000 sq ft with 8 courts, luxury gym, wellness center, and meticulously designed for the ultimate experience.
              </p>
            </div>

            <h4 className="font-bold text-gray-900 mb-3 text-lg">What Makes It Special:</h4>
            <ul className="grid md:grid-cols-2 gap-2 mb-6">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-orange-600 font-bold">✓</span>
                <span>8 indoor courts (most in San Diego!)</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-orange-600 font-bold">✓</span>
                <span>100,000+ sq ft wellness campus</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-orange-600 font-bold">✓</span>
                <span>Luxury gym & wellness facility</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-orange-600 font-bold">✓</span>
                <span>Executive locker rooms with towel service</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-orange-600 font-bold">✓</span>
                <span>Premium membership model</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-orange-600 font-bold">✓</span>
                <span>Opened early 2025 (brand new!)</span>
              </li>
            </ul>

            <h4 className="font-bold text-gray-900 mb-3 text-lg">Membership Options:</h4>
            <div className="space-y-3 mb-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="font-bold text-gray-900 mb-1">P9 Standard - $199/month + $499 initiation</div>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Unlimited free court bookings (fair play policy)</li>
                  <li>• 7-day booking window</li>
                  <li>• Executive locker rooms</li>
                  <li>• 55% off programming/lessons</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="font-bold text-orange-900 mb-1">P9 Plus - $349/month + $499 initiation</div>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Everything in Standard PLUS:</li>
                  <li>• Access to luxury gym & wellness facilities</li>
                  <li>• Fitness equipment</li>
                  <li>• Wellness programs</li>
                  <li>• Limited to 150 memberships (exclusive!)</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-bold text-gray-900 mb-2">Best For:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Serious players</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Luxury seekers</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Wellness enthusiasts</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Sorrento Valley workers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Club #2: Kingdom of Padel */}
        <div className="border-t-4 border-orange-600 bg-white shadow-lg rounded-xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="text-sm font-semibold mb-1">#2</div>
                <h3 className="text-3xl font-bold mb-2">Kingdom of Padel</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-5 h-5 text-orange-300" />
                  </div>
                  <span className="text-xl font-bold">90/100</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">$$</div>
                <div className="text-sm text-orange-100">Mid-range</div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-2 text-gray-700">
                <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <span>4645 Morena Blvd, San Diego, CA 92117</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="w-5 h-5 text-orange-600" />
                <span>4 named courts + pickleball</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Globe className="w-5 h-5 text-orange-600" />
                <a href="https://kingdomofpadel.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
                  kingdomofpadel.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Wine className="w-5 h-5 text-orange-600" />
                <span>Bar & café on-site</span>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
              <p className="text-purple-900 font-semibold mb-2">
                &quot;From the court to the BAR, the Party never stops!!!&quot;
              </p>
              <p className="text-gray-700">
                Kingdom of Padel brings social atmosphere to San Diego padel with indoor/outdoor courts, bar, café, and even pet-friendly policies. Plus golf simulators for multi-sport fun!
              </p>
            </div>

            <h4 className="font-bold text-gray-900 mb-3 text-lg">What Makes It Special:</h4>
            <ul className="grid md:grid-cols-2 gap-2 mb-6">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-orange-600 font-bold">✓</span>
                <span>Bar and café on-site (eat, drink, socialize)</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-orange-600 font-bold">✓</span>
                <span>Elite indoor & outdoor courts</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-orange-600 font-bold">✓</span>
                <span>Golf simulators (multi-activity)</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-orange-600 font-bold">✓</span>
                <span>Pet-friendly! (bring your dog)</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-orange-600 font-bold">✓</span>
                <span>Named courts (CELSIUS, NINE GLOW)</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-orange-600 font-bold">✓</span>
                <span>&quot;Celebrate your day the Kingdom way&quot;</span>
              </li>
            </ul>

            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-bold text-gray-900 mb-2">Best For:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Social players</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Multi-sport enthusiasts</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Dog owners</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Party atmosphere</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white border rounded-xl overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Club</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Location</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Courts</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Price</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-semibold">Padel N9NE</td>
                  <td className="px-6 py-4 text-sm">Sorrento</td>
                  <td className="px-6 py-4 text-sm">8</td>
                  <td className="px-6 py-4 text-sm">$$$</td>
                  <td className="px-6 py-4 text-sm">Luxury, serious</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Kingdom</td>
                  <td className="px-6 py-4 text-sm">Morena Blvd</td>
                  <td className="px-6 py-4 text-sm">4</td>
                  <td className="px-6 py-4 text-sm">$$</td>
                  <td className="px-6 py-4 text-sm">Social, bar</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Taktika</td>
                  <td className="px-6 py-4 text-sm">2 locations</td>
                  <td className="px-6 py-4 text-sm">Outdoor</td>
                  <td className="px-6 py-4 text-sm">$$</td>
                  <td className="px-6 py-4 text-sm">Elite coaching</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">King of Padel</td>
                  <td className="px-6 py-4 text-sm">Jutland</td>
                  <td className="px-6 py-4 text-sm">6</td>
                  <td className="px-6 py-4 text-sm">$$</td>
                  <td className="px-6 py-4 text-sm">Entertainment</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Padel CA</td>
                  <td className="px-6 py-4 text-sm">Oceanside</td>
                  <td className="px-6 py-4 text-sm">2</td>
                  <td className="px-6 py-4 text-sm">$$</td>
                  <td className="px-6 py-4 text-sm">First, beach</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* San Diego Insights */}
        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 San Diego Padel Insights</h3>
          <div className="space-y-4 text-gray-700">
            <div>
              <h4 className="font-bold text-lg mb-2">🌡️ Perfect Year-Round Weather</h4>
              <p>60-75°F average temps, minimal rain (10-15 days/year), coastal breeze. No bad season for padel!</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">💰 San Diego Costs</h4>
              <p>$25-35/person typical. Memberships: $199-349/month (Padel N9NE). Premium market with quality facilities.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">🎯 Your San Diego Plan</h4>
              <ul className="space-y-1 ml-4">
                <li>• <strong>First-timer:</strong> Padel California (beginner-friendly, free tryouts)</li>
                <li>• <strong>Serious player:</strong> Padel N9NE (8 courts, competition)</li>
                <li>• <strong>Social player:</strong> Kingdom of Padel (bar scene!)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in San Diego?</h2>
          <p className="text-xl text-green-100 mb-6">
            Perfect weather + world-class facilities = padel paradise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/search?city=San+Diego"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View San Diego Courts Map
            </Link>
            <Link
              href="/california"
              className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors"
            >
              All California Clubs
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More California Padel Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-los-angeles" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in LA</h4>
              <p className="text-sm text-gray-600">8+ clubs from beaches to hills</p>
            </Link>
            <Link href="/blog/best-padel-clubs-san-francisco" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in SF</h4>
              <p className="text-sm text-gray-600">Bay Area padel revolution</p>
            </Link>
            <Link href="/blog/best-padel-clubs-miami" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Miami</h4>
              <p className="text-sm text-gray-600">America's padel capital</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
