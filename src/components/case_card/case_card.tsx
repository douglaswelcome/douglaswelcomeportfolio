import styles from "@/components/case_card/case_card.module.scss";

interface CaseCardProps {
  headline: string;
  tag: string;
  subheadline: string;
}

export default function CaseCard({ headline, tag, subheadline }: CaseCardProps) {
  return (
    <div className={styles.caseCard}>
      <div className={styles.caseCardLeft}>
        <div className={styles.caseCardTitle}>
          <h5 className="">{tag}</h5>
          <h2>{headline}</h2>
        </div>
        <p>
          {subheadline}
        </p>
      </div>
      <div className={styles.right}>
        <p>this is an image</p>
      </div>
    </div>
  );
}
