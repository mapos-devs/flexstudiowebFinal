import styles from "@/styles/terms.module.css";
import Image from "next/image";

export default function Terms() {
  return (
    <div className={styles.container}>
      {/* Left Section (Title Image + Text) */}
      <div className={styles.leftSection}>
        {/* Title image */}

        <div className={styles.titleContainer}>
          <h1>TERMS & CONDITIONS</h1>
          <div className={styles.underContainer}>
            <div className={styles.dash}></div>
            <p>last updated on 10/12/2025</p>
          </div>
        </div>
        <h2>Welcome to the Flex Studio website!</h2>
        <p>
          These General Terms of Use are entered into by and between you and
          Scout Motors Inc. (“Scout,” “we,” or “us”). The following General
          Terms of Use, together with all other terms and policies posted on our
          website or incorporated by reference (collectively, these “Terms of
          Use”), govern your use of and access to the Website, including any
          content, functionality and services offered on or through the Website,
          including as a guest or a registered user. Please read these Terms of
          Use carefully before you start to use the Website. By using the
          Website or by clicking to accept or agree to the Terms of Use when
          this option is made available to you, you accept and agree to be bound
          and abide by these Terms of Use and our Privacy Policy found at{" "}
          <a href="https://www.scoutmotors.com/legal/privacy">
            https://www.scoutmotors.com/legal/privacy
          </a>{" "}
          (the “Privacy Policy”) and our User-Generated Content Terms of Use
          found at{" "}
          <a href="https://www.scoutmotors.com/legal/user-generated-terms">
            https://www.scoutmotors.com/legal/user-generated-terms
          </a>{" "}
          (the “UGC Terms”), all of which are incorporated herein together with
          any applicable laws and regulations, if you do not want to agree to
          these Terms of Use or the Privacy Policy, you must not access or use
          the Website.
        </p>
      </div>

      {/* Right Section (Table of Contents) */}
      <div className={styles.rightSection}>
        <h3>TABLE OF CONTENTS</h3>
        <p>Acceptance of Terms of Use</p>
        <p>Acceptance of Terms of Use</p>
        <p>Acceptance of Terms of Use</p>
        <p>Acceptance of Terms of Use</p>
        <p>Acceptance of Terms of Use</p>
      </div>
    </div>
  );
}
