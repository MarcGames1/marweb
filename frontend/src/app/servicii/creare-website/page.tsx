
import React from 'react'
import Section1 from './sections/Section1'
import { S1 } from '@/date/creareWebsite'


const CreareWebsitePage = () => {
  return (
    <>
   <Section1 {...S1} />
    </>
  )
}

export default CreareWebsitePage



// 'use client';

// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { H } from '@/components';
// import SiteMockup from './SiteMockup';
// import MockupContent from './MockupContent';
// import Image from 'next/image';

// const Section1Content = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start end', 'end start'],
//   });

//   const leftSideStyles = {
//     display: useTransform(
//       scrollYProgress,
//       [0, 0.8, 1],
//       ['grid', 'grid', 'none']
//     ),
//     scale: useTransform(scrollYProgress, [0, 0.1, 0.6, 1], [1, 1.1, 1, 0]),
//   };

//   const rightSideStyles = {
//     rotate: useTransform(scrollYProgress, [0, 0.6, 1], [0, 0, 360]),
//     scale: useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]),
//     display: useTransform(
//       scrollYProgress,
//       [0, 0.8, 1],
//       ['block', 'block', 'none']
//     ),
//   };

//   return (
//     <motion.div
//       ref={containerRef}
//       className="flex flex-col items-center justify-center"
//     >
//       <H className="mb-10" level={2}>
//         Design Personalizat pentru <span className="text-accent">Brand</span>-ul
//         Tău
//       </H>
//       <motion.div
//         style={leftSideStyles}
//         className="   justify-items-center items-center grid  lg:grid-cols-2 grid-cols-none grid-flow-row"
//       >
//         <motion.div className="p-10 ">
//           <H size="3xl" level={'p'}>
//             Creaza un prim impact puternic și diferențiază-ți afacerea cu un
//             website <span className="text-accent">custom</span>, adaptat complet
//             identității și obiectivelor brandului tău.
//           </H>
//         </motion.div>
//         <motion.div style={rightSideStyles} className="w-full h-full">
//           <Image
//             className="lg:hidden"
//             width={810}
//             height={810}
//             src={'/assets/mockups/website.png'}
//             alt={'website mockup'}
//           />{' '}
//           <SiteMockup>
//             <MockupContent />
//           </SiteMockup>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Section1Content;
