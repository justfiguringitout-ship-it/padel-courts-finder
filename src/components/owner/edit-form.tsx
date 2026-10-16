"use client";

import { useMemo, useState } from "react";
import {
  ACCESS_LABELS,
  ACCESS_VALUES,
  CLOSE_TIMES,
  DAYS,
  DAY_LABELS,
  LIMITS,
  OPEN_TIMES,
  buildChanges,
  clockLabel,
  describeChanges,
  formFromListing,
  hasChanges,
  validateForm,
  type Access,
  type CurrentListing,
  type Day,
  type DayHours,
  type ListingForm,
} from "@/lib/owner/listing-fields";

export interface PastEdit {
  id: string;
  createdAt: string;
  status: "pending" | "approved" | "rejected" | "applied";
  summary: string;
  hasNote: boolean;
}

const STATUS_LABEL: Record<PastEdit["status"], string> = {
  pending: "Waiting for review",
  approved: "Approved, going live soon",
  applied: "Live",
  rejected: "Not published",
};

const SUGGESTED_AMENITIES = [
  "pro shop",
  "equipment rental",
  "locker rooms",
  "showers",
  "free parking",
  "cafe",
  "bar",
  "lounge",
  "clinics",
  "leagues",
  "junior programs",
  "covered courts",
  "lights for night play",
];

const MAX_PHOTOS = 8;
const MAX_BYTES = 10 * 1024 * 1024;
const UPLOAD_LIMIT = 3.5 * 1024 * 1024; // keep each request under Vercel's 4.5 MB body limit
const TYPES = ["image/jpeg", "image/png", "image/webp"];

interface Photo {
  key: string;
  name: string;
  preview: string;
  state: "uploading" | "done" | "error";
  path?: string;
  error?: string;
}

/** Shrink big photos in the browser so the upload fits; the server still resizes to 1600px WebP. */
async function prepareUpload(file: File): Promise<Blob> {
  if (file.size <= UPLOAD_LIMIT) return file;
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 2400 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext("2d")?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  for (const q of [0.9, 0.8, 0.7]) {
    const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, "image/jpeg", q));
    if (blob && blob.size <= UPLOAD_LIMIT) return blob;
  }
  throw new Error("too big");
}

function numOrNull(v: string): number | null {
  const t = v.trim();
  return t === "" ? null : Number(t);
}

