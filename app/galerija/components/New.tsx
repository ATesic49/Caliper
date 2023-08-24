"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../../../public/css/grid.module.css";
export default function New() {
  const [state, SetState] = useState(styles.not);
  const [file, setFile] = useState<File | undefined>();
  const [name, setName] = useState<string>("name");
  const [descriprion, setDescription] = useState<string>("name");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    const data = new FormData();
    await data.append("file", file);
    await data.append("ime", name);
    await data.append("deskripcija", descriprion);

    try {
      console.log(name);
      console.log("data");
      const res = await fetch("/api/galerija/upload", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error(await res.text());
    } catch (e: any) {
      console.error(e);
    }
  };
  return (
    <>
      <div className={styles.createNew}>
        <p onClick={() => SetState(styles.yes)}>+</p>
      </div>
      <form onSubmit={onSubmit}>
        <div className={[styles.modal, state].join(" ")}>
          <h3>Unesite podatke proizvoda:</h3>
          <div>
            <label htmlFor="name">Ime:</label>

            <input
              minLength={2}
              type="text"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="file"
              name="file"
              onChange={(e) => {
                setFile(e.target.files?.[0]);
              }}
            />
          </div>

          <div>
            <label htmlFor="deskripcija">Deskripcija:</label>

            <textarea
              name="deskripcija"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <div>
            <select name="boje" id="">
              <label htmlFor="boje">Izaberi boju:</label>
              <option value={styles.plava}>Plava</option>
              <option value={styles.crvena}>Crvena</option>
            </select>
          </div>
          <div className={styles.doleSkroz}>
            <button
              onClick={() => {
                SetState(styles.not);
              }}
            >
              Cancle
            </button>
            <button type="submit">Save changes</button>
          </div>
        </div>
      </form>
      <div
        className={[styles.outlay, state].join(" ")}
        onClick={() => {
          SetState(styles.not);
        }}
      ></div>
    </>
  );
}
