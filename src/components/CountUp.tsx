'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  /** Display string like '1M+', '50M+', '8.5%' — the leading number animates */
  value: string
  className?: string
}

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

// Counts the numeric prefix up once when scrolled into view. The FINAL
// value is what's server-rendered — no-JS visitors, crawlers, and reader
// mode always see the real number; the zero state only exists for the
// ~1.4s the animation actually runs.
export default function CountUp({ value, className = '' }: CountUpProps) {
  const match = value.match(/^([\d.]+)(.*)$/)
  const target = match ? parseFloat(match[1]) : null
  const suffix = match ? match[2] : value
  const decimals = match && match[1].includes('.') ? match[1].split('.')[1].length : 0

  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState<string | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || target === null) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const duration = 1400
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          setDisplay((target * easeOutExpo(t)).toFixed(decimals))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (target === null) {
    return <span className={className}>{value}</span>
  }

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display === null ? value : `${display}${suffix}`}
    </span>
  )
}
