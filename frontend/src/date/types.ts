import { UUID } from 'crypto';
import { ReactNode } from 'react';

/**
 * Interfața pentru datele generale ale unei secțiuni.
 * @typedef {Object} GeneralSectionData
 * @property {string | ReactNode} heading - Titlul secțiunii.
 */
export interface GeneralSectionData {
  heading: string | ReactNode;
}

/**
 * Interfața pentru datele unei secțiuni Hero.
 * @typedef {Object} HeroSectionData
 * @property {string | ReactNode} heading - Similar cu GeneralSectionData.
 * @property {string | ReactNode} content - Conținutul secțiunii Hero.
 * @property {*} [decoration] - Decorare opțională a secțiunii.
 */
export interface HeroSectionData extends GeneralSectionData {
  content: string | ReactNode;
  decoration?: any;
}

/**
 * Interfața pentru secțiunea cu carduri.
 * @typedef {Object} SectionWithCards
 * @property {string | ReactNode} heading - Similar cu GeneralSectionData.
 * @property {CardData[]} content - Un array de CardData reprezentând cardurile din secțiune.
 */
export interface SectionWithCards extends GeneralSectionData {
  content: CardData[];
}

/**
 * Interfața pentru secțiunea cu carduri și imagini.
 * @typedef {Object} SectionWithCardsAndPic
 * @property {string | ReactNode} heading - Similar cu GeneralSectionData.
 * @property {CardDataWithPicture[]} content - Un array de CardDataWithPicture cu cardurile și imagini.
 */
export interface SectionWithCardsAndPic extends GeneralSectionData {
  content: CardDataWithPicture[];
}

/**
 * Interfața pentru secțiunea cu carduri, imagini și link-uri.
 * @typedef {Object} SectionWithCardsLinkAndPic
 * @property {string | ReactNode} heading - Similar cu GeneralSectionData.
 * @property {CardDataWithPictureAndLink[]} content - Un array de CardDataWithPictureAndLink cu cardurile, imagini și link-uri.
 */
export interface SectionWithCardsLinkAndPic extends SectionWithCardsAndPic {
  content: CardDataWithPictureAndLink[];
}

/**
 * Interfața pentru datele cardului.
 * @typedef {Object} CardData
 * @property {string | ReactNode} heading - Titlul cardului.
 * @property {string | ReactNode} description - Descrierea cardului.
 */
export interface CardData {
  id: string | number
  heading: string | ReactNode;
  description: string | ReactNode;
  bg?: string
}

/**
 * Interfața pentru datele cardului cu imagine.
 * @typedef {Object} CardDataWithPicture
 * @property {string | ReactNode} heading - Similar cu CardData.
 * @property {string | ReactNode} description - Similar cu CardData.
 * @property {{ width: number; height: number; alt: string; src: string }} image - Informații despre imaginea cardului.
 */
export interface CardDataWithPicture extends CardData {
  image: { width: number; height: number; alt: string; src: string };
}

/**
 * Interfața pentru datele cardului cu imagine și link.
 * @typedef {Object} CardDataWithPictureAndLink
 * @property {string | ReactNode} heading - Similar cu CardDataWithPicture.
 * @property {string | ReactNode} description - Similar cu CardDataWithPicture.
 * @property {{ width: number; height: number; alt: string; src: string }} image - Similar cu CardDataWithPicture.
 * @property {string} href - Adresa URL a link-ului asociat cardului.
 */
export interface CardDataWithPictureAndLink extends CardDataWithPicture {
  href: string;
}

interface VideoContent {
  src: string;
  id: string
  width:number,
  height:number
}

export interface PortraitVideoContent extends VideoContent {
  width: 1080,
  height:1920
}

export interface PortraitVideoContentGallery extends GeneralSectionData {
 content: PortraitVideoContent[] 
}
