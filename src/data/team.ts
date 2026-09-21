export interface TeamMember {
  slug: string
  name: string
  role: string
  /** Square-cropped headshot in /public/assets/team. Omit while one is pending. */
  photo?: string
  /** Career background — one line, shown under the name */
  background: string
  /** What they're the go-to person for */
  goTo: string
  /** Wins they're proud of, work or otherwise */
  wins: string[]
  /** Off-the-clock detail that makes them a person */
  personal: string
}

// Single source of truth for the team page. Add a member here and the
// page picks them up — order in this array is the order on the page.
export const team: TeamMember[] = [
  {
    slug: 'mitch',
    name: 'Mitch',
    role: 'Founder',
    photo: '/assets/team/mitch.jpg',
    background:
      'Founded Forge to bridge the gap between hardworking creators and the brands that align with their craft, with a background in sales and business development.',
    goTo: 'Building relationships that last — and negotiating deals that work for creators and brands alike.',
    wins: [],
    personal: '',
  },
  {
    slug: 'john-caldwell',
    name: 'John Caldwell',
    role: 'Talent Manager',
    photo: '/assets/team/john-caldwell.webp',
    background:
      '8 years across sales, operations, business development, and relationship management.',
    goTo: 'Knowing a guy, finding a guy, or becoming the guy.',
    wins: [
      'Proud husband',
      'President’s Club winner',
      'Incredibly average half marathon runner',
    ],
    personal:
      'Watching the Indianapolis Colts get his hopes up every Sunday, and taking long walks on the beach with his wife and their black Lab.',
  },
  {
    slug: 'kelli-langley',
    name: 'Kelli',
    role: 'Talent Manager',
    photo: '/assets/team/kelli-langley.webp',
    background:
      '5+ years in business development before becoming a full-time stay-at-home mom.',
    goTo: 'Being everyone’s hype woman — supporting her peers in all the things that inspire them.',
    wins: [
      'Established a new territory and grew it over 120% in year one',
      'Went all in as Mom for her two kids for the last four years',
    ],
    personal:
      'She loves spending time with family and exploring new places through travel and food.',
  },
]
