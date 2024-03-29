import { SEOInfo } from '@/classes/SeoInfo';
import Container from '@/components/Container';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'
import Header from "@/components/Header";

export const metadata: Metadata = new SEOInfo(
  'Blog - MarWeb',
  'Blog - MarWeb',
  '/blog/'
);

const PortofoliuLayout = ({ children }: { children: ReactNode }) => {
  return <>
    <Header />
    <Container>{children}</Container>
  </>
};

export default PortofoliuLayout