import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import AboutUs from "@/components/AboutUs";
import CallToAction from "@/components/CallToAction";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <AboutUs />
      <Portfolio />
      <CallToAction />
    </main>
  );
}
