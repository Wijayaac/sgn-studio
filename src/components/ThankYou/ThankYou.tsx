"use client";
import React, { useEffect } from "react";

import styles from "./ThankYou.module.css";
import Link from "next/link";

function ThankYou() {
  useEffect(() => {
    document.body.classList.add("confirmation-page");
    return () => {
      document.body.classList.remove("confirmation-page");
    };
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <h1>Terima Kasih!</h1>
        <p>Kami akan segera menghubungi anda</p>
        <Link href='/' className='btn'>
          Kembali ke halaman utama
        </Link>
      </div>
    </div>
  );
}

export default ThankYou;
