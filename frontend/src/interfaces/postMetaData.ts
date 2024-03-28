import {UUID} from "crypto";

enum Servicii {
    CreareWebsite = 'Creare Website',
    GoogleAds = 'Google Ads',
    SEO = 'SEO',
}
enum CategoriiBlog {
    SEO='SEO',
    Programare="Programare",
    ADS='Google Ads'
}

interface Post {
    title: string;
    description: string;
    date: string;
    permalink: string;
    author: string;
    id: UUID;
    thumbnail: string;
     // Modificat pentru a permite ambele tipuri de categorii
}
export interface IPortfolioMetaData extends Post {
    excerpt?: string;
    type: string;
    tip_serviciu: Servicii[];
}

export interface IBlogPostMetaData extends Post{
    category:CategoriiBlog[]
}
