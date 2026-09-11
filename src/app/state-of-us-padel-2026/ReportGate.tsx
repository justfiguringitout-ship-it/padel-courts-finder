"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

/** Unguessable, noindexed URL of the full report. Keep in sync with
 *  src/app/report/us-padel-2026-c7x4k9/page.tsx. */
const REPORT_URL = "/report/us-padel-2026-c7x4k9";
const LS_KEY = "pcf-sop2026-unlocked";

/**
 * Email gate for the full State of US Padel report. Posts to Formspree
 * (same inbox as the other site forms), then reveals the private report
 * link in place. Unlock persists per-browser via localStorage.
 */
export function ReportGate() {
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(LS_KEY)) setUnlocked(true);
    } catch {}
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("https://formspree.io/f/xaqlweaw", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("formspree rejected");
      try {
        localStorage.setItem(LS_KEY, "1");
      } catch {}
      setUnlocked(true);
    } catch {
      setStatus("error");
    }
  }

  if (unlocked) {
    return (
      <div className="rounded-2xl border border-padel-green/40 bg-padel-green/10 p-6 md:p-8">
        <h3 className="font-display text-xl font-bold text-white mb-2">You&apos;re in.</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xl">
          The full report is yours — state rankings, the facility profile, every pipeline
          club, and the padel deserts table. Bookmark it; the numbers update as the
          directory grows.
        </p>
        <a
          href={REPORT_URL}
          className="inline-flex items-center gap-2 rounded-xl bg-padel-green hover:bg-padel-green-dark active:scale-[0.98] text-white font-semibold px-7 py-3.5 transition-all shadow-lg shadow-padel-green/25"
        >
          Open the full report
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-xl">
      <input type="hidden" name="formType" value="state-of-padel-full-report" />
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="email"
          name="email"
          required
          placeholder="Your email"
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-stone-500 text-sm"
        />
        <select
          name="role"
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm"
          defaultValue=""
        >
          <option value="" disabled>
            I&apos;m a… (optional)
          </option>
          <option value="club-operator">Club owner / operator</option>
          <option value="investor">Investor / developer</option>
          <option value="journalist">Journalist / researcher</option>
          <option value="player">Player / fan</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-xl bg-padel-green hover:bg-padel-green-dark active:scale-[0.98] disabled:opacity-60 text-white font-semibold px-7 py-3.5 transition-all shadow-lg shadow-padel-green/25"
      >
        {status === "sending" ? "Unlocking…" : "Get the full report"}
        <ArrowRight className="w-4 h-4" />
      </button>
      {status === "error" && (
        <p className="text-sm text-red-300">
          Something went wrong — try again, or email us via the{" "}
          <a href="/advertise#partner-form" className="underline">
            contact form
          </a>
          .
        </p>
      )}
      <p className="text-xs text-white/40">
        Free. We&apos;ll only use your email for the report and occasional US padel data
        updates — no spam, unsubscribe anytime.
      </p>
    </form>
  );
}
