import { Testimonial } from "@/data/testimonials";
import styles from "./testimonial_container.module.scss";
import TestimonialCard from "../testimonial_card/testimonial_card";

interface TestimonialContainerProps {
  testimonials: Testimonial[];
}

export function TestimonialContainer({ testimonials }: TestimonialContainerProps) {
  return (
    <div className={styles.container}>
      {testimonials.map((testimonial) => (
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