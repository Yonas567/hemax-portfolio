"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  once?: boolean
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 50,
  once = true,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    let initialTransform = ""
    switch (direction) {
      case "up":
        initialTransform = `translateY(${distance}px)`
        break
      case "down":
        initialTransform = `translateY(-${distance}px)`
        break
      case "left":
        initialTransform = `translateX(${distance}px)`
        break
      case "right":
        initialTransform = `translateX(-${distance}px)`
        break
    }

    element.style.transform = initialTransform
    element.style.opacity = "0"
    element.style.transition = `transform 0.8s ease-out ${delay}ms, opacity 0.8s ease-out ${delay}ms`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.transform = "translate(0, 0)"
            element.style.opacity = "1"

            if (once) {
              observer.unobserve(element)
            }
          } else if (!once) {
            element.style.transform = initialTransform
            element.style.opacity = "0"
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [delay, direction, distance, once])

  return (
    <div ref={elementRef} className={cn("will-change-transform", className)}>
      {children}
    </div>
  )
}

