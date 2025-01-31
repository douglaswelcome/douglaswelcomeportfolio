import React from "react"
import SvgIcon from "@/components/svg_icon/svg_icon"
import styles from "@/components/cta_no_link/cta_no_link.module.scss"

interface CtaProps {
  copy: string
  iconClassName?: string
  isHovered?: boolean
  isActive?: boolean
}

export default function Cta({ copy, iconClassName, isHovered = false, isActive = false }: CtaProps) {
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
    <div
      className={`inline-flex flex-row items-center gap-1 ${styles.cta} ${isHovered ? styles.hovered : ""} ${
        isActive ? styles.active : ""
      }`}
    >
      <p>{copy}</p>
      <SvgIcon
        path="./icons/arrow.svg"
        height={24}
        width={24}
        className={`${styles.icon} ${iconClassName || ""}`}
        fill={getIconColor()}
      />
    </div>
  )
}

