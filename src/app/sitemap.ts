// src\app\sitemap.ts

import type { MetadataRoute } from 'next';

const SITE_URL = 'https://ruo-shui.iistw.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
  ];

  return [...staticRoutes];
}
