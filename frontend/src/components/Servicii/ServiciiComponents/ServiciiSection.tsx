import React from 'react';
import ServiciiCard from './ServiciiCard';
import HomepageData from '@/date/homepage';
import { typography } from '@/date/styles';

const ServiciiSection = () => {
  return (
    <section className="py-20 px-10">
      <h2 className={`${typography.h2} py-20`}>{HomepageData.S2.heading}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        {HomepageData.S2.content.map((s, i) => {
          return <ServiciiCard {...s} key={i} />;
        })}
      </div>
    </section>
  );
};

export default ServiciiSection;
