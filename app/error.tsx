"use client";
import Image from "next/image";
import styles from "../public/css/error.module.css";
export default function Error({ error }: { error: Error }) {
  return (
    <div className={styles.error}>
      <Image src="/svgs/error.svg" width={500} height={500} alt="error"></Image>
      <div>
        <h1>Greska</h1>
        <p>{error.message}</p>
      </div>
    </div>
  );
}
