'use client';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const Video = dynamic(() => import('./video'), {
  loading: () => <span className="loading loading-dots loading-lg"></span>,
});
const VideoControl = dynamic(() => import('./VideoControl'));

const VideoClientComponent = () => {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <div className=" relative  ">
      <Video isMuted={isMuted} />
      <VideoControl isMuted={isMuted} setIsMuted={setIsMuted} />
    </div>
  );
};

export default dynamic(() => Promise.resolve(VideoClientComponent), {
  ssr: false,
});

