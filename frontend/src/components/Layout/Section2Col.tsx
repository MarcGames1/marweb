import React from 'react';

export interface ISection2Col {
  leftside: React.ReactNode;
  rightside: React.ReactNode;
  bgCol?: BackgroundColor
  classes?: string
}

export enum BackgroundColor {
  primary='bg-primary',
  secondary='bg-secondary'
}

const Section2Col = ({ rightside, leftside, bgCol, classes }: ISection2Col) => {
  return (
    <section className={`${bgCol} ${classes}`}>
      <div className="grid grid-flow-row gap-10   lg:grid-rows-none mx-5  m-auto  items-center justify-evenly lg:grid-flow-col">
        {leftside}
        {rightside}
      </div>
    </section>
  );
};

export default Section2Col;
