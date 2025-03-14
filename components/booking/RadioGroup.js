"use client";

import styles from "@/styles/Booking.module.css";

export default function RadioGroup({ options, value, onChange }) {
  return (
    <div className={styles.radioGroup}>
      {options.map((option, index) => (
        <div key={index} className={styles.radioOption}>
          <div
            className={`${styles.radioCustom} ${
              value === option ? styles.selected : ""
            }`}
            onClick={() => onChange(option)}
          >
            {value === option && <span></span>}
          </div>
          <span>{option}</span>
        </div>
      ))}
    </div>
  );
}
