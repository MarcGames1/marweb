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
    <head>
      <link rel="icon" href="/favicon.ico" sizes="any"/>
    </head>
    <body className={`  ${inter.className}`}>
    <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
