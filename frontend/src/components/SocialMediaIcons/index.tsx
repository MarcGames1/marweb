'use client'

import React from 'react'
import Link from 'next/link';
import H, { TextAlignment, TextColor, TextSize } from '../Typography/H';
import { ReactElement } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

import { generateRandomId } from '@/utils/Helpers';
import globals from '@/utils/globals';

const {SocialMedia} = globals

export interface ISocialMediaLink {
  link: string;
  icon: ReactElement;
}

export interface ISocialMediaData {
  [key: string]: ISocialMediaLink;
}
export const SocialMediaData: ISocialMediaData = {
  Facebook: {
    link: SocialMedia.facebook,
    icon: <FaFacebook size={'1.5rem'} />,
  },
  Instagram: {
    link: SocialMedia.instagram,
    icon: <FaInstagram size={'1.5rem'} />,
  },
  Linkedin: {
    link: SocialMedia.linkedin,
    icon: <FaLinkedin size={'1.5rem'} />,
  },
  Youtube: {
    link: SocialMedia.youtube,
    icon: <FaYoutube size={'1.5rem'} />,
  },
};



const V2 = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-items-center items-center self-center  w-fit  place-items-center justify-center">
      {Object.keys(SocialMediaData).map((key: keyof ISocialMediaData) => (
        <Link
          key={String(generateRandomId() + SocialMediaData[key])}
          className="flex place-items-center flex-col gap-1  hover:text-[#FA5252] duration-300 transition p-2"
          href={String(SocialMediaData[key].link)}
        >
          {SocialMediaData[key].icon}
          <H
            size={TextSize.base}
            alignment={TextAlignment.center}
            level={'span'}
          >
            {key}
          </H>
        </Link>
      ))}
    </div>
  );
};

const SocialMediaIcons = {
    V2
}

export default SocialMediaIcons 