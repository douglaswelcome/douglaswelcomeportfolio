import styles from '@/components/project_meta/project_meta.module.scss';
import { motion } from 'framer-motion';

interface ProjectMetaProps {
  time: string;
  team: string;
  role: string;
}

export default function ProjectMeta({ time, team, role }: ProjectMetaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
      className={styles.rowWrapper}>
      <div className={styles.metaWrapper}>
        <div className={styles.metaCol}>
          <h3 className={styles.metaLabel}>TIME</h3>
          <p className={styles.metaValue}>{time}</p>
        </div>
        <div className={styles.divider} />
        <div className={styles.metaCol}>
          <h3 className={styles.metaLabel}>TEAM</h3>
          <p className={styles.metaValue}>{team}</p>
        </div>
        <div className={styles.divider} />
        <div className={styles.metaCol}>
          <h3 className={styles.metaLabel}>ROLE</h3>
          <p className={styles.metaValue}>{role}</p>
        </div>
      </div>
    </motion.div>
  );
} 