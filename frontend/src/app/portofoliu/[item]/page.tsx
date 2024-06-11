import { getAllPortfolioItems, getPortfolioDataBySlug } from '@/lib/mdx';
import { H } from '@/components';
import Portfolio from '@/classes/Portfolio';

export const revalidate = 360;
export const dynamicParams = false
// @ts-ignore
export async function generateMetadata({params}) {
    const post = await getPortfolioDataBySlug(params.item)
    return post.metadata
}
export async function generateStaticParams() {
    const posts = await getAllPortfolioItems()

    return posts.map((post) => {
        console.log(post.slug)

        return {
            item: encodeURIComponent(post.slug),
        }
    })
}

const PortfolioItem = async ({params}: { params: { item: string } }) => {

    const portfolio:Portfolio = await getPortfolioDataBySlug(params.item)

    return (
        <main>
            <div className={'content w-fit block m-auto'}>
                <div className={'prose dark:prose-invert'}>
                    <H level={1}>Studiu de caz {portfolio.title}</H>
                    <div dangerouslySetInnerHTML={{ __html: portfolio.content }} />
                </div>
            </div>
        </main>
    )
}
export default PortfolioItem
