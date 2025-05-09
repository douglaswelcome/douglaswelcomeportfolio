import styles from "@/components/section_header/section_header.module.scss";

interface SectionHeaderProps {
  tag?: string
  headline: string
  subheadline?: string
  
}

export default function SectionHeader({ tag, headline, subheadline }: SectionHeaderProps
) {
  return (
    <div className={styles.sectionHeader}>
      <div className={styles.sectionHeaderInner}>
      <h3 className="">{tag}</h3>
      <h2>{headline}</h2>
      <h4 className="mt-6">{subheadline}</h4>
      </div>
    </div>
  );
}