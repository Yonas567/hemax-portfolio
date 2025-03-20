"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down"
}

export default function ParallaxSection({ children, className, speed = 0.5, direction = "up" }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const windowHeight = window.innerHeight

      // Check if section is in viewport
      if (scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
        const yPos = (scrollY - sectionTop) * speed * (direction === "up" ? -1 : 1)
        section.style.transform = `translate3d(0, ${yPos}px, 0)`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed, direction])

  return (
    <div ref={sectionRef} className={cn("will-change-transform", className)}>
      {children}
    </div>
  )
}

