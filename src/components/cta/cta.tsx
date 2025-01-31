import React, { useState, useCallback } from "react"
import SvgIcon from "@/components/svg_icon/svg_icon"
import Link from "next/link"
import styles from "@/components/cta/cta.module.scss"

interface CtaProps {
  href: string
  copy: string
  iconClassName?: string
}

export default function Cta({ href, copy, iconClassName }: CtaProps) {
  const [iconState, setIconState] = useState<"default" | "hover" | "active">("default")

  const handleMouseEnter = useCallback(() => setIconState("hover"), [])
  const handleMouseLeave = useCallback(() => setIconState("default"), [])
  const handleMouseDown = useCallback(() => setIconState("active"), [])
  const handleMouseUp = useCallback(() => setIconState("hover"), [])

  const getIconColor = () => {
    switch (iconState) {
      case "hover":
        return "var(--color-label)"
      case "active":
        return "var(--color-brand)"
      default:
        return "var(--foreground)"
    }
  }

  return (
    <Link
      href={href}
      className={`inline-flex flex-row items-center gap-1 ${styles.cta}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <p>{copy}</p>
      <SvgIcon
        path="./icons/arrow.svg"
        height={24}
        width={24}
        className={`${styles.icon} ${iconClassName || ""}`}
        fill={getIconColor()}
      />
    </Link>
  )
}

