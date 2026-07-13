import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://entraday.com'), // Yahan apna actual domain dalein, isse SEO relative URLs correct hote hain
  title: {
    default: 'Entraday | Leading Enterprise IT Solutions & Managed Services',
    template: '%s | Entraday',
  },
  description:
    'Entraday delivers high-performance enterprise IT solutions, managed IT services, and strategic IT consultancy. Transform your business infrastructure with Bangalore\'s trusted technology partner.',
  keywords: [
    'Entraday',
    'Entraday Bangalore',
    'Entraday IT solutions',
    'enterprise IT solutions',
    'managed IT services',
    'IT consultancy',
    'cloud solutions India',
    'IT infrastructure management',
    'Bangalore IT company',
  ],
  authors: [{ name: 'Entraday', url: 'https://entraday.com' }],
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
  openGraph: {
    title: 'Entraday | Enterprise IT Solutions & Managed Services',
    description:
      'Powering your tomorrow, today. Entraday delivers top-tier managed services and strategic IT consultancy for modern businesses.',
    url: 'https://entraday.com',
    siteName: 'Entraday',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png', // public folder me 1200x630px ki image rank hone me madad karegi
        width: 1200,
        height: 630,
        alt: 'Entraday - Enterprise IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entraday | Enterprise IT Solutions',
    description: 'Enterprise IT Solutions & Managed Services for the modern business.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0B3D91',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
