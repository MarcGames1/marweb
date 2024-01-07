

import { H, HWP, SectionContainer } from '@/components';
import React from 'react';

const Section3 = () => {
  return (
    <SectionContainer>
      <div className="container my-10  justify-items-center items-center m-auto grid w-full h-full lg:grid-cols-2 grid-cols-none grid-flow-row ">
        <HWP
          Header={
            <H level={2}>
              Performanță Excepțională pentru Experiențe Memorabile
            </H>
          }
          Paragraph={
            <H size="3xl" level={'p'}>
              Site-urile noastre sunt{' '}
              <span className="text-accent">
                rapide, responsive și îmbină perfect estetica cu
                funcționalitatea
              </span>
              . Utilizăm tehnologii avansate pentru a oferi vizitatorilor o
              navigare plăcută și o interacțiune de neuitat.
            </H>
          }
        />
        <div className="max-w-full min-h-full">x</div>
      </div>
    </SectionContainer>
  );
};

export default Section3;


