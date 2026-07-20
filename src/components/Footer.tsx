import Link from 'next/link'
import CurrentYear from '@/components/CurrentYear'
import { IconLinkedIn, IconTikTok, IconInstagram, IconMail, IconMapPin } from '@/components/icons'

export default function Footer() {
  return (
    <footer className="bg-forge-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-semibold mb-4">Forge Talent Agency</h3>
            <p className="text-white/70 mb-4">
              A boutique talent agency connecting brands with creators who have real expertise and genuine audiences — and helping those creators build lasting partnerships.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/forge-talent-agency"
                aria-label="Forge Talent Agency on LinkedIn"
                className="text-white/70 hover:text-forge-orange-light transition-colors"
              >
                <IconLinkedIn className="h-6 w-6" />
              </a>
              <a
                href="https://www.tiktok.com/@forge.talent"
                aria-label="Forge Talent Agency on TikTok"
                className="text-white/70 hover:text-forge-orange-light transition-colors"
              >
                <IconTikTok className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/forge.talent.agency"
                aria-label="Forge Talent Agency on Instagram"
                className="text-white/70 hover:text-forge-orange-light transition-colors"
              >
                <IconInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-white/70 hover:text-forge-orange-light transition-colors">About Us</Link></li>
              <li><Link href="/creators" className="text-white/70 hover:text-forge-orange-light transition-colors">Our Creators</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-forge-orange-light transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-white/70">
              <p className="flex items-center gap-2">
                <IconMail className="h-4 w-4 shrink-0" />
                <a href="mailto:mitch@forgetalentagency.com" className="hover:text-forge-orange-light transition-colors">
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

        <div className="border-t border-white/15 mt-8 pt-8 text-center text-white/70">
          <p>&copy; <CurrentYear /> Forge Talent Agency, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
