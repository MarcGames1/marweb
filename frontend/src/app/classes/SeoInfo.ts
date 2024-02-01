import { Metadata } from 'next';
interface OpenGraph {
  siteName: string;
  locale: string;
  title: string;
}

interface Alternates {
  canonical: string;
}

export class SEOInfo implements Metadata{
  title: string;
  description: string;
  canonical: string;
  index: boolean;
  robots: string;
  alternates: Alternates;
  openGraph: OpenGraph;
  metadataBase?: URL | null | undefined;

  constructor(
    title: string,
    description: string,
    canonical: string,
    index = true
  ) {
    
    this.title = title;
    this.description = description;
    this.canonical = canonical;
    this.index = index;
    this.robots = index ? 'all' : 'noindex, follow';
    this.alternates = {
      canonical: canonical,
    };
    this.openGraph = {
      siteName: 'MarWeb',
      locale: 'ro-RO',
      title: title,
    };
    this.metadataBase = new URL('https://marweb.ro')
  }
}
