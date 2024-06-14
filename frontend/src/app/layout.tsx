import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/custom.css';
import { metadata as md } from '@/date/homepage';
const inter = Inter({ subsets: ['latin'] });
import Providers from './providers';
import { CookiesProvider } from 'next-client-cookies/server';
import DefaultConsentState from '@/app/DefaultConsentState';
import GTM from '@/lib/GTM';

export const metadata = md;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CookiesProvider>
      <DefaultConsentState>
        <html lang="ro">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <GTM />
        </head>
        <body className={`  ${inter.className}`}>
        <Providers>
          {children}
        </Providers>
        </body>
        </html>
      </DefaultConsentState>
    </CookiesProvider>
  );
}
