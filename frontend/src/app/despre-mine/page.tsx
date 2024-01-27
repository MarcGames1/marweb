
import { Metadata } from 'next'
import React from 'react'
import { SEOInfo } from '../classes/SeoInfo';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';

export const metadata: Metadata = new SEOInfo(
  'Despre Mine Alexandru Marcu - MarWeb',
  'Despre Mine Alexandru Marcu - MarWeb',
  '/despre-mine'
);

const DespreMine = () => {
  return (
    <>
    <FirstSection />
    <SecondSection />
    </>
  )
}

export default DespreMine