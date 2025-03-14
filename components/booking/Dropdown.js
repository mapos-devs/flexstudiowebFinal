"use client";

import { useState, useRef, useEffect } from "react";
import styles from "@/styles/Booking.module.css";

export default function Dropdown({ options, placeholder, onSelect, value }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        className={styles.dropdownButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || placeholder}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      <div className={`${styles.dropdownContent} ${isOpen ? styles.show : ""}`}>
        {options.map((option, index) => (
          <div
            key={index}
            className={styles.dropdownItem}
            onClick={() => handleSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
