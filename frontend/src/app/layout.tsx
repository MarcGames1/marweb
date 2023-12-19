import { Inter } from 'next/font/google'
import './globals.css'
import { metadata as md} from '@/date/homepage'
const inter = Inter({ subsets: ['latin'] })


 
export const metadata = md

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="marwebTheme" lang="ro">
      <body className={` -z-20 bg-primary-gradient ${inter.className}`}>{children}</body>
    </html>
  );
}
