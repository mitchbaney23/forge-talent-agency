'use client'

import { useState, type ReactNode } from 'react'

// Infinite marquee: exact duplicate track (aria-hidden), masked edges,
// static under reduced motion. Pauses on hover/focus via CSS, and has a
// real toggle button so keyboard and touch users can pause it too
// (WCAG 2.2.2). CSS in globals.
export default function Marquee({
  children,
  className = '',
  label,
}: {
  children: ReactNode
  className?: string
  label: string
}) {
  const [paused, setPaused] = useState(false)

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div
        className={`marquee min-w-0 flex-1 ${paused ? 'is-paused' : ''}`}
        role="marquee"
        aria-label={label}
      >
        <div className="marquee-track">
          <ul className="flex shrink-0 items-center gap-12">{children}</ul>
          <ul className="flex shrink-0 items-center gap-12" aria-hidden="true">
            {children}
          </ul>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused(!paused)}
        aria-pressed={paused}
        aria-label={paused ? 'Play scrolling ticker' : 'Pause scrolling ticker'}
        className="mr-4 hidden shrink-0 rounded-full border border-paper/25 px-3 py-1 font-mono text-xs text-paper/70 transition-colors hover:border-paper/60 hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber motion-safe:block"
      >
        {paused ? '▶' : '❚❚'}
      </button>
    </div>
  )
}
