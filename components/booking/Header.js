import Link from "next/link";
import styles from "@/styles/Booking.module.css";

export default function Header({ title, subtitle, steps }) {
  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      <nav className={styles.navigation}>
        {steps.map((step, index) => (
          <div key={index} className={styles.navItem}>
            {index > 0 && <span className={styles.separator}>{">"}</span>}
            {step.href ? (
              <Link
                href={step.href}
                className={`${styles.navLink} ${
                  step.active ? styles.active : ""
                }`}
              >
                {step.label}
              </Link>
            ) : (
              <span
                className={`${styles.navText} ${
                  step.active ? styles.active : ""
                }`}
              >
                {step.label}
              </span>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}
