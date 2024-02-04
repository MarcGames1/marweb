import React from 'react'
import Section1 from './sections/Section1'
import GoogleAdsData from '@/date/googleAds'
import SectionWithCardsComponent from '@/components/SectionWithCardsComponent/SectionWithCardsComponent';

const GoogleAdsPage = () => {
  return (
    
    <>
      <Section1 src="/assets/ADS/hero.png" {...GoogleAdsData.S1} />
     <SectionWithCardsComponent {...GoogleAdsData.S2} />
    </>
  );
}



export default GoogleAdsPage