'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import MobileMenuToggle from './MobileMenuToggle';
import MobileNav from './MobileNav';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const HeaderMenu = () => {

     const [menuOpen, setMenuOpen] = useState(false);
     
  return (
    <header className="flex justify-between items-center  top-0 left-0 w-full lg:static z-[1111111111]  ">
      <div className=" flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent lg:dark:bg-transparent dark:bg-black ">
        <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5 ">
          <Link className="text-5xl font-semibold" href="/">s
            <Image
              className="max-h-fit w-auto h-[50px] lg:h-[75px]"
              width={75}
              height={61}
              priority
              src="/marwebBrandAssets/Marweb-logo1.png"
              alt="logo"
            />
          </Link>

          <MobileMenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>
      {/* End flex */}

      {/* mobile nav menu start */}
      <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/* End mobile nav menu end */}
    </header>
  );
}

export default dynamic(() => Promise.resolve(HeaderMenu), {
  ssr: false,
});