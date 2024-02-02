

import { Metadata } from 'next/types';
import { SEOInfo } from '@/classes/SeoInfo';
import PageTemplate from '@/components/PageTemplate/PageTemplate';

export const metadata: Metadata = new SEOInfo(
  'Creare Website • MarWeb.ro',
  'Creare Website • MarWeb.ro Te ajutam cu Strategii Unice Pentru Afacerea ta Online.',
  '/servicii/creare-website'
);


const CreareWebsiteLayout = PageTemplate

export default CreareWebsiteLayout