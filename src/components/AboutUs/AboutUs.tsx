import React from "react";

import styles from "./AboutUs.module.css";
import Image from "next/image";
import Link from "next/link";

function AboutUs() {
  return (
    <div className={styles.about}>
      <div className={styles["about-background"]}>
        <div className='section'>
          <div className={`${styles["about-wrapper"]}`}>
            <div className={styles["about-image"]}>
              <Image src='/sketch.jpg' alt='About' width={480} height={360} />
            </div>
            <div className={styles["about-content"]}>
              <h2 className={styles["about-title"]}>We Create Digital Experience</h2>
              <p className={styles["about-description"]}>Located on King’s Road in the heart of chic and high-end Chelsea, we've designed the first Sticks 'N' Sushi restaurant in London.</p>
              <div className={styles["about-stat"]}>
                <p className='h2'>20+</p>
                <span>houses build in europe</span>
              </div>
              <Link className={`${styles["about-cta"]} btn`} href='/portfolio'>
                view our portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
