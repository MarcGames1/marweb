
import React from 'react'
import Section1 from './Sections/Section1'
import SeoData from '@/date/seo'
import Section4 from './Sections/Section4'
import Container from '@/components/Container'
import SectionWithCardsComponent from '@/components/SectionWithCardsComponent/SectionWithCardsComponent'
import HeroSection from '@/components/HeroSection'


const ServiciiSeoPage = () => {
  return (
    <>
      <HeroSection src="/assets/SEO/hero.png" {...SeoData.S1} />
      <Container>
        

        <SectionWithCardsComponent {...SeoData.S2} />
        <SectionWithCardsComponent {...SeoData.S3} />
        <Section4 {...SeoData.S4} />
        
      </Container>
    </>
  );
}

export default ServiciiSeoPage