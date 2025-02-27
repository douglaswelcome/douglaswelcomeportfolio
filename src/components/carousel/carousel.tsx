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

  React.useEffect(() => {
    const carouselTrack = carouselTrackRef.current
    if (!carouselTrack) return

    const resetAnimation = () => {
      carouselTrack.style.animation = "none"
      carouselTrack.offsetHeight // Trigger reflow
      carouselTrack.style.animation = ''
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            resetAnimation()
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(carouselTrack)

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX - carouselRef.current!.offsetLeft)
    setScrollLeft(carouselRef.current!.scrollLeft)
  }

  const handleEnd = () => {
    setIsDragging(false)
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

