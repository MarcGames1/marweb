

import { Metadata } from 'next/types';
import { SEOInfo } from '@/classes/SeoInfo';
import PageTemplate from '@/components/PageTemplate/PageTemplate';

export const metadata: Metadata = new SEOInfo(
  'Creare Website • MarWeb.ro',
  'Agentie Marketing Online • MarWeb.ro Te ajutam cu Strategii Unice Pentru Afacerea ta Online.',
  '/'
);


const CreareWebsiteLayout = PageTemplate

export default CreareWebsiteLayout