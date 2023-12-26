import { CardDataWithPicture } from '@/date/types'; // Aici cred că trebuie să fie "data" în loc de "date"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IServiciiCard extends CardDataWithPicture {
  href: string | null | undefined;
}

const ServiciiCard = ({ href, ...props }: IServiciiCard) => {
  return (
    <>
      {href ? (
        <Link className="  glass" href={href}>
          <Content {...props} />
        </Link>
      ) : (
        <>
          <Content {...props} />
        </>
      )}
    </>
  );
};

const Content = ({ heading, description, image,  }: CardDataWithPicture) => {
  return (
    <div className='glass'>
        <Image className='w-full' {...image} />{' '}
      
        
      
      <div className="p-8 flex flex-col text-primary-content leading-7 tracking-wider">
        <h3 className="text-center font-semibold">{heading}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default ServiciiCard;
