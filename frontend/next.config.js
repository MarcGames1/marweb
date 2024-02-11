/** @type {import('next').NextConfig} */
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
};

module.exports = withMDX(nextConfig);
