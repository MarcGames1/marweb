import { CardDataWithPictureAndLink } from '@/date/types'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ServiciiCard = ({heading, description, image, href}:CardDataWithPictureAndLink) => {
  return (
    <>
      <Link href={href} className="  glass">
        <figure className="w-full  object-cover">
          <Image className="w-full bg-blend-overlay " {...image} />
        </figure>
        <div className=" p-8 flex flex-col text-primary-content leading-7 tracking-wider ">
          <h3 className="text-center font-semibold ">{heading}</h3>
          <p>{description}</p>
          <div className="card-actions justify-end">
            
          </div>
        </div>
      </Link>

      {/* <h3>{heading}</h3>
      <p>{description}</p> */}
    </>
  );
}

export default ServiciiCard