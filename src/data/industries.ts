import { getCreatorBySlug } from '@/data/creators'
import type { Creator } from '@/types/creator'

export type ChipColor = 'clay' | 'sage' | 'ochre' | 'teal' | 'plum'

export interface Industry {
  key: string
  label: string
  /** Short friendly line shown on the tile */
  blurb: string
  /** Pastel chip pair used for this industry's tiles and chips */
  chip: ChipColor
  /** Slug of the signed creator representing this industry, if any */
  creatorSlug?: string
}

// The industry map drives the tile showcase. An industry with a signed
// creator renders their spotlight tile; the rest render as open seats
// ("now scouting") that funnel to /contact. Add or reorder freely.
export const industries: Industry[] = [
  {
    key: 'trades-home',
    label: 'Trades & Home',
    blurb: 'Real fixes, real know-how, millions of views.',
    chip: 'clay',
    creatorSlug: 'plumb-hero',
  },
  {
    key: 'food-drink',
    label: 'Food & Drink',
    blurb: 'Chefs, bakers, and home cooks people actually trust.',
    chip: 'ochre',
  },
  {
    key: 'fitness-sport',
    label: 'Fitness & Sport',
    blurb: 'Coaches and athletes with communities that show up.',
    chip: 'sage',
  },
  {
    key: 'tech-gaming',
    label: 'Tech & Gaming',
    blurb: 'Builders, reviewers, and players with real credibility.',
    chip: 'teal',
  },
  {
    key: 'beauty-style',
    label: 'Beauty & Style',
    blurb: 'Artists whose audiences copy every move.',
    chip: 'plum',
  },
  {
    key: 'travel-outdoors',
    label: 'Travel & Outdoors',
    blurb: 'Explorers who take millions along for the ride.',
    chip: 'sage',
  },
  {
    key: 'music-culture',
    label: 'Music & Culture',
    blurb: 'Voices shaping what people listen to and love.',
    chip: 'plum',
  },
  {
    key: 'money-business',
    label: 'Money & Business',
    blurb: 'Straight talk that makes complicated things simple.',
    chip: 'teal',
  },
]

export interface IndustryTile extends Industry {
  creator?: Creator
}

/** Industries with their signed creator resolved (undefined = open seat). */
export const industryTiles: IndustryTile[] = industries.map((industry) => ({
  ...industry,
  creator: industry.creatorSlug ? getCreatorBySlug(industry.creatorSlug) : undefined,
}))
