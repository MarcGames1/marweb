import { H } from '@/components'
import styles from './Servicii.module.css'
import React from 'react'
import HomepageData from '@/date/homepage'
import { TextAlignment, TextSize } from '@/components/Typography/H'
import SingleService from './SingleService'

const ServiciiSection = () => {
 
  return (
    <section className={`${styles.section} overflow-x-clip w-full`}>
      <div className='flex flex-col items-center justify-items-center'>
        <div className={' font-bold'}>
          <H level={2} size={TextSize.xl3} alignment={TextAlignment.center} >
            {HomepageData.S2.heading}
          </H>
        </div>
        <div className={`grid lg:grid-cols-2   p-10 items-start gap-20`}>
          {HomepageData.S2.content.map((content) => {
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