
const content = [
    {href:'/servicii/creare-website', text: 'Creare Website'},
  {href:'/servicii/seo', text: 'Servicii SEO'},
  {href:'/servicii/google-ads', text: 'Promovare Google Ads'},
//   {href:'/servicii/mentorat', text: 'Mentorat'},
];

export interface IMenuData {
    href: string;
    text: string;
}

export const MenuData: IMenuData[] = 
    content.map(m => {
        
        return {
          href: m.href,
          text: m.text,
        };
    })
   




