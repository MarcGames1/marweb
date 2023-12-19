import React from 'react'
import Logo from './HeaderComponents/Logo'
import Menu from './HeaderComponents/Menu'


const Header = () => {
  return (<header className='sticky inset-0 z-10 glass'>

    <Logo />
    <Menu />
  </header>
  )
}

export default Header