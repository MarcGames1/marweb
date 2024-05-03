import DarkMode from '@/components/mode/DarkMode';
import { HeaderMenuData } from '@/date/menuData';
import { generateRandomId } from '@/utils/Helpers';
import { isActiveLink } from '@/utils/Helpers'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const MobileNav = ({ menuOpen, setMenuOpen }: {
    menuOpen: boolean,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>

}) => {
      const pathname = usePathname();

  return (
    <nav
      className={`${menuOpen ? 'block  dark:bg-black   ' : 'hidden lg:block'}`}
    >
      {/* Menu items start  */}
      <ul
        className={`${
          menuOpen
            ? 'block lg:hidden  absolute left-0 rounded-b-[20px] top-20 z-[22222222222222] w-full bg-white dark:bg-[#212425] drop-shadow-lg py-4 '
            : 'flex my-12 items-center justify-items-center'
        }`}
      >
        {HeaderMenuData.map((item) => (
          <li key={generateRandomId() + item.id} className="mb-1">
            <Link
              className={`${
                isActiveLink(item.routePath, pathname)
                  ? 'rounded-md  cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6] linked bg-gradient-to-r '
                  : 'px-2 rounded-md  cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6]'
              } `}
              href={item.routePath}
            >
              <span className="mr-2 text-xl">{item.icon}</span>
              {item.name}
            </Link>
          </li>
        ))}
        {/* light dark mode button start */}
        <DarkMode />
        {/* light dark mode button end */}
      </ul>
      {/* Menu items end  */}
    </nav>
  );
};

export default MobileNav 