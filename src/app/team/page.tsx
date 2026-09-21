import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { team } from '@/data/team'

export const metadata: Metadata = {
  title: 'The Team - Forge Talent Agency',
  description:
    'Meet the people behind Forge — the managers who represent our creators, negotiate the deals, and pick up the phone.',
}

export default function Team() {
  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-28">
        <Reveal variant="lines">
          <h1 className="font-display text-hero font-bold text-espresso">
            <span className="block overflow-hidden">
              <span className="line block" style={{ '--i': 0 } as React.CSSProperties}>
                The people
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="line block" style={{ '--i': 1 } as React.CSSProperties}>
                behind the <em className="font-accent text-flame">deals.</em>
              </span>
            </span>
          </h1>
        </Reveal>
        <Reveal index={2}>
          <p className="mt-8 max-w-2xl text-lg leading-body text-cocoa">
            There are three of us. Whoever answers your first email is who you&apos;ll be working
            with, start to finish.
          </p>
        </Reveal>
      </section>

      {/* Roster */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <h2 className="sr-only">Our talent managers</h2>
        <div className="border-b border-espresso/15">
          {team.map((member, i) => (
            <Reveal key={member.slug} index={i}>
              <article className="grid gap-8 border-t border-espresso/15 py-12 sm:py-16 lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-14">
                {/* Headshot */}
                <div className="max-w-[17rem]">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={`${member.name}, ${member.role} at Forge Talent Agency`}
                      width={800}
                      height={800}
                      sizes="(min-width: 1024px) 17rem, (min-width: 640px) 17rem, 100vw"
                      className="aspect-square w-full rounded-2xl bg-parchment object-cover"
                    />
                  ) : (
                    <div
                      className="flex aspect-square w-full items-center justify-center rounded-2xl bg-parchment"
                      aria-hidden="true"
                    >
                      <span className="font-display text-display-lg font-bold text-flame/30">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Bio */}
                <div className="lg:pt-2">
                  <p className="font-mono text-eyebrow uppercase text-ember">{member.role}</p>
                  <h3 className="mt-3 font-display text-display-md font-bold text-espresso">
                    {member.name}
                  </h3>
                  <p className="mt-5 max-w-2xl text-lg leading-body text-cocoa">
                    {member.background}
                  </p>

                  <dl className="mt-8 space-y-6">
                    <div>
                      <dt className="font-mono text-xs uppercase tracking-[0.18em] text-taupe">
                        Go-to for
                      </dt>
                      <dd className="mt-2 max-w-2xl leading-body text-cocoa">{member.goTo}</dd>
                    </div>

                    {member.wins.length > 0 && (
                      <div>
                        <dt className="font-mono text-xs uppercase tracking-[0.18em] text-taupe">
                          Proud of
                        </dt>
                        <dd className="mt-2">
                          <ul className="max-w-2xl space-y-1.5">
                            {member.wins.map((win) => (
                              <li
                                key={win}
                                className="flex gap-3 leading-body text-cocoa before:mt-[0.7em] before:h-px before:w-4 before:flex-none before:bg-flame before:content-['']"
                              >
                                {win}
                              </li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                    )}

                    {member.personal && (
                      <div>
                        <dt className="font-mono text-xs uppercase tracking-[0.18em] text-taupe">
                          Off the clock
                        </dt>
                        <dd className="mt-2 max-w-2xl leading-body text-cocoa">
                          {member.personal}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-espresso py-24">
        <div className="ember-glow -top-1/3 left-[10%] h-[60vh] w-[80vw] motion-safe:animate-drift" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-display-lg font-bold text-apricot">
              Talk to a real person
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-body text-paper/70">
              Every conversation starts with one of us — not a form letter. Tell us what
              you&apos;re building and we&apos;ll tell you if we&apos;re the right fit.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-ember px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-ember-deep"
              >
                Say hello
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
