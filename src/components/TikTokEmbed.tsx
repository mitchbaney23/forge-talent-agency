'use client'

interface TikTokEmbedProps {
  videoId: string;
  className?: string;
}

export default function TikTokEmbed({ videoId, className = '' }: TikTokEmbedProps) {
  return (
    <div className={`tiktok-embed ${className}`}>
      <blockquote 
        className="tiktok-embed" 
        cite={`https://www.tiktok.com/@username/video/${videoId}`}
        data-video-id={videoId}
        style={{ maxWidth: '605px', minWidth: '325px' }}
      >
        <section>
          <a 
            target="_blank" 
            title="@username" 
            href={`https://www.tiktok.com/@username/video/${videoId}`}
          >
            @username
          </a>
        </section>
      </blockquote>
      <script async src="https://www.tiktok.com/embed.js"></script>
    </div>
  )
}