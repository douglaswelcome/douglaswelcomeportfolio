import Image from "next/image";
import styles from "@/components/testimonial_card/testimonial_card.module.scss";
import { Card, CardContent } from "@/components/shad_components/card";
import { useState } from "react";
import SvgIcon from "../svg_icon/svg_icon";

interface TestimonialProps {
  imageSrc: string;
  name: string;
  jobTitle: string;
  company: string;
  quote: string;
}

export default function Testimonial({
  imageSrc,
  name,
  jobTitle,
  company,
  quote,
}: TestimonialProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Card className={`${styles.card} h-full select-none`}>
      <CardContent className={styles.cardContent}>
        <SvgIcon
          path="start_quote.svg"
          width={40}
          height={50}
          className={styles.quoteIconStart}
          fill="var(--color-brand)"
        />
        <p className={styles.quote}>{quote}</p>
        <SvgIcon
          path="end_quote.svg"
          width={40}
          height={50}
          className={styles.quoteIconEnd}
          fill="var(--color-brand)"
        />
        <div className={styles.author}>
          <div className={`${styles.imageContainer} ${isLoaded ? styles.loaded : ''}`}>
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={name}
              width={60}
              height={60}
              className={styles.image}
              onLoad={() => setIsLoaded(true)}
            />
          </div>
          <div className={styles.info}>
            <h5 className={styles.name}>{name}</h5>
            <p className={styles.jobTitle}>{jobTitle}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
