/**
 * Tests for "Claim your listing". Run with:
 *   node --import ./scripts/owner/register.mjs --test scripts/owner/owner.test.ts
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import ts from "typescript";

import { checkClaimDomain, registrableDomain } from "@/lib/owner/domain";
import { consumeNonce, makeReviewToken, makeSessionToken, makeSigninToken, signToken, verifyToken } from "@/lib/owner/tokens";
import {
  buildChanges,
  changedFieldWords,
  describeChanges,
  formFromListing,
  formatDayHours,
  humanDayHours,
  parseDayHours,
  validateForm,
} from "@/lib/owner/listing-fields";
import {
  addChangelogEntry,
  buildCourtPatch,
  changelogEntryFor,
  locateCourt,
  patchCourtEntry,
  planPhotos,
  readEntryFields,
} from "@/lib/owner/apply-core";
import { currentListing, findCourtBySlug } from "@/lib/owner/club-lookup";
import { padelCourts } from "@/data/padel-courts";
import { changelog } from "@/data/changelog";

const ROOT = path.resolve(import.meta.dirname, "../..");
const SECRET = "test-secret-that-is-long-enough-0123456789";

// ------------------------------------------------------------------ domain matcher

test("domain: club-domain email on wakitrakit.com is verified", () => {
  assert.deepEqual(checkClaimDomain("ryan@wakitrakit.com", "https://wakitrakit.com/spring", "spring@wakitrakit.com"), {
    verified: true,
    reason: "domain_match",
  });
  assert.equal(checkClaimDomain("Ryan@WakitRakit.com", "https://www.wakitrakit.com/spacecoast").verified, true);
  assert.equal(checkClaimDomain("ryan@mail.wakitrakit.com", "wakitrakit.com").verified, true);
});

test("domain: gmail is manual", () => {
  assert.deepEqual(checkClaimDomain("ryan@gmail.com", "https://wakitrakit.com/spring"), { verified: false, reason: "free_mail" });
  for (const d of ["outlook.com", "yahoo.com", "icloud.com", "hotmail.com", "aol.com"]) {
    assert.equal(checkClaimDomain(`a@${d}`, "https://wakitrakit.com").verified, false, d);
  }
});

test("domain: booking-platform website is manual", () => {
  assert.deepEqual(checkClaimDomain("owner@playtomic.com", "https://playtomic.com/clubs/some-club"), { verified: false, reason: "mismatch" });
  assert.deepEqual(checkClaimDomain("owner@someclub.com", "https://playtomic.com/clubs/some-club"), { verified: false, reason: "no_club_domain" });
  for (const site of ["https://app.playbypoint.com/f/x", "https://app.courtreserve.com/Online/x", "https://linktr.ee/club", "https://www.instagram.com/club"]) {
    assert.equal(checkClaimDomain("owner@someclub.com", site).verified, false, site);
  }
});

test("domain: mismatch and normalization", () => {
  assert.deepEqual(checkClaimDomain("ryan@otherclub.com", "https://wakitrakit.com"), { verified: false, reason: "mismatch" });
  assert.equal(registrableDomain("https://WWW.Club.com:443/path?x=1"), "club.com");
  assert.equal(registrableDomain("courts.club.co.uk"), "club.co.uk");
  assert.equal(registrableDomain("not a url"), "");
  // the club email on file also counts, when the website is a booking page
  assert.equal(checkClaimDomain("a@someclub.com", "https://playtomic.com/x", "info@someclub.com").verified, true);
  // but a free-mail club email never does
  assert.equal(checkClaimDomain("a@gmail.com", "https://playtomic.com/x", "club@gmail.com").verified, false);
});

test("domain: real Wakit Rakit entries", () => {
  for (const slug of ["wakit-rakit-spring", "wakit-rakit-space-coast"]) {
    const c = findCourtBySlug(slug);
    assert.ok(c, slug);
    assert.equal(checkClaimDomain("ryan@wakitrakit.com", c.website, c.email).verified, true);
    assert.equal(checkClaimDomain("ryan.higgins@gmail.com", c.website, c.email).verified, false);
  }
});

// ------------------------------------------------------------------ tokens

test("tokens: sign and verify round trip", () => {
  const t = makeSigninToken("11111111-1111-4111-8111-111111111111", SECRET);
  const p = verifyToken(t, "signin", SECRET);
  assert.ok(p);
  assert.equal(p.c, "11111111-1111-4111-8111-111111111111");
  const s = verifyToken(makeSessionToken("abc", "wakit-rakit-spring", SECRET), "session", SECRET);
  assert.equal(s?.s, "wakit-rakit-spring");
  const r = verifyToken(makeReviewToken("edit", "e1", SECRET), "review", SECRET);
  assert.equal(r?.t, "edit");
});

test("tokens: expiry", () => {
  const now = Date.now();
  const t = makeSigninToken("c1", SECRET, now);
  assert.ok(verifyToken(t, "signin", SECRET, now + 29 * 60 * 1000));
  assert.equal(verifyToken(t, "signin", SECRET, now + 31 * 60 * 1000), null);
  const r = makeReviewToken("claim", "c1", SECRET, now);
  assert.ok(verifyToken(r, "review", SECRET, now + 6 * 24 * 3600 * 1000));
  assert.equal(verifyToken(r, "review", SECRET, now + 8 * 24 * 3600 * 1000), null);
  const s = makeSessionToken("c1", "x", SECRET, now);
  assert.ok(verifyToken(s, "session", SECRET, now + 29 * 24 * 3600 * 1000));
  assert.equal(verifyToken(s, "session", SECRET, now + 31 * 24 * 3600 * 1000), null);
});

test("tokens: tampering, wrong kind and wrong secret are refused", () => {
  const t = makeSigninToken("c1", SECRET);
  const [body, sig] = t.split(".");
  const forged = Buffer.from(JSON.stringify({ k: "signin", c: "c2", n: "x", exp: Date.now() + 1e6 })).toString("base64url");
  assert.equal(verifyToken(`${forged}.${sig}`, "signin", SECRET), null);
  assert.equal(verifyToken(`${body}.${sig.slice(0, -2)}AA`, "signin", SECRET), null);
  assert.equal(verifyToken(t, "session", SECRET), null);
  assert.equal(verifyToken(t, "review", SECRET), null);
  assert.equal(verifyToken(t, "signin", `${SECRET}x`), null);
  assert.equal(verifyToken("garbage", "signin", SECRET), null);
  assert.equal(verifyToken("", "signin", SECRET), null);
  // a session payload signed with the signin key does not pass as a session
  const crossed = signToken({ k: "signin", c: "c1", n: "n", exp: Date.now() + 1e6 }, SECRET).split(".")[1];
  const sessionBody = Buffer.from(JSON.stringify({ k: "session", c: "c1", s: "x", exp: Date.now() + 1e6 })).toString("base64url");
  assert.equal(verifyToken(`${sessionBody}.${crossed}`, "session", SECRET), null);
  assert.throws(() => signToken({ k: "signin", c: "c", n: "n", exp: 1 }, "short"));
});

test("tokens: a sign-in nonce works once", () => {
  const exp = Date.now() + 60_000;
  assert.equal(consumeNonce("nonce-a", exp), true);
  assert.equal(consumeNonce("nonce-a", exp), false);
  assert.equal(consumeNonce("nonce-b", exp), true);
});

// ------------------------------------------------------------------ listing fields

test("hours: parse and format in the data file's style", () => {
  const cases: Array<[string, string]> = [
    ["8h-22h", "8h-22h"],
    ["7h-23:30", "7h-23:30"],
    ["7h-0h", "7h-0h"],
    ["0h-24h", "0h-24h"],
    ["24h", "0h-24h"],
    ["5:30-23:30", "5:30-23:30"],
    ["7:00am-10:00pm", "7h-22h"],
    ["Closed", "Closed"],
  ];
  for (const [raw, out] of cases) assert.equal(formatDayHours(parseDayHours(raw)), out, raw);
  assert.equal(parseDayHours("TBA").state, "unknown");
  assert.equal(parseDayHours("varies").state, "unknown");
  assert.equal(humanDayHours("8h-22h"), "8 AM to 10 PM");
  assert.equal(humanDayHours("7h-0h"), "7 AM to midnight");
  assert.equal(humanDayHours("varies"), "varies");
});

test("an untouched form produces no changes, for every club", () => {
  const blocked: string[] = [];
  for (const court of padelCourts) {
    const cur = currentListing(court);
    const check = validateForm(formFromListing(cur));
    if (!check.ok) {
      blocked.push(`${court.name}: ${check.errors.join("; ")}`);
      continue;
    }
    const ch = buildChanges(cur, check.form);
    assert.deepEqual(ch, {}, `${court.name} produced spurious changes: ${JSON.stringify(ch)}`);
  }
  assert.deepEqual(blocked, [], "current data must always pass validation, or owners could not save");
});

test("validation refuses bad input", () => {
  const cur = currentListing(findCourtBySlug("wakit-rakit-spring")!);
  const base = formFromListing(cur);
  const bad = (patch: object) => validateForm({ ...base, ...patch }).ok;
  assert.equal(bad({ website: "javascript:alert(1)" }), false);
  assert.equal(bad({ bookingUrl: "ftp://x.com" }), false);
  assert.equal(bad({ phone: "call us!" }), false);
  assert.equal(bad({ membershipEmail: "nope" }), false);
  assert.equal(bad({ numberOfCourts: 0 }), false);
  assert.equal(bad({ numberOfCourts: 6, indoorCourts: 1, outdoorCourts: 1 }), false);
  assert.equal(bad({ hours: { ...base.hours, monday: { state: "open", open: "22:00", close: "08:00" } } }), false);
  assert.equal(bad({ hours: { ...base.hours, monday: { state: "open", open: "08:15", close: "22:00" } } }), false);
  assert.equal(bad({ access: "everyone" }), false);
  assert.equal(validateForm({ ...base, website: "wakitrakit.com/spring" }).ok, true);
});

// ------------------------------------------------------------------ the data patcher

const SAMPLE_FORM_PATCH = (base: ReturnType<typeof formFromListing>) => ({
  ...base,
  hours: { ...base.hours, sunday: { state: "open", open: "09:00", close: "21:00" }, monday: { state: "closed" } },
  phone: "832-304-4419",
  bookingUrl: "https://wakitrakit.com/spring/book",
  numberOfCourts: 6,
  indoorCourts: 2,
  outdoorCourts: 4,
  pricingText: "Americano sessions $25 per person; court rental $60 per hour",
  amenities: [...base.amenities, "free parking"],
});

function evalDataFile(src: string, exportName: string): unknown[] {
  const js = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
  const dir = mkdtempSync(path.join(os.tmpdir(), "pcf-eval-"));
  const file = path.join(dir, "mod.mjs");
  writeFileSync(file, js);
  return import(pathToFileURL(file).href).then((m) => {
    rmSync(dir, { recursive: true, force: true });
    return m[exportName];
  }) as unknown as unknown[];
}

function typecheck(files: Record<string, string>): string[] {
  const dir = mkdtempSync(path.join(os.tmpdir(), "pcf-tc-"));
  const names: string[] = [];
  for (const [rel, content] of Object.entries(files)) {
    const f = path.join(dir, rel);
    mkdirSync(path.dirname(f), { recursive: true });
    writeFileSync(f, content);
    names.push(f);
  }
  const program = ts.createProgram(names, { strict: true, noEmit: true, target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext, moduleResolution: ts.ModuleResolutionKind.Bundler, skipLibCheck: true, types: [] });
  const diags = ts.getPreEmitDiagnostics(program).filter((d) => d.file && names.includes(path.resolve(d.file.fileName)));
  rmSync(dir, { recursive: true, force: true });
  return diags.map((d) => ts.flattenDiagnosticMessageText(d.messageText, "\n"));
}

test("patcher: applies an owner edit to Wakit Rakit Spring and changes nothing else", async () => {
  const srcPath = path.join(ROOT, "src/data/padel-courts.ts");
  const original = readFileSync(srcPath, "utf8");
  const typesSrc = readFileSync(path.join(ROOT, "src/types/padel-court.ts"), "utf8");
  const name = "Wakit Rakit Spring";
  const court = findCourtBySlug("wakit-rakit-spring")!;
  const cur = currentListing(court);
  const check = validateForm(SAMPLE_FORM_PATCH(formFromListing(cur)));
  assert.ok(check.ok, JSON.stringify(!check.ok && check.errors));
  const changes = buildChanges(cur, check.form);
  assert.deepEqual(Object.keys(changes).sort(), ["amenities", "bookingUrl", "courtType", "indoorCourts", "numberOfCourts", "openingHours", "phone", "pricingText"].sort());
  assert.deepEqual(changes.openingHours, { monday: "Closed", sunday: "9h-21h" });
  assert.equal(changes.courtType, "both");

  const fields = readEntryFields(original, name);
  assert.equal(fields.openingHours.tuesday, "8h-22h");
  const photos = planPhotos("wakit-rakit-spring", ["pending/x/a.webp", "pending/x/b.webp"], ["wakit-rakit-spring.webp", "other.webp"], fields);
  assert.deepEqual(photos.files.map((f) => f.to), ["public/images/courts/wakit-rakit-spring-2.webp", "public/images/courts/wakit-rakit-spring-3.webp"]);
  assert.equal(photos.ogImageUrl, undefined); // the club already has a hero image
  assert.deepEqual(photos.galleryImages, ["/images/courts/wakit-rakit-spring-2.webp", "/images/courts/wakit-rakit-spring-3.webp"]);

  const today = "2026-10-16";
  const patched = patchCourtEntry(original, name, buildCourtPatch(changes, fields.openingHours, photos, today), today);

  // only bytes inside the entry changed
  const before = locateCourt(original, name);
  const after = locateCourt(patched, name);
  assert.equal(patched.slice(0, after.start), original.slice(0, before.start));
  assert.equal(patched.slice(after.end), original.slice(before.end));

  // still valid TypeScript against the real PadelCourt type: no errors beyond the ones the file already has
  // (the data file carries some old type errors; next.config ignores them at build time)
  const errsBefore = typecheck({ "data/padel-courts.ts": original, "types/padel-court.ts": typesSrc });
  const errsAfter = typecheck({ "data/padel-courts.ts": patched, "types/padel-court.ts": typesSrc });
  assert.deepEqual(errsAfter, errsBefore);
  const syntax = ts.transpileModule(patched, { reportDiagnostics: true }).diagnostics ?? [];
  assert.equal(syntax.length, 0);

  // evaluate both versions: every other club is identical, this one has the edit
  const a = (await evalDataFile(original, "padelCourts")) as Array<Record<string, unknown>>;
  const b = (await evalDataFile(patched, "padelCourts")) as Array<Record<string, unknown>>;
  assert.equal(a.length, b.length);
  let changed = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i].name === name) {
      changed++;
      const e = b[i];
      assert.deepEqual(e.openingHours, { ...(a[i].openingHours as object), monday: "Closed", sunday: "9h-21h" });
      assert.equal(e.phone, "832-304-4419");
      assert.equal(e.bookingUrl, "https://wakitrakit.com/spring/book");
      assert.equal(e.numberOfCourts, 6);
      assert.equal(e.indoorCourts, 2);
      assert.equal(e.outdoorCourts, 4);
      assert.equal(e.courtType, "both");
      assert.equal(e.pricingText, "Americano sessions $25 per person; court rental $60 per hour");
      assert.deepEqual(e.amenities, [...(a[i].amenities as string[]), "free parking"]);
      assert.equal(e.ownerConfirmedDate, today);
      assert.deepEqual(e.galleryImages, photos.galleryImages);
      assert.equal(e.ogImageUrl, a[i].ogImageUrl);
      // untouched fields stay as they were
      for (const k of ["description", "coordinates", "website", "email", "address", "status", "verificationDate", "id"]) {
        assert.deepEqual(e[k], a[i][k], k);
      }
    } else {
      assert.deepEqual(b[i], a[i]);
    }
  }
  assert.equal(changed, 1);
  // the stale "owner confirmed ... matches Google Maps" note on the hours line is replaced
  const entryText = patched.slice(after.start, after.end);
  assert.ok(!entryText.includes("matches Google Maps"));
  assert.ok(entryText.includes(`// updated by the club, approved ${today}`));
});

test("patcher: removing a field and adding one to an entry without them", async () => {
  const original = readFileSync(path.join(ROOT, "src/data/padel-courts.ts"), "utf8");
  const name = "Wakit Rakit Space Coast";
  const patched = patchCourtEntry(original, name, { set: { phone: null, bookingUrl: "https://wakitrakit.com/book", ownerConfirmedDate: "2026-10-16" } }, "2026-10-16");
  const b = (await evalDataFile(patched, "padelCourts")) as Array<Record<string, unknown>>;
  const e = b.find((c) => c.name === name)!;
  assert.equal(e.phone, undefined);
  assert.equal(e.bookingUrl, "https://wakitrakit.com/book");
  assert.equal(e.ownerConfirmedDate, "2026-10-16");
  assert.throws(() => patchCourtEntry(original, "No Such Club", { set: { phone: "1" } }, "2026-10-16"));
});

test("changelog: new entry lands at the top under the current month", async () => {
  const src = readFileSync(path.join(ROOT, "src/data/changelog.ts"), "utf8");
  const entry = changelogEntryFor("Wakit Rakit Spring", { openingHours: { sunday: "9h-21h" }, phone: "1", membershipEmail: "x@y.com" }, 2, "2026-10-16", "abc1234");
  assert.equal(entry.title, "Wakit Rakit Spring details updated by the club");
  assert.ok(!entry.note.includes("x@y.com"));
  assert.ok(!/—/.test(entry.note + entry.title));
  const out = addChangelogEntry(src, entry);
  const list = (await evalDataFile(out, "changelog")) as Array<Record<string, unknown>>;
  assert.equal(list.length, changelog.length + 1);
  assert.equal(list[0].title, entry.title);
  assert.equal(list[0].commit, "abc1234");
  assert.equal(list[0].type, "updated");
  assert.equal(out.split("October 2026").length, src.split("October 2026").length); // no duplicate month header
  const nov = addChangelogEntry(src, { ...entry, date: "2026-11-02" });
  assert.ok(nov.indexOf("November 2026") < nov.indexOf("October 2026"));
});

test("describeChanges and changedFieldWords read plainly", () => {
  const cur = currentListing(findCourtBySlug("wakit-rakit-spring")!);
  const check = validateForm(SAMPLE_FORM_PATCH(formFromListing(cur)));
  assert.ok(check.ok);
  const ch = buildChanges(cur, check.form);
  const lines = describeChanges(cur, ch);
  assert.ok(lines.some((l) => l.label === "Hours, Sunday" && l.before === "8 AM to 10 PM" && l.after === "9 AM to 9 PM"));
  assert.equal(changedFieldWords(ch, 1), "hours, phone number, booking link, court count, pricing, amenities and a photo");
});
