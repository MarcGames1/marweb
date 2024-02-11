import React from 'react';
import Header from '@/components/Header';




const AboutTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AboutTemplate;
