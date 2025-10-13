import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, MapPin, TrendingUp, BookOpen, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Padel Blog | Expert Guides, Club Reviews & Tips',
  description: 'Explore our comprehensive padel blog with club reviews, how-to guides, equipment tips, and the latest padel news from across America.',
};

interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageAlt: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  // Best Clubs Listicles
  {
    slug: 'best-padel-clubs-miami',
    title: 'Best Padel Clubs in Miami (2025)',
    category: 'best-clubs',
    excerpt: 'Miami leads America\'s padel revolution with 10+ world-class clubs. From Reserve Padel\'s elite luxury to Urban Padel\'s community vibe, discover the Magic City\'s finest courts.',
    date: '2025-10-13',
    readTime: '8 min read',
    imageAlt: 'Miami padel courts with ocean views',
    featured: true
  },
  {
    slug: 'best-padel-clubs-austin',
    title: 'Best Padel Clubs in Austin (2025)',
    category: 'best-clubs',
    excerpt: 'Austin\'s padel scene is booming with 6+ clubs spanning from downtown to Hill Country. Dripping Springs\' aluminum courts, Padel39\'s outdoor paradise, and more.',
    date: '2025-10-13',
    readTime: '7 min read',
    imageAlt: 'Austin padel facilities',
    featured: true
  },
  {
    slug: 'best-padel-clubs-los-angeles',
    title: 'Best Padel Clubs in Los Angeles (2025)',
    category: 'best-clubs',
    excerpt: 'LA\'s padel landscape spans from Santa Monica beaches to Pasadena hills. 8+ clubs including rooftop courts at Heimat LA and Mediterranean vibes at Padel Los Feliz.',
    date: '2025-10-13',
    readTime: '8 min read',
    imageAlt: 'LA padel club with city views',
    featured: true
  },
  {
    slug: 'best-padel-clubs-san-francisco',
    title: 'Best Padel Clubs in San Francisco (2025)',
    category: 'best-clubs',
    excerpt: 'Bay Area\'s padel revolution led by Bay Padel and Park Padel chains. Treasure Island courts with bridge views, Embarcadero waterfront play, and 6+ locations.',
    date: '2025-10-13',
    readTime: '7 min read',
    imageAlt: 'San Francisco Bay Padel courts'
  },
  {
    slug: 'best-padel-clubs-san-diego',
    title: 'Best Padel Clubs in San Diego (2025)',
    category: 'best-clubs',
    excerpt: 'Perfect weather meets perfect padel in San Diego. Padel N9NE\'s 100K sq ft mega-facility, Kingdom\'s social scene, Taktika\'s elite coaching, and year-round outdoor play.',
    date: '2025-10-13',
    readTime: '8 min read',
    imageAlt: 'San Diego padel courts'
  },
  {
    slug: 'best-padel-clubs-nyc',
    title: 'Best Padel Clubs in New York City (2025)',
    category: 'best-clubs',
    excerpt: 'From Brooklyn waterfront to Harlem rooftops, NYC\'s padel scene is as diverse as the city itself. Padel Haus Dumbo, Reserve NYC elite training, Padel& Greenpoint, and more.',
    date: '2025-10-13',
    readTime: '7 min read',
    imageAlt: 'NYC padel facilities'
  },
  {
    slug: 'best-padel-clubs-phoenix',
    title: 'Best Padel Clubs in Phoenix (2025)',
    category: 'best-clubs',
    excerpt: 'Desert padel paradise with 7+ clubs across Phoenix and Scottsdale. Mesa Padel Club\'s 5 Padel Galis courts, PadelTime Scottsdale luxury, and year-round sunshine.',
    date: '2025-10-13',
    readTime: '7 min read',
    imageAlt: 'Phoenix padel in the desert'
  },
  {
    slug: 'best-padel-clubs-chicago',
    title: 'Best Padel Clubs in Chicago (2025)',
    category: 'best-clubs',
    excerpt: 'Windy City embraces padel with 4+ indoor clubs. Padel Chicago (Lincoln Park), The Padel Club (suburbs), and growing metropolitan presence.',
    date: '2025-10-13',
    readTime: '6 min read',
    imageAlt: 'Chicago indoor padel courts'
  },
  {
    slug: 'best-padel-clubs-denver',
    title: 'Best Padel Clubs in Denver (2025)',
    category: 'best-clubs',
    excerpt: 'Mile High padel with 3+ clubs including Denver Padel Club and Padel Haus coming soon. Indoor facilities combat Colorado weather while maintaining mountain views.',
    date: '2025-10-13',
    readTime: '6 min read',
    imageAlt: 'Denver padel facilities'
  },
  {
    slug: 'best-padel-clubs-dallas',
    title: 'Best Padel Clubs in Dallas (2025)',
    category: 'best-clubs',
    excerpt: 'Dallas-Fort Worth padel boom with 3+ clubs and Padel Haus expansion coming. Rally Padel leads the charge with multiple courts and comprehensive programming.',
    date: '2025-10-13',
    readTime: '6 min read',
    imageAlt: 'Dallas padel courts'
  },
  {
    slug: 'best-padel-clubs-atlanta',
    title: 'Best Padel Clubs in Atlanta (2025)',
    category: 'best-clubs',
    excerpt: 'Hotlanta\'s padel scene with 3+ clubs including PATL\'s WPT courts. Georgia embraces the fastest-growing sport with year-round play.',
    date: '2025-10-13',
    readTime: '6 min read',
    imageAlt: 'Atlanta padel facilities'
  },
  {
    slug: 'best-padel-clubs-houston',
    title: 'Best Padel Clubs in Houston (2025)',
    category: 'best-clubs',
    excerpt: 'Space City launches padel with 3+ clubs. Padel Social Houston and Padel 10 bring the sport to Texas\'s largest city.',
    date: '2025-10-13',
    readTime: '6 min read',
    imageAlt: 'Houston padel courts'
  },
  {
    slug: 'best-padel-clubs-charlotte',
    title: 'Best Padel Clubs in Charlotte (2025)',
    category: 'best-clubs',
    excerpt: 'Queen City\'s padel presence with 2+ clubs. The Padel Club Charlotte and growing Carolina interest in the sport.',
    date: '2025-10-13',
    readTime: '5 min read',
    imageAlt: 'Charlotte padel facilities'
  },
  {
    slug: 'best-padel-clubs-san-antonio',
    title: 'Best Padel Clubs in San Antonio (2025)',
    category: 'best-clubs',
    excerpt: 'San Antonio padel with The King of Padel and 2+ locations. Texas tradition meets modern racket sport.',
    date: '2025-10-13',
    readTime: '5 min read',
    imageAlt: 'San Antonio padel courts'
  },
  {
    slug: 'best-padel-clubs-orlando',
    title: 'Best Padel Clubs in Orlando (2025)',
    category: 'best-clubs',
    excerpt: 'Orlando\'s padel scene growing with 2+ clubs. Florida\'s theme park capital adds padel to its entertainment options.',
    date: '2025-10-13',
    readTime: '5 min read',
    imageAlt: 'Orlando padel facilities'
  }
];

