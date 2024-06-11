import { SEOInfo } from '@/utils/SeoInfo';
import Container from '@/components/Container';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = new SEOInfo(
  'Blog - MarWeb',
  'Blog - MarWeb',
  '/blog/'
);

const PostLayout = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>
};

export default PostLayout