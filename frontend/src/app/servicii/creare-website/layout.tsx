
import React from 'react'

import { Metadata } from 'next/types';
import { SEOInfo } from '@/app/classes/SeoInfo';

export const metadata: Metadata = new SEOInfo(
  'Creare Website • MarWeb.ro',
  'Agentie Marketing Online • MarWeb.ro Te ajutam cu Strategii Unice Pentru Afacerea ta Online.',
  '/'
);


const CreareWebsiteLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return <>{children}</>;
};

export default CreareWebsiteLayout