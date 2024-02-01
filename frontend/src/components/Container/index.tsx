import React, { ReactNode } from 'react';
import Footer from '../Footer';

const Container = ({ children }: { children: ReactNode }) => {
  return (
   
      <div className='container lg:rounded-2xl bg-white/75 dark:bg-[#111111cb]'>
        <div data-aos="fade">{children}</div>
        {/* End fade effect */}
      <Footer />
      
      {/* End container */}
      </div>
    
  );
};

export default Container;
