"use client";

import { useState, type FormEvent } from "react";
import { trackPlausibleEvent } from "@/lib/analytics";
import { LEAD_INTERESTS, LEAD_LEVELS, LEAD_LIMITS, makeLeadId } from "@/lib/membership-lead";

const FORMSPREE = "https://formspree.io/f/xaqlweaw";
const API = "/api/membership-lead";

/**
 * "Interested in playing at <Club>?": a lead form for members-only clubs.
 * Every lead is logged in Formspree first, then /api/membership-lead puts a
 * ready-to-send draft to the club in Dito's Gmail. The hidden `website` field
 * is a honeypot for bots; people never see it.
 */
export function MembershipLeadForm({ slug, name }: { slug: string; name: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [noteLength, setNoteLength] = useState(0);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const field = (k: string) => String(data.get(k) ?? "").trim();
    const leadId = makeLeadId();
    const lead = {
      leadId,
      slug,
      name: field("name"),
      email: field("email"),
      phone: field("phone"),
      interest: field("interest"),
      level: field("level"),
      note: field("note"),
      consent: data.get("consent") === "yes",
      website: field("website"),
    };
    if (lead.name.length < 2 || !lead.email || !lead.consent) return;

    setStatus("sending");

    // 1. The log. Formspree keeps every lead even if the mail step fails.
    data.set("leadId", leadId);
    data.set("leadJson", JSON.stringify({ ...lead, club: name, at: new Date().toISOString() }));
    let logged = false;
    try {
      const res = await fetch(FORMSPREE, { method: "POST", body: data, headers: { Accept: "application/json" } });
      logged = res.ok;
    } catch {
      logged = false;
    }

    // 2. The draft to the club, the note to Dito and the player's confirmation.
    let mailed = false;
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(lead),
      });
      mailed = res.ok;
    } catch {
      mailed = false;
    }

    if (logged || mailed) {
      form.reset();
      setNoteLength(0);
      setStatus("sent");
      trackPlausibleEvent("Membership lead", { club: name });
    } else {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="club-form-done" role="status">
        <p className="font-semibold text-foreground">Thanks, we have your note.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          We will pass it to {name} within one business day and copy you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3" aria-describedby="lead-intro">
      <input type="hidden" name="formType" value="membership-lead" />
      <input type="hidden" name="clubSlug" value={slug} />
      <input type="hidden" name="clubName" value={name} />
      <input type="hidden" name="_subject" value={`Membership lead: ${name}`} />
      <div className="club-hp" aria-hidden="true">
        <label>
          Leave this empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className="block text-sm font-medium mb-1.5">Your name</label>
          <input
            id="lead-name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={LEAD_LIMITS.name}
            autoComplete="name"
            className="club-input"
          />
        </div>
        <div>
          <label htmlFor="lead-email" className="block text-sm font-medium mb-1.5">Email</label>
          <input
            id="lead-email"
            name="email"
            type="email"
            required
            maxLength={LEAD_LIMITS.email}
            autoComplete="email"
            inputMode="email"
            className="club-input"
          />
        </div>
      </div>

      <div>
        <label htmlFor="lead-phone" className="block text-sm font-medium mb-1.5">
          Phone <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <input
          id="lead-phone"
          name="phone"
          type="tel"
          maxLength={LEAD_LIMITS.phone}
          autoComplete="tel"
          inputMode="tel"
          className="club-input"
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-interest" className="block text-sm font-medium mb-1.5">I am interested in</label>
          <select id="lead-interest" name="interest" required defaultValue={LEAD_INTERESTS[0]} className="club-input club-select">
            {LEAD_INTERESTS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="lead-level" className="block text-sm font-medium mb-1.5">My padel level</label>
          <select id="lead-level" name="level" required defaultValue="" className="club-input club-select">
            <option value="" disabled>Choose one</option>
            {LEAD_LEVELS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <div className="flex items-baseline justify-between gap-2 mb-1.5">
          <label htmlFor="lead-note" className="block text-sm font-medium">
            Anything the club should know? <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <span className="text-xs text-muted-foreground font-mono" aria-hidden="true">
            {noteLength}/{LEAD_LIMITS.note}
          </span>
        </div>
        <textarea
          id="lead-note"
          name="note"
          rows={3}
          maxLength={LEAD_LIMITS.note}
          onChange={(e) => setNoteLength(e.currentTarget.value.length)}
          placeholder="When you would like to play, who with, questions about fees..."
          className="club-input min-h-[96px] resize-y"
        />
      </div>

      <label htmlFor="lead-consent" className="club-consent">
        <input id="lead-consent" name="consent" type="checkbox" value="yes" required />
        <span>Share my details with {name} so they can contact me.</span>
      </label>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-court px-5 text-sm font-semibold text-white transition-colors hover:bg-court-panel disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send my note"}
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
