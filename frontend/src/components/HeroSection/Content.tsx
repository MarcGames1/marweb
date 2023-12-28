import { typography } from '@/date/styles';
import React from 'react';
import { Buttons } from '..';

const Content = ({ text = '', withButtons=false }) => {
  return (
    <div className="flex items-center flex-col justify-center justify-items-center  place-items-center w-full h-full ">
      <div className={` ${typography.h2}`}>{text}</div>
      {withButtons && (
        <>
          <p className={` z-10 ${typography.h2}`}>Programeaza-te la o sedinta de consultanta gratuita!</p>
        <div className="flex items-center  justify-items-center gap-5 mb-5">
          <Buttons.Calendly />
          <Buttons.Whatsapp />
        </div>
        </>
      )}
    </div>
  );
};

export default Content;
