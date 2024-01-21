'use client'
import React, { CSSProperties, PropsWithChildren } from 'react'

interface ISiteMockup extends PropsWithChildren {
  style?: CSSProperties;
}

import {motion} from 'framer-motion'
const SiteMockup = ({children, style = {}}:ISiteMockup) => {
  return (
    <motion.div style={style} className="mockup-window border bg-base-300">
     
      <div className="flex  justify-center bg-base-200">{children}</div>
      
    </motion.div>
  );
}

export default SiteMockup