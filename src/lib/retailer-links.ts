/**
 * Buy links at stores other than Amazon, plus the Amazon link builder.
 *
 * NOX (below) is a plain retailer link, not an affiliate link: render it with
 * <TrackedLink type="retailer">, which tracks the click and uses
 * rel="nofollow noopener noreferrer" (no "sponsored").
 *
 * Padel USA links are affiliate links (Creator program): render them with
 * <TrackedLink type="affiliate">. See PADEL_USA further down.
 *
 * HEAD US links are affiliate links through Awin: render them with
 * <TrackedLink type="affiliate">. See HEAD further down.
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
 * TODO affiliate: add it to PADEL_USA below if Padel USA starts stocking the
 * ML10 Pro Cup Rough (not stocked on 2026-10-15); otherwise Holabird (5% via
 * Partnerize) if it does.
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

/* -------------------------------------------------------------------------- */
/* Amazon                                                                     */
/* -------------------------------------------------------------------------- */

/** Amazon Associates tag for padelcourtsfinder.com */
export const AMAZON_TAG = 'padel02-20';

/** Amazon affiliate link for an ASIN */
export function amazonLink(asin: string): string {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

/** The ASIN in an amazon.com/dp/<ASIN> link, or undefined for any other URL */
export function asinFromUrl(url: string | undefined): string | undefined {
  return url?.match(/amazon\.com\/(?:[^/?#]+\/)?dp\/([A-Z0-9]{10})/)?.[1];
}

/* -------------------------------------------------------------------------- */
/* Padel USA (padelusa.com) affiliate links                                   */
/* -------------------------------------------------------------------------- */

/**
 * Padel USA Creator program: 8% commission (12% with volume), 30-day cookie.
 * The program runs on UpPromote (Shopify), so the referral parameter works on
 * any padelusa.com page. Render these with <TrackedLink type="affiliate">: the
 * click is recorded in Plausible as "Gear click" with to=padelusa.com and the
 * link gets rel="sponsored nofollow noopener noreferrer".
 */
export const PADEL_USA_REF_PARAMS = {
  sca_ref: '12558003.GftAmox910id57Cd',
  utm_source: '12558003',
  utm_medium: 'affiliate',
  utm_campaign: 'creator-program',
} as const;

/** Adds the Padel USA referral parameters to a padelusa.com URL */
export function padelUsaLink(productUrl: string): string {
  const url = new URL(productUrl);
  for (const [key, value] of Object.entries(PADEL_USA_REF_PARAMS)) {
    url.searchParams.set(key, value);
  }
  return url.toString();
}

export interface PadelUsaProduct {
  /** Padel USA product page, without referral parameters */
  url: string;
  /** Product name as Padel USA lists it */
  storeName: string;
  /** Padel USA's live price on the checked date, for display */
  price: string;
  /** Same price as a plain number string, for Product JSON-LD */
  priceValue: string;
  /** Date we last checked the Padel USA page (price and in stock) */
  checked: string;
  /**
   * true: Padel USA is the main button and Amazon the outline one.
   * false: Amazon stays the main button and Padel USA is the outline one.
   */
  primary: boolean;
  /** Button label when it is not the standard "Check price at Padel USA" */
  label?: string;
  /** Short text for the small "also at" link in tables */
  alsoLabel?: string;
}

/**
 * Products we link at Padel USA, keyed by the Amazon ASIN the pages already
 * use. Only products where Padel USA sells the same model and edition the page
 * recommends, in stock on the checked date. The one exception is the Babolat
 * Technical Viper: Padel USA sells the newer 3.0, labeled as such, and our
 * reviewed specs are not claimed for it.
 *
 * Every gear page, compare table, sticky bar and the racket quiz read from
 * this map, so adding, removing or repricing a product is one line here.
 *
 * Checked 2026-10-15 and not linked: Babolat Contact, Wilson Optix V1, NOX
 * AT10 Genius 18K 2025, NOX AT10 Attack 12K 2025, Bullpadel Neuron 2025
 * (all sold out at Padel USA); HEAD Extreme Evo (Padel USA has the 2025
 * edition, the page reviews the 2023 one Amazon sells); Babolat Court Lite
 * backpack ($64.95 at Padel USA vs $51.80 on Amazon, more than 10% higher).
 */
export const PADEL_USA: Record<string, PadelUsaProduct> = {
  // Wilson Bela Pro V3: same racket, same $399, Amazon down to 1 left
  B0F2WMRTYB: { url: 'https://padelusa.com/products/wilson-bela-pro-v3-padel-racket', storeName: 'Wilson Bela Pro V3 Padel Racket', price: '$399.00', priceValue: '399.00', checked: '2026-10-15', primary: true },
  // HEAD Extreme Pro 2025: same racket, same $299.95
  B0FNRQ839K: { url: 'https://padelusa.com/products/head-extreme-pro-2025-padel-racket', storeName: 'Head Extreme Pro 2025', price: '$299.95', priceValue: '299.95', checked: '2026-10-15', primary: true },
  // Wilson Rush Pro 5 men's (Black/Red), sizes 8.5 to 11.5, same $170
  B0GVKRS59Q: { url: 'https://padelusa.com/products/wilson-rush-pro-5-men-padel-shoes-2026-black-rd', storeName: 'Wilson Rush Pro 5 Men Padel Shoes 2026', price: '$170.00', priceValue: '170.00', checked: '2026-10-15', primary: true },
  // Adidas Metalbone 3.4: same racket, $326.75 at Padel USA, cheaper on Amazon
  B0DMCZWNPV: { url: 'https://padelusa.com/products/adidas-metalbone-3-4-padel-racket', storeName: 'Adidas Metalbone 3.4', price: '$326.75', priceValue: '326.75', checked: '2026-10-15', primary: false },
  // Babolat Technical Viper: Padel USA sells the newer 3.0, not the reviewed racket
  B0DPH3GZGN: { url: 'https://padelusa.com/products/babolat-technical-viper-3-0-padel-racket', storeName: 'Babolat Technical Viper 3.0', price: '$273.00', priceValue: '273.00', checked: '2026-10-15', primary: false, label: 'Newer 3.0 at Padel USA', alsoLabel: 'newer 3.0 at Padel USA' },
  // Wilson Hurakn Lite men's (white colorways), same $110; Amazon.com ships it
  B0FC8SDHK5: { url: 'https://padelusa.com/products/wilson-hurakn-lite-mens-padel-shoes', storeName: "Wilson Hurakn Lite Men's Padel Shoes", price: '$110.00', priceValue: '110.00', checked: '2026-10-15', primary: false },
  // Wilson Pro Overgrip 12-pack (padel-length version), $27.00 vs $26.99
  B002GUEXTQ: { url: 'https://padelusa.com/products/wilson-pro-padel-overgrip-12-pack', storeName: 'Wilson Pro Padel Overgrip - 12 pack', price: '$27.00', priceValue: '27.00', checked: '2026-10-15', primary: false },
  // HEAD Padel Pro S+ balls: $7.49 a can at Padel USA vs $14.95 on Amazon
  B0DHWHX9SG: { url: 'https://padelusa.com/products/head-padel-pro-s-balls', storeName: 'Head Padel Pro S+ Balls', price: '$7.49', priceValue: '7.49', checked: '2026-10-15', primary: false },
};

/** The Padel USA entry for an Amazon link or ASIN, if we link one */
export function padelUsaFor(amazonUrlOrAsin: string | undefined): PadelUsaProduct | undefined {
  if (!amazonUrlOrAsin) return undefined;
  const asin = /^[A-Z0-9]{10}$/.test(amazonUrlOrAsin) ? amazonUrlOrAsin : asinFromUrl(amazonUrlOrAsin);
  return asin ? PADEL_USA[asin] : undefined;
}

/** Padel USA affiliate link for an ASIN in the map above */
export function padelUsaHref(asin: string): string {
  return padelUsaLink(PADEL_USA[asin].url);
}

/* -------------------------------------------------------------------------- */
/* HEAD US store (head.com/en_US) affiliate links via Awin                    */
/* -------------------------------------------------------------------------- */

/**
 * HEAD US on Awin: 6% commission. Publisher 3125008, HEAD merchant 27978.
 * An Awin deep link sends the buyer through awin1.com to the exact head.com
 * page in `ued`. Render these with <TrackedLink type="affiliate">: the click is
 * recorded in Plausible as "Gear click" with to=head.com (analytics.ts reads
 * the real store out of `ued`) and the link gets rel="sponsored nofollow
 * noopener noreferrer".
 */
export const AWIN_PUBLISHER_ID = '3125008';
export const HEAD_AWIN_MERCHANT_ID = '27978';

/** Awin deep link to any page of an Awin merchant's store */
export function awinLink(merchantId: string, productUrl: string, clickref?: string): string {
  let out = `https://www.awin1.com/cread.php?awinmid=${merchantId}&awinaffid=${AWIN_PUBLISHER_ID}&ued=${encodeURIComponent(productUrl)}`;
  if (clickref) out += `&clickref=${encodeURIComponent(clickref)}`;
  return out;
}

/** Awin deep link to a head.com page (product, category or the padel hub) */
export function headLink(productUrl: string, clickref?: string): string {
  return awinLink(HEAD_AWIN_MERCHANT_ID, productUrl, clickref);
}

export interface HeadProduct {
  /** head.com/en_US product page, without Awin wrapping */
  url: string;
  /** Product name as HEAD's US store lists it */
  storeName: string;
  /** HEAD's live price on the checked date, for display */
  price: string;
  /** Same price as a plain number string, for Product JSON-LD */
  priceValue: string;
  /** Date we last checked the HEAD page (price and in stock) */
  checked: string;
  /**
   * true: HEAD is the main button and Amazon the outline one.
   * false: Amazon stays the main button and HEAD is the outline one.
   */
  primary: boolean;
  /** Awin clickref, so Awin reports show which product sold */
  clickref: string;
  /** Button label when it is not the standard "Check price at HEAD" */
  label?: string;
  /** Short text for the small "also at" link in tables */
  alsoLabel?: string;
}

/**
 * Products we link at HEAD's US store, keyed by the Amazon ASIN the pages
 * already use. Link priority is Padel USA (8%), then HEAD (6%), then Amazon
 * (3%), and a product never gets more than two buttons, so a product in
 * PADEL_USA never shows a HEAD button (Amazon always stays available).
 * HEAD is the main button only when HEAD's price is within about 10% of
 * Amazon's; otherwise it is the outline button.
 *
 * Checked 2026-10-23 on head.com/en_US and not linked:
 * - HEAD Extreme Pro 2025 (B0FNRQ839K): HEAD sells it, $299.95 in stock, but
 *   Padel USA has it at the same price and stays the main store.
 * - HEAD Padel Pro S+ balls (B0DHWHX9SG): HEAD's single-can page has no price
 *   and no Add to Bag (the 24-can box shows $164.95 but no Add to Bag either);
 *   Padel USA stays at $7.49 a can.
 * - HEAD Sprint Pro 4.0 Women (B0G3RVSK4J): HEAD lists one colorway (Light
 *   Blue/Dark Blue, $109), out of stock in every size.
 * - HEAD Extreme Evo (B0CGRV795T): not sold on HEAD's US store.
 */
export const HEAD: Record<string, HeadProduct> = {
  // HEAD Sprint Pro 4.0 Men, Blueberry/Teal (the same colorway as the Amazon
  // listing), $109 at both; HEAD in stock in sizes 7 to 12.5 except 9, Amazon
  // down to 1 left from a third-party seller
  B0G2TH1X7V: { url: 'https://www.head.com/en_US/product/sprint-pro-4-0-men-273126', storeName: 'HEAD Sprint Pro 4.0 Men Court Shoes', price: '$109.00', priceValue: '109.00', checked: '2026-10-23', primary: true, clickref: 'sprint-pro-4-men' },
  // HEAD Tour Racquet Bag M: $99 at both. HEAD has blue (the Amazon colorway),
  // sage and pink in stock; its page opens on black, which is out of stock.
  // Amazon down to 1 left from a third-party seller
  B0G8RX2824: { url: 'https://www.head.com/en_US/product/tour-racquet-bag-m-bk-260226-cp', storeName: 'HEAD Tour Racquet Tennis Bag M', price: '$99.00', priceValue: '99.00', checked: '2026-10-23', primary: true, clickref: 'tour-racquet-bag-m' },
};

/** The HEAD entry for an Amazon link or ASIN, if we link one */
export function headFor(amazonUrlOrAsin: string | undefined): HeadProduct | undefined {
  if (!amazonUrlOrAsin) return undefined;
  const asin = /^[A-Z0-9]{10}$/.test(amazonUrlOrAsin) ? amazonUrlOrAsin : asinFromUrl(amazonUrlOrAsin);
  return asin ? HEAD[asin] : undefined;
}

/** HEAD (Awin) affiliate link for an ASIN in the map above */
export function headHref(asin: string): string {
  return headLink(HEAD[asin].url, HEAD[asin].clickref);
}

/* -------------------------------------------------------------------------- */
/* The store shown next to Amazon                                             */
/* -------------------------------------------------------------------------- */

export type OtherStore = 'Padel USA' | 'HEAD';

export interface OtherStoreOffer {
  store: OtherStore;
  /** Affiliate link to the store's product page */
  href: string;
  price: string;
  priceValue: string;
  primary: boolean;
  /** Button label */
  label: string;
  /** Short text for the small "also at" link in tables */
  alsoLabel: string;
}

/**
 * The one store we show next to Amazon for a product: Padel USA when it is in
 * PADEL_USA, otherwise HEAD when it is in HEAD, otherwise none.
 */
export function otherStoreFor(amazonUrlOrAsin: string | undefined): OtherStoreOffer | undefined {
  const pu = padelUsaFor(amazonUrlOrAsin);
  if (pu) {
    return {
      store: 'Padel USA',
      href: padelUsaLink(pu.url),
      price: pu.price,
      priceValue: pu.priceValue,
      primary: pu.primary,
      label: pu.label ?? 'Check price at Padel USA',
      alsoLabel: pu.alsoLabel ?? 'also at Padel USA',
    };
  }
  const head = headFor(amazonUrlOrAsin);
  if (head) {
    return {
      store: 'HEAD',
      href: headLink(head.url, head.clickref),
      price: head.price,
      priceValue: head.priceValue,
      primary: head.primary,
      label: head.label ?? 'Check price at HEAD',
      alsoLabel: head.alsoLabel ?? 'also at HEAD',
    };
  }
  return undefined;
}

/**
 * The main buy link for a product: Padel USA or HEAD when it is the primary
 * store, otherwise the Amazon link passed in. Use it for sticky bars and
 * JSON-LD.
 */
export function primaryOffer(amazonUrl: string, amazonPrice: string): { href: string; price: string; store: OtherStore | 'Amazon' } {
  const other = otherStoreFor(amazonUrl);
  if (other?.primary) return { href: other.href, price: other.price, store: other.store };
  return { href: amazonUrl, price: amazonPrice, store: 'Amazon' };
}

/** Disclosure for gear pages that link Amazon, Padel USA and HEAD */
export const GEAR_DISCLOSURE =
  'This guide contains affiliate links to Amazon, Padel USA and HEAD (via Awin). If you buy through them, we may earn a commission from Amazon, Padel USA or HEAD at no extra cost to you. We only recommend products we believe in.';
