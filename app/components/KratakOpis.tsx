import React from "react";
import styles from "../../public/css/kratakOpis.module.css";
import Image from "next/image";
export default function KratakOpis() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Lorem, ipsum.</h2>
        <div className={styles.p}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            quasi, libero, soluta nemo corporis eligendi numquam mollitia quo
            reiciendis amet excepturi deserunt. Nemo omnis minima quam explicabo
            fugiat iusto magni.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            quasi, libero, soluta nemo corporis eligendi numquam mollitia quo
            reiciendis amet excepturi deserunt. Nemo omnis minima quam explicabo
            fugiat iusto magni.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            quasi, libero, soluta nemo corporis eligendi numquam mollitia quo
            reiciendis amet excepturi deserunt. Nemo omnis minima quam explicabo
            fugiat iusto magni.
          </p>
        </div>
        <Image
          src={"/imgs/pocetna.jpeg"}
          width={1000}
          height={1000}
          alt="image"
        ></Image>
      </div>
      <div className={styles.container}>
        <h2>Lorem, ipsum.</h2>
        <div className={styles.p}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            quasi, libero, soluta nemo corporis eligendi numquam mollitia quo
            reiciendis amet excepturi deserunt. Nemo omnis minima quam explicabo
            fugiat iusto magni.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            quasi, libero, soluta nemo corporis eligendi numquam mollitia quo
            reiciendis amet excepturi deserunt. Nemo omnis minima quam explicabo
            fugiat iusto magni.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            quasi, libero, soluta nemo corporis eligendi numquam mollitia quo
            reiciendis amet excepturi deserunt. Nemo omnis minima quam explicabo
            fugiat iusto magni.
          </p>
        </div>
        <Image
          src={"/imgs/pocetna.jpeg"}
          width={1000}
          height={1000}
          alt="image"
        ></Image>
      </div>
    </div>
  );
}
