/**
 * Buy links at stores other than Amazon, for gear we still recommend after
 * Amazon stopped selling it.
 *
 * These are plain retailer links, not affiliate links: render them with
 * <TrackedLink type="retailer">, which tracks the click and uses
 * rel="nofollow noopener noreferrer" (no "sponsored"). When a link here
 * becomes an affiliate link, switch its call sites to type="affiliate".
 */

/**
 * NOX ML10 Pro Cup Rough, 2027 edition, on NOX's own store (noxsport.com,
 * Barcelona). Checked 2026-10-15: 149.99 euros, listed "In stock" as a
 * pre-order shipping from October 19. It ships to the US; shipping and import
 * duties are added at checkout.
 *
 * Why NOX Spain: no US store stocks any edition of the ML10 Pro Cup Rough
 * (checked NOX USA noxsportusa.com, Padel USA, Racket Central, Tennis
 * Warehouse, Holabird, PDH Sports, Padel Padel, Casas Padel). NOX has no
 * public affiliate program that we could find.
 *
 * TODO affiliate: swap to the Padel USA partner link (padelusa.com, 8 to 12%)
 * if Padel USA starts stocking the ML10 Pro Cup Rough after Dito's partner
 * application is approved; otherwise Holabird (5% via Partnerize) if it does.
 */
export const NOX_ML10_PRO_CUP_ROUGH = {
  url: 'https://noxsport.com/en/products/ml10-pro-cup-rough-miguel-lamperti-2027',
  store: 'NOX',
  productName: 'NOX ML10 Pro Cup Rough 2027',
  /** Display price, in euros because NOX's store only charges in euros */
  price: '€149.99',
  priceValue: '149.99',
  priceCurrency: 'EUR',
} as const;
