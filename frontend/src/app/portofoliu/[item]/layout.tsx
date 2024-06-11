import { SEOInfo } from '@/utils/SeoInfo';
import Container from '@/components/Container';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'
import { getAllPortfolioItems, getAllPostsURL } from '@/lib/mdx';

export async function generateStaticParams() {
  const posts = await getAllPortfolioItems()

  return posts.map((post) => {
    console.log(post.slug)

    return {
      item: encodeURIComponent(post.slug),
    }
  })
}

export const metadata: Metadata = new SEOInfo(
  'Portofoliu - MarWeb',
  'portofoliu - MarWeb',
  '/portofoliu/'
);

const PortofolioLayout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>
};

export default PortofolioLayout