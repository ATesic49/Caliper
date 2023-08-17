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
        <label htmlFor="name">Ime:</label>
        <input type="text" name="name" />
        <label htmlFor="slika">Slika</label>
        <input type="text" name="slika" />
        <label htmlFor="deskripcija">Deskripcija</label>
        <textarea name="deskripcija"></textarea>
      </div>
    </>
  );
}
