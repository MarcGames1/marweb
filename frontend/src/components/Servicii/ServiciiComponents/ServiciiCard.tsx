'use client'
import { CardDataWithPicture } from '@/date/types'; 
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IServiciiCard extends CardDataWithPicture {
  href: string | null | undefined;
  
}

const ServiciiCard = ({ href, ...props }: IServiciiCardWKey) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <Content  {...props} />
        </Link>
      ) : (
        <>
          <Content  {...props} />
        </>
      )}
    </>
  );
};

interface IServiciiCardWKey extends IServiciiCard {
  key: number;
}

interface ContentPropos extends CardDataWithPicture {
 key: number;
}


const Content = ({ heading, description, image, key=1  }: ContentPropos) => {




const cardVariant = {
scaled: {scaleX:1,},
initial: {scaleX:0}
}
  return (
    <motion.div
      variants={cardVariant}
      transition={{
        type: 'spring',
        duration: 0.5,
        delay: 0.5,
        staggerChildren: 1,
      }}
      initial={'initial'}
      whileInView={'scaled'}
      className={` glass bg-black/70 flex ${(key+1 % 2) === 0 ? 'flex-row ': 'flex-row-reverse'}`}
    >
      <Image className={` text-center block m-auto min-w-[50vw] h-auto `} {...image} />{' '}
      <motion.div className="p-8  flex mix-blend-lighten  flex-col leading-7 tracking-wider ">
        <motion.h3 className="text-center text-base-100 y font-semibold text-2xl">
          {heading}
        </motion.h3>
        <motion.p className=" mix-blend-screen text-base-300 text-xl">
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default ServiciiCard;
