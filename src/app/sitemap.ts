import { MetadataRoute } from 'next';
import { getStates, getAllCities } from '@/lib/site-structure';
import { getAllAdaptedCourtSlugs } from '@/lib/court-adapter';
import { getPadelNearMetros } from '@/lib/metros';
import pageDatesRaw from '@/data/page-dates.json';
import blogSlugs from '@/data/blog-slugs.json';

/**
 * <lastmod> comes from git history via src/data/page-dates.json, NOT from
 * `new Date()`.
 *
 * Stamping build time on every entry made all ~714 URLs share one identical
 * lastmod that moved on every deploy — i.e. "the entire site changed just now",
 * every time. Google discounts lastmod entirely for properties that do this, and
 * as of 2026-08-10 this site had 90 URLs discovered but never crawled.
 *
 * Regenerate with `npm run sitemap:dates` after shipping content or club-data
 * changes, and commit the result. If it goes stale the dates simply hold their
 * previous values — a much better failure mode than universal churn.
 */
const pageDates = pageDatesRaw as unknown as {
  __templates__: Record<'court' | 'state' | 'city' | 'padelNear', string>;
  __fallback__: string;
} & Record<string, string>;

type TemplateKey = keyof typeof pageDates.__templates__;

function dateFor(route: string, template?: TemplateKey): Date {
  const explicit = pageDates[route];
  if (typeof explicit === 'string') return new Date(explicit);
  if (template) {
    const templateDate = pageDates.__templates__[template];
    if (templateDate) return new Date(templateDate);
  }
  return new Date(pageDates.__fallback__);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.padelcourtsfinder.com';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: dateFor('/'),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: dateFor('/search'),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: dateFor('/blog'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/advertise`,
      lastModified: dateFor('/advertise'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/indoor-padel-courts`,
      lastModified: dateFor('/indoor-padel-courts'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/padel-lessons`,
      lastModified: dateFor('/padel-lessons'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/buy-a-padel-court`,
      lastModified: dateFor('/buy-a-padel-court'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/state-of-us-padel-2026`,
      lastModified: dateFor('/state-of-us-padel-2026'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/badge`,
      lastModified: dateFor('/badge'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    ...getPadelNearMetros().map((mm) => ({
      url: `${baseUrl}/padel-near/${mm.slug}`,
      lastModified: dateFor(`/padel-near/${mm.slug}`, 'padelNear'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    {
      url: `${baseUrl}/how-to-play`,
      lastModified: dateFor('/how-to-play'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rules`,
      lastModified: dateFor('/rules'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/equipment`,
      lastModified: dateFor('/equipment'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: dateFor('/faq'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/get-started`,
      lastModified: dateFor('/get-started'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/get-started/glossary`,
      lastModified: dateFor('/get-started/glossary'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: dateFor('/about'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // State pages
  const states = getStates();
  const statePages: MetadataRoute.Sitemap = states.map((state) => ({
    url: `${baseUrl}/${state.slug}`,
    lastModified: dateFor(`/${state.slug}`, 'state'),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // City pages
  const cities = getAllCities();
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => {
    // Get state slug from state code
    const state = states.find(s => s.code === city.stateCode);
    const stateSlug = state?.slug || city.stateCode.toLowerCase();

    return {
      url: `${baseUrl}/${stateSlug}/${city.slug}`,
      lastModified: dateFor(`/${stateSlug}/${city.slug}`, 'city'),
      changeFrequency: 'weekly',
      priority: 0.8,
    };
  });

  // Court detail pages
  const courtSlugs = getAllAdaptedCourtSlugs();
  const courtPages: MetadataRoute.Sitemap = courtSlugs.map((slug) => ({
    url: `${baseUrl}/courts/${slug}`,
    lastModified: dateFor(`/courts/${slug}`, 'court'),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Blog post pages — slugs live in src/data/blog-slugs.json so this list and
  // scripts/generate-page-dates.mjs read the same source and cannot drift.
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: dateFor(`/blog/${slug}`),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...statePages,
    ...cityPages,
    ...courtPages,
    ...blogPages,
  ];
}
