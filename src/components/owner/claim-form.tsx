"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import type { ClubIndexEntry } from "@/lib/owner/club-lookup";

const ROLES = ["Owner", "Manager", "Staff"] as const;

function norm(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function ClaimForm({ clubs }: { clubs: ClubIndexEntry[] }) {
  const params = useSearchParams();
  const preset = params.get("club") ?? "";
  const [selected, setSelected] = useState<ClubIndexEntry | null>(() => clubs.find((c) => c.slug === preset) ?? null);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "verified" | "pending" | "error">("idle");
  const [error, setError] = useState("");
  const [sentTo, setSentTo] = useState("");

  const results = useMemo(() => {
    const q = norm(query);
    if (q.length < 2) return [];
    const words = q.split(" ");
    return clubs
      .filter((c) => {
        const hay = norm(`${c.name} ${c.city} ${c.state}`);
        return words.every((w) => hay.includes(w));
      })
      .slice(0, 8);
  }, [clubs, query]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selected) return;
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/claim/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: selected.slug,
          name: String(data.get("name") ?? ""),
          role: String(data.get("role") ?? ""),
          email,
          consent: data.get("consent") === "on",
          website: String(data.get("website") ?? ""),
        }),
      });
      const j = (await res.json().catch(() => ({}))) as { ok?: boolean; status?: string; error?: string };
      if (!res.ok || !j.ok) {
        setStatus("error");
        setError(
          res.status === 429
            ? "Too many requests from here. Please try again in an hour."
            : res.status === 400
              ? "Please check your name, role and email, and tick the box."
              : "That did not go through. Please try again, or email info@padelcourtsfinder.com."
        );
        return;
      }
      setSentTo(email);
      setStatus(j.status === "verified" ? "verified" : "pending");
    } catch {
      setStatus("error");
      setError("That did not go through. Please try again, or email info@padelcourtsfinder.com.");
    }
  }

  if (status === "verified") {
    return (
      <div className="club-form-done" role="status">
        <p className="font-semibold text-foreground">Check your email</p>
        <p className="mt-1 text-sm text-muted-foreground">
          We sent a sign-in link for {selected?.name} to {sentTo}. It works for 30 minutes. If it does not arrive in a few
          minutes, check your spam folder.
        </p>
      </div>
    );
  }
  if (status === "pending") {
    return (
      <div className="club-form-done" role="status">
        <p className="font-semibold text-foreground">Thanks, we have your request</p>
        <p className="mt-1 text-sm text-muted-foreground">
          We&apos;ll verify and email you within one business day at {sentTo}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="club-hp" aria-hidden="true">
        <label>
          Leave this empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <p className="block text-sm font-medium mb-1.5">Your club</p>
        {selected ? (
          <div className="flex items-center justify-between gap-3 rounded-xl border border-border px-3 py-2.5">
            <div className="min-w-0">
              <p className="font-semibold truncate">{selected.name}</p>
              <p className="text-sm text-muted-foreground">
                {selected.city}, {selected.state}
              </p>
            </div>
            <button
              type="button"
              className="text-sm text-primary hover:underline shrink-0"
              onClick={() => {
                setSelected(null);
                setQuery("");
              }}
            >
              Change
            </button>
          </div>
        ) : (
          <div>
            <label htmlFor="claim-search" className="sr-only">
              Search by club name or city
            </label>
            <input
              id="claim-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by club name or city"
              autoComplete="off"
              className="club-input"
            />
            {results.length > 0 && (
              <ul className="mt-2 rounded-xl border border-border divide-y divide-border overflow-hidden" role="listbox">
                {results.map((c) => (
                  <li key={c.slug}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={false}
                      onClick={() => setSelected(c)}
                      className="w-full text-left px-3 py-2.5 hover:bg-muted"
                    >
                      <span className="font-medium">{c.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {" "}
                        {c.city}, {c.state}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {query.trim().length >= 2 && results.length === 0 && (
              <p className="mt-2 text-sm text-muted-foreground">No club matches that. Try the city name.</p>
            )}
          </div>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="claim-name" className="block text-sm font-medium mb-1.5">
            Your name
          </label>
          <input id="claim-name" name="name" required minLength={2} maxLength={80} autoComplete="name" className="club-input" />
        </div>
        <div>
          <label htmlFor="claim-role" className="block text-sm font-medium mb-1.5">
            Your role
          </label>
          <select id="claim-role" name="role" required defaultValue="" className="club-input club-select">
            <option value="" disabled>
              Choose one
            </option>
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="claim-email" className="block text-sm font-medium mb-1.5">
          Work email
        </label>
        <input
          id="claim-email"
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          inputMode="email"
          className="club-input"
        />
        <p className="mt-1.5 text-xs text-muted-foreground">
          An address on your club&apos;s website domain is verified right away. Other addresses are checked by hand.
        </p>
      </div>

      <label className="club-consent">
        <input type="checkbox" name="consent" required />
        <span>I work at this club and I am allowed to update its listing. You can email me about it.</span>
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={!selected || status === "sending"}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-court px-5 text-sm font-semibold text-white transition-colors hover:bg-court-panel disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Claim this listing"}
        </button>
        {!selected && <p className="text-sm text-muted-foreground">Pick your club first.</p>}
      </div>
      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
