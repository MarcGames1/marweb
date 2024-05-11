import Section1 from './sections/Section1';
import { S1 } from '@/date/creareWebsite';
import Section2 from "@/app/servicii/creare-website/sections/Section2";
import WebDevBenefits from "@/components/BrandBenefits/WebDevBenefits";
import {S2, S3} from "@/date/creareWebsite";
import ServiciiSection from "@/sections/Servicii";
import SectionWithCardsComponent from "@/components/SectionWithCardsComponent/SectionWithCardsComponent";
import ClientSlider from "@/components/ClientSlider/ClientSlider";
import ContactForm from "@/components/ContactForm/ContactForm";

const CreareWebsitePage = () => {
  return (
    <>
      <Section1 src="/assets/WEBSITE/hero.png" {...S1} />
        <WebDevBenefits />
      <ServiciiSection data={S2} />
        <SectionWithCardsComponent {...S3} />

        <ClientSlider />
        <div className='lg:w-1/2 block m-auto mt-5' >
            <ContactForm />
        </div>
    </>
  );
};

export default CreareWebsitePage;
