/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  scope: '/',
});

const withMDX = require('@next/mdx')();
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  pageExtensions: ['mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/cpanel',
        destination:
          'https://server-0391.whmpanels.com:2083/cpsess9445440661/frontend/jupiter/index.html?login=1&post_login=64280972637105',
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
