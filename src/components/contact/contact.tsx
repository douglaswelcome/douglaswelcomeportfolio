import Link from "next/link";
import Icon from "@/components/svg_icon/svg_icon";
import styles from "@/components/contact/contact.module.scss";
import { motion } from 'framer-motion';

export default function FullWidthPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className=" w-full flex flex-col items-center justify-center py-32 relative mt-32 mb-16">
        <div className={styles.circle_container}>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
        </div>
        <div className="text-center relative">
          <h2 className=" mb-4">
            <span className="label_text">Let's build something</span> <b>together</b>.
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
