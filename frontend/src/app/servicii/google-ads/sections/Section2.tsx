import { H } from "@/components";
import Section2Col from "@/components/Layout/Section2Col";
import { TextColor } from "@/components/Typography/H";
import { SectionWithCards } from "@/date/types";

export const Section2 = ({heading, content }:SectionWithCards) => {

    return (
      <Section2Col
        leftside={<LeftSide heading={heading} content={content} />}
        rightside={
          <>
            {' '}
            <H>{heading}</H>
          </>
        }
      />
    );
};




const LeftSide = ({ content }: SectionWithCards) => {
  return (
    <>
     

      <div>
        {content.map((c, idx) => {
          return (
            <>
              <div
                key={String(
                  c.heading?.toLocaleString() || idx + 'xCollapsable' + idx
                )}
                tabIndex={0}
                className={`${TextColor.primary} border-2 collapse collapse-arrow mb-5  border-base-300`}
              >
                <div className="collapse-title text-xl font-medium">
                  {c.heading}
                </div>
                <div className="collapse-content">{c.description}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};