import { IBlogPost } from '@/declarations/blog';
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