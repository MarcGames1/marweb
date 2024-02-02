'use client'
import { ThemeProvider } from 'next-themes';

import { ToastContainer } from 'react-toastify';

export default function Providers({ children }: { children: React.ReactNode }) {

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