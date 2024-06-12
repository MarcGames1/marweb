import { getAllPortfolioItems, getPortfolioDataBySlug } from '@/lib/mdx';
import { H } from '@/components';
import Portfolio from '@/classes/Portfolio';



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
