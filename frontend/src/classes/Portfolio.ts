import Globals from '@/utils/globals';
import { IUser } from '@/declarations/user';
import PictureData from '@/classes/PicItem';
import { Iportfolio } from '@/declarations/Iportfolio';

class Portfolio implements Iportfolio {
  public readonly author:IUser;
  public readonly content: string;
  public readonly isPublished: boolean;
  public readonly metaDescription: string;
  public readonly metaTitle: string;
  public readonly slug: string;
  public thumbnail: PictureData;
  public readonly title:string
  public id?: number;
  private readonly _url:string;
  private readonly constants = Globals
  constructor(
    data:Iportfolio
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
    this._url = `${this.constants.SITE_URL}/portofoliu${this.slug}`
  }

  public get url () {
    return this._url
  }
  public get metadata () {
    return {
      title: this.title,
      description: this.metaDescription,
      alternates: {
        canonical: `/blog${this.slug}`,
      },
    }
  }
}

export default Portfolio