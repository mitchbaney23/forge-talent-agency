'use client'

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Stagger index — multiplies the transition delay (70ms steps) */
  index?: number
  /** 'block' fades/rises the wrapper; 'lines' drives .line children (masked rise) */
  variant?: 'block' | 'lines'
  style?: CSSProperties
}

// Adds .is-inview once when ~15% visible, then disconnects. The hidden
// state lives inside a prefers-reduced-motion media query in globals.css,
// so content is always visible without JS or with motion off.
export default function Reveal({
  children,
  className = '',
  index = 0,
  variant = 'block',
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-inview')
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${variant === 'lines' ? 'line-mask' : 'reveal'} ${className}`}
      style={{ ...style, '--i': index } as CSSProperties}
    >
      {children}
    </div>
  )
}
