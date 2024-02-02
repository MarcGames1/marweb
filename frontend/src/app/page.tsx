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
import ClientSlider from '@/components/ClientSlidet/ClientSlider';
import ContactForm from '@/components/ContactForm/ContactForm';
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
        <ClientSlider />
        <div className='lg:w-1/2 block m-auto' >
        <ContactForm />
        </div>

      </Container>
    </>
  );
}
