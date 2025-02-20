"use client"

import * as React from "react"
import { testimonials } from "@/data/testimonials"
import { TestimonialCard } from "@/components/card_carousel/card_carousel"
import styles from "@/components/carousel/carousel.module.scss"
import { useCallback, useRef } from "react"

export function TestimonialCarousel() {
  const [isDragging, setIsDragging] = React.useState(false)
  const [startX, setStartX] = React.useState(0)
  const [scrollLeft, setScrollLeft] = React.useState(0)
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const velocityRef = React.useRef(0)
  const lastTouchXRef = useRef(0)
  const lastTimestampRef = useRef(0)

  const animate = useCallback(
    (timestamp: number) => {
      const deltaTime = timestamp - lastTimestampRef.current
      lastTimestampRef.current = timestamp

      if (!isDragging) {
        // Apply friction to slow down the momentum
        velocityRef.current *= 0.95 // Friction coefficient (0-1)

        // If velocity is very low, reset it to prevent perpetual tiny movements
        if (Math.abs(velocityRef.current) < 0.1) velocityRef.current = 0

        // Apply momentum and base speed
        const carousel = carouselRef.current
        if (carousel) {
          carousel.scrollLeft += velocityRef.current * deltaTime + 0.5 // Base auto-scroll speed in pixels per frame
        }
      }

      // Loop the carousel
      const carousel = carouselRef.current
      if (carousel) {
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0
        } else if (carousel.scrollLeft <= 0) {
          carousel.scrollLeft = carousel.scrollWidth / 2
        }
      }
    },
    [isDragging],
  )

  React.useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let animationId: number

    const animateLoop = (timestamp: number) => {
      animate(timestamp)
      animationId = requestAnimationFrame(animateLoop)
    }

    animationId = requestAnimationFrame(animateLoop)

    return () => cancelAnimationFrame(animationId)
  }, [animate])

  const handleStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX - carouselRef.current!.offsetLeft)
    setScrollLeft(carouselRef.current!.scrollLeft)
    lastTouchXRef.current = clientX
    velocityRef.current = 0
  }

  const handleEnd = () => {
    setIsDragging(false)
  }

  const handleMove = (clientX: number) => {
    if (!isDragging) return
    const x = clientX - carouselRef.current!.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current!.scrollLeft = scrollLeft - walk

    // Calculate velocity
    velocityRef.current = (lastTouchXRef.current - clientX) * 0.1 // Adjust multiplier to change "fling" speed
    lastTouchXRef.current = clientX
  }

  const handleMouseDown = (e: React.MouseEvent) => handleStart(e.pageX)
  const handleMouseUp = () => handleEnd()
  const handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault()
    handleMove(e.pageX)
  }

  const handleTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX)
  const handleTouchEnd = () => handleEnd()
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX)

  return (
    <div className={styles.carouselWrapper}>
      <div
        ref={carouselRef}
        className={`${styles.carousel} w-full overflow-hidden cursor-grab active:cursor-grabbing select-none`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => {
          e.preventDefault()
          handleTouchStart(e)
        }}
        onTouchEnd={handleTouchEnd}
        onTouchMove={(e) => {
          e.preventDefault()
          handleTouchMove(e)
        }}
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
