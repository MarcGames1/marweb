import { getAllPostsURL, getPostBySlug } from '@/lib/mdx';
import {H} from "@/components";
import Image from 'next/image';

export const revalidate = 360;
export const dynamicParams = true




const SingleBlogPostPage = async ({params}: { params: { item: string } }) => {
    const blog = await getPostBySlug(params.item)


    return (
        <main>
            <div className={'content w-fit block m-auto'}>
                <div className={'prose dark:prose-invert '}>
                    <div className={'relative'}>
                        <div className={`h-[30vh] flex  `}>
                            <Image className={'absolute mix-blend-difference bg-blend-darken opacity-30'} src={blog.thumbnail.url} alt={blog.thumbnail.alt} layout={'fill'} />
                            <H className={'z-20'} level={1}>{blog.title}</H>
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: blog.content }}/>
                </div>
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    try {
        const slugs :string[]  = await getAllPostsURL()
        return slugs.map((slug) => {
            console.log(slug)
            return{
                item: encodeURIComponent(slug),
            }
        })
    }
    catch (error) {
        console.error('Failed to generate static params:', error);
        return [];
    }



}

// @ts-ignore
export async function generateMetadata({params}) {

    try {
        const blog =  await getPostBySlug(params.item)
        return blog.metadata
    }
    catch (error) {
        console.error('Failed to generate metadata:', error);
        return {};
    }
}

export default SingleBlogPostPage
