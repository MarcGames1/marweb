'use client'
import React from 'react'
import H, { TextAlignment, TextColor, TextSize } from '../Typography/H';
import Link from 'next/link';
import { HeaderMenuData } from '@/date/menuData';
import Image from 'next/image';

import { SocialMediaIcons } from '..';
const Footer = () => {
  const navClasses =
    'flex flex-col items-center justify-items-center  text-gray-lite  dark:text-color-910';
  return (
    <>
      <footer
        className={`footer lg:p-10 items-start justify-items-center place-items-center text-center overflow-hidden rounded-b-2xl bg-slate-50 dark:bg-black  `}
      >
        <aside className={navClasses}>
          <Link href={'/'}>
            <Image
              alt="logo Marweb"
              height={100}
              width={100}
              src={'/marwebLogo/Logo-Mare-100.svg'}
            />
          </Link>
          <p>
            MarWeb
            <br />
            Marketing Agency
          </p>
        </aside>
        <nav className={navClasses}>
          <H
            level={'span'}
            alignment={TextAlignment.left}
            size={TextSize.base}
            className="footer-title"
          >
            Servicii
          </H>
          {HeaderMenuData.slice(1,-2).map((m) => {
            return (
              <Link
                key={String(m.name)}
                className="hover:text-[#FA5252] duration-300 transition"
                href={m.routePath}
              >
                {m.name}
              </Link>
            );
          })}
        </nav>

        <nav className={navClasses}>
          <H level={'span'} className="footer-title" size={TextSize.base}>
            Legal
          </H>
          <Link
            href={'/termene-conditii'}
            className="hover:text-[#FA5252] duration-300 transition"
          >
            Termeni si Conditii
          </Link>
          <Link
            href={'/politica-cookie'}
            className="hover:text-[#FA5252] duration-300 transition"
          >
            Politica Cookie
          </Link>
          <a
            className="hover:text-[#FA5252] duration-300 transitionr"
            href={'mailto:alexandru@marweb.ro'}
          >
            alexandru@marweb.ro
          </a>
        </nav>

        <nav className={navClasses}>
          <H level={'span'} size={TextSize.base} className="footer-title">
            Social Media
          </H>
          <div className="inline-flex gap-2 lg:gap-5  w-fit  place-items-center">
            <SocialMediaIcons.V2 />
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer