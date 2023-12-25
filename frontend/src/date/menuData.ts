import { ReactNode } from "react";
import HomepageData from "./homepage";

const {content} = HomepageData.S2

export interface IMenuData {
    href: string;
    text: string | ReactNode;
}

export const MenuData: IMenuData[] = 
    content.map(m => {
        return {
          href: m.href,
          text: m.heading,
        };
    })
    // {href:'/servicii/seo', text: 'Servicii SEO'},
    // {href:'/servicii/google-ads', text: 'Promovare Google Ads'},
    // {href:'/servicii/creare-website', text: 'Creare Website'},
    // {href:'/servicii/mentorat', text: 'Mentorat'},
    




