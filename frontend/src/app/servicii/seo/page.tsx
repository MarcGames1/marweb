import React from 'react';
import SeoData from '@/date/seo';
import Section4 from './Sections/Section4';
import SectionWithCardsComponent from '@/components/SectionWithCardsComponent/SectionWithCardsComponent';
import HeroSection from '@/components/HeroSection';
import ClientSlider from "@/components/ClientSlider/ClientSlider";
import ContactForm from "@/components/ContactForm/ContactForm";

const ServiciiSeoPage = () => {
  return (
    <>
      <HeroSection src="/assets/SEO/hero.png" {...SeoData.S1} />
      <SectionWithCardsComponent {...SeoData.S2} />
      <SectionWithCardsComponent {...SeoData.S3} />
      <Section4 {...SeoData.S4} />
        <ClientSlider />
        <div className='lg:w-1/2 block m-auto mt-5' >
            <ContactForm />
        </div>
    </>
  );
};

export default ServiciiSeoPage;
