'use client';

import React, { ReactNode, useRef } from 'react';
import Image from 'next/image';
import { BlurGlow } from '@/components/Decorations';
import { motion, useScroll, useTransform } from 'framer-motion';
interface ThirdPartBg {
  children: ReactNode;
}

const ThirdPartBg = ({ children }: ThirdPartBg) => {
  const variants = {
    initial: { scale: 0 },
    animate: {
      scale: [0.8, 1, 0.9, 1],
      y: [0, 50, -50, 0],
      x:[50, 0 ,0 ,-50]
    },
  };

    const targetRef = useRef<HTMLDivElement>(null);
     const { scrollYProgress } = useScroll({
       target: targetRef,
       offset: ['start end', 'end start'],
     });

     
const containerStyles = {
  scale: useTransform(
    scrollYProgress,
    [0, 0.25, 0.35, 0.5, 0.75, 0.85, 1],
    [2, 1.5, 1, 0.9, 1, 0.8, 0]
  ),
 
};
const childrenStyles = {

  // scale: useTransform(scrollYProgress, [0, 1], [1, 0]),
   y: useTransform(
    scrollYProgress,
    [0, 0.25, 0.35, 0.5, 0.75, 0.85, 1],
    [300, 300, 0, 0, 0, 0,0])
};
const piramidStyles = {
  x: useTransform(
    scrollYProgress,
    [0, 0.25, 0.35, 0.5, 0.75, 0.85, 1],
    [250, 300, 500, 400, 300, -100, -0]
  ),
  y: useTransform(
    scrollYProgress,
    [0, 0.25, 0.35, 0.5, 0.75, 0.85, 1],
    [0, 0, 0, -300, -400, -1000, 0]
  ),
  scale: useTransform(
    scrollYProgress,
    [0,0.1, 0.25, 0.35, 0.5, 0.75, 0.85, 1],
    [0,0.4, 0.3, 0.2, 1, 0.9, 0.8, 0]
  ),
};
  return (
    <motion.div
      style={containerStyles}
      ref={targetRef}
      className="relative pt-9 mix-blend-difference  min-h-screen   "
    >
      <motion.div style={piramidStyles}>
        <Image
          className="absolute "
          src={'/assets/decorations/piramida-778-575.svg'}
          alt="bg-decoration"
          width={300}
          height={300}
        />
      <BlurGlow variants={variants} duration={5} position="" />
      </motion.div>

      <motion.div style={childrenStyles} className="relative w-full h-full ">{children}</motion.div>
     
    </motion.div>
  );
};

export default ThirdPartBg;
