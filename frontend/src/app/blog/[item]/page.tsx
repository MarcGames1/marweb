
import { getAllPostsURL, getPostBySlug } from '@/lib/mdx';
import {H} from "@/components";
import Image from 'next/image';
import Header from '@/components/Header';

export const dynamicParams = true;
type Props = {
    params: { item: string }
}


const SingleBlogPostPage = async ({params}: Props) => {
    console.log("SingleBlogPostPage GETTING POST BY " + params.item + " ...")
    const blog = await getPostBySlug(params.item)
    console.log(JSON.stringify(blog))
    return (
      <>
          <main>
              <div className={'content w-fit block m-auto'}>
                  <div className={''}>
                      <div className={'relative'}>
                          <div className={`h-[30vh] max-w-full flex relative  `}>
                              <Image className={'absolute dark:mix-blend-difference bg-blend-darken opacity-30'}
                                     src={blog.thumbnail.url} alt={blog.thumbnail.alt} objectFit={'cover'} layout={'fill'} />
                              <H className={'z-20'} level={1}>{blog.title}</H>
                          </div>
                      </div>
                      <div className={'prose dark:prose-invert '} dangerouslySetInnerHTML={{ __html: blog.content }} />
                  </div>
              </div>
          </main>
      </>
    )
}

export async function generateStaticParams() {
    try {
        const slugs: string[] = await getAllPostsURL();
        return slugs.map((slug) => {
            console.log(slug);
            return {
                item: encodeURIComponent(slug),
            };
        });
    } catch (error) {
        console.error('Failed to generate static params:', error);
        return [];
    }
}

// @ts-ignore
export async function generateMetadata({ params }) {

    try {
        const blog = await getPostBySlug(params.item);
        return blog.metadata;
    } catch (error) {
        console.error('Failed to generate metadata:', error);
        return {};
    }
}

export default SingleBlogPostPage
