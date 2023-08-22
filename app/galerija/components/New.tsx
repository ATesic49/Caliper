"use client";
import React, { useState } from "react";
import styles from "../../../public/css/grid.module.css";
export default function New() {
  const [state, SetState] = useState(styles.not);
  return (
    <>
      <div className={styles.createNew}>
        <p onClick={() => SetState(styles.yes)}>+</p>
      </div>
      <div className={[styles.modal, state].join(" ")}>
        <h3>Unesite podatke proizvoda:</h3>
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
          <button
            onClick={() => {
              SetState(styles.not);
            }}
          >
            Cancle
          </button>
          <button>Save changes</button>
        </div>
      </div>
      <div
        className={[styles.outlay, state].join(" ")}
        onClick={() => {
          SetState(styles.not);
        }}
      ></div>
    </>
  );
}