export function OwnerEditForm({ current, past }: { current: CurrentListing; past: PastEdit[] }) {
  const initial = useMemo(() => formFromListing(current), [current]);
  const [form, setForm] = useState<ListingForm>(initial);
  const [note, setNote] = useState("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [rights, setRights] = useState(false);
  const [newAmenity, setNewAmenity] = useState("");
  const [step, setStep] = useState<"edit" | "review" | "sending" | "sent">("edit");
  const [errors, setErrors] = useState<string[]>([]);
  const [history, setHistory] = useState<PastEdit[]>(past);

  const set = <K extends keyof ListingForm>(k: K, v: ListingForm[K]) => setForm((f) => ({ ...f, [k]: v }));
  const setDay = (d: Day, v: DayHours) => setForm((f) => ({ ...f, hours: { ...f.hours, [d]: v } }));

  const doneUploads = photos.filter((p) => p.state === "done" && p.path);
  const uploading = photos.some((p) => p.state === "uploading");

  const preview = useMemo(() => {
    const check = validateForm(form);
    if (!check.ok) return null;
    const changes = buildChanges(current, check.form);
    return { changes, lines: describeChanges(current, changes, { privateEmail: "show" }) };
  }, [form, current]);

  function addAmenity(a: string) {
    const v = a.trim().replace(/\s+/g, " ");
    if (v.length < 2 || v.length > LIMITS.amenity) return;
    if (form.amenities.some((x) => x.toLowerCase() === v.toLowerCase())) return;
    set("amenities", [...form.amenities, v]);
  }

  async function onFiles(list: FileList | null) {
    if (!list) return;
    const room = MAX_PHOTOS - photos.length;
    const files = Array.from(list).slice(0, Math.max(0, room));
    for (const file of files) {
      const key = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const base: Photo = { key, name: file.name, preview: URL.createObjectURL(file), state: "uploading" };
      if (!TYPES.includes(file.type)) {
        setPhotos((p) => [...p, { ...base, state: "error", error: "Use JPG, PNG or WebP." }]);
        continue;
      }
      if (file.size > MAX_BYTES) {
        setPhotos((p) => [...p, { ...base, state: "error", error: "Over 10 MB." }]);
        continue;
      }
      setPhotos((p) => [...p, base]);
      try {
        const blob = await prepareUpload(file);
        const fd = new FormData();
        fd.append("photo", blob, file.name);
        const res = await fetch("/api/owner/photos", { method: "POST", body: fd });
        const j = (await res.json().catch(() => ({}))) as { ok?: boolean; path?: string; error?: string };
        if (!res.ok || !j.ok || !j.path) throw new Error(j.error || "Upload failed.");
        setPhotos((p) => p.map((x) => (x.key === key ? { ...x, state: "done", path: j.path } : x)));
      } catch (err) {
        const msg = err instanceof Error && err.message !== "too big" ? err.message : "Could not upload this photo.";
        setPhotos((p) => p.map((x) => (x.key === key ? { ...x, state: "error", error: msg } : x)));
      }
    }
  }

  function toReview() {
    const check = validateForm(form);
    const errs = check.ok ? [] : [...check.errors];
    if (note.length > LIMITS.note) errs.push("Your note is too long.");
    if (doneUploads.length && !rights) errs.push("Please confirm you own the photos or have permission to share them.");
    if (uploading) errs.push("Wait for the photos to finish uploading.");
    if (check.ok && !hasChanges(buildChanges(current, check.form)) && !doneUploads.length && !note.trim()) {
      errs.push("Nothing has changed yet.");
    }
    setErrors(errs);
    if (!errs.length) {
      setStep("review");
      window.scrollTo({ top: document.getElementById("owner-edit")?.offsetTop ?? 0, behavior: "smooth" });
    }
  }

  async function submit() {
    setStep("sending");
    setErrors([]);
    try {
      const res = await fetch("/api/owner/edits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form,
          note,
          photos: doneUploads.map((p) => p.path),
          rightsConfirmed: rights,
        }),
      });
      const j = (await res.json().catch(() => ({}))) as { ok?: boolean; id?: string; errors?: string[] };
      if (!res.ok || !j.ok) {
        setErrors(j.errors?.length ? j.errors : res.status === 401 ? ["You were signed out. Please sign in again."] : ["That did not go through. Please try again."]);
        setStep("review");
        return;
      }
      setHistory((h) => [
        {
          id: j.id ?? "new",
          createdAt: new Date().toISOString(),
          status: "pending",
          summary: preview?.lines.length ? `${preview.lines.length} change${preview.lines.length === 1 ? "" : "s"}` : "a note",
          hasNote: !!note,
        },
        ...h,
      ]);
      setStep("sent");
    } catch {
      setErrors(["That did not go through. Please try again."]);
      setStep("review");
    }
  }

  const pastList = (
    <section className="mt-8 club-card" aria-labelledby="owner-past">
      <h2 id="owner-past" className="club-h2">
        Your updates
      </h2>
      {history.length === 0 ? (
        <p className="mt-2 text-sm text-muted-foreground">Nothing sent yet.</p>
      ) : (
        <ul className="mt-3 divide-y divide-border">
          {history.map((e) => (
            <li key={e.id} className="flex flex-wrap items-baseline justify-between gap-2 py-2.5 text-sm">
              <span>
                {new Date(e.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}:{" "}
                {e.summary}
                {e.hasNote ? " (with a note)" : ""}
              </span>
              <span className={e.status === "applied" ? "font-semibold text-padel-green-dark" : "text-muted-foreground"}>
                {STATUS_LABEL[e.status]}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );

  if (step === "sent") {
    return (
      <>
        <section id="owner-edit" className="mt-8 club-form-done" role="status">
          <p className="font-semibold">Thanks, we review changes within one business day.</p>
          <p className="mt-1 text-sm text-muted-foreground">We will email you when your update is live.</p>
          <button
            type="button"
            className="mt-3 text-sm text-primary hover:underline"
            onClick={() => {
              setForm(initial);
              setNote("");
              setPhotos([]);
              setRights(false);
              setStep("edit");
            }}
          >
            Send another update
          </button>
        </section>
        {pastList}
      </>
    );
  }

  if (step === "review" || step === "sending") {
    return (
      <>
        <section id="owner-edit" className="mt-8 club-card" aria-labelledby="owner-review">
          <h2 id="owner-review" className="club-h2">
            Check your changes
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">Nothing is published until we have checked it.</p>
          {preview && preview.lines.length > 0 ? (
            <ul className="mt-4 divide-y divide-border">
              {preview.lines.map((l) => (
                <li key={l.label} className="py-3">
                  <p className="text-sm font-semibold">{l.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground break-words whitespace-pre-line">
                    <span className="sr-only">Now: </span>
                    <span className="line-through decoration-1">{l.before}</span>
                  </p>
                  <p className="mt-0.5 text-sm break-words whitespace-pre-line">
                    <span className="sr-only">New: </span>
                    {l.after}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm">No field changes.</p>
          )}
          {doneUploads.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-semibold">
                {doneUploads.length} new photo{doneUploads.length === 1 ? "" : "s"}
              </p>
              <div className="mt-2 grid grid-cols-4 gap-2">
                {doneUploads.map((p) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={p.key} src={p.preview} alt={p.name} className="aspect-[4/3] w-full rounded-lg object-cover border border-border" />
                ))}
              </div>
            </div>
          )}
          {note.trim() && (
            <div className="mt-4">
              <p className="text-sm font-semibold">Your note</p>
              <p className="mt-1 text-sm whitespace-pre-line break-words">{note.trim()}</p>
            </div>
          )}
          {errors.length > 0 && (
            <ul className="mt-4 space-y-1 text-sm text-red-700" role="alert">
              {errors.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={submit}
              disabled={step === "sending"}
              className="inline-flex h-11 items-center justify-center rounded-xl bg-court px-5 text-sm font-semibold text-white transition-colors hover:bg-court-panel disabled:opacity-60"
            >
              {step === "sending" ? "Sending..." : "Send for review"}
            </button>
            <button
              type="button"
              onClick={() => setStep("edit")}
              disabled={step === "sending"}
              className="inline-flex h-11 items-center justify-center rounded-xl border border-border px-5 text-sm font-semibold"
            >
              Back to editing
            </button>
          </div>
        </section>
        {pastList}
      </>
    );
  }

  return (
    <>
      <section id="owner-edit" className="mt-8 club-card" aria-labelledby="owner-edit-h">
        <h2 id="owner-edit-h" className="club-h2">
          Suggest changes
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Change only what is different. You will see a summary before anything is sent, and we check every change before it
          goes live.
        </p>

        {/* Hours */}
        <fieldset className="mt-6">
          <legend className="text-sm font-semibold">Hours</legend>
          <div className="mt-2 space-y-2">
            {DAYS.map((d) => {
              const h = form.hours[d];
              return (
                <div key={d} className="flex flex-wrap items-center gap-2">
                  <span className="w-24 text-sm">{DAY_LABELS[d]}</span>
                  <select
                    aria-label={`${DAY_LABELS[d]} status`}
                    value={h.state}
                    onChange={(e) => {
                      const v = e.target.value;
                      if (v === "open") setDay(d, { state: "open", open: "08:00", close: "22:00" });
                      else setDay(d, v === "closed" ? { state: "closed" } : { state: "unknown" });
                    }}
                    className="club-input club-select !w-auto"
                  >
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                    <option value="unknown">Not published</option>
                  </select>
                  {h.state === "open" && (
                    <>
                      <select
                        aria-label={`${DAY_LABELS[d]} opens`}
                        value={h.open}
                        onChange={(e) => setDay(d, { ...h, open: e.target.value })}
                        className="club-input club-select !w-auto"
                      >
                        {OPEN_TIMES.map((t) => (
                          <option key={t} value={t}>
                            {clockLabel(t)}
                          </option>
                        ))}
                      </select>
                      <span className="text-sm text-muted-foreground">to</span>
                      <select
                        aria-label={`${DAY_LABELS[d]} closes`}
                        value={h.close}
                        onChange={(e) => setDay(d, { ...h, close: e.target.value })}
                        className="club-input club-select !w-auto"
                      >
                        {CLOSE_TIMES.map((t) => (
                          <option key={t} value={t}>
                            {clockLabel(t)}
                          </option>
                        ))}
                      </select>
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <button
            type="button"
            className="mt-2 text-sm text-primary hover:underline"
            onClick={() => setForm((f) => ({ ...f, hours: Object.fromEntries(DAYS.map((d) => [d, f.hours.monday])) as ListingForm["hours"] }))}
          >
            Copy Monday to every day
          </button>
          <p className="mt-1 text-xs text-muted-foreground">Use your local time. For hours past midnight, choose midnight and tell us in the note.</p>
        </fieldset>

        {/* Contact */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="o-phone" className="block text-sm font-medium mb-1.5">
              Phone
            </label>
            <input id="o-phone" value={form.phone} onChange={(e) => set("phone", e.target.value)} maxLength={LIMITS.phone} inputMode="tel" className="club-input" />
          </div>
          <div>
            <label htmlFor="o-website" className="block text-sm font-medium mb-1.5">
              Website
            </label>
            <input id="o-website" value={form.website} onChange={(e) => set("website", e.target.value)} maxLength={LIMITS.url} inputMode="url" placeholder="https://" className="club-input" />
          </div>
          <div>
            <label htmlFor="o-booking" className="block text-sm font-medium mb-1.5">
              Booking link
            </label>
            <input
              id="o-booking"
              value={form.bookingUrl}
              onChange={(e) => set("bookingUrl", e.target.value)}
              maxLength={LIMITS.url}
              inputMode="url"
              placeholder="Where players book a court"
              className="club-input"
            />
          </div>
          <div>
            <label htmlFor="o-memail" className="block text-sm font-medium mb-1.5">
              Membership email <span className="font-normal text-muted-foreground">(private)</span>
            </label>
            <input
              id="o-memail"
              type="email"
              value={form.membershipEmail}
              onChange={(e) => set("membershipEmail", e.target.value)}
              maxLength={LIMITS.email}
              placeholder={current.membershipEmail ? `On file: ${current.membershipEmail}` : "Where membership questions should go"}
              className="club-input"
            />
            <p className="mt-1 text-xs text-muted-foreground">Never shown on the page. Leave blank to keep what we have.</p>
          </div>
        </div>

        {/* Courts */}
        <fieldset className="mt-6">
          <legend className="text-sm font-semibold">Padel courts</legend>
          <div className="mt-2 grid grid-cols-3 gap-3 max-w-md">
            {(
              [
                ["numberOfCourts", "Total"],
                ["indoorCourts", "Indoor"],
                ["outdoorCourts", "Outdoor"],
              ] as const
            ).map(([k, label]) => (
              <div key={k}>
                <label htmlFor={`o-${k}`} className="block text-xs text-muted-foreground mb-1">
                  {label}
                </label>
                <input
                  id={`o-${k}`}
                  type="number"
                  min={k === "numberOfCourts" ? 1 : 0}
                  max={LIMITS.courts}
                  step={1}
                  value={form[k] ?? ""}
                  onChange={(e) => set(k, numOrNull(e.target.value))}
                  className="club-input"
                />
              </div>
            ))}
          </div>
        </fieldset>

        {/* Pricing */}
        <div className="mt-6">
          <label htmlFor="o-pricing" className="block text-sm font-medium mb-1.5">
            Pricing
          </label>
          <textarea
            id="o-pricing"
            value={form.pricingText}
            onChange={(e) => set("pricingText", e.target.value)}
            maxLength={LIMITS.pricingText}
            rows={2}
            placeholder="Court rental $60/hour off-peak, $80 peak; Open play $20 per person"
            className="club-input resize-y"
          />
        </div>

        {/* Amenities */}
        <div className="mt-6">
          <p className="text-sm font-medium">Amenities</p>
          <div className="mt-2 club-chips">
            {form.amenities.map((a) => (
              <button
                key={a}
                type="button"
                className="club-amenity"
                aria-label={`Remove ${a}`}
                onClick={() => set("amenities", form.amenities.filter((x) => x !== a))}
              >
                {a} <span aria-hidden="true">×</span>
              </button>
            ))}
            {form.amenities.length === 0 && <span className="text-sm text-muted-foreground">None listed.</span>}
          </div>
          <div className="mt-3 flex gap-2 max-w-md">
            <input
              value={newAmenity}
              onChange={(e) => setNewAmenity(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addAmenity(newAmenity);
                  setNewAmenity("");
                }
              }}
              maxLength={LIMITS.amenity}
              placeholder="Add an amenity"
              aria-label="Add an amenity"
              className="club-input"
            />
            <button
              type="button"
              onClick={() => {
                addAmenity(newAmenity);
                setNewAmenity("");
              }}
              className="shrink-0 rounded-xl border border-border px-4 text-sm font-semibold"
            >
              Add
            </button>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {SUGGESTED_AMENITIES.filter((s) => !form.amenities.some((a) => a.toLowerCase() === s)).map((s) => (
              <button key={s} type="button" onClick={() => addAmenity(s)} className="rounded-full border border-dashed border-border px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground">
                + {s}
              </button>
            ))}
          </div>
        </div>

        {/* Access */}
        <div className="mt-6">
          <label className="club-consent">
            <input type="checkbox" checked={form.membersOnly} onChange={(e) => set("membersOnly", e.target.checked)} />
            <span>This is a private or members-only club</span>
          </label>
          {form.membersOnly && (
            <div className="mt-2 max-w-md">
              <label htmlFor="o-access" className="block text-sm font-medium mb-1.5">
                Who can play
              </label>
              <select id="o-access" value={form.access} onChange={(e) => set("access", e.target.value as Access | "")} className="club-input club-select">
                <option value="">Choose one</option>
                {ACCESS_VALUES.map((a) => (
                  <option key={a} value={a}>
                    {ACCESS_LABELS[a]}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="mt-6">
          <label htmlFor="o-desc" className="block text-sm font-medium mb-1.5">
            Description <span className="font-normal text-muted-foreground">(a suggestion; we may edit it for length and style)</span>
          </label>
          <textarea
            id="o-desc"
            value={form.description}
            onChange={(e) => set("description", e.target.value)}
            maxLength={LIMITS.description}
            rows={5}
            className="club-input resize-y"
          />
          <p className="mt-1 text-xs text-muted-foreground">
            {form.description.length} / {LIMITS.description}
          </p>
        </div>

        {/* Photos */}
        <div className="mt-6">
          <p className="text-sm font-medium">Photos</p>
          <p className="mt-0.5 text-xs text-muted-foreground">JPG, PNG or WebP, up to {MAX_PHOTOS} photos, 10 MB each. Wide shots of the courts work best.</p>
          {photos.length > 0 && (
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {photos.map((p) => (
                <div key={p.key} className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.preview} alt={p.name} className="aspect-[4/3] w-full rounded-lg object-cover border border-border" />
                  <p className={`mt-1 text-xs ${p.state === "error" ? "text-red-700" : "text-muted-foreground"}`}>
                    {p.state === "uploading" ? "Uploading..." : p.state === "error" ? p.error : "Ready"}
                  </p>
                  <button
                    type="button"
                    onClick={() => setPhotos((list) => list.filter((x) => x.key !== p.key))}
                    className="absolute right-1 top-1 rounded-full bg-black/60 px-2 text-xs text-white"
                    aria-label={`Remove ${p.name}`}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
          {photos.length < MAX_PHOTOS && (
            <label className="mt-3 inline-flex h-10 cursor-pointer items-center rounded-xl border border-border px-4 text-sm font-semibold">
              Add photos
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                multiple
                className="sr-only"
                onChange={(e) => {
                  void onFiles(e.target.files);
                  e.target.value = "";
                }}
              />
            </label>
          )}
          {doneUploads.length > 0 && (
            <label className="club-consent mt-2">
              <input type="checkbox" checked={rights} onChange={(e) => setRights(e.target.checked)} />
              <span>I own these photos or have permission to share them, and Padel Courts Finder may show them on the club page.</span>
            </label>
          )}
        </div>

        {/* Note */}
        <div className="mt-6">
          <label htmlFor="o-note" className="block text-sm font-medium mb-1.5">
            Note to Dito <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <textarea
            id="o-note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            maxLength={LIMITS.note}
            rows={3}
            placeholder="Anything else we should know, like seasonal hours or a new location."
            className="club-input resize-y"
          />
        </div>

        {errors.length > 0 && (
          <ul className="mt-4 space-y-1 text-sm text-red-700" role="alert">
            {errors.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        )}

        <div className="mt-6">
          <button
            type="button"
            onClick={toReview}
            disabled={uploading}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-court px-5 text-sm font-semibold text-white transition-colors hover:bg-court-panel disabled:opacity-60"
          >
            {uploading ? "Uploading photos..." : "Review changes"}
          </button>
        </div>
      </section>
      {pastList}
    </>
  );
}
