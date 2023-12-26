import React from 'react'
import { Menu } from './HeaderComponents/Menu';
import Logo from './HeaderComponents/Logo';

const MobileMenu = () => {
  return (
    <header className="lg:hidden sticky inset-0 bg-transparent flex backdrop-blur-lg shadow-2xl	 justify-between px-5 items-center z-20">
      <Menu />
      <Logo />
    </header>
  );
}

export default MobileMenu