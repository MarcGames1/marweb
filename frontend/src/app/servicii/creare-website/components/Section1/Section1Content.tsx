

import React from 'react';

import { H } from '@/components'
import SiteMockup from './SiteMockup';
import MockupContent from './MockupContent';
const Section1Content = () => {


  return (
    <div  className="">
      <H level={2}>
        Design Personalizat pentru <span className="text-accent">Brand</span>-ul
        Tău
      </H>
      <div className="container my-10  justify-items-center items-center m-auto grid w-full h-full lg:grid-cols-2 grid-cols-none grid-flow-row">
        <div className=" m-5 ">
          <H level={'p'}>
            Creaza un prim impact puternic și diferențiază-ți afacerea cu un
            website
            <span className="text-accent">custom</span>, adaptat complet
            identității și obiectivelor brandului tău.
          </H>
        </div>
        <div   className="w-full h-full">
          <SiteMockup>
            <MockupContent />
          </SiteMockup>
        </div>
      </div>
    </div>
  );
}

export default Section1Content