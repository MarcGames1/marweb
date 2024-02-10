import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/custom.css';
import { metadata as md } from '@/date/homepage';
const inter = Inter({ subsets: ['latin'] });
import Providers from './providers';

export const metadata = md;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className={`  ${inter.className}`}>
        <Providers>
          <div className=" min-h-screen bg-homeBg dark:bg-homeBg-dark bg-center bg-repeat bg-cover bg-fixed   w-full">
           
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
