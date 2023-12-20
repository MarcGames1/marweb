import React from 'react'
import Buttons from '../Buttons';

const LeftSide = () => {
  return (
    <>
      <div className=" p-5 text-white flex flex-col justify-center items-start ">
        <h1 className="text-center prose-3xl text-primary-content">
          AGENTIE MARKETING ONLINE
        </h1>
        <p className="leading-9 tracking-widest font-semibold">
          Te ajutăm să-ți crești veniturile și să obții notorietate în mediul
          online prin optimizarea site-ului pentru motoarele de căutare.
        </p>
        <p className="leading-7 tracking-wider">
          Vrei să-ți crești numărul vizitelor pe site fără să investești bugete
          enorme în reclame?
        </p>
      <div className="flex flex-col p-5 gap-5">
        <span className="leanding-7 tracking-wider font-bold text-lg text-white">
          Programeaza-te la o sedinta de consultanta gratuita!
        </span>
        <div className="flex justify-around  ">
         <Buttons.Calendly />
         <Buttons.Whatsapp />
        </div>
      </div>
      </div>
    </>
  );
}

export default LeftSide