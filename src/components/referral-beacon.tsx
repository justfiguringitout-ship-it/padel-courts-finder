"use client";

/**
 * AI leaderboard referral beacon. Once per browser session, and only when the
 * visit came from another site (document.referrer is external) or the URL has
 * utm_source, send the referrer and utm_source to POST /api/ref. The server
 * keeps only a daily count per source (see /ai-leaderboard).
 */
import { useEffect } from "react";

const FLAG = "pcf_ref_sent";

export function ReferralBeacon() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem(FLAG)) return;
      const utm = new URLSearchParams(window.location.search).get("utm_source");
      let external = false;
      if (document.referrer) {
        try {
          external = new URL(document.referrer).host !== window.location.host;
        } catch {
          external = false;
        }
      }
      if (!external && !utm) return;
      sessionStorage.setItem(FLAG, "1");
      const body = JSON.stringify({
        ref: external ? document.referrer.slice(0, 1000) : null,
        utm: utm ? utm.slice(0, 100) : null,
      });
      const blob = new Blob([body], { type: "text/plain" });
      if (navigator.sendBeacon && navigator.sendBeacon("/api/ref", blob)) return;
      void fetch("/api/ref", { method: "POST", body, keepalive: true }).catch(() => {});
    } catch {
      // never let counting break the page
    }
  }, []);
  return null;
}
