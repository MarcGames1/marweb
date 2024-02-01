import React from 'react';

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
     
      <main>{children}</main>
    </div>
  );
};

export default RootTemplate;
