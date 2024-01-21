import { H, Size } from "@/components";
import SeoData from "@/date/seo";
import { HeroSectionData } from "@/date/types";
import Image from "next/image";

import React from 'react'

const S1 = ({heading, content, decoration}:HeroSectionData) => {
  return (
    <section className="flex flex-row gap-10 mx-10 items-center justify-items-around ">
      <div className="flex flex-col">
        <H>{heading}</H>
        <H className="flex items-center flex-col w-full h-full gap-10 py-10" level={'div'} size={Size.XL3}>
          {content}
        </H>
      </div>
      <Image src={String(decoration)} width={600} height={400} alt={""}  />
    </section>
  );
}

export default S1