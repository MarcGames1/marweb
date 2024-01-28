
import HeroSection, { IHeroSectionProps } from '@/components/HeroSection';
import React from 'react';



const Section1 = ({ heading, content, src }: IHeroSectionProps) => {
  return (
   <HeroSection {...{heading, content, src}} />
  );
};

export default Section1;
