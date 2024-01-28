import { H } from '@/components';
import { TextSize } from '@/components/Typography/H';
import Link from 'next/link';
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className=" flex flex-col place-content-center justify-items-center items-center h-[80vmin]">
      <div className='flex  flex-col '>
        <H>EROARE 404</H>
        <H size={TextSize.xl2} level={'p'}>
          Aceasta Resursa nu este disponibila
        </H>
        <Link className="btn btn-accent" href="/">
          Inapoi la Pagina Principala
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage