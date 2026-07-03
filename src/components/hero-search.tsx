"use client";

import { useState, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export function HeroSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/search");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5" />
        <input
          type="text"
          placeholder="City, state, or ZIP code"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="glass-panel w-full pl-12 pr-4 py-4 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-turf/70 transition-shadow"
        />
      </div>
      <button
        onClick={handleSearch}
        className="rounded-xl bg-padel-green hover:bg-padel-green-dark active:scale-[0.98] text-white font-semibold px-7 py-4 transition-all whitespace-nowrap shadow-lg shadow-padel-green/25"
      >
        Find courts
      </button>
    </div>
  );
}
