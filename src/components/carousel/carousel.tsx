"use client"

import * as React from "react"
import { testimonials } from "@/data/testimonials"
import { TestimonialCard } from "@/components/card_carousel/card_carousel"
import styles from "@/components/carousel/carousel.module.scss"

export function TestimonialCarousel() {
  const [isDragging, setIsDragging] = React.useState(false)
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const carouselTrackRef = React.useRef<HTMLDivElement>(null)
  const lastXRef = React.useRef<number | null>(null)

  const handleStart = (clientX: number) => {
    setIsDragging(true)
    lastXRef.current = clientX
    carouselTrackRef.current?.classList.add(styles.paused)
  }

  const handleEnd = () => {
    setIsDragging(false)
    lastXRef.current = null
    carouselTrackRef.current?.classList.remove(styles.paused)
  }

  const handleMove = (clientX: number) => {
    if (!isDragging || !carouselRef.current || !lastXRef.current) return
    
    const deltaX = clientX - lastXRef.current
    carouselRef.current.scrollLeft -= deltaX
    lastXRef.current = clientX
  }

  const handleMouseDown = (e: React.MouseEvent) => handleStart(e.pageX)
  const handleMouseUp = () => handleEnd()
  const handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault()
    handleMove(e.pageX)
  }

  const handleTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX)
  const handleTouchEnd = () => handleEnd()
  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault()
    handleMove(e.touches[0].clientX)
  }

  return (
    <div className={styles.carouselWrapper}>
      <div
        ref={carouselRef}
        className={`${styles.carousel} w-full cursor-grab active:cursor-grabbing select-none`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        <div 
          ref={carouselTrackRef} 
          className={styles.carouselTrack}
        >
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
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

