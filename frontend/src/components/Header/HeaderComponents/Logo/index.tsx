import Link from 'next/link'
import React from 'react'
import LogoComponent from './Logo'

const Logo = () => {
  return (
    <Link href={'/'}><LogoComponent /></Link>
  )
}

export default Logo