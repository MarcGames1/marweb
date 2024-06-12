import { SEOInfo } from '@/utils/SeoInfo';
import Container from '@/components/Container';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'
import Header from "@/components/Header";

export const metadata: Metadata = new SEOInfo(
  'Portofoliu - MarWeb',
  'Portofoliu - MarWeb',
  '/portofoliu/'
);

const PortofoliuLayout = ({ children }: { children: ReactNode }) => {
  return <>
    <Container>{children}</Container>
  </>
};

export default PortofoliuLayout