/** Shared, client-safe pieces of the members-only club lead flow. */

export const LEAD_INTERESTS = ["Membership", "Guest pass or trial", "Lessons or clinics", "Events"] as const;
export const LEAD_LEVELS = ["New to padel", "Beginner", "Intermediate", "Advanced"] as const;

export type LeadInterest = (typeof LEAD_INTERESTS)[number];
export type LeadLevel = (typeof LEAD_LEVELS)[number];

export const LEAD_LIMITS = { name: 100, email: 200, phone: 40, note: 500 } as const;

/** ML-YYYYMMDD-XXXX, e.g. ML-20261013-7K3Q. Used to count leads per club later. */
export const LEAD_ID_RE = /^ML-\d{8}-[A-Z0-9]{4}$/;

export function makeLeadId(date = new Date()): string {
  const ymd = date.toISOString().slice(0, 10).replace(/-/g, "");
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let suffix = "";
  const bytes = new Uint8Array(4);
  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
    crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < 4; i++) bytes[i] = Math.floor(Math.random() * 256);
  }
  for (const b of bytes) suffix += alphabet[b % alphabet.length];
  return `ML-${ymd}-${suffix}`;
}
