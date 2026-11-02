"use client";

import { useEffect, useRef, useState } from "react";
import { trackPlausibleEvent } from "@/lib/analytics";
import { MembershipLeadForm } from "./membership-lead-form";

/**
 * The members-only lead card: one line and a "Yes, I am" button. The form
 * opens in place on click, or straight away when the page is opened at
 * #membership (the hero's "Ask about membership" link).
 */
export function MembershipLeadCard({ slug, name }: { slug: string; name: string }) {
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fromHash = () => {
      if (window.location.hash === "#membership") setOpen(true);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  useEffect(() => {
    if (open) formRef.current?.querySelector<HTMLInputElement>("#lead-name")?.focus({ preventScroll: true });
  }, [open]);

  return (
    <section id="membership" className="club-card club-lead" aria-labelledby="club-membership">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <div className="min-w-0">
          <h2 id="club-membership" className="club-h2">Interested in playing at {name}?</h2>
          <p id="lead-intro" className="mt-1 text-sm text-muted-foreground leading-relaxed">
            It is members only. Send a short note and we will pass it to the club.
          </p>
        </div>
        {!open && (
          <button
            type="button"
            aria-expanded={false}
            aria-controls="membership-form"
            onClick={() => {
              setOpen(true);
              trackPlausibleEvent("Membership lead open", { club: name });
            }}
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-court px-5 text-sm font-semibold text-white transition-colors hover:bg-court-panel"
          >
            Yes, I am
          </button>
        )}
      </div>
      {open && (
        <div id="membership-form" ref={formRef} className="mt-5 max-w-2xl">
          <MembershipLeadForm slug={slug} name={name} />
        </div>
      )}
    </section>
  );
}
