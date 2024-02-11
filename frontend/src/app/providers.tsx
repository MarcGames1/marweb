'use client'
import { ThemeProvider } from 'next-themes';
import dynamic from 'next/dynamic';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

 function Providers({ children }: { children: React.ReactNode }) {

  return (
    <div>
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

export default dynamic(() => Promise.resolve(Providers), {
  ssr: false,
});