import styles from "@/components/home_hero/home_hero.module.scss";
import Image from "next/image";
import { useState } from "react";

export default function HomeHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={styles.homeHero}>
      <div className={styles.homeHeroText}>
        <h1 className="">Value driven design <br /> that resonates</h1>
        <h4>
          Hi, my name is <b>Douglas Welcome</b>. I am a product designer with a
          passion for brand, front-end web, and mobile app design.
        </h4>
      </div>
      <div className={styles.homeImageContainer}>
        <div className={styles.circle2} />
        <div className={styles.circle3} />
        <div className={`${styles.imageContainer} ${isLoaded ? styles.loaded : ''}`}>
          <Image
            className={styles.homeImage}
            src="/headshot.png"
            width={1057}
            height={891}
            alt="Picture of the author"
            priority={true}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
        <div className={styles.circle1} />
      </div>
    </div>
  );
}
