import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import TikTokEmbed from '@/components/TikTokEmbed'
import { platformIcons } from '@/components/icons'
import { getCreatorBySlug, signedCreators } from '@/data/creators'

export const dynamicParams = false

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/creators"
            className="inline-block text-sm font-medium text-forge-muted hover:text-forge-orange transition-colors mb-8"
          >
            ← All creators
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-forge-orange/60 shrink-0">
              <Image
                src={creator.avatar}
                alt={`${creator.name} profile picture`}
                width={96}
                height={96}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-heading-tight leading-heading text-forge-ink mb-1">
                {creator.name}
              </h1>
              <p className="text-xl text-forge-orange-dark font-medium mb-3">{creator.handle}</p>
              <span className="inline-block bg-forge-mist border border-forge-line text-forge-ink text-xs font-semibold px-3 py-1 rounded-full">
                {creator.niche}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Profile section */}
      <section className="py-20 bg-forge-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Creator info */}
            <div>
              <p className="text-lg text-forge-body leading-body mb-8">{creator.bio}</p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded-xl border border-forge-line">
                  <div className="text-2xl font-heading font-semibold text-forge-orange mb-1">
                    {creator.stats.followers}
                  </div>
                  <div className="text-sm text-forge-muted">Total Followers</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-forge-line">
                  <div className="text-2xl font-heading font-semibold text-forge-orange mb-1">
                    {creator.stats.totalViews}
                  </div>
                  <div className="text-sm text-forge-muted">Total Views</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-forge-line">
                  <div className="text-2xl font-heading font-semibold text-forge-orange mb-1">
                    {creator.stats.engagement}
                  </div>
                  <div className="text-sm text-forge-muted">Avg Engagement</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-forge-line">
                  <div className="text-2xl font-heading font-semibold text-forge-orange mb-1">
                    {creator.platforms.length}
                  </div>
                  <div className="text-sm text-forge-muted">Platforms</div>
                </div>
              </div>

              {/* Platform links */}
              <div className="flex flex-wrap gap-3 mb-8">
                {creator.platforms.map((platform) => {
                  const Icon = platformIcons[platform.name]
                  return (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white border border-forge-line text-forge-ink px-4 py-2 rounded-full text-sm font-semibold hover:border-forge-orange hover:text-forge-orange transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      {platform.label}
                    </a>
                  )
                })}
              </div>

              {/* Focus areas */}
              {creator.focusAreas.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {creator.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="bg-white border border-forge-line text-forge-body text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              )}

              {/* Audience */}
              <div className="bg-white p-6 rounded-xl border border-forge-line">
                <h2 className="text-lg font-heading font-semibold text-forge-ink mb-3">
                  Target Audience
                </h2>
                <p className="text-forge-body">{creator.demographics}</p>
              </div>
            </div>

            {/* Featured video */}
            <div>
              <h2 className="text-2xl font-heading font-semibold tracking-heading-tight text-forge-ink mb-6">
                Featured Video
              </h2>
              <div className="bg-white p-6 rounded-2xl border border-forge-line">
                <TikTokEmbed
                  videoId={creator.featuredVideo.videoId}
                  username={handle}
                  title={creator.featuredVideo.title}
                  className="mb-4"
                />
                <h3 className="text-lg font-heading font-semibold text-forge-ink mb-2">
                  {creator.featuredVideo.title}
                </h3>
                <p className="text-forge-body leading-body mb-4">
                  {creator.featuredVideo.description}
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-forge-orange-dark font-semibold">
                    {creator.featuredVideo.views} views
                  </span>
                  <span className="text-forge-orange-dark font-semibold">
                    {creator.featuredVideo.engagement} engagement
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top videos */}
      {creator.videos.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-heading-tight leading-heading text-forge-ink mb-4">
                Top Performing <span className="text-forge-orange">Content</span>
              </h2>
              <p className="text-xl text-forge-body leading-body max-w-2xl mx-auto">
                The videos that showcase the expertise and personality behind the audience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {creator.videos.map((video) => (
                <div key={video.videoId} className="bg-white rounded-2xl border border-forge-line overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-forge-muted">View Count</span>
                      <span className="text-forge-orange-dark font-heading font-semibold">{video.views}</span>
                    </div>

                    <TikTokEmbed
                      videoId={video.videoId}
                      username={handle}
                      title={video.title}
                      className="mb-4"
                    />

                    <h3 className="text-lg font-heading font-semibold text-forge-ink mb-2">{video.title}</h3>
                    <p className="text-forge-body leading-body text-sm mb-4">{video.description}</p>

                    <div className="flex justify-between items-center pt-4 border-t border-forge-line">
                      <span className="text-sm text-forge-muted">Engagement Rate</span>
                      <span className="text-forge-orange-dark font-heading font-semibold">{video.engagement}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-forge-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-heading-tight leading-heading text-white mb-4">
            Work with <span className="text-forge-orange-light">{creator.name}</span>
          </h2>
          <p className="text-xl text-white/70 leading-body max-w-2xl mx-auto mb-8">
            Tell us about your brand and we&apos;ll put together the right partnership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-forge-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-forge-orange-dark transition-colors"
            >
              Start Your Campaign
            </Link>
            <Link
              href="/creators"
              className="border border-white/40 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-forge-ink transition-colors"
            >
              View All Creators
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
