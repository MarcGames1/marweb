import Section1 from './sections/Section1';
import { S1 } from '@/date/creareWebsite';
import Section2 from "@/app/servicii/creare-website/sections/Section2";

const CreareWebsitePage = () => {
  return (
    <>
      <Section1 src="/assets/WEBSITE/hero.png" {...S1} />
        <Section2 />
    </>
  );
};

export default CreareWebsitePage;
