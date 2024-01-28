import React from 'react'
import { H, Buttons } from '..';
import { TextSize } from '../Typography/H';
import Image from 'next/image';
const ContacteazaMa = () => {
  return (
    <>
      <div className=" sticky top-12 items-center justify-center place-content-center place-items-center place-self-center ">
        <div className="flex flex-col mx-5 p-5  rounded-2xl outline_hover justify-self-center place-self-center">
          <H className="pb-5" size={TextSize.xl2} level={'span'}>
            Contacteaza-ma
          </H>
          <Image
            alt="iphone-mockup"
            width={400}
            height={400}
            src={'/assets/DespreMine/Poza-Alexandru-Marcu.png'}
          />
          <br />
          <div className="flex flex-row justify-around">
            <Buttons.Calendly />
            <Buttons.Whatsapp />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContacteazaMa