import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ImapFlow } from "imapflow";
import { padelCourts } from "@/data/padel-courts";
import { generateSlug } from "@/lib/court-adapter";
import {
  LEAD_ID_RE,
  LEAD_INTERESTS,
  LEAD_LEVELS,
  LEAD_LIMITS,
  makeLeadId,
  type LeadInterest,
  type LeadLevel,
} from "@/lib/membership-lead";
import {
  SENDER,
  SENDER_ADDRESS,
  composeClubDraft,
  composeConfirmation,
  composeNotification,
  type Composed,
  type Lead,
  type LeadClub,
} from "@/lib/membership-lead-email";

export const runtime = "nodejs";
export const maxDuration = 30;

const ALLOWED_ORIGINS = ["https://www.padelcourtsfinder.com", "https://padelcourtsfinder.com"];
const LOCAL_ORIGIN_RE = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;
const EMAIL_RE = /^[^\s@<>"',;]+@[^\s@<>"',;]+\.[a-z]{2,}$/i;
const NOTIFY_TO = "info@padelcourtsfinder.com";
const DRAFTS_FALLBACK = "[Gmail]/Drafts";

// In-memory brake per email + club. Serverless instances are short-lived, so
// this is a speed bump, not a guarantee.
const recent = new Map<string, number>();
const WINDOW_MS = 10 * 60 * 1000;

function originAllowed(origin: string): boolean {
  if (ALLOWED_ORIGINS.includes(origin)) return true;
  // Local `next start` / `next dev` only; Vercel always sets VERCEL=1.
  return !process.env.VERCEL && LOCAL_ORIGIN_RE.test(origin);
}

/** Single line, no control characters, trimmed and capped. */
function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]+/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}

/** Like clean() but keeps line breaks (for the note). */
function cleanMultiline(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0009\u000b-\u001f\u007f]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, max);
}

function findClub(slug: string): LeadClub | null {
  const court = padelCourts.find((c) => generateSlug(c.name) === slug);
  if (!court || court.membersOnly !== true || court.status === "temporarily_closed") return null;
  const membershipEmail = court.membershipEmail?.trim();
  const email = court.email?.trim();
  const to = membershipEmail && EMAIL_RE.test(membershipEmail) ? membershipEmail : email && EMAIL_RE.test(email) ? email : "";
  return {
    slug,
    name: court.name,
    city: court.city,
    state: court.state,
    to,
    toSource: !to ? "none" : to === membershipEmail ? "membershipEmail" : "email",
  };
}

async function buildRaw(opts: {
  to: string;
  cc: string;
  subject: string;
  text: string;
  html: string;
  leadId: string;
}): Promise<Buffer> {
  const composer = nodemailer.createTransport({ streamTransport: true, buffer: true, newline: "windows" });
  const info = await composer.sendMail({
    from: SENDER,
    to: opts.to || undefined,
    cc: opts.cc,
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
    date: new Date(),
    headers: { "X-PCF-Lead-Id": opts.leadId },
  });
  return info.message as Buffer;
}

/** Store the club draft in Dito's Gmail Drafts via IMAP APPEND (kept byte for byte, no link wrapping). */
async function createGmailDraft(raw: Buffer, user: string, pass: string): Promise<void> {
  const client = new ImapFlow({
    host: "imap.gmail.com",
    port: 993,
    secure: true,
    auth: { user, pass },
    logger: false,
    socketTimeout: 20_000,
  });
  await client.connect();
  try {
    let drafts = DRAFTS_FALLBACK;
    try {
      const boxes = await client.list();
      const special = boxes.find((b) => b.specialUse === "\\Drafts");
      if (special) drafts = special.path;
    } catch {
      // fall back to the English Gmail name
    }
    const res = await client.append(drafts, raw, ["\\Draft", "\\Seen"]);
    if (!res) throw new Error("append returned nothing");
  } finally {
    await client.logout().catch(() => undefined);
  }
}

