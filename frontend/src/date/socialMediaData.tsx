'use client'
import { ReactElement } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube  } from 'react-icons/fa';
export interface ISocialMediaLink {
  link: string;
  icon: ReactElement;
}

export interface ISocialMediaData {
  [key: string]: ISocialMediaLink;
}
export const SocialMediaData: ISocialMediaData = {
  facebook: {
    link: 'https://www.facebook.com/profile.php?id=100070084327195',
    icon: <FaFacebook size={'3rem'} />,
  },
  instagram: {
    link: 'https://www.instagram.com/george.marcu2/',
    icon: <FaInstagram size={'3rem'} />,
  },
  linkedin: {
    link: 'https://www.linkedin.com/in/marcualexgeorge/',
    icon: <FaLinkedin size={'3rem'} />,
  },
  youtube: {
    link: 'https://www.youtube.com/@alexandru_SEO',
    icon: <FaYoutube size={'3rem'} />,
  },
};
