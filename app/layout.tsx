import type {Metadata} from 'next'
import {Geist_Mono, Spline_Sans} from 'next/font/google'
import './globals.css'

const splineSans = Spline_Sans({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '333 Techno',
  description: 'Eventos, artistas y experiencias techno.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${splineSans.variable} ${geistMono.variable} min-h-screen bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
