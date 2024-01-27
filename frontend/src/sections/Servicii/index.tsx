import { H } from '@/components'
import styles from './Servicii.module.css'
import React from 'react'
import HomepageData from '@/date/homepage'
import Link from 'next/link'
import Image from 'next/image'
import { TextAlignment, TextSize } from '@/components/Typography/H'

const ServiciiSection = () => {
  return (
    <section className={`${styles.section} overflow-x-clip w-full`}>
      <div className='flex flex-col items-center justify-items-center'>
        <div className={styles.title}>
          <H level={2} size={TextSize.xl3} alignment={TextAlignment.center} className={styles.title}>
            {HomepageData.S2.heading}
          </H>
        </div>
        <div className={`grid lg:grid-cols-2   p-10 items-start gap-20`}>
          {HomepageData.S2.content.map((content) => {
            return (
              <Link
                href={content.href}
                key={content.href}
                className={` ${styles.card}`}
              >
                <Image {...content.image} />
                <H className={styles.card_title} level={'span'}>
                  {content.heading}
                </H>
                <H className={styles.card_description} level={'span'}>
                  {content.description}
                </H>
              </Link>
            );
          })}

         
        </div>
      </div>
    </section>
  );
}

export default ServiciiSection