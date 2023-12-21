'use client';
import Link from 'next/link';
import React from 'react';
import useIsCurrentURL from '@/hooks/useCurrentUrl';

const MenuItem = ({ menu }: { menu: { text: string; href: string } }) => {
  const isActive = useIsCurrentURL(menu.href);


  return (
    <Link
      className={`text-white hover:bg-base-100 hover:text-secondary active decoration-accent decoration-4 underline-offset-4  ${
        isActive ? 'underline' : ''
      }`}
      href={menu.href}
    >
      {menu.text}
    </Link>
  );
};

export default MenuItem;
