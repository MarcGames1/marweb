'use client'
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react'
import { SEOInfo } from '../classes/SeoInfo';
import Container from '@/components/Container';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import axios from 'axios';


export const metadata:Metadata = new SEOInfo('Pagina nu a fost gasita', '', '/', false)



const NotFoundPage = () => {

  const pathname = usePathname();
  const router = useRouter();
  const handleClick = () => {
    const data = {
        text: `
            *404 Error FOUND!*
            *Route:* ${pathname}

        `,
      };
      try {
        // Trimiterea datelor către webhook-ul Slack
         axios.post(
          process.env.NEXT_PUBLIC_SLACK_URL as string,
          JSON.stringify(data)
        );
    axios.post
    router.push('/');
  }
  catch (error) {
    console.error(error);
  } }
  return (
    <Container>
      <div className="h-auto w-full flex flex-col justify-center items-center  d">
        <h1 className="text-7xl leading-none dark:text-white font-extrabold md:text-8xl">
          404!
        </h1>
        <p className=" text-medium dark:text-white text-sm capitalize mb-7 mt-6 px-4 text-center">
          Aceasta Pagina nu exista
        </p>

        <button
          onClick={handleClick}
          className="flex items-center mx-auto bg-gradient-to-r  duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg light:text-black dark:text-white rounded-[5px]"
        >
          Inapoi la Pagina Principala
        </button>
      </div>
    </Container>
  );
};

export default NotFoundPage