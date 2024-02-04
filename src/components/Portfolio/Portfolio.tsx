import React from "react";

import Image from "next/image";

import styles from "./Portfolio.module.css";
// TODO: update image to be the actual image, migh be using json and read data from it

function Portfolio() {
  return (
    <div className={styles.portfolio} id='portfolio'>
      <div className={styles["portfolio-wrapper"]}>
        <Header />
        <Portfolios />
      </div>
    </div>
  );
}

function Portfolios() {
  return (
    <div className={styles["portfolio-list"]}>
      <div className={styles["portfolio-item"]}>
        <Image width={720} height={480} src='/portfolios/canggu-main.png' alt='portfolio' />
        <div className={styles["portfolio-text"]}>
          <div>
            <h3>Canggu - Bali</h3>
            <p>Project Kolaborasi</p>
          </div>
        </div>
      </div>
      <div className={styles["portfolio-item"]}>
        <Image width={720} height={480} src='/portfolios/denpasar-main.png' alt='portfolio' />
        <div className={styles["portfolio-text"]}>
          <div>
            <h3>Denpasar – Bali</h3>
            <p>Project Individual</p>
          </div>
        </div>
      </div>
      <div className={styles["portfolio-item"]}>
        <Image width={720} height={480} src='/portfolios/jembrana-main.png' alt='portfolio' />
        <div className={styles["portfolio-text"]}>
          <div>
            <h3>Jembrana – Bali</h3>
            <p>Project Individual</p>
          </div>
        </div>
      </div>
      <div className={styles["portfolio-item"]}>
        <Image width={720} height={480} src='/portfolios/mengwi-main.png' alt='portfolio' />
        <div className={styles["portfolio-text"]}>
          <div>
            <h3>Mengwi – Bali</h3>
            <p>Project Individual </p>
          </div>
        </div>
      </div>
      <div className={styles["portfolio-item"]}>
        <Image width={720} height={480} src='/portfolios/canggu-villa-2.jpeg' alt='portfolio' />
        <div className={styles["portfolio-text"]}>
          <div>
            <h3>Canggu - Villa </h3>
            <p>Project Individual</p>
          </div>
        </div>
      </div>
      <div className={styles["portfolio-item"]}>
        <Image width={720} height={480} src='/portfolios/canggu-villa-1.jpeg' alt='portfolio' />
        <div className={styles["portfolio-text"]}>
          <div>
            <h3>Canggu - Villa</h3>
            <p>Project Individual</p>
          </div>
        </div>
      </div>
      <div className={styles["portfolio-item"]}>
        <Image width={720} height={480} src='/portfolios/canggu-main-2.png' alt='portfolio' />
        <div className={styles["portfolio-text"]}>
          <div>
            <h3>Canggu – Bali</h3>
            <p>Project Kolaborasi</p>
          </div>
        </div>
      </div>
      <div className={styles["portfolio-item"]}>
        <Image width={720} height={480} src='/portfolios/kerobokan-main.png' alt='portfolio' />
        <div className={styles["portfolio-text"]}>
          <div>
            <h3>Kerobokan – Bali</h3>
            <p>Project Individual</p>
          </div>
        </div>
      </div>
      <div className={styles["portfolio-item"]}>
        <Image width={720} height={480} src='/portfolios/denpasar-backyard.jpeg' alt='portfolio' />
        <div className={styles["portfolio-text"]}>
          <div>
            <h3>Denpasar – Backyard</h3>
            <p>Project Individual</p>
          </div>
        </div>
      </div>
    </div>
  );
}
// TODO: add ability to filter the portfolio
function Header() {
  return (
    <div className={styles["portfolio-header"]}>
      <div>
        <h2>Portfolio</h2>
        <p>Kami sudah mengerjakan banyak project yang dapat menjadi inspirasi anda</p>
      </div>
      <ul className={styles["portfolio-action"]}>
        <li>
          <a href='#'>Semua</a>
        </li>
        <li>
          <a href='#'>3D Modeling</a>
        </li>
        <li>
          <a href='#'>Arsitektur</a>
        </li>
        <li>
          <a href='#'>Buildings</a>
        </li>
        <li>
          <a href='#'>Taman</a>
        </li>
        <li>
          <a href='#'>Interior</a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
