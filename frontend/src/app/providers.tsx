'use client'
import { ThemeProvider } from 'next-themes';
import { ReactNode, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';

export default function Providers({ children }: { children: React.ReactNode }) {
   useEffect(() => {
     AOS.init({ duration: 1200, disable: 'mobile' });
     AOS.refresh();
   }, []);
  return (
    <div data-aos="zoom-in">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </div>
  );
}