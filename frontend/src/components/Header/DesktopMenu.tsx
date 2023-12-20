'use client'

import { MenuData } from '@/date/menuData';
import React from 'react'
import useIsMobile from '@/hooks/useIsMobile';
import Logo from './HeaderComponents/Logo';
import MenuItem from './HeaderComponents/MenuItem';
import { Buttons } from '..';

const DesktopMenu = () => {
    const isMobile = useIsMobile()
    
    if(isMobile){return}
  return (
    <header className=" hidden sticky inset-0 z-10 bg-transparent lg:flex backdrop-blur-lg shadow-2xl 	 justify-between px-2 items-center">
      <Logo />
      <nav className="flex justify-between  navbar w-full ">
        <ul className="menu menu-horizontal  px-1">
          {MenuData.map((menu, idx) => {
            return (
              <li key={idx}>
                <MenuItem menu={menu} />
              </li>
            ); 
          })}
        </ul>
      <div className='flex gap-4 justify-self-end'>
      <Buttons.Whatsapp />
      <Buttons.Calendly />
      </div>
      </nav>

    </header>
  );
}

export default DesktopMenu