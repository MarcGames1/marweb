'use client';

import React from 'react';
import HomepageData from '@/date/homepage';
import { ChatBuble, H } from '..';
import Image from 'next/image';
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
      <div className="flex lg:flex-row flex-col items-center justify-around  ">
        
        <DeCeNoiPhone content={S4.content} />
        

        <div className=" items-center ">
         <Image src={'/assets/decorations/robot.png'} alt={'robot'} height={400} width={600} />
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
    
    <AnimatePresence>
      <div className=' '>
        <br />
        {content.map((item, index) => {
          return (
            <motion.div
              className=' lg:w-[50vmin]'
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
      </div>
    </AnimatePresence>

   
   
  );
};
