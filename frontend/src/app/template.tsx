import React from 'react'

const RootTemplate = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <header>header</header>
      <main className="flex min-h-screen flex-col items-center">
        {children}
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default RootTemplate