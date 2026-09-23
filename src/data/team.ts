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
      'Mitch has been in sales for over 10 years and has a passion for getting his clients the best deal possible and ensuring organization through any transaction. Mitch started Forge Talent Agency to build a better system to help creators connect with brands and Forge meaningful relationships to create better content and outcomes for everyone involved.',
    goTo: 'Building relationships that last — and negotiating deals that work for creators and brands alike.',
    wins: ['His three cats', 'His founding partners — for going on the journey with him'],
    personal: '',
  },
  {
    slug: 'john-caldwell',
    name: 'John',
    role: 'Founding Partner',
    photo: '/assets/team/john-caldwell.webp',
    background:
      '8 years across sales, operations, business development, and relationship management.',
    goTo: 'Knowing a guy, finding a guy, or becoming the guy.',
    wins: ['President’s Club winner', 'Incredibly average half marathon runner'],
    personal:
      'Watching the Indianapolis Colts get his hopes up every Sunday, and taking long walks on the beach with his wife and their black Lab.',
  },
  {
    slug: 'kelli-langley',
    name: 'Kelli',
    role: 'Founding Partner',
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
