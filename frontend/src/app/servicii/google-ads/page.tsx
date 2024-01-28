import React from 'react'
import Section1 from './sections/Section1'
import GoogleAdsData from '@/date/googleAds'

const GoogleAdsPage = () => {
  return (
    <>
      <Section1 src="/assets/ADS/hero.png" {...GoogleAdsData.S1} />
    </>
  );
}

export default GoogleAdsPage