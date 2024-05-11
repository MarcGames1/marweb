import React, { ReactNode } from 'react'
import { H } from '..';
import styles from './BrandBenefits.module.css'
import { HiAcademicCap } from 'react-icons/hi';
import { TbBrandReactNative, TbSeo } from 'react-icons/tb';
import { CardBGColor } from '@/date/types';
import BenefitsCard from "@/components/BrandBenefits/BenefitsCard";

const BrandBenefits = () => {
  return (
    <section className="   ">
      <div className="container flex lg:flex-row m-auto  flex-col items-center justify-evenly gap-5  p-5  h-fit">
        <BenefitsCard
          beneficiu="Expertiză Remarcabilă în SEO și Google Ads"
          image={styles.image1}
          Icon={<TbSeo size={'3em'} color={'#FA5252'} />}
        />
        <BenefitsCard
          beneficiu="Soluții Personalizate de Dezvoltare Website"
          Icon={<TbBrandReactNative size={'3em'} color={'#FA5252'} />}
          image={styles.image2}
        />
        <BenefitsCard
          beneficiu="Mentorat si Training-uri Personalizate"
          image={styles.image3}
          Icon={<HiAcademicCap size={'3em'} color={'#FA5252'} />}
        />
      </div>
    </section>
  );
}


export default BrandBenefits