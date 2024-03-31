import {getAllPostsMeta, getPostBySlug} from "@/lib/mdx";
import path from "path";
import {IBlogPostMetaData, IPortfolioMetaData} from "@/interfaces/postMetaData";
import {H} from "@/components";
import {SEOInfo} from "@/classes/SeoInfo";

const mdDir = path.join(process.cwd(), 'src', 'app', 'blog', 'posts')

const getPageContent = async (slug: string) => {
    // @ts-ignore
    const {meta, content}: { meta: IPortfolioMetaData | IBlogPostMetaData; content: any; } = await getPostBySlug(slug, mdDir)
    return {meta, content}
}
export async function generateStaticParams() {
    const posts = await getAllPostsMeta(mdDir)

    const staticParams =  posts.map((post) => {
        console.log(post.permalink)

        return {
            item: encodeURIComponent(post.permalink),
        }
    })

    console.log('STATic Params -> ' , staticParams)
    return staticParams
}

// @ts-ignore
export async function generateMetadata({params}) {
    const {meta}: {meta: IPortfolioMetaData | IBlogPostMetaData; } = await getPageContent(params.item)
   let md:any  = new SEOInfo(meta.title, meta.description, `/blog/${params.item}`)
    return {
        ...md
    }
}


const SingleBlogPostPage = async ({params}: { params: { item: string } }) => {

    const {meta, content} = await getPostBySlug(params.item, mdDir)
    return (
        <main>

            <div className={'content w-fit block m-auto'}>
                <div className={'prose dark:prose-invert '}>
                    <div className={`h-[30vh] flex  `}>
                        <H level={1}>{meta.title}</H>
                    </div>

                    <div>
                       {content}

                        {/*{content}*/}
                    </div>

                </div>
            </div>
        </main>
    )
}
export default SingleBlogPostPage
//TODO TYPE FOR META DATA IN MDX FILES