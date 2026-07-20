import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Forge Talent Agency',
  description:
    "Start a campaign or apply for representation — tell us about your brand or your channel and we'll take it from there.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
