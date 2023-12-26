'use client'
import Image from 'next/image';
import { BlurGlow } from '@/components/Decorations';
import { motion } from 'framer-motion';
import React from 'react'

const AnimatedDecoration = () => {

const bottomElementPosition = 'right-10 bottom-0';

const blurGlowVariant = {

}

const containerVariants = {}

  return (
    <motion.div variants={containerVariants} className="">
      <Image
        className={`absolute ${bottomElementPosition}`}
        src={'/assets/decorations/pastila.svg'}
        alt="bg-decoration"
        width={300}
        height={300}
      />
      <BlurGlow
        variants={blurGlowVariant}
        duration={5}
        position={bottomElementPosition}
      />
    </motion.div>
  );
}

export default AnimatedDecoration