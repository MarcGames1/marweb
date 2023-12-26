import React from 'react'
import HomepageData  from '@/date/homepage'
import { typography } from '@/date/styles'
import { ChatBuble } from '..'
import {PhoneMockup} from '..'
const DeCeNoi = () => {
    const {S4} = HomepageData
  return (
    <section>
      <h2 className={typography.h2}>{S4.heading}</h2>
      <div className="container flex ">

     <PhoneMockup>
      {S4.content.map((item, index) =>{
        
        return (
          <div key={index}>
            <ChatBuble
              text={item.heading}
              end={index % 2 === 0}
              variant={(index % 2 !== 0)? 'accent' : 'secondary'}
              />
            <ChatBuble
              text={item.description}
              end={index % 2 === 0}
              variant={(index % 2 !== 0)? 'accent' : 'secondary'}
              />
          </div>
        );
      })}
     </PhoneMockup>
      </div>
    </section>
  );
}

export default DeCeNoi