import React from 'react';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import useIsMobile from '@/hooks/useIsMobile';
const Header = () => {
  return (
<>
<DesktopMenu />
<MobileMenu />
</>
  );
};

export default Header;
