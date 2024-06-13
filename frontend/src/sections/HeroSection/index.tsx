import React from 'react'
import styles from './styles.module.css'
import { Buttons, H } from '../../components';
import HomepageData from '@/date/homepage';
import { TextSize } from '@/components/Typography/H';
const HeroSection = () => {
  return (
    <section className={` overflow-x-clip w-full mt-20`}>
      <div className="container max-w-[960px] flex flex-col lg:gap-20 gap-5 self-start  w-full justify-items-center h-full overflow-clip">
        <H className='lg:after-effect lg:after:mx-2' level={1} size={TextSize.xl5} >
          {HomepageData.S1.heading}
        </H>
        <H size={TextSize.xl} level={'div'}>
          {HomepageData.S1.content}
        </H>
        <div className="flex flex-col lg:flex-row lg:justify-around justify-items-center gap-2 lg:gap-20">
          <Buttons.Calendly />
          <Buttons.Whatsapp />
        </div>
      </div>
    </section>
  );
}

export default HeroSection