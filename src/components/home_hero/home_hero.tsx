import styles from "@/components/home_hero/home_hero.module.scss";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function HomeHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Define floating animations for each circle
  const circle1Animation = {
    y: [0, 15, -4, 0],
    x: [0, 10, 8, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const circle2Animation = {
    y: [0, -20, 4, 0],
    x: [0, -15, 10, 0],
    transition: {
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const circle3Animation = {
    y: [0, -10, 4, 0],
    x: [0, 15, -8, 0],
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

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
        <motion.div 
          className={styles.circle2}
          animate={circle2Animation}
        />
        <motion.div 
          className={styles.circle3}
          animate={circle3Animation}
        />
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
        <motion.div 
          className={styles.circle1}
          animate={circle1Animation}
        />
      </div>
    </div>
  );
}
