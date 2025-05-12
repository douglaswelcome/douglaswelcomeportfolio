import styles from '@/components/simple_img/simple_img.module.scss';

interface SimpleImgProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function SimpleImg({ src, alt, caption }: SimpleImgProps) {
  return (
    <div className={styles.wrapper}>
      <img src={src} alt={alt} className={styles.img} />
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
} 