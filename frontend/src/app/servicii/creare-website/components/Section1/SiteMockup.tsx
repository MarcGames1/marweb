
import React, { CSSProperties, PropsWithChildren } from 'react'

interface ISiteMockup extends PropsWithChildren {
  style?: CSSProperties;
}


const SiteMockup = ({children, style = {}}:ISiteMockup) => {
  return (
    <div style={style} className="mockup-window border bg-base-300">
     
      <div className="flex  justify-center bg-base-200">{children}</div>
      
    </div>
  );
}

export default SiteMockup