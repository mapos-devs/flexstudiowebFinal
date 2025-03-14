import styles from "@/styles/contactus.module.css";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";

export default function Terms() {
  return (
    <div className={styles.container}>
      {/* Left Section (Title Image + Text) */}
      <div className={styles.leftSection}>
        {/* Title image */}
        <div className={styles.titleContainer}>
          <h1>CONTACT</h1>
          <div className={styles.underContainer}>
            <div className={styles.dash}></div>
            <p>last updated on 10/12/2025</p>
          </div>
        </div>

        <div className={styles.upperSection}>
          <div className={styles.leftSection}>
            <ul className={styles.locations}>
              <li>
                Saff Village, El Saifi
                <span className={styles.phone}>+961 71 47 474</span>
              </li>
              <li>
                Hamlik
                <span className={styles.phone}>+961 71 47 474</span>
              </li>
              <li>
                Ashrafieh
                <span className={styles.phone}>+961 71 47 474</span>
              </li>
              <li>
                District Padel
                <span className={styles.phone}>+961 71 47 474</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.lowerSectionLeft}>
          <p>Want to change people's lives for the good?</p>
          <p>
            Explore our open positions and <span>apply now</span>
            <FaArrowUp />
          </p>
        </div>
      </div>

      {/* Right Section (Table of Contents + Form) */}
      <div className={styles.rightSection}>
        {/* Contact Form */}
        <div className={styles.formContainer}>
          <form className={styles.contactForm}>
            <div className={styles.inputRow}>
              <input
                type="text"
                placeholder="Enter First Name"
                name="firstName"
              />
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
              />
            </div>
            <div className={styles.inputRow}>
              <input
                type="email"
                placeholder="Enter Email Address"
                name="email"
              />
            </div>
            <div className={styles.inputRow}>
              <input
                type="text"
                placeholder="Enter Company Name"
                name="company"
              />
            </div>
            <div className={styles.inputRow}>
              <textarea
                placeholder="How Can We Help?"
                name="message"
                rows={5}
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
