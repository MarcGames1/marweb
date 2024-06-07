import { IUser } from '@/declarations/user';
import PictureData from '@/classes/PicItem';

export interface Ipost {
 author:IUser;
 content: string;
 isPublished: boolean;
 metaDescription: string;
 metaTitle: string;
 slug: string;
 thumbnail: PictureData;
 title:string
 id?: number;
}