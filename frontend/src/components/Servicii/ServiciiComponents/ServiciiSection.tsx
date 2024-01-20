import React from 'react';
import ServiciiCard from './ServiciiCard';
import HomepageData from '@/date/homepage';

import { Alignment, H, Size } from '@/components';

const ServiciiSection = () => {
  return (
    <section className="py-20 px-10">
      <H level={2} alignment={Alignment.Center} size={Size.XL5} className={`py-20`}>{HomepageData.S2.heading}</H>
      <div className=" grid grid-flow-row  gap-5 ">
        {HomepageData.S2.content.map((s, i) => {
          return <ServiciiCard {...{...s, i}}  key={i} />;
        })}
      </div>
    </section>
  );
};

export default ServiciiSection;
