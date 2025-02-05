import Image from "next/image";
import styles from "@/components/testimonial_card/testimonial_card.module.scss";
import SvgIcon from "../svg_icon/svg_icon";

interface TestimonialProps {
  imageSrc: string;
  name: string;
  jobTitle: string;
  quote: string;
}

export default function Testimonial({
  imageSrc,
  name,
  jobTitle,
  quote,
}: TestimonialProps) {
  return (
    <div className={styles.testimonialCard}>
      <SvgIcon
        path="start_quote.svg"
        width={60}
        height={50}
        className={styles.quoteIconStart}
        fill="var(--color-brand)"
      />
      <h2 className={styles.quote}>{quote}</h2>
      <div className={styles.author}>
        <div className={styles.avatarWrapper}>
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={`${name}'s profile picture`}
            width={64}
            height={64}
            className={styles.avatar}
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{name}</h3>
          <h4 className={styles.title}>{jobTitle}</h4>
        </div>
      </div>
      <SvgIcon
        path="end_quote.svg"
        width={60}
        height={50}
        className={styles.quoteIconEnd}
        fill="var(--color-brand)"
      />
    </div>
  );
}
