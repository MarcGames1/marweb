import React from 'react'
import H, { TextAlignment, TextColor, TextSize } from '../Typography/H';
import Link from 'next/link';
import { MenuData } from '@/date/menuData';
import Image from 'next/image';
import { ISocialMediaData, ISocialMediaLink, SocialMediaData } from '@/date/socialMediaData';

const Footer = () => {
  const navClasses = 'flex flex-col items-center justify-items-center';
  return (
    <>
      <footer
        className={`${TextColor.primary} footer p-10 items-start justify-items-center place-items-center text-center  `}
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
          {MenuData.map((m) => {
            return (
              <Link
                key={String(m.text)}
                className="link link-hover"
                href={m.href}
              >
                {m.text}
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
          <div className="inline-flex gap-5  w-fit  place-items-center">
            {Object.keys(SocialMediaData).map((key: keyof ISocialMediaData) => (
              <Link
                className="flex place-items-center flex-col gap-1"
                href={String(SocialMediaData[key].link)}
              >
                {SocialMediaData[key].icon}
                <H
                  size={TextSize.base}
                  alignment={TextAlignment.center}
                  level={'span'}
                >
                  {key}
                </H>
              </Link>
            ))}
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer