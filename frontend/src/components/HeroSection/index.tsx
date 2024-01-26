import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { H } from '..';

const HeroSection = () => {
  return (
    <section className={`${styles.section} overflow-x-clip w-full h-full`}>
      <div className="w-full h-screen relative">
        {/* <Image alt="bg-image" width={1440} height={1162} src={'/assets/decorations/bg.jpg'} /> */}
      </div>
    </section>
  );
}

export default HeroSection