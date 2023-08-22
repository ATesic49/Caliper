"use client";
import React, { useState } from "react";
import styles from "../../../public/css/grid.module.css";
export default function New() {
  return (
    <>
      <div className={styles.createNew}>
        <p>+</p>
      </div>
      <div className={styles.modal}>
        <h3>Unesite podatke proizvoda</h3>
        <div>
          <label htmlFor="name">Ime:</label>

          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="slika">Slika:</label>
          <input type="text" name="slika" />
        </div>

        <div>
          <label htmlFor="deskripcija">Deskripcija:</label>

          <textarea name="deskripcija"></textarea>
        </div>

        <div className={styles.doleSkroz}>
          <button>Cancle</button>
          <button>Save changes</button>
        </div>
      </div>
      <div className={styles.outlay}></div>
    </>
  );
}
