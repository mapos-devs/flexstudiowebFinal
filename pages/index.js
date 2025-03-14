import React, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import FeaturedServices from "./components/services";
import Faq from "./components/faq";
import Banner from "./components/banner.js";
import Footer from "./components/footer";
import Service from "./components/service";

export default function Home() {
  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);
  const handleLeftClick = () => {
    setLeftActive((prev) => !prev);
  };

  const handleRightClick = () => {
    setRightActive((prev) => !prev);
  };

  // State to control whether to show the video
  const [showVideo, setShowVideo] = useState(false);
  // State for the rest of the site (optional if you need to manage additional UI states)
  const [videoFinished, setVideoFinished] = useState(false);

  // On component mount, check if the video was already shown during this session
  useEffect(() => {
    const played = sessionStorage.getItem("videoPlayed");
    if (!played) {
      setShowVideo(true);
      handleVideoEnded();
    }
  }, []);

  // Called when the video finishes playing
  const handleVideoEnded = () => {
    // Wait 3 seconds before hiding the video
    setTimeout(() => {
      setShowVideo(false);
      setVideoFinished(true);
      // Mark the video as played in session storage
      sessionStorage.setItem("videoPlayed", "true");
    }, 10000);
  };

  // If showVideo is true, render only the video; otherwise, render the website content.
  if (showVideo) {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <video
          src="/loading v2.mp4" // Replace with your actual video path
          autoPlay
          muted
          playsInline
          className={styles.backgroundVideo} // Make sure your CSS covers full screen display
        />
      </div>
    );
  }

  return (
    <>
      <div className={styles.container}>
        {/* Background Video */}
        <video
          src="/LANDING VIDEO VAR_0365.mp4" // Replace with your actual video path
          autoPlay
          loop
          muted
          playsInline
          className={styles.backgroundVideo}
        />

        <div className={styles.insideContainer}>
          <div className={styles.middleContainer}>
            <h1>WE STRETCH PEOPLE'S LIVES</h1>
            <p>
              Lebanon's first preventative physiotherapy and stretching studio.
              Offering a unique wellness concept, as well as injury preventing
              and assisted stretching sessions.
            </p>
          </div>
          <div className={styles.leftInsideContainer}>
            <div className={styles.upperDash}></div>
            <div className={styles.lowerDash}></div>
            <div
              className={styles.leftButton}
              onClick={() => handleLeftClick()}
            >
              <p>Flex Now</p>
            </div>
          </div>
          <div className={styles.rightInsideContainer}>
            <div
              className={`${styles.rightButton} ${
                rightActive ? styles.active : ""
              }`}
              onClick={() => handleRightClick()}
            >
              <p>What We Can Do For You</p>
              <FaArrowRight />
            </div>
          </div>
        </div>

        {/* Header */}
        <header className={styles.header}>
          <Image
            className={styles.logo}
            width={100}
            height={60}
            src={"/flex logo v2.png"}
          />
          <nav>
            <ul>
              <li>ABOUT US</li>
              <li>CONTACT</li>
            </ul>
          </nav>
        </header>

        {/* Main Content: Two Panels */}
        <main className={styles.splitContainer}>
          {/* Left Panel */}
          <div
            className={`${styles.split} ${styles.left} ${
              leftActive ? styles.active : ""
            }`}
          >
            <div className={styles.splitContent}>
              <h1>READY TO FLEX ?</h1>
              <p>
                Take our bookibg process to book a session at one of our
                locations and stretch your life
              </p>
            </div>
          </div>

          {/* Right Panel */}
          <div
            className={`${styles.split} ${styles.right} ${
              rightActive ? styles.active : ""
            }`}
          >
            <div className={styles.splitContent}>
              <h1>HOW CAN FLEX STUDIO HELP ?</h1>
              <p>
                We provide a wide range of servicesthat strecth your life. Let
                us know whats causing your pain and we'll provide a service that
                makes it go away
              </p>
            </div>
          </div>
        </main>
      </div>
      <FeaturedServices />
      <Faq />
      <Banner />
      <Footer />
      <Service />
    </>
  );
}
