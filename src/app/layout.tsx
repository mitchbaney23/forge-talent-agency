import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['600', '800'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Forge Talent Agency - Premier TikTok & Instagram Talent Management',
  description: 'Professional talent agency specializing in TikTok and Instagram influencer management. Connect with top creators and grow your brand.',
  keywords: ['talent agency', 'influencer marketing', 'TikTok creators', 'Instagram influencers', 'brand partnerships', 'social media management'],
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
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
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
    title: 'Forge Talent Agency - Premier TikTok & Instagram Talent Management',
    description: 'Professional talent agency specializing in TikTok and Instagram influencer management. Connect with top creators and grow your brand.',
    url: 'https://forgetalentagency.com',
    siteName: 'Forge Talent Agency',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forge Talent Agency - Premier TikTok & Instagram Talent Management',
    description: 'Professional talent agency specializing in TikTok and Instagram influencer management. Connect with top creators and grow your brand.',
    creator: '@forgetalentagency',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}