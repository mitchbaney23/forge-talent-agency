import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}