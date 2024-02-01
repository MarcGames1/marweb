import React, { ReactNode } from 'react'
import { H } from '..';
import styles from './BrandBenefits.module.css'
import { TextColor, TextSize } from '../Typography/H';
import { HiAcademicCap } from 'react-icons/hi';
import { TbBrandReactNative, TbSeo } from 'react-icons/tb';


const BrandBenefits = () => {
  return (
    <section className="bg-gradient-to-b from-[#2A0B70] to-[#0C0A27]   ">
      
      <div className="container flex lg:flex-row m-auto  flex-col items-center justify-evenly gap-5 lg:gap-0 p-5  h-fit">
        <BenefitsCard
          beneficiu="Expertiză Remarcabilă în SEO și Google Ads"
          image={styles.image1}
          Icon={<TbSeo size={'3em'} color={'#C619A4'} />}
        />
        <BenefitsCard
          beneficiu="Soluții Personalizate de Dezvoltare Website"
          Icon={<TbBrandReactNative size={'3em'} color={'#C619A4'} />}
          image={styles.image2}
        />
        <BenefitsCard
          beneficiu="Sesiuni de Mentorat Unu la Unu și Experiență Extinsă"
          image={styles.image3}
          Icon={<HiAcademicCap size={'3em'} color={'#C619A4'} />}
        />
      </div>
    </section>
  );
}

interface IBenefitsCard {
  image: string;
  beneficiu: string,
  Icon:ReactNode
}

const BenefitsCard = ({ image, beneficiu, Icon }: IBenefitsCard) => {
    
  return (
    <div className="relative shrink-0 outline_hover w-[300px] h-[200px]   rounded-2xl ">
      <div
        className={`${image} mix-blend-luminosity w-[300px] h-[200px] rounded-2xl outline_hover  absolute  inset-0	`}
      ></div>
      <div className="absolute top-1 left-1 mix-blend-normal ">
        {Icon}
      </div>
      <div className="absolute bottom-0 bg-black/90 rounded-2xl p-2">
        {' '}
        <H
          level={'div'}
          className="font-bold"
          size={TextSize.lg}
          
        >
          {beneficiu}
        </H>
      </div>
    </div>
  );
};
export default BrandBenefits