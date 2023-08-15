import React from "react";
import styles from "../../public/css/izbor.module.css";
import Image from "next/image";
export default function Izbor() {
  return (
    <div className={styles.izbor}>
      <h2>Lorem, ipsum dolor.</h2>
      <div className={styles.container}>
        <div className={styles.box}>
          <Image
            src={"/svgs/gallery.svg"}
            width={100}
            height={100}
            alt="gallery"
          ></Image>
          <h4>Galerija</h4>
        </div>
        <div className={styles.box}>
          <Image
            src={"/svgs/gallery.svg"}
            width={100}
            height={100}
            alt="gallery"
          ></Image>
          <h4>Galerija</h4>
        </div>
        <div className={styles.box}>
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
