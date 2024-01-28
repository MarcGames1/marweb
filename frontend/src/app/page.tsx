import {
  // ColaborareSection,
  HeroSection,
  HeroVideo,

  // DeCeNoi
} from '@/components';
import ServiciiSection from '@/sections/Servicii';
import Section2 from './servicii/seo/Sections/Section2';
import HomepageData from '@/date/homepage';
import BrandBenefits from '@/components/BrandBenefits';
export default function Home() {
  return (
    <>
      <HeroVideo />
      <HeroSection />
      <BrandBenefits />
      <ServiciiSection />
      <Section2 {...HomepageData.S3} />
      
    </>
  );
}
