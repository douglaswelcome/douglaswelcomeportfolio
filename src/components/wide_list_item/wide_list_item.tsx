import { motion } from 'framer-motion';
import styles from "@/components/wide_list_item/wide_list_item.module.scss";

interface WideListItemProps {
  count?: string;
  headline: string;
  subheadline?: string;
  showBorder?: boolean;
}

export default function WideListItem({
  count,
  headline,
  subheadline,
  showBorder = true,
}: WideListItemProps) {
  return (
    <motion.div
      className={`${styles.wideListItem} ${!showBorder ? styles.noBorder : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className={styles.container}>
        <div className={`${styles.count} display1`}>{count}</div>
        <h2 className={`${styles.headline} col-start-2 self-end`}>{headline}</h2>
        <h4 className="mt-4 col-start-2">{subheadline}</h4>
          </div>
    </motion.div>
  );
}
