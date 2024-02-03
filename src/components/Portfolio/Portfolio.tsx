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
            <h3>Project 1</h3>
            <p>Deskripsi project 1</p>
          </div>
        </div>
      </div>
      <div className={styles["portfolio-item"]}>
        <Image width={720} height={480} src='/portfolios/denpasar-main.png' alt='portfolio' />
        <div className={styles["portfolio-text"]}>
          <div>
            <h3>Project 2</h3>
            <p>Deskripsi project 2</p>
          </div>
        </div>
      </div>
      <div className={styles["portfolio-item"]}>
        <Image width={720} height={480} src='/portfolios/jembrana-main.png' alt='portfolio' />
        <div className={styles["portfolio-text"]}>
          <div>
            <h3>Project 3</h3>
            <p>Deskripsi project 3</p>
          </div>
        </div>
      </div>
      <div className={styles["portfolio-item"]}>
        <Image width={720} height={480} src='/portfolios/mengwi-main.png' alt='portfolio' />
        <div className={styles["portfolio-text"]}>
          <div>
            <h3>Project 4</h3>
            <p>Deskripsi project 4</p>
          </div>
        </div>
      </div>
      <div className={styles["portfolio-item"]}>
        <Image width={720} height={480} src='/portfolios/pecatu-main.png' alt='portfolio' />
        <div className={styles["portfolio-text"]}>
          <div>
            <h3>Project 5</h3>
            <p>Deskripsi project 5</p>
          </div>
        </div>
      </div>
      <div className={styles["portfolio-item"]}>
        <Image width={720} height={480} src='/portfolios/surabaya-main.png' alt='portfolio' />
        <div className={styles["portfolio-text"]}>
          <div>
            <h3>Project 6</h3>
            <p>Deskripsi project 6</p>
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
        <h2>Portfolio pilihan</h2>
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