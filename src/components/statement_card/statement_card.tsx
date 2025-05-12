import { Card, CardContent } from "@/components/shad_components/card"
import styles from "@/components/statement_card/statement_card.module.scss"

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
    <Card className={`${styles.card} h-full select-none ${className}`}>
      <CardContent className={`${styles.cardContent} flex flex-col p-12 h-full`}>
        {renderBody()}
      </CardContent>
    </Card>
  )
}