const categories = [
  { id: 'all', name: 'All Posts', icon: BookOpen },
  { id: 'best-clubs', name: 'Best Clubs', icon: Award },
  { id: 'how-to', name: 'How-To Guides', icon: TrendingUp },
  { id: 'equipment', name: 'Equipment', icon: MapPin },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Padel Courts Finder Blog
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Expert club reviews, how-to guides, equipment tips, and everything you need to master America&apos;s fastest-growing sport
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium hover:bg-purple-200 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Posts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp className="w-8 h-8 text-purple-600" />
            Featured Posts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.filter(post => post.featured).map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-purple-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <MapPin className="w-16 h-16 opacity-50" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-purple-700 text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-purple-600 font-semibold text-sm">
                    Read More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Posts Grid */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="w-8 h-8 text-purple-600" />
            Best Padel Clubs by City
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <MapPin className="w-12 h-12 opacity-50" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Stay Updated on Padel</h2>
          <p className="text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
            Get the latest club reviews, how-to guides, and padel news delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Link
            href="/search"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <MapPin className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Find Courts
            </h3>
            <p className="text-gray-600 text-sm">
              Search 525+ padel courts across America
            </p>
          </Link>
          <Link
            href="/get-started"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <BookOpen className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Get Started
            </h3>
            <p className="text-gray-600 text-sm">
              Learn how to start playing in 30 days
            </p>
          </Link>
          <Link
            href="/get-started/glossary"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <BookOpen className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Glossary
            </h3>
            <p className="text-gray-600 text-sm">
              100+ padel terms defined A-Z
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
