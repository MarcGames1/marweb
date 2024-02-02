'use client'
import { H } from '@/components'
import styles from './Servicii.module.css'
import React from 'react'
import HomepageData from '@/date/homepage'
import Link from 'next/link'
import Image from 'next/image'
import { TextAlignment, TextSize } from '@/components/Typography/H'
import { useTheme } from 'next-themes'

const ServiciiSection = () => {
   const { theme, setTheme } = useTheme();
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
                key={content.id}
                className={` ${styles.card} about-box dark:bg-transparent`}
                style={{
                  background: `${
                    theme === 'dark' ? 'transparent' : content?.bg
                  }`,
                }}
              >
                <Image className=" w-10 h-10" {...content.image} />
                <div className="space-y-2 ">
                  <H
                    className={
                      styles.card_title +
                      ' dark:text-white text-xl font-semibold'
                    }
                    level={'span'}
                  >
                    {content.heading}
                  </H>
                  <H
                    size={TextSize.lg}
                    alignment={TextAlignment.justify}
                    className={
                      'leading-8 text-gray-lite dark:text-[#A6A6A6] break-words hyphens-auto  break-before-column'
                    }
                    level={'span'}
                  >
                    {content.description}
                  </H>
                </div>
                <button className="">Citeste Mai Mult</button>
              </Link>
            );
          })}

         
        </div>
      </div>
    </section>
  );
}

export default ServiciiSection