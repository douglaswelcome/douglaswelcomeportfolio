import Link from "next/link";
import Icon from "@/components/svg_icon/svg_icon";
import styles from "@/components/contact/contact.module.scss";
import { motion } from 'framer-motion';

export default function FullWidthPage() {

  // Define floating animations for each circle
  const circle1Animation = {
    y: [0, 12, -8, 15, -4, 0],
    x: [0, 8, -12, 10, 5, 0],
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const circle2Animation = {
    y: [0, 15, 8, -20, 12, 0],
    x: [0, -12, 15, -8, 10, 0],
    transition: {
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className={styles.contact_container}>
        <div className={styles.circle_container}>
          <motion.div
            className={styles.circle1}
            animate={circle1Animation}
          />
          <motion.div
            className={styles.circle2}
            animate={circle2Animation}
          />
        </div>
        <div className="text-center relative">
          <h2 className=" mb-4">
            <span className="label_text">Let&apos;s build something</span> <b>together</b>.
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex items-center justify-center">
              <Icon path="mail.svg" width={24} height={24} fill="var(--foreground)" />
            </div>
            <Link
              href="mailto:hello@douglaswelcome.com"
              className="text-xl"
            >
              <h4>hello@douglaswelcome.com</h4>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
