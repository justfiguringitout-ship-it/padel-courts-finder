'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, MapPin, TrendingUp, BookOpen, Award, Zap } from 'lucide-react';

export interface BlogPostWithImage {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageAlt: string;
  imageUrl: string | null;
  featured?: boolean;
}

const categories = [
  { id: 'all', name: 'All Posts', icon: BookOpen },
  { id: 'best-clubs', name: 'Best Clubs', icon: Award },
  { id: 'equipment', name: 'Equipment', icon: Zap },
];

function PostCard({ post, size = 'normal' }: { post: BlogPostWithImage; size?: 'featured' | 'normal' }) {
  const isEquipment = post.category === 'equipment';
  const gradientClass = isEquipment
    ? 'from-amber-400 to-orange-600'
    : 'from-blue-400 to-blue-600';
  const FallbackIcon = isEquipment ? Zap : MapPin;
  const iconSize = size === 'featured' ? 'w-16 h-16' : 'w-12 h-12';

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
    >
      <div className={`aspect-video bg-gradient-to-br ${gradientClass} relative overflow-hidden`}>
        {post.imageUrl ? (
          <img
            src={post.imageUrl}
            alt={post.imageAlt}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <FallbackIcon className={`${iconSize} opacity-50`} />
          </div>
        )}
        {size === 'featured' && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 text-purple-700 text-sm font-semibold rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>
      <div className={size === 'featured' ? 'p-6' : 'p-5'}>
        <div className={`flex items-center gap-2 ${size === 'featured' ? 'text-sm' : 'text-xs'} text-gray-500 mb-2`}>
          <Calendar className={size === 'featured' ? 'w-4 h-4' : 'w-3 h-3'} />
          <span>
            {new Date(post.date).toLocaleDateString('en-US',
              size === 'featured'
                ? { month: 'short', day: 'numeric', year: 'numeric' }
                : { month: 'short', year: 'numeric' }
            )}
          </span>
          <span>&bull;</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className={`${size === 'featured' ? 'text-xl' : 'text-lg'} font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors`}>
          {post.title}
        </h3>
        <p className={`text-gray-600 text-sm ${size === 'featured' ? 'line-clamp-3' : 'line-clamp-2'}`}>
          {post.excerpt}
        </p>
        {size === 'featured' && (
          <div className="mt-4 flex items-center text-purple-600 font-semibold text-sm">
            Read More &rarr;
          </div>
        )}
      </div>
    </Link>
  );
}

const sectionMeta: Record<string, { title: string; Icon: React.ComponentType<{ className?: string }> }> = {
  all: { title: 'All Posts', Icon: BookOpen },
  'best-clubs': { title: 'Best Padel Clubs by City', Icon: Award },
  equipment: { title: 'Equipment & Gear Guides', Icon: Zap },
};

export default function BlogContent({ posts }: { posts: BlogPostWithImage[] }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredPosts = activeFilter === 'all'
    ? posts
    : posts.filter(p => p.category === activeFilter);

  const featuredPosts = posts.filter(p => p.featured);
  const { title: sectionTitle, Icon: SectionIcon } = sectionMeta[activeFilter] || sectionMeta.all;

  return (
    <>
      {/* Category Filter */}
      <section className="bg-white border-b shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => {
              const Icon = category.icon;
              const isActive = activeFilter === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  }`}
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
        {/* Featured Posts — always visible */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-8 h-8 text-purple-600" />
              Featured Posts
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map(post => (
                <PostCard key={post.slug} post={post} size="featured" />
              ))}
            </div>
          </div>
        )}

        {/* Filtered Posts Grid */}
        {filteredPosts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <SectionIcon className="w-8 h-8 text-purple-600" />
              {sectionTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map(post => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        )}

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
              Search 249+ padel courts across America
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
    </>
  );
}
