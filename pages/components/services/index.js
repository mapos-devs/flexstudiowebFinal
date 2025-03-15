import styles from "./FeaturedServices.module.css";
import { FaArrowUp } from "react-icons/fa";

const FeaturedServices = () => {
  return (
    <section className={styles.featuredServicesSection}>
      {/* Top Title & Tagline */}
      <div className={styles.headerContainer}>
        <div className={styles.titleRow}>
          <h2 className={styles.featuredTitle}>
            FEATURED SERVICES. <span className={styles.divider}></span>
          </h2>
          <div className={styles.headerRightSide}>
            <span>We will be</span>
            <p>Empowering your movement.</p>
            <p>Strenghtening your health</p>
            <p>Stretching your life</p>
          </div>
        </div>
        <div className={styles.underlineContainer}>
          <div className={styles.underline}></div>
          <div className={styles.underlineText}>
            <p>What Will Flex Studio Do For You?</p>
          </div>
        </div>
      </div>

      {/* Main Description */}
      <div className={styles.secondDescContainer}>
        <p className={styles.description}>
          Our job is to <strong>enhance your life.</strong> With our help, you
          move more freely, dance with ease, and enjoy life to the fullest. We
          focus on{" "}
          <strong>preventing injuries, reducing stiffness and pain</strong>,
          while{" "}
          <strong>strengthening both your physical and mental health</strong>,
          ultimately helping you stretch your potential and improve your overall
          quality of life.
        </p>
      </div>

      {/* Services Heading & "Explore" Link */}
      <div className={styles.servicesHeadingContainer}>
        <p className={styles.servicesHeading}>
          BELOW ARE SOME OF OUR MANY SERVICES
        </p>
        <a href="/services" className={styles.exploreLink}>
          Explore all of our <span>Services</span>
        </a>
      </div>

      {/* Horizontally Scrollable Container */}
      <div className={styles.imageScrollContainer}>
        <div className={styles.imageWrapper}>
          <video
            src="/flex full.mp4"
            autoPlay
            loop
            muted
            playsInline
            className={styles.serviceImage}
          />
          <div className={styles.banner}>
            <h3>FULL BODY FLEX</h3>
            <FaArrowUp />
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <video
            src="/flex knot.mp4"
            autoPlay
            loop
            muted
            playsInline
            className={styles.serviceImage}
          />
          <div className={styles.banner}>
            <h3>FLEX KNOT</h3>
            <FaArrowUp />
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <video
            src="/flex tete.mp4"
            autoPlay
            loop
            muted
            playsInline
            className={styles.serviceImage}
          />
          <div className={styles.banner}>
            <h3>FLEX NECK</h3>
            <FaArrowUp />
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <video
            src="/flex tummy.mp4"
            autoPlay
            loop
            muted
            playsInline
            className={styles.serviceImage}
          />
          <div className={styles.banner}>
            <h3>FLEX GUT</h3>
            <FaArrowUp />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
