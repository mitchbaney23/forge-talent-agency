import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import IndustryGrid from '@/components/IndustryGrid'
import { signedCreators } from '@/data/creators'

export const metadata: Metadata = {
  title: 'Our Creators - Forge Talent Agency',
  description:
    'Meet the creators Forge represents — vetted voices with real expertise and audiences that trust them, one per industry.',
}

export default function Creators() {
  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-28">
        <Reveal variant="lines">
          <h1 className="font-display text-hero font-bold text-espresso">
            <span className="block overflow-hidden">
              <span className="line block" style={{ '--i': 0 } as React.CSSProperties}>
                One voice
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="line block" style={{ '--i': 1 } as React.CSSProperties}>
                per <em className="font-accent text-flame">industry.</em>
              </span>
            </span>
          </h1>
        </Reveal>
        <Reveal index={2}>
          <p className="mt-8 max-w-2xl text-lg leading-body text-cocoa">
            We keep the roster deliberately small — every creator we represent gets our full
            attention, and no two compete for the same audience. Signed seats are shown below;
            everything else is open.
          </p>
        </Reveal>
      </section>

      {/* Bento grid */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <h2 className="sr-only">The roster, by industry</h2>
        <IndustryGrid />
      </section>

      {/* Roster gate — industry-standard "ask us" posture */}
      <section className="relative overflow-hidden bg-espresso py-24">
        <div className="ember-glow -bottom-1/3 left-1/3 h-[70vh] w-[80vw] motion-safe:animate-drift" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-mono text-eyebrow uppercase text-amber">
              {signedCreators.length === 1
                ? `${signedCreators[0].stats.totalViews} combined views · every major platform`
                : `${signedCreators.length} creators · every major platform`}
            </p>
            <Link href="/contact" className="group mt-6 block">
              <span
                className="block font-display text-display-lg font-bold text-transparent transition-colors duration-300 group-hover:text-apricot/40"
                style={{ WebkitTextStroke: '1.5px rgba(245,183,138,0.5)' }}
                aria-hidden="true"
              >
                Request the roster
              </span>
              <span className="block font-display text-display-lg font-bold text-apricot">
                Request the roster
              </span>
            </Link>
          </Reveal>
          <Reveal index={1}>
            <p className="mx-auto mt-6 max-w-xl leading-body text-paper/70">
              Tell us who you&apos;re trying to reach and we&apos;ll match you with the right
              creator — including talent we&apos;re signing that isn&apos;t public yet.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Creator application band */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid items-center gap-10 rounded-3xl bg-parchment p-8 lg:grid-cols-[7fr_5fr] lg:p-14">
            <div>
              <p className="mb-4 font-mono text-eyebrow uppercase text-ember">For creators</p>
              <h2 className="font-display text-display-md font-bold text-espresso">
                Think you should hold one of these <em className="font-accent text-flame">seats?</em>
              </h2>
              <p className="mt-4 max-w-lg leading-body text-cocoa">
                We&apos;re selective on purpose — but if you&apos;ve built a genuine audience
                around real expertise, we want to hear from you. Commission-based, no upfront
                fees, ever.
              </p>
            </div>
            <div className="lg:justify-self-end">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-ember px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-ember-deep"
              >
                Apply for representation
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
