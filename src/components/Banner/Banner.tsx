import React from "react";

import styles from "./Banner.module.css";
import Image from "next/image";
import Link from "next/link";

// Change the image and content
function Banner() {
  return (
    <div className={styles.banner}>
      <Image src='/banner.jpg' alt='Banner' width={1920} height={1080} className={styles["banner-image"]} />
      <div className={`${styles["banner-wrapper"]} section`}>
        <div className={styles["banner-content"]}>
          <h1 className={styles["banner-title"]}>
            Konsep bergaya
            <br />
            Natural dan Kontemporer
          </h1>
          <p className={styles["banner-description"]}>
            Konsep desain bergaya <span>NATURAL </span> dan <span>KONTEMPORER</span> Berfokus pada <span>KEHARMONISAN</span>
          </p>
          <a className={styles["banner-cta"]} href='#portfolio'>
            Lihat Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
