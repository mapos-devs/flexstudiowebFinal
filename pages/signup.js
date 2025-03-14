"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Flex.module.css";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real app, you would send this data to your server
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bIzEu8udqCRgwOergMPiJ45lmJ8GAy.png"
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
        <div className={styles.authContainer}>
          <div className={styles.authLeft}>
            <h1 className={styles.authTitle}>SIGN UP.</h1>
            <div className={styles.titleUnderline}></div>
            <p className={styles.authSubtitle}>Welcome to life</p>
          </div>

          <div className={styles.authRight}>
            <form onSubmit={handleSubmit} className={styles.authForm}>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
                className={styles.authInput}
                required
              />

              <div className={styles.nameInputs}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={styles.authInput}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={styles.authInput}
                  required
                />
              </div>

              <input
                type="text"
                name="username"
                placeholder="Create Username"
                value={formData.username}
                onChange={handleChange}
                className={styles.authInput}
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Create Password"
                value={formData.password}
                onChange={handleChange}
                className={styles.authInput}
                required
              />

              <p className={styles.termsText}>
                By signing up you agree to our{" "}
                <Link href="/terms" className={styles.termsLink}>
                  Terms & Conditions
                </Link>
                .
              </p>

              <button type="submit" className={styles.authButton}>
                CREATE ACCOUNT
              </button>

              <p className={styles.authToggle}>
                Already have an account?{" "}
                <Link href="/login" className={styles.authToggleLink}>
                  Log in
                </Link>
                .
              </p>
            </form>

            <div className={styles.qrCodeContainer}>
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="QR Code"
                width={100}
                height={100}
              />
              <p className={styles.qrText}>Scan to get the app</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
