import {
  // ColaborareSection,
  HeroSection,
  HeroVideo,

  // DeCeNoi
} from '@/components';
import ServiciiSection from '@/sections/Servicii';

import HomepageData from '@/date/homepage';
import BrandBenefits from '@/components/BrandBenefits';
import SectionWithCardsComponent from '@/components/SectionWithCardsComponent/SectionWithCardsComponent';
import Container from '@/components/Container';
import Header from '@/components/Header';
export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <HeroVideo />
        <HeroSection />
        <BrandBenefits />
        <ServiciiSection />
        <SectionWithCardsComponent {...HomepageData.S3} />
      </Container>
    </>
  );
}
