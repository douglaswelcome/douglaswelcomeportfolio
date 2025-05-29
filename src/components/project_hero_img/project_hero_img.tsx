import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/components/project_hero_img/project_hero_img.module.scss';

export interface ProjectHeroImgProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function ProjectHeroImg({
  src,
  alt,
  height = 1620,
  width = 2880,
}: ProjectHeroImgProps)
{
  return (
    <motion.div
      className={styles.heroImgWrapper}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }} // <-- animate instead of whileInView
      whileInView={{ opacity: 1, y: 0 }}      transition={{ duration: 0.3, ease: 'easeOut' }}

    >
      <div className={styles.projectHeroImg}>
        <div className={styles.projectHeroImgContainer}>
          <div className={styles.bottomGradient}>
          </div>
          <Image
            className={styles.projectHeroImgFile}
            src={src}
            width={height}
            height={width}
            alt={alt}
            priority={true}
          />
        </div>
      </div>
    </motion.div>
  );
}
