import React from 'react'
import Link from 'next/link'
import { FaRegCalendarAlt, FaWhatsapp } from 'react-icons/fa';
import { ContactInfo } from '@/classes/AppConstants';
const Whatsapp = () => {
  return (
    <Link
      role="button"
      href={ContactInfo.whatsapp}
      title="Scrie-mi un mesaj pe Whatsapp"
      className=" flex items-center justify-items-center bg-gradient-to-r from-color-820 to-color-50  duration-200 transition ease-linear hover:bg-gradient-to-l px-4 py-3 lg:text-lg text-white rounded-[35px] mt-6 max-h-[3rem] w-auto break-keep	"
    >
      <FaWhatsapp size={'1.5em'} />&nbsp;Whatsapp
    </Link>
  );
}
 //transition ease-in duration-200 font-semibold cursor-pointer border-color-910   hover:border-transparent px-6  py-2 rounded-lg border-[2px]  hover:text-white   dark:text-white 
const Calendly = () => {
    return (
      <Link
        role="button"
        title="Programeaza un call de consultanta"
        href={ContactInfo.calendly}
        className=" flex items-center justify-items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l px-4 py-3 lg:text-lg text-white rounded-[35px] mt-6 max-h-[3rem]  w-auto break-keep	"
      >
        <FaRegCalendarAlt size={'1.5em'} />&nbsp;Programeaza-te
      </Link>
    );
}

const Buttons = {
    Whatsapp,
    Calendly
}

export default Buttons


'https://calendly.com/alexandru-marcu/consultanta-gratuita';