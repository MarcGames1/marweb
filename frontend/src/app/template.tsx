import Footer from '@/components/Footer';
import { Navbar } from '@/components/Header';
import React from 'react'
import styles from './template.module.css'
const RootTemplate = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
     <Footer />
    </>
  );
}

export default RootTemplate