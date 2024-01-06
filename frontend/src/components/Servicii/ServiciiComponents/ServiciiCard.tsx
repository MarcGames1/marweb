'use client'
import { CardDataWithPicture } from '@/date/types'; 
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IServiciiCard extends CardDataWithPicture {
  href: string | null | undefined;
  variant: ContentVariant
}

const ServiciiCard = ({ href, ...props }: IServiciiCard) => {
  return (
    <>
      {href ? (
        <Link className="  glass" href={href}>
          <Content  {...props} />
        </Link>
      ) : (
        <>
          <Content {...props} />
        </>
      )}
    </>
  );
};

type ContentVariant = |"default" | 'leftSidePicture'
interface ContentPropos extends CardDataWithPicture{
  variant ?: ContentVariant
}


const Content = ({ heading, description, image, variant='default'  }: ContentPropos) => {

const getVariantStyles = (variant?:string) =>{
  switch (String(variant)) {
    case 'leftSidePicture':
      return {
        containerStyle: 'flex flex-col items-center lg:flex-row',
        imageStyle: 'w-full h-full lg:w-auto',
      };
    case 'default':
    default:
      return {
        containerStyle: '',
        imageStyle: 'w-full',
      };
  }
}

const {containerStyle, imageStyle} = getVariantStyles(variant)

const cardVariant = {
scaled: {scaleX:1,},
initial: {scaleX:0}
}
  return (
    <motion.div
      variants={cardVariant}
      transition={{ type: 'spring', duration: .5 ,delay:0.5 ,staggerChildren: 1 }}
      initial={'initial'}
      whileInView={'scaled'}
      className={` glass bg-black/70 ${containerStyle}`}
    >
      <Image className={`${imageStyle} `} {...image} />{' '}
      <motion.div className="p-8 flex mix-blend-lighten  flex-col leading-7 tracking-wider">
        <motion.h3  className="text-center text-base-100 y font-semibold">{heading}</motion.h3>
        <motion.p className=" mix-blend-screen text-base-300 ">{description}</motion.p>
        
      </motion.div>
    </motion.div>
  );
};

export default ServiciiCard;
