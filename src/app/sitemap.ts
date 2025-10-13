import { MetadataRoute } from 'next';
import { getStates, getAllCities } from '@/lib/site-structure';
import { getAllAdaptedCourtSlugs } from '@/lib/court-adapter';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://padelcourtsfinder.com';
  const currentDate = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-to-play`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rules`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/equipment`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/get-started`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/get-started/glossary`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // State pages
  const states = getStates();
  const statePages: MetadataRoute.Sitemap = states.map((state) => ({
    url: `${baseUrl}/${state.slug}`,
    lastModified: currentDate,
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
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    };
  });

  // Court detail pages
  const courtSlugs = getAllAdaptedCourtSlugs();
  const courtPages: MetadataRoute.Sitemap = courtSlugs.map((slug) => ({
    url: `${baseUrl}/courts/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Blog post pages
  const blogPosts = [
    'best-padel-clubs-miami',
    'best-padel-clubs-austin',
    'best-padel-clubs-los-angeles',
    'best-padel-clubs-san-francisco',
    'best-padel-clubs-san-diego',
    'best-padel-clubs-nyc',
    'best-padel-clubs-phoenix',
    'best-padel-clubs-chicago',
    'best-padel-clubs-denver',
    'best-padel-clubs-dallas',
    'best-padel-clubs-atlanta',
    'best-padel-clubs-houston',
    'best-padel-clubs-charlotte',
    'best-padel-clubs-san-antonio',
    'best-padel-clubs-orlando',
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
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
