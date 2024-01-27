import React from 'react';

import { Metadata } from 'next/types';
import { metadata as md } from '@/date/googleAds';

export const metadata: Metadata = md

const GoogleAdsLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default GoogleAdsLayout;
