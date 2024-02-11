import { SEOInfo } from '@/classes/SeoInfo';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = new SEOInfo(
  'Logare - MarWeb',
  'Logare - MarWeb',
  '/login',
  false
);

const LoginLayout = ({children}:{children:ReactNode}) => {
  return (
    <>{children}</>
  )
}

export default LoginLayout