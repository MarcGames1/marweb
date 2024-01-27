'use client'
import { H, SocialMediaIcons } from '@/components';
import { TextAlignment, TextColor, TextSize } from '@/components/Typography/H';
import { SocialMediaData, ISocialMediaData } from '@/date/socialMediaData';
import Image from 'next/image'
import React from 'react'
import { Link } from 'react-daisyui';
import styles from './FirstSection.module.css'

const FirstSection = () => {
  return (
    <section>
      <div className="flex flex-shrink-0 justify-between lg:m-32 flex-col-reverse items-center justify-items-center lg:flex-row">
        <div
          className={`outline_hover lg:p-10 p-5 lg:w-1/2 bg-green-300 rounded-2xl  w-full items-center justify-items-center  flex`}
        >
          <div className="flex flex-col justify-self-center gap-10 self-center">
            {' '}
            <H level={1} color={TextColor.primary}>
              Alexandru Marcu
            </H>
            <H level={'span'} size={TextSize.lg}>
              FULL-STACK DEVELOPER | SEO Expert & Google Ads | FREELANCER
            </H>
           <SocialMediaIcons.V1/>
          </div>
        </div>
        <Image
          alt="iphone-mockup"
          width={231}
          height={200}
          src={'/assets/DespreMine/iPhone 13.png'}
        />
      </div>
    </section>
  );
}

export default FirstSection