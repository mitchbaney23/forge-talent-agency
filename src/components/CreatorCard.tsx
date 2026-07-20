import Link from 'next/link'
import Image from 'next/image'
import type { Creator } from '@/types/creator'
import { platformIcons } from '@/components/icons'

export default function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <Link
      href={`/creators/${creator.slug}`}
      className="group block bg-white border border-forge-line rounded-2xl p-8 hover:shadow-md hover:border-forge-orange/40 transition-all"
    >
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-forge-line group-hover:ring-forge-orange/60 transition-all mr-4 shrink-0">
          <Image
            src={creator.avatar}
            alt={`${creator.name} profile picture`}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-heading font-semibold tracking-heading-tight text-forge-ink">
            {creator.name}
          </h2>
          <p className="text-forge-orange-dark font-medium">{creator.handle}</p>
        </div>
      </div>

      <span className="inline-block bg-forge-mist border border-forge-line text-forge-ink text-xs font-semibold px-3 py-1 rounded-full mb-4">
        {creator.niche}
      </span>

      <p className="text-forge-body leading-body mb-6">{creator.tagline}</p>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div>
          <div className="text-lg font-heading font-semibold text-forge-orange-dark">
            {creator.stats.followers}
          </div>
          <div className="text-xs text-forge-muted">Followers</div>
        </div>
        <div>
          <div className="text-lg font-heading font-semibold text-forge-orange-dark">
            {creator.stats.totalViews}
          </div>
          <div className="text-xs text-forge-muted">Views</div>
        </div>
        <div>
          <div className="text-lg font-heading font-semibold text-forge-orange-dark">
            {creator.stats.engagement}
          </div>
          <div className="text-xs text-forge-muted">Engagement</div>
        </div>
      </div>

      <div className="flex items-center gap-3 text-forge-muted">
        {creator.platforms.map((platform) => {
          const Icon = platformIcons[platform.name]
          return (
            <span key={platform.name} title={platform.label}>
              <Icon className="w-4 h-4" />
              <span className="sr-only">{platform.label}</span>
            </span>
          )
        })}
        <span className="ml-auto text-sm font-medium text-forge-ink group-hover:text-forge-orange transition-colors">
          View profile →
        </span>
      </div>
    </Link>
  )
}
