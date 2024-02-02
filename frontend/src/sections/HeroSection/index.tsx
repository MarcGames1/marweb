import React from 'react'
import styles from './styles.module.css'
import { Buttons, H } from '../../components';
import HomepageData from '@/date/homepage';
import { TextSize } from '@/components/Typography/H';
const HeroSection = () => {
  return (
    <section className={`${styles.section} overflow-x-clip w-full`}>
      <div className="container max-w-[960px] flex flex-col gap-20 items-center overflow-clip">
        <H className='after-effect after:mx-2' level={1} size={TextSize.xl5} >
          {HomepageData.S1.heading}
        </H>
        <H size={TextSize.xl} level={'div'}>
          {HomepageData.S1.content}
        </H>
        <div className="flex flex-row justify-around gap-10 lg:gap-20">
          <Buttons.Calendly />
          <Buttons.Whatsapp />
        </div>
      </div>
    </section>
  );
}

export default HeroSection