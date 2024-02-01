import React from 'react'
import Link from 'next/link'
import { FaRegCalendarAlt, FaWhatsapp } from 'react-icons/fa';
const Whatsapp = () => {
  return (
    <Link
      role="button"
      href={'https://wa.me/+40750472447'}
      title="Scrie-mi un mesaj pe Whatsapp"
      className="px-2 rounded-md  cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6] border-2 border-color-200"
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
        className=" px-2 rounded-md  cursor-pointer font-poppins border-accent border-2 text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white  hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6]"
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