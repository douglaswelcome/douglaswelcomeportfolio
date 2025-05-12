import styles from './project_meta.module.scss';

interface Project_MetaProps {
  time: string;
  team: string;
  role: string;
}

export default function Project_Meta({ time, team, role }: Project_MetaProps) {
  return (
    <div className={styles.metaWrapper}>
      <div className={styles.metaCol}>
        <div className={styles.metaLabel}>TIME</div>
        <div className={styles.metaValue}>{time}</div>
      </div>
      <div className={styles.divider} />
      <div className={styles.metaCol}>
        <div className={styles.metaLabel}>TEAM</div>
        <div className={styles.metaValue}>{team}</div>
      </div>
      <div className={styles.divider} />
      <div className={styles.metaCol}>
        <div className={styles.metaLabel}>ROLE</div>
        <div className={styles.metaValue}>{role}</div>
      </div>
    </div>
  );
} 