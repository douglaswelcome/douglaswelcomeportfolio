import { Card, CardContent } from "@/components/shad_components/card"
import styles from "@/components/simple_card/simple_card.module.scss"
import { motion } from 'framer-motion';

interface SimpleCardProps {
  count?:string;
  headline: string;
  body: string;
  className?: string;
}

export default function SimpleCard({ count, headline, body, className }: SimpleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
      className={className}
    >
      <Card className={`${styles.card} h-full select-none`}>
        <CardContent className={`${styles.cardContent} flex flex-col p-6 h-full`}>
          <h2 className={styles.cardCount}>{count}</h2>
          <h4>{headline} </h4>
          <p className={`${styles.body}`}>{body}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

