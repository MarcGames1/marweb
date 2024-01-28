
import { Buttons, H } from '@/components';
import { TextColor, TextSize } from '@/components/Typography/H';
import { HeroSectionData } from '@/date/types';
import HeroSection, { IHeroSectionProps } from '@/components/HeroSection';
import React from 'react';
import Image from 'next/image';



const Section1 = ({ heading, content, src }: IHeroSectionProps) => {
  return (
   <HeroSection {...{heading, content, src}} />
  );
};

export default Section1;
