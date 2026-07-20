import Link from 'next/link'
import CurrentYear from '@/components/CurrentYear'
import { IconLinkedIn, IconTikTok, IconInstagram, IconMail, IconMapPin } from '@/components/icons'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-espresso text-paper">
      <div className="ember-glow -top-1/3 left-[5%] h-[60vh] w-[90vw] motion-safe:animate-drift" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-2xl font-semibold tracking-tight mb-4">
              Forge Talent Agency
            </h3>
            <p className="max-w-md leading-body text-paper/70 mb-6">
              A boutique talent agency connecting brands with creators who have real expertise and
              genuine audiences — and helping those creators build{' '}
              <em className="font-accent text-amber">lasting</em> partnerships.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/forge-talent-agency"
                aria-label="Forge Talent Agency on LinkedIn"
                className="text-paper/70 transition-colors hover:text-amber"
              >
                <IconLinkedIn className="h-6 w-6" />
              </a>
              <a
                href="https://www.tiktok.com/@forge.talent"
                aria-label="Forge Talent Agency on TikTok"
                className="text-paper/70 transition-colors hover:text-amber"
              >
                <IconTikTok className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/forge.talent.agency"
                aria-label="Forge Talent Agency on Instagram"
                className="text-paper/70 transition-colors hover:text-amber"
              >
                <IconInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
              Quick links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="u-link text-paper/80 transition-colors hover:text-amber">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/creators" className="u-link text-paper/80 transition-colors hover:text-amber">
                  Our creators
                </Link>
              </li>
              <li>
                <Link href="/contact" className="u-link text-paper/80 transition-colors hover:text-amber">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
              Contact
            </h4>
            <div className="space-y-2 text-paper/80">
              <p className="flex items-center gap-2">
                <IconMail className="h-4 w-4 shrink-0" />
                <a
                  href="mailto:mitch@forgetalentagency.com"
                  className="u-link transition-colors hover:text-amber"
                >
                  mitch@forgetalentagency.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <IconMapPin className="h-4 w-4 shrink-0" />
                Raleigh, NC
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-paper/15 pt-6 text-center text-sm text-paper/60">
          <p>
            &copy; <CurrentYear /> Forge Talent Agency, LLC. All rights reserved.
          </p>
        </div>
      </div>

      {/* Giant wordmark — the award-site signoff */}
      <div
        className="pointer-events-none relative select-none overflow-hidden leading-none"
        aria-hidden="true"
      >
        <p className="font-display text-center text-[23vw] font-bold tracking-tight text-paper/[0.06] -mb-[0.24em]">
          FORGE
        </p>
      </div>
    </footer>
  )
}
