'use client';

import { useState } from 'react';
import Link from 'next/link';
import { RacketQuiz } from '@/components/racket-quiz';

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
  { id: 'equipment', name: 'Gear & Buying Guides' },
  { id: 'best-clubs', name: 'City Guides' },
  { id: 'how-to', name: 'How-To Guides' },
];

/* Dark court-panel card — the money section gets the brand treatment */
function GearCard({ post }: { post: BlogPostWithImage }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="reveal-up group relative grain bg-court text-white rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-court/30"
    >
      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-[11px] text-turf">buying guide</span>
          {post.priceRange && (
            <span className="font-mono text-[11px] text-white/40">{post.priceRange}</span>
          )}
        </div>
        <h3 className="font-display text-xl font-bold leading-snug mb-2 group-hover:text-turf transition-colors">
          {post.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed line-clamp-2 mb-4">
          {post.excerpt}
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-turf group-hover:gap-3 transition-all">
          Read the guide
          <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}

function CityCard({ post }: { post: BlogPostWithImage }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="reveal-up group block bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-padel-green hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="aspect-[16/10] bg-stone-100 relative overflow-hidden">
        {post.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.imageUrl}
            alt={post.imageAlt}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 grain bg-court" />
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2.5 text-xs text-stone-400">
          <span className="font-mono text-padel-green">city guide</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="font-display text-lg font-bold text-foreground mb-1.5 group-hover:text-padel-green transition-colors">
          {post.title}
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}

function HowToCard({ post }: { post: BlogPostWithImage }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="reveal-up group block bg-white border border-stone-200 rounded-2xl p-5 hover:border-padel-green hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-2.5 text-xs text-stone-400">
        <span className="font-mono text-padel-green">how-to</span>
        <span>{post.readTime}</span>
      </div>
      <h3 className="font-display text-lg font-bold text-foreground mb-1.5 group-hover:text-padel-green transition-colors">
        {post.title}
      </h3>
      <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">
        {post.excerpt}
      </p>
    </Link>
  );
}

export default function BlogContent({ posts }: { posts: BlogPostWithImage[] }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const gearOrder = [
    'best-padel-rackets-beginners',
    'best-padel-rackets-intermediate',
    'best-padel-rackets-2026',
    'best-padel-rackets-power',
    'best-padel-rackets-control',
    'padel-racket-shapes-explained',
    'padel-gifts-mothers-day-2026',
    'padel-gifts-fathers-day-2026',
  ];
  const gearRank = (slug: string) => {
    const i = gearOrder.indexOf(slug);
    return i === -1 ? gearOrder.length : i;
  };
  const gearPosts = posts
    .filter(p => p.category === 'equipment')
    .sort((a, b) => gearRank(a.slug) - gearRank(b.slug));
  const cityPosts = posts.filter(p => p.category === 'best-clubs');
  const howToPosts = posts.filter(p => p.category === 'how-to');
  const featuredCity = cityPosts.filter(p => p.featured);
  const restCity = cityPosts.filter(p => !p.featured);

  return (
    <>
      {/* Filter Tabs */}
      <nav className="border-b border-stone-200 sticky top-16 z-30 bg-white/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 md:gap-8 justify-start md:justify-center overflow-x-auto">
            {categories.map(category => {
              const isActive = activeFilter === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`relative py-3.5 text-sm whitespace-nowrap transition-colors ${
                    isActive
                      ? 'font-semibold text-foreground'
                      : 'text-stone-400 hover:text-stone-600'
                  }`}
                >
                  {category.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-padel-green rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Gear & Buying Guides — first, always */}
        {(activeFilter === 'all' || activeFilter === 'equipment') && gearPosts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-end justify-between mb-6">
              <div>
                <p className="font-mono text-sm text-padel-green mb-2">gear & buying guides</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold">
                  Find your racket
                </h2>
              </div>
            </div>
            <div className="mb-6">
              <RacketQuiz />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {gearPosts.map(post => (
                <GearCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* City Guides */}
        {(activeFilter === 'all' || activeFilter === 'best-clubs') && cityPosts.length > 0 && (
          <section className="mb-16">
            <div className="mb-6">
              <p className="font-mono text-sm text-padel-green mb-2">city guides</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                Where to play
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[...featuredCity, ...restCity].map(post => (
                <CityCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* How-To Guides */}
        {(activeFilter === 'all' || activeFilter === 'how-to') && howToPosts.length > 0 && (
          <section className="mb-16">
            <div className="mb-6">
              <p className="font-mono text-sm text-padel-green mb-2">how-to guides</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                Play better
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {howToPosts.map(post => (
                <HowToCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-5">
          <Link
            href="/search"
            className="group border border-stone-200 rounded-2xl p-5 hover:border-padel-green hover:shadow-md transition-all"
          >
            <h3 className="font-display font-bold text-foreground mb-1 group-hover:text-padel-green transition-colors">
              Find Courts
            </h3>
            <p className="text-stone-500 text-sm">
              Search 312+ padel clubs across America
            </p>
          </Link>
          <Link
            href="/get-started"
            className="group border border-stone-200 rounded-2xl p-5 hover:border-padel-green hover:shadow-md transition-all"
          >
            <h3 className="font-display font-bold text-foreground mb-1 group-hover:text-padel-green transition-colors">
              Get Started
            </h3>
            <p className="text-stone-500 text-sm">
              Learn how to start playing in 30 days
            </p>
          </Link>
          <Link
            href="/get-started/glossary"
            className="group border border-stone-200 rounded-2xl p-5 hover:border-padel-green hover:shadow-md transition-all"
          >
            <h3 className="font-display font-bold text-foreground mb-1 group-hover:text-padel-green transition-colors">
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
