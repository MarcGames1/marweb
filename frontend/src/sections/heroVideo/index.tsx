import dynamic from 'next/dynamic';
import React from 'react';
import VideoClientComponent from './VideoClientComponent';




const HeroFullScreenVideo = () => {
  
  return (
    <div className="max-w-full min-h-[30vh] lg:min-h-screen relative">
    <VideoClientComponent />
  </div>
  );
};

export default HeroFullScreenVideo;

  

