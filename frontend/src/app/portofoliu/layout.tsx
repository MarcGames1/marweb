import { SEOInfo } from '@/utils/SeoInfo';
import Container from '@/components/Container';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'
import Header from "@/components/Header";
import { getAllPortfolioItems } from '@/lib/mdx';

export const metadata: Metadata = new SEOInfo(
  'Portofoliu - MarWeb',
  'Portofoliu - MarWeb',
  '/portofoliu/'
);
export async function generateStaticParams() {
  const posts = await getAllPortfolioItems()

  return posts.map((post) => {
    console.log(post.slug)

    return {
      item: encodeURIComponent(post.slug),
    }
  })
}
const PortofoliuLayout = ({ children }: { children: ReactNode }) => {
  return <>
    <Header />
    <Container>{children}</Container>
  </>
};

export default PortofoliuLayout