
import React from 'react'
import Section1 from './Sections/Section1'
import SeoData from '@/date/seo'
import Section2 from './Sections/Section2'
import Section3 from './Sections/Section3'


const ServiciiSeoPage = () => {
  return (<>
   <Section1 src='/assets/SEO/hero.png' {...SeoData.S1}/>
   <Section2 {...SeoData.S2}/>
   <Section3 {...SeoData.S3}/>
  </>
  )
}

export default ServiciiSeoPage