/**
 * Storage for owner claims, listing edits and owner photos.
 *
 * Production: Supabase project "padel-directory" over plain REST with the
 * service role key (server only; RLS is on with no public policies).
 *
 * Local testing only: when PCF_OWNER_DEV_DIR is set and we are NOT on Vercel,
 * everything is kept in JSON files and a photos folder under that directory,
 * so the whole flow can be exercised without the service role key.
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";

export const PHOTO_BUCKET = "pcf-owner-photos";

export type ClaimStatus = "pending_manual" | "verified" | "rejected";
export type EditStatus = "pending" | "approved" | "rejected" | "applied";
export type ClaimRole = "Owner" | "Manager" | "Staff";

export interface ClaimRow {
  id: string;
  club_slug: string;
  club_name: string;
  email: string;
  name: string;
  role: ClaimRole;
  status: ClaimStatus;
  verified_via: "domain" | "manual" | null;
  created_at: string;
  verified_at: string | null;
}

export interface EditRow {
  id: string;
  claim_id: string;
  club_slug: string;
  email: string;
  changes: Record<string, unknown>;
  current: Record<string, unknown>;
  photo_paths: string[];
  note: string | null;
  status: EditStatus;
  created_at: string;
  reviewed_at: string | null;
  applied_at: string | null;
}

export type NewClaim = Omit<ClaimRow, "id" | "created_at">;
export type NewEdit = Omit<EditRow, "id" | "created_at" | "reviewed_at" | "applied_at">;

export interface OwnerStore {
  readonly kind: "supabase" | "dev";
  insertClaim(row: NewClaim): Promise<ClaimRow>;
  getClaim(id: string): Promise<ClaimRow | null>;
  findClaims(email: string, slug: string): Promise<ClaimRow[]>;
  countClaimsSince(email: string, sinceIso: string): Promise<number>;
  /** Updates only when the row still has `onlyIfStatus` (when given). Returns null when nothing matched. */
  updateClaim(id: string, patch: Partial<ClaimRow>, onlyIfStatus?: ClaimStatus): Promise<ClaimRow | null>;
  deleteClaim(id: string): Promise<void>;
  insertEdit(row: NewEdit): Promise<EditRow>;
  getEdit(id: string): Promise<EditRow | null>;
  listEditsForClaim(claimId: string): Promise<EditRow[]>;
  listEditsByStatus(status: EditStatus): Promise<EditRow[]>;
  countEditsSince(claimId: string, sinceIso: string): Promise<number>;
  updateEdit(id: string, patch: Partial<EditRow>, onlyIfStatus?: EditStatus): Promise<EditRow | null>;
  putPhoto(objectPath: string, bytes: Buffer, contentType: string): Promise<void>;
  getPhoto(objectPath: string): Promise<Buffer | null>;
  /** A short-lived URL Dito can open (signed URL in production, data URL locally). */
  photoUrl(objectPath: string, seconds: number): Promise<string | null>;
  deletePhotos(objectPaths: string[]): Promise<void>;
}

export const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export const PHOTO_PATH_RE = /^[a-z0-9][a-z0-9/_-]{0,200}\.webp$/;

function assertId(id: string) {
  if (!UUID_RE.test(id)) throw new Error("bad id");
}

function assertPhotoPath(p: string) {
  if (!PHOTO_PATH_RE.test(p) || p.includes("..") || p.includes("//")) throw new Error("bad photo path");
}

// ------------------------------------------------------------------ Supabase

class SupabaseStore implements OwnerStore {
  readonly kind = "supabase" as const;
  constructor(
    private url: string,
    private key: string
  ) {}

  private headers(extra: Record<string, string> = {}): Record<string, string> {
    return { apikey: this.key, Authorization: `Bearer ${this.key}`, ...extra };
  }

  private async rest<T>(method: string, pathAndQuery: string, body?: unknown, prefer?: string): Promise<T> {
    const res = await fetch(`${this.url}/rest/v1/${pathAndQuery}`, {
      method,
      headers: this.headers({
        "Content-Type": "application/json",
        ...(prefer ? { Prefer: prefer } : {}),
      }),
      body: body === undefined ? undefined : JSON.stringify(body),
      cache: "no-store",
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`supabase ${method} ${pathAndQuery.split("?")[0]} ${res.status}: ${text.slice(0, 300)}`);
    }
    if (res.status === 204) return undefined as T;
    const text = await res.text();
    return (text ? JSON.parse(text) : undefined) as T;
  }

  private async count(table: string, filter: string): Promise<number> {
    const res = await fetch(`${this.url}/rest/v1/${table}?select=id&${filter}`, {
      method: "HEAD",
      headers: this.headers({ Prefer: "count=exact", Range: "0-0" }),
      cache: "no-store",
    });
    const range = res.headers.get("content-range") ?? "";
    const n = Number(range.split("/")[1]);
    return Number.isFinite(n) ? n : 0;
  }

