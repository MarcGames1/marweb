import Link from 'next/link';
import React from 'react'

const NotAvailable = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center  d">
        <h1 className="text-7xl leading-none dark:text-white font-extrabold md:text-8xl">
          Disponibil Incurand
        </h1>
        <p className=" text-medium dark:text-white text-sm capitalize mb-7 mt-6 px-4 text-center">
          Aceasta Pagina va fi disponibila Incurand
        </p>

        <Link
          href="/"
          className="flex items-center mx-auto bg-gradient-to-r  duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg light:text-black dark:text-white rounded-[5px]"
        >
          Inapoi la Pagina Principala
        </Link>
      </div>
    </>
  );
}

export default NotAvailable