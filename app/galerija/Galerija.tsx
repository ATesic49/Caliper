import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../public/css/grid.module.css";

export default function Slike() {
  return (
    <div className={styles.pocetak}>
      <h1>Galerija</h1>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <Link href="/">
            <Image src="/imgs/pocetna.jpeg" alt="" width={420} height={400} />
          </Link>
        </div>
        <div className={styles.gridItem}>
          <Link href="/">
            <Image src="/imgs/pocetna.jpeg" alt="" width={420} height={400} />
          </Link>
        </div>
        <div className={styles.gridItem}>
          <Link href="/">
            <Image src="/imgs/pocetna.jpeg" alt="" width={420} height={400} />
          </Link>
        </div>
        <div className={styles.gridItem}>
          <Link href="/">
            <Image src="/imgs/pocetna.jpeg" alt="" width={420} height={400} />
          </Link>
        </div>
        <div className={styles.gridItem}>
          <Link href="/">
            <Image src="/imgs/pocetna.jpeg" alt="" width={420} height={400} />
          </Link>
        </div>
        <div className={styles.gridItem}>
          <Link href="/">
            <Image src="/imgs/pocetna.jpeg" alt="" width={420} height={400} />
          </Link>
        </div>
        <div className={styles.gridItem}>
          <Link href="/">
            <Image src="/imgs/pocetna.jpeg" alt="" width={420} height={400} />
          </Link>
        </div>
        <div className={styles.gridItem}>
          <Link href="/">
            <Image src="/imgs/pocetna.jpeg" alt="" width={420} height={400} />
          </Link>
        </div>
        <div className={styles.gridItem}>
          <Link href="/">
            <Image src="/imgs/pocetna.jpeg" alt="" width={420} height={400} />
          </Link>
        </div>
        <div className={styles.gridItem}>
          <Link href="/">
            <Image src="/imgs/pocetna.jpeg" alt="" width={420} height={400} />
          </Link>
        </div>
        <div className={styles.gridItem}>
          <Link href="/">
            <Image src="/imgs/pocetna.jpeg" alt="" width={420} height={400} />
          </Link>
        </div>
        <div className={styles.gridItem}>
          <Link href="/">
            <Image src="/imgs/pocetna.jpeg" alt="" width={420} height={400} />
          </Link>
        </div>
        <div className={styles.gridItem}>
          <Link href="/">
            <Image src="/imgs/pocetna.jpeg" alt="" width={420} height={400} />
          </Link>
        </div>
        <div className={styles.gridItem}>
          <Link href="/">
            <Image src="/imgs/pocetna.jpeg" alt="" width={420} height={400} />
          </Link>
        </div>
        <div className={styles.gridItem}>
          <Link href="/">
            <Image src="/imgs/pocetna.jpeg" alt="" width={420} height={400} />
          </Link>
        </div>
        h
      </div>
    </div>
  );
}
