import styles from "@/styles/signin.module.css";
import { INTERNALS } from "next/dist/server/web/spec-extension/request";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";

export default function Terms() {
  return (
    <div className={styles.container}>
      {/* Left Section (Title Image + Text) */}
      <div className={styles.leftSection}>
        {/* Title image */}
        <div className={styles.titleContainer}>
          <h1>SIGN IN</h1>
          <div className={styles.underContainer}>
            <div className={styles.dash}></div>
            <p>last updated on 10/12/2025</p>
          </div>
        </div>

        <div className={styles.upperSection}>
          <div className={styles.leftSection}></div>
        </div>
      </div>

      {/* Right Section (Table of Contents + Form) */}
      <div className={styles.rightSection}>
        {/* Contact Form */}
        <div className={styles.formContainer}>
          <form className={styles.contactForm}>
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

            <button type="submit" className={styles.submitBtn}>
              SUBMIT
            </button>
          </form>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "30px",
            }}
          >
            <p>
              Don't have an account?
              <span
                style={{
                  paddingBottom: "3px",
                  borderBottom: "1px solid var(--bl)",
                  paddingRight: "3px",
                  marginLeft: "5px",
                }}
              >
                Sign up
              </span>
            </p>
            <span>forgot your password?</span>
          </div>
        </div>
      </div>
    </div>
  );
}
