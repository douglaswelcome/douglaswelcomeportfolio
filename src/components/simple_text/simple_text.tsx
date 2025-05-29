import styles from "@/components/simple_text/simple_text.module.scss";

interface TextSegment {
  text: string;
  href?: string;
}

interface SimpleTextProps {
  segments: TextSegment[];
}

export function SimpleText({ segments }: SimpleTextProps) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {segments.map((segment, index) => {
          if (segment.href) {
            return (
              <a 
                key={index} 
                href={segment.href}
                className={styles.link}
              >
                {segment.text}
              </a>
            );
          }
          return <span key={index}>{segment.text}</span>;
        })}
      </p>
    </div>
  );
} 