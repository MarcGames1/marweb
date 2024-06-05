import {getAllPostsMeta, getPostBySlug} from "@/lib/mdx";
import path from "path";

import {H} from "@/components";
import Constants from '@/utils/globals'
import Image from 'next/image';

const {SITE_URL} = Constants
const mdDir = path.join(process.cwd(), 'src', 'app', 'blog', 'posts')

const getPageContent = async (slug: string) => {
    return await getPostBySlug(slug)

}
export async function generateStaticParams() {
    const posts = await getAllPostsMeta()

    const staticParams =  posts.map((post) => {
        console.log(post.slug)

        return {
            item: encodeURIComponent(post.slug),
        }
    })

    return staticParams
}

// @ts-ignore
export async function generateMetadata({params}) {
    const blog =  await getPageContent(params.item)
    return blog.metadata
}


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


                    <div dangerouslySetInnerHTML={{ __html: blog.content }}>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default SingleBlogPostPage
