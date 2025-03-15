"use client";

// /components/Faq.js
import { useState } from "react";
import styles from "./Faq.module.css";
import Image from "next/image";

// Example static data (can be overridden by passing props)
const faqData = [
  {
    question: "Question 1",
    answer: "This is the answer for question 1. You can add any content here.",
  },
  {
    question: "Question 2",
    answer: "This is the answer for question 2. Add more details as needed.",
  },
  {
    question: "Question 3",
    answer: "This is the answer for question 3. Expand it as much as you like.",
  },
];

export default function Faq({ faqs = faqData }) {
  return (
    <div className={styles.faqContainer}>
      {/* Header area */}
      <div className={styles.faqHeader}>
        <Image src={"/faq.png"} width={255} height={135} alt="FAQ" />
        <p className={styles.description}>
          Check out more of our{" "}
          <strong style={{ borderBottom: "1px solid black" }}>
            frequently asked questions
          </strong>
        </p>
      </div>
      {/* FAQ items list */}
      <div className={styles.faqList}>
        {faqs.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}

// Individual FAQ Item with animated answer container
function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQuestion} onClick={toggleOpen}>
        <span style={{ color: isOpen ? "var(--pc)" : "var(--bl)" }}>
          {question}
        </span>
        <span
          style={{ color: isOpen ? "var(--pc)" : "var(--bl)" }}
          className={`${styles.toggleSign} ${isOpen ? styles.openSign : ""}`}
        >
          {isOpen ? "-" : "+"}
        </span>
      </button>

      {/* Animated wrapper for the answer */}
      <div
        className={`${styles.faqAnswerWrapper} ${isOpen ? styles.open : ""}`}
      >
        <div className={styles.faqAnswer}>{answer}</div>
      </div>
    </div>
  );
}
