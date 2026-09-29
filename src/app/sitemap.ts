import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://electroachagar.ma';
  const routes = [
    '',
    '/produits',
    '/services',
    '/videosurveillance',
    '/reseaux',
    '/installation',
    '/devis',
    '/rendez-vous',
    '/contact',
    '/sav',
    '/garantie',
    '/a-propos',
    '/realisations',
    '/conseils',
    '/faq',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
