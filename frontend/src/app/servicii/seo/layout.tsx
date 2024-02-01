import React from 'react';

import { Metadata } from 'next/types';
import { metadata as md } from '@/date/seo';
import Header from '@/components/Header';

export const metadata: Metadata = md;

const SeoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default SeoLayout;
