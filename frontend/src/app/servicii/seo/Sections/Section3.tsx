import { Buttons, H } from '@/components'
import Section2Col from '@/components/Layout/Section2Col'
import Reason from '@/components/Reason'
import { SectionWithCards, SectionWithCardsAndPic } from '@/date/types'
import React from 'react'
import Image from 'next/image'
import { TextSize } from '@/components/Typography/H'
import ContacteazaMa from '@/components/CTA Widget/ContacteazaMa'
const Section3 = ({heading, content}:SectionWithCardsAndPic) => {
  return (
    <Section2Col leftside={<LeftSide heading={heading} content={content} />} rightside={<ContacteazaMa />} />
  )
}



const LeftSide = ({ content, heading }: SectionWithCards) => {
  return (
    <div className='place-self-center'>
      <H level={2} className='pb-5'>{heading}</H>
      {
        <div className="flex flex-col gap-2 lg:gap-5">
          {content.map((c, i) => {
            return <Reason key={i + String(c.heading)} {...c} />;
          })}
        </div>
      }
    </div>
  );
};


export default Section3