  async insertClaim(row: NewClaim): Promise<ClaimRow> {
    const rows = await this.rest<ClaimRow[]>("POST", "pcf_owner_claims", row, "return=representation");
    return rows[0];
  }
  async getClaim(id: string): Promise<ClaimRow | null> {
    if (!UUID_RE.test(id)) return null;
    const rows = await this.rest<ClaimRow[]>("GET", `pcf_owner_claims?id=eq.${id}&select=*`);
    return rows[0] ?? null;
  }
  async findClaims(email: string, slug: string): Promise<ClaimRow[]> {
    return this.rest<ClaimRow[]>(
      "GET",
      `pcf_owner_claims?email=eq.${encodeURIComponent(email)}&club_slug=eq.${encodeURIComponent(slug)}&select=*&order=created_at.desc`
    );
  }
  async countClaimsSince(email: string, sinceIso: string): Promise<number> {
    return this.count("pcf_owner_claims", `email=eq.${encodeURIComponent(email)}&created_at=gte.${encodeURIComponent(sinceIso)}`);
  }
  async updateClaim(id: string, patch: Partial<ClaimRow>, onlyIfStatus?: ClaimStatus): Promise<ClaimRow | null> {
    assertId(id);
    const cond = onlyIfStatus ? `&status=eq.${onlyIfStatus}` : "";
    const rows = await this.rest<ClaimRow[]>("PATCH", `pcf_owner_claims?id=eq.${id}${cond}`, patch, "return=representation");
    return rows[0] ?? null;
  }
  async deleteClaim(id: string): Promise<void> {
    assertId(id);
    await this.rest("DELETE", `pcf_owner_claims?id=eq.${id}`);
  }
  async insertEdit(row: NewEdit): Promise<EditRow> {
    const rows = await this.rest<EditRow[]>("POST", "pcf_listing_edits", row, "return=representation");
    return rows[0];
  }
  async getEdit(id: string): Promise<EditRow | null> {
    if (!UUID_RE.test(id)) return null;
    const rows = await this.rest<EditRow[]>("GET", `pcf_listing_edits?id=eq.${id}&select=*`);
    return rows[0] ?? null;
  }
  async listEditsForClaim(claimId: string): Promise<EditRow[]> {
    assertId(claimId);
    return this.rest<EditRow[]>("GET", `pcf_listing_edits?claim_id=eq.${claimId}&select=*&order=created_at.desc&limit=50`);
  }
  async listEditsByStatus(status: EditStatus): Promise<EditRow[]> {
    return this.rest<EditRow[]>("GET", `pcf_listing_edits?status=eq.${status}&select=*&order=created_at.asc&limit=200`);
  }
  async countEditsSince(claimId: string, sinceIso: string): Promise<number> {
    assertId(claimId);
    return this.count("pcf_listing_edits", `claim_id=eq.${claimId}&created_at=gte.${encodeURIComponent(sinceIso)}`);
  }
  async updateEdit(id: string, patch: Partial<EditRow>, onlyIfStatus?: EditStatus): Promise<EditRow | null> {
    assertId(id);
    const cond = onlyIfStatus ? `&status=eq.${onlyIfStatus}` : "";
    const rows = await this.rest<EditRow[]>("PATCH", `pcf_listing_edits?id=eq.${id}${cond}`, patch, "return=representation");
    return rows[0] ?? null;
  }
  async putPhoto(objectPath: string, bytes: Buffer, contentType: string): Promise<void> {
    assertPhotoPath(objectPath);
    const res = await fetch(`${this.url}/storage/v1/object/${PHOTO_BUCKET}/${objectPath}`, {
      method: "POST",
      headers: this.headers({ "Content-Type": contentType, "x-upsert": "false" }),
      body: new Uint8Array(bytes),
    });
    if (!res.ok) throw new Error(`storage upload ${res.status}: ${(await res.text().catch(() => "")).slice(0, 200)}`);
  }
  async getPhoto(objectPath: string): Promise<Buffer | null> {
    assertPhotoPath(objectPath);
    const res = await fetch(`${this.url}/storage/v1/object/authenticated/${PHOTO_BUCKET}/${objectPath}`, {
      headers: this.headers(),
      cache: "no-store",
    });
    if (!res.ok) return null;
    return Buffer.from(await res.arrayBuffer());
  }
  async photoUrl(objectPath: string, seconds: number): Promise<string | null> {
    assertPhotoPath(objectPath);
    const res = await fetch(`${this.url}/storage/v1/object/sign/${PHOTO_BUCKET}/${objectPath}`, {
      method: "POST",
      headers: this.headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ expiresIn: seconds }),
      cache: "no-store",
    });
    if (!res.ok) return null;
    const j = (await res.json()) as { signedURL?: string };
    return j.signedURL ? `${this.url}/storage/v1${j.signedURL}` : null;
  }
  async deletePhotos(objectPaths: string[]): Promise<void> {
    if (!objectPaths.length) return;
    objectPaths.forEach(assertPhotoPath);
    await fetch(`${this.url}/storage/v1/object/${PHOTO_BUCKET}`, {
      method: "DELETE",
      headers: this.headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ prefixes: objectPaths }),
    });
  }
}

// ------------------------------------------------------------------ local dev files

