'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import Link from 'next/link'

// Extend the Window interface to include TikTok embed functionality
declare global {
  interface Window {
    tiktokEmbed?: {
      load: () => void;
    };
  }
}

interface TikTokEmbedProps {
  videoId: string;
  username?: string;
  title?: string;
  className?: string;
}

export default function TikTokEmbed({ videoId, username = 'plumb.hero', title, className = '' }: TikTokEmbedProps) {
  const [embedFailed, setEmbedFailed] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const tiktokUrl = `https://www.tiktok.com/@${username}/video/${videoId}`
  
  useEffect(() => {
    // Check if embed loaded after script loads
    if (scriptLoaded) {
      const timer = setTimeout(() => {
        const embedElement = document.querySelector(`[data-video-id="${videoId}"]`)
        if (embedElement && !embedElement.querySelector('iframe')) {
          setEmbedFailed(true)
        }
      }, 3000) // Wait 3 seconds for embed to load
      
      return () => clearTimeout(timer)
    }
  }, [scriptLoaded, videoId])
  
  useEffect(() => {
    // Trigger TikTok embed script to process new embeds
    if (typeof window !== 'undefined' && window.tiktokEmbed) {
      window.tiktokEmbed.load()
    }
  }, [videoId])

  // Fallback component for when embed fails
  if (embedFailed) {
    return (
      <div className={`aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden ${className}`}>
        <Link 
          href={tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full relative group"
        >
          {/* TikTok-style background */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-blue-100" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            {/* TikTok icon */}
            <div className="text-6xl mb-4">🎵</div>
            
            {/* Title */}
            {title && (
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                {title}
              </h3>
            )}
            
            {/* Creator handle */}
            <p className="text-forge-orange font-semibold mb-4">@{username}</p>
            
            {/* Watch on TikTok button */}
            <div className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold group-hover:bg-gray-800 transition-colors">
              Watch on TikTok
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
          
          {/* TikTok badge */}
          <div className="absolute top-3 left-3 bg-black text-white px-3 py-1 rounded-full text-xs font-bold">
            TikTok
          </div>
        </Link>
      </div>
    )
  }

  return (
    <>
      <Script
        src="https://www.tiktok.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          setScriptLoaded(true)
          // Initialize TikTok embeds when script loads
          if (window.tiktokEmbed) {
            window.tiktokEmbed.load()
          }
        }}
      />
      <div className={`tiktok-embed-container ${className}`}>
        <blockquote 
          className="tiktok-embed" 
          cite={tiktokUrl}
          data-video-id={videoId}
          style={{ maxWidth: '100%', minWidth: '325px' }}
        >
          <section>
            <a 
              target="_blank" 
              title={`@${username}`} 
              href={tiktokUrl}
              rel="noopener noreferrer"
            >
              @{username}
            </a> 
            {title && <p>{title}</p>}
          </section>
        </blockquote>
      </div>
    </>
  )
}