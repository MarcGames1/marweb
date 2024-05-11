import {
  // ColaborareSection,
  HeroSection,
  HeroVideo, Loader,

  // DeCeNoi
} from '@/components';
import ServiciiSection from '@/sections/Servicii';

import HomepageData from '@/date/homepage';
import BrandBenefits from '@/components/BrandBenefits/BrandBenefits';
import SectionWithCardsComponent from '@/components/SectionWithCardsComponent/SectionWithCardsComponent';
import Container from '@/components/Container';
import Header from '@/components/Header';
import ClientSlider from '@/components/ClientSlider/ClientSlider';
import ContactForm from '@/components/ContactForm/ContactForm';
export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <HeroVideo />
        <HeroSection />
        <BrandBenefits />
        <ServiciiSection data={HomepageData.S2} />
        <SectionWithCardsComponent {...HomepageData.S3} />
        <ClientSlider />
        <div className='lg:w-1/2 block m-auto mt-5' >
        <ContactForm />
        </div>

      </Container>
    </>
  );
}
