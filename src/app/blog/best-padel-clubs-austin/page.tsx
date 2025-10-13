import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Globe, Mail, Clock, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Padel Clubs in Austin, Texas (2025) | 6 Clubs Ranked & Reviewed',
  description: 'Austin is America&apos;s padel capital! Compare all 6 clubs from Padel Club Austin to Padel39. Complete guide with pricing, programs, and insider tips.',
};

export default function AustinBestClubsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/blog" className="text-purple-200 hover:text-white">
              ← Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Padel Clubs in Austin, Texas (2025)
          </h1>
          <p className="text-xl text-purple-100 mb-6">
            America&apos;s Surprising Padel Capital
          </p>
          <div className="flex flex-wrap gap-4 text-purple-100 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Austin, TX</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>6 Clubs Ranked</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>35+ Courts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600">6</div>
              <div className="text-sm text-gray-600">Facilities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">35+</div>
              <div className="text-sm text-gray-600">Total Courts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">$20-35</div>
              <div className="text-sm text-gray-600">Per Person</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">#1</div>
              <div className="text-sm text-gray-600">Clubs Per Capita</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Austin: America&apos;s Padel Capital
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Move over Miami—Austin is giving you a run for your money. With 6 dedicated padel facilities and 35+ courts (plus 17 more coming!), Austin, Texas has quietly become the highest concentration of padel clubs per capita in the United States.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Austin went from ZERO padel clubs in 2023 to 6+ facilities in 2025. That&apos;s explosive growth driven by tech money, active lifestyle culture, and perfect year-round weather.
          </p>
        </div>

        {/* Quick Rankings */}
        <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Rankings</h3>
          <div className="space-y-2 text-lg">
            <p><strong>🏆 Best Overall:</strong> Padel39 (6 courts + 12 coming, luxury amenities)</p>
            <p><strong>💰 Best Value:</strong> Pick & Paddle ($12.50/person off-peak!)</p>
            <p><strong>🎓 Best for Beginners:</strong> Padel Club Austin (free clinics, official Wilson facility)</p>
            <p><strong>🏅 Best Courts:</strong> Dripping Springs (first aluminum courts in U.S.)</p>
            <p><strong>🏆 Most Courts:</strong> Legacy Padel (13 courts coming Fall 2025)</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white border rounded-xl overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Club</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Courts</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Price</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-semibold">Padel39</td>
                  <td className="px-6 py-4 text-sm">6 (18 soon)</td>
                  <td className="px-6 py-4 text-sm">$25-30</td>
                  <td className="px-6 py-4 text-sm">Luxury, wellness</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Padel Club Austin</td>
                  <td className="px-6 py-4 text-sm">9</td>
                  <td className="px-6 py-4 text-sm">$25</td>
                  <td className="px-6 py-4 text-sm">Beginners, students</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Trosky Sports</td>
                  <td className="px-6 py-4 text-sm">6</td>
                  <td className="px-6 py-4 text-sm">Mid</td>
                  <td className="px-6 py-4 text-sm">Multi-sport</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Dripping Springs</td>
                  <td className="px-6 py-4 text-sm">3</td>
                  <td className="px-6 py-4 text-sm">$23</td>
                  <td className="px-6 py-4 text-sm">Tech, tennis</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Pick & Paddle</td>
                  <td className="px-6 py-4 text-sm">3</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-bold">$12-15</td>
                  <td className="px-6 py-4 text-sm">VALUE!</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Legacy 🔜</td>
                  <td className="px-6 py-4 text-sm">13</td>
                  <td className="px-6 py-4 text-sm">TBD</td>
                  <td className="px-6 py-4 text-sm">Coming Fall 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Top 3 Clubs Detailed */}
        <div className="space-y-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Top Austin Clubs</h2>

          {/* Padel39 */}
          <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-purple-600 font-bold text-sm">#1</span>
                <h3 className="text-2xl font-bold text-gray-900">Padel39</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">95/100</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-purple-600">$$$</div>
                <div className="text-sm text-gray-600">Premium</div>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>2510 Rutland Drive, Austin, TX 78758 (Near The Domain)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-purple-600" />
                <span>6 courts currently + 12 more opening in East Austin</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Globe className="w-4 h-4 text-purple-600" />
                <a href="https://padel39.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
                  padel39.com
                </a>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>&quot;Beyond Padel&quot;</strong> - 6 world-class courts, 8,000 sq ft clubhouse, sauna, cold plunge, and APRÈS39 bar/restaurant. Premium wellness-focused padel experience.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Premium experience</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Wellness focus</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Bar & restaurant</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Expanding to 18 courts</span>
            </div>
          </div>

          {/* Padel Club Austin */}
          <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-purple-600 font-bold text-sm">#2</span>
                <h3 className="text-2xl font-bold text-gray-900">Padel Club Austin</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">92/100</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-purple-600">$$</div>
                <div className="text-sm text-gray-600">Mid-range</div>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>511 Industrial Blvd, Austin, TX 78745</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-purple-600" />
                <span>9 premium courts (indoor & outdoor)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-purple-600" />
                <span>(737) 376-0605</span>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              Austin&apos;s first Wilson Padel club with 9 courts. <strong>FREE beginner clinics</strong> every week and student membership for just $20/month! Best entry point for new players.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">FREE clinics</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Official Wilson facility</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">$20/mo students</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Beginner friendly</span>
            </div>
          </div>

          {/* Pick & Paddle */}
          <div className="bg-white border-2 border-green-300 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-green-600 font-bold text-sm">#3 - BEST VALUE</span>
                <h3 className="text-2xl font-bold text-gray-900">Pick & Paddle</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">85/100</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-green-600">$</div>
                <div className="text-sm text-gray-600">Budget</div>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>30251 Leroy Scheel Rd, Bulverde, TX 78163 (30 min from Austin)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-green-600" />
                <span>3 padel courts + 3 pickleball courts</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-green-600" />
                <span>(830) 354-8362</span>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <p className="text-green-900 font-bold mb-1">
                🔥 Best Value in Texas!
              </p>
              <p className="text-gray-700 text-sm">
                <strong>$50-60/hour</strong> = $12.50-15/person. Compare to $25-30 elsewhere. 20% military discount!
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              Outdoor courts in scenic Hill Country setting. Family-owned, budget-friendly, with ball machines available. Worth the 30-minute drive for the savings!
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">$12.50/person!</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">20% military discount</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Hill Country views</span>
            </div>
          </div>
        </div>

        {/* Austin Insights */}
        <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Why Austin is Special</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-2">📊 The Numbers</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Highest clubs per capita in U.S.</li>
                <li>• 0 clubs in 2023 → 6+ in 2025</li>
                <li>• 35+ courts active, 17+ coming</li>
                <li>• 52+ total courts projected</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">🌟 The Culture</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• &quot;Keep Austin Weird&quot; applies</li>
                <li>• Tech money funding growth</li>
                <li>• Young, active population</li>
                <li>• Year-round outdoor weather</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Play in Austin?</h2>
          <p className="text-xl text-green-100 mb-6">
            6 clubs, 35+ courts, and America&apos;s most vibrant padel scene awaits!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/search?city=Austin"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View Austin Courts Map
            </Link>
            <Link
              href="/texas"
              className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-colors"
            >
              All Texas Clubs
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Texas Padel Guides</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/best-padel-clubs-dallas" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Dallas</h4>
              <p className="text-sm text-gray-600">DFW&apos;s growing padel scene</p>
            </Link>
            <Link href="/blog/best-padel-clubs-houston" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in Houston</h4>
              <p className="text-sm text-gray-600">Space City&apos;s padel courts</p>
            </Link>
            <Link href="/blog/best-padel-clubs-san-antonio" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 mb-2">Best Clubs in San Antonio</h4>
              <p className="text-sm text-gray-600">Alamo City padel guide</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
