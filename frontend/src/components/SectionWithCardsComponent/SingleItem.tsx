import { CardData } from '@/date/types'

import dynamic from 'next/dynamic';
import React from 'react'

const SingleItem = ({singleItem}:{singleItem:CardData}) => {

    
  return (
    <div
      className={`py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg bg-[${singleItem.bg}] dark:bg-transparent  dark:border-[#212425] dark:border-2`}
     
      
    >
      <h3 className="text-xl dark:text-white"> {singleItem.heading} </h3>
      <p className="dark:text-[#b7b7b7]">{singleItem.description}</p>
    </div>
  );
}

export default dynamic(() => Promise.resolve(SingleItem), {
  ssr: true,
});