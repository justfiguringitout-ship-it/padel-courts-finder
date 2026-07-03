/**
 * Brand mark: a padel court seen from above inside a glass box,
 * ball mid-rally. Used in the header and as the favicon (app/icon.svg).
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="oklch(0.16 0.028 255)" />
      <rect x="6.5" y="5" width="19" height="22" rx="2" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" />
      <line x1="6.5" y1="16" x2="25.5" y2="16" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="2 2" />
      <line x1="16" y1="8.5" x2="16" y2="13" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" />
      <line x1="16" y1="19" x2="16" y2="23.5" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" />
      <circle cx="21" cy="11" r="5" fill="#4ADE80" fillOpacity="0.25" />
      <circle cx="21" cy="11" r="3" fill="#4ADE80" />
    </svg>
  );
}
