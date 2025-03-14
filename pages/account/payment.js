import Head from "next/head"
import Link from "next/link"
import styles from "../../styles/Account.module.css"

export default function Payment() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Payment History | FLEX Studio</title>
        <meta name="description" content="Your FLEX Studio Payment History" />
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
                <li className={styles.active}>
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
            <div className={styles.paymentContainer}>
              <div className={styles.paymentTable}>
                <div className={styles.tableHeader}>
                  <div className={styles.headerCell}>TRANSACTION ID</div>
                  <div className={styles.headerCell}>SERVICE</div>
                  <div className={styles.headerCell}>DATE BOOKED</div>
                  <div className={styles.headerCell}>DATE PAID</div>
                  <div className={styles.headerCell}>STATUS</div>
                  <div className={styles.headerCell}>AMOUNT</div>
                </div>

                <div className={styles.tableRow}>
                  <div className={styles.tableCell}>Flex-1234567890-A</div>
                  <div className={styles.tableCell}>1x Flex Tete</div>
                  <div className={styles.tableCell}>6/3/2025</div>
                  <div className={styles.tableCell}>6/3/2025</div>
                  <div className={styles.tableCell}>
                    <span className={styles.paidStatus}>PAID</span>
                  </div>
                  <div className={styles.tableCell}>
                    $50.00
                    <button className={styles.receiptBtn}>
                      <span className={styles.downloadIcon}>↓</span> Receipt
                    </button>
                  </div>
                </div>

                <div className={styles.tableRow}>
                  <div className={styles.tableCell}>Flex-1234567890-A</div>
                  <div className={styles.tableCell}>1x Flex Tete</div>
                  <div className={styles.tableCell}>6/3/2025</div>
                  <div className={styles.tableCell}>-</div>
                  <div className={styles.tableCell}>
                    <span className={styles.pendingStatus}>PENDING</span>
                  </div>
                  <div className={styles.tableCell}>$50.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

