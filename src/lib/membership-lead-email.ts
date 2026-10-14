/**
 * Wording for the three messages a members-only club lead produces:
 *  1. the draft from Dito to the club (lands in Gmail Drafts, never sent automatically)
 *  2. the notification to info@
 *  3. the confirmation to the player
 * Plain and friendly on purpose (see the dito-padel-voice skill): no selling, no em dashes.
 */
import type { LeadInterest, LeadLevel } from "@/lib/membership-lead";

export const SITE_URL = "https://www.padelcourtsfinder.com";
export const SENDER_ADDRESS = "info@padelcourtsfinder.com";
export const SENDER = `"Dito Calderón" <${SENDER_ADDRESS}>`;

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: LeadInterest;
  level: LeadLevel;
  note: string;
}

export interface LeadClub {
  slug: string;
  name: string;
  city: string;
  state: string;
  /** Where the draft goes: membershipEmail, else the club's email, else empty. */
  to: string;
  toSource: "membershipEmail" | "email" | "none";
}

export interface Composed {
  subject: string;
  text: string;
  html: string;
}

const INTEREST_PHRASE: Record<LeadInterest, string> = {
  Membership: "membership",
  "Guest pass or trial": "a guest pass or trial",
  "Lessons or clinics": "lessons or clinics",
  Events: "events",
};

export function firstName(name: string): string {
  return name.trim().split(/\s+/)[0] || name.trim();
}

export function clubPageUrl(club: LeadClub): string {
  return `${SITE_URL}/courts/${club.slug}`;
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function textToHtml(text: string): string {
  // Turn bare https URLs into links that show the URL itself.
  return esc(text)
    .replace(/(https:\/\/[^\s<]+)/g, '<a href="$1">$1</a>')
    .replace(/\n/g, "<br>");
}

function wrapHtml(text: string): string {
  return `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#111">${textToHtml(text)}</div>`;
}

function detailLines(lead: Lead, club: LeadClub): string {
  return [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone || "not given"}`,
    `Interested in: ${lead.interest}`,
    `Padel level: ${lead.level}`,
    `Note: ${lead.note || "none"}`,
    `Club page: ${clubPageUrl(club)}`,
    `Reference: ${lead.id}`,
  ].join("\n");
}

/** 1. The draft Dito forwards to the club. The player is on Cc. */
export function composeClubDraft(lead: Lead, club: LeadClub): Composed {
  const subject = `Membership inquiry from ${firstName(lead.name)} via Padel Courts Finder (${lead.id})`;
  const text = `Hi ${club.name} team,

${lead.name} found you on Padel Courts Finder and asked about ${INTEREST_PHRASE[lead.interest]}. Their details are below and they are copied here, so you can reply to them directly.

${detailLines(lead, club)}

Thanks,
Dito, Padel Courts Finder
${SITE_URL}`;
  return { subject, text, html: wrapHtml(text) };
}

/** 2. The heads-up to info@. Carries the full draft when the Gmail draft failed. */
export function composeNotification(
  lead: Lead,
  club: LeadClub,
  draft: Composed,
  draftCreated: boolean
): Composed {
  const subject = `New membership lead: ${club.name} (${club.city}) ${lead.id}`;
  const onFile =
    club.toSource === "membershipEmail"
      ? `Yes, membership email: ${club.to}`
      : club.toSource === "email"
        ? `Yes, general email: ${club.to}`
        : "No. The draft has an empty To line, so add the club's address before sending.";
  const status = draftCreated
    ? "A draft to the club is waiting in Gmail Drafts."
    : `The Gmail draft could not be created. Here is the forward-ready message so nothing is lost.

To: ${club.to || "(no club email on file)"}
Cc: ${lead.name} <${lead.email}>
Subject: ${draft.subject}

${draft.text}`;
  const text = `New membership lead for ${club.name} in ${club.city}, ${club.state}.

${detailLines(lead, club)}

Club email on file: ${onFile}

${status}`;
  return { subject, text, html: wrapHtml(text) };
}

/** 3. The short confirmation to the player. */
export function composeConfirmation(lead: Lead, club: LeadClub): Composed {
  const subject = `We have your note for ${club.name}`;
  const text = `Hi ${firstName(lead.name)},

Thanks for asking about ${INTEREST_PHRASE[lead.interest]} at ${club.name}. We will pass your note to the club within one business day and copy you on that email, so you can talk to them directly.

What you sent:
Interested in: ${lead.interest}
Padel level: ${lead.level}
Note: ${lead.note || "none"}

Your reference is ${lead.id}. If anything changes, just reply to this email.

Dito
Padel Courts Finder
${SITE_URL}`;
  return { subject, text, html: wrapHtml(text) };
}
