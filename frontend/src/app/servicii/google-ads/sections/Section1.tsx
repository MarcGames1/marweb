import React from 'react';
import HeroSection, { IHeroSectionProps } from '@/components/HeroSection';
const Section1 = ({ heading, content, src }: IHeroSectionProps) => {
  return <HeroSection heading={heading} content={content} src={src}  />
};

export default Section1;
