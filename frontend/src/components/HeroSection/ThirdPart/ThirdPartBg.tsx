import React, { ReactNode } from 'react';
import Image from 'next/image';
import { BlurGlow } from '@/components/Decorations';
import AnimatedDecoration from '../SecondPart/AnimatedDecoration';
interface ThirdPartBg {
  children: ReactNode;
}

const ThirdPartBg = ({ children }: ThirdPartBg) => {
  const variants = {
    initial: { scale: 0 },
    animate: { 
      scale: [0.8, 1, 0.9, 1],
      y:[0, 20, 0, -20, 0] 
    },
  };

  return (
    <div className="relative pt-9  min-h-screen  h-screen  ">
      <Image
        className="absolute"
        src={'/assets/decorations/piramida-778-575.svg'}
        alt="bg-decoration"
        width={300}
        height={300}
      />
      <BlurGlow variants={variants} duration={5} position="" />

      <div className="relative w-full h-full">{children}</div>
      <AnimatedDecoration />
    </div>
  );
};

export default ThirdPartBg;
