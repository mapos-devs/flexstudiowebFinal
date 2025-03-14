import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/Account.module.css"

export default function EditAccount() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Edit Account | FLEX Studio</title>
        <meta name="description" content="Edit Your FLEX Studio Account" />
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
                <li className={styles.active}>
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
            <div className={styles.editContainer}>
              <h2 className={styles.editTitle}>PROFILE PICTURE</h2>
              <div className={styles.profileImageEdit}>
                <Image
                  src="/profile-image.jpg"
                  alt="Profile"
                  width={140}
                  height={140}
                  className={styles.profileImgEdit}
                />
              </div>

              <form className={styles.editForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">NAME</label>
                  <input type="text" id="name" defaultValue="John Flex" className={styles.formInput} />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">PHONE NUMBER</label>
                  <input type="tel" id="phone" defaultValue="John Flex" className={styles.formInput} />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">EMAIL</label>
                  <input type="email" id="email" defaultValue="John Flex" className={styles.formInput} />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="location">LOCATION</label>
                  <select id="location" className={styles.formSelect}>
                    <option>Select Your Country</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

