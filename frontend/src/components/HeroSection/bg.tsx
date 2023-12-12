import { ReactNode } from 'react'
import Image from 'next/image';
const bg = ({children}:{children:ReactNode}) => {
  return (
    <div className=" relative   overflow-hidden  object-cover ">
      <Image
        className="-z-10 overflow-hidden"
        src={'/bg.gif'}
        alt="bg-image"
        width={1920}
        height={1080}
      />
      <div className="w-full z-0 h-full m-auto absolute  inset-0">
        {children}
      </div>
    </div>
  );
}

export default bg