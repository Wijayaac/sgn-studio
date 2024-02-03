import React from "react";

import styles from "./Footer.module.css";
import Image from "next/image";
import SocialIcon from "../SocialIcon";

// TODO: update logo
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-wrapper"]}>
        <div className={styles["column"]}>
          <div className={styles["footer__logo"]}>
            <Image src='/logo-footer.png' width={240} height={80} alt='logo' />
          </div>
          <div className={styles["footer__text"]}>
            <p>© {year} Your Company</p>
          </div>
        </div>
        <div className={`${styles["column"]} ${styles["column--wider"]}`}>
          <p className='h4'>Alamat</p>
          <p>Jalan Pidada Tengah Gang 2 No. 1 Denpasar Utara </p>
        </div>
        <div className={styles["column"]}>
          <p className='h4'>Kontak</p>
          <p>TEL. +62 812 393 61110 </p>
          <SocialIcon />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
