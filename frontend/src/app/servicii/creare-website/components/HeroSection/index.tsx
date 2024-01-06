'use client';
import React, { PropsWithChildren, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import Image from 'next/image';
import { Buttons, H } from '@/components';


const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row mx-10 items-center justify-items-center">
      <div className="w-1/2">
        <Image
          alt="Hero Image"
          src={'/assets/webDevelopment/hero-image.png'}
          width={406}
          height={413}
        />
      </div>
      <div className="flex flex-col place-items-center items-center justify-items-center">
        <H level={1}  alignment={'center'} size={'7xl'} color={'primary'}>
          Transformă Viziunea în Realitate Online: Creăm Website-uri{' '}
          <span className=" text-accent">Unice și Eficiente</span>
        </H>
        <H alignment={'center'} size={'5xl'} color={'accent'}>
          Design personalizat, performanță optimă și strategie SEO pentru
          afacerea ta online
        </H>
        <div className="  z-10 flex items-center py-10  justify-items-center gap-10  mb-5">
          <Buttons.Calendly />
          <Buttons.Whatsapp />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
