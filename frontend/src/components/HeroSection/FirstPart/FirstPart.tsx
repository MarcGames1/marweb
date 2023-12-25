import React, { PropsWithChildren } from 'react';

import Image from 'next/image';
import { BlurGlow } from '@/components/Decorations';
import HeroContent from '../HeroContent';

const HeroSectionBG = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex w-full z-0 relative  ">
      <div className="absolute inset-0 overflow-y-clip  -z-10">
        <Image
          src={'/assets/decorations/semicerc-1289-674.svg'}
          width={300}
          height={100}
          alt="bg-decorations"
        />
        <BlurGlow position="left-20 top-1/3" />
        <BlurGlow position="right-0" />
      </div>
      {children}
    </div>
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
