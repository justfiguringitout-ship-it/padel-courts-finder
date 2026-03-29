'use client';

import Link from 'next/link';
import { TrackedLink } from '@/components/TrackedLink';

const products = [
  {
    name: 'Babolat Contact',
    tagline: 'Best beginner racket',
    price: '$89.95',
    url: 'https://www.amazon.com/dp/B0BBPZLRVP?tag=padel02-20',
  },
  {
    name: 'HEAD Padel Pro S',
    tagline: 'Official WPT match balls',
    price: '$13.91',
    url: 'https://www.amazon.com/dp/B07D56XDNL?tag=padel02-20',
  },
  {
    name: 'Wilson Pro Overgrip 12-Pack',
    tagline: 'Most popular overgrip',
    price: '$27.00',
    url: 'https://www.amazon.com/dp/B002GUEXTQ?tag=padel02-20',
  },
];

export function GearWidget() {
  return (
    <section className="mt-12 border-t pt-8">
      <h3 className="text-lg font-semibold text-muted-foreground mb-4">
        Gear up for your visit
      </h3>
      <div className="grid sm:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white border rounded-lg p-4 flex flex-col"
          >
            <div className="text-sm font-bold text-foreground">{product.name}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{product.tagline}</div>
            <div className="mt-2">
              <span className="inline-block text-xs font-semibold bg-stone-900 text-white px-2 py-0.5 rounded">
                {product.price}
              </span>
            </div>
            <TrackedLink
              href={product.url}
              type="affiliate"
              productName={product.name}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
            >
              Shop on Amazon &rarr;
            </TrackedLink>
          </div>
        ))}
      </div>
      <p className="text-sm text-muted-foreground mt-4">
        New to padel? See our{' '}
        <Link href="/blog/best-padel-rackets-beginners" className="text-primary hover:underline">
          complete beginner gear guide &rarr;
        </Link>
      </p>
    </section>
  );
}
