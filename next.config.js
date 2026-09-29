/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },
  headers: async () => [
    {
      source: '/sitemap.xml',
      headers: [{ key: 'Content-Type', value: 'application/xml' }],
    },
    {
      source: '/robots.txt',
      headers: [{ key: 'Content-Type', value: 'text/plain' }],
    },
  ],
  redirects: async () => [
    {
      source: '/electromenager',
      destination: '/produits?category=electromenager',
      permanent: false,
    },
  ],
};

module.exports = nextConfig;
