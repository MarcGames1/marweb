'use client';
import Link from 'next/link';
import React from 'react';
import useIsCurrentURL from '@/hooks/useCurrentUrl';

const MenuItem = ({ menu }: { menu: { text: string; href: string } }) => {
  const isActive = useIsCurrentURL(menu.href);


  return (
    <Link aria-label='navigation'
      className={`rounded-xl target:text-white p-2  enabled:text-white text-white hover:bg-base-100 focus:text-secondary focus:bg-base-100 hover:text-secondary active:bg-base-100 active:text-secondary  decoration-accent decoration-4 underline-offset-4  ${
        isActive ? 'underline ' : ''
      }`}
      href={menu.href}
    >
      {menu.text}
    </Link>
  );
};

export default MenuItem;
