'use client'
import React from 'react';
import Buttons from '../Buttons';
import { AnimatePresence, motion } from 'framer-motion';

const HeroContent = () => {
  return (
    <AnimatePresence>
      <div className=" w-full m-2">
        <div className=" flex items-center flex-col justify-center  place-items-center  relative w-full h-full  text-white text-center">
          <div className="w-full h-screen flex justify-items-center items-center">
            <h1 className="text-center mix-blend-lighten block m-auto text-7xl text-primary-content">
              AGENTIE MARKETING ONLINE
            </h1>
          </div>

          <p className="leading-9  tracking-widest font-semibold">
            Te ajutăm să-ți crești veniturile și să obții notorietate în mediul
            online prin optimizarea site-ului pentru motoarele de căutare.
          </p>
          <p className="leading-7 tracking-wider">
            Vrei să-ți crești numărul vizitelor pe site fără să investești
            bugete enorme în reclame?
          </p>
          <div className="flex flex-col p-5 gap-5">
            <span className="leanding-7 tracking-wider font-bold text-lg text-white">
              Programeaza-te la o sedinta de consultanta gratuita!
            </span>
           
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default HeroContent;
