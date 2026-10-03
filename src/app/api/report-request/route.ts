import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { REPORT_EMAIL_HTML, REPORT_EMAIL_SUBJECT, REPORT_EMAIL_TEXT } from "@/lib/report-email";

export const runtime = "nodejs";

const SENDER = "info@padelcourtsfinder.com";
const ALLOWED_ORIGINS = ["https://www.padelcourtsfinder.com", "https://padelcourtsfinder.com"];
const EMAIL_RE = /^[^\s@<>"',;]+@[^\s@<>"',;]+\.[a-z]{2,}$/i;

// Small in-memory brake so the endpoint cannot be used to mail-bomb an
// address. Serverless instances are short-lived, so this is a speed bump,
// not a guarantee; the fixed message body is what really limits abuse.
const recent = new Map<string, number>();
const WINDOW_MS = 10 * 60 * 1000;

export async function POST(req: Request) {
  const origin = req.headers.get("origin") ?? "";
  if (!ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }

  let body: { email?: string; role?: string; website?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });
  }

  // Honeypot: real visitors never fill the hidden "website" field.
  if (body.website) return NextResponse.json({ ok: true });

  const email = (body.email ?? "").trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json({ ok: false, error: "invalid email" }, { status: 400 });
  }

  const now = Date.now();
  const last = recent.get(email);
  if (last && now - last < WINDOW_MS) return NextResponse.json({ ok: true, repeat: true });
  recent.set(email, now);

  const user = process.env.GMAIL_ADDRESS;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    console.error("report-request: mail credentials are not configured");
    return NextResponse.json({ ok: false, error: "mail not configured" }, { status: 503 });
  }

  try {
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    });
    await transport.sendMail({
      from: `"Dito Calderón" <${SENDER}>`,
      replyTo: SENDER,
      to: email,
      subject: REPORT_EMAIL_SUBJECT,
      text: REPORT_EMAIL_TEXT,
      html: REPORT_EMAIL_HTML,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("report-request: send failed", err);
    return NextResponse.json({ ok: false, error: "send failed" }, { status: 502 });
  }
}
