import { H } from '@/components';
import { TextSize, TextAlignment } from '@/components/Typography/H';
import {CardDataWithPicture, CardDataWithPictureAndLink} from '@/date/types';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from './Servicii.module.css';
import dynamic from 'next/dynamic';

const SingleService = ({ content }: { content: CardDataWithPictureAndLink | CardDataWithPicture }) => {
    const Component = 'href' in content ? Link : 'div';
  return (
      <Component
          href={'href' in content ? content.href : ''}
          key={content.id}
          className={`flex flex-col items-center gap-5 self-stretch rounded-xl bg-[${content.bg}]  about-box dark:bg-transparent`}
      >
        <Image className="w-10 h-10" {...content.image} />
        <div className="space-y-2">
          <H
              className={styles.card_title + ' dark:text-white text-xl font-semibold'}
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
        {'href' in content ? content.href && ( // Verificăm dacă există href în content
            <button className="rounded-md self-center cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-l from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6] linked bg-gradient-to-r">
              Citeste Mai Mult
            </button>
        ): null}
      </Component>
  );
};

export default dynamic(() => Promise.resolve(SingleService), {
  ssr: true,
});
