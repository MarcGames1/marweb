
import { IUser } from '@/declarations/user.declarations';
import { PicItem } from '@/declarations/mediaItems';

export interface IBlogPost {
  id?:number,
  excerpt: string,
  content:string,
  metaTitle:string,
  metaDescription:string,
  slug:string,
  isPublished:boolean,
  thumbnail:PicItem,
  author:IUser
}