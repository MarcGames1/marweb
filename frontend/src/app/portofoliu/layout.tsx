import { SEOInfo } from '@/classes/SeoInfo';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = new SEOInfo(
  'Portofoliu - MarWeb',
  'Portofoliu - MarWeb',
  '/portofoliu/'
);

const PortofoliuLayout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default PortofoliuLayout