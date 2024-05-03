import { SEOInfo } from '@/utils/SeoInfo';
import Container from '@/components/Container';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'
import Header from "@/components/Header";

export const metadata: Metadata = new SEOInfo(
  'Confirmare Email',
  'Confirmare Email',
  '/users/confirm-email/',
  false
);

const PortofoliuLayout = ({ children }: { children: ReactNode }) => {
  return <>
    <Header />
    <Container>{children}</Container>
  </>
};

export default PortofoliuLayout