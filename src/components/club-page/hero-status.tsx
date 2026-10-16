"use client";

import { useEffect, useState } from "react";
import type { DayHours, LiveStatus } from "@/lib/club-page";
import { liveStatus, nowInTimeZone } from "@/lib/club-page";

/**
 * Status chip for the club hero. The server renders "Open for play"; after
 * hydration it becomes "Open now · until 11:30 PM" (or "Closed now · opens
 * 7 AM") in the club's own time zone. Every text the chip can show is laid
 * out invisibly in the same grid cell, so the chip is as wide as its longest
 * possible text from the first paint and nothing around it moves (CLS 0).
 */
export function HeroStatus({
  days,
  timeZone,
  fallback,
  candidates,
}: {
  days: DayHours[];
  timeZone?: string;
  /** Server text, shown until the club's local time is known */
  fallback: string;
  /** Every text liveStatus can return for this club's hours */
  candidates: string[];
}) {
  const [live, setLive] = useState<LiveStatus>(null);

  useEffect(() => {
    if (!timeZone) return;
    const now = nowInTimeZone(timeZone);
    if (now) setLive(liveStatus(days, now));
  }, [days, timeZone]);

  const text = live?.text ?? fallback;
  const tone = live?.tone ?? "open";
  const all = [...new Set([fallback, ...candidates])];

  return (
    <span className={`club-chip club-chip-live ${tone === "open" ? "club-chip-open" : "club-chip-shut"}`}>
      <span className="club-chip-dot" aria-hidden="true" />
      <span className="club-chip-stack">
        {all.map((t) => (
          <span key={t} aria-hidden="true" className="club-chip-ghost">{t}</span>
        ))}
        <span aria-live="polite">{text}</span>
      </span>
    </span>
  );
}
