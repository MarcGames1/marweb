import dynamic from 'next/dynamic';
import React from 'react';
import VideoClientComponent from './VideoClientComponent';




const HeroFullScreenVideo = () => {
  
  return (
    <div className="max-w-screen min-h-[50vh]  lg:min-h-screen relative">
    <VideoClientComponent />
  </div>
  );
};

export default dynamic(() => Promise.resolve(HeroFullScreenVideo), {
  ssr: false,
});

  

