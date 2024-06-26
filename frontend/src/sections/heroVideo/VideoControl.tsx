'use client'
import dynamic from 'next/dynamic';
import React from 'react'

import { FaVolumeOff, FaVolumeUp } from 'react-icons/fa';

const VideoControl = ({isMuted, setIsMuted}:React.ComponentState) => {
  return (
    <button
    title='Sunet'
     role='button'
      onClick={(e) => {
        setIsMuted(!isMuted);
      }}
      className="rounded-full right-0   shadow-2xl bg-white absolute bottom-1  flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l p-3 text-lg text-white mt-6"
    >
      {isMuted ? <FaVolumeOff size={'2em'} /> : <FaVolumeUp size={'2em'} />}
    </button>
  );
}

export default dynamic(() => Promise.resolve(VideoControl), {
  ssr: false,
});