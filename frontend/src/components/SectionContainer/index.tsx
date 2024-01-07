import React, { PropsWithChildren } from 'react'

const SectionContainer = ({children}:PropsWithChildren) => {
  return (
    <section className="min-h-screen min-w-screen  overflow-x-clip">
      {children}
    </section>
  );
}

export default SectionContainer