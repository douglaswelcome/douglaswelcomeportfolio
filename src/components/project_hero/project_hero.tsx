import Cta from "@/components/cta/cta"

export interface CaseStudyCardProps {
  label?: string
  title: string
  description: string
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
    <div className=" flex flex-col justify-end p-8 md:p-12 lg:p-16">
      <div className="space-y-6">
        <h5 className="">{label}</h5>

        <h1 className="">{title}</h1>

        <h2 className="label_text">{description}</h2>

        <Cta href={ctaHref} copy={ctaText} />
      </div>
    </div>
  )
}

