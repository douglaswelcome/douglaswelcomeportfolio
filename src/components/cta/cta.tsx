"use client"

import { useState, useCallback } from "react"
import SvgIcon from "@/components/svg_icon/svg_icon"
import Link from "next/link"
import styles from "@/components/cta/cta.module.scss"

interface CtaProps {
  href: string;
  copy: string;
  iconClassName?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

// Modify the component to use CSS classes for fill color animation
export default function Cta({ 
  href, 
  copy, 
  iconClassName,
  target 
}: CtaProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const handleMouseEnter = useCallback(() => setIsHovered(true), [])
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    setIsActive(false)
  }, [])
  const handleMouseDown = useCallback(() => setIsActive(true), [])
  const handleMouseUp = useCallback(() => {
    setIsActive(false)
    setIsHovered(true)
  }, [])

  // Determine which class to apply based on state
  const stateClass = isActive ? styles.active : isHovered ? styles.hovered : styles.default

  return (
    <Link
      href={href}
      target={target}
      className={`inline-flex flex-row items-center gap-1 ${styles.cta} ${isHovered ? styles.hovered : ""} ${
        isActive ? styles.active : ""
      } ${stateClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      
    >
      <p>{copy}</p>
      <SvgIcon path="arrow.svg" height={24} width={24} className={`${styles.icon} ${iconClassName || ""}`} />
    </Link>
  )
}

