"use client"

import * as React from "react"
import { testimonials } from "@/data/testimonials"
import { TestimonialCard } from "@/components/card_carousel/card_carousel"
import styles from "@/components/carousel/carousel.module.scss"

export function TestimonialCarousel() {
  const [isDragging, setIsDragging] = React.useState(false)
  const [startX, setStartX] = React.useState(0)
  const [scrollLeft, setScrollLeft] = React.useState(0)
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const carouselTrackRef = React.useRef<HTMLDivElement>(null)

  // Function to handle infinite scroll
  const handleInfiniteScroll = () => {
    const track = carouselTrackRef.current
    if (!track) return

    const trackWidth = track.scrollWidth / 2
    const currentScroll = track.scrollLeft

    if (currentScroll <= 0) {
      track.scrollLeft = trackWidth
    } else if (currentScroll >= trackWidth) {
      track.scrollLeft = 0
    }
  }

  React.useEffect(() => {
    const track = carouselTrackRef.current
    if (!track) return

    // Set initial scroll position
    track.scrollLeft = track.scrollWidth / 4

    // Add scroll event listener
    track.addEventListener('scroll', handleInfiniteScroll)

    return () => {
      track.removeEventListener('scroll', handleInfiniteScroll)
    }
  }, [])

  const handleStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX - carouselRef.current!.offsetLeft)
    setScrollLeft(carouselRef.current!.scrollLeft)
    
    // Pause animation during drag
    if (carouselTrackRef.current) {
      carouselTrackRef.current.style.animationPlayState = 'paused'
    }
  }

  const handleEnd = () => {
    setIsDragging(false)
    
    // Resume animation after drag
    if (carouselTrackRef.current) {
      carouselTrackRef.current.style.animationPlayState = 'running'
    }
  }

  const handleMove = (clientX: number) => {
    if (!isDragging) return
    const x = clientX - carouselRef.current!.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current!.scrollLeft = scrollLeft - walk
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
        className={`${styles.carousel} w-full overflow-hidden cursor-grab active:cursor-grabbing select-none`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        <div ref={carouselTrackRef} className={styles.carouselTrack}>
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

