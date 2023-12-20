import React from 'react'
import Logo from './HeaderComponents/Logo'
import { Menu } from './HeaderComponents/Menu'


const Header = () => {
  return (
    <header className="sticky inset-0 z-10 bg-transparent flex backdrop-blur-lg shadow-2xl	 justify-between px-5 items-center">
      <Menu />
      
      <Logo />
    </header>
  );
}

export default Header