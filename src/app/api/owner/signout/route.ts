import { NextResponse } from "next/server";
import { isLocalOrigin, requestOrigin } from "@/lib/owner/http";
import { clearSessionCookie } from "@/lib/owner/session";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const origin = requestOrigin(req);
  if (!origin) return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  const res = NextResponse.redirect(`${origin}/owner?signedout=1`, 303);
  clearSessionCookie(res, !isLocalOrigin(origin));
  return res;
}
