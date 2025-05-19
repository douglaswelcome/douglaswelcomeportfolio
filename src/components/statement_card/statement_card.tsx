import { Card, CardContent } from "@/components/shad_components/card"
import styles from "@/components/statement_card/statement_card.module.scss"
import { motion } from 'framer-motion';

interface TextSegment {
  text: string;
  className?: string;
}

interface StatementCardProps {
  body: string | TextSegment[];
  className?: string;
}

export default function StatementCard({ body, className }: StatementCardProps) {
  const renderBody = () => {
    if (typeof body === 'string') {
      return <h1 className={styles.body}>{body}</h1>;
    }
    
    return (
      <h1 className={styles.body}>
        {body.map((segment, index) => (
          <span key={index} className={segment.className}>
            {segment.text}
          </span>
        ))}
      </h1>
    );
  };

  return (
    <motion.div
      className={`${styles.wrapper} h-full select-none ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <Card className={`${styles.card} h-full select-none`}>
        <CardContent className={`${styles.cardContent} flex flex-col h-full`}>
          {renderBody()}
        </CardContent>
      </Card>
    </motion.div>
  )
}

