import { H } from '@/components'
import { TextSize } from '@/components/Typography/H'
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
        <H level={1}>Work around very talented people.</H>
        <H level={'p'} size={TextSize.lg}>
          With lots of unique blocks, you can easily build a page easily without
          any coding.{' '}
        </H>
        <div className="">
          <Image
            alt="placeholder img"
            width={520}
            height={600}
            src={'/assets/mentorat/placeholder520x600.png'}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
          />
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