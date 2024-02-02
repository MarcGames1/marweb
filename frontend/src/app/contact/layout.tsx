import { SEOInfo } from '@/classes/SeoInfo';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = new SEOInfo(
  'Contact Alexandru Marcu - MarWeb',
  'Contact Alexandru Marcu - MarWeb',
  '/contact'
);

const contactLayout = ({children}:{children:ReactNode}) => {
  return (
    <>{children}</>
  )
}

export default contactLayout