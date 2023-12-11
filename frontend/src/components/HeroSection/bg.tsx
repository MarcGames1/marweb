import { ReactNode } from 'react'
import Image from 'next/image';
const bg = ({children}:{children:ReactNode}) => {
  return (
    <div className=" relative -z-10  min-w-[98vmin] overflow-hidden lg:min-h-full min-h-[50vh]  object-cover ">
      <Image className="overflow-hidden" src={'/bg.gif'} alt="bg-image" width={1920} height={1080} />
      <div className="w-full h-full m-auto absolute  inset-0">{children}</div>
    </div>
  );
}

export default bg