/**
 * Buy links: Amazon, plus Padel USA, HEAD and US Padel Market when they sell
 * the exact model a page recommends.
 *
 * House rule (2026-10-23): every product or shopping link on the site goes to
 * a store that pays us. Paid stores, best first: Padel USA (8%), HEAD US via
 * Awin (6%), Amazon (3%), US Padel Market via Awin (3%, only when none of the
 * others sells the model). When no paid store sells a product, the page names
 * it without a store link (or links our own review). `npm run links:audit`
 * fails the build check on any unpaid store link.
 *
 * Button order (2026-10-31, Dito): whenever a product is in PADEL_USA, Padel
 * USA is the main (solid) button and Amazon the outline one, whatever the two
 * prices are. Both stay on the page so readers can pick either. The one
 * exception is an entry marked otherModel (Padel USA sells a different model
 * from the one reviewed), where Amazon stays the main button.
 *
 * Every link built here is an affiliate link: render it with
 * <TrackedLink type="affiliate">, which tracks the click as "Gear click" and
 * sets rel="sponsored nofollow noopener noreferrer".
 */

/**
 * NOX ML10 Pro Cup Rough, 2027 edition. No store that pays us sells it, so
 * pages name it, quote NOX's own price as plain text and link our review, with
 * no store link.
 *
 * Checked 2026-10-23: NOX's own store (noxsport.com, Barcelona) has it at
 * 149.99 euros, in stock, shipping to the US with shipping and import duties
 * added at checkout. Not sold at Padel USA (it has the ML10 Ventus Control 3K
 * and the sold-out ML10 Quantum 3K, different rackets), US Padel Market (no
 * NOX rackets at all), Amazon (no edition of the ML10 Pro Cup) or HEAD.
 * NOX has no affiliate program we could find.
 *
 * TODO affiliate: add it to PADEL_USA below if Padel USA starts stocking it.
 */
export const NOX_ML10_PRO_CUP_ROUGH = {
  store: 'NOX',
  productName: 'NOX ML10 Pro Cup Rough 2027',
  /** Display price, in euros because NOX's store only charges in euros */
  price: '€149.99',
  priceValue: '149.99',
  priceCurrency: 'EUR',
  /** Date we last checked NOX's price and stock */
  checked: '2026-10-23',
  /** Our review, the link pages use instead of a store link */
  reviewHref: '/blog/nox-ml10-pro-cup-review',
} as const;

/** JSON-LD Offer for the ML10: NOX's price, seller named, no store URL */
export const NOX_ML10_OFFER = {
  '@type': 'Offer',
  price: NOX_ML10_PRO_CUP_ROUGH.priceValue,
  priceCurrency: NOX_ML10_PRO_CUP_ROUGH.priceCurrency,
  availability: 'https://schema.org/InStock',
  seller: { '@type': 'Organization', name: 'NOX' },
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
   * true only when Padel USA sells a different model from the one the page
   * reviews (the Babolat Technical Viper, where it has the newer 3.0). Then
   * Amazon, which sells the reviewed racket, stays the main button and Padel
   * USA is the outline one. Every other Padel USA product gets Padel USA as
   * the main button and Amazon as the outline one, whatever the prices
   * (2026-10-31).
   */
  otherModel?: boolean;
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
  B0F2WMRTYB: { url: 'https://padelusa.com/products/wilson-bela-pro-v3-padel-racket', storeName: 'Wilson Bela Pro V3 Padel Racket', price: '$399.00', priceValue: '399.00', checked: '2026-10-15' },
  // HEAD Extreme Pro 2025: same racket, same $299.95
  B0FNRQ839K: { url: 'https://padelusa.com/products/head-extreme-pro-2025-padel-racket', storeName: 'Head Extreme Pro 2025', price: '$299.95', priceValue: '299.95', checked: '2026-10-15' },
  // Wilson Rush Pro 5 men's (Black/Red), sizes 8.5 to 11.5, same $170
  B0GVKRS59Q: { url: 'https://padelusa.com/products/wilson-rush-pro-5-men-padel-shoes-2026-black-rd', storeName: 'Wilson Rush Pro 5 Men Padel Shoes 2026', price: '$170.00', priceValue: '170.00', checked: '2026-10-15' },
  // Adidas Metalbone 3.4: same racket, $326.75 at Padel USA, cheaper on Amazon
  B0DMCZWNPV: { url: 'https://padelusa.com/products/adidas-metalbone-3-4-padel-racket', storeName: 'Adidas Metalbone 3.4', price: '$326.75', priceValue: '326.75', checked: '2026-10-15' },
  // Babolat Technical Viper: Padel USA sells the newer 3.0, not the reviewed racket
  B0DPH3GZGN: { url: 'https://padelusa.com/products/babolat-technical-viper-3-0-padel-racket', storeName: 'Babolat Technical Viper 3.0', price: '$273.00', priceValue: '273.00', checked: '2026-10-15', otherModel: true, label: 'Newer 3.0 at Padel USA', alsoLabel: 'newer 3.0 at Padel USA' },
  // Wilson Hurakn Lite men's (white colorways), same $110; Amazon.com ships it
  B0FC8SDHK5: { url: 'https://padelusa.com/products/wilson-hurakn-lite-mens-padel-shoes', storeName: "Wilson Hurakn Lite Men's Padel Shoes", price: '$110.00', priceValue: '110.00', checked: '2026-10-15' },
  // Wilson Pro Overgrip 12-pack (padel-length version), $27.00 vs $26.99
  B002GUEXTQ: { url: 'https://padelusa.com/products/wilson-pro-padel-overgrip-12-pack', storeName: 'Wilson Pro Padel Overgrip - 12 pack', price: '$27.00', priceValue: '27.00', checked: '2026-10-15' },
  // HEAD Padel Pro S+ balls: $7.49 a can at Padel USA vs $14.95 on Amazon
  B0DHWHX9SG: { url: 'https://padelusa.com/products/head-padel-pro-s-balls', storeName: 'Head Padel Pro S+ Balls', price: '$7.49', priceValue: '7.49', checked: '2026-10-15' },
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
      // Padel USA (8%) is the main button whenever it sells the reviewed model
      primary: !pu.otherModel,
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

/* -------------------------------------------------------------------------- */
/* US Padel Market (us.padelmarket.com) affiliate links via Awin              */
/* -------------------------------------------------------------------------- */

/**
 * US Padel Market on Awin: 3%. Merchant 129063, same publisher as HEAD. Use it
 * only when Padel USA, HEAD and Amazon do not sell the model, since it pays
 * the least. analytics.ts records the click with to=us.padelmarket.com.
 */
export const US_PADEL_MARKET_AWIN_MERCHANT_ID = '129063';

/** Awin deep link to a us.padelmarket.com page */
export function usPadelMarketLink(productUrl: string, clickref?: string): string {
  return awinLink(US_PADEL_MARKET_AWIN_MERCHANT_ID, productUrl, clickref);
}

/** Disclosure for gear pages that link Amazon, Padel USA and HEAD */
export const GEAR_DISCLOSURE =
  'This guide contains affiliate links to Amazon, Padel USA and HEAD (via Awin). If you buy through them, we may earn a commission from Amazon, Padel USA or HEAD at no extra cost to you. We only recommend products we believe in.';
