/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  scope: '/',
});

const withMDX = require('@next/mdx')();
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'], remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/**',
      },
    ], },
  pageExtensions: ['mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/cpanel',
        destination:
          'https://server-0391.whmpanels.com:2083/cpsess9445440661/frontend/jupiter/index.html?login=1&post_login=64280972637105',
        permanent: true,
      },
      {
        source: '/servicii-seo',
        destination: 'https://marweb.ro/servicii/seo/',
        permanent: true,
      },
      {
        source: '/servicii-promovare-google-ads/',
        destination: 'https://marweb.ro/servicii/google-ads',
        permanent: true,
      },
      {
        source: '/blog/portfolio/marweb-ro/',
        destination: 'https://marweb.ro/portofoliu',
        permanent: true,
      },
      {
        source: '/seo-on-page/',
        destination: 'https://marweb.ro/servicii/seo/',
        permanent: true,
      },
      {
        source: '/servicii/promovare-google-ads',
        destination: 'https://marweb.ro/servicii/google-ads',
        permanent: true,
      },
      {
        source: '/blog/portfolio/tomotiv-ro-proiect-in-lucru/',
        destination: 'https://marweb.ro/portofoliu/tomotiv-ro-proiect-in-lucru',
        permanent: true,
      },
      {
        source: '/mentorat-seo/',
        destination: 'https://marweb.ro/servicii/mentorat',
        permanent: true,
      },
      {
        source: '/blog/portfolio/avocat-doru-botea/',
        destination: 'https://marweb.ro/portofoliu/avocat-doru-botea',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*', // Proxy to Backend
      },
    ];
  },
};

module.exports =withPWA( withMDX(nextConfig));
