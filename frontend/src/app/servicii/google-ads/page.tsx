import React from 'react'
import Section1 from './sections/Section1'
import GoogleAdsData from '@/date/googleAds'
import SectionWithCardsComponent from '@/components/SectionWithCardsComponent/SectionWithCardsComponent';
import ClientSlider from "@/components/ClientSlider/ClientSlider";
import ContactForm from "@/components/ContactForm/ContactForm";

const GoogleAdsPage = () => {
  return (
    
    <>
      <Section1 src="/assets/ADS/hero.png" {...GoogleAdsData.S1} />
     <SectionWithCardsComponent {...GoogleAdsData.S2} />
        <ClientSlider />
        <div className='lg:w-1/2 block m-auto mt-5' >
            <ContactForm />
        </div>
    </>
  );
}



export default GoogleAdsPage