import React from 'react'
import Link from 'next/link'
import { FaRegCalendarAlt, FaWhatsapp } from 'react-icons/fa';
const Whatsapp = () => {
  return (
    <Link
      role="button"
      href={'https://wa.me/+40750472447'}
      title="Scrie-mi un mesaj pe Whatsapp"
      className="btn btn-outline btn-accent"
    >
      <FaWhatsapp />
      Whatsapp
    </Link>
  );
}

const Calendly = () => {
    return (
      <Link
        role='button'
        title="Programeaza un call gratuit"
        href={'https://calendly.com/alexandru-marcu/consultanta-gratuita'}
        className="btn btn-accent"
      >
        <FaRegCalendarAlt />
        Programeaza-te!
      </Link>
    );
}

const Buttons = {
    Whatsapp,
    Calendly
}

export default Buttons


'https://calendly.com/alexandru-marcu/consultanta-gratuita';