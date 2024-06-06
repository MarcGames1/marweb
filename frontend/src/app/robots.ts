import {MetadataRoute} from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/gdpr', '/termeni-conditii', '/politica-cookie',],

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
    sitemap: 'https://marweb.ro/sitemap.xml',
  }
}