import '../styles/globals.css'
import type { Metadata } from 'next'
import { Questrial } from 'next/font/google'
import StyledComponentsRegistry from "@/styles/antd/StyleRegistry";
import AntdStariProvider from "@/styles/antd/AntdStariProvider";

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
      <body className={inter.className}>
      <StyledComponentsRegistry>
        <AntdStariProvider>
          {children}
        </AntdStariProvider>
      </StyledComponentsRegistry>
      </body>
    </html>
  )
}
