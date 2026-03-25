'use client';

import { useState } from 'react';
import Link from 'next/link';

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
  priceRange?: string;
}

const categories = [
  { id: 'all', name: 'All Posts' },
  { id: 'best-clubs', name: 'City Guides' },
  { id: 'equipment', name: 'Equipment' },
];

function CategoryTag({ category }: { category: string }) {
  if (category === 'equipment') {
    return <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-medium">Equipment</span>;
  }
  return <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">City Guide</span>;
}

function FeaturedCard({ post }: { post: BlogPostWithImage }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white border border-stone-200 rounded-lg overflow-hidden hover:shadow-md hover:border-stone-300 hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="aspect-[16/10] bg-stone-100 relative overflow-hidden">
        {post.imageUrl ? (
          <img
            src={post.imageUrl}
            alt={post.imageAlt}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-200" />
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2.5">
          <CategoryTag category={post.category} />
          <span className="text-xs text-stone-400">
            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
        <h3 className="text-lg font-bold text-[#1a1a1a] mb-1.5 group-hover:text-emerald-700 transition-colors">
          {post.title}
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed line-clamp-3 mb-3">
          {post.excerpt}
        </p>
        <span className="text-emerald-600 text-sm font-medium">
          Read more &rarr;
        </span>
      </div>
    </Link>
  );
}

function PostCard({ post }: { post: BlogPostWithImage }) {
  const isEquipment = post.category === 'equipment';

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block border rounded-lg overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${
        isEquipment
          ? 'bg-amber-50/40 border-amber-200/60 hover:border-amber-300'
          : 'bg-white border-stone-200 hover:border-stone-300'
      }`}
    >
      {!isEquipment && (
        <div className="aspect-video bg-stone-100 relative overflow-hidden">
          {post.imageUrl ? (
            <img
              src={post.imageUrl}
              alt={post.imageAlt}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-200" />
          )}
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <CategoryTag category={post.category} />
          {isEquipment && post.priceRange && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100/80 text-amber-800 font-medium">{post.priceRange}</span>
          )}
          <span className="text-xs text-stone-400">{post.readTime}</span>
        </div>
        <h3 className={`font-bold text-[#1a1a1a] mb-1.5 group-hover:text-emerald-700 transition-colors ${isEquipment ? 'text-base' : 'text-base'}`}>
          {post.title}
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}

const sectionTitles: Record<string, string> = {
  all: 'All Posts',
  'best-clubs': 'City Guides',
  equipment: 'Equipment & Gear',
};

export default function BlogContent({ posts }: { posts: BlogPostWithImage[] }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredPosts = activeFilter === 'all'
    ? posts
    : posts.filter(p => p.category === activeFilter);

  const featuredPosts = posts.filter(p => p.featured);

  return (
    <>
      {/* Filter Tabs */}
      <nav className="border-b border-stone-200 sticky top-0 z-30 bg-white/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 justify-center">
            {categories.map(category => {
              const isActive = activeFilter === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`relative py-3.5 text-sm transition-colors ${
                    isActive
                      ? 'font-semibold text-[#1a1a1a]'
                      : 'text-stone-400 hover:text-stone-600'
                  }`}
                >
                  {category.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Posts — always visible */}
        {featuredPosts.length > 0 && (
          <section className="mb-14">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-400 mb-5">
              Featured
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {featuredPosts.map(post => (
                <FeaturedCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Filtered Posts Grid */}
        {filteredPosts.length > 0 && (
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-400 mb-5">
              {sectionTitles[activeFilter] || 'All Posts'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPosts.map(post => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <div className="bg-[#1a1a1a] text-white rounded-xl p-8 text-center mt-16">
          <h2 className="text-2xl font-bold mb-3">Stay in the loop</h2>
          <p className="text-stone-400 mb-6 max-w-lg mx-auto">
            Club reviews, gear guides, and padel news — delivered when it matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-stone-900 bg-white text-sm"
            />
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-emerald-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          <Link
            href="/search"
            className="group border border-stone-200 rounded-lg p-5 hover:border-emerald-300 hover:shadow-sm transition-all"
          >
            <h3 className="font-bold text-[#1a1a1a] mb-1 group-hover:text-emerald-700 transition-colors">
              Find Courts
            </h3>
            <p className="text-stone-500 text-sm">
              Search 249+ padel courts across America
            </p>
          </Link>
          <Link
            href="/get-started"
            className="group border border-stone-200 rounded-lg p-5 hover:border-emerald-300 hover:shadow-sm transition-all"
          >
            <h3 className="font-bold text-[#1a1a1a] mb-1 group-hover:text-emerald-700 transition-colors">
              Get Started
            </h3>
            <p className="text-stone-500 text-sm">
              Learn how to start playing in 30 days
            </p>
          </Link>
          <Link
            href="/get-started/glossary"
            className="group border border-stone-200 rounded-lg p-5 hover:border-emerald-300 hover:shadow-sm transition-all"
          >
            <h3 className="font-bold text-[#1a1a1a] mb-1 group-hover:text-emerald-700 transition-colors">
              Glossary
            </h3>
            <p className="text-stone-500 text-sm">
              100+ padel terms defined A-Z
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
