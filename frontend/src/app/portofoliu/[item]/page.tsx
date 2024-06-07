import { getAllPortfolioItems, getAllPostsMeta, getPortfolioDataBySlug } from '@/lib/mdx';
import {H} from "@/components";
import { IBlogPost } from '@/declarations/blog';
import Portfolio from '@/classes/Portfolio';
import BlogPost from '@/classes/BlogPost';




// @ts-ignore
export async function generateMetadata({params}) {
    const blogPost = await getPortfolioDataBySlug(params.item)
    return blogPost.metadata
}
export async function generateStaticParams() {
    const posts = await getAllPortfolioItems()

    const staticParams =  posts.map((post) => {
        console.log(post.slug)

        return {
            item: encodeURIComponent(post.slug),
        }
    })

    return staticParams
}

const PortfolioItem = async ({params}: { params: { item: string } }) => {

    const portfolio:Portfolio = await getPortfolioDataBySlug(params.item)

    return (
        <main>
            <div className={'content w-fit block m-auto'}>
                <div className={'prose dark:prose-invert'}>
                    <H level={1}>Studiu de caz {portfolio.title}</H>
                    <div>{portfolio.content}</div>
                </div>
            </div>
        </main>
    )
}
export default PortfolioItem
