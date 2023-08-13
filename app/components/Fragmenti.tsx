import Image from "next/image";
import React from "react";
import styles from "../../public/css/fragmenti.module.css";
export default function Fragmenti() {
  return (
    <div className={styles.fragment}>
      <div className={styles.container}>
        <h3>Lorem Ipsum</h3>
        <div className={styles.ispod}>
          <Image src="/imgs/pocetna.jpeg" alt="assss" width={20} height={20} />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            adipisci corporis eveniet aliquid in. Aspernatur libero eveniet
            alias enim non at, repellendus sunt maxime et cum veniam eos porro
            ea corrupti.
          </p>
        </div>
      </div>
    </div>
  );
}
