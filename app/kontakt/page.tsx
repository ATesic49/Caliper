import React from "react";
import Link from "next/link";

import styles from "../../public/css/kontakt.module.css";
import { Dr_Sugiyama } from "next/font/google";

export default function Kontakt() {
  return (
    <div className={styles.pocetak}>
      <form className={styles.form}>
        <h1>Posaljite nam Mail</h1>
        <input
          type="text"
          name="ime"
          id=""
          placeholder="Ime"
          className={styles.input}
        ></input>
        <input
          type="text"
          name="prezime"
          id=""
          placeholder="Prezime"
          className={styles.input}
        ></input>
        <input
          type="phone"
          name="broj"
          id=""
          placeholder="+381"
          className={styles.input}
        ></input>
        <input
          type="email"
          name="ime"
          id="email"
          placeholder="Email"
          className={styles.input}
        ></input>
        <textarea
          name="poruka"
          id=""
          cols={30}
          rows={10}
          placeholder="Napisite Poruku Ovde"
          className={styles.textarea}
        ></textarea>
        <button type="submit" className={styles.dugme}>
          Send
        </button>
      </form>

      <div className={styles.seperator}></div>
      <div className={styles.druga}>
        <h1>Pozovite Nas</h1>

        <Link href="tel:+1234567890" className={styles.telefon}>
          064 1133 092
        </Link>
        <Link href="viber://contact?number=%2B381644737375">0644737375</Link>
        <Link href="https://wa.me/381644737375">0644737375</Link>
      </div>
    </div>
  );
}
