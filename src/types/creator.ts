export type PlatformName = 'tiktok' | 'instagram' | 'youtube' | 'facebook'

export interface CreatorVideo {
  videoId: string
  title: string
  views: string
  engagement: string
  description: string
}

export interface CreatorPlatform {
  name: PlatformName
  label: string
  url: string
}

export interface Creator {
  /** Unique route param, e.g. 'plumb-hero' */
  slug: string
  name: string
  handle: string
  avatar: string
  /** The creator's niche lives here, not in site-wide copy */
  niche: string
  /** One-liner for roster cards */
  tagline: string
  /** Detail-page paragraph */
  bio: string
  /** Only signed creators render publicly */
  signed: boolean
  /** Drives the homepage featured card */
  featured: boolean
  stats: {
    followers: string
    totalViews: string
    engagement: string
  }
  platforms: CreatorPlatform[]
  demographics: string
  focusAreas: string[]
  featuredVideo: CreatorVideo
  videos: CreatorVideo[]
}
