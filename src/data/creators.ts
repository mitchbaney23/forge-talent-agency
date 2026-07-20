import type { Creator } from '@/types/creator'

// Single source of truth for the roster. To publish a new creator,
// add an entry (or flip `signed` on a staged one) — every page,
// the sitemap, and the homepage featured card update from here.
export const creators: Creator[] = [
  {
    slug: 'plumb-hero',
    name: 'Plumb Hero',
    handle: '@plumb.hero',
    avatar: '/assets/images/plumbhero.jpeg',
    niche: 'Plumbing & Home Trades',
    tagline: 'Real repairs, real expertise — plumbing content that educates and entertains.',
    bio: 'Expert plumber sharing professional tips, tool reviews, and behind-the-scenes trade content that educates and entertains both professionals and homeowners.',
    signed: true,
    featured: true,
    stats: {
      followers: '1M+',
      totalViews: '50M+',
      engagement: '8.5%',
    },
    platforms: [
      { name: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@plumb.hero' },
      { name: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/plumb.hero' },
      { name: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@plumbhero' },
      { name: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/plumb.hero' },
    ],
    demographics: '25-54 years, 65% male, homeowners and skilled-trade professionals',
    focusAreas: ['Plumbing', 'Tools & Gear', 'DIY & Home'],
    featuredVideo: {
      videoId: '7498894934058061098',
      title: 'Latest Viral Plumbing Tip',
      views: '1.5M',
      engagement: '22.1%',
      description: "His most recent viral hit that's taking TikTok by storm",
    },
    videos: [
      {
        videoId: '7445044110823525674',
        title: 'How to Replace Tub Spout. Easy',
        views: '22.7M',
        engagement: '15.2%',
        description: 'Educational content showing the #1 mistake that causes expensive plumbing repairs',
      },
      {
        videoId: '7374179038476209450',
        title: 'Fixing a Main Back Up on a house',
        views: '2.1M',
        engagement: '12.8%',
        description: 'Diagnosing and clearing a stubborn main-line backup, start to finish',
      },
      {
        videoId: '7416496548118301998',
        title: 'Main Water Line leak on PolyP pipe',
        views: '4.3M',
        engagement: '18.5%',
        description: 'Tracking down and repairing a hidden main water line leak',
      },
    ],
  },
  // Staged prospect template — stays off the site until signed is flipped to true.
  // {
  //   slug: 'creator-slug',
  //   name: 'Creator Name',
  //   handle: '@handle',
  //   avatar: '/assets/images/creator.jpeg',
  //   niche: 'Their Niche',
  //   tagline: 'One-line hook for the roster card.',
  //   bio: 'Detail-page paragraph about the creator.',
  //   signed: false,
  //   featured: false,
  //   stats: { followers: '', totalViews: '', engagement: '' },
  //   platforms: [{ name: 'tiktok', label: 'TikTok', url: '' }],
  //   demographics: '',
  //   focusAreas: [],
  //   featuredVideo: { videoId: '', title: '', views: '', engagement: '', description: '' },
  //   videos: [],
  // },
]

export const signedCreators = creators.filter((c) => c.signed)

export const getCreatorBySlug = (slug: string) =>
  signedCreators.find((c) => c.slug === slug)

export const featuredCreator: Creator | undefined =
  signedCreators.find((c) => c.featured) ?? signedCreators[0]
