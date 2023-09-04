"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../../../public/css/grid.module.css";
import axios from "axios";
export default function New() {
  const [state, SetState] = useState(styles.not);
  const [name, setName] = useState<string>("name");
  const [description, setDescription] = useState<string>("name");
  const [boje, setBoje] = useState<string[]>([]);
  const [image, SetImage] = useState<string>('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

 
    try {
      console.log(name);
      console.log("data");
      const res = await axios.post("api/galerija/create", {
        name,
        description,
        boje,
        image
      });
      console.log(res)
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
          {/* <div>
            <label htmlFor="file">Izaberi sliku:</label>
            <input
              type="file"
              name="file"
              onChange={(e) => {
                setFile(e.target.files?.[0]);
              }}
            />
          </div> */}

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
            <label htmlFor="boje">Izaberi boju:</label>

            <select
              multiple
              name="boje"
              id=""
              onChange={(e) => {
                const selectedValues = Array.from(e.target.options)
                  .filter((o) => o.selected)
                  .map((o) => o.value);
                console.log(selectedValues.toString().split(","));
                console.log(e.target.options[0].value);
                setBoje(selectedValues);
              }}
            >
              <option value={"plavaBojaNamestaj"}>Plava</option>
              <option value={"crvenaBojaNamestaj"}>Crvena</option>
              <option value={"rozeBojaNamestaj"}>Roze</option>
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
            <button
              type="submit"
              onClick={() => {
                SetState(styles.not);
              }}
            >
              Save changes
            </button>
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
