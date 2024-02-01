import React from 'react'
import Section1 from './sections/Section1'
import GoogleAdsData from '@/date/googleAds'
import { Section2 } from './sections/Section2';
import Header from '@/components/Header';

const GoogleAdsPage = () => {
  return (
    <>
      <Header />
      <Section1 src="/assets/ADS/hero.png" {...GoogleAdsData.S1} />
      <Section2 {...GoogleAdsData.S2} />
    </>
  );
}



export default GoogleAdsPage