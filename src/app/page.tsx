import Link from 'next/link'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import Marquee from '@/components/Marquee'
import CountUp from '@/components/CountUp'
import IndustryGrid from '@/components/IndustryGrid'
import { featuredCreator } from '@/data/creators'
import { industries } from '@/data/industries'

const cycleWords = ['plumbing.', 'cooking.', 'lifting.', 'gaming.', 'makeup.']

const services = [
  {
    n: '01',
    title: 'Brand partnerships',
    blurb: 'We match creators with brands their audience will actually believe.',
  },
  {
    n: '02',
    title: 'Deals & contracts',
    blurb: 'Negotiation, paperwork, and terms that protect the creator.',
  },
  {
    n: '03',
    title: 'Growth & strategy',
    blurb: 'Content insight and career planning beyond the next post.',
  },
]

export default function Home() {
  return (
    <div className="bg-paper">
      {/* ------------------------------------------------ Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[7fr_5fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-24">
          <div>
            <Reveal>
              <p className="mb-6 font-mono text-eyebrow uppercase text-taupe">
                Creator talent agency · Raleigh, NC
              </p>
            </Reveal>
            <Reveal variant="lines">
              <h1 className="font-display text-hero font-bold text-espresso">
                <span className="block overflow-hidden">
                  <span className="line block" style={{ '--i': 0 } as React.CSSProperties}>
                    Creators with
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="line block" style={{ '--i': 1 } as React.CSSProperties}>
                    real skill in
                  </span>
                </span>
                <span className="block overflow-hidden pb-[0.08em]">
                  <span className="line block" style={{ '--i': 2 } as React.CSSProperties}>
                    <span className="sr-only">what they do best.</span>
                    <span className="word-cycle font-accent text-flame" aria-hidden="true">
                      <ul>
                        {[...cycleWords, cycleWords[0]].map((word, i) => (
                          <li key={i} className="leading-[1.12]">
                            {word}
                          </li>
                        ))}
                      </ul>
                    </span>
                  </span>
                </span>
              </h1>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-8 max-w-xl text-lg leading-body text-cocoa">
                We&apos;re Forge — a boutique talent agency for people who built real audiences by
                being genuinely good at something. We handle the deals; they keep making the work.
              </p>
            </Reveal>
            <Reveal index={3}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/contact"
                  className="rounded-full bg-ember px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-ember-deep"
                >
                  Work with our creators
                </Link>
                <Link href="/contact" className="u-link py-2 font-semibold text-ember">
                  I&apos;m a creator — say hi →
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Floating featured-creator card */}
          {featuredCreator && (
            <Reveal index={2} className="justify-self-center lg:justify-self-end">
              <Link
                href={`/creators/${featuredCreator.slug}`}
                className="group block w-72 rotate-2 rounded-3xl bg-white p-4 shadow-[0_24px_60px_-24px_rgba(36,22,16,0.35)] transition-transform duration-300 ease-out hover:rotate-0 sm:w-80"
              >
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={featuredCreator.avatar}
                    alt={`${featuredCreator.name} profile picture`}
                    width={320}
                    height={320}
                    priority
                    className="aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-end justify-between px-2 pb-1 pt-4">
                  <div>
                    <p className="font-display text-xl font-semibold text-espresso">
                      {featuredCreator.name}
                    </p>
                    <p className="font-mono text-xs text-ember">{featuredCreator.handle}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-xl font-semibold text-ember tabular-nums">
                      {featuredCreator.stats.followers}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-taupe">
                      followers
                    </p>
                  </div>
                </div>
                <p className="rounded-xl bg-parchment px-3 py-2 text-center font-mono text-[11px] uppercase tracking-[0.15em] text-cocoa">
                  Featured talent →
                </p>
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      {/* ------------------------------------------- Marquee */}
      <section className="border-y border-espresso/10 bg-espresso py-5">
        <Marquee label="Industries our creators cover">
          {industries.map((industry) => (
            <li key={industry.key} className="flex items-center gap-12">
              <span className="font-display text-lg font-medium text-paper/80">
                {industry.label}
              </span>
              <span className="text-flame" aria-hidden="true">
                ✦
              </span>
            </li>
          ))}
        </Marquee>
      </section>

      {/* --------------------------------------- Industry bento */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-4 font-mono text-eyebrow uppercase text-ember">The roster</p>
          <h2 className="font-display text-display-lg font-bold text-espresso">
            One agency, <em className="font-accent text-flame">every</em> industry
          </h2>
          <p className="mt-4 text-lg leading-body text-cocoa">
            We sign selectively — one authentic voice per niche, never competitors. Here&apos;s
            who holds a seat, and where the next ones are open.
          </p>
        </Reveal>
        <IndustryGrid />
      </section>

      {/* -------------------------------- Featured creator band */}
      {featuredCreator && (
        <section className="relative overflow-hidden bg-espresso">
          <div className="ember-glow -top-1/4 left-[27%] h-[70vh] w-[80vw] motion-safe:animate-drift" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[6fr_5fr] lg:px-8">
            <div>
              <Reveal>
                <p className="mb-4 font-mono text-eyebrow uppercase text-amber">Featured talent</p>
                <h2 className="font-display text-display-lg font-bold text-apricot">
                  {featuredCreator.name}
                </h2>
                <p className="mt-2 font-mono text-sm text-amber">
                  {featuredCreator.handle} · {featuredCreator.niche}
                </p>
              </Reveal>
              <Reveal index={1}>
                <p className="mt-6 max-w-lg leading-body text-paper/80">{featuredCreator.bio}</p>
              </Reveal>
              <Reveal index={2}>
                <dl className="mt-10 grid grid-cols-3 gap-6">
                  {[
                    { label: 'Followers', value: featuredCreator.stats.followers },
                    { label: 'Total views', value: featuredCreator.stats.totalViews },
                    { label: 'Engagement', value: featuredCreator.stats.engagement },
                  ].map((stat) => (
                    <div key={stat.label} className="flex flex-col">
                      <dt className="order-2 font-mono text-[11px] uppercase tracking-[0.15em] text-paper/50">
                        {stat.label}
                      </dt>
                      <dd className="font-display text-4xl font-bold text-amber sm:text-5xl">
                        <CountUp value={stat.value} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
              <Reveal index={3}>
                <Link
                  href={`/creators/${featuredCreator.slug}`}
                  className="mt-10 inline-block rounded-full bg-paper px-8 py-4 text-lg font-semibold text-espresso transition-colors hover:bg-parchment"
                >
                  See the work →
                </Link>
              </Reveal>
            </div>
            <Reveal index={1} className="justify-self-center lg:justify-self-end">
              <div className="w-64 overflow-hidden rounded-t-full rounded-b-3xl border border-paper/15 sm:w-80">
                <Image
                  src={featuredCreator.avatar}
                  alt={`${featuredCreator.name} profile picture`}
                  width={320}
                  height={400}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ------------------------------------ Services index */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal className="mb-12">
          <p className="mb-4 font-mono text-eyebrow uppercase text-ember">What we do</p>
          <h2 className="font-display text-display-lg font-bold text-espresso">
            The unglamorous work, <em className="font-accent text-flame">handled</em>
          </h2>
        </Reveal>
        <div className="border-b border-espresso/15">
          {services.map((service, i) => (
            <Reveal key={service.n} index={i}>
              <Link
                href="/contact"
                className="group grid grid-cols-[3.5rem_1fr] items-baseline gap-4 border-t border-espresso/15 px-4 py-8 transition-colors duration-300 ease-out hover:bg-espresso sm:grid-cols-[4rem_1fr_auto] sm:px-6"
              >
                <span className="font-mono text-sm text-ember transition-colors group-hover:text-amber">
                  {service.n}
                </span>
                <span className="font-display text-display-sm font-semibold text-espresso transition-colors group-hover:text-paper">
                  {service.title}
                </span>
                <span className="col-start-2 max-w-md leading-body text-cocoa transition-colors group-hover:text-paper/85 sm:col-start-3 sm:text-right">
                  {service.blurb}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------- Dual audience */}
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-24 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="h-full">
          <div className="flex h-full flex-col rounded-3xl bg-parchment p-8 lg:p-10">
            <p className="mb-4 font-mono text-eyebrow uppercase text-ember">For brands</p>
            <h3 className="font-display text-display-sm font-semibold text-espresso">
              Borrow trust that took years to build
            </h3>
            <p className="mt-4 leading-body text-cocoa">
              Our creators earned their audiences with real expertise — when they vouch for your
              product, it lands like a friend&apos;s recommendation, not an ad.
            </p>
            <Link href="/contact" className="u-link mt-auto pt-8 font-semibold text-ember">
              Start a campaign →
            </Link>
          </div>
        </Reveal>
        <Reveal index={1} className="h-full">
          <div className="flex h-full flex-col rounded-3xl bg-parchment p-8 lg:p-10">
            <p className="mb-4 font-mono text-eyebrow uppercase text-ember">For creators</p>
            <h3 className="font-display text-display-sm font-semibold text-espresso">
              Keep creating. We&apos;ll handle the business.
            </h3>
            <p className="mt-4 leading-body text-cocoa">
              Deal negotiation, contracts, and brand matchmaking from people who pick up the
              phone. Commission-based — we only win when you do.
            </p>
            <Link href="/contact" className="u-link mt-auto pt-8 font-semibold text-ember">
              Apply for representation →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ------------------------------------------ Big CTA */}
      <section className="bg-flame">
        <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-display-lg font-bold text-espresso">
              Let&apos;s build something <em className="font-accent">people trust</em>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-2xl leading-body text-espresso">
              One conversation is all it takes. Tell us about your brand — or your channel — and
              we&apos;ll take it from there.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-block rounded-full bg-espresso px-9 py-4 text-lg font-semibold text-paper transition-transform duration-300 ease-out hover:scale-[1.03]"
            >
              Say hello
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
