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

  const y = useTransform(scrollYProgress, [0, 0.5, 0.9], [0, 0, 500]);
  const rotateZ = useTransform(
    scrollYProgress,
    [0, 0.25, 0.35, 0.75, 1],
    [0, 30, 0, 0, -30]
  );
  const scaleLaptop = useTransform(
    scrollYProgress,
    [0, 0.25, 0.35, 0.75, 1],
    [10, 1, 1.2, 1, 0.5]
  );
 const translateXLaptop = useTransform(
   scrollYProgress,
   [0, 0.25, 0.35, 0.75, 1],
   [0, -500 , 0 ,0 ,0 ]
 );
  const textScale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 5]);
  const textY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.35, 0.75, 1],
    [0, -300, -100, 0, 0]
  );
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])
  return (
    <motion.div
      ref={targetRef}
      className="relative  pt-9 flex lg:flex-row flex-col items-center  min-h-screen    overflow-x-clip "
    >
      <motion.div
        style={{ rotateZ, x: translateXLaptop, scale: scaleLaptop }}
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
        style={{ scale: textScale, y:textY ,  opacity: textOpacity }}
        className="relative w-full h-full mix-blend-plus-lighter"
      >
        {children}
      </motion.div>
      {/* <AnimatedDecoration /> */}
    </motion.div>
  );
};

export default SecondPartBg;
