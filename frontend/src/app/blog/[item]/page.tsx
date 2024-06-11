import { getAllPostsURL, getPostBySlug } from '@/lib/mdx';
const api = Globals.getApiClient()

export const runtime = 'nodejs'
export const fetchCache = 'force-no-store'
export const revalidate = 360;

import {H} from "@/components";
import Image from 'next/image';
import { ApiClientError, ApiClientSuccess } from '@/utils/ApiClient';
import Globals from '@/utils/globals';


const getPageContent = async (slug: string) => {
    return await getPostBySlug(slug)

}
export async function generateStaticParams() {
    const slugs :string[]  = await getAllPostsURL()


    return slugs.map((slug) => ({
        item:slug
    }))
}

// @ts-ignore
export async function generateMetadata({params}) {

    const blog =  await getPageContent(params.item)
    if(!blog){ return {} }
    return blog.metadata
}


const SingleBlogPostPage = async ({params}: { params: { item: string } }) => {
    const blog = await getPostBySlug(params.item)
    if(!blog) {
        return <h1>No Blog Post Added</h1>
    }

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


                    <div dangerouslySetInnerHTML={{ __html: blog.content }}>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default SingleBlogPostPage
