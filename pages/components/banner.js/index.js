import React from "react";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        READY TO <span className={styles.stretch}>STRETCH</span> YOUR LIFE?
      </h1>
      <button className={styles.bookButton}>BOOK SESSION</button>
    </div>
  );
}
