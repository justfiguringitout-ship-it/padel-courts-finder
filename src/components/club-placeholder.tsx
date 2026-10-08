interface ClubPlaceholderProps {
  /** Accessible label, usually the club name. */
  label: string;
  /** Number of courts, shown as a small caption when known. */
  courts?: number;
}

/**
 * Designed stand-in for clubs without a photo: a top-down padel court drawn
 * in court navy and turf green (the drawing lives in the `.court-placeholder`
 * CSS class). Fills its positioned parent, so the parent's aspect ratio
 * reserves the space and nothing shifts.
 */
export function ClubPlaceholder({ label, courts }: ClubPlaceholderProps) {
  return (
    <div className="absolute inset-0" role="img" aria-label={label}>
      <div className="grain court-placeholder h-full w-full">
        {courts && courts > 0 ? (
          <span className="absolute bottom-2.5 left-3 font-mono text-[11px] tracking-wide text-turf/80">
            {courts} {courts === 1 ? "court" : "courts"}
          </span>
        ) : null}
      </div>
    </div>
  );
}
