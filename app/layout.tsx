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
  title: {
    default: 'Entraday | Powering Your Tomorrow, Today',
    template: '%s | Entraday',
  },
  description:
    'Entraday delivers enterprise IT solutions, managed services, and strategic consultancy. Powering your tomorrow, today.',
  keywords: [
    'Entraday',
    'enterprise IT',
    'managed services',
    'IT consultancy',
    'cloud solutions',
    'MIT product',
    'IT infrastructure',
    'Bangalore IT company',
  ],
  authors: [{ name: 'Entraday' }],
  generator: 'v0.app',
  openGraph: {
    title: 'Entraday | Powering Your Tomorrow, Today',
    description:
      'Enterprise IT Solutions & Managed Services for the modern business.',
    type: 'website',
    locale: 'en_US',
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
