import styles from './ProjectMeta.module.scss';

interface ProjectMetaProps {
  time: string;
  team: string;
  role: string;
}

export default function ProjectMeta({ time, team, role }: ProjectMetaProps) {
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