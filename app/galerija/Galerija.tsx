import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../public/css/grid.module.css";

export default function Galerija() {
  return (
    <div className={styles.galerija}>
      <div className={styles.slika}>
        <Image
          src="/imgs/pocetna.jpeg"
          alt=""
          width={3400}
          height={3400}
        ></Image>
        <h1>Najveci Izbor u Srbiji</h1>
      </div>
      <div className={styles.predGrid}>
        <h2>Nasa Galerija</h2>
        <div className={styles.searchBar}>
          <div className={styles.filter}>
            <Image
              src={"/svgs/options.svg"}
              alt="filter"
              width={50}
              height={50}
            ></Image>
          </div>
          <input type="text" placeholder="Stolice, Stolovi, Namestaj..." />
          <Image
            className={styles.search}
            src={"/svgs/search.svg"}
            alt="filter"
            width={50}
            height={50}
          ></Image>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.container}>
          <Image
            src="/imgs/pocetna.jpeg"
            alt=""
            width={400}
            height={250}
          ></Image>
          <h4>Fotelja</h4>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
        <div className={styles.container}>
          <Link href="">
            <Image
              src="/imgs/pocetna.jpeg"
              alt=""
              width={300}
              height={300}
            ></Image>
            <h4>Fotelja</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
