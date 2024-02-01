'use client'
import { SectionWithCards } from "@/date/types";
import { useTheme } from "next-themes";
import { ReactNode } from "react";
import { H } from "..";
import { TextAlignment, TextSize } from "../Typography/H";
import dynamic from "next/dynamic";

interface Section2Props extends SectionWithCards {
  sectionHeading?: ReactNode | String;
  icon?: ReactNode;
}

const SectionWithCardsComponent = ({ heading, content }: Section2Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <>
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
      {/* end flex */}
      <div className="grid grid-cols-1 md:grid-cols-2 mx-5 gap-x-6 gap-y-6 ">
        {content.map((singleItem) => (
          <div
            className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2"
            style={{
              background: `${
                theme === 'dark' ? 'transparent' : singleItem?.bg
              }`,
            }}
            key={singleItem.id}
          >
            <h3 className="text-xl dark:text-white"> {singleItem.heading} </h3>
            <p className="dark:text-[#b7b7b7]">{singleItem.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(SectionWithCardsComponent), { ssr: false });
