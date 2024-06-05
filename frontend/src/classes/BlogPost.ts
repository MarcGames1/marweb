import { IBlogPost } from '@/declarations/blog';
import { PicItem } from '@/declarations/mediaItems';
import Globals from '@/utils/globals';
import { IUser } from '@/declarations/user';
import PictureData from '@/classes/PicItem';

 // TODO AD TITLE
class BlogPost implements IBlogPost {
  public readonly author:IUser;
  public readonly content: string;
  public readonly excerpt: string;
  public readonly isPublished: boolean;
  public readonly metaDescription: string;
  public readonly metaTitle: string;
  public readonly slug: string;
  public thumbnail: PictureData;
  public readonly title:string
  public id?: number;
  private readonly constants = Globals
  constructor(
   data:IBlogPost
  ) {
    const {  author,
      content,
      excerpt,
      isPublished,
      metaDescription,
      metaTitle,
      slug,
      thumbnail,
      id} = data
    this.author = author
    this.slug = slug
    this.content = content
    this.excerpt = excerpt
    this.thumbnail = new PictureData({ ...thumbnail })
    this.isPublished = isPublished
    this.metaDescription = metaDescription
    this.metaTitle = metaTitle
    this.title = metaTitle
    this.id = id
  }

public get metadata () {
  return {
    title: this.title,
    description: this.metaDescription,
    alternates: {
      canonical: `/blog/${this.slug}`,
    },
  }
}
}

export default BlogPost