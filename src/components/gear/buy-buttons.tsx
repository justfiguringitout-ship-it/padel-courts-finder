import type { ReactNode } from 'react';
import { TrackedLink } from '@/components/TrackedLink';
import { otherStoreFor } from '@/lib/retailer-links';

/**
 * Buy buttons for a product we link at Amazon and, when it is in PADEL_USA or
 * HEAD (src/lib/retailer-links.ts), also at Padel USA or HEAD's US store.
 * Padel USA wins over HEAD, so there are never more than two buttons.
 *
 * The main store gets the page's solid button style; the other store gets the
 * same size as an outline button so the main one stays clear. Which store is
 * main comes from those maps, never from the page. Both links are
 * TrackedLink type="affiliate": rel="sponsored nofollow noopener noreferrer"
 * and a Plausible "Gear click" with to=amazon.com, padelusa.com or head.com.
 */

const SOLID_ONLY = new Set([
  'bg-padel-green',
  'text-white',
  'hover:bg-padel-green-dark',
  'hover:bg-padel-green/90',
  'shadow',
  'shadow-sm',
  'shadow-md',
  'shadow-lg',
  'shadow-padel-green/25',
]);

/** Same size and shape as a solid button, drawn as an outline */
export function toOutline(className: string): string {
  const kept = className.split(/\s+/).filter((c) => c && !SOLID_ONLY.has(c));
  return [...kept, 'bg-white', 'text-padel-green', 'ring-2', 'ring-inset', 'ring-padel-green', 'hover:bg-padel-green/10'].join(' ');
}

export const AMAZON_LABEL = 'Check price at Amazon';

interface BuyButtonsProps {
  /** Amazon affiliate link (amazon.com/dp/<ASIN>?tag=...) */
  href: string;
  productName: string;
  /** Classes of the solid main button, as the page styles it */
  className: string;
  /** Classes for the wrapper around the two buttons */
  wrapperClassName?: string;
  /** Classes for the outline button; derived from className when omitted */
  outlineClassName?: string;
  arrow?: boolean;
}

export function BuyButtons({
  href,
  productName,
  className,
  wrapperClassName = 'flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3',
  outlineClassName,
  arrow = true,
}: BuyButtonsProps) {
  const other = otherStoreFor(href);
  const outline = outlineClassName ?? toOutline(className);
  const arr = arrow ? <> &rarr;</> : null;

  const amazon = (cls: string) => (
    <TrackedLink href={href} type="affiliate" productName={productName} target="_blank" className={cls}>
      {AMAZON_LABEL}
      {arr}
    </TrackedLink>
  );
  if (!other) return amazon(className);

  const store = (cls: string) => (
    <TrackedLink href={other.href} type="affiliate" productName={productName} target="_blank" className={cls}>
      {other.label}
      {arr}
    </TrackedLink>
  );

  return (
    <div className={wrapperClassName}>
      {other.primary ? (
        <>
          {store(className)}
          {amazon(outline)}
        </>
      ) : (
        <>
          {amazon(className)}
          {store(outline)}
        </>
      )}
    </div>
  );
}

interface StoreTextLinkProps {
  /** Amazon affiliate link */
  href: string;
  productName: string;
  className?: string;
  children: ReactNode;
}

/**
 * A text link to a product (tables, quick-pick lists). Links to the main
 * store, followed by a small "also at" link to the other one.
 */
export function StoreTextLink({ href, productName, className, children }: StoreTextLinkProps) {
  const other = otherStoreFor(href);
  if (!other) {
    return (
      <TrackedLink href={href} type="affiliate" productName={productName} target="_blank" className={className}>
        {children}
      </TrackedLink>
    );
  }
  const main = other.primary ? other.href : href;
  const second = other.primary ? href : other.href;
  const secondLabel = other.primary ? 'also at Amazon' : other.alsoLabel;
  return (
    <span>
      <TrackedLink href={main} type="affiliate" productName={productName} target="_blank" className={className}>
        {children}
      </TrackedLink>
      <span className="text-xs font-normal text-stone-500">
        {' '}
        (
        <TrackedLink href={second} type="affiliate" productName={productName} target="_blank" className="underline hover:text-padel-green">
          {secondLabel}
        </TrackedLink>
        )
      </span>
    </span>
  );
}
