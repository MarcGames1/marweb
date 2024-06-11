import { SEOInfo } from '@/utils/SeoInfo';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = new SEOInfo(
  'Blog - MarWeb',
  'Blog - MarWeb',
  '/blog/'
);

const PortofoliuLayout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>
};

export default PortofoliuLayout