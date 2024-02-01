import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
      <Header />
      <main className={`container lg:rounded-2xl bg-white dark:bg-[#111111] `}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default RootTemplate;
