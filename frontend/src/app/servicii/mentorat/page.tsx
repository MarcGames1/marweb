import React from 'react'
import NotAvailable from '@/components/NotAvailable';
import dynamic from 'next/dynamic';

const MentoratPage = () => {
  return (
    <>
      <NotAvailable />
    </>
  );
}

export default dynamic(() => Promise.resolve(MentoratPage), {
  ssr: true,
});