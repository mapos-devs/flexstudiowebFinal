"use client"

import { useState } from "react"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Account.module.css"

export default function Account() {
  const [activeSection, setActiveSection] = useState("info")

  return (
    <div className={styles.container}>
      <Head>
        <title>Account | FLEX Studio</title>
        <meta name="description" content="Your FLEX Studio Account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.accountContainer}>
          {/* Left sidebar - consistent across all views */}
          <div className={styles.sidebar}>
            <div className={styles.accountHeader}>
              <h1 className={styles.accountTitle}>ACCOUNT.</h1>
              <p className={styles.welcomeText}>Welcome Username</p>
            </div>

            <nav className={styles.accountNav}>
              <ul>
                <li className={activeSection === "info" ? styles.active : ""} onClick={() => setActiveSection("info")}>
                  USER INFO
                </li>
                <li
                  className={activeSection === "sessions" ? styles.active : ""}
                  onClick={() => setActiveSection("sessions")}
                >
                  SESSIONS
                </li>
                <li className={styles.subItem} onClick={() => setActiveSection("upcoming")}>
                  UPCOMING
                </li>
                <li className={styles.subItem} onClick={() => setActiveSection("history")}>
                  HISTORY
                </li>
                <li
                  className={activeSection === "payment" ? styles.active : ""}
                  onClick={() => setActiveSection("payment")}
                >
                  PAYMENT HISTORY
                </li>
                <li className={activeSection === "edit" ? styles.active : ""} onClick={() => setActiveSection("edit")}>
                  EDIT ACCOUNT
                </li>
                <li
                  className={activeSection === "logout" ? styles.active : ""}
                  onClick={() => setActiveSection("logout")}
                >
                  LOGOUT
                </li>
              </ul>
            </nav>
          </div>

          {/* Right content area - changes based on active section */}
          <div className={styles.content}>
            {activeSection === "info" && (
              <div className={styles.userInfo}>
                <div className={styles.profileSection}>
                  <div className={styles.profileImage}>
                    <Image
                      src="/profile-image.jpg"
                      alt="Profile"
                      width={140}
                      height={140}
                      className={styles.profileImg}
                    />
                  </div>
                  <div className={styles.profileDetails}>
                    <h2 className={styles.userName}>JOHN FLEX</h2>
                    <div className={styles.location}>
                      <span className={styles.flag}>🇱🇧</span> Ashrafieh, Lebanon
                    </div>
                    <div className={styles.editButton}>
                      <button className={styles.editProfileBtn}>
                        <span className={styles.editIcon}>✏️</span> Edit Profile
                      </button>
                    </div>
                  </div>
                </div>

                <div className={styles.contactInfo}>
                  <div className={styles.infoItem}>
                    <h3>EMAIL</h3>
                    <p>john.flex@gmail.com</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h3>PHONE NUMBER</h3>
                    <p>+961 71 509 348</p>
                  </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.statsContainer}>
                  <div className={styles.milestonesSection}>
                    <h3>PERSONAL MILESTONES</h3>
                    <div className={styles.milestone}>
                      <h4>First Session</h4>
                      <p>22/1/2025</p>
                    </div>
                    <div className={styles.milestone}>
                      <h4>Most Recent Session</h4>
                      <p>20/2/2025</p>
                    </div>
                  </div>

                  <div className={styles.statsSection}>
                    <h3>STATS & NUMBERS</h3>
                    <div className={styles.stat}>
                      <h4>Time Spent Stretching</h4>
                      <p>680 Minutes</p>
                    </div>
                    <div className={styles.stat}>
                      <h4>Favourite Flex</h4>
                      <p>Flex Tete (4 sessions)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "sessions" && (
              <div className={styles.sessionsContainer}>
                <div className={styles.sessionsList}>
                  <div className={styles.sessionItem}>
                    <h3>FLEX TETE SESSION</h3>
                    <button className={styles.moreInfoBtn}>
                      <span className={styles.editIcon}>✏️</span> Edit
                    </button>
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
                  <div className={styles.sessionItem}>
                    <h3>FLEX TETE SESSION</h3>
                    <button className={styles.moreInfoBtn}>More Info +</button>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "payment" && (
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
            )}

            {activeSection === "edit" && (
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
            )}

            {activeSection === "logout" && (
              <div className={styles.logoutContainer}>
                <h2 className={styles.logoutTitle}>LOGOUT.</h2>
                <p className={styles.logoutText}>Are you sure you want to log out of your Flex Studio account?</p>
                <div className={styles.logoutButtons}>
                  <button className={styles.yesButton}>YES</button>
                  <button className={styles.noButton}>NO</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

