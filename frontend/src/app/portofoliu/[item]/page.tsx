import {getPostBySlug} from "@/lib/mdx";
import path from "path";
import {IPortfolioMetaData} from "@/interfaces/postMetaData";
import {H} from "@/components";
import {MDXRemote} from "next-mdx-remote";
import {useMDXComponents} from "@/mdx-components";
const mdDir = path.join(process.cwd(), 'src', 'app', 'portofoliu', 'items')

const getPageContent = async (slug: string) => {
    // @ts-ignore
    const {meta, content}: { meta: IPortfolioMetaData; content: any; } = await getPostBySlug(slug, mdDir)
    return {meta, content}
}

// @ts-ignore
export async function generateMetadata({params}) {
    const {meta}: { meta: IPortfolioMetaData } = await getPageContent(params.item)
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
                <div className={'prose dark:prose-invert'}>
                    <H level={1}>Studiu de caz {meta.title}</H>
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