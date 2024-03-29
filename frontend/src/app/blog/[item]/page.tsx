import {getPostBySlug} from "@/lib/mdx";
import path from "path";
import {IBlogPostMetaData, IPortfolioMetaData} from "@/interfaces/postMetaData";
import {H} from "@/components";

const mdDir = path.join(process.cwd(), 'src', 'app', 'blog', 'posts')

const getPageContent = async (slug: string) => {
    // @ts-ignore
    const {meta, content}: { meta: IPortfolioMetaData | IBlogPostMetaData; content: any; } = await getPostBySlug(slug, mdDir)
    return {meta, content}
}

// @ts-ignore
export async function generateMetadata({params}) {
    const {meta}: {meta: IPortfolioMetaData | IBlogPostMetaData; } = await getPageContent(params.item)
    return {
        title: meta.title,
        description: meta.description
    }
}


const PortfolioItem = async ({params}: { params: { item: string } }) => {
    // @ts-ignore
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
export default PortfolioItem
//TODO TYPE FOR META DATA IN MDX FILES