import { Ipost } from '@/declarations/Ipost';
import Globals from '@/utils/globals';
import { IUser } from '@/declarations/user';
import PictureData from '@/classes/PicItem';

class Post implements Ipost {
  public readonly author:IUser;
  public readonly content: string;
  public readonly isPublished: boolean;
  public readonly metaDescription: string;
  public readonly metaTitle: string;
  public readonly slug: string;
  public thumbnail: PictureData;
  public readonly title:string
  public id?: number;
  private readonly constants = Globals
  constructor(
    data:Ipost
  ) {
    const {  author,
      content,
      isPublished,
      metaDescription,
      metaTitle,
      slug,
      thumbnail,
      id} = data
    this.author = author
    this.slug = slug
    this.content = content
    this.thumbnail = new PictureData({ ...thumbnail })
    this.isPublished = isPublished
    this.metaDescription = metaDescription
    this.metaTitle = metaTitle
    this.title = metaTitle
    this.id = id
  }
}

export default Post