import { SEOInfo } from '@/utils/SeoInfo';
import Container from '@/components/Container';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'
import { getAllPostsURL } from '@/lib/mdx';
import Header from '@/components/Header';

export async function generateStaticParams() {
  try {
    const slugs :string[]  = await getAllPostsURL()
    return slugs.map((slug) => {
      console.log(slug)
      return{
        item: encodeURIComponent(slug),
      }
    })
  }
  catch (error) {
    console.error('Failed to generate static params:', error);
    return [];
  }



}

export const metadata: Metadata = new SEOInfo(
  'Blog - MarWeb',
  'Blog - MarWeb',
  '/blog/'
);

const PostLayout = ({ children }: { children: ReactNode }) => {
  return <>
    <Header />
    <Container>{children}</Container>
  </>
};

export default PostLayout