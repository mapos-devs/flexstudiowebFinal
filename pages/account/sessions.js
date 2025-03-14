"use client"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../../styles/Account.module.css"

export default function Sessions() {
  const router = useRouter()
  const { tab } = router.query

  return (
    <div className={styles.container}>
      <Head>
        <title>Sessions | FLEX Studio</title>
        <meta name="description" content="Your FLEX Studio Sessions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.accountContainer}>
          {/* Left sidebar */}
          <div className={styles.sidebar}>
            <div className={styles.accountHeader}>
              <h1 className={styles.accountTitle}>ACCOUNT.</h1>
              <p className={styles.welcomeText}>Welcome Username</p>
            </div>

            <nav className={styles.accountNav}>
              <ul>
                <li>
                  <Link href="/account">USER INFO</Link>
                </li>
                <li className={styles.active}>
                  <Link href="/account/sessions">SESSIONS</Link>
                </li>
                <li className={styles.subItem}>
                  <Link href="/account/sessions?tab=upcoming">UPCOMING</Link>
                </li>
                <li className={styles.subItem}>
                  <Link href="/account/sessions?tab=history">HISTORY</Link>
                </li>
                <li>
                  <Link href="/account/payment">PAYMENT HISTORY</Link>
                </li>
                <li>
                  <Link href="/account/edit">EDIT ACCOUNT</Link>
                </li>
                <li>
                  <Link href="/account/logout">LOGOUT</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right content area */}
          <div className={styles.content}>
            <div className={styles.sessionsContainer}>
              <div className={styles.sessionsList}>
                <div className={styles.sessionItem}>
                  <h3>FLEX TETE SESSION</h3>
                  <div className={styles.sessionButtons}>
                    <button className={styles.editBtn}>
                      <span className={styles.editIcon}>✏️</span> Edit
                    </button>
                    <button className={styles.moreInfoBtn}>More Info +</button>
                  </div>
                </div>
                <div className={styles.sessionItem}>
                  <h3>FLEX TETE SESSION</h3>
                  <button className={styles.moreInfoBtn}>More Info +</button>
                </div>
                <div className={styles.sessionItem}>
                  <h3>FLEX TETE SESSION</h3>
                  <button className={styles.moreInfoBtn}>More Info +</button>
                </div>
                <div className={styles.sessionItem}>
                  <h3>FLEX TETE SESSION</h3>
                  <button className={styles.moreInfoBtn}>More Info +</button>
                </div>
                <div className={styles.sessionItem}>
                  <h3>FLEX TETE SESSION</h3>
                  <button className={styles.moreInfoBtn}>More Info +</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

