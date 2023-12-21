import React from 'react';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
const Header = () => {
  return (
<>
<DesktopMenu />
<MobileMenu />
</>
  );
};

export default Header;
