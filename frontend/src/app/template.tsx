import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'

const RootTemplate = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
     <Footer />
    </>
  );
}

export default RootTemplate