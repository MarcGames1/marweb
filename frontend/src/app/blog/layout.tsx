import { SEOInfo } from '@/utils/SeoInfo';
import Container from '@/components/Container';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'
import Globals from '@/utils/globals';
import { ApiClientError, ApiClientSuccess } from '@/utils/ApiClient';

export const revalidate = 360
export const fetchCache = "force-no-store"
export const dynamicParams = false


const api = Globals.getApiClient()
export const metadata: Metadata = new SEOInfo(
  'Blog - MarWeb',
  'Blog - MarWeb',
  '/blog/'
);
export async function generateStaticParams() {
  const slugs :ApiClientSuccess<string[]> | ApiClientError = await api.get('/published/url')
  if(slugs instanceof ApiClientError) {
    console.log("ERROR in generateStaticParams", slugs.stack)
    return []}

  return slugs.data.map((slug) =>
    {
      console.log(slug)
    return { item: slug }
  }

  )
}
const PostLayout = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>
};

export default PostLayout