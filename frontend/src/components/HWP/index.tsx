import React, { ReactNode } from 'react';
import { H } from '..';

interface HWPProps {
Header: ReactNode
Paragraph: ReactNode
}

const HWP = ({Header, Paragraph}:HWPProps) => {
  return (
    <div className="max-w-full min-h-full  ">
     {Header}
     {Paragraph}
    </div>
  );
};

export default HWP;
