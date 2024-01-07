
import React from 'react';
import { Buttons, H } from '..';

const Content = ({ text = '', withButtons=false }) => {
  return (
    <div className="flex items-center flex-col justify-center justify-items-center p-5  place-items-center  h-full ">
      <H level={'div'}>{text}</H>
      {withButtons && (
        <>
          <H level={'p'} className={` z-10`}>
            Programeaza-te la o sedinta de consultanta gratuita!
          </H>
          <div className=" z-10 flex items-center py-10  justify-items-center gap-10 animate-pulse mb-5">
            <Buttons.Calendly />
            <Buttons.Whatsapp />
          </div>
        </>
      )}
    </div>
  );
};

export default Content;
