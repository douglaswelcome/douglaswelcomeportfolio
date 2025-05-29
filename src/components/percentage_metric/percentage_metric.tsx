import React, { useState, useEffect } from 'react';
import styles from './percentage_metric.module.scss';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface PercentageMetricProps {
  percentage: number;
  description: string;
  fillColor?: string;
  backgroundColor?: string;
}

const PercentageMetric: React.FC<PercentageMetricProps> = ({
  percentage,
  description,
  fillColor = 'bg-blue-600', // Default blue color
  backgroundColor = 'bg-gray-700', // Default grey color
}) => {
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const fillWidth = `${percentage}%`;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const duration = 1000; // Animation duration in milliseconds

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const currentPercentage = Math.min(Math.floor((progress / duration) * percentage), percentage);
      setDisplayPercentage(currentPercentage);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      // Clean up animation frame if component unmounts or leaves view
      if (startTimestamp) {
        cancelAnimationFrame(startTimestamp);
      }
    };
  }, [percentage, isInView]); // Re-run animation if percentage prop changes or enters view

  return (
    <motion.div 
      ref={ref}
      className={styles.container}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className={`${styles.barContainer} ${backgroundColor}`}> {/* Adjust size as needed */}
        <motion.div 
          className={`${styles.fillBar} ${fillColor}`}
          initial={{ width: 0 }}
          animate={ isInView ? { width: fillWidth } : { width: 0 } }
          transition={{ duration: 1, ease: 'easeOut' }}
        >
        </motion.div>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.percentageText}>{displayPercentage}%</h1> {/* Adjust size and color */}
        <h4 className={styles.descriptionText}>{description}</h4> {/* Adjust size and color */}
      </div>
    </motion.div>
  );
};

export default PercentageMetric; 