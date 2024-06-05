/** @type {import('next-sitemap').IConfig} */

const config = {
    siteUrl: 'https://marweb.ro',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    exclude: [
        '/icon.svg',
        '/apple-icon.png',
        '/manifest.webmanifest',
        '/tags/*',
        '/sw.js',
        '/termeni-conditii',
        '/politica-cookie',
        '/gdpr',
    ],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                disallow: ['/politica-cookie','/termeni-conditii', '/gdpr', '/politica-cookie',]
            },

            {
                userAgent: 'DotBot',
                disallow: ['/', '/*'],
            },
            {
                userAgent: 'AhrefsBot',
                disallow: ['/', '/*'],
            },
            {
                userAgent: 'PetalBot',
                disallow: ['/', '/*'],
            },
            {
                userAgent: 'SEMrushBot',
                disallow: ['/', '/*'],
            },
            {
                userAgent: 'Majestic',
                disallow: ['/', '/*'],
            },
        ],
    },
};
export default config