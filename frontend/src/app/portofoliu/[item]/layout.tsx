
import React, { ReactNode } from 'react'
import { getAllPortfolioItems } from '@/lib/mdx';

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



const PortofolioLayout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>
};

export default PortofolioLayout