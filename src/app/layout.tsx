import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Session } from 'next-auth'
import Header from '@/components/header'
import { SessionProvider } from '@/components/session-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode,
  session: Session;
}) {
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </SessionProvider>
    </html>
  )
}
