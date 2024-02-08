import React from "react";

import styles from "./AboutUs.module.css";
import Image from "next/image";
import Link from "next/link";

// TODO: find more content for this page
function AboutUs() {
  return (
    <div className={styles.about} id='tentang-kami'>
      <div className={styles["about-background"]}>
        <div className='section'>
          <div className={`${styles["about-wrapper"]}`}>
            <div className={styles["about-image"]}>
              <Image src='/about-sketch.jpg' alt='About' width={480} height={360} />
            </div>
            <div className={styles["about-content"]}>
              <h2 className={styles["about-title"]}>PERENCANAAN DARI PEDOMAN DESAIN</h2>
              <p className={styles["about-description"]}>
                Preliminary design yang kami lakukan salah satunya adalah memberikan konsep desain berupa sketsa desain yang nantinya akan menjadi proses proses untuk mendapatkan proporsi bangunan, tata letak ruang, vegetasi ruang luar dan sirkulasi.
              </p>
              <div className={styles["about-stat"]}>
                <p className='h2'>20+</p>
                <span>PROFESSIONAL PROJECT</span>
              </div>
              <Link className={`${styles["about-cta"]} btn`} href='#portfolio'>
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
