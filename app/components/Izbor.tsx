"use client";
import React from "react";
import styles from "../../public/css/izbor.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Izbor() {
  const router = useRouter();
  return (
    <div className={styles.izbor}>
      <h2>Lorem, ipsum dolor.</h2>
      <div className={styles.container}>
        <div
          className={styles.box}
          onClick={() => {
            router.push("/dizajnerske-rucice");
          }}
        >
          <div></div>
          <Image
            className={styles.image}
            src={"/imgs/pocetna.jpeg"}
            width={500}
            height={500}
            alt="background"
          />
          <Image
            src={"/svgs/rucice.svg"}
            width={100}
            height={100}
            alt="rucice"
          ></Image>
          <h4>Dizajnerske Rucice</h4>
        </div>
        <div
          className={styles.box}
          onClick={() => {
            router.push("/web-shop");
          }}
        >
          <div></div>
          <Image
            className={styles.image}
            src={"/imgs/pocetna.jpeg"}
            width={500}
            height={500}
            alt="background"
          />
          <Image
            src={"/svgs/webShop.svg"}
            width={100}
            height={100}
            alt="webShop"
          ></Image>
          <h4>Web Shop</h4>
        </div>
        <div
          className={styles.box}
          onClick={() => {
            router.push("/galerija");
          }}
        >
          <div></div>
          <Image
            className={styles.image}
            src={"/imgs/pocetna.jpeg"}
            width={500}
            height={500}
            alt="background"
          />
          <Image
            src={"/svgs/gallery.svg"}
            width={100}
            height={100}
            alt="gallery"
          ></Image>
          <h4>Galerija</h4>
        </div>
      </div>
    </div>
  );
}
