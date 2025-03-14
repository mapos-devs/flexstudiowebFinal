import styles from "@/styles/aboutus.module.css";
import Image from "next/image";

export default function Terms() {
  return (
    <div className={styles.container}>
      {/* Left Section (Title + Text) */}
      <div className={styles.leftSection}>
        <div className={styles.titleContainer}>
          <h1>OUR STORY</h1>
          <div className={styles.underContainer}>
            <div className={styles.dash}></div>
            <p>last updated on 10/12/2025</p>
          </div>
        </div>

        {/* Replace the old text with the new text from the screenshot */}
        <p>
          Flex Studio is Lebanon&apos;s <strong>first</strong> preventative
          physiotherapy and stretching studio, offering a unique wellness
          concept, injury preventing and assisted stretching sessions. We
          believe that stretching is a vital component of a{" "}
          <strong>balanced and healthy lifestyle</strong>.
        </p>
        <br />
        <br />
        <p>
          It has been a quest towards something more than just fitness; it has
          been about fostering a <strong>community</strong> around kindness.
          We&apos;ve watched ourselves grow into an environment where members
          are encouraged to raise their limits, heal in a safe manner and enjoy
          life in moderation. The members should be able to integrate it into
          their bodies with ease which is why we offer programs in place of
          physiotherapy and <strong>stretching your life</strong> in the most
          comfortable environment.
        </p>
      </div>

      {/* Right Section (Images) */}
      <div className={styles.rightSection}>
        <Image src="/Flex 4.jpg" width={500} height={500} alt="Flex 4" />
        <Image src="/Flex 5.jpg" width={500} height={500} alt="Flex 5" />
      </div>
    </div>
  );
}
