import { SectionWithCards } from '@/date/types';
import React from 'react'
import Image from 'next/image';
import H, { TextColor, TextSize } from '@/components/Typography/H';
import Reason from '@/components/Reason';
import Section2Col from '@/components/Layout/Section2Col';


const Section2 = ({ heading, content }: SectionWithCards) => {
  return (
    <Section2Col
      rightside={<RightSide heading={heading} content={content} />}
      leftside={<Leftside />}
    />
  );
};


const Leftside = () =>{
  return (
    <>
      {' '}
      <Image
        className=" items-center p-5 flex-0 justify-self-end"
        alt="Process"
        width={400}
        height={400}
        src={'/assets/SEO/section2.png'}
      />
   
    </>
  );
}


const RightSide = ({ content, heading }: SectionWithCards) => {
  return (
    <div
      className={` lg:p-10 m-5 w-fit p-5  items-center justify-items-center  flex flex-col  rounded-2xl `}
    >
      <div className="flex flex-col justify-self-center gap-10 self-center mb-2 lg:mb-5">
        {' '}
        <H size={TextSize.xl3} level={1} color={TextColor.primary}>
          {heading}
        </H>
      </div>
      <div className="flex flex-col gap-2 lg:gap-5">
        {content.map((c, i) => {
          return <Reason key={i + String(c.heading)} {...c} />;
        })}
      </div>
    </div>
  );
};

export default Section2