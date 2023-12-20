/** @type {import('next').NextConfig} */
const nextConfig = { async redirects() {
    return [
      {
        source: '/cpanel',
        destination:
          'https://server-0391.whmpanels.com:2083/cpsess9445440661/frontend/jupiter/index.html?login=1&post_login=64280972637105',
        permanent: true,
      },
    ];}}

module.exports = nextConfig
