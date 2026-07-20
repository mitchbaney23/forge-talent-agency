'use client'

import { useEffect, useState } from 'react'

// "Someone's home" header device: live local time for the agency's city.
export default function LocalTime() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          timeZone: 'America/New_York',
        }).format(new Date())
      )
    update()
    const id = setInterval(update, 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="font-mono text-xs tracking-widest text-taupe" suppressHydrationWarning>
      Raleigh, NC{time ? ` · ${time}` : ''}
    </span>
  )
}
