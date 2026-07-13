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
  metadataBase: new URL('https://entraday.com'),
  title: {
    default: 'Entraday | Leading Enterprise IT Solutions & Managed Services',
    template: '%s | Entraday',
  },
  description:
    'Entraday Global Private Limited delivers high-performance enterprise IT solutions, managed IT services, and strategic IT consultancy. Transform your business infrastructure with Bangalore\'s trusted technology partner.',
  keywords: [
    'Entraday',
    'Entraday Global Private Limited',
    'Entraday Bangalore',
    'Entraday IT solutions',
    'enterprise IT solutions',
    'managed IT services',
    'IT consultancy',
    'cloud solutions India',
    'IT infrastructure management',
    'Bangalore IT company',
  ],
  authors: [{ name: 'Entraday Global Private Limited', url: 'https://entraday.com' }],
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
    title: 'Entraday Global Private Limited | Enterprise IT Solutions',
    description:
      'Powering your tomorrow, today. Entraday Global Private Limited delivers top-tier managed services and strategic IT consultancy for modern businesses.',
    url: 'https://entraday.com',
    siteName: 'Entraday Global Private Limited',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Entraday Global Private Limited - Enterprise IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entraday Global Private Limited | Enterprise IT Solutions',
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
  // Organization Schema Object (Google Rich Snippets ke liye)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Entraday Global Private Limited',
    'legalName': 'Entraday Global Private Limited',
    'url': 'https://entraday.com',
    'logo': 'https://entraday.com/logo.png',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Electronic City Phase 2',
      'addressRegion': 'Bangalore',
      'addressCountry': 'IN'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+91-9558813396',
      'contactType': 'customer service',
      'email': 'info@entraday.com'
    }
  }

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {/* Schema injection code exact yahan query execute karega */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
