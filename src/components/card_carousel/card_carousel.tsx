import Image from "next/image"
import { Card, CardContent } from "@/components/shad_components/card"
import type { Testimonial } from "@/data/testimonials"
import styles from "@/components/card_carousel/card_carousel.module.scss"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className={`${styles.card} h-full select-none`}>
      <CardContent className={`${styles.cardContent} flex flex-col p-6 h-full`}>
        <p className={`${styles.quote}  mb-4 flex-grow`}>&ldquo;{testimonial.quote}&rdquo;</p>
        <div className={`${styles.footer} flex items-center mt-auto`}>
          <Image
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            width={60}
            height={60}
            className={`${styles.image} rounded-full mr-4`}
          />
          <div>
            <h5 className={`${styles.name} `}>{testimonial.name}</h5>
            <p className={`${styles.jobTitle} `}>{testimonial.jobTitle}</p>
            <p className={`${styles.company} `}>{testimonial.company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

