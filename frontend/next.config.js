/** @type {import('next').NextConfig} */
const nextConfig = { async redirects() {
    return [
      {
        source: '/cpanel',
        destination: 'https://server-0391.whmpanels.com:2083/',
        permanent: true,
      },
    ];}}

module.exports = nextConfig
