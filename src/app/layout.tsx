import './globals.css'
import type { Metadata } from 'next'
import { Questrial } from 'next/font/google'

const inter = Questrial({ subsets: ['latin'], weight: '400'})

export const metadata: Metadata = {
  title: 'Demo Form',
  description: 'Demo Form next app',
}

//Questrial

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
