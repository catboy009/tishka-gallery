import './globals.css'
import { cn } from '@/lib/utils'
import { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

const cartographcf = localFont({
  variable: '--font-cartographcf',
  src: [
    {
      path: '../../public/fonts/CartographCF-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CartographCF-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CartographCF-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
})

export const viewport: Viewport = {
  themeColor: '#161616',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://cat.catboy.at'),
  title: 'tishka cat',
  description: 'meow',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'tishka cat',
    card: 'summary_large_image',
    description: 'meow',
  },
  openGraph: {
    title: {
      template: '%s | tishka cat',
      default: 'tishka cat',
    },
    description: 'meow',
    siteName: 'tishka cat',
    locale: 'en-US',
    type: 'website',
    url: 'https://cat.catboy.at/',
  },
  icons: {
    icon: '/favicon.png',
    apple: 'apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://cat.catboy.at',
  },
  manifest: '/site.webmanifest',
  other: {
    'darkreader-lock': '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={cn(
        'scroll-smooth font-sans text-text bg-base',
        'antialiased selection:bg-surface1 leading-relaxed',
        cartographcf.variable,
      )}
    >
      <body>
        <div className='mx-auto px-6 pt-6 pb-20'>
          {children}
        </div>
      </body>
    </html>
  )
}
