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
            <h2>Need our help ?</h2>
            <p> Hubungi kami kapan saja, dimana saja kami siap membantu</p>
          </div>
          <a className={`${styles["cta-cta"]} btn`} href='https://api.whatsapp.com/send?phone=62895354900000&text=Halo%20saya%20ingin%20membuat%20website%20atau%20aplikasi%20mobile%20app%20untuk%20bisnis%20saya'>
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
