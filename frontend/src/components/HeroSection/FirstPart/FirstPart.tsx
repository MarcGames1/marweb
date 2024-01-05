'use client'
import React, { PropsWithChildren, useRef } from 'react';

import Image from 'next/image';
import { BlurGlow } from '@/components/Decorations';
import HeroContent from '../HeroContent';
import {motion, useScroll, useTransform} from 'framer-motion'



const HeroSectionBG = ({ children }: PropsWithChildren) => {

  const targetRef = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({ target:targetRef, offset: ['end end', "end start"]})
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform( scrollYProgress, [0, 0.5], [1, 0.8])
  const x = useTransform(scrollYProgress,[0, 0.1, 0.9],[0, 100, 300] )
  const negativeX = useTransform(scrollYProgress, [0, 0.1, 0.9], [0, -100, -300]);
  const y = useTransform(scrollYProgress,[0, 0.1, 0.9],[0,0, 500] )
  const textOpacity = useTransform(scrollYProgress, [0,0.6,0.8], [1,0.,0])
  return (
    <motion.div
      ref={targetRef}
      className="flex max-h-screen overflow-x-clip bg-fixed z-0 relative  "
    >
      <motion.div className="absolute inset-0 overflow-x-clip  -z-10">
        <motion.div style={{ opacity, scale, x: negativeX, top:'25%', position:'absolute'}}>
          <Image
            
            src={'/assets/mockups/Online Marketing Agency.png'}
            width={406}
            height={413}
            alt="bg-decorations"
          />
        </motion.div>
        <motion.div style={{ opacity, scale}}>
          <BlurGlow position="left-20 top-1/3" />
          <BlurGlow position="lg:block hidden  right-0" />
        </motion.div>
        <motion.div style={{ opacity, scale, x}}>
          <Image
            className=" lg:block hidden absolute right-0 m-10"
            src={'/assets/decorations/semicerc-dreapta.png'}
            width={406}
            height={413}
            alt="bg-decorations"
          />
        </motion.div>
      </motion.div>
      <motion.div className='w-full' style={{ y, scale, opacity: textOpacity}}>
      {children}
      </motion.div>

    </motion.div>
  );
};

const FirstPart = () => {
  return (
    <HeroSectionBG>
      <HeroContent />
    </HeroSectionBG>
  );
};

export default FirstPart;
