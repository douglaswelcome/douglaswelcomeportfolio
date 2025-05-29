import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/components/simple_img/simple_img.module.scss';
import { useState } from 'react';

interface SimpleImgSingle {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface SimpleImgProps {
  image: SimpleImgSingle | [SimpleImgSingle, SimpleImgSingle];
  caption?: string;
  variant?: "oneSmall" | "oneLarge" | "twoSmall" | "twoLarge";
}

export default function SimpleImg({ image, caption, variant = "oneSmall" }: SimpleImgProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoaded2, setIsLoaded2] = useState(false);

  // Choose the class based on the variant
  const variantClass =
    variant === "oneSmall"
      ? styles.oneSmall
      : variant === "oneLarge"
      ? styles.oneLarge
      : variant === "twoSmall"
      ? styles.twoSmall
      : styles.twoLarge;

  // If array, render two side by side with one caption below
  if (Array.isArray(image)) {
    return (
      <motion.div
        className={`${styles.wrapper} ${variantClass}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className={`${styles.wrapperRow} gridWrapper`}>
          {image.map((img, idx) => (
            <div className={`${styles.imgCol} col-span-6`} key={idx}>
              <div className={`${styles.imageContainer} ${idx === 0 ? (isLoaded ? styles.loaded : '') : (isLoaded2 ? styles.loaded : '')}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width || 1600}
                  height={img.height || 900}
                  className={styles.img}
                  quality={90}
                  onLoad={() => idx === 0 ? setIsLoaded(true) : setIsLoaded2(true)}
                />
              </div>
            </div>
          ))}
        </div>
        {caption && <p className={styles.caption}>{caption}</p>}
      </motion.div>
    );
  }
  // Otherwise, render single image with caption
  return (
    <motion.div
      className={`${styles.wrapper} ${variantClass}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className={`${styles.imageContainer} ${isLoaded ? styles.loaded : ''}`}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width || 1600}
          height={image.height || 900}
          className={styles.img}
          quality={90}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      {caption && <p className={styles.caption}>{caption}</p>}
    </motion.div>
  );
} 