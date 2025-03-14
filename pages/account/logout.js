"use client"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../../styles/Account.module.css"

export default function Logout() {
  const router = useRouter()

  const handleLogout = () => {
    // Handle logout logic here
    router.push("/")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Logout | FLEX Studio</title>
        <meta name="description" content="Logout from FLEX Studio" />
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
                <li>
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
                <li className={styles.active}>
                  <Link href="/account/logout">LOGOUT</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right content area */}
          <div className={styles.content}>
            <div className={styles.logoutContainer}>
              <h2 className={styles.logoutTitle}>LOGOUT.</h2>
              <p className={styles.logoutText}>Are you sure you want to log out of your Flex Studio account?</p>
              <div className={styles.logoutButtons}>
                <button className={styles.yesButton} onClick={handleLogout}>
                  YES
                </button>
                <Link href="/account">
                  <button className={styles.noButton}>NO</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

