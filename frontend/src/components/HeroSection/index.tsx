import React from 'react'
import Bg from './bg'
import LeftSide from './leftSide';

const HeroSection = () => {
  return (
    <div className=" z-0">
      <Bg>
        <div className="m-auto  w-full lg:h-[300vh] grid lg:grid-flow-col grid-flow-row">
          <div className=" bg-primary/80  flex flex-col items-center lg:sticky">
           <LeftSide />
          </div>
          <div className="bg-primary/80 h-[300vh] bg-blend-overlay">col 2</div>
        </div>
      </Bg>
    </div>
  );
}

export default HeroSection