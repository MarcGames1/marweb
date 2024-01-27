import React from 'react'
import styles from './styles.module.css'
import { Buttons, H } from '../../components';
import HomepageData from '@/date/homepage';
const HeroSection = () => {
  return (
    <section className={`${styles.section} overflow-x-clip w-full`}>
      <div className="container max-w-[960px] flex flex-col gap-20 items-center">
        <H level={1} size={'5xl'} className={styles.heading}>
          {HomepageData.S1.heading}
        </H>
        <H size={'xl'} level={'div'}>
          {HomepageData.S1.content}
        </H>
        <div className="flex flex-row gap-20">
          <Buttons.Calendly />
          <Buttons.Whatsapp />
        </div>
      </div>
    </section>
  );
}

export default HeroSection