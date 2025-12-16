"use client"

import { useEffect, useRef, useState } from "react"

interface CounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

export function Counter({ end, duration = 2000, prefix = "", suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          const startTime = Date.now()

          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)

            setCount(Math.floor(end * progress))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [end, duration])

  return (
    <div ref={elementRef}>
      {prefix}
      {count}
      {suffix}
    </div>
  )
}