export async function POST(req: Request) {
  const origin = req.headers.get("origin") ?? "";
  if (!originAllowed(origin)) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });
  }
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });
  }

  // Honeypot: real visitors never fill the hidden "website" field.
  if (body.website) return NextResponse.json({ ok: true });

  const name = clean(body.name, LEAD_LIMITS.name + 1);
  const email = clean(body.email, LEAD_LIMITS.email + 1).toLowerCase();
  const phone = clean(body.phone, LEAD_LIMITS.phone + 1);
  const note = cleanMultiline(body.note, LEAD_LIMITS.note + 1);
  const interest = clean(body.interest, 40) as LeadInterest;
  const level = clean(body.level, 40) as LeadLevel;
  const slug = clean(body.slug, 120);

  if (
    name.length < 2 ||
    name.length > LEAD_LIMITS.name ||
    !EMAIL_RE.test(email) ||
    email.length > LEAD_LIMITS.email ||
    phone.length > LEAD_LIMITS.phone ||
    note.length > LEAD_LIMITS.note ||
    !LEAD_INTERESTS.includes(interest) ||
    !LEAD_LEVELS.includes(level) ||
    body.consent !== true
  ) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  // Never trust club details from the client: look the club up by slug.
  const club = findClub(slug);
  if (!club) return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });

  const key = `${email}|${club.slug}`;
  const now = Date.now();
  const last = recent.get(key);
  if (last && now - last < WINDOW_MS) return NextResponse.json({ ok: true, repeat: true });

  const smtpUser = process.env.GMAIL_ADDRESS;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const imapUser = process.env.GMAIL_IMAP_USER || smtpUser;
  if (!smtpUser || !pass || !imapUser) {
    console.error("membership-lead: mail credentials are not configured");
    return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 });
  }
  recent.set(key, now);

  const clientId = clean(body.leadId, 20);
  const lead: Lead = {
    id: LEAD_ID_RE.test(clientId) ? clientId : makeLeadId(),
    name,
    email,
    phone,
    interest,
    level,
    note,
  };

  const draft = composeClubDraft(lead, club);
  let draftCreated = false;
  try {
    const raw = await buildRaw({
      to: club.to,
      cc: `"${lead.name.replace(/"/g, "")}" <${lead.email}>`,
      subject: draft.subject,
      text: draft.text,
      html: draft.html,
      leadId: lead.id,
    });
    await createGmailDraft(raw, imapUser, pass);
    draftCreated = true;
  } catch (err) {
    console.error(`membership-lead: draft failed for ${lead.id}`, err);
  }

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: smtpUser, pass },
  });
  const send = (to: string, msg: Composed) =>
    transport.sendMail({
      from: SENDER,
      replyTo: SENDER_ADDRESS,
      to,
      subject: msg.subject,
      text: msg.text,
      html: msg.html,
      headers: { "X-PCF-Lead-Id": lead.id },
    });

  const [notified, confirmed] = await Promise.allSettled([
    send(NOTIFY_TO, composeNotification(lead, club, draft, draftCreated)),
    send(lead.email, composeConfirmation(lead, club)),
  ]);
  if (notified.status === "rejected") console.error(`membership-lead: notification failed for ${lead.id}`, notified.reason);
  if (confirmed.status === "rejected") console.error(`membership-lead: confirmation failed for ${lead.id}`, confirmed.reason);

  console.log(
    `membership-lead: ${lead.id} club=${club.slug} draft=${draftCreated} notified=${notified.status} confirmed=${confirmed.status}`
  );

  // Something reached Dito (draft or notification): the lead is safe.
  if (draftCreated || notified.status === "fulfilled") {
    return NextResponse.json({ ok: true, leadId: lead.id });
  }
  recent.delete(key); // let the player retry
  return NextResponse.json({ ok: false, error: "send failed" }, { status: 502 });
}
