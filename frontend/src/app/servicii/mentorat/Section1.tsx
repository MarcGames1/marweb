import { H } from '@/components'
import { TextAlignment, TextSize } from '@/components/Typography/H'
import Image from 'next/image'
import React from 'react'

const Section1 = () => {
  return (
    <div className="grid lg:grid-cols-12 gap-5 lg:m-10 m-2">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default Section1


const LeftSide = () => {
    return (
      <div className="flex flex-col items-center flex-shrink-0 lg:col-start-2 lg:col-end-6 lg:col-span-4 gap-10">
        <H level={1}>Mentorat SEO</H>
        <H level={'p'} size={TextSize.lg}>
          Inveti sa faci{' '}
          <span className="text-oriange font-bold">SEO pentru site-ul tau</span>
        </H>
        <div className=" relative group">
          <Image
            className=" group-hover:mix-blend-overlay transition-all ease-out duration-300"
            alt="placeholder img"
            width={520}
            height={600}
            src={'/assets/mentorat/placeholder520x600.png'}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
          />
          <H className="absolute bottom-0 w-full opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-300" alignment={TextAlignment.center} size={TextSize.xl} level={'p'}>
            Corporate
          </H>
        </div>
      </div>
    );
}


const RightSide = () => {
  return (
    <>
      <div className="lg:col-start-7 lg:col-end-11  lg:col-span-4 flex flex-col items-center flex-shrink-0">
        <Image
          alt="placeholder img"
          width={520}
          height={600}
          src={'/assets/mentorat/placeholder520x600.png'}
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </>
  );
};