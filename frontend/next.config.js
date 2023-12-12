/** @type {import('next').NextConfig} */
const nextConfig = { async redirects() {
    return [
      {
        source: '/cpanel',
        destination: 'https://89.42.218.12:2083',
        permanent: true,
      },
    ];}}

module.exports = nextConfig
