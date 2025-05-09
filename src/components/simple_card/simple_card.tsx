
import { Card, CardContent } from "@/components/shad_components/card"
import styles from "@/components/simple_card/simple_card.module.scss"

interface SimpleCardProps {
  count?:string;
  headline: string;
  body: string;
  className?: string;
}

export default function SimpleCard({ count, headline, body, className }: SimpleCardProps) {
  return (
    <Card className={`${styles.card} h-full select-none ${className}`}>
      <CardContent className={`${styles.cardContent} flex flex-col p-6 h-full`}>
        <h2 className={styles.cardCount}>{count}</h2>
        <h4>{headline} </h4>
        <p className={`${styles.body}`}>{body}</p>
      </CardContent>
    </Card>
  )
}

