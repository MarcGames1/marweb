import React, { ReactNode } from 'react'
import Image from 'next/image'
import { BlurGlow } from '@/components/Decorations';
import AnimatedDecoration from './AnimatedDecoration';
interface SecondPartBg {
    children: ReactNode
}

const SecondPartBg = ({children}:SecondPartBg) => {
    const variants = {  
    initial: { scale: 0 },
    animate: { 
      scale: [.8, 1, .9, 1],
      y:[0, 10 , 0, -15],
     } 
}


  return (
    <div className="relative pt-9  min-h-screen  h-screen overflow-clip ">
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
}

export default SecondPartBg