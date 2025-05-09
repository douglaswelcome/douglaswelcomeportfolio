import styles from "@/components/project_hero_img/project_hero_img.module.scss";
import Image from "next/image";

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
  );
}
