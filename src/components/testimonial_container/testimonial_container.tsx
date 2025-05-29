import Testimonial from "@/components/testimonial_card/testimonial_card"
import type { Testimonial as TestimonialType } from "@/data/testimonials"
import styles from "@/components/testimonial_container/testimonial_container.module.scss"

interface TestimonialContainerProps {
  testimonials: TestimonialType[]
  numberOfCards: 1 | 2 | 3
}

export function TestimonialContainer({ testimonials, numberOfCards }: TestimonialContainerProps) {
  // Ensure we only take the number of testimonials we need
  const displayTestimonials = testimonials.slice(0, numberOfCards)

  return (
    <div className={styles.container} data-cards={numberOfCards}>
      {displayTestimonials.map((testimonial, index) => (
        <div key={testimonial.name} className={styles.cardWrapper}>
          <Testimonial
            imageSrc={testimonial.image}
            name={testimonial.name}
            jobTitle={testimonial.jobTitle}
            company={testimonial.company}
            quote={testimonial.quote}
          />
        </div>
      ))}
    </div>
  )
} 