'use client'

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { H } from '@/components'
import SiteMockup from './SiteMockup';
import MockupContent from './MockupContent';
const Section1Content = () => {

      const containerRef = useRef(null);
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ['start end', 'end start'],
});

const leftSideStyles = {}

const rightSideStyles = {}

  return (
    <motion.div ref={containerRef} className="">
      <H level={2}>
        Design Personalizat pentru <span className="text-accent">Brand</span>-ul
        Tău
      </H>
      <motion.div style={leftSideStyles} className="container my-10  justify-items-center items-center m-auto grid w-full h-full lg:grid-cols-2 grid-cols-none grid-flow-row">
        <motion.div className=" m-5 ">
          <H level={'p'}>
            Creaza un prim impact puternic și diferențiază-ți afacerea cu un
            website
            <span className="text-accent">custom</span>, adaptat complet
            identității și obiectivelor brandului tău.
          </H>
        </motion.div>
        <motion.div style={rightSideStyles}  className="w-full h-full bg-green-300">
          <SiteMockup>
            <MockupContent />
          </SiteMockup>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Section1Content