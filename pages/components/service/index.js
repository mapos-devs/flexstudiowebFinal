"use client";

import { useState } from "react";
import styles from "./service.module.css";
import Image from "next/image";

export default function Service() {
  // Placeholder thumbnail data; fill `src` later.
  const thumbnails = [
    { type: "image", src: "/flex tete/1.jpg" },
    { type: "image", src: "/flex tete/2.jpg" },
    { type: "video", src: "/LANDING VIDEO VAR_0365.mp4" },
    { type: "image", src: "/flex tete/3.jpg" },
  ];

  // Track which thumbnail is currently selected
  const [activeIndex, setActiveIndex] = useState(0);

  // Renders the main display, which can be an image or a video
  function MainDisplay({ item }) {
    if (!item) return null;

    // If it's a video, show a video element
    if (item.type === "video") {
      return (
        <div className={`${styles.mainDisplay} ${styles.fadeIn}`}>
          <video
            className={styles.mainMedia}
            src={item.src}
            autoPlay
            loop
            muted
          />
        </div>
      );
    }

    // Otherwise, show an image as a background
    return (
      <div
        className={`${styles.mainDisplay} ${styles.fadeIn}`}
        style={{ backgroundImage: `url(${item.src})` }}
      >
        <Image
          src={item.src || "/placeholder.svg"}
          alt="Thumbnail"
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        {/* The main display (image or video) */}
        <MainDisplay key={activeIndex} item={thumbnails[activeIndex]} />

        {/* Thumbnails */}
        <div className={styles.thumbnails}>
          {thumbnails.map((thumb, index) => (
            <div
              key={index}
              className={styles.thumbnail}
              onClick={() => setActiveIndex(index)}
            >
              {thumb.type === "video" ? (
                <video className={styles.thumbMedia} src={thumb.src} />
              ) : (
                <Image
                  className={styles.thumbMedia}
                  src={thumb.src || "/placeholder.svg"}
                  alt="Thumbnail"
                  width={70}
                  height={70}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <div className={styles.innerContent}>
          <h1 className={styles.heading}>FLEX TETE</h1>
          <div className={styles.price}>
            $50.00 <span style={{ color: "var(--wh)" }}>USD</span>
          </div>
          <p className={styles.description}>
            An anti-stress therapy technique using manual aromatic treatment and
            modern stretching methods.
          </p>
          <span className={styles.label}>For</span>
          <p className={styles.forInfo}>Men &amp; Women</p>
          <span className={styles.label}>Ages</span>
          <p className={styles.forInfo}>25 - 70 Years Old</p>
          <span className={styles.label}>Benefits</span>
          <p className={styles.forInfo}>
            Relieves stiffness or tension in your neck, shoulders, and head.
          </p>
          <span className={styles.label}>Link To Real Life</span>
          <p className={styles.forInfo}>
            Modern life is stressful; work is demanding, sitting in front of
            your laptop, sitting on your phone scrolling all day!
          </p>
          <button className={styles.bookButton}>BOOK IT</button>
        </div>
      </div>
    </div>
  );
}
