"use client";

import { useEffect, useState } from "react";
import type { DayHours, ZonedNow } from "@/lib/club-page";
import { liveStatus, nowInTimeZone } from "@/lib/club-page";

/**
 * Weekly hours table. The table is server-rendered; after hydration this
 * marks today's row and, when the club's time zone and today's hours are both
 * known, shows "Open now" or "Closed now". Nothing changes size, so no layout
 * shift.
 */
export function ClubHours({
  heading,
  headingId,
  days,
  timeZone,
  showLive,
  children,
}: {
  heading: string;
  headingId: string;
  /** Server-rendered summary and notes, shown under the heading */
  children?: React.ReactNode;
  days: DayHours[];
  timeZone?: string;
  /** false for clubs that are not open (coming soon, temporarily closed) */
  showLive: boolean;
}) {
  const [now, setNow] = useState<ZonedNow | null>(null);

  useEffect(() => {
    // Without a reliable club time zone, highlight the visitor's own today only.
    setNow(nowInTimeZone(timeZone));
  }, [timeZone]);

  const live = now && showLive && timeZone ? liveStatus(days, now) : null;

  return (
    <div>
      <div className="club-section-head">
        <h2 id={headingId} className="club-h2">{heading}</h2>
        <span aria-live="polite">
          {live ? (
            <span className={`club-live-pill ${live.tone === "open" ? "is-open" : "is-closed"}`}>
              <span className="club-live-dot" aria-hidden="true" />
              {live.text}
            </span>
          ) : null}
        </span>
      </div>
      {children}
      <dl className="club-hours-table">
        {days.map((d, i) => {
          const isToday = now?.dayIdx === i;
          return (
            <div key={d.day} className="club-hours-row" data-today={isToday ? "true" : undefined}>
              <dt>
                {d.day}
                {isToday ? <span className="sr-only"> (today)</span> : null}
              </dt>
              <dd className={d.kind === "closed" || d.kind === "unknown" ? "is-muted" : undefined}>
                {d.kind === "unknown" ? "Not published" : d.label}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
