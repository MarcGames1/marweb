import { CardDataWithPicture } from '@/date/types'; 
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
        imageStyle: 'w-full lg:w-auto',
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

  return (
    <div className={` glass bg-black/70 ${containerStyle}`}>
      <Image className={`${imageStyle} `} {...image} />{' '}
      <div className="p-8 flex mix-blend-lighten  flex-col leading-7 tracking-wider">
        <h3 className="text-center text-base-100 y font-semibold">{heading}</h3>
        <p className=" mix-blend-screen text-base-300 ">{description}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default ServiciiCard;
