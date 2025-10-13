import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, PlayCircle, Calendar, DollarSign, Users, BookOpen, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Start Playing Padel in 30 Days | Complete Beginner\'s Guide',
  description: 'Learn how to start playing padel from scratch. Find free beginner clinics at 525+ courts nationwide, calculate costs, and join America\'s fastest-growing sport.',
};

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Start Playing Padel in 30 Days
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Your Complete Beginner's Guide to America's Fastest-Growing Sport
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link
                href="/search"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
              >
                Find Your First Court
              </Link>
              <Link
                href="#roadmap"
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition"
              >
                See the 30-Day Plan
              </Link>
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">What You'll Learn Here:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>How to go from zero to confident player in 30 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Where to find free beginner clinics near you</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>What it actually costs (spoiler: less than you think)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Everything you need before your first game</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">What You Won't Find:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-300 text-xl">✗</span>
                  <span>Complicated jargon (we have a <Link href="/get-started/glossary" className="underline">glossary</Link> for that)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300 text-xl">✗</span>
                  <span>Intimidating technical stuff (we keep it simple)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300 text-xl">✗</span>
                  <span>Gatekeeping nonsense (padel is for everyone)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 30-Day Roadmap */}
      <section id="roadmap" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your 30-Day Padel Roadmap
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Follow this plan and you&apos;ll go from &quot;What&apos;s padel?&quot; to &quot;When&apos;s our next game?&quot; in one month.
          </p>
        </div>

        {/* Week 1 */}
        <div className="mb-12">
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="text-2xl font-bold text-green-900">Week 1: Discover</h3>
                <p className="text-green-700">Time investment: 2 hours total</p>
              </div>
            </div>

            <div className="space-y-4 ml-11">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <PlayCircle className="w-5 h-5 text-green-600" />
                  Watch this 5-minute intro video
                </h4>
                <p className="text-slate-600 text-sm">
                  Understand the basics of how padel is played
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Read "How to Play Padel"</h4>
                <p className="text-slate-600 text-sm mb-2">
                  Quick version: It's tennis meets squash on a smaller court with glass walls you can use. Always played in doubles. Easier to learn than tennis. Ridiculously fun.
                </p>
                <Link href="/how-to-play" className="text-green-600 hover:text-green-700 text-sm font-medium">
                  Read full guide →
                </Link>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  Find clubs near you
                </h4>
                <p className="text-slate-600 text-sm mb-2">
                  Use our directory to locate facilities within 30 minutes of home. Look for "offers beginner clinics" and "equipment rentals".
                </p>
                <Link href="/search" className="text-green-600 hover:text-green-700 text-sm font-medium">
                  Search courts →
                </Link>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Book your first clinic</h4>
                <p className="text-slate-600 text-sm">
                  Most clubs offer FREE or $20-40 intro sessions. Don't skip this—30 minutes with a coach saves you hours of confusion.
                </p>
              </div>

              <div className="bg-green-100 border border-green-200 p-3 rounded-lg mt-4">
                <p className="font-medium text-green-900">Week 1 Goal: Scheduled and ready for your first session</p>
              </div>
            </div>
          </div>
        </div>

        {/* Week 2 */}
        <div className="mb-12">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-2xl font-bold text-blue-900">Week 2: Experience</h3>
                <p className="text-blue-700">Time investment: 2-3 hours total</p>
              </div>
            </div>

            <div className="space-y-4 ml-11">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Attend beginner clinic (60 minutes)</h4>
                <p className="text-slate-600 text-sm mb-2">What to bring:</p>
                <ul className="text-sm text-slate-600 space-y-1 ml-4">
                  <li>• Court shoes (tennis/athletic, non-marking soles)</li>
                  <li>• Athletic clothes (shorts, moisture-wicking shirt)</li>
                  <li>• Water bottle</li>
                  <li>• Positive attitude</li>
                </ul>
                <p className="text-slate-600 text-sm mt-2">
                  What NOT to bring: Racket (rent at club), stress, expectations of being good
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Play your first game (90 minutes)</h4>
                <p className="text-slate-600 text-sm">
                  Book a court with friends or join drop-in play. Yes, you'll be terrible. Yes, you'll have fun anyway.
                </p>
                <p className="text-slate-500 text-xs mt-2 italic">
                  Realistic first game: You'll miss serves, hit the back wall with your racket, forget the score, and laugh a lot. This is normal and good.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Join club's WhatsApp group</h4>
                <p className="text-slate-600 text-sm">
                  Almost every club has one. This is how you find playing partners, ask questions, and become part of the community.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Learn basic terms</h4>
                <p className="text-slate-600 text-sm mb-2">
                  Check out our <Link href="/get-started/glossary" className="text-green-600 hover:text-green-700 font-medium">padel glossary</Link> for common words you'll hear.
                </p>
              </div>

              <div className="bg-blue-100 border border-blue-200 p-3 rounded-lg mt-4">
                <p className="font-medium text-blue-900">Week 2 Goal: You&apos;ve actually played padel and didn&apos;t die</p>
              </div>
            </div>
          </div>
        </div>

        {/* Week 3 */}
        <div className="mb-12">
          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-purple-600" />
              <div>
                <h3 className="text-2xl font-bold text-purple-900">Week 3: Practice</h3>
                <p className="text-purple-700">Time investment: 4-6 hours total</p>
              </div>
            </div>

            <div className="space-y-4 ml-11">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Play 2-3 more games</h4>
                <p className="text-slate-600 text-sm mb-2">Try different experiences:</p>
                <ul className="text-sm text-slate-600 space-y-1 ml-4">
                  <li>• Indoor vs outdoor (different feel)</li>
                  <li>• Different clubs (find your favorite vibe)</li>
                  <li>• Different partners (play with various skill levels)</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Rent different rackets</h4>
                <p className="text-slate-600 text-sm">
                  Try round shape (easiest), teardrop shape (balanced), and different weights. <strong>Don&apos;t buy yet!</strong> You don&apos;t know your style after 3 games.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Watch one pro match (20 minutes)</h4>
                <p className="text-slate-600 text-sm">
                  YouTube search: &quot;Premier Padel highlights&quot; or &quot;World Padel Tour&quot;
                </p>
              </div>

              <div className="bg-purple-100 border border-purple-200 p-3 rounded-lg mt-4">
                <p className="font-medium text-purple-900">Week 3 Goal: Comfortable on court, walls feel less weird</p>
              </div>
            </div>
          </div>
        </div>

        {/* Week 4 */}
        <div className="mb-12">
          <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-orange-600" />
              <div>
                <h3 className="text-2xl font-bold text-orange-900">Week 4: Commit</h3>
                <p className="text-orange-700">Time investment: 2-4 hours + decision</p>
              </div>
            </div>

            <div className="space-y-4 ml-11">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-orange-600" />
                  Calculate your costs
                </h4>
                <p className="text-slate-600 text-sm mb-2">
                  Most common: $150-250/month for regular play (2x/week)
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Make your decision: Casual or Regular?</h4>

                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div className="border-2 border-slate-200 rounded-lg p-3">
                    <p className="font-medium text-sm mb-2">CASUAL PATH (1-2x/month)</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Keep renting equipment</li>
                      <li>• Pay per session</li>
                      <li>• Join drop-in games</li>
                      <li className="text-green-600 font-medium">Low commitment, still fun</li>
                    </ul>
                  </div>

                  <div className="border-2 border-orange-300 rounded-lg p-3 bg-orange-50/50">
                    <p className="font-medium text-sm mb-2">REGULAR PATH (1+x/week)</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Get membership (saves money)</li>
                      <li>• Buy basic equipment ($150-300)</li>
                      <li>• Join league or regular group</li>
                      <li className="text-orange-600 font-medium">You're officially a padel player</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Buy equipment (if going regular)</h4>
                <p className="text-slate-600 text-sm mb-2">Starter setup ($150-300):</p>
                <ul className="text-sm text-slate-600 space-y-1 ml-4">
                  <li>• Beginner racket: $80-120</li>
                  <li>• Court shoes: $70-100</li>
                  <li>• Balls: $20 (case)</li>
                  <li>• Bag: $30-50 (or use gym bag)</li>
                </ul>
                <Link href="/equipment" className="text-green-600 hover:text-green-700 text-sm font-medium mt-2 inline-block">
                  Equipment Guide for Beginners →
                </Link>
              </div>

              <div className="bg-orange-100 border border-orange-200 p-3 rounded-lg mt-4">
                <p className="font-medium text-orange-900">Week 4 Goal: You&apos;re now a padel player! 🎉</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Cards */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Learn the Basics</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/get-started/glossary" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition border-2 border-transparent hover:border-green-200">
              <BookOpen className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Padel Glossary</h3>
              <p className="text-slate-600 mb-4">100+ padel terms defined. From bandeja to víbora.</p>
              <span className="text-green-600 font-medium text-sm">Most popular resource! →</span>
            </Link>

            <Link href="/search" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition border-2 border-transparent hover:border-green-200">
              <MapPin className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Find Clinics</h3>
              <p className="text-slate-600 mb-4">Interactive finder shows free clinics in your area.</p>
              <span className="text-green-600 font-medium text-sm">Find Clinics Now →</span>
            </Link>

            <Link href="/equipment" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition border-2 border-transparent hover:border-green-200">
              <DollarSign className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Cost Calculator</h3>
              <p className="text-slate-600 mb-4">Calculate your actual costs. Membership vs pay-per-play.</p>
              <span className="text-green-600 font-medium text-sm">Interactive tool →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Where to Play */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Where to Play</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          We've mapped 525+ courts across America
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Link href="/texas" className="px-4 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition">
            Texas (20+ clubs)
          </Link>
          <Link href="/california" className="px-4 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition">
            California (13 clubs)
          </Link>
          <Link href="/florida" className="px-4 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition">
            Florida (15+ clubs)
          </Link>
          <Link href="/arizona" className="px-4 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition">
            Arizona (7 clubs)
          </Link>
          <Link href="/new-york" className="px-4 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition">
            New York (6+ clubs)
          </Link>
          <Link href="/search" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium">
            View All States →
          </Link>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-lg mb-2">
            <strong>Top padel cities:</strong> Austin (America&apos;s padel capital!), Miami (traditional stronghold), Los Angeles, San Francisco, Phoenix, San Diego
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            525+ courts nationwide. One of them has your name on it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/search"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition inline-block"
            >
              Find Courts Near You →
            </Link>
            <Link
              href="/get-started/glossary"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition inline-block"
            >
              Learn the Language →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
