/**
 * Storage for Club Spotlight events (table public.pcf_spotlight_events).
 *
 * Production: Supabase project "padel-directory" over plain REST with the
 * service role key (server only; RLS is on with no policies).
 *
 * Local testing only: when PCF_SPOTLIGHT_DEV_FILE is set and we are NOT on
 * Vercel, rows are appended to that JSON-lines file instead.
 *
 * No Next imports, so scripts/spotlight-report.ts can use it too.
 */
import { promises as fs } from "node:fs";
import { randomUUID } from "node:crypto";
import type { SpotlightEventRow } from "./spotlight-events";

export interface SpotlightStore {
  readonly kind: "supabase" | "dev";
  insert(row: SpotlightEventRow): Promise<void>;
  /** True when the same visitor sent the same event (same kind, placement, path) since `sinceIso`. */
  hasRecent(row: SpotlightEventRow, sinceIso: string): Promise<boolean>;
  /** Every event for one spotlight since `sinceIso`, oldest first. */
  listEvents(slug: string, sinceIso?: string, untilIso?: string): Promise<SpotlightEventRow[]>;
}

const TABLE = "pcf_spotlight_events";
const SLUG_RE = /^[a-z0-9-]{1,120}$/;

function eqOrNull(col: string, v: string | null): string {
  return v === null ? `${col}=is.null` : `${col}=eq.${encodeURIComponent(v)}`;
}

class SupabaseSpotlightStore implements SpotlightStore {
  readonly kind = "supabase" as const;
  constructor(
    private url: string,
    private key: string
  ) {}

  private headers(extra: Record<string, string> = {}): Record<string, string> {
    return { apikey: this.key, Authorization: `Bearer ${this.key}`, ...extra };
  }

  async insert(row: SpotlightEventRow): Promise<void> {
    const res = await fetch(`${this.url}/rest/v1/${TABLE}`, {
      method: "POST",
      headers: this.headers({ "Content-Type": "application/json", Prefer: "return=minimal" }),
      body: JSON.stringify(row),
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`supabase insert ${TABLE} ${res.status}: ${(await res.text().catch(() => "")).slice(0, 300)}`);
  }

  async hasRecent(row: SpotlightEventRow, sinceIso: string): Promise<boolean> {
    const q = [
      `visitor_hash=eq.${row.visitor_hash}`,
      `spotlight_slug=eq.${encodeURIComponent(row.spotlight_slug)}`,
      `event=eq.${row.event}`,
      `placement=eq.${row.placement}`,
      eqOrNull("kind", row.kind),
      eqOrNull("path", row.path),
      `created_at=gte.${encodeURIComponent(sinceIso)}`,
      "select=id",
      "limit=1",
    ].join("&");
    const res = await fetch(`${this.url}/rest/v1/${TABLE}?${q}`, { headers: this.headers(), cache: "no-store" });
    if (!res.ok) return false;
    const rows = (await res.json()) as unknown[];
    return rows.length > 0;
  }

  async listEvents(slug: string, sinceIso?: string, untilIso?: string): Promise<SpotlightEventRow[]> {
    if (!SLUG_RE.test(slug)) throw new Error("bad slug");
    const out: SpotlightEventRow[] = [];
    const page = 1000;
    for (let from = 0; from < 200_000; from += page) {
      const filters = [
        `spotlight_slug=eq.${slug}`,
        sinceIso ? `created_at=gte.${encodeURIComponent(sinceIso)}` : "",
        untilIso ? `created_at=lt.${encodeURIComponent(untilIso)}` : "",
        "select=*",
        "order=created_at.asc,id.asc",
      ]
        .filter(Boolean)
        .join("&");
      const res = await fetch(`${this.url}/rest/v1/${TABLE}?${filters}`, {
        headers: this.headers({ Range: `${from}-${from + page - 1}`, "Range-Unit": "items" }),
        cache: "no-store",
      });
      if (!res.ok) throw new Error(`supabase select ${TABLE} ${res.status}: ${(await res.text().catch(() => "")).slice(0, 300)}`);
      const rows = (await res.json()) as SpotlightEventRow[];
      out.push(...rows);
      if (rows.length < page) break;
    }
    return out;
  }
}

class DevFileSpotlightStore implements SpotlightStore {
  readonly kind = "dev" as const;
  constructor(private file: string) {}

  private async all(): Promise<SpotlightEventRow[]> {
    const text = await fs.readFile(this.file, "utf8").catch(() => "");
    return text
      .split("\n")
      .filter(Boolean)
      .map((l) => JSON.parse(l) as SpotlightEventRow);
  }
  async insert(row: SpotlightEventRow): Promise<void> {
    const full = { id: randomUUID(), created_at: new Date().toISOString(), ...row };
    await fs.appendFile(this.file, JSON.stringify(full) + "\n");
  }
  async hasRecent(row: SpotlightEventRow, sinceIso: string): Promise<boolean> {
    return (await this.all()).some(
      (r) =>
        r.visitor_hash === row.visitor_hash &&
        r.spotlight_slug === row.spotlight_slug &&
        r.event === row.event &&
        r.placement === row.placement &&
        r.kind === row.kind &&
        r.path === row.path &&
        (r.created_at ?? "") >= sinceIso
    );
  }
  async listEvents(slug: string, sinceIso?: string, untilIso?: string): Promise<SpotlightEventRow[]> {
    return (await this.all()).filter(
      (r) =>
        r.spotlight_slug === slug &&
        (!sinceIso || (r.created_at ?? "") >= sinceIso) &&
        (!untilIso || (r.created_at ?? "") < untilIso)
    );
  }
}

let cached: SpotlightStore | null | undefined;

export function getSpotlightStore(): SpotlightStore | null {
  if (cached !== undefined) return cached;
  const devFile = process.env.PCF_SPOTLIGHT_DEV_FILE;
  if (devFile && !process.env.VERCEL) {
    cached = new DevFileSpotlightStore(devFile);
    return cached;
  }
  const url = (process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "").replace(/\/+$/, "");
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  cached = url && key ? new SupabaseSpotlightStore(url, key) : null;
  return cached;
}
