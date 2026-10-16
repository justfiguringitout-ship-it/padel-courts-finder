/**
 * Signed tokens for "Claim your listing" (HMAC-SHA256 with CLAIM_SECRET).
 *
 * Format: base64url(JSON payload) "." base64url(signature). Each kind of token
 * is signed with its own derived key, so a session cookie can never be passed
 * off as a review link or the other way round. Tokens are never logged.
 */
import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

export type TokenKind = "signin" | "session" | "review" | "clubconfirm" | "admin";

export interface SigninPayload {
  k: "signin";
  /** claim id */
  c: string;
  /** random nonce, so a used link can be refused */
  n: string;
  exp: number;
}

export interface SessionPayload {
  k: "session";
  c: string;
  /** club slug */
  s: string;
  exp: number;
}

export interface ReviewPayload {
  k: "review";
  /** what is being reviewed */
  t: "claim" | "edit";
  id: string;
  exp: number;
}

/** Sent to the club's public address: "is this person from your club?" */
export interface ClubConfirmPayload {
  k: "clubconfirm";
  /** claim id */
  c: string;
  exp: number;
}

/** Dito-only actions: remove an owner's access, or undo a published edit. */
export interface AdminPayload {
  k: "admin";
  a: "revoke" | "undo";
  /** claim id for revoke, edit id for undo */
  id: string;
  exp: number;
}

export type TokenPayload = SigninPayload | SessionPayload | ReviewPayload | ClubConfirmPayload | AdminPayload;

export const SIGNIN_TTL_MS = 30 * 60 * 1000;
export const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000;
export const REVIEW_TTL_MS = 7 * 24 * 60 * 60 * 1000;
export const CLUB_CONFIRM_TTL_MS = 7 * 24 * 60 * 60 * 1000;
/** Remove access / Undo links stay useful for a while after the email. */
export const ADMIN_TTL_MS = 90 * 24 * 60 * 60 * 1000;

const MIN_SECRET_LENGTH = 32;

function b64url(buf: Buffer): string {
  return buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromB64url(s: string): Buffer {
  return Buffer.from(s.replace(/-/g, "+").replace(/_/g, "/"), "base64");
}

export function getClaimSecret(): string | null {
  const s = process.env.CLAIM_SECRET ?? "";
  return s.length >= MIN_SECRET_LENGTH ? s : null;
}

function keyFor(secret: string, kind: TokenKind): Buffer {
  return createHmac("sha256", secret).update(`pcf-owner:${kind}`).digest();
}

export function signToken(payload: TokenPayload, secret: string): string {
  if (!secret || secret.length < MIN_SECRET_LENGTH) throw new Error("CLAIM_SECRET is missing or too short");
  const body = b64url(Buffer.from(JSON.stringify(payload), "utf8"));
  const sig = createHmac("sha256", keyFor(secret, payload.k)).update(`pcf1.${body}`).digest();
  return `${body}.${b64url(sig)}`;
}

/** Returns the payload when the signature, kind and expiry all check out; otherwise null. */
export function verifyToken<K extends TokenKind>(
  token: string | undefined | null,
  kind: K,
  secret: string,
  now: number = Date.now()
): Extract<TokenPayload, { k: K }> | null {
  if (!token || typeof token !== "string" || token.length > 2000 || !secret) return null;
  const dot = token.indexOf(".");
  if (dot <= 0 || dot !== token.lastIndexOf(".")) return null;
  const body = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  if (!/^[A-Za-z0-9_-]+$/.test(body) || !/^[A-Za-z0-9_-]+$/.test(sig)) return null;

  const expected = createHmac("sha256", keyFor(secret, kind)).update(`pcf1.${body}`).digest();
  const given = fromB64url(sig);
  if (given.length !== expected.length || !timingSafeEqual(given, expected)) return null;

  let payload: TokenPayload;
  try {
    payload = JSON.parse(fromB64url(body).toString("utf8"));
  } catch {
    return null;
  }
  if (!payload || typeof payload !== "object" || payload.k !== kind) return null;
  if (typeof payload.exp !== "number" || payload.exp <= now) return null;
  return payload as Extract<TokenPayload, { k: K }>;
}

export function newNonce(): string {
  return b64url(randomBytes(12));
}

export function makeSigninToken(claimId: string, secret: string, now = Date.now()): string {
  return signToken({ k: "signin", c: claimId, n: newNonce(), exp: now + SIGNIN_TTL_MS }, secret);
}

export function makeSessionToken(claimId: string, slug: string, secret: string, now = Date.now()): string {
  return signToken({ k: "session", c: claimId, s: slug, exp: now + SESSION_TTL_MS }, secret);
}

export function makeReviewToken(t: "claim" | "edit", id: string, secret: string, now = Date.now()): string {
  return signToken({ k: "review", t, id, exp: now + REVIEW_TTL_MS }, secret);
}

export function makeClubConfirmToken(claimId: string, secret: string, now = Date.now()): string {
  return signToken({ k: "clubconfirm", c: claimId, exp: now + CLUB_CONFIRM_TTL_MS }, secret);
}

export function makeAdminToken(a: "revoke" | "undo", id: string, secret: string, now = Date.now()): string {
  return signToken({ k: "admin", a, id, exp: now + ADMIN_TTL_MS }, secret);
}

/** Used sign-in nonces. Per instance only, so links are single use "ish"; they also expire in 30 minutes. */
const usedNonces = new Map<string, number>();

export function consumeNonce(nonce: string, exp: number, now = Date.now()): boolean {
  for (const [n, e] of usedNonces) if (e <= now) usedNonces.delete(n);
  if (usedNonces.has(nonce)) return false;
  usedNonces.set(nonce, exp);
  return true;
}
