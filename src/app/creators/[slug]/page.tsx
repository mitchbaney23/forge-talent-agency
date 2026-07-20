import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Reveal from '@/components/Reveal'
import CountUp from '@/components/CountUp'
import TikTokEmbed from '@/components/TikTokEmbed'
import { platformIcons } from '@/components/icons'
import { getCreatorBySlug, signedCreators } from '@/data/creators'
import { industries } from '@/data/industries'
import type { ChipColor } from '@/data/industries'

export const dynamicParams = false

const chipPill: Record<ChipColor, string> = {
  clay: 'bg-clay text-clay-ink',
  sage: 'bg-sage text-sage-ink',
  ochre: 'bg-ochre text-ochre-ink',
  teal: 'bg-teal-tint text-teal-ink',
  plum: 'bg-plum-tint text-plum-ink',
}

export function generateStaticParams() {
  return signedCreators.map((creator) => ({ slug: creator.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const creator = getCreatorBySlug(slug)
  if (!creator) return {}

  return {
    title: `${creator.name} - Forge Talent Agency`,
    description: creator.tagline,
    openGraph: {
      title: `${creator.name} - Forge Talent Agency`,
      description: creator.tagline,
      images: [{ url: creator.avatar }],
    },
  }
}

export default async function CreatorProfile({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const creator = getCreatorBySlug(slug)
  if (!creator) notFound()

  const handle = creator.handle.startsWith('@') ? creator.handle.slice(1) : creator.handle
  const chip = industries.find((i) => i.creatorSlug === creator.slug)?.chip ?? 'clay'

  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <Reveal>
          <Link
            href="/creators"
            className="u-link mb-10 inline-block font-mono text-xs uppercase tracking-[0.15em] text-taupe hover:text-ember"
          >
            ← All creators
          </Link>
        </Reveal>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
          <Reveal index={1}>
            <div className="h-32 w-32 shrink-0 -rotate-2 overflow-hidden rounded-3xl ring-2 ring-flame/50 sm:h-40 sm:w-40">
              <Image
                src={creator.avatar}
                alt={`${creator.name} profile picture`}
                width={160}
                height={160}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </Reveal>
          <Reveal index={2}>
            <div>
              <h1 className="font-display text-display-lg font-bold text-espresso">
                {creator.name}
              </h1>
              <p className="mt-1 font-mono text-lg text-ember">{creator.handle}</p>
              <span
                className={`mt-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold ${chipPill[chip]}`}
              >
                {creator.niche}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Profile */}
      <section className="bg-parchment py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Info column */}
          <div>
            <Reveal>
              <p className="text-lg leading-body text-cocoa">{creator.bio}</p>
            </Reveal>

            <Reveal index={1}>
              <dl className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { label: 'Total followers', value: creator.stats.followers },
                  { label: 'Total views', value: creator.stats.totalViews },
                  { label: 'Avg engagement', value: creator.stats.engagement },
                  { label: 'Platforms', value: String(creator.platforms.length) },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse rounded-2xl bg-paper p-5">
                    <dt className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-taupe">
                      {stat.label}
                    </dt>
                    <dd className="font-display text-3xl font-bold text-flame tabular-nums">
                      <CountUp value={stat.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal index={2}>
              <div className="mt-8 flex flex-wrap gap-3">
                {creator.platforms.map((platform) => {
                  const Icon = platformIcons[platform.name]
                  return (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-espresso/15 bg-paper px-4 py-2 text-sm font-semibold text-espresso transition-colors hover:border-ember hover:text-ember"
                    >
                      <Icon className="h-4 w-4" />
                      {platform.label}
                    </a>
                  )
                })}
              </div>
            </Reveal>

            {creator.focusAreas.length > 0 && (
              <Reveal index={3}>
                <div className="mt-6 flex flex-wrap gap-2">
                  {creator.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-paper px-3 py-1 font-mono text-xs text-cocoa"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </Reveal>
            )}

            <Reveal index={4}>
              <div className="mt-8 rounded-2xl bg-paper p-6">
                <h2 className="font-display text-lg font-semibold text-espresso">
                  Target audience
                </h2>
                <p className="mt-2 leading-body text-cocoa">{creator.demographics}</p>
              </div>
            </Reveal>
          </div>

          {/* Featured video */}
          <Reveal index={1}>
            <h2 className="mb-6 font-display text-display-sm font-semibold text-espresso">
              Featured video
            </h2>
            <div className="rounded-3xl border border-espresso/10 bg-paper p-6">
              <TikTokEmbed
                videoId={creator.featuredVideo.videoId}
                username={handle}
                title={creator.featuredVideo.title}
                className="mb-4"
              />
              <h3 className="font-display text-lg font-semibold text-espresso">
                {creator.featuredVideo.title}
              </h3>
              <p className="mt-2 leading-body text-cocoa">{creator.featuredVideo.description}</p>
              <div className="mt-4 flex justify-between font-mono text-sm">
                <span className="font-semibold text-ember">{creator.featuredVideo.views} views</span>
                <span className="font-semibold text-ember">
                  {creator.featuredVideo.engagement} engagement
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Top videos */}
      {creator.videos.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal className="mb-14 text-center">
            <h2 className="font-display text-display-md font-bold text-espresso">
              Top performing <em className="font-accent text-flame">content</em>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-body text-cocoa">
              The videos that showcase the expertise and personality behind the audience.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {creator.videos.map((video, i) => (
              <Reveal key={video.videoId} index={i} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-espresso/10 bg-white p-6">
                  <div className="mb-4 flex items-center justify-between font-mono text-sm">
                    <span className="text-taupe">View count</span>
                    <span className="font-semibold text-ember">{video.views}</span>
                  </div>

                  <TikTokEmbed
                    videoId={video.videoId}
                    username={handle}
                    title={video.title}
                    className="mb-4"
                  />

                  <h3 className="font-display text-lg font-semibold text-espresso">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-sm leading-body text-cocoa">{video.description}</p>

                  <div className="mt-auto flex items-center justify-between border-t border-espresso/10 pt-4 font-mono text-sm">
                    <span className="text-taupe">Engagement</span>
                    <span className="font-semibold text-ember">{video.engagement}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden bg-espresso py-24">
        <div className="ember-glow -top-1/3 left-[10%] h-[60vh] w-[80vw] motion-safe:animate-drift" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-display-lg font-bold text-apricot">
              Work with {creator.name}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-body text-paper/70">
              Tell us about your brand and we&apos;ll put together the right partnership.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-ember px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-ember-deep"
              >
                Start your campaign
              </Link>
              <Link
                href="/creators"
                className="rounded-full border border-paper/30 px-8 py-4 text-lg font-semibold text-paper transition-colors hover:bg-paper hover:text-espresso"
              >
                View all creators
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
