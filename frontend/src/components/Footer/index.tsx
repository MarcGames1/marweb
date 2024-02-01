'use client'
import React from 'react'
import H, { TextAlignment, TextColor, TextSize } from '../Typography/H';
import Link from 'next/link';
import { HeaderMenuData } from '@/date/menuData';
import Image from 'next/image';

import { SocialMediaIcons } from '..';
const Footer = () => {
  const navClasses = 'flex flex-col items-center justify-items-center';
  return (
    <>
      <footer
        className={`${TextColor.primary} footer lg:p-10 items-start justify-items-center place-items-center text-center overflow-hidden rounded-b-2xl bg-slate-50 dark:bg-black  `}
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
          {HeaderMenuData.map((m) => {
            return (
              <Link
                key={String(m.name)}
                className="link link-hover"
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
          <Link href={'/termene-conditii'} className="link link-hover">
            Termeni si Conditii
          </Link>
          <Link href={'/politica-cookie'} className="link link-hover">
            Politica Cookie
          </Link>
          <a className="link link-hover" href={'mailto:alexandru@marweb.ro'}>
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