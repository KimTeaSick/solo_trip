import { Viewport } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height'
}

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="ko">
      <head></head>
      <body>
        {children}
      </body>
    </html >
  )
}
