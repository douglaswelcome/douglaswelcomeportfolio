import styles from "@/components/section_header/section_header.module.scss";

interface SectionHeaderProps {
  tag: string
  headline: string
  
}

export default function SectionHeader({ tag, headline }: SectionHeaderProps
) {
  return (
    <div className={styles.sectionHeader}>
      <h3 className="">{tag}</h3>
      <h2>{headline}</h2>
    </div>
  );
}