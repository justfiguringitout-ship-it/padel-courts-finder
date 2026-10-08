import { TrackedLink } from '@/components/TrackedLink';
import { RacketFigure } from './racket-figure';
import { NOT_STATED } from './racket-plate';
import { ShoeSole } from './shoe-sole';
import type { GearRacket, GearShoe } from './types';

/**
 * Compare view for the gear guides.
 *
 * Racket guides get a to-scale "line-up" (every racket drawn the same size,
 * so the shape difference is obvious at a glance) and a compact spec table.
 * The table scrolls sideways inside its own container on phones, keeps the
 * product column (with its Amazon button) pinned, and reuses TrackedLink so
 * every outbound click carries the same tracking and rel="sponsored" as the
 * rest of the page.
 */

function Missing() {
  return <span className="italic text-stone-400">{NOT_STATED}</span>;
}

function AmazonButton({ href, productName, compact }: { href: string; productName: string; compact?: boolean }) {
  return (
    <TrackedLink
      href={href}
      type="affiliate"
      productName={productName}
      target="_blank"
      rel="noopener noreferrer"
      className={`pcf-compare-cta inline-flex items-center justify-center whitespace-nowrap rounded-md bg-padel-green font-semibold text-white transition-colors hover:bg-padel-green-dark ${
        compact ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-xs'
      }`}
    >
      Check price <span aria-hidden="true" className="ml-1">&rarr;</span>
    </TrackedLink>
  );
}

const TH = 'px-3 py-2.5 text-left font-mono text-[10px] font-semibold uppercase tracking-wider text-stone-500 whitespace-nowrap';
const TD = 'px-3 py-3 align-top text-stone-600';

export interface RacketCompareProps {
  rackets: GearRacket[];
  /** Unique per page, keeps SVG ids distinct */
  uidPrefix: string;
  /** Accessible name for the table, e.g. "Beginner padel rackets compared" */
  caption: string;
  showLineup?: boolean;
  footnote?: string;
}

