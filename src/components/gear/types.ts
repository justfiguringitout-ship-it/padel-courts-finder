/**
 * Shared data shapes for the gear-guide visuals and compare tables.
 *
 * Every value here must come from what the guide page itself states.
 * Optional fields stay undefined when the page does not state them, and
 * the components render that honestly ("Not stated") instead of guessing.
 */

export type RacketShape = 'round' | 'teardrop' | 'diamond' | 'hybrid';

/** Neutral accent families. Colors only, never logos or trademarks. */
export type BrandFamily = 'nox' | 'babolat' | 'head' | 'wilson' | 'adidas' | 'bullpadel' | 'other';

export interface GearRacket {
  /** Anchor id of the product card on the page, e.g. "babolat-contact" */
  id: string;
  rank: number;
  /** Display name, as written in the card heading */
  name: string;
  /** productName passed to affiliate tracking, identical to the card's CTA */
  productName: string;
  /** Exact price string as shown on the page, e.g. "$89.95" */
  price: string;
  /** Existing affiliate URL, unchanged */
  href: string;
  brand: BrandFamily;
  shape: RacketShape;
  /** Shape wording as the page states it, e.g. "Round (511cm²)" */
  shapeLabel: string;
  weight: string;
  /** Only when the page states it (e.g. "Low", "High", "Adjustable") */
  balance?: string;
  core: string;
  face: string;
  level?: string;
  bestFor: string;
  /** Overall score as already published on the page, e.g. "7.3/10" */
  score?: string;
}

/** Outsole patterns we can draw. `unknown` = the page does not state one. */
export type SolePattern = 'herringbone' | 'herringbone-studs' | 'hybrid' | 'running' | 'unknown';

export interface GearShoe {
  id: string;
  name: string;
  productName: string;
  price: string;
  href: string;
  pattern: SolePattern;
  /** Plain label for the outsole as the page states it */
  patternLabel: string;
  bestFor: string;
  standout: string;
}
