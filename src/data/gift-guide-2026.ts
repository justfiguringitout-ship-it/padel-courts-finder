/**
 * Holiday gift guide 2026 (/blog/padel-gifts).
 *
 * Every price and stock state below was read from the live store page on the
 * `checked` date: Padel USA through its Shopify product .js endpoint, HEAD's
 * US store in a browser, Amazon product pages. Club offers come from each
 * club's own website. Re-check before changing a price; never estimate one.
 *
 * Store links follow the house rule in src/lib/retailer-links.ts: Padel USA
 * (8%) first, then HEAD via Awin (6%), then Amazon (3%). Amazon products have
 * no photo because Amazon only allows its images through its own API.
 */
import { amazonLink, headLink, padelUsaLink } from '@/lib/retailer-links';

export const GIFT_GUIDE_CHECKED = '2026-11-11';
export const GIFT_GUIDE_CHECKED_LABEL = 'November 11, 2026';

export type GiftStore = 'Padel USA' | 'HEAD' | 'Amazon';
export type GiftTag = 'him' | 'her' | 'u150' | 'm150' | 'p400';
export type GiftIcon = 'compression' | 'massager' | 'sleeve';

export interface GiftItem {
  id: string;
  name: string;
  store: GiftStore;
  /** Affiliate link built from the store's product page */
  href: string;
  /** Price on the checked date */
  price: number;
  /** Shown instead of the plain price (ranges, "from") */
  priceLabel?: string;
  /** Store's own was-price, shown struck through */
  compareAt?: number;
  /** Store product photo (Padel USA and HEAD only) */
  image?: string;
  /** Drawn tile for products without a store photo */
  icon?: GiftIcon;
  verdict: string;
  body: string;
  bestFor: string;
  skipIf?: string;
  badge?: 'Top pick' | 'Safest bet' | 'Splurge' | 'Best value';
  /** Our own review, when we have one */
  reviewHref?: string;
  tags: GiftTag[];
}

export interface GiftSection {
  id: string;
  kicker: string;
  title: string;
  intro: string;
  items: GiftItem[];
}

const pu = (handle: string) => padelUsaLink(`https://padelusa.com/products/${handle}`);
const puImg = (file: string) => `https://cdn.shopify.com/s/files/1/0531/2013/9427/files/${file}?width=640`;

/** Price-tier tags, computed so a price change can't leave a wrong tag */
function tier(price: number): GiftTag {
  if (price < 150) return 'u150';
  if (price < 400) return 'm150';
  return 'p400';
}
const both = (price: number): GiftTag[] => ['him', 'her', tier(price)];

