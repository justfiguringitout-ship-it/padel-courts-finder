import { RacketFigure } from './racket-figure';
import type { GearRacket, RacketShape } from './types';

/** Sweet-spot wording from /blog/padel-racket-shapes-explained. */
export const SWEET_SPOT_TEXT: Partial<Record<RacketShape, string>> = {
  round: 'Center, large',
  teardrop: 'Mid-high, medium',
  diamond: 'High, small',
};

export const NOT_STATED = 'Not stated';

/**
 * Compact "spec plate" for a product card: the racket lying on its side,
 * plus the things the card's tags do not already say (sweet spot,
 * balance, level). Values the page does not state read "Not stated".
 */
export function RacketPlate({ racket, uidPrefix }: { racket: GearRacket; uidPrefix: string }) {
  const spot = SWEET_SPOT_TEXT[racket.shape];
  return (
    <figure className="pcf-gear-plate mb-5 flex items-center gap-4 rounded-xl border border-stone-200 px-3 py-3 sm:px-4">
      <RacketFigure
        uid={`${uidPrefix}-plate-${racket.id}`}
        shape={racket.shape}
        brand={racket.brand}
        face={racket.face}
        orientation="horizontal"
        className="pcf-gear-plate-racket h-auto w-28 shrink-0 sm:w-40"
      />
      <figcaption className="min-w-0 flex-1">
        <span className="sr-only">{`Illustration of the ${racket.name}, a ${racket.shapeLabel.toLowerCase()} padel racket.`}</span>
        <dl className="grid grid-cols-1 gap-y-1 text-xs sm:grid-cols-2 sm:gap-x-5">
          <PlateRow label="Shape" value={racket.shapeLabel} />
          {spot && <PlateRow label="Sweet spot" value={spot} />}
          <PlateRow label="Balance" value={racket.balance} />
          {racket.level && <PlateRow label="Level" value={racket.level} />}
        </dl>
      </figcaption>
    </figure>
  );
}

function PlateRow({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-2 border-b border-dashed border-stone-200 pb-1 last:border-b-0">
      <dt className="font-mono text-[10px] uppercase tracking-wider text-stone-400">{label}</dt>
      <dd className={`text-right font-medium ${value ? 'text-stone-700' : 'text-stone-400 italic font-normal'}`}>{value ?? NOT_STATED}</dd>
    </div>
  );
}
