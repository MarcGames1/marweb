'use client';
import React, { ReactNode, useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
interface SecondPartBg {
  children: ReactNode;
}

const SecondPartBg = ({ children }: SecondPartBg) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

 



 const laptopStyles = {
  //  x: useTransform(
  //    scrollYProgress,
  //    [0, 0.25, 0.35, 0.75, 1],
  //    [0, -500, 0, 0, 0]
  //  ),
   rotateZ: useTransform(
     scrollYProgress,
     [0, 0.25, 0.35, 0.75, 1],
     [0, 30, 0, 0, -30]
   ),
   scale: useTransform(
     scrollYProgress,
     [0,0.1, 0.25, 0.35, 0.75, 1],
     [0, 1.2, 1, 1.2, 1, 0.5]
   ),
 };

  const childrenStyles = {
    scale: useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 5]),
    y:useTransform(
    scrollYProgress,
    [0, 0.25, 0.35, 0.75, 1],
    [0, -300, -100, 0, 0]
  ),
    opacity: useTransform(scrollYProgress, [0, 0.5,0.8 , 1], [1, 1,0, 0]),
  };

  return (
    <motion.div
      ref={targetRef}
      className="relative  pt-9 flex lg:flex-row flex-col items-center  min-h-screen "
    >
      <motion.div
        style={laptopStyles }
        className="m-10 lg:w-full"
      >
        <Image
          src={'/assets/mockups/LaptopSEO.png'}
          alt="bg-decoration"
          width={406}
          height={412}
        />
      </motion.div>

      <motion.div
        style={childrenStyles}
        className="relative w-full h-full mix-blend-plus-lighter"
      >
        {children}
      </motion.div>
      {/* <AnimatedDecoration /> */}
    </motion.div>
  );
};

export default SecondPartBg;
