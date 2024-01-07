'use client'
import React, { PropsWithChildren, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Buttons, H } from '@/components';


const HeroSectionContent = () => {

      const targetRef = useRef<HTMLDivElement>(null);
      const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['end end', 'end start'],
      });

      const containerStyles = {
        display: useTransform(scrollYProgress, [0, .99, 1], ['flex', 'flex', 'flex'])
      }


      const laptopStyles = {
        rotateZ: useTransform(
          scrollYProgress,
          [0, 0.25, 0.35, 0.75, 1],
          [30, 0, 0, 0, -30]
        ),
        scale: useTransform(
          scrollYProgress,
          [0, 0.1, 0.25, 0.35, 0.75, 1],
          [0.7, 0.8, 0.9, 1, 1, 0.9]
        ),
        y: useTransform(scrollYProgress, [0, 1], [-60, 60]),
        display: useTransform(
          scrollYProgress,
          [0, 0.99, 1],
          ['block', 'block', 'none']
        ),
      };

      const textStyles = {
        scale: useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 5]),
        y: useTransform(
          scrollYProgress,
          [0, 0.25, 0.35, 0.75, 1],
          [0, 300, 400, 500, 600]
        ),
        opacity: useTransform(
          scrollYProgress,
          [0, 0.5, 0.7, 1],
          [1, 0.5, 0, 0]
        ),
        display: useTransform(
          scrollYProgress,
          [0, 0.99, 1],
          ['flex', 'flex', 'none']
        ),
      };

  return (
    <motion.div
      ref={targetRef}
      className=" flex-col lg:flex-row mx-10 items-center justify-items-center"
      style={containerStyles}
     
    >
      <motion.div style={laptopStyles} className="w-1/2 lg:mix-blend-normal mix-blend-hard-light">
        <Image
          loading="eager"
          className="w-full h-full"
          alt="Hero Image"
          src={'/assets/webDevelopment/hero-image.png'}
          width={406}
          height={413}
        />
      </motion.div>
      <motion.div style={textStyles} className="flex flex-col flex-1 gap-10  ">
        <H
          className="  "
          level={1}
          alignment={'center'}
          size={'5xl'}
          color={'primary'}
        >
          Transformă Viziunea în Realitate Online: Creăm Website-uri{' '}
          <span className=" text-accent">Unice și Eficiente</span>
        </H>
        <div className="flex flex-col items-center justify-center justify-items-center gap-10">
          <H alignment={'center'} size={'3xl'} color={'accent'}>
            Design personalizat, performanță optimă și strategie SEO pentru
            afacerea ta online
          </H>
          <div className="  z-10 flex items-center   justify-items-center gap-10  mb-5">
            <Buttons.Calendly />
            <Buttons.Whatsapp />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSectionContent;
