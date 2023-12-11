'use client'
import React from 'react'
import { Button } from 'react-daisyui';
import { FaVolumeOff, FaVolumeUp } from 'react-icons/fa';

const VideoControl = ({isMuted, setIsMuted}:React.ComponentState) => {
  return (
    <Button
      variant="outline"
      onClick={(e) => {
        setIsMuted(!isMuted);
      }}
      className="rounded-full  btn-secondary shadow-2xl bg-white absolute bottom-1 right-10 "
    >
      {isMuted ? <FaVolumeOff /> : <FaVolumeUp />}
    </Button>
  );
}

export default VideoControl