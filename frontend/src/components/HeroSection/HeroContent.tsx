import { typography } from '@/date/styles';
import React from 'react';

const HeroContent = () => {
  return (
    <>
      <div className=" w-full m-2">
        <div className=" flex items-center flex-col justify-center  place-items-center  relative w-full h-full  text-white text-center">
          <div className="w-full h-screen flex justify-items-center items-center">
            <h1 className={typography.h1}>
              AGENTIE MARKETING ONLINE
            </h1>
          </div>

     
          
          <div className="flex flex-col p-5 gap-5">
            <span className="leanding-7 tracking-wider font-bold text-lg text-white">
              Programeaza-te la o sedinta de consultanta gratuita!
            </span>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