export const GIFT_SECTIONS: GiftSection[] = [
  {
    id: 'ready-for-a-real-racket',
    kicker: 'Rackets you can give without knowing their level',
    title: 'For the player who has outgrown the club rental',
    intro:
      'A racket is the gift a padel player wants most and the one that is easiest to get wrong. Diamond-shaped rackets put the sweet spot high and punish mishits, so unless you know they play one, stay with the teardrop and round shapes in this section. All four are premium builds that suit the widest range of club players.',
    items: [
      {
        id: 'wilson-blade-v4',
        name: 'Wilson Blade V4',
        store: 'Padel USA',
        href: pu('wilson-blade-v4-gr-padel-racket'),
        price: 279,
        image: puImg('Wilson-Blade-V4-GR-FRM-2-Padel_Racket_PadelUSA_store_1.webp'),
        verdict: 'The safest serious racket to give when you are not sure how good they are.',
        body:
          'A teardrop that Wilson aims at intermediate to advanced players, which covers most people who play two or three times a week. It has enough power for someone who is getting competitive, and it is forgiving enough that a newer player will not feel punished for off-center hits.',
        bestFor: 'Improving club players, him or her',
        skipIf: 'They already play a diamond racket and love it',
        badge: 'Safest bet',
        tags: both(279),
      },
      {
        id: 'bullpadel-neuron-02-2026',
        name: 'Bullpadel Neuron 02 2026',
        store: 'Padel USA',
        href: pu('bullpadel-neuron-02-2026-padel-racket'),
        price: 296.8,
        compareAt: 371,
        image: puImg('Bullpadel-Neuron_2_2026_Padel_Racket_PadelUSA_store_1.webp'),
        verdict: 'An all-round pro racket, on sale.',
        body:
          'Bullpadel calls the Neuron its versatile racket: a teardrop at 365 to 375 grams that defends as comfortably as it attacks. Padel USA has it at $296.80, down from $371, which makes it one of the better values in the guide.',
        bestFor: 'Intermediate and advanced players who play both sides of the court',
        badge: 'Best value',
        tags: both(296.8),
      },
      {
        id: 'head-speed-pro',
        name: 'HEAD Speed Pro',
        store: 'Padel USA',
        href: pu('head-speed-pro-2025-padel-racket'),
        price: 249.95,
        compareAt: 299.95,
        image: puImg('Head-Speed_Pro_2025_Padel_Racket_PadelUSA_store_1_f127ba08-e4e2-42dc-9973-78a6bb65bfff.webp'),
        verdict: 'Last season’s tournament racket at $50 off.',
        body:
          'HEAD rates the Speed Pro as a teardrop for tournament players, with a hybrid face that mixes feel and pop. The 2027 version is on pre-order without a price yet, so this edition is the one you can actually put under the tree.',
        bestFor: 'Competitive players who want a fast, balanced racket',
        tags: both(249.95),
      },
      {
        id: 'wilson-endure-pro-v1',
        name: 'Wilson Endure Pro V1 2026',
        store: 'Padel USA',
        href: pu('wilson-endure-pro-v1-2026-padel-racket'),
        price: 359,
        image: puImg('Wilson-Endure-Pro-V1-Padel_Racket_PadelUSA_store_1.webp'),
        verdict: 'A premium round racket for the patient player.',
        body:
          'Round rackets have the biggest, lowest sweet spot of any shape, so they suit players who win by keeping the ball in play. The Endure Pro pairs that shape with a control foam. It is the racket for the person who lobs well and rarely misses.',
        bestFor: 'Control players and defenders',
        skipIf: 'They live at the net and want to smash everything',
        tags: both(359),
      },
    ],
  },
  {
    id: 'flagship-rackets',
    kicker: 'The rackets the world’s best are playing',
    title: 'For the club regular who plays four nights a week',
    intro:
      'These are the 2026 and 2027 signature rackets of the players at the top of the Premier Padel rankings. They are built for advanced players, and most of them are diamonds or hard teardrops. If the person you are buying for already talks about Tapia, Coello and Lebrón, this is their shelf.',
    items: [
      {
        id: 'nox-genius-18k-alum-2027',
        name: 'NOX Genius 18K Alum 2027 by Agustín Tapia',
        store: 'Padel USA',
        href: pu('nox-genius-18k-alum-2027-by-agustin-tapia'),
        price: 450,
        image: puImg('Nox_Genius_18K_Alum_2027_Padel_Racket_PadelUSA_store_1.webp'),
        verdict: 'Tapia’s brand-new 2027 racket, and the most wanted racket of the season.',
        body:
          'A medium-hard teardrop at 360 to 375 grams with an 18K carbon face. The teardrop shape makes it a better all-court racket than most pro editions, so it works for an advanced player whether they attack or defend.',
        bestFor: 'Advanced players, him or her',
        badge: 'Top pick',
        tags: both(450),
      },
      {
        id: 'adidas-metalbone-2026',
        name: 'Adidas Metalbone 2026',
        store: 'Padel USA',
        href: pu('adidas-metalbone-2026-padel-racket'),
        price: 409.5,
        compareAt: 455,
        image: puImg('Adidas-Metalbone_2026_Padel_Racket_PadelUSA_store_1_a5ad0e64-5bb5-4187-a185-09cac465e80b.webp'),
        verdict: 'The best-known power racket in padel, $45 off.',
        body:
          'A head-heavy diamond with an adjustable weight system, so they can tune the balance to their game. It rewards a player who finishes points at the net with a smash. Padel USA has it at $409.50, under its $455 list price.',
        bestFor: 'Advanced attackers',
        skipIf: 'They are in their first year or two of playing',
        tags: both(409.5),
      },
      {
        id: 'head-coello-pro-2026',
        name: 'HEAD Coello Pro 2026',
        store: 'Padel USA',
        href: pu('head-coello-pro-2026-padel-racket'),
        price: 374.95,
        image: puImg('Head-Coello_Pro_2026_Padel_Racket_PadelUSA_store_main.webp'),
        verdict: 'Arturo Coello’s own racket.',
        body:
          'A 370-gram diamond with a high balance, built for one of the hardest hitters on tour. It asks a lot of the player and rewards a big overhead. HEAD sells it at the same $374.95 if you prefer to buy direct.',
        bestFor: 'Expert and tournament players',
        skipIf: 'They are still working on their bandeja',
        tags: both(374.95),
      },
      {
        id: 'babolat-viper-lebron-3-1',
        name: 'Babolat Viper Juan Lebrón 3.1',
        store: 'Padel USA',
        href: pu('babolat-viper-juan-lebron-3-1-padel-racket'),
        price: 420,
        image: puImg('babolat-viper-juan-lebron-3-1-150195-01-front.webp'),
        verdict: 'Built for one thing: the smash.',
        body:
          'A head-heavy diamond with hard EVA foam and a 3K carbon face, made for Juan Lebrón’s aggressive game. It is the racket for the player who goes for the x3 every time the ball goes up.',
        bestFor: 'High-level attackers',
        skipIf: 'They play a patient, defensive game',
        tags: both(420),
      },
      {
        id: 'nox-ventus-hybrid-12k-2027',
        name: 'NOX Ventus Hybrid 12K XTREM 2027 by Edu Alonso',
        store: 'Padel USA',
        href: pu('nox-ventus-hybrid-12k-xtrem-2027-by-edu-alonso'),
        price: 415,
        image: puImg('Nox_Ventus_Hybrid_12K_XTREM_2027_Padel_Racket_PadelUSA_store_1.webp'),
        verdict: 'A 2027 pro racket that is not a diamond.',
        body:
          'A medium-hard teardrop with a 12K carbon face, made for all-round play. It is the pick for an advanced player who wants the newest NOX without the Tapia price and without a head-heavy diamond.',
        bestFor: 'Advanced all-round players',
        tags: both(415),
      },
      {
        id: 'wilson-bela-pro-v3',
        name: 'Wilson Bela Pro V3',
        store: 'Padel USA',
        href: pu('wilson-bela-pro-v3-padel-racket'),
        price: 399,
        image: puImg('Wilson-Bela-Pro-V3-Padel_Racket_PadelUSA_store_1.webp'),
        verdict: 'Fernando Belasteguin’s line, and a racket we have reviewed in depth.',
        body:
          'A 24K carbon diamond for power players. Pair it with the matching Wilson Bela V3 bag further down this guide if you want the full set.',
        bestFor: 'Advanced players who like a powerful, stable racket',
        reviewHref: '/blog/wilson-bela-v3-review',
        tags: both(399),
      },
    ],
  },
  {
    id: 'bags',
    kicker: 'Bags',
    title: 'For the one who shows up looking like a pro',
    intro:
      'Every serious player carries two rackets, shoes, balls and a towel, and most of them are still using a gym bag. A proper padel bag keeps rackets out of the heat and shoes away from everything else.',
    items: [
      {
        id: 'babolat-rh-pro-lebron-2026',
        name: 'Babolat RH Pro Padel Bag Juan Lebrón 2026',
        store: 'Padel USA',
        href: pu('babolat-rh-pro-padel-bag-juan-lebron-2026'),
        price: 165,
        image: puImg('Babolat_RH_Pro_Juan_Lebron_2026_Padel_Bag_PadelUSA_store_1.webp'),
        verdict: 'The tour bag, in Lebrón’s colors.',
        body:
          'Babolat’s large RH Pro tour bag with a thermal racket compartment, the kind you see on the bench at every pro event. Big enough for a weekend tournament.',
        bestFor: 'Players who carry more than one racket',
        badge: 'Top pick',
        tags: both(165),
      },
      {
        id: 'lacoste-l-paletero',
        name: 'Lacoste L-Paletero',
        store: 'Padel USA',
        href: pu('lacoste-l-paletero'),
        price: 149.95,
        image: puImg('lacoste-l-paletero-40palacost-01-rear_cbd672b7-1835-4a27-a2af-6953f7805a72.webp'),
        verdict: 'The padel bag that looks right off the court too.',
        body:
          'Lacoste’s padel bag has the clean, tailored look of the brand, so it goes from the club to dinner without looking like sports kit.',
        bestFor: 'The player who cares how the bag looks',
        tags: both(149.95),
      },
      {
        id: 'nox-luxury-open-series',
        name: 'NOX Luxury Open Series Backpack, Black/Brown',
        store: 'Padel USA',
        href: pu('nox-luxury-open-series-black-brown-backpack'),
        price: 105,
        image: puImg('Nox_Luxury_Open_Series_Backpack_Black_Brown_Padel_Bag_PadelUSA_store_1.webp'),
        verdict: 'A 60-liter backpack with leather-look trim.',
        body:
          'NOX’s Luxury line in black and brown. It holds rackets, shoes and a change of clothes and looks more like a travel bag than a sports bag.',
        bestFor: 'Players who ride, walk or commute to the club',
        tags: both(105),
      },
      {
        id: 'wilson-bela-v3-bag',
        name: 'Wilson Bela V3 Padel Racket Bag, Black/Red',
        store: 'Padel USA',
        href: pu('wilson-bela-v3-padel-racket-bag-black-red'),
        price: 149,
        image: puImg('Wilson_Bela_V3_Black_Red_Padel_Bag_PadelUSA_store_1.webp'),
        verdict: 'The bag that matches the Bela Pro V3 racket.',
        body: 'Wilson’s Bela racket bag in the same black and red as the racket. Give both together for the full set.',
        bestFor: 'Anyone getting the Bela Pro V3',
        tags: both(149),
      },
      {
        id: 'head-pro-x-racqpack',
        name: 'HEAD Pro X Racqpack',
        store: 'HEAD',
        href: headLink('https://www.head.com/en_US/product/pro-x-racqpack-bk-260104', 'pro-x-racqpack'),
        price: 149,
        image: 'https://cdn-mdb.head.com/CDN3/D/260104/1/683x911/pro-x-racqpack-bk.webp',
        verdict: 'A 40-liter backpack that works for the office and the court.',
        body:
          'HEAD designed the Pro X Racqpack for sport, work and travel. Good for the player who goes straight from work to a 7pm game.',
        bestFor: 'Players who play before or after work',
        tags: both(149),
      },
      {
        id: 'adidas-multigame-offwhite',
        name: 'Adidas Multigame Racket Bag, Off-White',
        store: 'Padel USA',
        href: pu('adidas-racket-bag-multigame-offwhite'),
        price: 115,
        image: puImg('Adidas_Multigame_Off_White_Padel_Bag_PadelUSA_store_1.webp'),
        verdict: 'A clean off-white racket bag.',
        body: 'Adidas’s Multigame bag in off-white, a lighter look than the black and red most padel bags come in.',
        bestFor: 'Players who like a clean, light look',
        tags: both(115),
      },
    ],
  },
  {
    id: 'shoes',
    kicker: 'Shoes',
    title: 'For their feet, the upgrade players never buy themselves',
    intro:
      'Most people play padel in running shoes or old tennis shoes. Padel shoes have a herringbone or omni sole built for sand-filled turf, which gives better grip when they slide and change direction. Padel USA lists US sizes. Check the size of the sneakers they wear most before you order.',
    items: [
      {
        id: 'wilson-rush-pro-5-men',
        name: 'Wilson Rush Pro 5 Men’s Padel Shoes 2026',
        store: 'Padel USA',
        href: pu('wilson-rush-pro-5-men-padel-shoes-2026-black-rd'),
        price: 170,
        image: puImg('Wilson_Rush_Pro_5_Men_2026_Black_Red_Padel_Shoes_PadelUSA_store_1.webp'),
        verdict: 'Wilson’s flagship court shoe, and every size from 8.5 to 11.5 is in stock.',
        body:
          'A stable, cushioned shoe for players who move hard. Having every common men’s size in stock matters for a gift: you are not stuck with a half size too small.',
        bestFor: 'Him: players who play three or more times a week',
        badge: 'Top pick',
        tags: ['him', tier(170)],
      },
      {
        id: 'lacoste-ag-lt-ultra-men',
        name: 'Lacoste AG-LT Ultra Men’s',
        store: 'Padel USA',
        href: pu('lacoste-ag-lt-ultra-mens'),
        price: 150,
        image: puImg('lacoste-ag-lt-ultra-52sma0187-01-lateral-side_1ed7f79a-638c-4d67-be2a-d222e4283bd3.webp'),
        verdict: 'A Lacoste court shoe, sizes 9 to 11.5 in stock.',
        body: 'Lacoste’s AG-LT Ultra, for the player who wants a court shoe that also looks sharp. Every size from 9 to 11.5 was in stock when we checked.',
        bestFor: 'Him: players who care about style',
        tags: ['him', tier(150)],
      },
      {
        id: 'wilson-intrigue-tour-women',
        name: 'Wilson Intrigue Tour Women’s Padel Shoes',
        store: 'Padel USA',
        href: pu('wilson-intrigue-tour-womens-padel-shoes'),
        price: 170,
        image: puImg('Wilson_Intrigue_Tour_Womens_White_Bosphorus_Padel_Shoes_PadelUSA_store_1.webp'),
        verdict: 'The best women’s padel shoe in stock this season.',
        body:
          'Wilson’s women’s tour shoe in three colorways (White/Bosphorus, White/Snow and Airy Blue), with nearly every size from 6.5 to 9.5 available.',
        bestFor: 'Her: players who play several times a week',
        badge: 'Top pick',
        tags: ['her', tier(170)],
      },
      {
        id: 'head-motion-pro-1-5-women',
        name: 'HEAD Motion Pro 1.5 Women’s Padel Shoes',
        store: 'Padel USA',
        href: pu('head-motion-pro-1-5-padel-shoes'),
        price: 129,
        image: puImg('Head_Motion_Pro_1_5_Women_Padel_Shoes_PadelUSA_store_1.webp'),
        verdict: 'A women’s padel shoe with every size from 6.5 to 9.5 in stock.',
        body: 'HEAD’s Motion Pro 1.5, a padel-specific shoe at $129. A good choice if you want a proper court shoe without going to $170.',
        bestFor: 'Her: players who play once or twice a week',
        tags: ['her', tier(129)],
      },
    ],
  },
  {
    id: 'recovery',
    kicker: 'Recovery',
    title: 'For the body that feels Sunday’s doubles on Monday',
    intro:
      'Padel is four people, short bursts and a lot of twisting. The players who play the most are the ones who look after their legs, elbows and shoulders. These are the recovery tools serious players actually use.',
    items: [
      {
        id: 'normatec-3-legs',
        name: 'Hyperice Normatec 3 Legs Compression Boots',
        store: 'Amazon',
        href: amazonLink('B0B72QBWHC'),
        price: 899,
        icon: 'compression',
        verdict: 'The recovery gift players talk about for years.',
        body:
          'Air compression boots that squeeze the legs in waves to help recovery after a long session. This is the full-leg set in standard size, sold and shipped by Amazon.',
        bestFor: 'The player who plays tournaments or back-to-back days',
        badge: 'Splurge',
        tags: both(899),
      },
      {
        id: 'normatec-elite',
        name: 'Hyperice Normatec Elite Wireless Compression Boots',
        store: 'Amazon',
        href: amazonLink('B0D4876TX4'),
        price: 1099,
        icon: 'compression',
        verdict: 'The same idea with no hoses and no control box.',
        body: 'The wireless version of the Normatec boots, with the controls built into the boots. Easier to use on the couch or to take on a trip.',
        bestFor: 'The player who travels to tournaments',
        tags: both(1099),
      },
      {
        id: 'theragun-pro-plus',
        name: 'Therabody Theragun PRO Plus',
        store: 'Amazon',
        href: amazonLink('B0CG2G7RQY'),
        price: 649.99,
        icon: 'massager',
        verdict: 'The top-end massage gun.',
        body: 'Therabody’s flagship percussion massager, with six recovery modes in one device. Sold and shipped by Amazon.',
        bestFor: 'Players with tight calves, shoulders and forearms',
        tags: both(649.99),
      },
      {
        id: 'hypervolt-3-pro',
        name: 'Hyperice Hypervolt 3 Pro',
        store: 'Amazon',
        href: amazonLink('B0G82HR62V'),
        price: 349,
        icon: 'massager',
        verdict: 'A heated massage gun with a carry case, for half the Theragun’s price.',
        body: 'Hyperice’s newest Hypervolt, with a heated head. The case makes it easy to keep in the padel bag.',
        bestFor: 'Players who want recovery at the club, not just at home',
        tags: both(349),
      },
      {
        id: 'floky-no-strain-tapia',
        name: 'Floky No Strain Evolution Sleeve x Tapia',
        store: 'Padel USA',
        href: pu('floky-no-strain-evolution-sleeve-x-tapia'),
        price: 49.99,
        image: puImg('floky-no-strain-evolution-x-tapia-01.webp'),
        verdict: 'Elbow and forearm compression from a padel brand.',
        body:
          'A compression sleeve made for padel players’ elbows and forearms, in a Tapia edition. One sleeve per pack, in M/L or L/XL. A good add-on to a racket.',
        bestFor: 'Anyone who has felt padel elbow',
        tags: both(49.99),
      },
    ],
  },
  {
    id: 'stocking-stuffers',
    kicker: 'Stocking stuffers',
    title: 'For the stocking: things they use up',
    intro:
      'Padel balls lose pressure within a few sessions and overgrips wear through in weeks, so the people who play the most go through both constantly. Give a full supply and it gets used.',
    items: [
      {
        id: 'head-pro-s-box-24',
        name: 'HEAD Padel Pro S+ Balls, box of 24 cans',
        store: 'Padel USA',
        href: pu('head-padel-pro-s-balls'),
        price: 164.95,
        priceLabel: '$164.95 for 24 cans',
        image: puImg('Head_Pro_S_Padel_Balls_PadelUSA_store_1_15202316-24e1-4189-a256-5701361a8e4d.webp'),
        verdict: 'A season of fresh balls.',
        body:
          'The ball most US clubs play. A box of 24 cans covers months of games. Padel USA also sells it by the can ($7.49) or in a 3-can pack ($19) if you want a smaller stocking stuffer.',
        bestFor: 'Anyone who brings the balls to their weekly game',
        tags: both(164.95),
      },
      {
        id: 'siux-pro-overgrip-12',
        name: 'Siux Pro Perforated Overgrip, 12-pack',
        store: 'Padel USA',
        href: pu('siux-pro-perforated-x12-padel-overgrip'),
        price: 28.99,
        image: puImg('Siux-Pro_Perforated_2_2025_Padel_Overgrip_PadelUSA_store_1.webp'),
        verdict: 'Fresh grips for months.',
        body: 'Perforated overgrips, twelve to a pack. Most regular players change their grip every few weeks, so this is a long run of fresh grips.',
        bestFor: 'Every player',
        tags: both(28.99),
      },
      {
        id: 'padel-usa-gift-card',
        name: 'Padel USA E-Gift Card',
        store: 'Padel USA',
        href: pu('padel-usa-e-gift-card'),
        price: 50,
        priceLabel: '$50 to $1,000',
        image: puImg('1.webp'),
        verdict: 'When you know they want a racket but not which one.',
        body:
          'Padel USA sells e-gift cards from $50 to $1,000, and it stocks almost every racket, bag and shoe in this guide. A $300 or $450 card lets them pick the exact racket they have been eyeing.',
        bestFor: 'The player who is picky about their gear',
        tags: ['him', 'her', 'u150', 'm150', 'p400'],
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Experiences                                                                 */
/* -------------------------------------------------------------------------- */

export interface ExperienceGift {
  id: string;
  title: string;
  where: string;
  when?: string;
  priceLabel: string;
  verdict: string;
  body: string;
  /** Organizer or club page that sells it */
  href: string;
  linkLabel: string;
  /** Our club page, when the experience is at a listed club */
  clubSlug?: string;
  clubName?: string;
  image?: string;
  badge?: 'Top pick' | 'Splurge' | 'Book soon';
  tags: GiftTag[];
}

export const EXPERIENCES: ExperienceGift[] = [
  {
    id: 'ritz-key-biscayne-weekend',
    title: 'A padel weekend at the Ritz-Carlton Key Biscayne',
    where: 'Key Biscayne, Florida',
    when: 'January 29 to 31, 2027',
    priceLabel: 'From $1,329 + tax per person',
    verdict: 'Two nights at the beach and eight hours of coaching.',
    body:
      'Cliff Drysdale Tennis runs a padel getaway at the Ritz-Carlton Key Biscayne for players rated 1.0 to 3.0: two nights at the resort, eight hours of instruction and access to the resort. The price depends on the room and how many guests share it.',
    href: 'https://www.experiencecdt.com/padelweekendgetaway',
    linkLabel: 'See the weekend',
    clubSlug: 'ritz-carlton-key-biscayne-padel',
    clubName: 'Ritz-Carlton Key Biscayne Padel',
    badge: 'Splurge',
    tags: ['him', 'her', 'p400'],
  },
  {
    id: 'ppl-finals-miami',
    title: 'Pro Padel League Finals tickets',
    where: 'James L. Knight Center, Miami',
    when: 'December 3 to 6, 2026',
    priceLabel: 'Prices by seat on Ticketmaster',
    verdict: 'The best pro padel you can watch in the US this year.',
    body:
      'The PPL season ends in Miami with four days of team finals. Tickets come as general admission, Signature seats or a Courtside Box with food and an open bar, plus a 4-day pass. It is a gift for early December, so buy it soon.',
    href: 'https://propadelleague.com/tournament/miami-2026/',
    linkLabel: 'See tickets',
    badge: 'Book soon',
    tags: ['him', 'her'],
  },
  {
    id: 'moorestown-pro-sessions',
    title: 'A session with a pro coach',
    where: 'Moorestown Padel Club, New Jersey',
    priceLabel: '$50 to $800',
    verdict: 'The best gift-a-coach page we found.',
    body:
      'Moorestown sells padel as a gift, paid online and redeemed with a code: a $50 Padel 101 intro session, a $150 session with a pro coach, a $285 match against the pro for three players, or $800 for six coached sessions.',
    href: 'https://moorestownpadel.com/gift-padel',
    linkLabel: 'Gift a session',
    clubSlug: 'moorestown-padel-club',
    clubName: 'Moorestown Padel Club',
    badge: 'Top pick',
    tags: ['him', 'her', 'u150', 'm150', 'p400'],
  },
  {
    id: 'bay-padel-gift-cards',
    title: 'A month of membership, or a private lesson',
    where: 'Bay Padel, San Francisco Bay Area (4 clubs)',
    priceLabel: '$140 to $500',
    verdict: 'Gift cards priced as real things to do.',
    body:
      'Bay Padel’s gift cards come in amounts tied to what they buy: $140 for a month of membership, $170 for a private lesson, $350 for about the price of a racket, or $500 for three months of membership plus $80 in club credit. They work at Treasure Island, Dogpatch, Sunnyvale and San Jose.',
    href: 'https://baypadel.us/gift-cards/',
    linkLabel: 'Buy a gift card',
    clubSlug: 'bay-padel-dogpatch',
    clubName: 'Bay Padel',
    image: '/images/courts/bay-padel-dogpatch.jpg',
    tags: ['him', 'her', 'u150', 'm150', 'p400'],
  },
  {
    id: 'padel-haus-credits',
    title: 'Padel Haus club credit',
    where: 'Padel Haus: Brooklyn (3 clubs), Atlanta, Denver, Nashville',
    priceLabel: 'Any amount',
    verdict: 'The easy answer if they play at a Padel Haus.',
    body:
      'Padel Haus sells physical gift certificates at its front desks and sets up digital club credits in any amount by phone. You will need the recipient’s name, email and phone number.',
    href: 'https://www.padel.haus/faqs',
    linkLabel: 'How to buy',
    clubSlug: 'padel-haus-dumbo',
    clubName: 'Padel Haus',
    image: '/images/courts/padel-haus-dumbo.webp',
    tags: ['him', 'her', 'u150', 'm150', 'p400'],
  },
  {
    id: 'northwood-holiday-card',
    title: 'Holiday gift card with a 20% bonus',
    where: 'Northwood Racquet & Fitness, Easton, Pennsylvania',
    priceLabel: '$100 to $500',
    verdict: 'The best holiday deal we found at a club.',
    body:
      'Northwood adds 20% to holiday gift cards ($100 becomes $120, $250 becomes $300, $500 becomes $600). The bonus is usable January 1 to April 30, 2027 on cards bought by November 30, and to March 31 on cards bought December 1 to 24. It also sells a 10-hour padel bundle for $500.',
    href: 'https://northwoodrfc.com/gift-cards',
    linkLabel: 'See the offer',
    clubSlug: 'northwood-racquet-fitness',
    clubName: 'Northwood Racquet & Fitness',
    tags: ['him', 'her', 'u150', 'm150', 'p400'],
  },
  {
    id: 'hexagon-cup-madrid',
    title: 'A trip to the Hexagon Cup in Madrid',
    where: 'Caja Mágica, Madrid',
    when: 'January 21 to 24, 2027',
    priceLabel: 'Tickets €18 to €224 on Fever',
    verdict: 'For the player who has everything: the season opener in Spain.',
    body:
      'The Hexagon Cup opens the new Hexagon World Series in Madrid’s tennis stadium. Fever sells seats from €18 to a €224 VIP box, plus booking fees. Pair it with a few days of playing in Spain and it is the trip of the year.',
    href: 'https://www.padelfip.com/2026/08/hexagon-world-series-and-international-padel-federation-announce-generali-hexagon-cup-madrid-as-its-inaugural-event-and-2027-season-opener/',
    linkLabel: 'Read the announcement',
    badge: 'Splurge',
    tags: ['him', 'her', 'p400'],
  },
];

/** More clubs that sell gift cards, checked on each club's own site */
export interface ClubGiftCard {
  state: string;
  clubName: string;
  clubSlug: string;
  offer: string;
  href: string;
}

export const CLUB_GIFT_CARDS: ClubGiftCard[] = [
  { state: 'California', clubName: 'Bay Padel (4 clubs)', clubSlug: 'bay-padel-dogpatch', offer: '$140 to $500, for membership, lessons, courts and gear', href: 'https://baypadel.us/gift-cards/' },
  { state: 'Colorado', clubName: 'Padel Haus Denver', clubSlug: 'padel-haus-denver', offer: 'Certificates at the front desk, club credit by phone', href: 'https://www.padel.haus/faqs' },
  { state: 'Connecticut', clubName: 'Padel America, Stamford', clubSlug: 'padel-america-at-pickleball-america', offer: 'E-gift card for courts, memberships, lessons and clinics; never expires', href: 'https://pickleballamerica.us/gift-card/' },
  { state: 'Connecticut', clubName: 'The Sports Haus, Norwalk', clubSlug: 'the-sports-haus', offer: 'Gift certificates by phone, picked up or mailed free', href: 'https://sports.haus/faqs' },
  { state: 'Georgia', clubName: 'Padel Haus Atlanta', clubSlug: 'padel-haus-atlanta', offer: 'Certificates at the front desk, club credit by phone', href: 'https://www.padel.haus/faqs' },
  { state: 'Kansas', clubName: 'La Casa del Padel, Overland Park', clubSlug: 'la-casa-del-padel', offer: '$25 to $200, for courts, clinics, lessons and the pro shop', href: 'https://www.lacasa-delpadel.com/shop/p/giftcard' },
  { state: 'New Jersey', clubName: 'Moorestown Padel Club', clubSlug: 'moorestown-padel-club', offer: '$50 intro session to $800 for six coached sessions', href: 'https://moorestownpadel.com/gift-padel' },
  { state: 'New Jersey', clubName: 'Nicol Rackets, Oceanport', clubSlug: 'nicol-rackets', offer: '$50 to $500 in club credit', href: 'https://www.playatnicol.com/shop/p/gift-card' },
  { state: 'New York', clubName: 'Padel Haus (Dumbo, Williamsburg, Greenpoint)', clubSlug: 'padel-haus-dumbo', offer: 'Certificates at the front desk, club credit by phone', href: 'https://www.padel.haus/faqs' },
  { state: 'New York', clubName: 'Paddles Up, East Setauket', clubSlug: 'paddles-up-east-setauket', offer: 'Gift card for gear, lessons, clinics and court time', href: 'https://paddlesupny.com/gift-card' },
  { state: 'Oregon', clubName: 'Foundry Padel, Portland', clubSlug: 'foundry-padel', offer: 'Emailed gift certificates, redeemed as a Playtomic code', href: 'https://www.foundrypadel.com/gift-cards' },
  { state: 'Pennsylvania', clubName: 'Northwood Racquet & Fitness, Easton', clubSlug: 'northwood-racquet-fitness', offer: '20% holiday bonus on $100 to $500 cards; 10-hour padel bundle $500', href: 'https://northwoodrfc.com/gift-cards' },
  { state: 'Pennsylvania', clubName: 'Matt’s Pickle and Padel, Sewickley', clubSlug: 'matts-pickle-and-padel', offer: '$25 to $125, for courts, clinics, lessons and membership', href: 'https://www.mattspickleandpadel.com/store/p/matts-pickle-and-padel-gift-card' },
  { state: 'Pennsylvania', clubName: 'Pine Valley Pickleball, Philadelphia', clubSlug: 'pine-valley-pickleball', offer: 'Gift cards at the front desk or by phone', href: 'https://pinevalleypickleball.com/gift-cards' },
  { state: 'Tennessee', clubName: 'Padel Haus Nashville', clubSlug: 'padel-haus-nashville', offer: 'Certificates at the front desk, club credit by phone', href: 'https://www.padel.haus/faqs' },
];

/** Every gear item, in page order */
export const ALL_GIFT_ITEMS: GiftItem[] = GIFT_SECTIONS.flatMap((s) => s.items);
