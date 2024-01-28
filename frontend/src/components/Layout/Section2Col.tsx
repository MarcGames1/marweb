import React from 'react';

export interface ISection2Col {
  leftside: React.ReactNode;
  rightside: React.ReactNode;
}

const Section2Col = ({ rightside, leftside }: ISection2Col) => {
  return (
    <section>
      <div className="grid grid-flow-row   m-auto  items-center justify-evenly lg:grid-flow-col">
      {leftside}
       {rightside}
      </div>
    </section>
  );
};

export default Section2Col;
