"use client";
import Image from "next/image";
import styles from "../public/css/error.module.css";
export default function Error() {
  return (
    <div className={styles.error}>
      <Image src="/svgs/error.svg" width={500} height={500} alt="error"></Image>
      <div>
        <h1>Greska</h1>
        <p>Proizvod nije pronadjen </p>
        <h2>Status: 404</h2>
      </div>
    </div>
  );
}
