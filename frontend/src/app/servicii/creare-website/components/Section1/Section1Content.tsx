'use client'

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { H } from '@/components'
import SiteMockup from './SiteMockup';
import MockupContent from './MockupContent';
const Section1Content = () => {

      const constraintsRef = useRef(null);


  return (
    <motion.div className="">
      <H level={2}>
        Design Personalizat pentru <span className="text-accent">Brand</span>-ul
        Tău
      </H>
      <motion.div className="container my-10  m-auto bg-red-500  grid w-full h-full lg:grid-cols-2 grid-cols-none grid-flow-row">
        <motion.div className="">
          <H level={'p'}>
            Creaza un prim impact puternic și diferențiază-ți afacerea cu un
            website
            <span className="text-accent">custom</span>, adaptat complet
            identității și obiectivelor brandului tău.
          </H>
        </motion.div>
        <motion.div ref={constraintsRef} className="w-full h-full bg-green-300">
          <SiteMockup>
            <MockupContent />
          </SiteMockup>

            
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Section1Content