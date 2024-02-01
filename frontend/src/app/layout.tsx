import { Inter } from 'next/font/google';
import './styles/globals.css';
import './styles/custom.css';
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
      <body className={` -z-20  relative bg-fixed  ${inter.className}`}>
        <Providers>
          <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
           
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
