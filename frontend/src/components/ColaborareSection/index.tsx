import React from 'react'
import ServiciiCard from '../Servicii/ServiciiComponents/ServiciiCard';
import HomepageData from '@/date/homepage';
import { typography } from '@/date/styles';
const ColaborareSection = () => {
  return (
    <section className="w-full h-full">
      <h2 className={`${typography.h2} py-20`}>{HomepageData.S3.heading}</h2>
      <div className="flex flex-row flex-wrap gap-5 justify-around ">
        {HomepageData.S3.content.map((s, i) => {
          return (
            <div key={i} className='w-7/12 lg:w-4/12'>
              <ServiciiCard href={undefined} {...s} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ColaborareSection