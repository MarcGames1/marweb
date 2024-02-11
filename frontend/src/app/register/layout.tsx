import { SEOInfo } from '@/classes/SeoInfo';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = new SEOInfo(
  'Inregistrare - MarWeb',
  'Inregistrare - MarWeb',
  '/register', false
);

const RegisterLayout = ({children}:{children:ReactNode}) => {
  return (
    <>{children}</>
  )
}

export default RegisterLayout