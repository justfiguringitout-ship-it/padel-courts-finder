"use client";

import { Component, type ReactNode } from "react";

/**
 * Keeps a Google Maps failure (bad key, blocked referrer, marker race) from
 * taking the whole club page down. On error it shows the address and a plain
 * link to Google Maps instead of the interactive map.
 */
export class MapBoundary extends Component<
  { children: ReactNode; address: string; mapsUrl?: string },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    // Swallowed on purpose: the fallback below is the whole recovery.
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <section className="club-card" aria-labelledby="club-map-fallback">
        <div className="club-section-head">
          <h2 id="club-map-fallback" className="club-h2">Location</h2>
        </div>
        <p className="text-sm text-muted-foreground">{this.props.address}</p>
        {this.props.mapsUrl && (
          <a
            href={this.props.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex h-10 items-center rounded-xl border px-4 text-sm font-semibold hover:bg-accent"
          >
            Open in Google Maps
          </a>
        )}
      </section>
    );
  }
}
