"use client"

import * as React from "react"
import { testimonials } from "@/data/testimonials"
import { TestimonialCard } from "@/components//card_carousel/card_carousel"
import styles from "@/components/carousel/carousel.module.scss"

export function TestimonialCarousel() {
  const [isDragging, setIsDragging] = React.useState(false)
  const [startX, setStartX] = React.useState(0)
  const [scrollLeft, setScrollLeft] = React.useState(0)
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const velocityRef = React.useRef(0)
  const lastMouseXRef = React.useRef(0)
  const lastTimestampRef = React.useRef(0)

  React.useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let animationId: number
    const baseSpeed = 0.5 // Base auto-scroll speed in pixels per frame
    const friction = 0.95 // Friction coefficient (0-1)

    const animate = (timestamp: number) => {
      if (!lastTimestampRef.current) lastTimestampRef.current = timestamp
      const deltaTime = timestamp - lastTimestampRef.current
      lastTimestampRef.current = timestamp

      if (!isDragging) {
        // Apply friction to slow down the momentum
        velocityRef.current *= friction

        // If velocity is very low, reset it to prevent perpetual tiny movements
        if (Math.abs(velocityRef.current) < 0.1) velocityRef.current = 0

        // Apply momentum and base speed
        carousel.scrollLeft += velocityRef.current * deltaTime + baseSpeed
      }

      // Loop the carousel
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0
      } else if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = carousel.scrollWidth / 2
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [isDragging])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current!.offsetLeft)
    setScrollLeft(carouselRef.current!.scrollLeft)
    lastMouseXRef.current = e.pageX
    velocityRef.current = 0
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current!.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current!.scrollLeft = scrollLeft - walk

    // Calculate velocity
    const currentMouseX = e.pageX
    velocityRef.current = (lastMouseXRef.current - currentMouseX) * 0.1 // Adjust multiplier to change "fling" speed
    lastMouseXRef.current = currentMouseX
  }

  return (
    <div className={styles.carouselWrapper}>
      <div
        ref={carouselRef}
        className={`${styles.carousel} w-full overflow-hidden cursor-grab active:cursor-grabbing select-none`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className={styles.carouselTrack}>
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className={`${styles.carouselItem} w-[300px] flex-shrink-0 px-2`}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.gradientOverlay} ${styles.leftGradient}`}></div>
      <div className={`${styles.gradientOverlay} ${styles.rightGradient}`}></div>
    </div>
  )
}