export function RacketCompare({ rackets, uidPrefix, caption, showLineup = true, footnote }: RacketCompareProps) {
  const hasScore = rackets.some((r) => r.score);
  const hasLevel = rackets.some((r) => r.level);
  return (
    <div className="pcf-compare-wrap lg:-mx-32">
      {showLineup && (
        <ol
          className="pcf-gear-lineup relative -mx-4 mb-6 flex scroll-px-4 sm:scroll-px-0 snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 md:grid md:overflow-visible md:pb-0"
          style={{ gridTemplateColumns: `repeat(${rackets.length}, minmax(0, 1fr))` }}
          aria-label={`${caption}: shape outlines`}
        >
          {rackets.map((r) => (
            <li key={r.id} className="w-[9.5rem] shrink-0 snap-start md:w-auto">
              <a
                href={`#${r.id}`}
                className="pcf-gear-lineup-card group flex h-full flex-col rounded-xl border border-stone-200 bg-white p-3 transition-shadow hover:border-padel-green/50 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-semibold text-stone-400">#{r.rank}</span>
                  <span className="text-xs font-bold tabular-nums text-foreground">{r.price}</span>
                </div>
                <div className="pcf-gear-lineup-art relative my-2 flex justify-center">
                  <RacketFigure
                    uid={`${uidPrefix}-lineup-${r.id}`}
                    shape={r.shape}
                    brand={r.brand}
                    face={r.face}
                    className="h-32 w-auto"
                  />
                </div>
                <div className="text-[13px] font-semibold leading-snug text-foreground group-hover:text-padel-green">{r.name}</div>
                <dl className="mt-2 space-y-0.5 text-[11px] leading-snug text-stone-500">
                  <div className="flex justify-between gap-2"><dt className="sr-only">Shape</dt><dd>{r.shapeLabel}</dd></div>
                  <div className="flex justify-between gap-2"><dt>Weight</dt><dd className="text-right font-medium text-stone-700">{r.weight}</dd></div>
                  <div className="flex justify-between gap-2"><dt>Balance</dt><dd className={`text-right ${r.balance ? 'font-medium text-stone-700' : 'italic text-stone-400'}`}>{r.balance ?? NOT_STATED}</dd></div>
                  <div><dt className="sr-only">Core and face</dt><dd className="text-stone-600">{r.core} / {r.face}</dd></div>
                  {r.level && <div className="flex justify-between gap-2"><dt>Level</dt><dd className="text-right font-medium text-stone-700">{r.level}</dd></div>}
                </dl>
                <span className="mt-auto pt-2 text-[11px] font-medium text-padel-green">Read review <span aria-hidden="true">&darr;</span></span>
              </a>
            </li>
          ))}
        </ol>
      )}

      <p className="mb-2 text-xs text-stone-400 sm:hidden" aria-hidden="true">Swipe the table sideways for every spec &rarr;</p>
      <div
        className="pcf-compare relative overflow-x-auto rounded-xl border border-stone-200 bg-white"
        role="region"
        aria-label={caption}
        tabIndex={0}
      >
        <table className="w-full min-w-[860px] border-collapse text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-stone-50">
            <tr className="border-b border-stone-200">
              <th scope="col" className={`${TH} pcf-compare-sticky sticky left-0 z-20 bg-stone-50`}>Racket</th>
              <th scope="col" className={TH}>Price</th>
              <th scope="col" className={TH}>Shape</th>
              <th scope="col" className={TH}>Weight</th>
              <th scope="col" className={TH}>Balance</th>
              <th scope="col" className={TH}>Core</th>
              <th scope="col" className={TH}>Face</th>
              {hasScore && <th scope="col" className={TH}>Score</th>}
              {hasLevel && <th scope="col" className={TH}>Level</th>}
              <th scope="col" className={TH}>Best for</th>
            </tr>
          </thead>
          <tbody>
            {rackets.map((r, i) => (
              <tr key={r.id} className={`border-b border-stone-100 last:border-b-0 ${i % 2 === 1 ? 'bg-stone-50/40' : ''}`}>
                <th scope="row" className="pcf-compare-sticky sticky left-0 z-10 w-[10.5rem] min-w-[10.5rem] bg-white px-3 py-3 text-left align-top font-normal sm:w-56 sm:min-w-[14rem]">
                  <div className="flex items-start gap-2">
                    <RacketFigure
                      uid={`${uidPrefix}-row-${r.id}`}
                      shape={r.shape}
                      brand={r.brand}
                      face={r.face}
                      showSweetSpot={false}
                      className="mt-0.5 h-10 w-5 shrink-0"
                    />
                    <div className="min-w-0">
                      <a href={`#${r.id}`} className="block text-[13px] font-semibold leading-snug text-foreground hover:text-padel-green">
                        <span className="mr-1 font-mono text-[11px] text-stone-400">#{r.rank}</span>
                        {r.name}
                      </a>
                      <div className="mt-1.5">
                        <AmazonButton href={r.href} productName={r.productName} compact />
                      </div>
                    </div>
                  </div>
                </th>
                <td className={`${TD} whitespace-nowrap font-semibold tabular-nums text-foreground`}>{r.price}</td>
                <td className={`${TD} whitespace-nowrap`}>{r.shapeLabel}</td>
                <td className={`${TD} whitespace-nowrap tabular-nums`}>{r.weight}</td>
                <td className={`${TD} whitespace-nowrap`}>{r.balance ?? <Missing />}</td>
                <td className={TD}>{r.core}</td>
                <td className={TD}>{r.face}</td>
                {hasScore && <td className={`${TD} whitespace-nowrap tabular-nums`}>{r.score ?? <Missing />}</td>}
                {hasLevel && <td className={`${TD} whitespace-nowrap`}>{r.level ?? <Missing />}</td>}
                <td className={`${TD} min-w-[13rem] text-[13px] leading-snug`}>{r.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footnote && <p className="mt-3 text-xs text-stone-500">{footnote}</p>}
    </div>
  );
}

export interface ShoeCompareProps {
  shoes: GearShoe[];
  uidPrefix: string;
  caption: string;
}

export function ShoeCompare({ shoes, uidPrefix, caption }: ShoeCompareProps) {
  return (
    <div className="pcf-compare-wrap lg:-mx-32">
      <p className="mb-2 text-xs text-stone-400 sm:hidden" aria-hidden="true">Swipe the table sideways for every spec &rarr;</p>
      <div className="pcf-compare relative overflow-x-auto rounded-xl border border-stone-200 bg-white" role="region" aria-label={caption} tabIndex={0}>
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-stone-50">
            <tr className="border-b border-stone-200">
              <th scope="col" className={`${TH} pcf-compare-sticky sticky left-0 z-20 bg-stone-50`}>Shoe</th>
              <th scope="col" className={TH}>Price</th>
              <th scope="col" className={TH}>Outsole</th>
              <th scope="col" className={TH}>Best for</th>
              <th scope="col" className={TH}>Standout</th>
            </tr>
          </thead>
          <tbody>
            {shoes.map((s, i) => (
              <tr key={s.id} className={`border-b border-stone-100 last:border-b-0 ${i % 2 === 1 ? 'bg-stone-50/40' : ''}`}>
                <th scope="row" className="pcf-compare-sticky sticky left-0 z-10 w-[10.5rem] min-w-[10.5rem] bg-white px-3 py-3 text-left align-top font-normal sm:w-56 sm:min-w-[14rem]">
                  <a href={`#${s.id}`} className="block text-[13px] font-semibold leading-snug text-foreground hover:text-padel-green">{s.name}</a>
                  <div className="mt-1.5">
                    <AmazonButton href={s.href} productName={s.productName} compact />
                  </div>
                </th>
                <td className={`${TD} whitespace-nowrap font-semibold tabular-nums text-foreground`}>{s.price}</td>
                <td className={TD}>
                  <div className="flex items-center gap-2">
                    <ShoeSole uid={`${uidPrefix}-row-${s.id}`} pattern={s.pattern} className="h-10 w-auto shrink-0" />
                    <span className={s.pattern === 'unknown' ? 'italic text-stone-400' : ''}>{s.patternLabel}</span>
                  </div>
                </td>
                <td className={`${TD} text-[13px] leading-snug`}>{s.bestFor}</td>
                <td className={`${TD} min-w-[14rem] text-[13px] leading-snug`}>{s.standout}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/** Outsole strip for a shoe card: the sole on its side plus a plain label. */
export function SolePlate({ shoe, uidPrefix }: { shoe: GearShoe; uidPrefix: string }) {
  return (
    <figure className="pcf-gear-plate mb-5 flex items-center gap-4 rounded-xl border border-stone-200 px-3 py-3 sm:px-4">
      <ShoeSole uid={`${uidPrefix}-plate-${shoe.id}`} pattern={shoe.pattern} orientation="horizontal" className="h-auto w-28 shrink-0 sm:w-36" />
      <figcaption className="min-w-0 flex-1 text-xs">
        <span className="block font-mono text-[10px] uppercase tracking-wider text-stone-400">Outsole</span>
        <span className={`mt-0.5 block text-sm font-medium ${shoe.pattern === 'unknown' ? 'italic text-stone-400' : 'text-stone-700'}`}>{shoe.patternLabel}</span>
        <span className="sr-only">{`Diagram of the ${shoe.name} outsole.`}</span>
      </figcaption>
    </figure>
  );
}
