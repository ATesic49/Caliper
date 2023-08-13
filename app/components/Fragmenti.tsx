import Image from "next/image";
import React from "react";
import styles from "../../public/css/fragmenti.module.css";
import Link from "next/link";
export default function Fragmenti() {
  return (
    <div className={styles.fragment}>
      <div className={styles.container}>
        <h3>Lorem Ipsum</h3>
        <div className={styles.ispod}>
          <img src="/imgs/pocetna.jpeg" alt="assss" />
          <div className={styles.p}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              vitae labore odio veritatis nulla esse, quia, culpa autem,
              possimus fugiat non temporibus libero ab sequi? Saepe aliquid,
              architecto perferendis eos laboriosam eius, in quasi, similique
              atque odit voluptatibus nulla enim unde. Explicabo sed optio
              pariatur, nam aut id suscipit quo dolorum dignissimos officia
              quae, repellat, minima voluptas tenetur enim molestias libero hic
              qui exercitationem iure alias?
            </p>
            <Link rel="stylesheet" href="/">
              Detalnije
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
