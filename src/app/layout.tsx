import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Forge Talent Agency - Creator Talent Management',
  description: 'A boutique talent agency representing creators with real expertise and genuine audiences. We connect brands with the right creators and manage partnerships end to end.',
  keywords: ['talent agency', 'creator management', 'creator marketing', 'brand partnerships', 'creator economy', 'social media management'],
  authors: [{ name: 'Forge Talent Agency' }],
  creator: 'Forge Talent Agency',
  publisher: 'Forge Talent Agency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://forgetalentagency.com'),
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/favicon/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/favicon/web-app-manifest-192x192.png', sizes: '192x192' },
      { rel: 'icon', url: '/favicon/web-app-manifest-512x512.png', sizes: '512x512' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    title: 'Forge Talent Agency - Creator Talent Management',
    description: 'A boutique talent agency representing creators with real expertise and genuine audiences. We connect brands with the right creators and manage partnerships end to end.',
    url: 'https://forgetalentagency.com',
    siteName: 'Forge Talent Agency',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forge Talent Agency - Creator Talent Management',
    description: 'A boutique talent agency representing creators with real expertise and genuine audiences. We connect brands with the right creators and manage partnerships end to end.',
  },
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
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Forge Talent Agency',
  url: 'https://forgetalentagency.com',
  logo: 'https://forgetalentagency.com/favicon/web-app-manifest-512x512.png',
  description:
    'A boutique talent agency representing creators with real expertise and genuine audiences.',
  email: 'mitch@forgetalentagency.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Raleigh',
    addressRegion: 'NC',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.instagram.com/forge.talent.agency',
    'https://www.tiktok.com/@forge.talent',
    'https://linkedin.com/company/forge-talent-agency',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:text-forge-ink focus:px-4 focus:py-2 focus:rounded-lg focus:ring-2 focus:ring-forge-orange"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}