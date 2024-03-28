import { ReactNode } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { TbSeo } from 'react-icons/tb';
import { FaCode } from 'react-icons/fa6';
import { LuScrollText } from 'react-icons/lu';
import { RiContactsBookLine } from 'react-icons/ri';
import { SiGoogleads } from 'react-icons/si';
import { BsPostcardHeart } from "react-icons/bs";

export interface IMenuData {
  routePath: string;
  name: string | ReactNode;
  id: string;
  icon: ReactNode;
}

export const HeaderMenuData: IMenuData[] = [
  {
    routePath: '/despre-mine',
    name: 'Despre',
    id: '01',
    icon: (
      <>
        <FaRegUser />
      </>
    ),
  },
  {
    routePath: '/servicii/seo',
    name: 'Servicii SEO',
    id: '02',
    icon: (
      <>
        <TbSeo />
      </>
    ),
  },
  {
    id: '02',
    routePath: '/servicii/google-ads',
    name: 'Google Ads',
    icon: (
      <>
        <SiGoogleads />
      </>
    ),
  },
  {
    id: '3',
    routePath: '/servicii/creare-website',
    name: 'Creare Website',
    icon: <FaCode />,
  },
  {
    id: '4',
    routePath: '/portofoliu/',
    name: 'Portofoliu',
    icon: <LuScrollText />,
  },
  {
    id: '5',
    routePath: '/blog/',
    name: 'Blog',
    icon: <BsPostcardHeart />,
  },

  {
    id: '06',
    name: 'Contact',
    routePath: '/contact',
    icon: <RiContactsBookLine />,
  },
  // { href: '/servicii/mentorat', text: 'Mentorat' },
];


  // { href: '/servicii/mentorat', text: 'Mentorat' },
// {href:'/servicii/seo', text: 'Servicii SEO'},
// {href:'/servicii/google-ads', text: 'Promovare Google Ads'},
// {href:'/servicii/creare-website', text: 'Creare Website'},
// {href:'/servicii/mentorat', text: 'Mentorat'},
