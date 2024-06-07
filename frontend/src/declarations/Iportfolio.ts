
import { IUser } from '@/declarations/user';
import { PicItem } from '@/declarations/mediaItems';

export interface Iportfolio {
  id?:number,
  content:string,
  title:string,
  metaTitle:string,
  metaDescription:string,
  slug:string,
  isPublished:boolean,
  thumbnail:PicItem,
  author:IUser
}