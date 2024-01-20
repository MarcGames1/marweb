import React from 'react';
import { H, Size } from '..';




const HeroContent = () => {
  return (
    <>
      <div className=" w-full m-2 mix-blend-plus-lighter ">
        <div className=" flex items-center flex-col justify-center  place-items-center  relative w-full h-full  text-white text-center">
          <div className="w-full h-screen flex justify-items-center items-center">
            <H level={1} size={Size.XL7}>AGENTIE MARKETING ONLINE</H>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
