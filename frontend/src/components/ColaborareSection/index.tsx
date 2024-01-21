import React from 'react'
import ServiciiCard from '../Servicii/ServiciiComponents/ServiciiCard';
import HomepageData from '@/date/homepage';

import { Alignment, Color, H, Size } from '..';
const ColaborareSection = () => {
  return (
    <section className="w-full h-full">
      <H level={2} alignment={Alignment.Center} size={Size.XL5} color={Color.Primary} className={`inline-block mx-auto w-full py-20 text-center`}>{HomepageData.S3.heading}</H>
      <div
        className={` `}
      >
        {HomepageData.S3.content.map((s, i) => {
          return (
            <div key={i} className={` mx-auto self-center justify-center flex  `}>
              <ServiciiCard reversed={i % 2 === 0} href={undefined} {...s} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ColaborareSection