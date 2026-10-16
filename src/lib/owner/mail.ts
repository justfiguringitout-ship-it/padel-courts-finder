/**
 * Email for "Claim your listing". Sent from "Dito Calderón" <info@padelcourtsfinder.com>
 * over Gmail SMTP (GMAIL_ADDRESS / GMAIL_APP_PASSWORD), like the other site mail.
 *
 * Local testing only: with PCF_OWNER_DEV_DIR set and off Vercel, messages are
 * written to <dir>/outbox/*.json instead of being sent, so nobody gets mail.
 *
 * Wording is plain on purpose: no selling, no em dashes.
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import nodemailer from "nodemailer";
import { devDir, type ClaimRow, type EditRow } from "@/lib/owner/store";
import type { DiffLine } from "@/lib/owner/listing-fields";
import { RISKY_NOTE, safeName, type RiskyLine } from "@/lib/owner/verification";

export const SENDER_ADDRESS = "info@padelcourtsfinder.com";
export const SENDER = `"Dito Calderón" <${SENDER_ADDRESS}>`;
export const NOTIFY_TO = "info@padelcourtsfinder.com";

export interface Message {
  to: string;
  subject: string;
  text: string;
  html: string;
}

export function mailConfigured(): boolean {
  return !!devDir() || !!(process.env.GMAIL_ADDRESS && process.env.GMAIL_APP_PASSWORD);
}

export async function sendMessage(msg: Message): Promise<void> {
  const dev = devDir();
  if (dev) {
    const dir = path.join(dev, "outbox");
    await fs.mkdir(dir, { recursive: true });
    const file = path.join(dir, `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.json`);
    await fs.writeFile(file, JSON.stringify({ from: SENDER, ...msg }, null, 2));
    return;
  }
  const user = process.env.GMAIL_ADDRESS;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) throw new Error("mail credentials are not configured");
  const transport = nodemailer.createTransport({ host: "smtp.gmail.com", port: 465, secure: true, auth: { user, pass } });
  await transport.sendMail({
    from: SENDER,
    replyTo: SENDER_ADDRESS,
    to: msg.to,
    subject: msg.subject,
    text: msg.text,
    html: msg.html,
  });
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function textToHtml(text: string): string {
  return `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#111">${esc(text)
    .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1">$1</a>')
    .replace(/\n/g, "<br>")}</div>`;
}

function make(to: string, subject: string, text: string): Message {
  return { to, subject, text, html: textToHtml(text) };
}

export function firstName(name: string): string {
  return name.trim().split(/\s+/)[0] || name.trim();
}

function diffText(lines: DiffLine[]): string {
  if (!lines.length) return "No field changes.";
  return lines.map((l) => `${l.label}\n  Now: ${l.before}\n  New: ${l.after}`).join("\n\n");
}

const REASON_WORDS: Record<string, string> = {
  free_mail: "they used a personal email address",
  mismatch: "their email domain does not match the club website",
  no_club_domain: "the club website is a booking or social page, so there is no domain to match",
  bad_email: "the email address could not be checked",
  second_claim: "the club already has a verified owner, and a second person always needs your approval",
};

function riskyText(lines: RiskyLine[]): string {
  return lines
    .map(
      (l) =>
        `${l.label}${l.differentDomain ? " (Different domain)" : ""}\n  Now: ${l.before}\n  New: ${l.after}\n  ${RISKY_NOTE}.`
    )
    .join("\n\n");
}

function ownerList(owners: Array<{ name: string; email: string }>): string {
  return owners.map((o) => `${o.name} (${o.email})`).join(", ");
}

// ------------------------------------------------------------------ claims

export function signinLinkEmail(claim: ClaimRow, link: string): Message {
  return make(
    claim.email,
    `Your sign-in link for ${claim.club_name} on Padel Courts Finder`,
    `Hi ${firstName(claim.name)},

Here is your link to update the ${claim.club_name} listing on Padel Courts Finder. It works for the next 30 minutes:

${link}

You can change hours, contact details, courts, pricing, amenities and photos. I check every change before it goes live, usually within one business day.

If you did not ask for this, you can ignore this email.

Dito
Padel Courts Finder`
  );
}

export function claimReviewEmail(
  claim: ClaimRow,
  info: {
    reason: string;
    website?: string;
    clubPage: string;
    approveUrl: string;
    rejectUrl: string;
    revokeUrl: string;
    /** what happened with the club's public email (or the phone to call) */
    verifyLine: string;
    existingOwners?: Array<{ name: string; email: string }>;
  }
): Message {
  const owners = info.existingOwners ?? [];
  const second = info.reason === "second_claim" || owners.length > 0;
  return make(
    NOTIFY_TO,
    `${second ? "Second claim" : "Claim"} to verify: ${claim.club_name} (${claim.role})`,
    `${claim.name} asked to manage ${claim.club_name}. It needs a manual check because ${REASON_WORDS[info.reason] ?? "it could not be verified automatically"}.

${info.verifyLine}
${
  owners.length
    ? `\nThis club already has a verified owner: ${ownerList(owners)}. They were emailed about this request and asked to reply if they do not know this person.\n`
    : ""
}
Name: ${claim.name}
Role: ${claim.role}
Email: ${claim.email}
Club page: ${info.clubPage}
Club website on file: ${info.website || "none"}

Approve (sends them a sign-in link):
${info.approveUrl}

Reject:
${info.rejectUrl}

Both links open a page where you confirm. They expire in 7 days.

Remove access later (works even after approval):
${info.revokeUrl}`
  );
}

