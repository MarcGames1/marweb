import { CardData } from '@/date/types';
import React from 'react'
import { IoIosCheckmark } from 'react-icons/io';
import { H } from '..';
import { TextColor, TextSize } from '../Typography/H';

const Reason = ({heading, description }: CardData) => {
  return (
    <div className=" flex flex-row items-center justify-items-center gap-5">
      <div
        className={`outline_hover rounded-full bg-accent ${TextSize.lg} ${TextColor.primary}`}
      >
        <IoIosCheckmark size={'3rem'} color={'currentColor'} />
      </div>
        <div className="flex flex-col lg:p-5 p-2 rounded-xl w-full  border-2 border-accent ">
        <H level={3} size={TextSize.xl}>
          {heading}
        </H>
        <H size={TextSize.lg} level={'div'}>
          {description}
        </H>
      </div>
    </div>
  );
};

export default Reason