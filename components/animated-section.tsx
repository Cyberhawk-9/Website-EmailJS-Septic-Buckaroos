"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale"
  delay?: number
  className?: string
}

export function AnimatedSection({ children, animation = "fade-up", delay = 0, className }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const animations = {
    "fade-up": "translate-y-16 opacity-0",
    "fade-in": "opacity-0",
    "slide-left": "-translate-x-16 opacity-0",
    "slide-right": "translate-x-16 opacity-0",
    scale: "scale-95 opacity-0",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        !isVisible && animations[animation],
        isVisible && "translate-y-0 translate-x-0 scale-100 opacity-100",
        className,
      )}
    >
      {children}
    </div>
  )
}
