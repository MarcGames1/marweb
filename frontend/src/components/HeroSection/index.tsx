import React from 'react'
import FirstPart from './FirstPart/FirstPart'
import SecondPart from './SecondPart/SecondPart'
import ThirdPart from './ThirdPart'

const HeroSection = () => {
  return (
    <section className=" overflow-x-clip">
      <FirstPart />
      <SecondPart />
      <ThirdPart />
    </section>
  );
}

export default HeroSection