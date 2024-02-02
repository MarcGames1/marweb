import { H } from '@/components';
import { TextSize } from '@/components/Typography/H';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react'
import { SEOInfo } from '../classes/SeoInfo';
import Container from '@/components/Container';

export const metadata:Metadata = new SEOInfo('Pagina nu a fost gasita', '', '/', false)


const NotFoundPage = () => {
  return (
    <Container>
      <div className="h-screen w-full flex flex-col justify-center items-center  d">
        <h1 className="text-7xl leading-none dark:text-white font-extrabold md:text-8xl">
          404!
        </h1>
        <p className=" text-medium dark:text-white text-sm capitalize mb-7 mt-6 px-4 text-center">
          Aceasta Pagina nu exista
        </p>

        <Link
          href="/"
          className="flex items-center mx-auto bg-gradient-to-r  duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg light:text-black dark:text-white rounded-[5px]"
        >
          Inapoi la Pagina Principala
        </Link>
      </div>
    </Container>
  );
};

export default NotFoundPage