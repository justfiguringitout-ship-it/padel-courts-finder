/**
 * One owner photo per request (multipart field "photo"). The browser shrinks
 * very large files first so they fit Vercel's request limit; here we check the
 * real file type, auto-rotate, resize to at most 1600px and store WebP in the
 * private pcf-owner-photos bucket under pending/<claim id>/.
 * Nothing is public until Dito approves the edit that uses the photo.
 */
import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import sharp from "sharp";
import { RateLimiter, clientIp, requestOrigin } from "@/lib/owner/http";
import { getOwnerSession } from "@/lib/owner/session";
import { getStore } from "@/lib/owner/store";

export const runtime = "nodejs";
export const maxDuration = 30;

const MAX_PHOTO_BYTES = 10 * 1024 * 1024;
const perClaim = new RateLimiter(40, 60 * 60 * 1000);
const perIp = new RateLimiter(60, 60 * 60 * 1000);

function json(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function sniff(b: Buffer): "jpeg" | "png" | "webp" | null {
  if (b.length > 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return "jpeg";
  if (b.length > 8 && b.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return "png";
  if (b.length > 12 && b.subarray(0, 4).toString("ascii") === "RIFF" && b.subarray(8, 12).toString("ascii") === "WEBP") return "webp";
  return null;
}

export async function POST(req: Request) {
  if (!requestOrigin(req)) return json({ ok: false, error: "forbidden" }, 403);
  if (!perIp.take(clientIp(req))) return json({ ok: false, error: "too many requests" }, 429);
  const session = await getOwnerSession();
  if (!session) return json({ ok: false, error: "signed out" }, 401);
  if (!perClaim.take(session.claim.id)) return json({ ok: false, error: "too many photos, try again later" }, 429);

  const store = getStore();
  if (!store) return json({ ok: false, error: "unavailable" }, 503);

  let file: File | null = null;
  try {
    const form = await req.formData();
    const f = form.get("photo");
    file = f instanceof File ? f : null;
  } catch {
    return json({ ok: false, error: "bad request" }, 400);
  }
  if (!file) return json({ ok: false, error: "no photo" }, 400);
  if (file.size > MAX_PHOTO_BYTES) return json({ ok: false, error: "That photo is over 10 MB." }, 413);

  const input = Buffer.from(await file.arrayBuffer());
  if (!sniff(input)) return json({ ok: false, error: "Use a JPG, PNG or WebP photo." }, 415);

  let out: Buffer;
  let width = 0;
  let height = 0;
  try {
    const result = await sharp(input, { limitInputPixels: 80_000_000, failOn: "error" })
      .rotate()
      .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 82 })
      .toBuffer({ resolveWithObject: true });
    out = result.data;
    width = result.info.width;
    height = result.info.height;
  } catch {
    return json({ ok: false, error: "We could not read that photo." }, 415);
  }
  if (Math.max(width, height) < 600) return json({ ok: false, error: "That photo is too small. Use one at least 600 pixels wide." }, 400);

  const objectPath = `pending/${session.claim.id}/${randomUUID()}.webp`;
  try {
    await store.putPhoto(objectPath, out, "image/webp");
  } catch (err) {
    console.error("owner/photos: upload failed", err instanceof Error ? err.message : err);
    return json({ ok: false, error: "Upload failed. Please try again." }, 502);
  }
  return json({ ok: true, path: objectPath, width, height });
}
