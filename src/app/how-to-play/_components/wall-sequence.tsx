/**
 * Side view of one half of a padel court showing the most common wall play:
 * the ball crosses the net, bounces once, hits the back glass and is played
 * on the way out. 52 SVG units = 1 metre horizontally (net at x=60, back
 * glass at x=580). Steps pulse in turn; the animation is off for people who
 * ask for reduced motion. CSS is namespaced with the pcf-wallseq prefix.
 */

const steps = [
  { n: 1, x: 250, y: 87 },
  { n: 2, x: 490, y: 204 },
  { n: 3, x: 558, y: 140 },
  { n: 4, x: 482, y: 118 },
];

export function WallSequence() {
  return (
    <figure className="pcf-wallseq">
      <style>{`
        .pcf-wallseq .pcf-wallseq-ring { opacity: 0; transform-box: fill-box; transform-origin: center; }
        @media (prefers-reduced-motion: no-preference) {
          .pcf-wallseq .pcf-wallseq-ring { animation: pcf-wallseq-pulse 6s ease-out infinite; }
          .pcf-wallseq [data-step="2"] .pcf-wallseq-ring { animation-delay: 1.5s; }
          .pcf-wallseq [data-step="3"] .pcf-wallseq-ring { animation-delay: 3s; }
          .pcf-wallseq [data-step="4"] .pcf-wallseq-ring { animation-delay: 4.5s; }
        }
        @keyframes pcf-wallseq-pulse {
          0% { opacity: 0; transform: scale(.7); }
          5% { opacity: .9; transform: scale(1); }
          22% { opacity: 0; transform: scale(1.5); }
          100% { opacity: 0; transform: scale(1.5); }
        }
      `}</style>
      <div className="rounded-2xl bg-court p-3 sm:p-5">
        <svg
          viewBox="0 0 640 260"
          role="img"
          aria-label="Side view of one half of a padel court. Step 1: the opponent's shot clears the net. Step 2: it bounces once on your floor. Step 3: it carries on into your back glass wall. Step 4: it comes back off the glass and you hit it back over the net before it touches the floor a second time."
          className="h-auto w-full"
        >
          <title>Playing a ball off the back glass, in four steps</title>
          {/* floor */}
          <rect x="0" y="220" width="640" height="40" fill="#15803D" />
          <line x1="0" y1="220" x2="640" y2="220" stroke="#4ADE80" strokeWidth="2" />
          {/* service line tick (6.95 m from net) */}
          <line x1="421" y1="220" x2="421" y2="230" stroke="#fff" strokeWidth="2" />
          <text x="421" y="250" fontSize="13" fill="#E2E8F0" textAnchor="middle" fontFamily="inherit">service line</text>
          {/* net */}
          <rect x="57" y="174" width="6" height="46" fill="#fff" />
          <text x="60" y="164" fontSize="14" fill="#E2E8F0" textAnchor="middle" fontFamily="inherit">net</text>
          {/* back wall: 3 m glass, 1 m mesh */}
          <rect x="580" y="64" width="12" height="156" fill="#7DD3FC" fillOpacity="0.85" />
          <rect x="580" y="12" width="12" height="52" fill="none" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3 3" />
          <text x="572" y="40" fontSize="13" fill="#94A3B8" textAnchor="end" fontFamily="inherit">mesh</text>
          <text x="572" y="88" fontSize="13" fill="#7DD3FC" textAnchor="end" fontFamily="inherit">back glass</text>

          {/* incoming path: over the net, bounce, into the glass */}
          <path d="M 10 150 Q 250 -10 490 218 L 576 140" fill="none" stroke="#FDE047" strokeWidth="3" strokeLinecap="round" />
          {/* rebound off the glass to the contact point */}
          <path d="M 576 140 Q 530 136 478 152" fill="none" stroke="#FDE047" strokeWidth="3" strokeLinecap="round" />
          {/* the return back over the net */}
          <path d="M 470 150 Q 300 20 40 120" fill="none" stroke="#4ADE80" strokeWidth="3" strokeDasharray="8 7" strokeLinecap="round" />

          {/* player (simple figure) */}
          <g stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" fill="none">
            <circle cx="430" cy="118" r="10" />
            <line x1="430" y1="128" x2="434" y2="180" />
            <line x1="434" y1="180" x2="420" y2="218" />
            <line x1="434" y1="180" x2="450" y2="218" />
            <line x1="432" y1="142" x2="456" y2="152" />
          </g>
          <ellipse cx="466" cy="152" rx="9" ry="13" fill="none" stroke="#4ADE80" strokeWidth="3" transform="rotate(30 466 152)" />

          {/* numbered steps */}
          {steps.map((s) => (
            <g key={s.n} data-step={s.n}>
              <circle className="pcf-wallseq-ring" cx={s.x} cy={s.y} r="22" fill="none" stroke="#FDE047" strokeWidth="3" />
              <circle cx={s.x} cy={s.y} r="15" fill="#FDE047" stroke="oklch(0.16 0.028 255)" strokeWidth="3" />
              <text x={s.x} y={s.y + 5} fontSize="15" fontWeight="700" textAnchor="middle" fill="oklch(0.16 0.028 255)" fontFamily="inherit">
                {s.n}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <figcaption className="sr-only">Playing a ball off the back glass, in four steps</figcaption>
    </figure>
  );
}
