import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/custom.css';
import { metadata as md } from '@/date/homepage';
const inter = Inter({ subsets: ['latin'] });
import Providers from './providers';
import { GoogleTagManager } from '@next/third-parties/google'
import { CookiesProvider } from 'next-client-cookies/server';
import DefaultConsentState from '@/app/DefaultConsentState';

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
          <GoogleTagManager gtmId="GTM-5FGZZ26C" />
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
