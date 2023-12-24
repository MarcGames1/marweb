import React from 'react';

import HeroContent from './HeroContent';
import Image from 'next/image';

import { BlurGlow } from '../Decorations';

const HeroSection = () => {
  return (
    <div className="flex w-full z-0 relative  ">
      <div className="absolute inset-0   -z-10">
        <Image
          src={'/assets/decorations/semicerc-1289-674.svg'}
          width={300}
          height={100}
          alt="bg-decorations"
        />
        <BlurGlow position="left-20 top-1/3" />
        <BlurGlow position="right-0" />
        
      </div>
      <HeroContent />
    </div>
  );
};

export default HeroSection;


