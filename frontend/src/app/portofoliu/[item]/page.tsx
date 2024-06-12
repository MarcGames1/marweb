import { getAllPortfolioItems, getPortfolioDataBySlug } from '@/lib/mdx';
import { H } from '@/components';
import Portfolio from '@/classes/Portfolio';


export const dynamicParams = false;
type Props = {
  params: { item: string }
}

const PortfolioItem = async ({params}:Props) => {

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

export async function generateMetadata({params}:Props) {
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


export default PortfolioItem
