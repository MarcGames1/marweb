import React from 'react'
import Bg from './bg'
import LeftSide from './leftSide';

const HeroSection = () => {
  return (
    <div className=" z-0">
      <Bg>
        <div className="m-auto   bg-primary/80 w-full h-full  grid lg:grid-flow-col grid-flow-row">
          <div className=" bg-blend-darken flex flex-col items-center">
            <LeftSide />
          </div>
          <div className="bg-transparent/30 ">col 2</div>
        </div>
      </Bg>
    </div>
  );
}

export default HeroSection