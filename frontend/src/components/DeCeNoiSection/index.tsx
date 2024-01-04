'use client';

import React from 'react';
import HomepageData from '@/date/homepage';
import { typography } from '@/date/styles';
import { ChatBuble } from '..';
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
      <h2 className={`${typography.h2} py-20`}>{S4.heading}</h2>
      <div className="grid grid-flow-col">
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
  );
};
