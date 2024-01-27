import { ReactNode } from "react";
import HomepageData from "./homepage";

const {content} = HomepageData.S2

export interface IMenuData {
    href: string;
    text: string | ReactNode;
}

export const MenuData: IMenuData[] = [
  { href: '/despre-mine', text: 'Despre Mine' },
  { href: '/servicii/seo', text: 'Servicii SEO' },
  { href: '/servicii/google-ads', text: 'Promovare Google Ads' },
  { href: '/servicii/creare-website', text: 'Creare Website' },
  { href: '/servicii/mentorat', text: 'Mentorat' },
];
    // {href:'/servicii/seo', text: 'Servicii SEO'},
    // {href:'/servicii/google-ads', text: 'Promovare Google Ads'},
    // {href:'/servicii/creare-website', text: 'Creare Website'},
    // {href:'/servicii/mentorat', text: 'Mentorat'},
    




