
import { H } from '@/components';
import PortraitVideoPlayer from '@/components/PortraitVideoPlayer/PortraitVideoPlayer';
import { TextAlignment, TextSize } from '@/components/Typography/H';
import { PortraitVideoContentGallery } from '@/date/types';
import dynamic from 'next/dynamic';
import React from 'react'

const Section4 = ({ heading, content }: PortraitVideoContentGallery) => {
 
   
  

  return (
    <div>
      {' '}
      <div className="flex items-center space-x-2 mb-4">
        <H
          alignment={TextAlignment.left}
          size={TextSize.xl5}
          level={'div'}
          className="after-effect w-full mt-12 mx-5 after:ml-5  dark:text-white font-medium"
        >
          {heading}
        </H>
      </div>
      {/* flex flex-flow-col flex-wrap */}
      <div className=" flex flex-flow-col flex-wrap items-stretch justify-items-center place-content-center content-center mx-5 gap-x-6 gap-y-6 ">
        {content.map((singleItem) => (
          <div
            className={`py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg aspect-video bg-[${singleItem.bg}] dark:border-[#212425] dark:border-2`}
            key={singleItem.id}
            
          >
            <PortraitVideoPlayer
              className="rounded-lg 	"
              url={singleItem.video.src}
              controls
            />

            <div>
              {' '}
              <h3 className="text-xl dark:text-white text-center ">
                {' '}
                {singleItem.heading}{' '}
              </h3>
              <div className="dark:text-[#b7b7b7] break-words text-pretty	text-left	w-fit">
                {typeof singleItem.description === 'string'
                  ? singleItem.description.split('\n').map((line) => {
                      return <p key={line}>{line}</p>;
                    })
                  : null}
                {typeof singleItem.description !== 'string'
                  ? singleItem.description
                  : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Section4), {
  ssr: true,
});
