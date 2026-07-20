import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'About - Forge Talent Agency',
  description:
    'Forge is a boutique creator talent agency — small by design, built on real skills and real influence.',
}

const approach = [
  {
    n: '01',
    title: 'Hands-on representation',
    blurb: 'Work directly with Mitch, the founder — no account managers, no phone trees.',
  },
  {
    n: '02',
    title: 'Tailored partnerships',
    blurb: 'The right creator with the right brand, every time. Fit over volume.',
  },
  {
    n: '03',
    title: 'Full-service deal management',
    blurb: 'From negotiation to execution, the details are handled so creators can create.',
  },
]

export default function About() {
  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-28">
        <Reveal variant="lines">
          <h1 className="font-display text-hero font-bold text-espresso">
            <span className="block overflow-hidden">
              <span className="line block" style={{ '--i': 0 } as React.CSSProperties}>
                Real skills,
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="line block" style={{ '--i': 1 } as React.CSSProperties}>
                real <em className="font-accent text-flame">influence.</em>
              </span>
            </span>
          </h1>
        </Reveal>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="space-y-6 text-lg leading-body text-cocoa">
            <p>
              Forge Talent Agency was founded to bridge the gap between hardworking creators and
              the brands that align with their craft. We believe in authentic storytelling — the
              kind that resonates because it&apos;s built on real skill, real passion, and real
              people.
            </p>
            <p>
              Right now, Forge is a boutique agency — small by design — focused on giving every
              creator dedicated attention and custom deal-making. Our first represented creator
              has already built a community of over{' '}
              <strong className="font-semibold text-ember">1 million followers</strong> and
              generated{' '}
              <strong className="font-semibold text-ember">tens of millions of organic views</strong>{' '}
              by sharing real expertise with an audience that trusts him.
            </p>
            <p>
              We help brands connect with creators who bring genuine authority to their
              industries, and we help creators turn their audience into sustainable partnerships.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Approach — numbered index */}
      <section className="bg-parchment py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12">
            <p className="mb-4 font-mono text-eyebrow uppercase text-ember">Our approach</p>
            <h2 className="font-display text-display-lg font-bold text-espresso">
              Small by <em className="font-accent text-flame">design</em>
            </h2>
          </Reveal>
          <div className="border-b border-espresso/15">
            {approach.map((item, i) => (
              <Reveal key={item.n} index={i}>
                <div className="grid grid-cols-[3.5rem_1fr] items-baseline gap-4 border-t border-espresso/15 px-4 py-8 sm:grid-cols-[4rem_1fr_auto] sm:px-6">
                  <span className="font-mono text-sm text-ember">{item.n}</span>
                  <span className="font-display text-display-sm font-semibold text-espresso">
                    {item.title}
                  </span>
                  <span className="col-start-2 max-w-md leading-body text-cocoa sm:col-start-3 sm:text-right">
                    {item.blurb}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's note */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <figure className="relative rounded-3xl bg-parchment p-8 sm:p-12">
            <span
              className="pointer-events-none absolute -top-8 left-6 font-accent text-[7rem] leading-none text-flame/30 sm:text-[9rem]"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote className="relative space-y-5 text-lg italic leading-body text-cocoa">
              <p>
                When I started Forge Talent Agency, my goal was simple: help talented people get
                the recognition and opportunities they deserve without losing the authenticity
                that made them stand out in the first place.
              </p>
              <p>
                With a background in sales and business development, I know how to build
                relationships that last — and how to negotiate deals that work for both creators
                and brands.
              </p>
              <p>
                Whether you&apos;re a creator ready to grow your partnerships or a company looking
                for a trusted voice in your industry, I&apos;m here to make sure every connection
                counts.
              </p>
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-flame" aria-hidden="true" />
              <span className="font-display text-lg font-semibold text-espresso">
                Mitch, Founder
              </span>
              <span className="font-mono text-xs text-taupe">Forge Talent Agency</span>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-espresso py-24">
        <div className="ember-glow -top-1/3 left-[10%] h-[60vh] w-[80vw] motion-safe:animate-drift" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-display-lg font-bold text-apricot">
              Ready to connect?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-body text-paper/70">
              Whether you&apos;re a creator looking for representation or a brand seeking
              authentic partnerships, we&apos;d love to hear from you.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-ember px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-ember-deep"
              >
                Get started
              </Link>
              <Link
                href="/creators"
                className="rounded-full border border-paper/30 px-8 py-4 text-lg font-semibold text-paper transition-colors hover:bg-paper hover:text-espresso"
              >
                Meet our creators
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
