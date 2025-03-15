"use client";
import styles from "./Footer.module.css";
import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
const locations = ["ASHRAFIEH", "SAIFI", "RAMLET", "GEMMAYZE"];
const Footer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("idle"); // "idle" | "fadeOut" | "fadeIn"

  // Start the fade out animation every 3 seconds if not already animating
  useEffect(() => {
    const interval = setInterval(() => {
      if (animation === "idle") {
        setAnimation("fadeOut");
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [animation]);

  // Handler when animation ends
  const handleAnimationEnd = () => {
    if (animation === "fadeOut") {
      // Update the location index and start fade in
      setCurrentIndex((prevIndex) => (prevIndex + 1) % locations.length);
      setAnimation("fadeIn");
    } else if (animation === "fadeIn") {
      // Animation complete; go back to idle waiting for next interval
      setAnimation("idle");
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Upper section with left and right columns */}
      <div className={styles.upperSection}>
        <div className={styles.leftSection}>
          <h2 className={styles.heading}>
            VISIT <span className={styles.orangeText}>FLEX STUDIO</span>
            <br /> TODAY.
          </h2>
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

      {/* Lower section with footer links and a "Back to Top" link */}
      <div className={styles.lowerSection}>
        <div className={styles.footerLinks}>
          <div className={styles.socialLinks}>
            <FaWhatsapp />
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
          </div>
          <div className={styles.footerNavLinks}>
            <a href="#" className={styles.link}>
              TERMS & CONDITIONS
            </a>
            <a href="#" className={styles.link}>
              PRIVACY POLICY
            </a>
            <a href="#" className={styles.link}>
              FAQ
            </a>
          </div>
        </div>
        <div className={styles.rightSection}>
          <h2 className={styles.heading}>
            IN THE HEART OF{" "}
            <span
              className={`${styles.orangeText} ${
                animation === "fadeOut"
                  ? styles.fadeOut
                  : animation === "fadeIn"
                  ? styles.fadeIn
                  : ""
              }`}
              onAnimationEnd={handleAnimationEnd}
            >
              <br />
              {locations[currentIndex]}.
            </span>
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
