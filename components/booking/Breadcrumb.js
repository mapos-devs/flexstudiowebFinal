import Link from "next/link";
import styles from "@/styles/Booking.module.css";

export default function Breadcrumb({ items }) {
  return (
    <div className={styles.breadcrumb}>
      {items.map((item, index) => (
        <div key={index}>
          {index > 0 && (
            <span className={styles.breadcrumbSeparator}>&#8250;</span>
          )}
          {item.href ? (
            <Link href={item.href} passHref>
              <span
                className={`${styles.breadcrumbItem} ${
                  item.active ? styles.active : ""
                }`}
              >
                {item.label}
              </span>
            </Link>
          ) : (
            <span
              className={`${styles.breadcrumbItem} ${
                item.active ? styles.active : ""
              }`}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