export function claimVerifiedNotice(claim: ClaimRow, clubPage: string, revokeUrl: string): Message {
  return make(
    NOTIFY_TO,
    `New verified claim: ${claim.club_name} (${claim.role})`,
    `${claim.name} (${claim.email}, ${claim.role}) claimed ${claim.club_name}. Their email matches the club website, so they got a sign-in link right away. Nothing is published until you approve an edit.

Club page: ${clubPage}

Remove access (opens a confirmation page):
${revokeUrl}`
  );
}

/** To the club's public address: is this person from your club? */
export function clubConfirmEmail(claim: ClaimRow, to: string, confirmUrl: string, clubPage: string): Message {
  const who = `${safeName(claim.name)} (${claim.email})`;
  return make(
    to,
    `Please confirm: access to ${claim.club_name}'s listing on Padel Courts Finder`,
    `Hi,

${who} asked to manage ${claim.club_name}'s listing on Padel Courts Finder. If this is someone from your club, confirm here. If not, ignore this email.

${confirmUrl}

The link works for 7 days. Confirming lets them suggest updates to your listing. I still check every change before it goes live.

Your listing: ${clubPage}

Dito
Padel Courts Finder`
  );
}

/** To Dito, after the club's public address confirmed a claim. */
export function clubConfirmedNotice(claim: ClaimRow, clubPage: string, revokeUrl: string): Message {
  return make(
    NOTIFY_TO,
    `Club confirmed a claim: ${claim.club_name} (${claim.role})`,
    `${claim.verify_target || "The club's public email"} confirmed that ${claim.name} (${claim.email}, ${claim.role}) is from ${claim.club_name}. The claim is verified and they got a sign-in link. Nothing is published until you approve an edit.

Club page: ${clubPage}

Remove access (opens a confirmation page):
${revokeUrl}`
  );
}

/** To each existing verified owner when someone else asks for the same club. */
export function existingOwnerNotice(owner: ClaimRow, claim: ClaimRow): Message {
  return make(
    owner.email,
    `Someone asked for access to ${claim.club_name} on Padel Courts Finder`,
    `Hi ${firstName(owner.name)},

${safeName(claim.name)} (${claim.email}) asked for access to ${claim.club_name}'s listing. If you do not know them, reply to this email and we will remove them.

If you do know them, you do not need to do anything.

Dito
Padel Courts Finder`
  );
}

export function claimRejectedEmail(claim: ClaimRow): Message {
  return make(
    claim.email,
    `About your request for ${claim.club_name}`,
    `Hi ${firstName(claim.name)},

Thanks for asking to manage the ${claim.club_name} listing. I could not confirm from this request that you work at the club, so I have not set up access.

If you do, just reply to this email, ideally from your club email address, and I will sort it out.

Dito
Padel Courts Finder`
  );
}

// ------------------------------------------------------------------ edits

export function editReviewEmail(
  edit: EditRow,
  claim: ClaimRow,
  info: {
    lines: DiffLine[];
    risky: RiskyLine[];
    clubPage: string;
    reviewUrl: string;
    approveUrl: string;
    rejectUrl: string;
    revokeUrl: string;
  }
): Message {
  const photos = edit.photo_paths.length;
  const flagged = info.risky.some((r) => r.differentDomain);
  return make(
    NOTIFY_TO,
    `Listing update to review: ${claim.club_name}${info.risky.length ? (flagged ? " (check links: different domain)" : " (check contact details)") : ""}`,
    `${claim.name} (${claim.role}, ${claim.email}) suggested changes to ${claim.club_name}.
${
  info.risky.length
    ? `
CHECK THESE
${riskyText(info.risky)}

ALL CHANGES`
    : ""
}
${diffText(info.lines)}

Photos: ${photos ? `${photos} attached (the owner confirmed they have the rights). See them on the review page.` : "none"}
Note from the club: ${edit.note || "none"}

Review page:
${info.reviewUrl}

Approve:
${info.approveUrl}

Reject:
${info.rejectUrl}

Each link opens a confirmation page; nothing changes until you press the button. Links expire in 7 days.
Club page: ${info.clubPage}

Remove ${firstName(claim.name)}'s access (also drops their pending updates):
${info.revokeUrl}`
  );
}

/** To Dito when an edit is published. */
export function publishedEmail(
  claim: ClaimRow,
  info: { words: string; commit: string; clubPage: string; undoUrl: string | null; revokeUrl: string }
): Message {
  return make(
    NOTIFY_TO,
    `Published: ${claim.club_name}`,
    `Your update is live: ${claim.name}'s change to ${claim.club_name} (${info.words}) was committed to main in ${info.commit}. Vercel deploys it in a few minutes.

Club page: ${info.clubPage}

${
  info.undoUrl
    ? `Undo this change (opens a confirmation page, then commits the old values back):\n${info.undoUrl}`
    : "One-click undo is not available for this change (the old values could not be read). Revert the commit by hand if needed."
}

Remove ${firstName(claim.name)}'s access:
${info.revokeUrl}`
  );
}

export function editApprovedEmail(claim: ClaimRow, live: boolean, clubPage: string): Message {
  return make(
    claim.email,
    live ? `Your ${claim.club_name} update is going live` : `Your ${claim.club_name} update is approved`,
    `Hi ${firstName(claim.name)},

Thanks for keeping ${claim.club_name} up to date. ${
      live
        ? "Your update is approved and will be live within a few minutes:"
        : "Your update is approved and going live soon. I will publish it shortly:"
    }

${clubPage}

Dito
Padel Courts Finder`
  );
}

export function editRejectedEmail(claim: ClaimRow): Message {
  return make(
    claim.email,
    `About your ${claim.club_name} update`,
    `Hi ${firstName(claim.name)},

Thanks for sending an update for ${claim.club_name}. I did not publish this one as it was. If you want to talk it through or send it again with more detail, just reply to this email.

Dito
Padel Courts Finder`
  );
}
