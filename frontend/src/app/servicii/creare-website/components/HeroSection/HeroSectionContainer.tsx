import React, { PropsWithChildren } from 'react'

const HeroSectionContainer = ({children}:PropsWithChildren) => {
  return (
    <div className="min-w-screen min-h-screen">{children}</div>
  )
}

export default HeroSectionContainer