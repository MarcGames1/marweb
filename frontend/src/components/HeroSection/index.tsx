import React from 'react'
import Bg from './bg'
import LeftSide from './leftSide';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <Bg>
        <div className=" z-0 block min-w-fit h-fit">
        <div className="m-auto relative  bg-primary/50 w-full h-full flex lg:flex-row flex-col items-center justify-center justify-items-center place-items-center  ">
          <div className="flex relative flex-col items-center container self-center  m-auto p-5">
            <LeftSide />
          </div>
          <div className="container relative self-center aspect-square w-full h-full  m-auto p-5 ">
            <Image className=' aspect-square ' width={500} height={500} src={'/assets/HeroImage.png'} alt='Hero Image' />
          </div>
        </div>
    </div>
      </Bg>
  );
}

export default HeroSection