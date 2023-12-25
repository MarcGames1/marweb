import { ReactNode } from "react";

export interface GeneralSectionData {
  heading: string | ReactNode;
}

export interface HeroSectionData extends GeneralSectionData {
  content: string | ReactNode;
  decoration: any;
}

export interface SectionWithCards extends GeneralSectionData {
  content: CardData[];
}
export interface SectionWithCardsAndPic extends GeneralSectionData {
  content: CardDataWithPicture[];
}
export interface SectionWithCardsLinkAndPic extends SectionWithCardsAndPic {
  content: CardDataWithPictureAndLink[];
}


export interface CardDataWithPictureAndLink extends CardDataWithPicture {
  href: string;
}
export interface CardData {
  heading: string | ReactNode;
  description: string | ReactNode;
  
}

export interface CardDataWithPicture extends CardData {
  image: { width: number; height: number; alt: string; src: string };
}
