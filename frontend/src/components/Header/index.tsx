'use client'
import { MenuData } from '@/date/menuData';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Buttons } from '..';
import Logo from './HeaderComponents/Logo';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
 const variants = {
   opened: { x: 0, opacity: 1, display: 'flex' },
   closed: { x: -500, display: 'none', opacity: 0 },
 };
  return (
    <>
      <nav className="fixed z-30 w-full flex items-center flex-wrap glass p-3 ">
        <div className='md:w-[100px]'>
          <Logo />
        </div>

        
        <button
          className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto z-10`}
        >
          <div className="lg:inline-flex md:gap-2 gap-5 lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            {MenuData.map((m, i) => {
              return (
                <motion.div
                  className="lg:inline-flex w-auto  w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white"
                  //@ts-ignore
                  variants={variants}
                  key={i}
                >
                  <Link href={m.href}>{m.text}</Link>
                </motion.div>
              );
            })}
            <div className="flex md:gap-2 gap-5">
              <Buttons.Calendly />
              <Buttons.Whatsapp />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
