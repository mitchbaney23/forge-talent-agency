'use client'

// Static prerendering bakes the build-time year into server HTML; rendering
// the year in a client component keeps it current without a redeploy.
export default function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>
}
