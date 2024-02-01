
import React from 'react'
import Section1 from './sections/Section1'
import { S1 } from '@/date/creareWebsite'
import Header from '@/components/Header';


const CreareWebsitePage = () => {
  return (
    <>
    <Header />
      <Section1 src="/assets/WEBSITE/hero.png" {...S1} />
    </>
  );
}

export default CreareWebsitePage


