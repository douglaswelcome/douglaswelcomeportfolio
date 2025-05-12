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
    <div className={`${styles.wideListItem} ${!showBorder ? styles.noBorder : ''}`}>
        <div className={`${styles.count} display1`}>{count}</div>
        <h2>{headline}</h2>
        <h4 className="mt-4">{subheadline}</h4>
    </div>
  );
}
