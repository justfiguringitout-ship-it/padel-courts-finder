/**
 * Background B-roll for dark hero sections. Parent must be
 * `relative overflow-hidden` (ideally with `grain bg-court`); content
 * above it needs `relative`. Desktop-only (`hidden md:block`) so mobile
 * LCP is untouched, and `.hero-bg-video` in globals.css removes it for
 * prefers-reduced-motion users.
 */
export function HeroVideo() {
  return (
    <>
      <video
        className="hero-bg-video absolute inset-0 h-full w-full object-cover opacity-40 hidden md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/video/hero-padel-poster.jpg"
        aria-hidden="true"
      >
        <source src="/video/hero-padel.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-court/60 via-transparent to-court/80 pointer-events-none" aria-hidden="true" />
    </>
  );
}
