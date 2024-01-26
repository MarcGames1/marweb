import Footer from '@/components/Footer';
import { Navbar } from '@/components/Header';
import React from 'react'

const RootTemplate = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
     <Footer />
    </>
  );
}

export default RootTemplate