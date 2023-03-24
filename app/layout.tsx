import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
import { Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Julian Reza',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className=" antialiased tracking-tighter">
        <Providers>
          <div className=" bg-slate-50 dark:bg-slate-900/50 transition duration-300 min-h-screen px-8">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
