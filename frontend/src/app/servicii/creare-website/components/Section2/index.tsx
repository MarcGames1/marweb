import { H, HWP, SectionContainer } from '@/components';
import React from 'react';

const Section2 = () => {
  return (
    <SectionContainer>
      <div className="container my-10  justify-items-center items-center m-auto grid w-full h-full lg:grid-cols-2 grid-cols-none grid-flow-row ">
        <div className="max-w-full min-h-full">x</div>
        <HWP
          Header={<H level={2}>Design Personalizat pentru a te Diferenția</H>}
          Paragraph={
            <H size="3xl" level={'p'}>
              Nu facem doar website-uri, ci creații digitale care vorbesc despre
              esența afacerii tale. Prin abordarea noastră{' '}
              <span className="text-accent">custom</span>, fiecare element este
              construit cu atenție, pentru a se potrivi identității vizuale și
              scopurilor tale.
            </H>
          }
        />
      </div>
    </SectionContainer>
  );
};

export default Section2;



 