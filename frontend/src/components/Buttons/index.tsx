import React from 'react'
import Link from 'next/link'
import { FaRegCalendarAlt, FaWhatsapp } from 'react-icons/fa';
const Whatsapp = () => {
  return (
    <Link
      role="button"
      href={'https://wa.me/+40750472447'}
      title="Scrie-mi un mesaj pe Whatsapp"
      className="px-2 rounded-md  cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6]"
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
        className="rounded-md  cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6] linked bg-gradient-to-r "
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