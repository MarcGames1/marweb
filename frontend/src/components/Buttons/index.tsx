import React from 'react'
import Link from 'next/link'
import { FaRegCalendarAlt, FaWhatsapp } from 'react-icons/fa';
const Whatsapp = () => {
  return (
    <Link
      role="button"
      href={'https://wa.me/+40750472447'}
      title="Scrie-mi un mesaj pe Whatsapp"
      className=" flex items-center bg-gradient-to-r from-color-820 to-color-50  duration-200 transition ease-linear hover:bg-gradient-to-l px-4 py-3 text-lg text-white rounded-[35px] mt-6"
    >
      <FaWhatsapp />
      &nbsp;
      Whatsapp
    </Link>
  );
}

const Calendly = () => {
    return (
      <Link
        role="button"
        title="Programeaza un call gratuit"
        href={'https://calendly.com/alexandru-marcu/consultanta-gratuita'}
        className=" flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l px-4 py-3 text-lg text-white rounded-[35px] mt-6"
      >
        <FaRegCalendarAlt /> &nbsp; Programeaza-te!
      </Link>
    );
}

const Buttons = {
    Whatsapp,
    Calendly
}

export default Buttons


'https://calendly.com/alexandru-marcu/consultanta-gratuita';