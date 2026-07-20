import type { Metadata } from 'next'
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  Instrument_Serif,
  JetBrains_Mono,
} from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  axes: ['opsz'],
})

const body = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

const accent = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-accent',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
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
    images: [{ url: '/favicon/web-app-manifest-512x512.png', width: 512, height: 512 }],
  },
  twitter: {
    card: 'summary',
    title: 'Forge Talent Agency - Creator Talent Management',
    description: 'A boutique talent agency representing creators with real expertise and genuine audiences. We connect brands with the right creators and manage partnerships end to end.',
    images: ['/favicon/web-app-manifest-512x512.png'],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${accent.variable} ${mono.variable} font-sans`}
      >
        {/* Runs at parse time, before first paint, so reveal-hidden styles
            only ever apply when JS is genuinely available */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:text-espresso focus:px-4 focus:py-2 focus:rounded-lg focus:ring-2 focus:ring-ember"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  )
}