"use client";

import { Component, type ReactNode } from "react";

/**
 * Keeps a Google Maps failure (bad key, blocked script, marker errors) from
 * taking down the whole page. Shows a quiet fallback in place of the map.
 */
export class MapErrorBoundary extends Component<{ children: ReactNode; height?: number }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("Map failed to render", error);
  }

  render() {
    if (this.state.failed) {
      return (
        <div
          className="rounded-xl border bg-muted flex items-center justify-center text-sm text-muted-foreground px-4 text-center"
          style={{ height: this.props.height ?? 400 }}
        >
          The map could not load right now. The address is listed on this page.
        </div>
      );
    }
    return this.props.children;
  }
}
