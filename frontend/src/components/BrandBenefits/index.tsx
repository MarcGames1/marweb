import React, { ReactNode } from 'react'
import { H } from '..';
import styles from './BrandBenefits.module.css'
import { TextColor, TextSize } from '../Typography/H';
import { HiAcademicCap } from 'react-icons/hi';
import { TbBrandReactNative, TbSeo } from 'react-icons/tb';
import { CardBGColor } from '@/date/types';


const BrandBenefits = () => {
  return (
    <section className="   ">
      <div className="container flex lg:flex-row m-auto  flex-col items-center justify-evenly gap-5 lg:gap-0 p-5  h-fit">
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
          beneficiu="Sesiuni de Mentorat Unu la Unu și Experiență Extinsă"
          image={styles.image3}
          Icon={<HiAcademicCap size={'3em'} color={'#FA5252'} />}
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
    <div className="relative shrink-0  w-[300px] h-[200px]   rounded-2xl ">
      <div
        className={`${image}  w-[300px] h-[200px] rounded-2xl   absolute  inset-0	`}
      ></div>
      <div className="absolute top-1 left-1 mix-blend-normal ">
        {Icon}
      </div>
      <div className="absolute bottom-0 bg-color-500/90 dark:bg-black/90 rounded-2xl p-2">
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