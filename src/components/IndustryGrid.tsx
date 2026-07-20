import Link from 'next/link'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { industryTiles } from '@/data/industries'
import type { ChipColor } from '@/data/industries'

// Full literal class strings so Tailwind's scanner generates them
const chipStyles: Record<
  ChipColor,
  { bg: string; soft: string; ink: string }
> = {
  clay: {
    bg: 'bg-clay',
    soft: 'bg-clay/60',
    ink: 'text-clay-ink',
  },
  sage: {
    bg: 'bg-sage',
    soft: 'bg-sage/60',
    ink: 'text-sage-ink',
  },
  ochre: {
    bg: 'bg-ochre',
    soft: 'bg-ochre/60',
    ink: 'text-ochre-ink',
  },
  teal: {
    bg: 'bg-teal-tint',
    soft: 'bg-teal-tint/60',
    ink: 'text-teal-ink',
  },
  plum: {
    bg: 'bg-plum-tint',
    soft: 'bg-plum-tint/60',
    ink: 'text-plum-ink',
  },
}

// Bento grid of industries. The tile with a signed creator is promoted to
// a double-wide feature cell with a nested creator chip; open industries
// render as "now scouting" seats that funnel to /contact.
export default function IndustryGrid() {
  const featured = industryTiles.filter((t) => t.creator)
  const open = industryTiles.filter((t) => !t.creator)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
      {featured.map((tile, i) => {
        const c = chipStyles[tile.chip]
        const creator = tile.creator!
        return (
          <Reveal key={tile.key} index={i} className="h-full sm:col-span-2 lg:row-span-2">
            <Link
              href={`/creators/${creator.slug}`}
              className={`group flex h-full flex-col justify-between rounded-3xl ${c.bg} p-8 lg:p-10 transition-transform duration-300 ease-out hover:-translate-y-1`}
            >
              <div>
                <p className={`font-mono text-xs uppercase tracking-[0.2em] ${c.ink} mb-4`}>
                  On the roster
                </p>
                <h3 className={`font-display kinetic-title text-display-md ${c.ink}`}>
                  {tile.label}
                </h3>
                <p className={`mt-3 max-w-sm leading-body ${c.ink}`}>{tile.blurb}</p>
              </div>

              <div>
                <div className="mt-10 flex items-center gap-4 rounded-2xl bg-paper/80 p-4">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-flame/50">
                    <Image
                      src={creator.avatar}
                      alt={`${creator.name} profile picture`}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display font-semibold text-espresso">{creator.name}</p>
                    <p className="font-mono text-xs text-ember">{creator.handle}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="font-display text-xl font-semibold text-espresso tabular-nums">
                      {creator.stats.followers}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-taupe">
                      followers
                    </p>
                  </div>
                </div>
                <span className="mt-4 inline-block font-semibold text-espresso">
                  Meet {creator.name}{' '}
                  <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        )
      })}

      {open.map((tile, i) => {
        const c = chipStyles[tile.chip]
        return (
          <Reveal key={tile.key} index={(i + 1) % 4} className="h-full">
            <Link
              href="/contact"
              className={`group flex h-full flex-col justify-between rounded-3xl ${c.soft} p-6 lg:p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_32px_-16px_rgba(36,22,16,0.25)]`}
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-taupe mb-3">
                  Now scouting
                </p>
                <h3 className={`font-display kinetic-title text-display-sm ${c.ink}`}>
                  {tile.label}
                </h3>
                <p className={`mt-2 text-sm leading-body ${c.ink}`}>{tile.blurb}</p>
              </div>
              <span className={`mt-6 font-mono text-xs font-medium ${c.ink}`}>
                This seat is open{' '}
                <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </Reveal>
        )
      })}
    </div>
  )
}
