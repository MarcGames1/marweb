
import { SectionWithCards } from "@/date/types";
import { ReactNode } from "react";
import { H } from "..";
import { TextAlignment, TextSize } from "../Typography/H";
import SingleItem from "./SingleItem";

interface Section2Props extends SectionWithCards {
  sectionHeading?: ReactNode | String;
  icon?: ReactNode;
}

const SectionWithCardsComponent = ({ heading, content }: Section2Props) => {
  
  return (
    <>
      <div className="flex items-center space-x-2 mb-4">
        <H
          alignment={TextAlignment.center}
          size={TextSize.xl5}
          level={'div'}
          className=" w-full mt-12 mx-5  dark:text-white font-medium"
        >
          {heading}
        </H>
      </div>
      {/* end flex */}
      <div className="grid grid-cols-1 md:grid-cols-2 mx-5 gap-x-6 gap-y-6 ">
        {content.map((singleItem) => (
          <SingleItem key={singleItem.id} singleItem={singleItem} />
        ))}
      </div>
    </>
  );
};

export default SectionWithCardsComponent
