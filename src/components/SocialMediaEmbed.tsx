'use client'

import Link from 'next/link'

interface SocialMediaEmbedProps {
  platform: 'tiktok' | 'instagram'
  videoId?: string // For TikTok
  postUrl?: string // For Instagram
  thumbnail?: string
  title?: string
  creator?: string
  className?: string
}

export default function SocialMediaEmbed({
  platform,
  videoId,
  postUrl,
  thumbnail,
  title,
  creator,
  className = ''
}: SocialMediaEmbedProps) {
  // Create the appropriate URL based on platform
  const getUrl = () => {
    if (platform === 'tiktok' && videoId) {
      return `https://www.tiktok.com/@plumb.hero/video/${videoId}`
    }
    if (platform === 'instagram' && postUrl) {
      return postUrl
    }
    return '#'
  }

  const url = getUrl()

  return (
    <div className={`aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden ${className}`}>
      <Link 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full relative group"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-blue-100" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          {/* Platform icon */}
          <div className="text-6xl mb-4">
            {platform === 'tiktok' ? '🎵' : '📷'}
          </div>
          
          {/* Title */}
          {title && (
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
              {title}
            </h3>
          )}
          
          {/* Creator handle */}
          <p className="text-forge-orange font-semibold mb-4">
            {platform === 'tiktok' ? '@plumb.hero' : creator || '@plumb.hero'}
          </p>
          
          {/* Watch button */}
          <div className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold group-hover:bg-gray-800 transition-colors">
            Watch on {platform === 'tiktok' ? 'TikTok' : 'Instagram'}
          </div>
        </div>
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        
        {/* Platform badge */}
        <div className="absolute top-3 left-3 bg-black text-white px-3 py-1 rounded-full text-xs font-bold capitalize">
          {platform}
        </div>
      </Link>
    </div>
  )
}