import { Buttons, H } from '@/components';
import { TextColor, TextSize } from '@/components/Typography/H';
import { HeroSectionData } from '@/date/types';
import React from 'react';
import Image from 'next/image';
import HeroSection, { IHeroSectionProps } from '@/components/HeroSection';
const Section1 = ({ heading, content, src }: IHeroSectionProps) => {
  return <HeroSection heading={heading} content={content} src={src}  />
};

export default Section1;
