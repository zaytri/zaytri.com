import clsx from 'clsx'
import type { Metadata, Viewport } from 'next'
import { Grandstander, Nunito } from 'next/font/google'
import './globals.css'

const title = {
  default: 'Zaytri ~ Glitch Witch of Twitch',
  template: '%s ~ Zaytri Zone',
}
const description = 'Welcome to the Zaytri Zone'

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://zaytri.com/'),
  openGraph: {
    title,
    description,
    url: 'https://zaytri.com/',
    type: 'website',
    images: [
      {
        url: '/zaytri.jpg',
        alt: "Zaytri's Profile Picture",
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#a9e694',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          nunito.variable,
          grandstander.variable,
          'bg-gradient-to-b from-[#A9E694] to-white bg-fixed',
        )}
      >
        {children}
      </body>
    </html>
  )
}

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

const grandstander = Grandstander({
  subsets: ['latin'],
  variable: '--font-grandstander',
  display: 'swap',
})
