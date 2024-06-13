import { H } from '@/components'
import styles from './Servicii.module.css'
import React from 'react'
import HomepageData from '@/date/homepage'
import { TextAlignment, TextSize } from '@/components/Typography/H'
import SingleService from './SingleService'
import {SectionWithCardsAndPic, SectionWithCardsLinkAndPic} from "@/date/types";

const ServiciiSection = ({data}:{data: SectionWithCardsLinkAndPic | SectionWithCardsAndPic}) => {
 
  return (
    <section className={`${styles.section} overflow-x-clip w-full`}>
      <div className='flex flex-col items-center justify-items-center'>
        <div className={' font-bold'}>
          <H level={2} size={TextSize.xl3} alignment={TextAlignment.center} >
            {data.heading}
          </H>
        </div>
        <div className={`grid lg:grid-cols-2  py-5  lg:px-10 items-start gap-20`}>
          {data.content.map((content) => {
            return (
              <SingleService  key={content.id} content={content} />
            );
          })}

         
        </div>
      </div>
    </section>
  );
}

export default ServiciiSection