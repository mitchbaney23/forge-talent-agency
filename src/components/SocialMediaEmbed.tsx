'use client'

import Link from 'next/link'
import { IconTikTok, IconInstagram, IconPlay } from '@/components/icons'

interface SocialMediaEmbedProps {
  platform: 'tiktok' | 'instagram'
  videoId?: string // For TikTok
  postUrl?: string // For Instagram
  title?: string
  creator: string
  className?: string
}

export default function SocialMediaEmbed({
  platform,
  videoId,
  postUrl,
  title,
  creator,
  className = ''
}: SocialMediaEmbedProps) {
  const creatorHandle = creator.startsWith('@') ? creator.slice(1) : creator

  const getUrl = () => {
    if (platform === 'tiktok' && videoId) {
      return `https://www.tiktok.com/@${creatorHandle}/video/${videoId}`
    }
    if (platform === 'instagram' && postUrl) {
      return postUrl
    }
    return '#'
  }

  const url = getUrl()
  const platformLabel = platform === 'tiktok' ? 'TikTok' : 'Instagram'
  const PlatformIcon = platform === 'tiktok' ? IconTikTok : IconInstagram

  return (
    <div className={`aspect-[9/16] bg-forge-ink rounded-xl overflow-hidden ${className}`}>
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full relative group"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <PlatformIcon className="w-10 h-10 text-white/80 mb-5" />

          {title && (
            <h3 className="text-lg font-heading font-semibold text-white mb-2 line-clamp-2">
              {title}
            </h3>
          )}

          <p className="text-forge-orange-light font-medium mb-6">
            {creator.startsWith('@') ? creator : `@${creator}`}
          </p>

          <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-forge-orange group-hover:border-forge-orange transition-colors">
            <IconPlay className="w-6 h-6 text-white ml-0.5" />
          </div>

          <div className="bg-white text-forge-ink px-6 py-2.5 rounded-full text-sm font-semibold group-hover:bg-forge-mist transition-colors">
            Watch on {platformLabel}
          </div>
        </div>
      </Link>
    </div>
  )
}
