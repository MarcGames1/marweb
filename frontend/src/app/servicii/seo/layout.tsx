import React from 'react';

import { Metadata } from 'next/types';
import { metadata as md } from '@/date/seo';

export const metadata: Metadata = md;

const SeoLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default SeoLayout;
