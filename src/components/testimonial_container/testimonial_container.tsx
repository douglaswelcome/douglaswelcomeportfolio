import { Testimonial } from "@/data/testimonials";
import styles from "./testimonial_container.module.scss";
import TestimonialCard from "../testimonial_card/testimonial_card";

interface TestimonialContainerProps {
  testimonials: Testimonial[];
  numberOfCards: 1 | 2 | 3;
}

export function TestimonialContainer({ testimonials, numberOfCards }: TestimonialContainerProps) {
  // Ensure we only take the number of testimonials we need
  const displayTestimonials = testimonials.slice(0, numberOfCards);

  return (
    <div className={styles.container} data-cards={numberOfCards}>
      {displayTestimonials.map((testimonial) => (
        <div key={testimonial.name} className={styles.cardWrapper}>
          <TestimonialCard
            imageSrc={testimonial.image}
            name={testimonial.name}
            jobTitle={testimonial.jobTitle}
            company={testimonial.company}
            quote={testimonial.quote}
          />
        </div>
      ))}
    </div>
  );
} 