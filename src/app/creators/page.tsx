import type { Metadata } from 'next'
import Link from 'next/link'
import CreatorCard from '@/components/CreatorCard'
import { IconPlus } from '@/components/icons'
import { signedCreators } from '@/data/creators'

export const metadata: Metadata = {
  title: 'Our Creators - Forge Talent Agency',
  description:
    'Meet the creators Forge represents — vetted voices with real expertise and audiences that trust them.',
}

export default function Creators() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-heading-tight leading-heading text-forge-ink mb-6">
            Creators with <span className="text-forge-orange">real expertise</span>
          </h1>
          <p className="text-xl md:text-2xl text-forge-body leading-body max-w-3xl mx-auto">
            Every creator we represent has built their audience on genuine skill — and the trust that comes with it.
          </p>
        </div>
      </section>

      {/* Roster grid */}
      <section className="py-20 bg-forge-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signedCreators.map((creator) => (
              <CreatorCard key={creator.slug} creator={creator} />
            ))}

            {/* Apply tile */}
            <Link
              href="/contact"
              className="group flex flex-col items-center justify-center text-center border-2 border-dashed border-forge-line rounded-2xl p-8 min-h-[320px] hover:border-forge-orange/60 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-white border border-forge-line flex items-center justify-center mb-5 text-forge-muted group-hover:text-forge-orange group-hover:border-forge-orange/60 transition-colors">
                <IconPlus className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-heading font-semibold tracking-heading-tight text-forge-ink mb-2">
                Our roster is growing
              </h2>
              <p className="text-forge-body leading-body mb-4">
                We&apos;re selective about who we represent. Think you&apos;re a fit?
              </p>
              <span className="text-sm font-semibold text-forge-orange-dark">
                Apply for representation →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Selective band */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-heading-tight leading-heading text-forge-ink mb-6">
            Small by design
          </h2>
          <p className="text-lg text-forge-body leading-body">
            Forge is a boutique agency on purpose. We keep our roster small so every creator gets dedicated attention, custom deal-making, and partnerships that actually fit their audience — and every brand gets a creator who can genuinely represent them.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forge-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-heading-tight leading-heading text-white mb-4">
            Want to work with our <span className="text-forge-orange-light">creators?</span>
          </h2>
          <p className="text-xl text-white/70 leading-body max-w-2xl mx-auto mb-8">
            Tell us about your brand and we&apos;ll match you with the right voice.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-forge-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-forge-orange-dark transition-colors"
          >
            Start the conversation
          </Link>
        </div>
      </section>
    </div>
  )
}
