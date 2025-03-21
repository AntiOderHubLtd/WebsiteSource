import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Meow Executor',
  description: 'Created by Aftr',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
