'use client';

import { useState } from 'react';
import { trackPlausibleEvent } from '@/lib/analytics';

const FILTERS = [
  { key: 'all', label: 'All gifts' },
  { key: 'him', label: 'For him' },
  { key: 'her', label: 'For her' },
  { key: 'exp', label: 'Experiences' },
  { key: 'u150', label: 'Under $150' },
  { key: 'm150', label: '$150 to $400' },
  { key: 'p400', label: '$400 and up' },
] as const;

/**
 * Filter chips for the gift guide. Every card is server-rendered; this only
 * sets data-filter on #gift-guide and CSS in the page hides the cards and
 * sections that do not match, so search engines and no-JS readers see the
 * whole guide.
 */
export function GiftFilter() {
  const [active, setActive] = useState<string>('all');

  function choose(key: string) {
    setActive(key);
    const guide = document.getElementById('gift-guide');
    if (!guide) return;
    if (key === 'all') delete guide.dataset.filter;
    else guide.dataset.filter = key;
    trackPlausibleEvent('Gift filter', { filter: key });
    const top = guide.getBoundingClientRect().top + window.scrollY - 140;
    if (window.scrollY > top) window.scrollTo({ top, behavior: 'smooth' });
  }

  return (
    <div className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="toolbar" aria-label="Filter gifts">
      {FILTERS.map((f) => {
        const on = active === f.key;
        return (
          <button
            key={f.key}
            type="button"
            aria-pressed={on}
            onClick={() => choose(f.key)}
            className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
              on ? 'border-court bg-court text-white' : 'border-stone-300 bg-white text-stone-700 hover:border-stone-500'
            }`}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
