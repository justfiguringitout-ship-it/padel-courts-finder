"use client";

import { useMemo, useState } from "react";

interface ClubOption {
  name: string;
  slug: string;
  city: string;
  stateCode: string;
}

export function BadgeGenerator({ clubs }: { clubs: ClubOption[] }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<ClubOption | null>(null);
  const [copied, setCopied] = useState(false);

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return clubs
      .filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.city.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query, clubs]);

  const targetUrl = selected
    ? `https://www.padelcourtsfinder.com/courts/${selected.slug}`
    : "https://www.padelcourtsfinder.com";

  const embedCode = `<a href="${targetUrl}" target="_blank" rel="noopener">
  <img src="https://www.padelcourtsfinder.com/badge.svg" alt="${
    selected ? `${selected.name} is featured on Padel Courts Finder` : "Featured on Padel Courts Finder"
  }" width="240" height="64" loading="lazy" />
</a>`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(embedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — the code is selectable below
    }
  };

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8">
      <label htmlFor="club-search" className="block text-sm text-white/70 mb-2">
        Find your club
      </label>
      <div className="relative">
        <input
          id="club-search"
          value={selected ? selected.name : query}
          onChange={(e) => {
            setSelected(null);
            setQuery(e.target.value);
          }}
          placeholder="Start typing your club name or city…"
          className="glass-panel w-full rounded-xl px-4 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-turf/70"
        />
        {!selected && matches.length > 0 && (
          <ul className="absolute z-10 mt-2 w-full rounded-xl bg-white text-stone-900 shadow-xl overflow-hidden">
            {matches.map((c) => (
              <li key={c.slug}>
                <button
                  onClick={() => {
                    setSelected(c);
                    setQuery("");
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-stone-100 transition-colors"
                >
                  <span className="font-medium">{c.name}</span>
                  <span className="text-stone-400 text-sm ml-2">
                    {c.city}, {c.stateCode}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6 items-start">
        <div>
          <div className="text-sm text-white/70 mb-3">Preview</div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/badge.svg" alt="Featured on Padel Courts Finder badge" width={240} height={64} />
          <p className="text-xs text-white/40 mt-3">
            {selected
              ? `Links to your club page: /courts/${selected.slug}`
              : "Select your club above and the badge will link straight to your club page."}
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-white/70">Embed code</span>
            <button
              onClick={copy}
              className="rounded-lg bg-padel-green hover:bg-padel-green-dark active:scale-[0.98] text-white text-xs font-semibold px-3.5 py-2 transition-all"
            >
              {copied ? "Copied ✓" : "Copy code"}
            </button>
          </div>
          <pre className="glass-panel rounded-xl p-4 text-xs text-turf/90 overflow-x-auto whitespace-pre-wrap break-all font-mono">
            {embedCode}
          </pre>
        </div>
      </div>
    </div>
  );
}
