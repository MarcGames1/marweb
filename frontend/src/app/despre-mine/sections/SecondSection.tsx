'use client';

import { H } from '@/components';
import { TextColor, TextSize } from '@/components/Typography/H';
import React from 'react';
import { Link } from 'react-daisyui';
import Image from 'next/image';
const SecondSection = () => {
  return (
    <section>
      <div className="flex flex-shrink-0 justify-between lg:m-32 flex-col-reverse items-center justify-items-center lg:flex-row">
        <Image
          alt="iphone-mockup"
          width={300}
          height={300}
          src={'/assets/DespreMine/Poza-Alexandru-Marcu.png'}
        />
        <div
          className={`outline_hover lg:p-10 p-5 lg:w-1/2 rounded-2xl  w-full items-center justify-items-center  flex`}
        >
          <div className="flex flex-col justify-self-center gap-10 self-center">
            {' '}
            <H level={1} color={TextColor.primary}>
              Despre Mine
            </H>
            <H level={'span'} size={TextSize.lg}>
              Sunt Alex, programator pasionat, expert în SEO și
              Google Ads, cu o experiență solidă de peste 3 ani în domeniu. Cu o
              abordare atât în dezvoltarea de site-uri personalizate folosind
              tehnologii moderne precum Next.js, MongoDB și Node.js, mă implic
              în fiecare proiect cu entuziasm și dedicare.
            </H>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
