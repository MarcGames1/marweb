'use client';

import React from 'react';
import HomepageData from '@/date/homepage';
import { ChatBuble, H } from '..';
import { PhoneMockup } from '..';
import {
  AnimatePresence,
  Variants,
  motion,
} from 'framer-motion';

const DeCeNoi = () => {
  const { S4 } = HomepageData;
  return (
    <section>
      <H className={`py-20`}>{S4.heading}</H>
      <div className="grid grid-flow-col max-w-[90vw]">
        <DeCeNoiPhone content={S4.content} />
        <div className=" items-center  ">
          
        </div>
      </div>
    </section>
  );
};

export default DeCeNoi;

const ChatBubleVariants: Variants = {
  initial: {  y: -10, scale:0, opacity:0},
  onScreen: { position:"relative", y:0, scale: 1, opacity:1 },
  exit: {x:-100 },
};

const DeCeNoiPhone = ({
  content,
}: {
  content: { heading: string; description: string }[];
}) => {
  return (
    <div className="grid lg:grid-cols-2 grid-flow-row justify-items-center items-center w-full">

    <AnimatePresence>
      <PhoneMockup>
        {content.map((item, index) => {
          return (
            <motion.div
              className=' overflow-hidden'
              variants={ChatBubleVariants}
              transition={{ type: 'spring', staggerChildren: 1 }}
              whileInView={'onScreen'}
              exit={'exit'}
              initial={'initial'}
              key={index}
            >
              <ChatBuble
                text={item.heading}
                end={index % 2 === 0}
                variant={index % 2 !== 0 ? 'accent' : 'secondary'}
              />
              <ChatBuble
                text={item.description}
                end={index % 2 === 0}
                variant={index % 2 !== 0 ? 'accent' : 'secondary'}
                />
            </motion.div>
          );
        })}
      </PhoneMockup>
    </AnimatePresence>
    <div className='bg-red-500 w-full h-full '></div>
          </div>
  );
};
