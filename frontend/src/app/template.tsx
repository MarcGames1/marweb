import React from 'react';

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
     
      <main>{children}</main>
    </div>
  );
};

export default RootTemplate;
