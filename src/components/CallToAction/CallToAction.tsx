import Image from "next/image";
import React from "react";

import styles from "./CallToAction.module.css";

// TODO: update the heading content and phone number
function CallToAction() {
  return (
    <div className={styles.cta}>
      <Image src='/cta.jpg' alt='Banner' width={1920} height={480} className={styles["cta-image"]} />
      <div className='section'>
        <div className={styles["cta-wrapper"]}>
          <div className={styles["cta-text"]}>
            <h2>Butuh konsultasi dahulu ?</h2>
            <p> Hubungi kami kapan saja, kami siap membantu</p>
          </div>
          <a className={`${styles["cta-cta"]} btn`} target='_blank' href='https://api.whatsapp.com/send/?phone=6281239361110&text&type=phone_number&app_absent=0'>
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
