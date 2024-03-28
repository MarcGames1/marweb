import React, { ReactNode } from 'react';
import Footer from '../Footer';

const Container = ({ children }: { children: ReactNode }) => {
  return (
   <div className=" min-h-screen bg-homeBg dark:bg-homeBg-dark bg-center bg-repeat bg-cover bg-fixed   w-full">
            
      <div className='container lg:rounded-2xl bg-white/75 dark:bg-[#111111cb]'>
        <div>{children}</div>
       
      <Footer />
      
      {/* End container */}
      </div>
          </div>
    
  );
};

export default Container;
