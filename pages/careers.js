import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Flex.module.css";

export default function CareersPage() {
  const jobListings = [
    {
      id: 1,
      title: "THERAPIST",
      type: "FULL TIME",
      description:
        "Lorem ipsum dolor sit amet consectetur. Elementum dictum libero sit felis in porttitor vitae elementum. Ornare non lect...",
    },
    {
      id: 2,
      title: "THERAPIST",
      type: "FULL TIME",
      description:
        "Lorem ipsum dolor sit amet consectetur. Elementum dictum libero sit felis in porttitor vitae elementum. Ornare non lect...",
    },
    {
      id: 3,
      title: "THERAPIST",
      type: "FULL TIME",
      description:
        "Lorem ipsum dolor sit amet consectetur. Elementum dictum libero sit felis in porttitor vitae elementum. Ornare non lect...",
    },
    {
      id: 4,
      title: "THERAPIST",
      type: "FULL TIME",
      description:
        "Lorem ipsum dolor sit amet consectetur. Elementum dictum libero sit felis in porttitor vitae elementum. Ornare non lect...",
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FLEX-c2AYXoWlyQZQZAmp603M8EYLXDvPSw.png"
              alt="Flex Studio Logo"
              width={150}
              height={80}
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
        <div className={styles.menuButton}>
          <div className={styles.menuIcon}></div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>CAREERS.</h1>
          <div className={styles.titleUnderline}></div>
          <p className={styles.subtitle}>Stretch people's lives</p>
          <p className={styles.description}>Explore our job openings.</p>
        </div>

        <div className={styles.jobGrid}>
          {jobListings.map((job) => (
            <div key={job.id} className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <h2 className={styles.jobTitle}>{job.title}</h2>
                <p className={styles.jobType}>{job.type}</p>
              </div>
              <div className={styles.jobDescription}>
                <h3>JOB DESCRIPTION</h3>
                <p>{job.description}</p>
              </div>
              <Link href="/contactus" className={styles.applyLink}>
                APPLY <span className={styles.arrow}>→</span>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.qrCode}>
          <Image
            src="/placeholder.svg?height=100&width=100"
            alt="QR Code"
            width={100}
            height={100}
          />
          <p>Scan to get the app</p>
        </div>
      </footer>
    </div>
  );
}
