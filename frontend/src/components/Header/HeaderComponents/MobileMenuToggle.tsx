
import DarkModeMobile from '@/components/mode/DarkModeMobile'
import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const MobileMenuToggle = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex items-center">
      <DarkModeMobile />
      {!menuOpen ? (
        <span
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:opacity-0 lg:invisible visible opacity-100  bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white text-3xl ml-3 "
        >
          <AiOutlineMenu />
        </span>
      ) : (
        <span
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:opacity-0 cursor-pointer lg:invisible visible opacity-100  bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3 "
        >
          <AiOutlineClose />
        </span>
      )}
    </div>
  );
};

export default MobileMenuToggle