interface DevDb {
  claims: ClaimRow[];
  edits: EditRow[];
}

class DevFileStore implements OwnerStore {
  readonly kind = "dev" as const;
  constructor(private dir: string) {}

  private get dbPath() {
    return path.join(this.dir, "db.json");
  }

  private async read(): Promise<DevDb> {
    try {
      return JSON.parse(await fs.readFile(this.dbPath, "utf8")) as DevDb;
    } catch {
      return { claims: [], edits: [] };
    }
  }

  private async write(db: DevDb): Promise<void> {
    await fs.mkdir(this.dir, { recursive: true });
    const tmp = `${this.dbPath}.${process.pid}.tmp`;
    await fs.writeFile(tmp, JSON.stringify(db, null, 2));
    await fs.rename(tmp, this.dbPath);
  }

  async insertClaim(row: NewClaim): Promise<ClaimRow> {
    const db = await this.read();
    const full: ClaimRow = { ...row, id: randomUUID(), created_at: new Date().toISOString() };
    db.claims.push(full);
    await this.write(db);
    return full;
  }
  async getClaim(id: string) {
    return (await this.read()).claims.find((c) => c.id === id) ?? null;
  }
  async findClaims(email: string, slug: string) {
    return (await this.read()).claims
      .filter((c) => c.email === email && c.club_slug === slug)
      .sort((a, b) => b.created_at.localeCompare(a.created_at));
  }
  async countClaimsSince(email: string, sinceIso: string) {
    return (await this.read()).claims.filter((c) => c.email === email && c.created_at >= sinceIso).length;
  }
  async updateClaim(id: string, patch: Partial<ClaimRow>, onlyIfStatus?: ClaimStatus) {
    const db = await this.read();
    const row = db.claims.find((c) => c.id === id && (!onlyIfStatus || c.status === onlyIfStatus));
    if (!row) return null;
    Object.assign(row, patch, { id: row.id });
    await this.write(db);
    return row;
  }
  async deleteClaim(id: string) {
    const db = await this.read();
    db.claims = db.claims.filter((c) => c.id !== id);
    db.edits = db.edits.filter((e) => e.claim_id !== id);
    await this.write(db);
  }
  async insertEdit(row: NewEdit): Promise<EditRow> {
    const db = await this.read();
    const full: EditRow = {
      ...row,
      id: randomUUID(),
      created_at: new Date().toISOString(),
      reviewed_at: null,
      applied_at: null,
    };
    db.edits.push(full);
    await this.write(db);
    return full;
  }
  async getEdit(id: string) {
    return (await this.read()).edits.find((e) => e.id === id) ?? null;
  }
  async listEditsForClaim(claimId: string) {
    return (await this.read()).edits
      .filter((e) => e.claim_id === claimId)
      .sort((a, b) => b.created_at.localeCompare(a.created_at));
  }
  async listEditsByStatus(status: EditStatus) {
    return (await this.read()).edits.filter((e) => e.status === status);
  }
  async countEditsSince(claimId: string, sinceIso: string) {
    return (await this.read()).edits.filter((e) => e.claim_id === claimId && e.created_at >= sinceIso).length;
  }
  async updateEdit(id: string, patch: Partial<EditRow>, onlyIfStatus?: EditStatus) {
    const db = await this.read();
    const row = db.edits.find((e) => e.id === id && (!onlyIfStatus || e.status === onlyIfStatus));
    if (!row) return null;
    Object.assign(row, patch, { id: row.id });
    await this.write(db);
    return row;
  }
  private photoFile(objectPath: string) {
    assertPhotoPath(objectPath);
    return path.join(this.dir, "photos", objectPath);
  }
  async putPhoto(objectPath: string, bytes: Buffer) {
    const f = this.photoFile(objectPath);
    await fs.mkdir(path.dirname(f), { recursive: true });
    await fs.writeFile(f, bytes);
  }
  async getPhoto(objectPath: string) {
    try {
      return await fs.readFile(this.photoFile(objectPath));
    } catch {
      return null;
    }
  }
  async photoUrl(objectPath: string) {
    const b = await this.getPhoto(objectPath);
    return b ? `data:image/webp;base64,${b.toString("base64")}` : null;
  }
  async deletePhotos(objectPaths: string[]) {
    await Promise.all(objectPaths.map((p) => fs.rm(this.photoFile(p), { force: true })));
  }
}

/** Dev mode is only ever possible off Vercel, with PCF_OWNER_DEV_DIR set. */
export function devDir(): string | null {
  if (process.env.VERCEL) return null;
  const d = process.env.PCF_OWNER_DEV_DIR?.trim();
  return d ? d : null;
}

let cached: OwnerStore | null | undefined;

/** The configured store, or null when Supabase is not set up yet. */
export function getStore(): OwnerStore | null {
  if (cached !== undefined) return cached;
  const dev = devDir();
  if (dev) {
    cached = new DevFileStore(dev);
    return cached;
  }
  const url = (process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "").replace(/\/+$/, "");
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  cached = url && key ? new SupabaseStore(url, key) : null;
  return cached;
}
