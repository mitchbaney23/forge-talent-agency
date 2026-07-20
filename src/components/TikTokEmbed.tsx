'use client'

import { useEffect, useState } from 'react'
import SocialMediaEmbed from '@/components/SocialMediaEmbed'

interface TikTokEmbedProps {
  videoId: string
  username: string
  title?: string
  className?: string
}

export default function TikTokEmbed({ videoId, username, title, className = '' }: TikTokEmbedProps) {
  const [embedFailed, setEmbedFailed] = useState(false)
  const handle = username.startsWith('@') ? username.slice(1) : username
  const tiktokUrl = `https://www.tiktok.com/@${handle}/video/${videoId}`

  useEffect(() => {
    let cancelled = false

    // TikTok's embed.js scans and hydrates every .tiktok-embed blockquote each
    // time it executes, and exposes no re-process API — so inject a fresh script
    // per mount. This also covers client-side navigation, where a previously
    // loaded script would never see the new blockquote.
    const script = document.createElement('script')
    script.src = 'https://www.tiktok.com/embed.js'
    script.async = true
    script.onerror = () => {
      if (!cancelled) setEmbedFailed(true)
    }
    document.body.appendChild(script)

    // Poll for the iframe instead of a single fixed deadline, so slow networks
    // get time to hydrate before we swap in the fallback card.
    const check = (attempt: number) => {
      if (cancelled) return
      const embedElement = document.querySelector(`[data-video-id="${videoId}"]`)
      if (!embedElement || embedElement.querySelector('iframe')) return
      if (attempt >= 10) {
        setEmbedFailed(true)
        return
      }
      timer = window.setTimeout(() => check(attempt + 1), 1000)
    }
    let timer = window.setTimeout(() => check(0), 2000)

    return () => {
      cancelled = true
      clearTimeout(timer)
      script.remove()
    }
  }, [videoId])

  if (embedFailed) {
    return (
      <SocialMediaEmbed
        platform="tiktok"
        videoId={videoId}
        title={title}
        creator={handle}
        className={className}
      />
    )
  }

  return (
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
            title={`@${handle}`}
            href={tiktokUrl}
            rel="noopener noreferrer"
          >
            @{handle}
          </a>
          {title && <p>{title}</p>}
        </section>
      </blockquote>
    </div>
  )
}
