import Cta from "@/components/cta/cta"
import styles from "@/components/project_hero/project_hero.module.scss"

export interface CaseStudyCardProps {
  label?: string
  title: string
  description?: string
  ctaText?: string
  ctaHref?: string
}

export default function ProjectHero({
  label = "Case Study",
  title,
  description,
  ctaText = "View live project",
  ctaHref = "#",
}: CaseStudyCardProps) {
  return (
    <div className={styles.hero}>
      <div className={`${styles.heroInner} space-y-6`}>
        <h5 className="">{label}</h5>

        <h1 className="">{title}</h1>

        <h2 className="label_text">{description}</h2>

        <Cta href={ctaHref} copy={ctaText} target="_blank" />
      </div>
    </div>
  )
}

