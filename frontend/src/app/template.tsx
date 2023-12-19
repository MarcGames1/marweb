import Header from '@/components/Header';
import React from 'react'

const RootTemplate = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center">
        {children}
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default RootTemplate