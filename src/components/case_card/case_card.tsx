import type React from "react"
import { useState } from "react"
import Link from "next/link"
import styles from "@/components/case_card/case_card.module.scss"
import CtaNoLink from "@/components/cta_no_link/cta_no_link"
import Image from "next/image"

interface CaseCardProps {
  headline: string
  tag: string
  subheadline: string
  LogoComponent: React.FC
  ctaCopy: string
  cardHref: string
  cardImg: { imgsrc: string; imgalt: string; imgWidth: number; imgHeight: number }
}

export default function CaseCard({
  headline,
  tag,
  subheadline,
  LogoComponent,
  ctaCopy,
  cardHref,
  cardImg,
}: CaseCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <Link
      href={cardHref}
      className={`${styles.caseCard} ${isHovered ? styles.hovered : ""} ${isActive ? styles.active : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setIsActive(false)
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      <div className={styles.left}>
        <div className={styles.title}>
          <h5 className="mb-[1rem]">{tag}</h5>
          <h2>{headline}</h2>
        </div>
        <p className="label_text">{subheadline}</p>
        <div className="mt-[2rem]">
          <div className={styles.logo_wrapper}>
            <LogoComponent />
          </div>
        </div>
        <div className={styles.cta_wrapper}>
          <CtaNoLink copy={ctaCopy} isHovered={isHovered} isActive={isActive} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={`${styles.right_img} ${styles.imageContainer} ${isLoaded ? styles.loaded : ''}`}>
          <Image
            src={cardImg.imgsrc || "/placeholder.svg"}
            alt={cardImg.imgalt}
            width={cardImg.imgWidth}
            height={cardImg.imgHeight}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </div>
    </Link>
  )
}

