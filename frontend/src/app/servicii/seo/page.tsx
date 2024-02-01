
import React from 'react'
import Section1 from './Sections/Section1'
import SeoData from '@/date/seo'
import Section2 from './Sections/Section2'
import Section3 from './Sections/Section3'
import Section4 from './Sections/Section4'
import Container from '@/components/Container'


const ServiciiSeoPage = () => {
  return (
    <>
      <Section1 src="/assets/SEO/hero.png" {...SeoData.S1} />
      <Container>
        <Section2 {...SeoData.S2} />
        <Section3 {...SeoData.S3} />
        <Section4 />
      </Container>
    </>
  );
}

export default ServiciiSeoPage