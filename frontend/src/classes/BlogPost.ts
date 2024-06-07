import { IBlogPost } from '@/declarations/blog';
import Globals from '@/utils/globals';
import { IUser } from '@/declarations/user';
import PictureData from '@/classes/PicItem';
import BasePost from '@/classes/BasePost';
import { Ipost } from '@/declarations/Ipost';

class BlogPost extends BasePost implements IBlogPost {
  public readonly excerpt: string;
  constructor(data:IBlogPost) {
    super(data  as unknown as Ipost)
    this.excerpt = data.excerpt
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