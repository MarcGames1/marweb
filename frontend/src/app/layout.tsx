import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MarWeb',
  description: 'Agentie Marketing ONline',
}

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
