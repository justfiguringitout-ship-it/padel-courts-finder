"use client";

import { useState, type FormEvent } from "react";

const ENDPOINT = "https://formspree.io/f/xaqlweaw";

/**
 * "Tell us what changed": a short correction form for one club. Posts to the
 * same Formspree inbox as the other site forms. The hidden `website` field is
 * a honeypot for bots; people never see it.
 */
export function ClubCorrectionForm({ slug, name }: { slug: string; name: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("message") ?? "").trim().length < 3) return;
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("not accepted");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="club-form-done" role="status">
        <p className="font-semibold text-foreground">Thanks, got it.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          A person reads every note before anything on this page changes.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <input type="hidden" name="formType" value="club-correction" />
      <input type="hidden" name="clubSlug" value={slug} />
      <input type="hidden" name="clubName" value={name} />
      <input type="hidden" name="_subject" value={`Club correction: ${name}`} />
      <div className="club-hp" aria-hidden="true">
        <label>
          Leave this empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="club-correction-message" className="block text-sm font-medium mb-1.5">
          What is wrong or has changed?
        </label>
        <textarea
          id="club-correction-message"
          name="message"
          required
          minLength={3}
          rows={3}
          placeholder="New prices, different hours, two more courts, a new booking link..."
          className="club-input min-h-[96px] resize-y"
        />
      </div>
      <div>
        <label htmlFor="club-correction-email" className="block text-sm font-medium mb-1.5">
          Your email <span className="font-normal text-muted-foreground">(optional, only if you want a reply)</span>
        </label>
        <input
          id="club-correction-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          className="club-input"
        />
      </div>
      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-court px-5 text-sm font-semibold text-white transition-colors hover:bg-court-panel disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send update"}
        </button>
        {status === "error" ? (
          <p className="text-sm text-red-700" role="alert">
            That did not go through. Please try again, or email info@padelcourtsfinder.com.
          </p>
        ) : null}
      </div>
    </form>
  );
}
