import React, { ReactNode } from 'react'

const PhoneMockup = ({children}:{children: ReactNode}) => {
  return (
    
      <div className="mockup-phone my-10 border-primary max-h-[95vh] ">
        <div className="camera"></div>
        <div className="display ">
          <div className="artboard artboard-demo phone-5  overflow-y-scroll">
            {children}
          </div>
        </div>
      </div>
    
  );
}

export default PhoneMockup