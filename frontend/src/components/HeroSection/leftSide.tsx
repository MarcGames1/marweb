import React from 'react'

const LeftSide = () => {
  return (
    <div className="container self-center block m-auto p-5">
      <div className="prose p-5 text-white flex flex-col justify-center items-start ">
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
      </div>
      <div className="flex flex-col p-5 gap-5">
        <span className="leanding-7 tracking-wider font-bold text-lg text-white">
          Programeaza-te la o sedinta de consultanta gratuita!
        </span>
        <div className="flex justify-around  ">
          <button className="btn btn-accent">Programeaza-te!</button>
          <button className="btn btn-outline btn-accent">
            Programeaza-te!
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeftSide