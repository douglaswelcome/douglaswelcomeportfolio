import { useState, useCallback } from "react"
import SvgIcon from "@/components/svg_icon/svg_icon"
import Link from "next/link"
import styles from "@/components/cta/cta.module.scss"

interface CtaProps {
  href: string
  copy: string
  iconClassName?: string
}

export default function Cta({ href, copy, iconClassName }: CtaProps) {
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

  const getIconColor = () => {
    if (isActive) {
      return "var(--color-brand)"
    }
    if (isHovered) {
      return "var(--color-label)"
    }
    return "var(--foreground)"
  }

  return (
    <Link
      href={href}
      className={`inline-flex flex-row items-center gap-1 ${styles.cta} ${isHovered ? styles.hovered : ""} ${
        isActive ? styles.active : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <p>{copy}</p>
      <SvgIcon
        path="arrow.svg"
        height={24}
        width={24}
        className={`${styles.icon} ${iconClassName || ""}`}
        fill={getIconColor()}
      />
    </Link>
  )
}

