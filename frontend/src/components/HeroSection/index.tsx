import { Buttons, H } from '@/components';
import { TextSize } from '@/components/Typography/H';
import { HeroSectionData } from '@/date/types';
import React from 'react';
import Image from 'next/image';
export interface IHeroSectionProps extends HeroSectionData {
  src: string;
}

const HeroSection = ({ heading, content, src }: IHeroSectionProps) => {
  return (
    <section className="flex py-12 px-5  m-auto flex-col-reverse items-center justify-evenly lg:flex-row">
      
        <div
          className={` lg:p-10 p-5 w-fit   items-center justify-items-center  flex`}
        >
          <div className="flex flex-col justify-self-center gap-10 self-center">
            {' '}
            <H size={TextSize.xl3} level={1}>
              {heading}
            </H>
            <H level={'div'} size={TextSize.lg}>
              {content}
            </H>
            <div className="flex justify-evenly">
              <Buttons.Calendly />
              <Buttons.Whatsapp />
            </div>
          </div>
        </div>
        <Image
          className=" items-center p-5 flex-0 justify-self-end"
          alt={`Imagine Reprezentativa ${heading}`}
          width={400}
          height={400}
          src={src}
          loading='eager'
        />
      
    </section>
  );
};

export default HeroSection;
