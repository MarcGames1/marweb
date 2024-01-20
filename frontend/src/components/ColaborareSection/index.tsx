import React from 'react'
import ServiciiCard from '../Servicii/ServiciiComponents/ServiciiCard';
import HomepageData from '@/date/homepage';

import { Alignment, Color, H, Size } from '..';
const ColaborareSection = () => {
  return (
    <section className="w-full h-full">
      <H level={2} alignment={Alignment.Center} size={Size.XL5} color={Color.Primary} className={`block w-full py-20`}>{HomepageData.S3.heading}</H>
      <div
        className={`flex flex-row flex-wrap items-center gap-5 justify-around `}
      >
        {HomepageData.S3.content.map((s, i) => {
          return (
            <div
              key={i}
              className={`w-7/12 lg:w-4/12`}
            >
              <ServiciiCard variant={'default'} href={undefined} {...s} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ColaborareSection