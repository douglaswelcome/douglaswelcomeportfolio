import Link from "next/link"
import SvgIcon from "@/components/svg_icon/svg_icon"
import styles from "./svg_icon_link.module.scss"

interface SvgIconLinkProps {
  path: string
  width?: number
  height?: number
  url: string
  className?: string
}

export default function SvgIconLink({ path, width, height, url, className }: SvgIconLinkProps) {
  return (
    <Link href={url} className={`${styles.linkIcon} interactive`}>
      <SvgIcon path={path} width={width} height={height} fill="var(--foreground)" className={className} />
    </Link>
  )
}


