"use client";

import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Booking.module.css";

export default function Layout({
  children,
  title,
  step,
  totalSteps,
  bgColor = "dark",
  customNextStep,
  customPrevStep,
  showNavButtons = false,
}) {
  return (
    <div
      className={`${styles.container} ${
        bgColor === "dark" ? styles.darkBg : styles.lightBg
      }`}
    >
      <Head>
        <title>{title || "Booking App"}</title>
        <meta name="description" content="Book your therapy session" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContent}>
        <div style={{ textAlign: "right", marginBottom: "1rem" }}>
          <Link href="/" passHref>
            <span className={styles.closeLink}>Close booking</span>
          </Link>
        </div>

        <h1 className={styles.pageTitle}>{title}</h1>

        <div
          className={styles.stepIndicator}
          style={{ width: `${(step / totalSteps) * 100}%` }}
        >
          <div className={styles.stepText}>
            Step {step} of {totalSteps}
          </div>
        </div>

        {children}

        {showNavButtons && (
          <div className={styles.navigationButtons}>
            {step > 1 && (
              <button
                className={styles.secondaryButton}
                onClick={customPrevStep}
              >
                <span>&#8249;</span> PREVIOUS STEP
              </button>
            )}
            {step < totalSteps && (
              <button
                className={styles.secondaryButton}
                onClick={customNextStep}
                style={{ marginLeft: "auto" }}
              >
                NEXT STEP <span>&#8250;</span>
              </button>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
