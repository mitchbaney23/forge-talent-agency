'use client'

import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

// Lazy load embed components for better performance
const TikTokEmbed = dynamic(() => import('./TikTokEmbed'), {
  loading: () => <div className="animate-pulse bg-gray-200 aspect-[9/16] rounded-lg" />,
  ssr: false
})

const InstagramEmbed = dynamic(() => import('./InstagramEmbed'), {
  loading: () => <div className="animate-pulse bg-gray-200 aspect-[9/16] rounded-lg" />,
  ssr: false
})

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
  const [showEmbed, setShowEmbed] = useState(false)
  const [error] = useState(false)
  const [inView, setInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '50px' }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoadEmbed = () => {
    setShowEmbed(true)
  }

  if (!inView) {
    return (
      <div 
        ref={containerRef}
        className={`relative aspect-[9/16] bg-gray-100 rounded-lg flex items-center justify-center ${className}`}
      >
        <div className="animate-pulse bg-gray-200 w-full h-full rounded-lg" />
      </div>
    )
  }

  if (error) {
    return (
      <div className={`relative aspect-[9/16] bg-gray-100 rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <div className="text-4xl mb-2">⚠️</div>
          <p className="text-gray-600 text-sm">Unable to load {platform} content</p>
        </div>
      </div>
    )
  }

  if (!showEmbed) {
    return (
      <div 
        className={`relative aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden cursor-pointer group ${className}`}
        onClick={handleLoadEmbed}
      >
        {thumbnail ? (
          <Image 
            src={thumbnail} 
            alt={title || `${platform} content`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">
                {platform === 'tiktok' ? '🎵' : '📷'}
              </div>
              <p className="text-gray-600 font-medium">
                {platform === 'tiktok' ? 'TikTok Video' : 'Instagram Post'}
              </p>
            </div>
          </div>
        )}
        
        {/* Play button overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-opacity">
          <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        
        {/* Platform badge */}
        <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium capitalize">
          {platform}
        </div>
        
        {/* Creator info */}
        {creator && (
          <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
            {creator}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {platform === 'tiktok' && videoId ? (
        <TikTokEmbed videoId={videoId} username="plumb.hero" title={title} />
      ) : platform === 'instagram' && postUrl ? (
        <InstagramEmbed postUrl={postUrl} />
      ) : (
        <div className="aspect-[9/16] bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-600">Invalid embed configuration</p>
        </div>
      )}
    </div>
  )
}