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
    <header className=" hidden  sticky backdrop-contrast-100 inset-0 z-20 bg-transparent lg:flex backdrop-blur-lg shadow-2xl items-center justify-center   px-2 ">
      <Logo />
      <nav className="flex mix-blend-overlay bg-inherit backdrop-contrast-200 flex-nowrap justify-evenly   navbar  ">
        <ul className="  menu-horizontal gap-4   px-1">
          {MenuData.map((menu, idx) => {
            return (
              <li key={idx}>
                <MenuItem menu={menu} />
              </li>
            );
          })}
        </ul>
        <div className="flex gap-4 items-center justify-self-end">
          <Buttons.Whatsapp />
          <Buttons.Calendly />
        </div>
      </nav>
    </header>
  );
}

export default DesktopMenu