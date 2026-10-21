/**
 * Browser side of the Club Spotlight first-party log: one small beacon per
 * event to POST /api/spotlight/event. sendBeacon survives page unloads, which
 * matters for outbound clicks; fetch keepalive is the fallback.
 */
import type { SpotlightClickKind, SpotlightEventName, SpotlightPlacement } from "./spotlight-events";

export const SPOTLIGHT_EVENT_URL = "/api/spotlight/event";

export function sendSpotlightEvent(
  slug: string,
  event: SpotlightEventName,
  placement: SpotlightPlacement,
  kind?: SpotlightClickKind
) {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const body = JSON.stringify({
    slug,
    event,
    placement,
    kind: kind ?? null,
    path: window.location.pathname,
    referrer: document.referrer || null,
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
  });
  try {
    const blob = new Blob([body], { type: "application/json" });
    if (navigator.sendBeacon && navigator.sendBeacon(SPOTLIGHT_EVENT_URL, blob)) return;
  } catch {
    // fall through to fetch
  }
  try {
    void fetch(SPOTLIGHT_EVENT_URL, { method: "POST", body, keepalive: true, headers: { "Content-Type": "application/json" } }).catch(
      () => {}
    );
  } catch {
    // never let tracking break the page
  }
}
