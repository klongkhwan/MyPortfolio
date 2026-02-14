import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'khwan-portfolio',
  description: 'khwan portfolio',
  generator: 'khwan portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
